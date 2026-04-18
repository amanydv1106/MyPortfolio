// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import express from './assets/tech_logo/Express.png';
import mongodb from './assets/tech_logo/MongoDB.png';
import nextjs from './assets/tech_logo/Next.png';
import nodejs from './assets/tech_logo/Node.png';
import postgresql from './assets/tech_logo/PostgreSQL.png';
import prisma from './assets/tech_logo/Prisma.png';
import sql from './assets/tech_logo/SQL.png';
import typescript from './assets/tech_logo/TypeScript.png';


// Education Section Logo's
import glaLogo from './assets/education_logo/NITA_logo.png';
import bsaLogo from './assets/education_logo/GU_logo.png';
import vpsLogo from './assets/education_logo/school_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/portfolio.png';
import demoLogo from './assets/work_logo/demo.png';
import ecommerce from './assets/work_logo/ecommerce.png';

//Company Logos
import cps from './assets/company_logo/CPSLogo.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescript },
      { name: 'React.js', logo: reactjsLogo },
      { name: 'Next.js', logo: nextjs },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', logo: nodejs },
      { name: 'Express.js', logo: express },
      { name: 'Next.js', logo: nextjs },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'PostgreSQL', logo: postgresql },
      { name: 'MongoDB', logo: mongodb },
      { name: 'SQL', logo: sql },
      { name: 'Prisma', logo: prisma },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescript },
      { name: 'SQL', logo: sql },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: cps,
    company: "Cloudplay Solutions",
    role: "Software Development Engineer Intern",
    date: "July 2025 - Jan 2026",
    certificate: import.meta.env.VITE_EXPERIENCE_CERTIFICATE_URL,
    summary:
      "Worked on scalable, high-performance web applications with a strong focus on backend systems, API integrations, and maintainable engineering practices.",
    points: [
      "Designed and developed scalable, high-performance web applications using Node.js, Express.js, Next.js, and MySQL.",
      "Built backend systems and API integrations with a focus on performance, reliability, and clean architecture.",
      "Designed and implemented a robust microservices architecture in collaboration with cross-functional teams.",
      "Worked with Git-based workflows to support scalability, maintainability, and high code quality.",
    ],
  },
];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "National Institute of Technology, Agartala",
      date: "Aug 2024 - May 2027",
      grade: "8.60 CGPA",
      desc: "I am currently pursuing my MCA at NIT Agartala, where I’m strengthening my skills in programming and full-stack development. The curriculum has exposed me to essential areas such as data structures, algorithms, object-oriented programming (OOP), database management systems (DBMS), and web technologies. I regularly take part in technical events, coding workshops, and hands-on projects to deepen my understanding. This journey is equipping me with both theoretical knowledge and practical experience, helping me grow into a well-rounded professional developer.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "Gurugram University, Gurugram",
      date: "July 2019 - June 2022",
      grade: "67.8%",
      desc: "I completed my Bachelor's degree in Computer Applications (BCA) from Gurugram University, Gurugram. During my studies, I explored a wide range of subjects that deepened my understanding of computing and technology. From learning data structures and algorithms to diving into web development and database management systems, I gained valuable practical insights into the world of web development. My time at Gurugram University also gave me opportunities to work on projects that applied theoretical concepts to real-world scenarios.",
      degree: "Bachelor of Computer Application - BCA",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Royal Public Sr. Sec. School Wazirpur, Gurugram",
      date: "Apr 2018 - March 2019",
      grade: "76.2%",
      desc: "I completed my class 12 education from Royal Public Sr. Sec. School Wazirpur, Gurugram, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: vpsLogo,
      school: "Royal Public Sr. Sec. School Wazirpur, Gurugram",
      date: "Apr 2017 - March 2018",
      grade: "8.6 CGPA",
      desc: "I completed my class 10 education from Royal Public Sr. Sec. School Wazirpur, Gurugram, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X) - Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "My Portfolio Website",
      description:
        "The portfolio website is designed with a focus on responsiveness, accessibility, and structured content presentation across mobile, tablet, desktop, and large screens. It features dedicated sections for About, Experience, Skills, Projects, Education, and Contact, providing a comprehensive overview of professional and academic achievements, including a timeline-based layout for clear visualization of career progression. The contact functionality is powered by EmailJS, enabling seamless communication through environment-configured forms, along with optional certificate link integration within the experience section. Built using React and JavaScript, the application ensures dynamic and interactive user interfaces, while Tailwind CSS is used for modern, responsive styling. The project is configured with Vite for fast development, optimized builds, and smooth deployment on a custom domain.",
      image: githubdetLogo,
      tags: ["React.js", "Vite", "JavaScript", "Tailwind CSS", "EmailJS"],
      github: "https://github.com/amanydv1106/MyPortfolio.git",
      webapp: "https://aman-mca-nita.me/",
    },
    {
      id: 1,
      title: "Mini Ecommerce (Add to Cart functionality)",
      description:
        "Mini Ecommerce Store is a responsive shopping UI built with HTML, CSS, and JavaScript. It features an animated add-to-cart experience, a dynamic cart sidebar with localStorage support, and a clean, mobile-friendly design — all without using any frameworks.",
      image: demoLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/amanydv1106/mini-ecommerce-Frontend.git",
      webapp: "https://mini-ecommerce-frontend1.vercel.app/",
    },
    {
      id: 2,
      title: "NextKart– Multi Vendor E-commerce Platform",
      description:
        "NexKart is built on a modern full-stack architecture that combines performance, scalability, and developer efficiency. The application leverages Next.js for full-stack routing and server-side capabilities, along with React and TypeScript to create a robust and maintainable user interface. The development workflow is powered by Bun, while Prisma and PostgreSQL handle efficient database modeling and data persistence. Authentication and user management are implemented using Clerk, and secure payment processing is enabled through Stripe. Media handling is optimized with ImageKit, while background jobs and event-driven workflows are managed using Inngest. Client-side state is handled with Redux Toolkit, and the interface is styled using Tailwind CSS for a responsive design. Additionally, the platform integrates AI capabilities using OpenAI-compatible and Gemini-style vision APIs to generate intelligent product titles and descriptions.",
      image: ecommerce,
      tags: ["Next.js", "React", "TypeScript", "Bun", "Prisma", "PostgreSQL", "Clerk", "Stripe", "ImageKit", "Inngest", "Redux Toolkit", "Tailwind CSS", "Gemini-style vision API integration"],
      github: "https://github.com/amanydv1106/ecommercewebsite",
      webapp: "https://nexkartt.vercel.app/",
    },
  ];
  
