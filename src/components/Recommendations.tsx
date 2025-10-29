import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { GlassCard } from "./GlassCard";
import {
  SketchyMoneyIcon,
  SketchyTrendIcon,
  SketchyPeopleIcon,
  SketchyBadgeIcon,
  SketchyStarIcon,
  SketchyArrowIcon,
} from "./icons/SketchyIcons";

export function Recommendations() {
  const [affordability, setAffordability] = useState([75]);
  const [employment, setEmployment] = useState([85]);
  const [skillDemand, setSkillDemand] = useState([70]);

  const recommendations = [
    {
      name: "Computer Science",
      university: "University of Waterloo",
      matchScore: 96,
      salary: "$95,000",
      employmentRate: "96%",
      tuition: "$16,000/year",
      demandTrend: "+18% YoY",
      tags: ["High Demand", "Top ROI", "STEM"],
      highlights: [
        "Highest employment rate in tech sector",
        "Strong co-op program with industry connections",
        "Competitive starting salaries",
      ],
    },
    {
      name: "Engineering",
      university: "University of Toronto",
      matchScore: 94,
      salary: "$92,000",
      employmentRate: "94%",
      tuition: "$15,000/year",
      demandTrend: "+15% YoY",
      tags: ["STEM", "High Salary", "Versatile"],
      highlights: [
        "Diverse specialization options",
        "Strong industry partnerships",
        "Excellent long-term career growth",
      ],
    },
    {
      name: "Business Administration",
      university: "UBC Sauder",
      matchScore: 88,
      salary: "$73,000",
      employmentRate: "88%",
      tuition: "$12,000/year",
      demandTrend: "+12% YoY",
      tags: ["Leadership", "Networking", "Versatile"],
      highlights: [
        "Strong alumni network",
        "International exchange opportunities",
        "Lower tuition costs",
      ],
    },
    {
      name: "Healthcare Administration",
      university: "McGill University",
      matchScore: 85,
      salary: "$78,000",
      employmentRate: "92%",
      tuition: "$18,000/year",
      demandTrend: "+20% YoY",
      tags: ["Growing Field", "Stable", "Impactful"],
      highlights: [
        "Rapidly growing healthcare sector",
        "Job security and stability",
        "Meaningful societal impact",
      ],
    },
  ];

  const sortedRecommendations = [...recommendations].sort((a, b) => {
    const scoreA =
      (affordability[0] / 100) * (100 - parseInt(a.tuition.replace(/\D/g, "")) / 200) +
      (employment[0] / 100) * a.matchScore +
      (skillDemand[0] / 100) * parseInt(a.demandTrend.replace(/\D/g, ""));
    const scoreB =
      (affordability[0] / 100) * (100 - parseInt(b.tuition.replace(/\D/g, "")) / 200) +
      (employment[0] / 100) * b.matchScore +
      (skillDemand[0] / 100) * parseInt(b.demandTrend.replace(/\D/g, ""));
    return scoreB - scoreA;
  });

  return (
    <div className="container mx-auto px-8 pb-12">
      <div className="mb-10">
        <h2 className="text-4xl mb-2 text-black tracking-tight" style={{ fontWeight: 700 }}>Personalized Recommendations</h2>
        <p className="text-slate-600 text-lg">Adjust your preferences to find programs that match your goals</p>
      </div>

      {/* Preference Sliders with Creative Cards */}
      <div className="creative-card rounded-3xl p-10 mb-12">
        <h3 className="mb-8 text-black text-xl tracking-tight" style={{ fontWeight: 700 }}>Your Preferences</h3>
        <div className="grid grid-cols-3 gap-12">
          <div>
            <div className="flex items-center justify-between mb-6">
              <Label className="text-black" style={{ fontWeight: 600 }}>Affordability</Label>
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center shadow-sm">
                <SketchyMoneyIcon className="w-5 h-5 text-white" />
              </div>
            </div>
            <Slider 
              value={affordability} 
              onValueChange={setAffordability}
              max={100}
              step={1}
              className="mb-3"
            />
            <div className="flex justify-between text-xs text-slate-500" style={{ fontWeight: 500 }}>
              <span>Less Important</span>
              <span className="text-blue-500" style={{ fontWeight: 700 }}>{affordability[0]}%</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-6">
              <Label className="text-black" style={{ fontWeight: 600 }}>Employment Prospects</Label>
              <div className="w-10 h-10 bg-blue-400 rounded-xl flex items-center justify-center shadow-sm">
                <SketchyTrendIcon className="w-5 h-5 text-white" />
              </div>
            </div>
            <Slider 
              value={employment} 
              onValueChange={setEmployment}
              max={100}
              step={1}
              className="mb-3"
            />
            <div className="flex justify-between text-xs text-slate-500" style={{ fontWeight: 500 }}>
              <span>Less Important</span>
              <span className="text-blue-500" style={{ fontWeight: 700 }}>{employment[0]}%</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-6">
              <Label className="text-black" style={{ fontWeight: 600 }}>Market Demand</Label>
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center shadow-sm">
                <SketchyPeopleIcon className="w-5 h-5 text-white" />
              </div>
            </div>
            <Slider 
              value={skillDemand} 
              onValueChange={setSkillDemand}
              max={100}
              step={1}
              className="mb-3"
            />
            <div className="flex justify-between text-xs text-slate-500" style={{ fontWeight: 500 }}>
              <span>Less Important</span>
              <span className="text-black" style={{ fontWeight: 700 }}>{skillDemand[0]}%</span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <Button className="bg-blue-500 text-white rounded-2xl hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-500/20 transition-all px-8 py-6" style={{ fontWeight: 600 }}>
            Update Recommendations
          </Button>
        </div>
      </div>

      {/* Recommended Programs with Creative Layout */}
      <div className="mb-8">
        <h3 className="text-black text-xl mb-2 tracking-tight" style={{ fontWeight: 700 }}>Top Matches for You</h3>
        <p className="text-slate-600">Based on your preferences, here are our recommendations</p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {sortedRecommendations.map((program, index) => (
          <div
            key={index}
            className="creative-card rounded-3xl p-8 group cursor-pointer hover:shadow-2xl transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-5">
              <div>
                <h3 className="text-black mb-1 tracking-tight" style={{ fontWeight: 700 }}>{program.name}</h3>
                <p className="text-slate-600 text-sm">{program.university}</p>
              </div>
              <div className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full shadow-sm">
                <SketchyStarIcon className="w-4 h-4" />
                <span className="text-sm" style={{ fontWeight: 600 }}>{program.matchScore}% Match</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {program.tags.map((tag, tagIndex) => (
                <Badge 
                  key={tagIndex} 
                  variant="secondary" 
                  className="bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 rounded-full" 
                  style={{ fontWeight: 500 }}
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Stats Grid with Creative Layout */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <SketchyMoneyIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-500" style={{ fontWeight: 500 }}>Avg Salary</div>
                  <div className="text-sm text-black" style={{ fontWeight: 700 }}>{program.salary}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-400 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <SketchyTrendIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-500" style={{ fontWeight: 500 }}>Employment</div>
                  <div className="text-sm text-black" style={{ fontWeight: 700 }}>{program.employmentRate}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <SketchyBadgeIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-500" style={{ fontWeight: 500 }}>Tuition</div>
                  <div className="text-sm text-black" style={{ fontWeight: 700 }}>{program.tuition}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <SketchyPeopleIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-500" style={{ fontWeight: 500 }}>Demand Trend</div>
                  <div className="text-sm text-green-600" style={{ fontWeight: 700 }}>{program.demandTrend}</div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="border-t border-slate-200 pt-5 mb-5">
              <div className="text-xs text-slate-500 mb-3" style={{ fontWeight: 600 }}>Why this program?</div>
              <ul className="space-y-2">
                {program.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="text-sm text-slate-600 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Button */}
            <Button 
              variant="outline" 
              className="w-full border-2 border-slate-200 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all group text-black rounded-2xl py-6"
              style={{ fontWeight: 600 }}
            >
              View Full Details
              <SketchyArrowIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        ))}
      </div>

      {/* Additional Insights with Creative Cards */}
      <div className="creative-card rounded-3xl p-10 mt-12">
        <h3 className="mb-8 text-black text-xl tracking-tight" style={{ fontWeight: 700 }}>Why These Recommendations?</h3>
        <div className="grid grid-cols-3 gap-10">
          <div>
            <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center mb-5 shadow-sm">
              <SketchyTrendIcon className="w-6 h-6 text-white" />
            </div>
            <h4 className="mb-3 text-black" style={{ fontWeight: 700 }}>Strong Market Alignment</h4>
            <p className="text-slate-600 leading-relaxed">
              These programs align with current and projected job market trends, ensuring relevance after graduation.
            </p>
          </div>

          <div>
            <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center mb-5 shadow-sm">
              <SketchyMoneyIcon className="w-6 h-6 text-white" />
            </div>
            <h4 className="mb-3 text-black" style={{ fontWeight: 700 }}>Optimal ROI</h4>
            <p className="text-slate-600 leading-relaxed">
              Based on tuition costs vs. expected earnings, these programs offer excellent return on investment.
            </p>
          </div>

          <div>
            <div className="w-12 h-12 bg-blue-400 rounded-2xl flex items-center justify-center mb-5 shadow-sm">
              <SketchyBadgeIcon className="w-6 h-6 text-white" />
            </div>
            <h4 className="mb-3 text-black" style={{ fontWeight: 700 }}>Quality Institutions</h4>
            <p className="text-slate-600 leading-relaxed">
              These universities have strong track records for graduate outcomes and employer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
