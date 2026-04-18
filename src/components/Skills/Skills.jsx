
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="section-shell clip-path-custom bg-skills-gradient py-16 font-sans sm:py-20 lg:py-24"
  >
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="mx-auto mt-4 max-w-3xl text-base font-semibold text-gray-400 sm:text-lg">
        A collection of my technical skills and expertise honed through various
        projects and experiences.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-6 py-10 xl:grid-cols-2">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="w-full rounded-3xl border border-white/10 bg-gray-900/80 px-5 py-6 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] backdrop-blur-md sm:px-8 lg:px-10"
        >
          <h3 className="mb-4 text-center text-2xl font-semibold text-gray-400 sm:text-3xl">
            {category.title}
          </h3>

          <Tilt
            key={category.title}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="grid w-full grid-cols-2 gap-3 md:grid-cols-3">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex min-h-14 items-center justify-center gap-2 rounded-3xl border-2 border-gray-700 bg-transparent px-3 py-2 text-center"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                  <span className="text-xs sm:text-sm text-gray-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
