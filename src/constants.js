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


// Education Section Logo's
import glaLogo from './assets/education_logo/NITA_logo.png';
import bsaLogo from './assets/education_logo/GU_logo.png';
import vpsLogo from './assets/education_logo/school_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/portfolio.png';
import demoLogo from './assets/work_logo/demo.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'MySQL', logo: mysqlLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
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
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "National Institute of Technology, Agartala",
      date: "Aug 2024 - May 2027",
      grade: "8.51 CGPA",
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
      date: "Apr 2016 - March 2017",
      grade: "8.6 CGPA",
      desc: "I completed my class 10 education from Royal Public Sr. Sec. School Wazirpur, Gurugram, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "My Portfolio Website",
      description:
        "A modern, responsive personal portfolio website built using React.js and styled with Tailwind CSS. The site showcases my skills, projects, and contact information in a clean, interactive UI. It includes smooth animations, mobile responsiveness, and a fully functional contact form powered by EmailJS, allowing visitors to send messages directly to my email.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "Tailwind Css", "EmailJS"],
      github: "https://github.com/amanydv1106/MyPortfolio.git",
      webapp: "https://aman-portfolio-website1.vercel.app/",
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
  ];
  
