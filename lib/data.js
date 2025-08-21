import {
  FaGithub,
  FaBrain,
  FaUsers,
  FaMobileAlt,
  FaTasks,
} from "react-icons/fa";

export const profile = {
  name: "Shevoni Rogers",
  title: "Software Engineering Undergraduate",
  summary:
    "Passionate about creating innovative solutions through code. Currently seeking software engineering opportunities.",
  email: "shevonirogers1915@gmail.com",
  linkedin: "https://www.linkedin.com/in/shevoni-rogers-51b811338",
  github: "https://github.com/ShevoniR",
};

export const education = [
  {
    school: "SLIIT",
    degree: "BSc in Information Technology specialized in Software Engineering",
    grad: "2027 (Expected)",
  },
];

export const skills = {
  frontend: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
  ],
  backend: ["Node.js", "Express", "MongoDB", "SQL", "Php", "Java"],
  tools: ["Git", "Docker", "AWS", "Firebase"],
};

export const skillIcons = {
  "Problem Solving": <FaBrain className="text-pink-600 text-3xl" />,
  "Team Leadership": <FaUsers className="text-pink-600 text-3xl" />,
  "Responsive designs": <FaMobileAlt className="text-pink-600 text-3xl" />,
  "Version Control": <FaGithub className="text-pink-600 text-3xl" />,
  "Agile Development": <FaTasks className="text-pink-600 text-3xl" />,
};

export const additionalSkills = [
  {
    title: "Problem Solving",
    description:
      "Strong analytical skills with experience in algorithm design and optimization.",
  },
  {
    title: "Team Leadership",
    description: "Led multiple team projects and mentored junior developers.",
  },
  {
    title: "Responsive designs",
    description: "Mobile compatible UI/UX designs",
  },
  {
    title: "Version Control",
    description: "Experience in GitHub collaboration workflow",
  },
  {
    title: "Agile Development",
    description: "Experienced in Scrum methodology and sprint planning.",
  },
];

export const projects = [
  {
    title: "EcoHarvest – Waste Management Web App",
    description:
      "A platform to help restaurants and hotels manage food waste, including reselling surplus food, recycling ingredients, and composting organic waste.",
    tags: ["Nest.js", "Node.js", "MongoDB", "Express.js"],
    image: "/EcoHarvest.png",
    code: "https://github.com/ShevoniR/EcoHarvest-Frontend",
    demo: "#",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A responsive web portfolio showcasing my projects, skills, and professional experience",
    tags: ["API", "Next.js", "Tailwind CSS"],
    image: "/portfolio.png",
    code: "#",
    demo: "#",
  },
  {
    title: "Bankee-Expense Management Mobile App",
    description:
      "An Android app that tracks income, expenses, and budgets, helping users manage personal finances effectively.",
    tags: ["Kotlin", "Java", "Shared preference"],
    image: "/Bankee.png",
    code: "https://github.com/ShevoniR/Bankee",
    demo: "#",
  },
  {
    title: "Robofriends – React Fun App",
    description:
      "An interactive React application that displays a searchable list of robot profiles, showcasing API integration and dynamic UI.",
    tags: ["React", "Material-UI"],
    image: "/RoboFriends.png",
    code: "https://github.com/ShevoniR/Robo-Friends",
    demo: "#",
  },
  {
    title: "Simple To-Do Web App",
    description:
      "A lightweight web application to create, edit, and track tasks, demonstrating core CRUD functionality.",
    tags: ["React", "icons"],
    image: "/ToDoApp.png",
    code: "https://github.com/ShevoniR/ToDo-App",
    demo: "#",
  },
  {
    title: "EcoShift – E-commerce Platform",
    description:
      "An online marketplace connecting eco-conscious buyers with sustainable products, featuring product listings, transactions, and quality control.",
    tags: ["Kotlin", "figma", "XML"],
    image: "/EcoShift.png",
    code: "https://github.com/ShevoniR/Eco-Shift",
    demo: "#",
  },
];
