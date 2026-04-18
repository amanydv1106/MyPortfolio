
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="section-shell py-8 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-purple-500">Aman</h2>

        <nav className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-x-6">
          {[
            { name: "About", id: "about" },
            { name: "Experience", id: "experience" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="my-1 text-sm hover:text-purple-500 sm:text-base"
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {[
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/amanydv1106/" },
            { icon: <SiLeetcode />, link: "https://leetcode.com/u/amanydv1106/" },
            { icon: <FaGithub />, link: "https://github.com/amanydv1106/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/amanydv01/" },
            
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl transition-transform hover:scale-110 hover:text-purple-500"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <p className="text-sm text-gray-400 mt-6">
          © 2025 Aman. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
