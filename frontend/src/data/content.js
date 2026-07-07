// ─────────────────────────────────────────────────────────────
// All editable content lives here. Change your info in ONE place
// and it updates everywhere across the site.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Pareekshit Singh",
  role: "Software Developer",
  tagline: "Full-stack developer turning DSA fundamentals into shipped products.",
  location: "Greater Noida, India",
  phone: "9554093425",
  email: "pareekshit20022024@gmail.com",
  linkedin: "https://linkedin.com/in/pareekshit18",
  github: "https://github.com/pareekshit007",
  resumeUrl: "/resume.pdf",
  status: "Open to opportunities",
  // Drop your photo in frontend/public/profile.jpg (any name works, just
  // update this path to match). Until a real image exists at this path,
  // the site automatically shows your initials instead — nothing breaks.
  avatarUrl: "/profile.jpg",
  initials: "PS",
  // Update this to your real LeetCode username if it differs from your GitHub one
  leetcodeUsername: "PareekshitS20022024",
};

export const heroSnippet = `const developer = {
  name: "Pareekshit Singh",
  role: "Software Developer",
  stack: ["React", "Node.js", "Express", "MongoDB"],
  focus: "Full-stack + DSA",
  problemsSolved: 170,
  status: "${profile.status}",
};`;

export const about = {
  summary:
    "Motivated software developer and final-year B.Tech (CSE) student with a strong foundation in Data Structures & Algorithms, Object-Oriented Programming, and full-stack development with the MERN stack. I build scalable web apps and REST APIs with React.js, Node.js, and MongoDB — and I've solved 170+ DSA problems along the way, with a focus on writing optimized, efficient code. Currently deepening my DevOps fundamentals (CI/CD, Docker, deployment) while shipping real-world projects.",
  education: {
    school: "Sharda University, Greater Noida, India",
    degree: "B.Tech in Computer Science",
    period: "Aug 2023 – July 2027",
    detail: "CGPA: 7.7 / 10",
  },
  training: {
    title: "In-Campus Bootcamp Training",
    org: "Sharda University",
    period: "May 2025 – June 2025",
    points: [
      "Completed 50+ DSA problems (arrays, linked lists, stacks, queues, sorting) on LeetCode, sharpening algorithmic thinking and coding efficiency.",
      "Built a full-stack capstone project plus 3+ smaller apps covering REST API design, database integration, and responsive UI.",
      "Took part in 3 mock interviews, aptitude tests, and group discussions to sharpen technical communication under interview conditions.",
    ],
  },
};

export const stats = [
  { value: "170+", label: "DSA problems solved" },
  { value: "3", label: "Full-stack projects shipped" },
  { value: "10+", label: "REST API endpoints built (Job Board alone)" },
  { value: "7.7", label: "CGPA / 10" },
];

export const skills = [
  {
    folder: "languages/",
    items: ["Java", "C++", "Python"],
  },
  {
    folder: "frontend/",
    items: ["React.js", "Next.js", "HTML/CSS", "Tailwind CSS", "JavaScript"],
  },
  {
    folder: "backend/",
    items: ["Node.js", "Express.js", "MongoDB", "SQL"],
  },
  {
    folder: "tools/",
    items: ["Git", "GitHub", "VS Code", "Postman", "Canva"],
  },
];

export const softSkills = ["Teamwork", "Critical Thinking", "Leadership", "Communication"];

export const projects = [
  {
    id: "ai-interview-platform",
    name: "AI-Powered Interview Practice Platform",
    period: "January 2026 – Present",
    stack: ["React.js", "Node.js", "REST API", "MongoDB"],
    points: [
      "Engineered an AI-powered mock interview system generating role-specific questions using AI APIs, supporting multiple job tracks and resume-based customization.",
      "Integrated a feedback engine evaluating responses on accuracy, clarity, and confidence using a structured scoring model.",
      "Built an interview history dashboard with performance trend analytics across 5+ skill categories, helping users track improvement through a 3-parameter scoring model.",
    ],
    github: "https://github.com/pareekshit007",
    live: null,
  },
  {
    id: "alumni-network-platform",
    name: "Alumni Network Platform",
    period: "September 2025",
    stack: ["React.js", "Node.js", "Express.js", "REST API", "MongoDB"],
    points: [
      "Developed a full-stack professional networking platform supporting 2+ user roles (students & alumni) with role-based dashboards and access control.",
      "Architected RESTful APIs for user profiles, posts, messaging, and mentorship features with role-based authorization.",
      "Implemented JWT authentication with bcrypt password hashing across 2+ user roles with 5+ protected routes and middleware-based session management.",
    ],
    github: "https://github.com/pareekshit007",
    live: null,
  },
  {
    id: "job-board",
    name: "Job Board",
    period: "June 2025",
    stack: ["React.js", "JavaScript", "HTML", "CSS"],
    points: [
      "Built a job portal supporting separate recruiter and job-seeker flows with role-based access control and protected routes.",
      "Developed a dynamic job listing system with multi-parameter search and filter, improving job discovery efficiency.",
      "Integrated secure REST APIs across 10+ endpoints for job CRUD operations, application tracking, and JWT-based authentication.",
    ],
    github: "https://github.com/pareekshit007",
    live: null,
  },
];

export const achievements = [
  "Solved 170+ Data Structures & Algorithms problems across platforms including LeetCode.",
  "Actively contributed to GitHub repositories, collaborating on projects with version control best practices.",
  "Oracle Certified Java Programmer — proficient in Core Java, OOP principles, and exception handling.",
  "Currently learning DevOps fundamentals: CI/CD pipelines, Docker, and deployment strategies.",
];

export const nav = [
  { id: "about", label: "about.js" },
  { id: "skills", label: "skills.js" },
  { id: "projects", label: "projects.js" },
  { id: "stats", label: "stats.js" },
  { id: "contact", label: "contact.js" },
];