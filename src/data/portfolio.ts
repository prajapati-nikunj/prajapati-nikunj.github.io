export interface PersonalInfo {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
    website: string;
    summary: string;
}

export interface Skill {
    name: string;
    category: string;
}

export interface Experience {
    title: string;
    company: string;
    duration: string;
    location: string;
    description: string;
    responsibilities: string[];
}

export interface Project {
    name: string;
    year: string;
    company: string;
    description: string;
    features: string[];
    appStoreLink?: string;
    category: string;
    featured?: boolean;
}

export interface Education {
    degree: string;
    institution: string;
    duration: string;
    location: string;
    grade: string;
}

export interface Certification {
    name: string;
    issuer: string;
}

export interface Award {
    name: string;
    description: string;
}

export interface QuickStats {
    yearsExperience: string;
    projectsDelivered: string;
    domainsMastered: string;
}

export const quickStats: QuickStats = {
    yearsExperience: "9+",
    projectsDelivered: "55+",
    domainsMastered: "15+"
};

export const personalInfo: PersonalInfo = {
    name: "NIKUNJ PRAJAPATI",
    title: "Lead iOS Software Engineer",
    email: "nikunjprajapati09@gmail.com",
    phone: "",
    location: "🇮🇳 India",
    linkedin: "http://linkedin.com/in/nikunjprajapati",
    github: "https://github.com/prajapati-nikunj",
    website: "https://prajapati-nikunj.github.io",
    summary: "Dedicated and results-driven iOS Developer with 9+ years of professional experience in building robust, scalable, and high-performance mobile applications using Swift, SwiftUI, and modern iOS architectures. I excel at guiding teams, improving engineering processes, conducting detailed code reviews, and architecting solutions that align with both technical and business goals. My focus lies in combining innovation with practicality to deliver impactful products."
};

export const skills: Skill[] = [
    // Mobile Development
    { name: "SwiftUI", category: "Mobile Development" },
    { name: "Swift", category: "Mobile Development" },
    { name: "Objective-C", category: "Mobile Development" },
    { name: "Flutter", category: "Mobile Development" },
    { name: "React Native", category: "Mobile Development" },
    { name: "Dart", category: "Mobile Development" },

    // Frontend & Web
    { name: "TypeScript", category: "Frontend & Web" },
    { name: "JavaScript", category: "Frontend & Web" },
    { name: "HTML / CSS", category: "Frontend & Web" },
    { name: "Responsive UI/UX", category: "Frontend & Web" },
    { name: "Component-Driven Architecture", category: "Frontend & Web" },

    // Architecture & Engineering Practices
    { name: "Clean Code Architecture", category: "Architecture" },
    { name: "MVVM", category: "Architecture" },
    { name: "MVC", category: "Architecture" },
    { name: "VIPER", category: "Architecture" },
    { name: "SOLID Principles", category: "Architecture" },
    { name: "ATOMIC Design", category: "Architecture" },
    { name: "TDD", category: "Architecture" },
    { name: "Modular Architecture", category: "Architecture" },
    { name: "Scalable App Design", category: "Architecture" },

    // AI / ML / Data Tools
    { name: "Kalman Filter Algorithm", category: "AI / ML" },
    { name: "Google Colab", category: "AI / ML" },
    { name: "Roboflow", category: "AI / ML" },
    { name: "OpenAI Integrations", category: "AI / ML" },
    { name: "Data Processing & Automation", category: "AI / ML" },
    { name: "FastAPI for Backend AI Services", category: "AI / ML" },

    // Backend & APIs
    { name: "FastAPI", category: "Backend" },
    { name: "REST API Design", category: "Backend" },
    { name: "JSON / Codable", category: "Backend" },
    { name: "Authentication & Security", category: "Backend" },
    { name: "Python", category: "Backend" },

    // Frameworks
    { name: "Core Data", category: "Frameworks" },
    { name: "Combine", category: "Frameworks" },

    // DevOps & CI/CD
    { name: "Azure DevOps Boards", category: "DevOps" },
    { name: "CI/CD Pipelines", category: "DevOps" },
    { name: "Git", category: "DevOps" },
    { name: "GitHub", category: "DevOps" },
    { name: "GitLab", category: "DevOps" },
    { name: "Build Automation", category: "DevOps" },
    { name: "Deployment & Release Management", category: "DevOps" },

    // Tools & IDEs
    { name: "Xcode", category: "Tools & IDEs" },
    { name: "Android Studio", category: "Tools & IDEs" },
    { name: "Visual Studio Code", category: "Tools & IDEs" },
    { name: "Cursor", category: "Tools & IDEs" },
    { name: "Antigravity", category: "Tools & IDEs" },
    { name: "TRAE", category: "Tools & IDEs" },
    { name: "WindSurf", category: "Tools & IDEs" },
    { name: "CocoaPods", category: "Tools & IDEs" },
    { name: "SPM", category: "Tools & IDEs" },

    // Design & Collaboration
    { name: "Figma", category: "Design & Collaboration" },
    { name: "Wireframing & Prototyping", category: "Design & Collaboration" },
    { name: "Requirement Analysis", category: "Design & Collaboration" },
    { name: "Code Review", category: "Design & Collaboration" },
    { name: "Project Management", category: "Design & Collaboration" },
    { name: "Team Leadership", category: "Design & Collaboration" },
    { name: "Client Communication", category: "Design & Collaboration" },
];

export const experiences: Experience[] = [
    {
        title: "Lead iOS Software Engineer",
        company: "IndiaNIC Infotech",
        duration: "2020 - Present",
        location: "Ahmedabad, India",
        description: "Highly skilled technical leader with experience crafting scalable mobile solutions, guiding teams, and ensuring the highest engineering standards.",
        responsibilities: [
            "Enhanced overall project delivery and client satisfaction through strong technical leadership",
            "Served as a trusted member of estimation and code review committees",
            "Expertly gathered requirements, analyzed complex challenges, and ensured smooth project execution",
            "Coordinated multiple in-house and client mobile teams across diverse domains",
            "Applied architectural thinking and domain expertise to overcome technical and business hurdles",
            "Consistently contributed to strategic planning and high-impact mobile solutions"
        ]
    },
    {
        title: "Senior iOS Software Engineer",
        company: "E-BizTrait Techno Labs",
        duration: "2018 - 2019",
        location: "Ahmedabad, India",
        description: "Focused on building strong engineering foundations, leading teams, and optimizing development practices.",
        responsibilities: [
            "Guided the team with roadmap planning, architectural decisions, and long-term strategy",
            "Strengthened the codebase through systematic code reviews and pair programming",
            "Coordinated and streamlined mobile development workflows",
            "Encouraged a culture of collaboration, diversity, and engineering excellence"
        ]
    },
    {
        title: "Junior iOS Developer",
        company: "Innvonix Technologies",
        duration: "2016 - 2018",
        location: "Ahmedabad, India",
        description: "Foundation-building role focused on learning best practices and contributing to application development.",
        responsibilities: [
            "Collaborated with senior engineers and leadership to deliver reliable software solutions",
            "Maintained, enhanced, and optimized existing applications and internal systems",
            "Contributed to performance improvements and user experience upgrades"
        ]
    }
];

export const projects: Project[] = [
    {
        name: "Mobile Facilities - RealPage",
        year: "2023 - Present",
        company: "IndiaNIC",
        description: "Designed by RealPage, a leading provider of rental housing software, OneSite Facilities is used at more than 23,000 sites and by over 30,000 maintenance technicians.",
        features: [
            "Successfully implemented Asset Tracking and Due Diligence Inspection Module",
            "Optimized an outdated codebase and addressed memory leaks, resulting in enhanced system performance and stability"
        ],
        appStoreLink: "https://apps.apple.com/us/app/mobile-facilities-by-realpage/id904744873",
        category: "Enterprise",
        featured: true
    },
    {
        name: "SkillsBase - SAAS Platform",
        year: "2021 - Present",
        company: "IndiaNIC",
        description: "Training Delivery Platform providing a unique and interactive training experience for a distributed workforce with content designed to be consumed anywhere and anytime",
        features: [
            "Effectively deployed a SAAS-based domain solution spanning over 18 diverse domains",
            "Enabling clients to craft customized Whitelabel products for varied course content",
            "Ongoing work includes the integration of new features based on emerging domains"
        ],
        category: "Education",
        featured: true
    },
    {
        name: "CLIVI - The gamers ecosystem",
        year: "2022 - 2023",
        company: "IndiaNIC",
        description: "Create the first ecosystem where everything surrounding the gaming world will be involved. Help monetize all the time invested by the Content Creators and competitive players.",
        features: [
            "Pioneered the creation of a groundbreaking gaming ecosystem",
            "Successfully addressed the need to monetize the time invested by both Content Creators and competitive players"
        ],
        appStoreLink: "https://apps.apple.com/us/app/clivi-the-gamers-ecosystem/id1620846846",
        category: "Gaming",
        featured: true
    },
    {
        name: "Smart Awards",
        year: "2023 - Present",
        company: "IndiaNIC",
        description: "Access accreditations and training content, Virtual NOPS, Feedback Loop",
        features: ["SkillsBase white-label solution"],
        appStoreLink: "https://apps.apple.com/us/app/smart-awards/id1670382474",
        category: "Education"
    },
    {
        name: "DexGreen - Customer Application",
        year: "2023 - Present",
        company: "IndiaNIC",
        description: "White-label solution of SkillsBase complemented by advanced AI learning tools",
        features: ["Advanced AI learning tools integration"],
        appStoreLink: "https://apps.apple.com/us/app/dexgreen/id1456370233",
        category: "Education"
    },
    {
        name: "DexGreen Openreach",
        year: "2021",
        company: "IndiaNIC",
        description: "Latest content training guide from DexGreen",
        features: [
            "Optimized and refactor an outdated codebase",
            "Establish the foundation for implementing ideas within the SkillsBase SAAS app"
        ],
        appStoreLink: "https://apps.apple.com/us/app/dexgreen-openreach/id1450385364",
        category: "Education"
    },
    {
        name: "My Black Belt Life",
        year: "2020",
        company: "IndiaNIC",
        description: "Martial Art Studio APP - Offer users a solution to learn martial arts through a subscription-based package with studio domain-specific course content",
        features: ["Subscription-based learning platform", "Studio-specific course content"],
        appStoreLink: "https://apps.apple.com/us/app/my-black-belt-life/id1532177905",
        category: "Fitness"
    },
    {
        name: "Kadad",
        year: "2022",
        company: "IndiaNIC",
        description: "24x7 delivery app that delivers anything to your doorstep, whether it is grocery shopping, food delivery, documents, packages and more",
        features: ["Real-time delivery tracking", "Multi-category ordering"],
        appStoreLink: "https://apps.apple.com/in/app/kadad/id1522262611",
        category: "Delivery"
    },
    {
        name: "Sushi-Crush",
        year: "2018 - 2019",
        company: "E-BizTrait",
        description: "E-Shop Hub - 35+ White label Apps",
        features: ["White-label e-commerce platform"],
        appStoreLink: "https://apps.apple.com/jo/app/sushi-crush/id1428755885",
        category: "E-commerce"
    },
    {
        name: "Jawwal",
        year: "2018 - 2019",
        company: "E-BizTrait",
        description: "Telecom application",
        features: ["Telecom services integration"],
        appStoreLink: "https://apps.apple.com/us/app/jawwal/id550875047",
        category: "Telecom"
    },
    {
        name: "Horizon International Schools",
        year: "2019",
        company: "E-BizTrait",
        description: "ArabiaCell - 8 + Schools WhiteLabel Apps",
        features: ["Multi-school white-label platform"],
        appStoreLink: "https://apps.apple.com/eg/app/horizon-international-schools/id1567788482",
        category: "Education"
    },
    {
        name: "Saurbhi - Indian Food & Grocery",
        year: "2016 - 2018",
        company: "Innvonix",
        description: "Indian food and grocery delivery application",
        features: ["Food delivery", "Grocery shopping"],
        appStoreLink: "https://apps.apple.com/us/app/saurbhi-indian-food-grocery/id1157320605",
        category: "Food"
    }
];

export const education: Education[] = [
    {
        degree: "Master of Computer Applications",
        institution: "VJKM, GTU",
        duration: "2011 - 2015",
        location: "Ahmedabad",
        grade: "7.94 CGPA"
    },
    {
        degree: "Bachelor of Computer Application",
        institution: "NVPAS, SPU",
        duration: "2009 - 2011",
        location: "VVNagar",
        grade: "1st class"
    }
];

export const certifications: Certification[] = [
    { name: "Foundational C# with Microsoft", issuer: "freeCodeCamp" },
    { name: "JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp" },
    { name: "Python (Basic) Certificate", issuer: "HackerRank" },
    { name: "Flutter begening", issuer: "Great Learning" },
    { name: "Data Science Foundations", issuer: "Great Learning" },
    { name: "Professional iOS Application Developer", issuer: "ILDC IndiaNIC" },
    { name: "Professional .Net Developer", issuer: "NVPAS" },
    { name: "Javascript", issuer: "ILDC IndiaNIC" }
];

export const awards: Award[] = [
    {
        name: "1st Runner Up of HACKATHON 2.0",
        description: "IndiaNIC"
    },
    {
        name: "IndiaNIC STAR AWARDS",
        description: "Recognition for outstanding performance"
    }
];

export const strengths = [
    {
        title: "Project Leadership",
        description: "Led diverse mobile-development teams with efficiency and strategic direction. Trusted contributor in estimation and code review panels, ensuring accurate planning and successful project execution."
    },
    {
        title: "Analytical Problem Solving",
        description: "Expert at gathering requirements, analyzing complex technical scenarios, and resolving issues with precision and clarity. Known for attention to detail and commitment to engineering excellence."
    },
    {
        title: "Business-Focused Mindset",
        description: "Blend technical expertise with business understanding. Delivered architecture-driven improvements and boosted project efficiency by 20% through optimized workflows and team synergy."
    },
    {
        title: "Quality Assurance & Code Review",
        description: "Strong advocate for clean code, maintainable architecture, and best development practices. Ensures project quality through structured reviews and continuous improvement."
    },
    {
        title: "Adaptability & Fast Learning",
        description: "Continuously advances skills across technologies including Flutter, SwiftUI, Python, FastAPI, and OpenAI integrations. Quick to adopt new frameworks and development methodologies."
    }
];

export const languages = [
    { name: "Gujarati", level: "Native" },
    { name: "Hindi", level: "Proficient" },
    { name: "English", level: "Advanced" }
];
