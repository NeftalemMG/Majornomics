import { useState, useEffect } from "react";
import { Input } from "./ui/input";
import {
  SketchyCapIcon,
  SketchyMoneyIcon,
  SketchyBadgeIcon,
  SketchyLocationIcon,
  SketchyTrendIcon,
} from "./icons/SketchyIcons";

interface BackendProgram {
  programName: string;
  degreeType: string;
  tuition: number;
  generalCosts: number;
  userRating: number;
  averageSalaryExpectations: Array<{
    averageSalary: number;
    careerStage: string;
  }>;
  admissionRequirements: Array<{ gpa: number }>;
  programDuration: string;
  numberOfSemesters: number;
  futureRoles: string[];
  courses: Array<{
    courseName: string;
    semester: number;
    credits: number;
    courseType: string;
  }>;
  redditReviews: string[];
  universityName: string;
  location: string;
  qsWorldRanking: number;
}

interface RecommendedProgram {
  programName: string;
  degreeType: string;
  university: string;
  location: string;
  ranking: number;
  tuition: number;
  generalCosts: number;
  salary: number;
  gpa: number;
  duration: string;
  semesters: number;
  futureRoles: string[];
  courses: Array<{
    courseName: string;
    semester: number;
    credits: number;
    courseType: string;
  }>;
  reviews: string[];
  userRating: number;
}

interface SearchContext {
  programName: string;
  degreeType: string;
  universityName: string;
  timestamp: string;
}

export function Recommendations({
  searchedWord,
  setSearchedWord,
}: {
  searchedWord: string;
  setSearchedWord: (val: string) => void;
}) {
  const [selectedCriterion, setSelectedCriterion] = useState<
    "prestige" | "budget" | "rating"
  >("rating");
  const [recommendations, setRecommendations] = useState<RecommendedProgram[]>(
    []
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchContext, setSearchContext] = useState<SearchContext | null>(
    null
  );

  const [isEditingPreference, setIsEditingPreference] = useState(false);
  const [editedProgramName, setEditedProgramName] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("lastSearchedProgram");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setSearchContext(parsed);
        setEditedProgramName(parsed.programName); // ← NEW: Initialize edit input
      } catch (e) {
        console.error("Failed to parse search context:", e);
      }
    }
  }, []);

  const fetchRecommendations = async (
    sortBy: "prestige" | "budget" | "rating"
  ) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "http://localhost:5000/api/recommendations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sortBy,
            query: searchedWord,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch recommendations: ${response.status}`);
      }

      const result = await response.json();

      let filteredPrograms = result.data;

      if (searchContext) {
        filteredPrograms = result.data.filter((program: BackendProgram) => {
          const programNameMatch = program.programName
            .toLowerCase()
            .includes(searchContext.programName.toLowerCase());
          const degreeTypeMatch =
            program.degreeType === searchContext.degreeType;

          const keywords = searchContext.programName.toLowerCase().split(" ");
          const hasKeywordMatch = keywords.some(
            (keyword) =>
              keyword.length > 3 &&
              program.programName.toLowerCase().includes(keyword)
          );

          return programNameMatch || degreeTypeMatch || hasKeywordMatch;
        });

        if (filteredPrograms.length === 0) {
          filteredPrograms = result.data;
        }
      }

      const transformedPrograms: RecommendedProgram[] = filteredPrograms.map(
        (program: BackendProgram) => ({
          programName: program.programName,
          degreeType: program.degreeType,
          university: program.universityName,
          location: program.location,
          ranking: program.qsWorldRanking,
          tuition: program.tuition,
          generalCosts: program.generalCosts,
          salary: program.averageSalaryExpectations[0]?.averageSalary || 0,
          gpa: program.admissionRequirements[0]?.gpa || 0,
          duration: program.programDuration,
          semesters: program.numberOfSemesters,
          futureRoles: program.futureRoles,
          courses: program.courses,
          reviews: program.redditReviews,
          userRating: program.userRating,
        })
      );

      setRecommendations(transformedPrograms.slice(0, 4));
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load recommendations"
      );
      console.error("Error fetching recommendations:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecommendations(selectedCriterion);
  }, [selectedCriterion, searchContext]);

  // ============================================================
  // FIXED: handleCriterionClick with console log for debugging
  // Lines 173-177
  // ============================================================
  const handleCriterionClick = (
    criterion: "prestige" | "budget" | "rating"
  ) => {
    console.log("Clicked:", criterion); // ← DEBUGGING
    console.log("Setting selectedCriterion to:", criterion); // ← DEBUGGING
    setSelectedCriterion(criterion);
  };

  const clearSearchContext = () => {
    localStorage.removeItem("lastSearchedProgram");
    setSearchContext(null);
  };

  // ============================================================
  // NEW: Save edited preference
  // Lines 187-200
  // ============================================================
  const saveEditedPreference = () => {
    if (editedProgramName.trim()) {
      const newContext: SearchContext = {
        programName: editedProgramName.trim(),
        degreeType: searchContext?.degreeType || "Bachelor",
        universityName: searchContext?.universityName || "",
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem("lastSearchedProgram", JSON.stringify(newContext));
      setSearchContext(newContext);
      setIsEditingPreference(false);
      // Refetch with new context
      fetchRecommendations(selectedCriterion);
    }
  };

  return (
    <div className="container mx-auto px-8 pb-20">
      {/* Header */}
      <div className="mb-12">
        <h1
          className="text-5xl mb-4 text-black tracking-tight"
          style={{ fontWeight: 700 }}
        >
          Recommended Programs for {searchedWord}
        </h1>

        {/* ============================================================
            MODIFIED: Search Context Banner with Edit Button
            Lines 213-269
            ============================================================ */}
        {searchContext && (
          <div className="mt-6">
            {!isEditingPreference ? (
              // ← DISPLAY MODE: Show context with edit button
              <div className="p-4 bg-blue-50 border-2 border-blue-200 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-slate-600">
                      <span className="text-slate-500">
                        Based on your search for:
                      </span>{" "}
                      <span className="text-black font-semibold">
                        {searchContext.programName}
                      </span>{" "}
                      <span className="text-slate-500">
                        ({searchContext.degreeType})
                      </span>
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Showing similar programs in this field
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {/* ← NEW: Edit Preference Button */}
                  <button
                    onClick={() => setIsEditingPreference(true)}
                    className="px-4 py-2 text-sm text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                    style={{ fontWeight: 600 }}
                  >
                    Edit Preference
                  </button>
                  <button
                    onClick={clearSearchContext}
                    className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                    style={{ fontWeight: 600 }}
                  >
                    Show All Programs
                  </button>
                </div>
              </div>
            ) : (
              // ← NEW: EDIT MODE: Show input to change preference
              <div className="p-6 bg-blue-50 border-2 border-blue-200 rounded-2xl">
                <h3
                  className="text-lg text-black mb-4"
                  style={{ fontWeight: 700 }}
                >
                  Edit Your Preference
                </h3>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <label className="text-sm text-slate-600 mb-2 block">
                      What program are you interested in?
                    </label>
                    <Input
                      type="text"
                      value={editedProgramName}
                      onChange={(e) => setEditedProgramName(e.target.value)}
                      placeholder="e.g., Computer Science, Business, Engineering..."
                      className="w-full px-4 py-3 text-base rounded-xl border-2 border-blue-300 focus:border-blue-500"
                    />
                  </div>
                  <div className="flex items-end gap-2">
                    <button
                      onClick={saveEditedPreference}
                      className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
                      style={{ fontWeight: 600 }}
                    >
                      Save
                    </button>
                    <button
                      onClick={() => {
                        setIsEditingPreference(false);
                        setEditedProgramName(searchContext.programName);
                      }}
                      className="px-6 py-3 bg-slate-200 text-slate-700 rounded-xl hover:bg-slate-300 transition-colors"
                      style={{ fontWeight: 600 }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <p className="text-xl text-slate-600 max-w-2xl mt-4">
          {searchContext
            ? "Recommendations tailored to your interests"
            : "Select your priority to get personalized recommendations"}
        </p>
      </div>

      {/* ============================================================
          FIXED: Selection Cards - Debugging className application
          Lines 290-424
          ============================================================ */}
      <div className="mb-12">
        <h2
          className="text-2xl mb-6 text-black tracking-tight"
          style={{ fontWeight: 700 }}
        >
          What matters most to you?
        </h2>

        <div className="grid grid-cols-3 gap-6">
          {/* ============================================================
              PRESTIGE CARD - FIXED with explicit conditions
              Lines 302-344
              ============================================================ */}
          <button
            onClick={() => handleCriterionClick("prestige")}
            type="button"
            style={{
              // ← INLINE STYLES for guaranteed application
              border:
                selectedCriterion === "prestige"
                  ? "4px solid #8b5cf6"
                  : "4px solid #e2e8f0",
              backgroundColor:
                selectedCriterion === "prestige" ? "#faf5ff" : "#ffffff",
              transform:
                selectedCriterion === "prestige" ? "scale(1.05)" : "scale(1)",
              boxShadow:
                selectedCriterion === "prestige"
                  ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  : "none",
            }}
            className="p-8 rounded-3xl transition-all duration-300 text-left hover:shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                style={{
                  backgroundColor:
                    selectedCriterion === "prestige" ? "#8b5cf6" : "#e9d5ff",
                }}
                className="p-3 rounded-2xl"
              >
                <SketchyBadgeIcon
                  style={{
                    color:
                      selectedCriterion === "prestige" ? "#ffffff" : "#8b5cf6",
                  }}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-2xl text-black" style={{ fontWeight: 700 }}>
                Prestige
              </h3>
            </div>

            <p className="text-slate-600 text-base mb-4">
              Prioritize universities with the best QS world rankings and
              academic reputation.
            </p>

            {selectedCriterion === "prestige" && (
              <div
                className="flex items-center gap-2 text-purple-600"
                style={{ fontWeight: 600 }}
              >
                <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
                Selected
              </div>
            )}
          </button>

          {/* ============================================================
              BUDGET CARD - FIXED with explicit conditions
              Lines 346-388
              ============================================================ */}
          <button
            onClick={() => handleCriterionClick("budget")}
            type="button"
            style={{
              // ← INLINE STYLES for guaranteed application
              border:
                selectedCriterion === "budget"
                  ? "4px solid #22c55e"
                  : "4px solid #e2e8f0",
              backgroundColor:
                selectedCriterion === "budget" ? "#f0fdf4" : "#ffffff",
              transform:
                selectedCriterion === "budget" ? "scale(1.05)" : "scale(1)",
              boxShadow:
                selectedCriterion === "budget"
                  ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  : "none",
            }}
            className="p-8 rounded-3xl transition-all duration-300 text-left hover:shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                style={{
                  backgroundColor:
                    selectedCriterion === "budget" ? "#22c55e" : "#dcfce7",
                }}
                className="p-3 rounded-2xl"
              >
                <SketchyMoneyIcon
                  style={{
                    color:
                      selectedCriterion === "budget" ? "#ffffff" : "#22c55e",
                  }}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-2xl text-black" style={{ fontWeight: 700 }}>
                Budget
              </h3>
            </div>

            <p className="text-slate-600 text-base mb-4">
              Find the most affordable programs with the lowest tuition costs.
            </p>

            {selectedCriterion === "budget" && (
              <div
                className="flex items-center gap-2 text-green-600"
                style={{ fontWeight: 600 }}
              >
                <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                Selected
              </div>
            )}
          </button>

          {/* ============================================================
              RATING CARD - FIXED with explicit conditions
              Lines 390-432
              ============================================================ */}
          <button
            onClick={() => handleCriterionClick("rating")}
            type="button"
            style={{
              // ← INLINE STYLES for guaranteed application
              border:
                selectedCriterion === "rating"
                  ? "4px solid #3b82f6"
                  : "4px solid #e2e8f0",
              backgroundColor:
                selectedCriterion === "rating" ? "#eff6ff" : "#ffffff",
              transform:
                selectedCriterion === "rating" ? "scale(1.05)" : "scale(1)",
              boxShadow:
                selectedCriterion === "rating"
                  ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  : "none",
            }}
            className="p-8 rounded-3xl transition-all duration-300 text-left hover:shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                style={{
                  backgroundColor:
                    selectedCriterion === "rating" ? "#3b82f6" : "#dbeafe",
                }}
                className="p-3 rounded-2xl"
              >
                <SketchyCapIcon
                  style={{
                    color:
                      selectedCriterion === "rating" ? "#ffffff" : "#3b82f6",
                  }}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-2xl text-black" style={{ fontWeight: 700 }}>
                Ratings
              </h3>
            </div>

            <p className="text-slate-600 text-base mb-4">
              Choose programs with the highest student satisfaction and reviews.
            </p>

            {selectedCriterion === "rating" && (
              <div
                className="flex items-center gap-2 text-blue-600"
                style={{ fontWeight: 600 }}
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                Selected
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-20">
          <div className="inline-block w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-slate-600 text-lg">Loading recommendations...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="creative-card rounded-3xl p-8 mb-12 bg-red-50 border-2 border-red-200">
          <p className="text-red-600 text-lg" style={{ fontWeight: 600 }}>
            Error: {error}
          </p>
          <p className="text-red-500 text-sm mt-2">
            Make sure your backend is running at http://localhost:8000
          </p>
        </div>
      )}

      {/* Recommendations Display */}
      {!loading && !error && recommendations.length > 0 && (
        <div className="grid grid-cols-2 gap-8">
          {recommendations.map((program, idx) => (
            <div
              key={idx}
              className="creative-card rounded-3xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6 pb-4 border-b border-slate-100">
                <div className="flex-1">
                  <h3
                    className="text-2xl text-black mb-2 tracking-tight"
                    style={{ fontWeight: 700 }}
                  >
                    {program.programName}
                  </h3>
                  <p className="text-lg text-slate-600 mb-2">
                    {program.university}
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                      style={{ fontWeight: 600 }}
                    >
                      {program.degreeType}
                    </div>
                    <span className="text-sm text-slate-500">
                      {program.duration}
                    </span>
                  </div>
                </div>

                <div className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-full">
                  <span className="text-sm" style={{ fontWeight: 700 }}>
                    ⭐ {program.userRating}/10
                  </span>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-4 bg-slate-50 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <SketchyLocationIcon className="w-4 h-4 text-slate-400" />
                    <p className="text-xs text-slate-500">Location</p>
                  </div>
                  <p className="text-sm text-black" style={{ fontWeight: 600 }}>
                    {program.location}
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <SketchyBadgeIcon className="w-4 h-4 text-slate-400" />
                    <p className="text-xs text-slate-500">QS Ranking</p>
                  </div>
                  <p className="text-sm text-black" style={{ fontWeight: 600 }}>
                    #{program.ranking}
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <SketchyMoneyIcon className="w-4 h-4 text-slate-400" />
                    <p className="text-xs text-slate-500">Tuition</p>
                  </div>
                  <p className="text-sm text-black" style={{ fontWeight: 700 }}>
                    ${program.tuition.toLocaleString()}
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <SketchyCapIcon className="w-4 h-4 text-slate-400" />
                    <p className="text-xs text-slate-500">Avg Salary</p>
                  </div>
                  <p className="text-sm text-black" style={{ fontWeight: 700 }}>
                    ${program.salary.toLocaleString()}
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <SketchyBadgeIcon className="w-4 h-4 text-slate-400" />
                    <p className="text-xs text-slate-500">Min GPA</p>
                  </div>
                  <p className="text-sm text-black" style={{ fontWeight: 700 }}>
                    {program.gpa.toFixed(1)}
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <SketchyTrendIcon className="w-4 h-4 text-slate-400" />
                    <p className="text-xs text-slate-500">Semesters</p>
                  </div>
                  <p className="text-sm text-black" style={{ fontWeight: 700 }}>
                    {program.semesters}
                  </p>
                </div>
              </div>

              {/* Career Paths */}
              <div className="mb-4">
                <h5
                  className="text-sm text-slate-500 mb-2"
                  style={{ fontWeight: 600 }}
                >
                  Career Paths
                </h5>
                <div className="flex flex-wrap gap-2">
                  {program.futureRoles.map((role, rIdx) => (
                    <span
                      key={rIdx}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Courses */}
              <div className="mb-4">
                <h5
                  className="text-sm text-slate-500 mb-2"
                  style={{ fontWeight: 600 }}
                >
                  Sample Courses
                </h5>
                <div className="space-y-1.5">
                  {program.courses.slice(0, 3).map((course, cIdx) => (
                    <div
                      key={cIdx}
                      className="text-sm text-slate-600 leading-relaxed"
                    >
                      • {course.courseName} ({course.courseType})
                    </div>
                  ))}
                  {program.courses.length > 3 && (
                    <p className="text-xs text-slate-400">
                      +{program.courses.length - 3} more courses
                    </p>
                  )}
                </div>
              </div>

              {/* Reviews */}
              <div>
                <h5
                  className="text-sm text-slate-500 mb-2"
                  style={{ fontWeight: 600 }}
                >
                  Student Reviews
                </h5>
                <div className="space-y-2">
                  {program.reviews.map((review, revIdx) => (
                    <div key={revIdx} className="p-2 bg-slate-50 rounded-lg">
                      <div className="flex items-start gap-2">
                        <SketchyTrendIcon className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-slate-600 italic leading-relaxed">
                          "{review}"
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No Results */}
      {!loading && !error && recommendations.length === 0 && (
        <div className="text-center py-20">
          <p className="text-slate-600 text-lg">No recommendations found.</p>
          {searchContext && (
            <button
              onClick={clearSearchContext}
              className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
              style={{ fontWeight: 600 }}
            >
              Show All Programs
            </button>
          )}
        </div>
      )}
    </div>
  );
}
