import { FaGithub, FaBrain, FaUsers, FaMobileAlt, FaTasks, FaRobot } from 'react-icons/fa'

export const profile = {
  name: 'Shevoni Rogers',
  title: 'Full-Stack Engineer & AI Automation Specialist',
  summary:
    'Software engineering undergraduate building production-grade systems that eliminate manual work. From YOLOv11 computer vision pipelines to MERN applications — I engineer solutions that save hours, not minutes.',
  email: 'shevonirogers1915@gmail.com',
  linkedin: 'https://www.linkedin.com/in/shevoni-rogers-51b811338',
  github: 'https://github.com/ShevoniR',
  portfolio: 'https://shevoni-portfolio.vercel.app/',
}

export const heroStats = [
  { value: '30×', label: 'Automation speedup' },
  { value: '10+', label: 'Projects shipped' },
  { value: '2+', label: 'Years industry exp' },
]

export const impactCards = [
  {
    metric: '30 min → 2 min',
    title: 'Healthcare Document Automation',
    description:
      'Python backend auto-fetches fields from Excel, populates templates, and compiles 3 documents into a merged PDF — eliminating repetitive manual RCM work at Legacy Health LLC.',
    color: 'pink',
  },
  {
    metric: '5 hrs → 1 hr',
    title: 'YOLOv11 Caravan Park Detection',
    description:
      'Trained a YOLOv11 model to auto-detect map components from RMS Interactive Map Builder screenshots, converting detections to geographic coordinates via bilinear interpolation at Insighture.',
    color: 'blue',
  },
  {
    metric: '15+',
    title: 'Staff Trained & Team Led',
    description:
      'Managed cross-functional teams and onboarded 15+ staff in financial clearance and medical insurance workflows as Senior Executive at Legacy Health LLC.',
    color: 'green',
  },
]

export const experience = [
  {
    period: 'Oct 2025 – Present',
    role: 'Data Process Analyst',
    company: 'Insighture Pvt Ltd',
    type: 'Contract',
    current: true,
    points: [
      'Trained and deployed a YOLOv11 computer vision model integrated with RMS Interactive Map Builder (Chrome Extension) to auto-detect caravan park components — cabins, powered sites, tents, amenities, boat ramps, playgrounds — from map screenshots.',
      'Built a Python pipeline that converts YOLO bounding box detections to precise geographic coordinates using bilinear interpolation across 4-corner reference points, outputting structured JSON for property management systems.',
      'Reduced manual map component tagging from 5 hours to under 1 hour — an 80% efficiency gain.',
      'Executed data mapping and validation using browser-based tools; reported inconsistencies and maintained documentation in an Agile team via Slack.',
    ],
    tags: ['YOLOv11', 'Python', 'Computer Vision', 'OpenCV', 'NumPy', 'Ultralytics', 'JSON', 'Agile'],
  },
  {
    period: 'Nov 2022 – Oct 2025',
    role: 'Senior Executive',
    company: 'Legacy Health LLC',
    type: 'Promoted 3× (Trainee → Executive → Senior Executive)',
    current: false,
    points: [
      'Built a Python automation backend that fetches patient/claim data from Excel, auto-populates 3 reconsideration document templates, and merges them into a final PDF — reducing document preparation from 30 minutes to 2 minutes.',
      'Managed end-to-end Revenue Cycle Management (RCM) tasks for U.S.-based healthcare clients including billing, insurance verification, and appeals.',
      'Managed a cross-functional team and trained 15+ staff in financial clearance and medical insurance workflows.',
      'Maintained Practice Management Systems (PMS); collaborated on system updates using Excel, Word, Outlook, MS Teams, and PowerPoint.',
    ],
    tags: ['Python', 'Excel Automation', 'Document Processing', 'RCM', 'Healthcare', 'Team Leadership'],
  },
]

export const education = [
  {
    school: 'Sri Lanka Institute of Information Technology (SLIIT)',
    degree: 'BSc (Hons) in IT — Specializing in Software Engineering',
    grad: '2027 (Expected)',
  },
  {
    school: 'Sri Lanka Institute of Information Technology (SLIIT)',
    degree: 'HND in Information Technology',
    grad: 'June 2025',
  },
  {
    school: 'Good Shepherd Convent, Kotahena',
    degree: "G.C.E Advanced Level (English Medium) — 4 A's",
    grad: '2022',
  },
]

export const skills = {
  frontend: ['React.js / Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5 / CSS3', 'Bootstrap', 'Figma / UI Design'],
  backend: ['Node.js / Express', 'Python', 'Java', 'MongoDB / SQL', 'REST APIs / JWT', 'PHP / Django'],
  tools: ['YOLOv11 / Computer Vision', 'Kotlin / Android', 'Flutter', 'Docker / AWS', 'Git / GitHub', 'Firebase'],
}

export const skillIcons = {
  'Problem Solving': <FaBrain className="text-pink-600 text-3xl" />,
  'Team Leadership': <FaUsers className="text-pink-600 text-3xl" />,
  'Responsive designs': <FaMobileAlt className="text-pink-600 text-3xl" />,
  'Version Control': <FaGithub className="text-pink-600 text-3xl" />,
  'Agile Development': <FaTasks className="text-pink-600 text-3xl" />,
  'AI & Automation': <FaRobot className="text-pink-600 text-3xl" />,
}

export const additionalSkills = [
  {
    title: 'Problem Solving',
    description: 'Strong analytical skills with experience in algorithm design and optimization.',
  },
  {
    title: 'AI & Automation',
    description: 'Built YOLOv11 CV pipelines and Python automation tools that cut hours of manual work to minutes.',
  },
  {
    title: 'Team Leadership',
    description: 'Led cross-functional teams and trained 15+ staff in complex workflows.',
  },
  {
    title: 'Responsive designs',
    description: 'Mobile-first UI/UX design with Figma prototyping before development.',
  },
  {
    title: 'Version Control',
    description: 'Experience in GitHub collaboration workflow, branching strategies, and PR reviews.',
  },
  {
    title: 'Agile Development',
    description: 'Experienced in Scrum methodology, sprint planning, and Agile tools like Trello and Slack.',
  },
]

export const projects = [
  {
    title: 'YOLOv11 Caravan Park Map Component Detector',
    description:
      'Trained a YOLOv11 object detection model to automatically identify caravan park components — cabins, powered sites, amenities, playgrounds, boat ramps — from RMS Interactive Map Builder screenshots. Built a full Python inference pipeline with bilinear interpolation to convert pixel detections to real-world geographic coordinates, outputting structured PropertyLayout JSON for the RMS property management system. Reduced a 5-hour manual mapping process to under 1 hour.',
    tags: ['YOLOv11', 'Python', 'Computer Vision', 'OpenCV', 'NumPy', 'AI/ML', 'Automation'],
    image: '/CareerCraft.png',
    code: 'https://github.com/ShevoniR',
    demo: '#',
    featured: true,
    impact: '5hr → 1hr',
    badge: 'AI / Professional Work',
  },
  {
    title: 'Healthcare Document Automation System',
    description:
      'Python backend that fetches patient and claim data from Excel files, auto-populates 3 reconsideration document templates, and merges them into a final compiled PDF. Eliminated repetitive manual data entry for U.S. healthcare insurance appeals workflows at Legacy Health LLC.',
    tags: ['Python', 'openpyxl', 'python-docx', 'PDF Merge', 'Automation'],
    image: '/Smart-health-care-System.png',
    code: 'https://github.com/ShevoniR',
    demo: '#',
    featured: true,
    impact: '30min → 2min',
    badge: 'Automation / Professional Work',
  },
  {
    title: 'CareerCraft AI - ATS-Optimized Resume Builder',
    description:
      'A complete, responsive SaaS web application for AI-powered, ATS-optimized resume building with job tracking, Git-like version control, and real-time collaboration.',
    tags: ['Nest.js', 'shadcn', 'PostgreSQL', 'Prisma ORM', 'NextAuth.js', 'Gemini 2.0'],
    image: '/CareerCraft.png',
    code: 'https://github.com/Vievek/ai-powered-cv-generator',
    demo: '#',
    badge: 'Full Stack / AI',
  },
  {
    title: 'ZeroBite: Smart Food Donation Platform',
    description:
      'Web platform minimising food waste by connecting donors, recipients, and volunteers. Integrates Gemini 2.0 Flash AI for smart matching, Google Maps API for logistics, and Cloudinary for media. Built with Node.js backend and Flutter mobile client.',
    tags: ['Google Maps APIs', 'Gemini 2.0 Flash AI', 'Cloudinary', 'Node.js', 'Flutter'],
    image: '/ZeroHunger.png',
    code: 'https://github.com/ShevoniR/Zero_Hunger',
    demo: '#',
    badge: 'Full Stack / AI',
  },
  {
    title: 'Smart Healthcare System',
    description:
      'Full-stack hospital management platform with patient records, appointment scheduling, and billing. Built with React + TypeScript and a comprehensive Jest test suite covering 200+ test cases following SOLID principles.',
    tags: ['React', 'TypeScript', 'Jest', 'Node.js', 'SOLID principles', '200+ test cases'],
    image: '/Smart-health-care-System.png',
    code: 'https://github.com/ShevoniR/Smart-health-care-System',
    demo: '#',
    badge: 'Full Stack',
  },
  {
    title: 'Weather Analytics App with Comfort Index',
    description:
      'Full-stack weather analytics platform with custom Comfort Index scoring. Features server-side caching, Auth0 MFA authentication, and modular Node.js/Express architecture. Ranks cities from most to least comfortable.',
    tags: ['React.js', 'Node.js', 'Express.js', 'Auth0', 'REST API', 'Caching', 'Full Stack'],
    image: '/Weather-Analytics-App.png',
    code: 'https://github.com/ShevoniR/Weather-Analytics-App',
    demo: '#',
    badge: 'Full Stack',
  },
  {
    title: 'EcoHarvest – Food Waste Management',
    description:
      'MERN stack web app (5-member team) to help restaurants and hotels manage food surplus and waste. Features JWT authentication, Tailwind CSS styling, and Agile project management via Trello.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'Tailwind CSS'],
    image: '/EcoHarvest.png',
    code: 'https://github.com/ShevoniR/EcoHarvest-Frontend',
    demo: '#',
    badge: 'Full Stack / MERN',
  },
  {
    title: 'Bankee – Expense Management App',
    description:
      'Android expense tracker with Kotlin, Room Database (SQLite ORM), RecyclerView, and XML layouts. Tracks income, expenses, and budgets with persistent local storage. UI prototyped in Figma.',
    tags: ['Kotlin', 'Room Database', 'RecyclerView', 'XML', 'Figma', 'Android'],
    image: '/Bankee.png',
    code: 'https://github.com/ShevoniR/Bankee',
    demo: '#',
    badge: 'Mobile',
  },
  {
    title: 'Guest Management System',
    description:
      'Modern web-based guest management with React + TypeScript, PocketBase backend, TanStack Router for dynamic routing, TanStack Query for server-state, and URL-driven modal interactions with real-time updates.',
    tags: ['React', 'TypeScript', 'PocketBase', 'TanStack Router', 'TanStack Query', 'Tailwind CSS'],
    image: '/Guest-Management-System.png',
    code: 'https://github.com/ShevoniR/Guest-Management-System',
    demo: '#',
    badge: 'Full Stack',
  },
  {
    title: 'EcoShift – E-commerce Platform',
    description:
      'Android marketplace connecting eco-conscious buyers with sustainable products, featuring product listings, transactions, and quality control. UI/UX designed in Figma.',
    tags: ['Kotlin', 'Figma', 'XML', 'Mobile'],
    image: '/EcoShift.png',
    code: 'https://github.com/ShevoniR/Eco-Shift',
    demo: '#',
    badge: 'Mobile',
  },
]
