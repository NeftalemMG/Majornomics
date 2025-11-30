import { useState, useEffect, use } from "react";
import { Input } from "./ui/input";
import { getAllUnisResponse, type University } from "../dummydata";
import {
  SketchyCapIcon,
  SketchyMoneyIcon,
  SketchyLocationIcon,
  SketchyBadgeIcon,
  SketchyTrendIcon,
} from "./icons/SketchyIcons";
import axios, { all } from "axios";

export function Search({ searchedWord,setSearchedWord} : { searchedWord: string; setSearchedWord: (val: string) => void }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState<University[]>([]);
  const [allResults, setAllResults] = useState<University[]>([]);

  const getAllCourses = async () => {
    try {
      const allUnis = await axios.get<getAllUnisResponse>(
        "http://localhost:5000/api/unis/all"
      );
      setFilteredResults(allUnis.data.data);
      setAllResults(allUnis.data.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const fetchSearchedResults = async (query: string) => {
    try {
      const response = await axios.post<getAllUnisResponse>(
        "http://localhost:5000/api/unis/search",
        {
          query: query,
        }
      );
      console.log(response.data.data);
      setFilteredResults(response.data.data);
    } catch (error) {
      console.error("Error fetching searched results:", error);
    }
  };

  useEffect(() => {
    getAllCourses();
  }, []);

  const handleSearchChange = (val: string) => {
    setSearchedWord(val);
    setSearchQuery(val);
  }
  

  useEffect(() => {
    if (searchQuery.length >=4) {
      fetchSearchedResults(searchQuery);
    }else{
      setFilteredResults(allResults);
    }
  }, [searchQuery]);

  return (
    <div className="container mx-auto px-8 pb-20">
      {/* Header */}
      <div className="mb-12">
        <h1
          className="text-5xl mb-4 text-black tracking-tight"
          style={{ fontWeight: 700 }}
        >
          Explore Programs
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl">
          Search across universities and programs to find your perfect match.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-16 p-5" style={{ padding: 10 }}>
        <div className="relative max-w-2xl">
          <Input
            type="text"
            placeholder="Search universities, programs, or degrees..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full px-6 py-6 text-lg rounded-2xl border-2 border-slate-200 focus:border-blue-500 transition-colors"
          />
        </div>
      </div>


      {filteredResults.length === 0 ? (
        <div className="creative-card rounded-3xl p-16 text-center">
          <h3
            className="text-2xl text-black mb-2 tracking-tight"
            style={{ fontWeight: 700 }}
          >
            No results found
          </h3>
          <p className="text-slate-600 text-lg">Try adjusting your search</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-8">
          {filteredResults.map((university, idx) => (
            <div
              key={idx}
              className="creative-card rounded-3xl p-8 hover:shadow-xl transition-all duration-300"
            >
              {/* University Header */}
              <div className="flex items-start justify-between mb-6 pb-6 border-b border-slate-100">
                <div className="flex-1">
                  <h2
                    className="text-2xl text-black mb-2 tracking-tight"
                    style={{ fontWeight: 700 }}
                  >
                    {university.universityName}
                  </h2>
                  <div className="flex items-center gap-4 text-slate-600 mb-2">
                    <div className="flex items-center gap-2">
                      <SketchyLocationIcon className="w-5 h-5 text-slate-400" />
                      <span>{university.location}</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500">
                    Overall Score: {university.overallScore}
                  </p>
                </div>
                <div className="px-4 py-2 bg-blue-500 text-white rounded-full">
                  <span className="text-sm" style={{ fontWeight: 600 }}>
                    QS #{university.qsWorldRanking}
                  </span>
                </div>
              </div>

              {/* Programs */}
              <div className="space-y-6">
                {university.programsOffered.map((program, pIdx) => (
                  <div key={pIdx} className="space-y-4">
                    <div className="creative-card-accent rounded-2xl p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h4
                            className="text-lg text-black mb-2 tracking-tight"
                            style={{ fontWeight: 700 }}
                          >
                            {program.programName}
                          </h4>
                          <div className="flex items-center gap-2 mb-3">
                            <div
                              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs"
                              style={{ fontWeight: 600 }}
                            >
                              {program.degreeType}
                            </div>
                            <span className="text-sm text-slate-500">
                              {program.programDuration}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Key Stats */}
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        <div className="p-3 bg-slate-50 rounded-xl">
                          <div className="flex items-center gap-2 mb-1">
                            <SketchyMoneyIcon className="w-4 h-4 text-slate-400" />
                            <span className="text-xs text-slate-500">
                              Tuition
                            </span>
                          </div>
                          <p
                            className="text-base text-black"
                            style={{ fontWeight: 600 }}
                          >
                            ${program.tuition}
                          </p>
                        </div>

                        <div className="p-3 bg-slate-50 rounded-xl">
                          <div className="flex items-center gap-2 mb-1">
                            <SketchyCapIcon className="w-4 h-4 text-slate-400" />
                            <span className="text-xs text-slate-500">
                              Avg Salary
                            </span>
                          </div>
                          <p
                            className="text-base text-black"
                            style={{ fontWeight: 600 }}
                          >
                            $
                            {program.averageSalaryExpectations[0]?.averageSalary}
                          </p>
                        </div>

                        <div className="p-3 bg-slate-50 rounded-xl">
                          <div className="flex items-center gap-2 mb-1">
                            <SketchyBadgeIcon className="w-4 h-4 text-slate-400" />
                            <span className="text-xs text-slate-500">
                              Min GPA
                            </span>
                          </div>
                          <p
                            className="text-base text-black"
                            style={{ fontWeight: 600 }}
                          >
                            {program.admissionRequirements[0]?.gpa}
                          </p>
                        </div>
                      </div>

                      {/* Future Roles */}
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
                          Key Courses
                        </h5>
                        <div className="space-y-2">
                          {program.courses.slice(0, 3).map((course, cIdx) => (
                            <div
                              key={cIdx}
                              className="flex items-center justify-between text-sm"
                            >
                              <span className="text-slate-700">
                                {course.courseName}
                              </span>
                              <span className="text-xs text-slate-500">
                                Sem {course.semester} • {course.credits} credits
                              </span>
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
                          {program.redditReviews.map((review, revIdx) => (
                            <div
                              key={revIdx}
                              className="flex items-start gap-2"
                            >
                              <SketchyTrendIcon className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                              <p className="text-sm text-slate-600 italic">
                                "{review}"
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}