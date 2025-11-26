export interface University {
  universityName: string;
  qsWorldRanking: number;
  location: string;
  websiteUrl: string;
  contactInformation: string[];
  overallScore: number;
  programsOffered: Program[];
}

export interface Program {
  programName: string;
  degreeType: string;
  programDuration: string;
  numberOfSemesters: number;
  tuition: number;
  generalCosts: number;
  futureRoles: string[];
  averageSalaryExpectations: SalaryExpectation[];
  courses: Course[];
  admissionRequirements: AdmissionRequirement[];
  redditReviews: string[];
}

export interface SalaryExpectation {
  name: string;
  averageSalary: number;
}

export interface Course {
  courseName: string;
  semester: number;
  credits: number;
  courseType: string;
}

export interface AdmissionRequirement {
  gpa: number;
  others: string[];
}

export const dummyUniversities: University[] = [
  {
    universityName: "University of Toronto",
    qsWorldRanking: 34,
    location: "Toronto, Ontario",
    websiteUrl: "https://www.utoronto.ca",
    contactInformation: ["admissions@utoronto.ca", "+1-416-978-2190"],
    overallScore: 92.3,
    programsOffered: [
      {
        programName: "Bachelor of Computer Science",
        degreeType: "BSc",
        programDuration: "4 Years",
        numberOfSemesters: 8,
        tuition: 16000,
        generalCosts: 3000,
        futureRoles: ["Software Engineer", "Data Scientist", "AI Researcher"],
        averageSalaryExpectations: [
          { name: "Software Engineer", averageSalary: 95000 },
          { name: "Data Scientist", averageSalary: 105000 }
        ],
        courses: [
          { courseName: "Data Structures & Algorithms", semester: 2, credits: 4, courseType: "Core" },
          { courseName: "Machine Learning", semester: 6, credits: 4, courseType: "Core" },
          { courseName: "Computer Networks", semester: 5, credits: 3, courseType: "Core" },
          { courseName: "Web Development", semester: 7, credits: 3, courseType: "Elective" }
        ],
        admissionRequirements: [
          { gpa: 3.7, others: ["High School Transcript", "SAT/ACT Score", "Letters of Recommendation"] }
        ],
        redditReviews: [
          "Top CS program in Canada with amazing research opportunities.",
          "Campus is huge but the academic support is excellent.",
          "Great co-op program with connections to major tech companies."
        ]
      }
    ]
  },

  {
    universityName: "University of British Columbia",
    qsWorldRanking: 47,
    location: "Vancouver, British Columbia",
    websiteUrl: "https://www.ubc.ca",
    contactInformation: ["admissions@ubc.ca", "+1-604-822-2211"],
    overallScore: 88.6,
    programsOffered: [
      {
        programName: "Bachelor of Business Administration",
        degreeType: "BBA",
        programDuration: "4 Years",
        numberOfSemesters: 8,
        tuition: 14500,
        generalCosts: 2800,
        futureRoles: ["Business Analyst", "Marketing Manager", "Management Consultant"],
        averageSalaryExpectations: [
          { name: "Business Analyst", averageSalary: 72000 },
          { name: "Marketing Manager", averageSalary: 85000 }
        ],
        courses: [
          { courseName: "Financial Accounting", semester: 1, credits: 4, courseType: "Core" },
          { courseName: "Marketing Management", semester: 3, credits: 3, courseType: "Core" },
          { courseName: "Business Strategy", semester: 6, credits: 4, courseType: "Core" },
          { courseName: "International Business", semester: 7, credits: 3, courseType: "Elective" }
        ],
        admissionRequirements: [
          { gpa: 3.5, others: ["High School Diploma", "English Proficiency Test"] }
        ],
        redditReviews: [
          "Beautiful campus with ocean views and strong business program.",
          "Sauder School of Business has great industry connections.",
          "Vancouver location opens up tons of networking opportunities."
        ]
      }
    ]
  },

  {
    universityName: "University of Waterloo",
    qsWorldRanking: 112,
    location: "Waterloo, Ontario",
    websiteUrl: "https://uwaterloo.ca",
    contactInformation: ["admissions@uwaterloo.ca", "+1-519-888-4567"],
    overallScore: 86.2,
    programsOffered: [
      {
        programName: "Bachelor of Software Engineering",
        degreeType: "BEng",
        programDuration: "5 Years",
        numberOfSemesters: 10,
        tuition: 17500,
        generalCosts: 2600,
        futureRoles: ["Software Developer", "Systems Architect", "Tech Lead"],
        averageSalaryExpectations: [
          { name: "Software Developer", averageSalary: 92000 },
          { name: "Systems Architect", averageSalary: 120000 }
        ],
        courses: [
          { courseName: "Object-Oriented Programming", semester: 1, credits: 4, courseType: "Core" },
          { courseName: "Software Design Patterns", semester: 4, credits: 4, courseType: "Core" },
          { courseName: "Distributed Systems", semester: 7, credits: 3, courseType: "Core" },
          { courseName: "Mobile App Development", semester: 8, credits: 3, courseType: "Elective" }
        ],
        admissionRequirements: [
          { gpa: 3.8, others: ["High School Transcript", "Math Contest Results", "Admission Information Form"] }
        ],
        redditReviews: [
          "Best co-op program in Canada - you graduate with 2 years of work experience.",
          "Intense workload but graduates are highly sought after by employers.",
          "Strong tech culture and amazing alumni network in Silicon Valley."
        ]
      }
    ]
  },

  {
    universityName: "McGill University",
    qsWorldRanking: 30,
    location: "Montreal, Quebec",
    websiteUrl: "https://www.mcgill.ca",
    contactInformation: ["admissions@mcgill.ca", "+1-514-398-4455"],
    overallScore: 91.8,
    programsOffered: [
      {
        programName: "Bachelor of Engineering - Mechanical",
        degreeType: "BEng",
        programDuration: "4 Years",
        numberOfSemesters: 8,
        tuition: 15200,
        generalCosts: 2500,
        futureRoles: ["Mechanical Engineer", "Product Designer", "Manufacturing Engineer"],
        averageSalaryExpectations: [
          { name: "Mechanical Engineer", averageSalary: 78000 },
          { name: "Product Designer", averageSalary: 82000 }
        ],
        courses: [
          { courseName: "Engineering Mechanics", semester: 1, credits: 4, courseType: "Core" },
          { courseName: "Thermodynamics", semester: 3, credits: 4, courseType: "Core" },
          { courseName: "Fluid Mechanics", semester: 4, credits: 4, courseType: "Core" },
          { courseName: "Robotics Engineering", semester: 7, credits: 3, courseType: "Elective" }
        ],
        admissionRequirements: [
          { gpa: 3.6, others: ["High School Transcript", "Math & Physics Prerequisites", "English Proficiency"] }
        ],
        redditReviews: [
          "Prestigious engineering program with strong international reputation.",
          "Montreal is an amazing city to study in - affordable and vibrant.",
          "Rigorous curriculum but prepares you well for industry."
        ]
      }
    ]
  },

  {
    universityName: "McMaster University",
    qsWorldRanking: 152,
    location: "Hamilton, Ontario",
    websiteUrl: "https://www.mcmaster.ca",
    contactInformation: ["admissions@mcmaster.ca", "+1-905-525-9140"],
    overallScore: 82.4,
    programsOffered: [
      {
        programName: "Bachelor of Health Sciences",
        degreeType: "BHSc",
        programDuration: "4 Years",
        numberOfSemesters: 8,
        tuition: 13800,
        generalCosts: 2400,
        futureRoles: ["Healthcare Administrator", "Medical Researcher", "Public Health Specialist"],
        averageSalaryExpectations: [
          { name: "Healthcare Administrator", averageSalary: 75000 },
          { name: "Medical Researcher", averageSalary: 88000 }
        ],
        courses: [
          { courseName: "Human Anatomy & Physiology", semester: 1, credits: 4, courseType: "Core" },
          { courseName: "Epidemiology", semester: 3, credits: 3, courseType: "Core" },
          { courseName: "Healthcare Policy", semester: 5, credits: 4, courseType: "Core" },
          { courseName: "Global Health Issues", semester: 6, credits: 3, courseType: "Elective" }
        ],
        admissionRequirements: [
          { gpa: 3.7, others: ["High School Transcript", "Supplementary Application", "CASPer Test"] }
        ],
        redditReviews: [
          "One of the best health sciences programs in Canada.",
          "Small class sizes and inquiry-based learning approach.",
          "Great preparation for medical school or healthcare careers."
        ]
      }
    ]
  }
];