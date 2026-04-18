
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';

const About = () => {
  return (
    <section
      id="about"
      className="section-shell mt-10 py-8 font-sans sm:mt-14 sm:py-10 lg:mt-20 lg:py-16"
    >
      <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:gap-16 xl:gap-20">
        <div className="mt-6 w-full max-w-2xl text-center lg:mt-0 lg:w-1/2 lg:max-w-none lg:text-left">
          <h1 className="mb-2 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Hi, I am
          </h1>
          <h2 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Aman
          </h2>
          <h3 className="mb-4 text-xl font-semibold leading-tight text-[#8245ec] sm:text-2xl md:text-3xl">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Coder',
                'Frontend Developer',
                'Backend Developer',
                'Full Stack Developer',
                'Software Developer Engineer'
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:mt-8 sm:text-lg lg:mx-0">
            Aspiring Software Development Engineer with hands-on experience in building scalable web applications, backed by strong fundamentals in data structures, algorithms, and object-oriented programming, with a focus on clean, maintainable, and user-centric solutions.
          </p>
          <a
            href="https://drive.google.com/file/d/1FihTH265Ezs5KU7NdJDVRuc0xE28Na5P/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-center text-base font-bold text-white transition duration-300 hover:scale-105 sm:px-8 sm:text-lg"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
          
        </div>
        <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
          <Tilt
            className="h-48 w-48 rounded-full border-4 border-purple-700 sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-[26rem] lg:w-[26rem] xl:h-[28rem] xl:w-[28rem]"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Aman portrait"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
