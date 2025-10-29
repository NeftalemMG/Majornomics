import { useState } from "react";
import { GlassCard } from "./GlassCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  SketchyMoneyIcon,
  SketchyBriefcaseIcon,
  SketchyCapIcon,
  SketchyClockIcon,
  SketchyBadgeIcon,
} from "./icons/SketchyIcons";
import {
  BarChart,
  Bar,
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

export function ProgramComparison() {
  const [program1, setProgram1] = useState("engineering");
  const [program2, setProgram2] = useState("business");

  const programData: any = {
    engineering: {
      name: "Engineering - University of Toronto",
      avgSalary: 92000,
      employmentRate: 94,
      tuition: 15000,
      duration: "4 years",
      graduates: 1200,
      outcomes: [
        { year: "1", salary: 65000 },
        { year: "2", salary: 72000 },
        { year: "3", salary: 78000 },
        { year: "5", salary: 92000 },
        { year: "10", salary: 125000 },
      ],
      skills: [
        { subject: "Math", value: 95 },
        { subject: "Technical", value: 90 },
        { subject: "Communication", value: 70 },
        { subject: "Leadership", value: 75 },
        { subject: "Problem Solving", value: 92 },
      ],
    },
    business: {
      name: "Business Administration - UBC",
      avgSalary: 73000,
      employmentRate: 88,
      tuition: 12000,
      duration: "4 years",
      graduates: 800,
      outcomes: [
        { year: "1", salary: 55000 },
        { year: "2", salary: 62000 },
        { year: "3", salary: 68000 },
        { year: "5", salary: 73000 },
        { year: "10", salary: 105000 },
      ],
      skills: [
        { subject: "Math", value: 75 },
        { subject: "Technical", value: 65 },
        { subject: "Communication", value: 90 },
        { subject: "Leadership", value: 88 },
        { subject: "Problem Solving", value: 80 },
      ],
    },
    computerscience: {
      name: "Computer Science - Waterloo",
      avgSalary: 95000,
      employmentRate: 96,
      tuition: 16000,
      duration: "4 years",
      graduates: 950,
      outcomes: [
        { year: "1", salary: 70000 },
        { year: "2", salary: 78000 },
        { year: "3", salary: 85000 },
        { year: "5", salary: 95000 },
        { year: "10", salary: 135000 },
      ],
      skills: [
        { subject: "Math", value: 92 },
        { subject: "Technical", value: 98 },
        { subject: "Communication", value: 68 },
        { subject: "Leadership", value: 70 },
        { subject: "Problem Solving", value: 95 },
      ],
    },
    healthcare: {
      name: "Healthcare - McGill",
      avgSalary: 78000,
      employmentRate: 92,
      tuition: 18000,
      duration: "4 years",
      graduates: 650,
      outcomes: [
        { year: "1", salary: 60000 },
        { year: "2", salary: 66000 },
        { year: "3", salary: 72000 },
        { year: "5", salary: 78000 },
        { year: "10", salary: 98000 },
      ],
      skills: [
        { subject: "Math", value: 70 },
        { subject: "Technical", value: 75 },
        { subject: "Communication", value: 92 },
        { subject: "Leadership", value: 85 },
        { subject: "Problem Solving", value: 88 },
      ],
    },
  };

  const data1 = programData[program1];
  const data2 = programData[program2];

  const combinedOutcomes = data1.outcomes.map((item: any, index: number) => ({
    year: item.year,
    [data1.name]: item.salary,
    [data2.name]: data2.outcomes[index].salary,
  }));

  const combinedSkills = data1.skills.map((item: any, index: number) => ({
    subject: item.subject,
    [data1.name]: item.value,
    [data2.name]: data2.skills[index].value,
  }));

  return (
    <div className="container mx-auto px-8 pb-12">
      <div className="mb-10">
        <h2 className="text-4xl mb-2 text-black tracking-tight" style={{ fontWeight: 700 }}>Compare Programs</h2>
        <p className="text-slate-600 text-lg">Select two programs to see a detailed side-by-side comparison</p>
      </div>

      {/* Program Selectors with Creative Design */}
      <div className="grid grid-cols-2 gap-6 mb-12">
        <div className="creative-card rounded-2xl p-6 border-l-4 border-blue-500">
          <label className="block mb-3 text-slate-600" style={{ fontWeight: 600 }}>Program 1</label>
          <Select value={program1} onValueChange={setProgram1}>
            <SelectTrigger className="bg-white border-slate-200 rounded-xl text-black" style={{ fontWeight: 500 }}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white border-slate-200">
              <SelectItem value="engineering">Engineering - University of Toronto</SelectItem>
              <SelectItem value="business">Business Administration - UBC</SelectItem>
              <SelectItem value="computerscience">Computer Science - Waterloo</SelectItem>
              <SelectItem value="healthcare">Healthcare - McGill</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="creative-card rounded-2xl p-6 border-l-4 border-black">
          <label className="block mb-3 text-slate-600" style={{ fontWeight: 600 }}>Program 2</label>
          <Select value={program2} onValueChange={setProgram2}>
            <SelectTrigger className="bg-white border-slate-200 rounded-xl text-black" style={{ fontWeight: 500 }}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white border-slate-200">
              <SelectItem value="engineering">Engineering - University of Toronto</SelectItem>
              <SelectItem value="business">Business Administration - UBC</SelectItem>
              <SelectItem value="computerscience">Computer Science - Waterloo</SelectItem>
              <SelectItem value="healthcare">Healthcare - McGill</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Quick Stats Comparison with Asymmetric Cards */}
      <div className="grid grid-cols-2 gap-8 mb-12">
        {/* Program 1 */}
        <div className="space-y-4">
          <div className="creative-card rounded-3xl p-6 border-l-4 border-blue-500">
            <h3 className="mb-6 text-black text-lg tracking-tight" style={{ fontWeight: 700 }}>{data1.name}</h3>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <SketchyMoneyIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-500" style={{ fontWeight: 600 }}>Average Salary</div>
                  <div className="text-xl text-black tracking-tight" style={{ fontWeight: 700 }}>${data1.avgSalary.toLocaleString()}</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-400 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <SketchyBriefcaseIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-500" style={{ fontWeight: 600 }}>Employment Rate</div>
                  <div className="text-xl text-black tracking-tight" style={{ fontWeight: 700 }}>{data1.employmentRate}%</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-300 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <SketchyCapIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-500" style={{ fontWeight: 600 }}>Annual Tuition</div>
                  <div className="text-xl text-black tracking-tight" style={{ fontWeight: 700 }}>${data1.tuition.toLocaleString()}</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <SketchyClockIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-500" style={{ fontWeight: 600 }}>Program Duration</div>
                  <div className="text-xl text-black tracking-tight" style={{ fontWeight: 700 }}>{data1.duration}</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <SketchyBadgeIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-500" style={{ fontWeight: 600 }}>Annual Graduates</div>
                  <div className="text-xl text-black tracking-tight" style={{ fontWeight: 700 }}>{data1.graduates.toLocaleString()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Program 2 */}
        <div className="space-y-4">
          <div className="creative-card rounded-3xl p-6 border-l-4 border-black">
            <h3 className="mb-6 text-black text-lg tracking-tight" style={{ fontWeight: 700 }}>{data2.name}</h3>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <SketchyMoneyIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-500" style={{ fontWeight: 600 }}>Average Salary</div>
                  <div className="text-xl text-black tracking-tight" style={{ fontWeight: 700 }}>${data2.avgSalary.toLocaleString()}</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-700 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <SketchyBriefcaseIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-500" style={{ fontWeight: 600 }}>Employment Rate</div>
                  <div className="text-xl text-black tracking-tight" style={{ fontWeight: 700 }}>{data2.employmentRate}%</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <SketchyCapIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-500" style={{ fontWeight: 600 }}>Annual Tuition</div>
                  <div className="text-xl text-black tracking-tight" style={{ fontWeight: 700 }}>${data2.tuition.toLocaleString()}</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-400 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <SketchyClockIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-500" style={{ fontWeight: 600 }}>Program Duration</div>
                  <div className="text-xl text-black tracking-tight" style={{ fontWeight: 700 }}>{data2.duration}</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <SketchyBadgeIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-500" style={{ fontWeight: 600 }}>Annual Graduates</div>
                  <div className="text-xl text-black tracking-tight" style={{ fontWeight: 700 }}>{data2.graduates.toLocaleString()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts with Creative Layout */}
      <div className="grid grid-cols-2 gap-8 mb-8">
        {/* Salary Progression */}
        <div className="creative-card rounded-3xl p-8">
          <h3 className="mb-6 text-black tracking-tight" style={{ fontWeight: 700 }}>Salary Progression</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={combinedOutcomes}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="year" stroke="#64748b" label={{ value: 'Years After Graduation', position: 'insideBottom', offset: -5, fill: '#64748b' }} style={{ fontSize: '13px', fontWeight: 500 }} />
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
              <Bar dataKey={data1.name} fill="#60a5fa" radius={[12, 12, 0, 0]} />
              <Bar dataKey={data2.name} fill="#0a0a0a" radius={[12, 12, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Skills Comparison */}
        <div className="creative-card rounded-3xl p-8">
          <h3 className="mb-6 text-black tracking-tight" style={{ fontWeight: 700 }}>Skills Profile</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={combinedSkills}>
              <PolarGrid stroke="#e2e8f0" />
              <PolarAngleAxis dataKey="subject" stroke="#64748b" style={{ fontSize: '12px', fontWeight: 500 }} />
              <PolarRadiusAxis stroke="#64748b" style={{ fontSize: '11px', fontWeight: 500 }} />
              <Radar name={data1.name} dataKey={data1.name} stroke="#60a5fa" fill="#60a5fa" fillOpacity={0.5} />
              <Radar name={data2.name} dataKey={data2.name} stroke="#0a0a0a" fill="#0a0a0a" fillOpacity={0.3} />
              <Legend wrapperStyle={{ color: '#0a0a0a', fontWeight: 500 }} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ROI Comparison */}
      <div className="creative-card rounded-3xl p-8">
        <h3 className="mb-6 text-black tracking-tight" style={{ fontWeight: 700 }}>Return on Investment (ROI) Analysis</h3>
        <div className="grid grid-cols-2 gap-10">
          <div className="relative pl-6">
            <div className="absolute left-0 top-0 w-1 h-full bg-blue-500 rounded-full"></div>
            <h4 className="mb-4 text-black" style={{ fontWeight: 700 }}>{data1.name}</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-600" style={{ fontWeight: 500 }}>Total 4-Year Tuition:</span>
                <span className="text-black" style={{ fontWeight: 700 }}>${(data1.tuition * 4).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600" style={{ fontWeight: 500 }}>5-Year Salary:</span>
                <span className="text-black" style={{ fontWeight: 700 }}>${data1.avgSalary.toLocaleString()}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-slate-200">
                <span className="text-slate-600" style={{ fontWeight: 600 }}>ROI Ratio:</span>
                <span className="text-blue-500 text-lg" style={{ fontWeight: 700 }}>{(data1.avgSalary / (data1.tuition * 4)).toFixed(2)}x</span>
              </div>
            </div>
          </div>

          <div className="relative pl-6">
            <div className="absolute left-0 top-0 w-1 h-full bg-black rounded-full"></div>
            <h4 className="mb-4 text-black" style={{ fontWeight: 700 }}>{data2.name}</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-600" style={{ fontWeight: 500 }}>Total 4-Year Tuition:</span>
                <span className="text-black" style={{ fontWeight: 700 }}>${(data2.tuition * 4).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600" style={{ fontWeight: 500 }}>5-Year Salary:</span>
                <span className="text-black" style={{ fontWeight: 700 }}>${data2.avgSalary.toLocaleString()}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-slate-200">
                <span className="text-slate-600" style={{ fontWeight: 600 }}>ROI Ratio:</span>
                <span className="text-black text-lg" style={{ fontWeight: 700 }}>{(data2.avgSalary / (data2.tuition * 4)).toFixed(2)}x</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
