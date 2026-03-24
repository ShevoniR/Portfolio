import { FaGithub, FaBrain, FaUsers, FaMobileAlt, FaTasks } from 'react-icons/fa'

export const profile = {
  name: 'Shevoni Rogers',
  title: 'Software Engineering Undergraduate',
  summary:
    'Passionate about creating innovative solutions through code. Currently seeking software engineering opportunities.',
  email: 'shevonirogers1915@gmail.com',
  linkedin: 'https://www.linkedin.com/in/shevoni-rogers-51b811338',
  github: 'https://github.com/ShevoniR',
}

export const education = [
  {
    school: 'SLIIT',
    degree: 'BSc in Information Technology specialized in Software Engineering',
    grad: '2027 (Expected)',
  },
]

export const skills = {
  frontend: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap'],
  backend: ['Node.js', 'Express', 'MongoDB', 'SQL', 'Php', 'Java', 'Kotlin', 'Python', 'Django'],
  tools: ['Git', 'Docker', 'AWS', 'Firebase', 'shared preference'],
}

export const skillIcons = {
  'Problem Solving': <FaBrain className="text-pink-600 text-3xl" />,
  'Team Leadership': <FaUsers className="text-pink-600 text-3xl" />,
  'Responsive designs': <FaMobileAlt className="text-pink-600 text-3xl" />,
  'Version Control': <FaGithub className="text-pink-600 text-3xl" />,
  'Agile Development': <FaTasks className="text-pink-600 text-3xl" />,
}

export const additionalSkills = [
  {
    title: 'Problem Solving',
    description: 'Strong analytical skills with experience in algorithm design and optimization.',
  },
  {
    title: 'Team Leadership',
    description: 'Led multiple team projects and mentored junior developers.',
  },
  {
    title: 'Responsive designs',
    description: 'Mobile compatible UI/UX designs',
  },
  {
    title: 'Version Control',
    description: 'Experience in GitHub collaboration workflow',
  },
  {
    title: 'Agile Development',
    description: 'Experienced in Scrum methodology and sprint planning.',
  },
]

export const projects = [
  {
    title: 'CareerCraft AI - ATS-Optimized Resume Builder',
    description:
      'A complete, responsive SaaS web application for AI-powered, ATS-optimized resume building with job tracking, Git-like version control, and real-time collaboration.',
    tags: ['Nest.js', 'shadcn', 'PostgreSQL', 'Prisma ORM', 'NextAuth.js', 'Gemini 2.0'],
    image: '/CareerCraft.png',
    code: 'https://github.com/Vievek/ai-powered-cv-generator',
    demo: '#',
  },
  {
    title: 'ZeroBite: A Smart Food Donation Platform',
    description:
      'ZeroBite, a web-based platform designed to minimize food waste and connect donors, recipients, and volunteers efficiently.',
    tags: ['Google Maps APIs', 'Gemini 2.0 Flash AI', 'Cloudinary', 'Node.js', 'Flutter'],
    image: '/ZeroHunger.png',
    code: 'https://github.com/ShevoniR/Zero_Hunger',
    demo: '#',
  },
  {
    title: 'Smart-health-care-System',
    description:
      'Full stack hospital management platform transforming healthcare operations through digital innovation.',
    tags: ['React', 'Typescript', 'Jest', 'Node.js', 'Solid principles', '200+ test cases'],
    image: '/Smart-health-care-System.png',
    code: 'https://github.com/ShevoniR/Smart-health-care-System',
    demo: '#',
  },
  {
    title: 'Weather Analytics Application with Comfort Index',
    description:
      'Developed a full-stack weather analytics application that retrieves real-time weather data from the OpenWeatherMap API and computes a custom Comfort Index score based on temperature, humidity, wind speed, cloudiness, and atmospheric pressure. Implemented server-side caching to optimize API usage and improve performance, along with a responsive React UI that displays ranked cities from most to least comfortable. Integrated secure authentication and authorization using Auth0, including multi-factor authentication (MFA) and restricted user access. Designed the backend using a modular Node.js and Express architecture with clean separation of concerns for scalability and maintainability.',
    tags: ['React.js', 'Node.js', 'Express.js', 'Auth0', 'REST API', 'Caching', 'Full Stack'],
    image: '/Weather-Analytics-App.png',
    code: 'https://github.com/ShevoniR/Weather-Analytics-App',
    demo: '#',
  },
  {
    title: 'EcoHarvest – Waste Management Web App',
    description:
      'A platform to help restaurants and hotels manage food waste, including reselling surplus food, recycling ingredients, and composting organic waste.',
    tags: ['Nest.js', 'Node.js', 'MongoDB', 'Express.js'],
    image: '/EcoHarvest.png',
    code: 'https://github.com/ShevoniR/EcoHarvest-Frontend',
    demo: '#',
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A responsive web portfolio showcasing my projects, skills, and professional experience',
    tags: ['API', 'Next.js', 'Tailwind CSS'],
    image: '/portfolio.png',
    code: '#',
    demo: '#',
  },
  {
    title: 'Bankee-Expense Management Mobile App',
    description:
      'An Android app that tracks income, expenses, and budgets, helping users manage personal finances effectively.',
    tags: ['Kotlin', 'Java', 'Shared preference'],
    image: '/Bankee.png',
    code: 'https://github.com/ShevoniR/Bankee',
    demo: '#',
  },
  {
    title: 'Guest Management System',
    description:
      'A modern web-based guest management system built with React and PocketBase, featuring full CRUD operations for managing guest records. The application includes dynamic routing using TanStack Router, efficient server state management with TanStack Query, and scalable client-side state handling. Users can add, edit, delete, and search guests with real-time updates, pagination, and modal-based interactions driven by URL state. Designed with a clean UI and responsive layout for seamless user experience.',
    tags: ['React', 'TypeScript', 'PocketBase', 'TanStack Router', 'TanStack Query', 'Tailwind CSS'],
    image: '/Guest-Management-System.png',
    code: 'https://github.com/ShevoniR/Guest-Management-System',
    demo: '#',
  },
  {
    title: 'Robofriends – React Fun App',
    description:
      'An interactive React application that displays a searchable list of robot profiles, showcasing API integration and dynamic UI.',
    tags: ['React', 'Material-UI'],
    image: '/RoboFriends.png',
    code: 'https://github.com/ShevoniR/Robo-Friends',
    demo: '#',
  },
  {
    title: 'Simple To-Do Web App',
    description:
      'A lightweight web application to create, edit, and track tasks, demonstrating core CRUD functionality.',
    tags: ['React', 'icons'],
    image: '/ToDoApp.png',
    code: 'https://github.com/ShevoniR/ToDo-App',
    demo: '#',
  },
  {
    title: 'EcoShift – E-commerce Platform',
    description:
      'An online marketplace connecting eco-conscious buyers with sustainable products, featuring product listings, transactions, and quality control.',
    tags: ['Kotlin', 'figma', 'XML'],
    image: '/EcoShift.png',
    code: 'https://github.com/ShevoniR/Eco-Shift',
    demo: '#',
  },
]
