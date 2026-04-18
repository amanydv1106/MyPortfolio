
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="section-shell clip-path-custom-3 bg-skills-gradient py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="mx-auto mt-4 h-1 w-32 bg-purple-500"></div>
        <p className="mx-auto mt-4 max-w-3xl text-base font-semibold text-gray-400 sm:text-lg">
          My education has been a journey of learning and development. Here are
          the details of my academic background.
        </p>
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-white/20 via-[#8245ec] to-white/20 lg:left-1/2 lg:-translate-x-1/2"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative mb-12 flex lg:mb-16 ${
              index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
            }`}
          >
            <div className="absolute left-6 top-8 z-10 -translate-x-1/2 lg:left-1/2">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-[#8245ec] bg-[#0f0a24] p-1 shadow-[0_0_25px_rgba(130,69,236,0.35)] lg:h-16 lg:w-16">
                <img
                  src={edu.img}
                  alt={edu.school}
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
                <div className="h-16 w-24 overflow-hidden rounded-md bg-white">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white sm:text-xl">
                      {edu.degree}
                    </h3>
                    <h4 className="mt-1 text-sm text-gray-300 sm:text-base">
                      {edu.school}
                    </h4>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">{edu.date}</p>
                </div>
              </div>

              <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-[#c4b5fd]">
                Grade: {edu.grade}
              </p>
              <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
