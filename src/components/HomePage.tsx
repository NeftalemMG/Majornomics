import { Button } from "./ui/button";
import { GlassCard } from "./GlassCard";
import {
  SketchyTrendIcon,
  SketchyMoneyIcon,
  SketchyPeopleIcon,
  SketchyLocationIcon,
  SketchyArrowIcon,
} from "./icons/SketchyIcons";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const stats = [
    {
      icon: SketchyPeopleIcon,
      value: '8+ Metrics',
      label: 'Compared Per Program',
      delay: '0ms',
    },
    {
      icon: SketchyTrendIcon,
      value: '4 Data Layers',
      label: 'Cost, Salary, Roles, Reviews',
      delay: '100ms',
    },
    {
      icon: SketchyMoneyIcon,
      value: 'Multiple Areas of Study',
      label: 'CS, MBA, MPH, MME, BioTech, & more',
      delay: '200ms',
    },
    {
      icon: SketchyLocationIcon,
      value: '15',
      label: 'Institutions Tracked',
      delay: '300ms',
    },
  ];

  return (
    <div className="container mx-auto px-8 pb-20">
      {/* Hero Section with Asymmetric Layout */}
      <div className="grid grid-cols-12 gap-12 mb-24 items-center">
        <div className="col-span-7">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
            <span className="text-blue-600 tracking-tight" style={{ fontWeight: 500 }}>Analytics Platform for Higher Education</span>
          </div>
          <h1 className="text-6xl mb-6 text-black leading-[1.1] tracking-tight" style={{ fontWeight: 700 }}>
            Data-Driven Insights for{' '}
            <span className="relative inline-block">
              <span className="text-blue-500">Smarter</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M2 5C50 2 100 2 198 5" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>{' '}
            Education Decisions
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
            Majornomics provides transparent insights into employment rates, tuition costs, 
            and graduate outcomes - empowering students, and educators.
          </p>
          <div className="flex gap-4">
            <Button 
              onClick={() => onNavigate('search')}
              className="bg-blue-500 text-white px-8 py-6 rounded-2xl hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 group"
              style={{ fontWeight: 600 }}
            >
              Explore Insights
              <SketchyArrowIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline"
              onClick={() => onNavigate('recommendations')}
              className="border-2 border-slate-200 text-black px-8 py-6 rounded-2xl hover:bg-slate-50 transition-all duration-300"
              style={{ fontWeight: 600 }}
            >
              Get Recommendations
            </Button>
          </div>
        </div>
        
        {/* Abstract Decorative Element */}
        <div className="col-span-5 relative h-96">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-80 h-80 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
          </div>
          <div className="relative h-full grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-32 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl border border-blue-200 shadow-sm"></div>
              <div className="h-48 bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl border border-slate-200 shadow-sm"></div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl border border-blue-300 shadow-sm"></div>
              <div className="h-32 bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl border border-slate-200 shadow-sm"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid with Creative Cards */}
      <div className="grid grid-cols-4 gap-6 mb-24">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="creative-card rounded-3xl p-8 text-center group cursor-pointer"
            style={{ animationDelay: stat.delay }}
          >
            <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm group-hover:shadow-md group-hover:shadow-blue-500/20">
              <stat.icon className="w-7 h-7 text-white" />
            </div>
            <div className="text-4xl mb-2 text-black tracking-tight" style={{ fontWeight: 700 }}>{stat.value}</div>
            <div className="text-slate-600" style={{ fontWeight: 500 }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Features Section with Asymmetric Layout */}
      <div className="grid grid-cols-3 gap-8">
        <div className="creative-card-accent rounded-3xl p-10 hover:shadow-xl transition-all duration-300 group cursor-pointer">
          <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
            <SketchyTrendIcon className="w-6 h-6 text-white" />
          </div>
          <h3 className="mb-4 text-black text-xl tracking-tight" style={{ fontWeight: 700 }}>Market Trends</h3>
          <p className="text-slate-600 leading-relaxed">
            Track salary growth, employment rates, and job demand across different fields and regions.
          </p>
        </div>

        <div className="creative-card-accent rounded-3xl p-10 hover:shadow-xl transition-all duration-300 group cursor-pointer">
          <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
            <SketchyMoneyIcon className="w-6 h-6 text-white" />
          </div>
          <h3 className="mb-4 text-black text-xl tracking-tight" style={{ fontWeight: 700 }}>Cost Analysis</h3>
          <p className="text-slate-600 leading-relaxed">
            Compare tuition costs with expected income to make informed financial decisions about your education.
          </p>
        </div>

        <div className="creative-card-accent rounded-3xl p-10 hover:shadow-xl transition-all duration-300 group cursor-pointer">
          <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
            <SketchyPeopleIcon className="w-6 h-6 text-white" />
          </div>
          <h3 className="mb-4 text-black text-xl tracking-tight" style={{ fontWeight: 700 }}>Personalized Insights</h3>
          <p className="text-slate-600 leading-relaxed">
            Get tailored recommendations based on your preferences, career goals, and financial situation.
          </p>
        </div>
      </div>
    </div>
  );
}