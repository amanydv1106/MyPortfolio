import { FaBriefcase } from "react-icons/fa";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="section-shell clip-path-custom-2 bg-skills-gradient py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="mx-auto mt-4 h-1 w-32 bg-purple-500"></div>
        <p className="mx-auto mt-4 max-w-3xl text-base font-semibold text-gray-400 sm:text-lg">
          My professional experience reflects hands-on work in building scalable
          products, backend systems, and maintainable software solutions.
        </p>
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-white/20 via-[#8245ec] to-white/20 lg:left-1/2 lg:-translate-x-1/2"></div>

        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative mb-12 flex lg:mb-16 ${
              index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
            }`}
          >
            <div className="absolute left-6 top-8 z-10 -translate-x-1/2 lg:left-1/2">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-[#8245ec] bg-[#0f0a24] p-1 text-[#c4b5fd] shadow-[0_0_25px_rgba(130,69,236,0.35)] lg:h-16 lg:w-16">
                <FaBriefcase className="text-lg lg:text-xl" />
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>

            <div
              className={`ml-16 w-[calc(100%-4rem)] rounded-3xl border border-white/10 bg-gray-900/85 p-5 shadow-[0_0_20px_1px_rgba(130,69,236,0.25)] transition-transform duration-300 hover:scale-[1.01] sm:ml-20 sm:w-[calc(100%-5rem)] sm:p-6 lg:ml-0 lg:w-[calc(50%-3.5rem)] lg:p-8 ${
                index % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto"
              }`}
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
                <div className="flex h-16 w-24 items-center justify-center rounded-md bg-[#1a1338] text-[#c4b5fd]">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white sm:text-xl">
                      {experience.role}
                    </h3>
                    <h4 className="mt-1 text-sm text-gray-300 sm:text-base">
                      {experience.company}
                    </h4>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">{experience.date}</p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
                {experience.summary}
              </p>

              <ul className="mt-4 space-y-3 text-sm leading-7 text-gray-400 sm:text-base">
                {experience.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#8245ec]"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {experience.certificate && (
                <div className="mt-6">
                  <a
                    href={experience.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#8245ec] px-5 py-2 text-sm font-semibold text-[#c4b5fd] transition hover:bg-[#8245ec] hover:text-white sm:text-base"
                  >
                    View Certificate
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
