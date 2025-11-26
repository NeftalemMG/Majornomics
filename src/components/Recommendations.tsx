import { useState } from "react";
import { dummyUniversities } from "../dummyData";
import { 
  SketchyCapIcon, 
  SketchyMoneyIcon, 
  SketchyBadgeIcon,
  SketchyLocationIcon,
  SketchyTrendIcon,
} from "./icons/SketchyIcons";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";

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
  score: number;
  futureRoles: string[];
  courses: Array<{ courseName: string; semester: number; credits: number; courseType: string }>;
  reviews: string[];
}

export function Recommendations() {
  const [affordability, setAffordability] = useState([50]);
  const [salary, setSalary] = useState([50]);
  const [prestige, setPrestige] = useState([50]);

  // Generate all programs first
  const allPrograms = dummyUniversities.flatMap(uni =>
    uni.programsOffered.map(program => ({
      programName: program.programName,
      degreeType: program.degreeType,
      university: uni.universityName,
      location: uni.location,
      ranking: uni.qsWorldRanking,
      tuition: program.tuition,
      generalCosts: program.generalCosts,
      salary: program.averageSalaryExpectations[0]?.averageSalary || 0,
      gpa: program.admissionRequirements[0]?.gpa || 0,
      duration: program.programDuration,
      semesters: program.numberOfSemesters,
      futureRoles: program.futureRoles,
      courses: program.courses,
      reviews: program.redditReviews,
    }))
  );

  // Find min/max values for normalization
  const tuitions = allPrograms.map(p => p.tuition);
  const salaries = allPrograms.map(p => p.salary);
  const rankings = allPrograms.map(p => p.ranking);

  const minTuition = Math.min(...tuitions);
  const maxTuition = Math.max(...tuitions);
  const minSalary = Math.min(...salaries);
  const maxSalary = Math.max(...salaries);
  const minRanking = Math.min(...rankings);
  const maxRanking = Math.max(...rankings);

  // Calculate scores with proper normalization (0-100%)
  const recommendedPrograms: RecommendedProgram[] = allPrograms.map(program => {
    // Normalize affordability (lower tuition = better, 0-1 scale)
    const affordabilityScore = maxTuition !== minTuition
      ? (maxTuition - program.tuition) / (maxTuition - minTuition)
      : 1;

    // Normalize salary (higher salary = better, 0-1 scale)
    const salaryScore = maxSalary !== minSalary
      ? (program.salary - minSalary) / (maxSalary - minSalary)
      : 1;

    // Normalize prestige (lower ranking number = better, 0-1 scale)
    const prestigeScore = maxRanking !== minRanking
      ? (maxRanking - program.ranking) / (maxRanking - minRanking)
      : 1;

    // Get slider weights (0-100, convert to 0-1)
    const affordabilityWeight = affordability[0] / 100;
    const salaryWeight = salary[0] / 100;
    const prestigeWeight = prestige[0] / 100;

    // Calculate weighted average score
    const totalWeight = affordabilityWeight + salaryWeight + prestigeWeight;
    const weightedScore = totalWeight > 0
      ? ((affordabilityScore * affordabilityWeight) +
         (salaryScore * salaryWeight) +
         (prestigeScore * prestigeWeight)) / totalWeight
      : 0;

    // Convert to percentage (0-100)
    const finalScore = weightedScore * 100;

    return {
      ...program,
      score: finalScore,
    };
  });

  // Sort by score (highest first) and take top 4
  const recommendations = [...recommendedPrograms]
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);

  return (
    <div className="container mx-auto px-8 pb-20">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl mb-4 text-black tracking-tight" style={{ fontWeight: 700 }}>
          Recommended Programs
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl">
          Adjust your preferences to get personalized recommendations.
        </p>
      </div>

      {/* Preference Sliders */}
      <div className="creative-card rounded-3xl p-8 mb-12">
        <h2 className="text-2xl mb-8 text-black tracking-tight" style={{ fontWeight: 700 }}>
          Your Preferences
        </h2>
        
        <div className="grid grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-lg text-black" style={{ fontWeight: 600 }}>
                Affordability
              </Label>
              <span className="text-xl text-blue-500" style={{ fontWeight: 700 }}>
                {affordability}%
              </span>
            </div>
            <Slider
              value={affordability}
              onValueChange={setAffordability}
              max={100}
              step={1}
              className="w-full"
            />
            <p className="text-sm text-slate-500">Prioritize lower tuition costs</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-lg text-black" style={{ fontWeight: 600 }}>
                Salary Potential
              </Label>
              <span className="text-xl text-blue-500" style={{ fontWeight: 700 }}>
                {salary}%
              </span>
            </div>
            <Slider
              value={salary}
              onValueChange={setSalary}
              max={100}
              step={1}
              className="w-full"
            />
            <p className="text-sm text-slate-500">Prioritize higher average salaries</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-lg text-black" style={{ fontWeight: 600 }}>
                University Prestige
              </Label>
              <span className="text-xl text-blue-500" style={{ fontWeight: 700 }}>
                {prestige}%
              </span>
            </div>
            <Slider
              value={prestige}
              onValueChange={setPrestige}
              max={100}
              step={1}
              className="w-full"
            />
            <p className="text-sm text-slate-500">Prioritize better QS rankings</p>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="grid grid-cols-2 gap-8">
        {recommendations.map((program, idx) => (
          <div key={idx} className="creative-card rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start justify-between mb-6 pb-4 border-b border-slate-100">
              <div className="flex-1">
                <h3 className="text-2xl text-black mb-2 tracking-tight" style={{ fontWeight: 700 }}>
                  {program.programName}
                </h3>
                <p className="text-lg text-slate-600 mb-2">{program.university}</p>
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm" style={{ fontWeight: 600 }}>
                    {program.degreeType}
                  </div>
                  <span className="text-sm text-slate-500">{program.duration}</span>
                </div>
              </div>
              <div className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-full">
                <span className="text-sm" style={{ fontWeight: 700 }}>
                  {Math.round(program.score)}% Match
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
              <h5 className="text-sm text-slate-500 mb-2" style={{ fontWeight: 600 }}>Career Paths</h5>
              <div className="flex flex-wrap gap-2">
                {program.futureRoles.map((role, rIdx) => (
                  <span key={rIdx} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs">
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Courses */}
            <div className="mb-4">
              <h5 className="text-sm text-slate-500 mb-2" style={{ fontWeight: 600 }}>Sample Courses</h5>
              <div className="space-y-1.5">
                {program.courses.slice(0, 3).map((course, cIdx) => (
                  <div key={cIdx} className="text-sm text-slate-600 leading-relaxed">
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
              <h5 className="text-sm text-slate-500 mb-2" style={{ fontWeight: 600 }}>Student Reviews</h5>
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
    </div>
  );
}