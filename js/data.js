/**
 * data.js — All Portfolio Content
 * Edit this file to update your portfolio content easily.
 * No need to touch HTML or CSS for content changes.
 */

const DATA = {

    // ═══ PERSONAL INFO ═══
    personal: {
        name: "Aadi Gupta",
        role: "Full-Stack Developer & AI Enthusiast",
        college: "Guru Tegh Bahadur Institute of Technology",
        degree: "B.Tech — Information Technology",
        year: "2025 – 2029",
        location: "Delhi, India",
        email: "ag20071106@gmail.com",
        github: "https://github.com/ag0611",
        linkedin: "https://www.linkedin.com/in/aadi-gupta-a44924383",
        instagram: "https://www.instagram.com/aadi_gupta0615",
        tagline: "Building real-world web apps and AI-powered tools.",
        about: "I'm a first-year B.Tech IT student at GTBIT Delhi with a strong passion for building things that work — from responsive web apps to AI-integrated tools. I love clean code, great user experiences, and solving problems that actually matter.",
        whoAmI: [
            "🎓 First-year B.Tech IT student at GTBIT, Delhi — exploring, building, and growing every day.",
            "💻 Self-taught developer who went from zero to building full-stack apps with MERN, REST APIs, and AI integrations.",
            "🤖 Deeply interested in Generative AI and Cloud technologies — Oracle OCI Certified Professional in GenAI.",
            "🏆 Campus Ambassador at eDC IIT Delhi — ranked among the best for networking and event promotion.",
            "🚀 I believe in learning by doing. Every project I build teaches me something new.",
            "🌐 Currently exploring the intersection of AI + Web Development to build smarter, more impactful products."
        ],
        hobbies: [
            { icon: "💻", label: "Coding" },
            { icon: "🤖", label: "AI & ML" },
            { icon: "🎮", label: "Gaming" },
            { icon: "📚", label: "Reading" },
            { icon: "🎵", label: "Music" },
            { icon: "🌐", label: "Tech Blogs" },
            { icon: "🏏", label: "Cricket" },
            { icon: "🎨", label: "UI Design" }
        ]
    },

    // ═══ STATS ═══
    stats: [
        { number: 4, suffix: "+", label: "Projects" },
        { number: 8, suffix: "+", label: "Certificates" },
        { number: 3, suffix: "", label: "months @ IIT Delhi" },
        { number: 2025, suffix: "", label: "Batch" }
    ],

    // ═══ PROJECTS ═══
    projects: [
        {
            id: "01",
            name: "CogniWatch",
            tagline: "AI-Powered Cognitive Decline Detection",
            description: "An AI-powered real-time monitoring platform for early-stage cognitive decline detection using simulated biosensor data. Features anomaly detection, cognitive health scoring (0–100), live dashboard with Flask REST API, automatic risk classification, and a caregiver alert system.",
            tags: ["AI / ML", "Healthcare"],
            color: "cyan",
            stack: ["HTML", "CSS", "JavaScript", "Flask REST API", "CSV Data"],
            github: "https://github.com/ag0611/Cogniwatch",
            live: "https://ag0611.github.io/Cogniwatch"
        },
        {
            id: "02",
            name: "Attendance Tracker",
            tagline: "Personal Attendance Management System",
            description: "A responsive web-based Personal Attendance Tracker with multi-user login, subject-wise tracking, dynamic circular progress UI, target-based warning system, and localStorage data persistence.",
            tags: ["Web App", "Productivity"],
            color: "violet",
            stack: ["HTML", "CSS", "JavaScript", "localStorage"],
            github: "https://github.com/ag0611/Attendance-tracker",
            live: "https://ag0611.github.io/Attendance-tracker"
        },
        {
            id: "03",
            name: "Smart Task Tracker",
            tagline: "Productivity Dashboard with Analytics",
            description: "A smart task & productivity tracker featuring a full dashboard, interactive charts, and month-wise analytics. Helps users visualize their productivity patterns and manage tasks efficiently.",
            tags: ["Web App", "Dashboard"],
            color: "pink",
            stack: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/ag0611/Smart-Task-Tracker",
            live: "https://ag0611.github.io/Smart-Task-Tracker"
        },
        {
            id: "04",
            name: "Guru Kirpa Medicose",
            tagline: "E-Commerce Medical Shop Website",
            description: "Full e-commerce website for a Delhi-based medical shop. Features product catalogue, cart with WhatsApp order generation, dark professional UI, and a localStorage-based admin panel — built with zero frameworks, pure Vanilla JS.",
            tags: ["E-Commerce", "Business"],
            color: "amber",
            stack: ["HTML", "CSS", "Vanilla JS", "localStorage", "WhatsApp API"],
            github: "#",
            live: "#"
        }
    ],

    // ═══ SKILLS ═══
    skills: [
        {
            category: "Languages",
            icon: "⌨️",
            items: ["HTML5", "CSS3", "JavaScript (ES6+)", "Java", "SQL"]
        },
        {
            category: "Frameworks & Libraries",
            icon: "🧩",
            items: ["React.js", "Node.js", "Express.js", "Leaflet.js", "Chart.js"]
        },
        {
            category: "Databases",
            icon: "🗄️",
            items: ["MongoDB", "localStorage", "CSV / JSON Data"]
        },
        {
            category: "AI & Cloud",
            icon: "🤖",
            items: ["Generative AI", "Google Cloud (GCP)", "Vertex AI", "Oracle OCI", "Claude API", "OpenAI API", "Agent Development Kit (ADK)"]
        },
        {
            category: "Tools & Platforms",
            icon: "🛠️",
            items: ["Git", "GitHub", "GitHub Pages", "VS Code", "REST APIs", "Postman", "Figma"]
        },
        {
            category: "Soft Skills",
            icon: "💡",
            items: ["Problem Solving", "Team Collaboration", "Event Management", "Networking", "Public Speaking"]
        }
    ],

    // ═══ EDUCATION ═══
    education: [
        {
            degree: "Bachelor of Technology — Information Technology",
            institution: "Guru Tegh Bahadur Institute of Technology (GTBIT)",
            period: "2025 – 2029",
            location: "Delhi, India",
            icon: "🎓",
            color: "cyan",
            details: "Currently in 1st year. Focusing on full-stack development, AI integration, and cloud computing alongside academics."
        },
        {
            degree: "High School Diploma",
            institution: "Dr. B.R. Ambedkar Schools of Specialised Excellence",
            period: "2021 – 2025",
            location: "Delhi, India",
            icon: "🏫",
            color: "violet",
            details: "Completed schooling with strong foundation in Science and Mathematics."
        }
    ],

    // ═══ EXPERIENCE ═══
    experience: [
        {
            role: "Campus Ambassador",
            org: "eDC IIT Delhi — BECon 2026",
            period: "Dec 2025 – Feb 2026",
            icon: "🏆",
            color: "amber",
            points: [
                "Ranked among the best Campus Ambassadors for outstanding performance.",
                "Promoted eDC and its events, driving significant social media growth.",
                "Increased footfall for the annual Business and Entrepreneurship Conclave.",
                "Received Letter of Recommendation from Overall Coordinator, Tanmay Sharma."
            ]
        }
    ],

    // ═══ CERTIFICATES ═══
    certificates: [
        {
            name: "Oracle Cloud Infrastructure — Generative AI Professional",
            issuer: "Oracle University",
            date: "October 2025",
            icon: "🔴",
            color: "red",
            badge: "OCI Gen AI Pro"
        },
        {
            name: "Oracle Fusion AI Agent Studio — Certified Foundations Associate",
            issuer: "Oracle University",
            date: "October 2025",
            icon: "🔴",
            color: "red",
            badge: "Oracle Foundations"
        },
        {
            name: "Engineer AI Agents with Agent Development Kit (ADK)",
            issuer: "Google Cloud",
            date: "2025",
            icon: "☁️",
            color: "cyan",
            badge: "Intermediate · Skill Badge"
        },
        {
            name: "Technology Job Simulation — Coding & Development",
            issuer: "Deloitte (via Forage)",
            date: "June 2025",
            icon: "🟢",
            color: "green",
            badge: "Job Simulation"
        },
        {
            name: "Campus Ambassador — BECon 2026",
            issuer: "eDC IIT Delhi",
            date: "Feb 2026",
            icon: "🏛️",
            color: "violet",
            badge: "Certificate of Participation"
        },
        {
            name: "Nestlé E-Learning 2026 — Resilience",
            issuer: "Nestlé (Nesternship)",
            date: "2026",
            icon: "🔵",
            color: "blue",
            badge: "Completion"
        },
        {
            name: "Fintechstico v6.0 — Diving Into The World Of Fintech",
            issuer: "NSUT Consilium'25",
            date: "2025",
            icon: "💹",
            color: "amber",
            badge: "Participation"
        },
        {
            name: "TARANG 2.0 — Department of Applied Sciences",
            issuer: "GTBIT, New Delhi",
            date: "2025",
            icon: "🎓",
            color: "pink",
            badge: "Participation"
        }
    ],

    // ═══ CONNECT LINKS ═══
    connect: [
        { label: "GitHub", icon: "🐙", url: "https://github.com/ag0611", color: "cyan" },
        { label: "LinkedIn", icon: "💼", url: "https://www.linkedin.com/in/aadi-gupta-a44924383", color: "blue" },
        { label: "Instagram", icon: "📸", url: "https://www.instagram.com/aadi_gupta0615", color: "pink" },
        { label: "Email", icon: "📧", url: "mailto:ag20071106@gmail.com", color: "violet" }
    ]

};
