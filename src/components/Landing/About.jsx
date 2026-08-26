import React from "react";
import resumeUrl from "../../Resume/roopauppar-cv.pdf";
import aboutwomen from "../../assets/images/aboutimg2.png";

const About = () => {
  const info = [
    {
      text: "Years IT Experience",
      count: "2",
    },
    {
      text: "Projects Completed",
      count: "4",
    },
    {
      text: "Professional Experience",
      count: "3",
    },
  ];

  return (
    <section
      id="about"
      className="relative px-4 py-16 overflow-hidden text-white"
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          top-20
          right-0
          w-72
          h-72
          rounded-full
          bg-cyan-600/10
          blur-3xl
        "
      ></div>

      <div className="relative max-w-6xl mx-auto">

        {/* ================= Heading ================= */}

        <div className="text-center">
          <h3 className="text-4xl font-semibold md:text-5xl">
            <span
              className="
                relative
                inline-block
                before:content-['']
                before:absolute
                before:block
                before:w-full
                before:h-[2px]
                before:bottom-0
                before:left-0
                before:bg-cyan-600
                before:scale-x-0
                before:hover:scale-x-100
                before:origin-left
                before:transition-transform
                before:duration-300
              "
            >
              About <span className="text-cyan-600">Me</span>
            </span>
          </h3>

          <p className="mt-3 text-lg text-gray-400">
            A little about my journey
          </p>
        </div>

        {/* ================= Main Content ================= */}

        <div
          className="
            flex
            flex-col
            items-center
            gap-12
            mt-12
            lg:flex-row
            lg:gap-16
          "
        >

          {/* ================= Image ================= */}

          <div
            className="
              relative
              flex
              items-center
              justify-center
              w-full
              lg:w-2/5
              order-1
            "
          >
            {/* Soft Glow */}
            <div
              className="
                absolute
                w-56
                h-56
                sm:w-64
                sm:h-64
                lg:w-72
                lg:h-72
                rounded-full
                bg-cyan-500/20
                blur-3xl
              "
            ></div>

            {/* Decorative Circle */}
            <div
              className="
                absolute
                w-64
                h-64
                sm:w-72
                sm:h-72
                lg:w-80
                lg:h-80
                rounded-full
                border
                border-cyan-500/20
              "
            ></div>

            {/* Decorative Dots */}
            <span
              className="
                absolute
                top-8
                right-10
                w-3
                h-3
                rounded-full
                bg-cyan-500
                shadow-lg
                shadow-cyan-500/50
              "
            ></span>

            <span
              className="
                absolute
                bottom-10
                left-8
                w-2
                h-2
                rounded-full
                bg-cyan-400
              "
            ></span>

            {/* Image */}
            <div className="relative z-10">
              <img
                src={aboutwomen}
                alt="Roopa Uppar"
                className="
                  object-contain
                  w-64
                  h-72
                  sm:w-72
                  sm:h-80
                  lg:w-80
                  lg:h-96
                  drop-shadow-[0_20px_35px_rgba(6,182,212,0.15)]
                  transition-transform
                  duration-500
                  hover:scale-105
                "
              />
            </div>
          </div>

          {/* ================= About Content ================= */}

          <div className="w-full lg:w-3/5 order-2">

            <div className="space-y-4 text-gray-300">

              <p className="text-sm leading-7 text-justify sm:text-base">
                I'm{" "}
                <span className="font-semibold text-white">
                  Roopa Uppar
                </span>
                , a Frontend Developer with professional experience
                building responsive and user-friendly web applications
                using{" "}
                <span className="text-cyan-500">
                  React.js, JavaScript, HTML, CSS
                </span>{" "}
                and modern frontend technologies.
              </p>

              <p className="text-sm leading-7 text-justify sm:text-base">
                Alongside my software development experience, I have
                professional experience in data management, which has
                strengthened my problem-solving, analytical,
                documentation, and attention-to-detail skills.
              </p>

              <p className="text-sm leading-7 text-justify sm:text-base">
                I enjoy building practical projects, learning modern
                technologies, and turning designs into clean and
                interactive web experiences. I'm currently looking to
                contribute my development skills to a software
                development team.
              </p>

            </div>

            {/* ================= Statistics ================= */}

            <div
              className="
                grid
                grid-cols-3
                gap-3
                mt-8
                sm:gap-5
              "
            >
              {info.map((content) => (
                <div
                  key={content.text}
                  className="
                    group
                    p-3
                    text-center
                    bg-gray-800/70
                    border
                    border-gray-700
                    rounded-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-cyan-600/60
                    hover:bg-gray-800
                  "
                >
                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-white
                      sm:text-3xl
                    "
                  >
                    {content.count}
                    <span className="text-cyan-600">+</span>
                  </h3>

                  <p
                    className="
                      mt-1
                      text-[10px]
                      leading-4
                      text-gray-400
                      sm:text-xs
                      md:text-sm
                    "
                  >
                    {content.text}
                  </p>
                </div>
              ))}
            </div>

            {/* ================= Buttons ================= */}

            <div className="flex flex-wrap gap-4 mt-8">

              {/* Download CV */}
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-gray-900
                  bg-cyan-500
                  rounded-full
                  transition-all
                  duration-300
                  hover:bg-cyan-400
                  hover:shadow-lg
                  hover:shadow-cyan-500/20
                  active:scale-95
                "
              >
                Download CV
              </a>

              {/* Contact Me */}
              <a
                href="#contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-cyan-400
                  bg-transparent
                  border
                  border-cyan-600
                  rounded-full
                  transition-all
                  duration-300
                  hover:bg-cyan-600
                  hover:text-white
                  active:scale-95
                "
              >
                Contact Me
              </a>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;