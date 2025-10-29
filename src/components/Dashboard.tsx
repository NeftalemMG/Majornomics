import { GlassCard } from "./GlassCard";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  SketchySearchIcon,
  SketchyFilterIcon,
} from "./icons/SketchyIcons";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export function Dashboard() {
  const salaryData = [
    { year: "2019", Engineering: 65000, Business: 55000, Science: 50000, Arts: 42000 },
    { year: "2020", Engineering: 68000, Business: 57000, Science: 52000, Arts: 43500 },
    { year: "2021", Engineering: 72000, Business: 60000, Science: 54000, Arts: 45000 },
    { year: "2022", Engineering: 78000, Business: 64000, Science: 57000, Arts: 47000 },
    { year: "2023", Engineering: 85000, Business: 68000, Science: 61000, Arts: 49000 },
    { year: "2024", Engineering: 92000, Business: 73000, Science: 65000, Arts: 52000 },
  ];

  const employmentData = [
    { field: "Engineering", rate: 94 },
    { field: "Business", rate: 88 },
    { field: "Computer Science", rate: 96 },
    { field: "Healthcare", rate: 92 },
    { field: "Education", rate: 85 },
    { field: "Arts", rate: 78 },
  ];

  const tuitionRatioData = [
    { program: "Eng", tuition: 15000, firstYearSalary: 65000 },
    { program: "CS", tuition: 16000, firstYearSalary: 70000 },
    { program: "Bus", tuition: 12000, firstYearSalary: 55000 },
    { program: "Health", tuition: 18000, firstYearSalary: 60000 },
    { program: "Arts", tuition: 8000, firstYearSalary: 42000 },
  ];

  const regionalDemand = [
    { region: "ON", tech: 85, healthcare: 78, business: 72 },
    { region: "QC", tech: 75, healthcare: 82, business: 68 },
    { region: "BC", tech: 88, healthcare: 75, business: 70 },
    { region: "AB", tech: 72, healthcare: 70, business: 80 },
    { region: "NS", tech: 65, healthcare: 85, business: 62 },
  ];

  return (
    <div className="container mx-auto px-8 pb-12">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-4xl mb-2 text-black tracking-tight" style={{ fontWeight: 700 }}>Analytics Dashboard</h2>
        <p className="text-slate-600 text-lg">Explore comprehensive data on programs, employment, and outcomes</p>
      </div>

      {/* Search and Filters */}
      <div className="creative-card rounded-2xl p-6 mb-10">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <SketchySearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input 
              placeholder="Search fields of study, institutions, or programs..."
              className="pl-12 bg-white border-slate-200 rounded-xl text-black placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
          <div className="flex gap-3">
            <Select defaultValue="all">
              <SelectTrigger className="w-[150px] bg-white border-slate-200 rounded-xl text-black" style={{ fontWeight: 500 }}>
                <SketchyFilterIcon className="w-4 h-4 mr-2 text-slate-400" />
                <SelectValue placeholder="Province" />
              </SelectTrigger>
              <SelectContent className="bg-white border-slate-200">
                <SelectItem value="all">All Provinces</SelectItem>
                <SelectItem value="on">Ontario</SelectItem>
                <SelectItem value="qc">Quebec</SelectItem>
                <SelectItem value="bc">British Columbia</SelectItem>
                <SelectItem value="ab">Alberta</SelectItem>
              </SelectContent>
            </Select>
            
            <Select defaultValue="all">
              <SelectTrigger className="w-[150px] bg-white border-slate-200 rounded-xl text-black" style={{ fontWeight: 500 }}>
                <SelectValue placeholder="Field" />
              </SelectTrigger>
              <SelectContent className="bg-white border-slate-200">
                <SelectItem value="all">All Fields</SelectItem>
                <SelectItem value="eng">Engineering</SelectItem>
                <SelectItem value="cs">Computer Science</SelectItem>
                <SelectItem value="bus">Business</SelectItem>
                <SelectItem value="health">Healthcare</SelectItem>
                <SelectItem value="arts">Arts</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all">
              <SelectTrigger className="w-[160px] bg-white border-slate-200 rounded-xl text-black" style={{ fontWeight: 500 }}>
                <SelectValue placeholder="Institution" />
              </SelectTrigger>
              <SelectContent className="bg-white border-slate-200">
                <SelectItem value="all">All Institutions</SelectItem>
                <SelectItem value="uoft">University of Toronto</SelectItem>
                <SelectItem value="ubc">UBC</SelectItem>
                <SelectItem value="mcgill">McGill</SelectItem>
                <SelectItem value="waterloo">Waterloo</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Charts Grid with Creative Layout */}
      <div className="grid grid-cols-2 gap-8 mb-8">
        {/* Salary Growth - Larger Card */}
        <div className="col-span-2 creative-card rounded-3xl p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-black text-xl tracking-tight" style={{ fontWeight: 700 }}>Salary Growth Over Time</h3>
              <p className="text-slate-500 text-sm mt-1">Average graduate salaries by field (2019-2024)</p>
            </div>
            <div className="px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
              <span className="text-blue-600 text-sm" style={{ fontWeight: 500 }}>Trending Up</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={salaryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="year" stroke="#64748b" style={{ fontSize: '13px', fontWeight: 500 }} />
              <YAxis stroke="#64748b" style={{ fontSize: '13px', fontWeight: 500 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#ffffff', 
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  color: '#0a0a0a'
                }} 
              />
              <Legend wrapperStyle={{ color: '#0a0a0a', fontWeight: 500 }} />
              <Line type="monotone" dataKey="Engineering" stroke="#60a5fa" strokeWidth={3} dot={{ fill: '#60a5fa', r: 5 }} />
              <Line type="monotone" dataKey="Business" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6', r: 5 }} />
              <Line type="monotone" dataKey="Science" stroke="#93c5fd" strokeWidth={3} dot={{ fill: '#93c5fd', r: 5 }} />
              <Line type="monotone" dataKey="Arts" stroke="#0a0a0a" strokeWidth={3} dot={{ fill: '#0a0a0a', r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Employment Rate */}
        <div className="creative-card rounded-3xl p-8">
          <h3 className="mb-6 text-black tracking-tight" style={{ fontWeight: 700 }}>Employment Rate by Field</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={employmentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="field" stroke="#64748b" angle={-20} textAnchor="end" height={100} style={{ fontSize: '12px', fontWeight: 500 }} />
              <YAxis stroke="#64748b" style={{ fontSize: '13px', fontWeight: 500 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#ffffff', 
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  color: '#0a0a0a'
                }} 
              />
              <Bar dataKey="rate" fill="#60a5fa" radius={[12, 12, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Tuition to Income Ratio */}
        <div className="creative-card rounded-3xl p-8">
          <h3 className="mb-6 text-black tracking-tight" style={{ fontWeight: 700 }}>Tuition vs First-Year Income</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={tuitionRatioData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="program" stroke="#64748b" style={{ fontSize: '13px', fontWeight: 500 }} />
              <YAxis stroke="#64748b" style={{ fontSize: '13px', fontWeight: 500 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#ffffff', 
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  color: '#0a0a0a'
                }} 
              />
              <Legend wrapperStyle={{ color: '#0a0a0a', fontWeight: 500 }} />
              <Area type="monotone" dataKey="tuition" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
              <Area type="monotone" dataKey="firstYearSalary" stackId="2" stroke="#60a5fa" fill="#60a5fa" fillOpacity={0.6} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Regional Job Demand */}
        <div className="col-span-2 creative-card rounded-3xl p-8">
          <h3 className="mb-6 text-black tracking-tight" style={{ fontWeight: 700 }}>Regional Job Demand by Sector</h3>
          <ResponsiveContainer width="100%" height={350}>
            <RadarChart data={regionalDemand}>
              <PolarGrid stroke="#e2e8f0" />
              <PolarAngleAxis dataKey="region" stroke="#64748b" style={{ fontSize: '13px', fontWeight: 500 }} />
              <PolarRadiusAxis stroke="#64748b" style={{ fontSize: '12px', fontWeight: 500 }} />
              <Radar name="Tech" dataKey="tech" stroke="#60a5fa" fill="#60a5fa" fillOpacity={0.5} />
              <Radar name="Healthcare" dataKey="healthcare" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.5} />
              <Radar name="Business" dataKey="business" stroke="#0a0a0a" fill="#0a0a0a" fillOpacity={0.3} />
              <Legend wrapperStyle={{ color: '#0a0a0a', fontWeight: 500 }} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Key Insights with Creative Cards */}
      <div className="creative-card rounded-3xl p-8">
        <h3 className="mb-6 text-black tracking-tight" style={{ fontWeight: 700 }}>Key Insights</h3>
        <div className="grid grid-cols-3 gap-8">
          <div className="relative pl-6">
            <div className="absolute left-0 top-0 w-1 h-full bg-blue-500 rounded-full"></div>
            <div className="text-3xl text-black mb-2 tracking-tight" style={{ fontWeight: 700 }}>+12.8%</div>
            <p className="text-slate-600">Average salary increase for engineering graduates (2023-2024)</p>
          </div>
          <div className="relative pl-6">
            <div className="absolute left-0 top-0 w-1 h-full bg-blue-400 rounded-full"></div>
            <div className="text-3xl text-black mb-2 tracking-tight" style={{ fontWeight: 700 }}>94%</div>
            <p className="text-slate-600">Engineering graduates employed within 6 months</p>
          </div>
          <div className="relative pl-6">
            <div className="absolute left-0 top-0 w-1 h-full bg-black rounded-full"></div>
            <div className="text-3xl text-black mb-2 tracking-tight" style={{ fontWeight: 700 }}>0.26</div>
            <p className="text-slate-600">Best tuition-to-income ratio (Engineering)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
