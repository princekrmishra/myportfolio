// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';


// Education Section Logo's
import cuLogo from './assets/education_logo/cu.png';
import gcLogo from './assets/education_logo/gc.png';
import davLogo from './assets/education_logo/dav.png';


// Project Section Logo's
import martLogo from './assets/mishramart.png'
import umsLogo from './assets/ums.png'
import mazeLogo from './assets/maze.png'
import passLogo from './assets/passwordgenerator.png';
import imgLogo from './assets/galary.png';
import todoLogo from './assets/todo.png';
import instaLogo from './assets/instasite.png'

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

 
  
  export const education = [
    {
      id: 0,
      img: cuLogo,
      school: "Chandigarh University, Mohali, Punjab",
      date: "August 2022 - July 2026",
      grade: "7.96 CGPA",
      desc: "I am currently pursuing a Bachelor of Engineering in Computer Science and Engineering from Chandigarh University, with a CGPA of 7.96. Throughout my academic journey, I have built a strong foundation in core computer science subjects such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Web Development. I have also engaged in various projects and hands-on activities that have enhanced my practical skills. This learning experience has laid a solid foundation for my career in software development and continues to drive my passion for building innovative and efficient digital solutions.",
      degree: "BE-CSE",
    },
    {
      id: 1,
      img: gcLogo,
      school: "Gaya College, Gaya",
      date: "September 2020 - April 2022",
      grade: "73.2%",
      desc: "I completed my Intermediate education in the Science stream from the Bihar School Examination Board (BSEB) with a percentage of 73.2%. During this phase, I developed a strong interest in mathematics and computer science, which laid the foundation for my technical education. The science curriculum helped me build logical reasoning, analytical thinking, and problem-solving skills, which later influenced my decision to pursue Computer Science Engineering at the undergraduate level.",
      degree: "BSEB(XII) - PCM",
    },
    {
      id: 2,
      img: davLogo,
      school: "DAV Public School, Gaya",
      date: "Apr 2018 - March 2020",
      grade: "78.6%",
      desc: "I completed my matriculation from DAV Public School under the Central Board of Secondary Education (CBSE), securing 78.6%. During this period, I developed a strong interest in mathematics and computers, which laid the groundwork for my passion for technology. The school’s focus on academic discipline and co-curricular activities helped me build essential skills such as problem-solving, time management, and a curious mindset. This phase of my education played a crucial role in shaping my academic direction and motivated me to pursue a career in the field of computer science.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "InstaSite",
      description:
        "InstaSite is a SaaS platform I built to make the process of starting web projects faster and easier. It lets users instantly generate complete, ready-to-use project setups based on popular tech stacks like Node.js, React, or full-stack combos. Instead of spending hours setting up folder structures, configuring databases, and integrating services, InstaSite does it all in a few clicks. It uses Next.js 14 for the frontend, Clerk for user authentication, Neon for PostgreSQL hosting, Uploadcare for file uploads, Stripe for payments, and Bun for fast performance. The platform also supports one-click deployment, live previews through Ngrok, and even sets up API routes and database schemas. Developers can create accounts, pick their stack, customize settings, and get production-ready code instantly. It's perfect for building MVPs, client projects, or internal tools—especially for freelancers, startups, and teams who want to save time and skip the boring setup work.",
      image: instaLogo,
      tags: ["React", "Next.js", "JavaScript", "Node.js", "Convex DB", "PayPal", "Gemini API", "OAuth", "shadcn/ui", "Lucide React", "Sandpack", "GitHub", "Vercel", "REST API", "API Routing", "Webhooks", "SaaS"],
      github: "https://github.com/princekrmishra/instasite",
      webapp: "https://instasite-ai.vercel.app/",
    },
    {
      id: 1,
      title: "Mishra Mart - E-Commerce (MERN, Authentication, Payment)",
      description:
        "Mishra Mart is a fully functional MERN-stack e-commerce application designed to deliver a seamless online shopping experience. It features user authentication with JWT, secure role-based access for admins and users, dynamic product management, real-time cart updates, and Stripe integration for safe and smooth payment processing. The platform supports responsive UI built with Tailwind CSS, admin dashboard for inventory control, and order tracking for customers. This project showcases my skills in full-stack development, RESTful API design, secure authentication flows, and integration of third-party payment systems.",
      image: martLogo,
      tags: ["React.js", "Redux Toolkit", "Tailwind CSS", "Node.js", "Express.js", "Mongoose", "MongoDB", "Razorpay"],
      github: "https://github.com/princekrmishra/E-Commerce-Website-MERN",
      webapp: "https://mishra-mart.vercel.app/",
    },
    {
      id: 2,
      title: "University Management System",
      description:
        "The University Management System is a frontend-only web application developed using React.js to simulate the academic workflows of a university. It features responsive UI components for managing students, faculty, departments, and course information. The system supports dynamic routing using React Router and utilizes Context API for efficient state management across components. Tailwind CSS is used for fast and consistent UI styling. This project demonstrates proficiency in building structured, modular React applications and designing intuitive interfaces for academic record handling.",
      image: umsLogo,
      tags: ["HTML5", "CSS3", "JavaScript (ES6)", "React", "Tailwind"],
      github: "https://github.com/princekrmishra/University-Management-System",
      webapp: "https://princekrmishra.github.io/University-Management-System/",
    },
    {
      id: 3,
      title: "Maze Solver Visualizer – Pathfinding Algorithm Simulation",
      description:
        "Maze Solver Visualizer is a web-based interactive tool developed using vanilla JavaScript to demonstrate the working of pathfinding algorithms in a grid-based maze. Users can create custom walls, set starting and ending points, and visualize how algorithms like BFS (Breadth-First Search) and DFS (Depth-First Search) navigate through obstacles to find the shortest path. The application features smooth animations, intuitive controls, and real-time feedback, making it an educational and engaging tool for understanding graph traversal techniques. This project highlights strong problem-solving skills, algorithmic thinking, and frontend development using core web technologies.",
      image: mazeLogo,
      tags: ["JavaScript (ES6)", "HTML5", "CSS3", "Chrome DevTools"],
      github: "https://github.com/princekrmishra/MazeSolver",
      webapp: "https://princekrmishra.github.io/MazeSolver/",
    },
    {
      id: 4,
      title: "Todo List App – Task Management Tool",
      description:
        "Todo List App is a lightweight task management tool built using vanilla JavaScript. It allows users to add, delete, and mark tasks as completed in a simple and responsive interface. The application leverages LocalStorage to persist data across sessions, ensuring that tasks remain saved even after the browser is closed. With clean UI and functional logic, this project demonstrates core JavaScript concepts such as DOM manipulation, event handling, and local data persistence—making it a solid example of building dynamic web applications without any external libraries or frameworks.",
      image: todoLogo,
      tags: ["JavaScript", "HTML", "CSS", "LocalStorage"],
      github: "https://github.com/princekrmishra/Todo-List-App",
      webapp: "https://princekrmishra.github.io/Todo-List-App/",
    },
    {
      id: 5,
      title: "SecurePass – Random Password Generator",
      description:
        "SecurePass is a web-based password generator built using vanilla JavaScript that allows users to create strong, secure, and customizable passwords with just one click. The application supports user-defined criteria such as including uppercase letters, lowercase letters, numbers, and special characters, ensuring flexible and robust password creation. It also features clipboard copy functionality for ease of use. This project highlights your understanding of core JavaScript logic, DOM manipulation, event handling, and basic UI/UX design principles.",
      image: passLogo,
      tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
      github: "https://github.com/princekrmishra/Password-Generator",
      webapp: "https://princekrmishra.github.io/Password-Generator/",
    },
    {
      id: 6,
      title: "SnapVault – Interactive Image Gallery",
      description:
        "SnapVault is a responsive and interactive image gallery web application developed using vanilla JavaScript, HTML, and CSS. It allows users to explore a curated collection of images with smooth UI transitions, hover effects, and grid-based layout. The gallery adapts to different screen sizes for an optimal user experience across devices. This project demonstrates frontend design skills, DOM manipulation, and dynamic content rendering without the use of any frameworks or libraries.",
      image: imgLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/princekrmishra/Image-Gallary",
      webapp: "https://princekrmishra.github.io/Image-Gallary/",
    },
    
  ];  