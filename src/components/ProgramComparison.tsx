import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { getAllUniversities, type University } from "../api";
import { 
  SketchyCapIcon, 
  SketchyMoneyIcon, 
  SketchyLocationIcon,
  SketchyBadgeIcon,
  SketchyTrendIcon,
} from "./icons/SketchyIcons";
import { X } from "lucide-react";
import axios from "axios";

interface ProgramData {
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
  courses: Array<{ courseName: string; semester: number; credits: number; courseType: string }>;
  reviews: string[];
}

export function ProgramComparison() {
  // State for backend connection
  const [universities, setUniversities] = useState<University[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [connectionStatus, setConnectionStatus] = useState<'connecting' | 'connected' | 'failed'>('connecting');

  // State for program selection
  const [selectedPrograms, setSelectedPrograms] = useState<ProgramData[]>([]);
  const [showSelector, setShowSelector] = useState(false);
  const [allUis,setAllUnis] = useState();


  const getAllUnis = async ()=>{
    try{
      const res = await axios.get(" http://localhost:8000/api/unis/all");
      setLoading(false);
      console.log(res);

      setUniversities(res.data.data);
    }catch(err){
      console.error(err);
    }
  }


  // Fetch universities from backend on mount
  useEffect(() => {
    getAllUnis();
   
  }, []);

useEffect(()=>{
   console.log("unis:",universities);
},[universities])

  
  

  const addProgram = (program: ProgramData) => {
    if (selectedPrograms.length < 3 && !selectedPrograms.find(p => p.programName === program.programName)) {
      setSelectedPrograms([...selectedPrograms, program]);
      setShowSelector(false);
    }
  };

  const removeProgram = (programName: string) => {
    setSelectedPrograms(selectedPrograms.filter(p => p.programName !== programName));
  };

  // Loading state
  if (loading) {
    return (
      <div className="container mx-auto px-8 pb-20">
        <div className="mb-12">
          <h1 className="text-5xl mb-4 text-black tracking-tight" style={{ fontWeight: 700 }}>
            Compare Programs
          </h1>
        </div>
        <div className="creative-card rounded-3xl p-16 text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h3 className="text-2xl text-black mb-2 tracking-tight" style={{ fontWeight: 700 }}>
            Connecting to backend...
          </h3>
          <p className="text-slate-600 text-lg">
            Loading universities from http://localhost:8000
          </p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="container mx-auto px-8 pb-20">
        <div className="mb-12">
          <h1 className="text-5xl mb-4 text-black tracking-tight" style={{ fontWeight: 700 }}>
            Compare Programs
          </h1>
        </div>
        <div className="creative-card rounded-3xl p-16 text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <X className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-2xl text-black mb-2 tracking-tight" style={{ fontWeight: 700 }}>
            Backend Connection Failed
          </h3>
          <p className="text-red-600 text-lg mb-4">
            {error}
          </p>
          <div className="text-left max-w-xl mx-auto bg-slate-50 rounded-xl p-4 text-sm text-slate-600">
            <p className="mb-2"><strong>Checklist:</strong></p>
            <ul className="space-y-1">
              <li>✓ Backend server running on port 8000?</li>
              <li>✓ MongoDB connected?</li>
              <li>✓ CORS enabled in backend?</li>
              <li>✓ Seeded database with universities?</li>
            </ul>
          </div>
          <Button
            onClick={() => window.location.reload()}
            className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-2xl hover:bg-blue-600"
            style={{ fontWeight: 600 }}
          >
            Retry Connection
          </Button>
        </div>
      </div>
    );
  }

  // Success state with connection indicator
  return (
    <div className="container mx-auto px-8 pb-20">
      {/* Header with connection status */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-5xl text-black tracking-tight" style={{ fontWeight: 700 }}>
            Compare Programs
          </h1>
          <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm" style={{ fontWeight: 600 }}>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Backend Connected ({universities.length} universities)
          </div>
        </div>
        <p className="text-xl text-slate-600 max-w-2xl">
          Select up to 3 programs to compare side by side.
        </p>
      </div>

      {/* Add Program Button
      {selectedPrograms.length < 3 && (
        <div className="mb-12">
          <Button
            onClick={() => setShowSelector(!showSelector)}
            className="bg-blue-500 text-white px-6 py-4 rounded-2xl hover:bg-blue-600 transition-all"
            style={{ fontWeight: 600 }}
          >
            {showSelector ? "Close" : "Add Program to Compare"}
          </Button>
        </div>
      )} */}

      {/* Program Selector */}
        <div className="mb-12 creative-card rounded-3xl p-8">
          <h3 className="text-xl text-black mb-6 tracking-tight" style={{ fontWeight: 700 }}>
            Select a Program
          </h3>
          <div className="grid grid-cols-2 gap-4 max-h-96 overflow-y-auto">
            {universities.map((uni,ind) => (
              <button
                key={idx}
                onClick={() => addProgram(program)}
                // disabled={selectedPrograms.find(p => p.programName === program.programName) !== undefined}
                className="creative-card-accent rounded-2xl p-6 text-left hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-lg text-black tracking-tight" style={{ fontWeight: 700 }}>
                    {program.programName}
                  </h4>
                  <div className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs" style={{ fontWeight: 600 }}>
                    {program.degreeType}
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-3">{program.university}</p>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span>${program.tuition}</span>
                  <span>•</span>
                  <span>${program.salary} avg</span>
                </div>
              </button>
            ))}
          </div>
        </div>
    </div>
  )
}