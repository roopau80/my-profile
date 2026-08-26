import React from "react";
import portfoliowomen from "../../assets/images/portfoliowomen.png";
import bgimg2 from "../../assets/images/bgimg2.jpg";

const Home = () => {
  const social_media = [
    {
      icons: "logo-linkedin",
      live_link: "https://www.linkedin.com/in/roopa-uppar-1901141b3/",
    },
    {
      icons: "logo-github",
      live_link: "https://github.com/Roopauppar",
    },
  ];

  return (
    <section
      id="home"
      className="
        relative
        flex
        flex-col
        items-center
        justify-center
        min-h-screen
        px-5
        py-16
        overflow-hidden
        text-white
        md:flex-row
        md:px-10
      "
    >

      {/* ================= Background Glow ================= */}

      <div
        className="
          absolute
          top-20
          left-10
          w-72
          h-72
          rounded-full
          bg-cyan-600/10
          blur-3xl
        "
      ></div>

      <div
        className="
          absolute
          bottom-10
          right-10
          w-64
          h-64
          rounded-full
          bg-cyan-600/10
          blur-3xl
        "
      ></div>

      {/* ================= Profile Image ================= */}

      <div
        className="
          relative
          z-10
          flex
          items-center
          justify-center
          flex-1
          w-full
          mt-10
          md:mt-0
        "
      >

        {/* Outer Glow */}
        <div
          className="
            absolute
            w-64
            h-64
            sm:w-72
            sm:h-72
            md:w-80
            md:h-80
            rounded-full
            bg-cyan-500/20
            blur-3xl
          "
        ></div>

        {/* Decorative Circle */}
        <div
          className="
            absolute
            w-72
            h-72
            sm:w-80
            sm:h-80
            md:w-[22rem]
            md:h-[22rem]
            rounded-full
            border
            border-cyan-500/20
          "
        ></div>

        {/* Image Container */}
        <div
          className="
            relative
            w-64
            h-64
            sm:w-72
            sm:h-72
            md:w-80
            md:h-80
            overflow-hidden
            rounded-full
            border-2
            border-cyan-600/50
            shadow-2xl
            shadow-cyan-600/10
          "
        >

          {/* Background Image */}
          <img
            src={bgimg2}
            alt=""
            className="
              absolute
              inset-0
              object-cover
              w-full
              h-full
            "
          />

          {/* Profile Image */}
          <img
            src={portfoliowomen}
            alt="Roopa Uppar"
            className="
              absolute
              inset-0
              object-contain
              w-full
              h-full
              transition-transform
              duration-500
              hover:scale-105
            "
          />

        </div>

        {/* Decorative Dots */}

        <span
          className="
            absolute
            top-8
            right-8
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
            bottom-8
            left-8
            w-2
            h-2
            rounded-full
            bg-cyan-400
          "
        ></span>

      </div>

      {/* ================= Hero Content ================= */}

      <div
        className="
          relative
          z-10
          flex-1
          w-full
          mt-10
          md:mt-0
        "
      >

        <div
          className="
            max-w-xl
            mx-auto
            text-center
            md:mx-0
            md:text-left
          "
        >

          {/* Greeting */}

          <p
            className="
              text-lg
              font-medium
              text-gray-400
              sm:text-xl
            "
          >
            Hello, I'm
          </p>

          {/* Name */}

          <h1
            className="
              mt-2
              text-4xl
              font-bold
              leading-tight
              sm:text-5xl
              lg:text-6xl
            "
          >
            Roopa{" "}
            <span className="text-cyan-600">
              Uppar
            </span>
          </h1>

          {/* Role */}

          <h2
            className="
              mt-4
              text-xl
              font-semibold
              text-gray-300
              sm:text-2xl
            "
          >
            Frontend Developer
          </h2>

          {/* Technologies */}

          <p
            className="
              mt-2
              text-sm
              font-medium
              text-cyan-500
              sm:text-base
            "
          >
            React.js · JavaScript · HTML5 · CSS3
          </p>

          {/* Description */}

          <p
            className="
              max-w-lg
              mt-5
              text-sm
              leading-7
              text-gray-400
              sm:text-base
            "
          >
            I build responsive and user-friendly web applications
            using modern frontend technologies, with a focus on clean
            interfaces and engaging user experiences.
          </p>

          {/* Buttons */}

          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-4
              mt-7
              md:justify-start
            "
          >

            {/* View Projects */}

            <a
              href="#projects"
              className="
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
              View Projects
            </a>

            {/* Contact */}

            <a
              href="#contact"
              className="
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

          {/* ================= Social Media ================= */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-4
              mt-8
              md:justify-start
            "
          >

            <span className="text-sm text-gray-500">
              Connect with me
            </span>

            {social_media.map((social_link, index) => (
              <a
                key={index}
                href={social_link.live_link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={
                  social_link.icons === "logo-linkedin"
                    ? "LinkedIn"
                    : "GitHub"
                }
                className="
                  flex
                  items-center
                  justify-center
                  w-10
                  h-10
                  text-xl
                  text-gray-400
                  bg-gray-800/70
                  border
                  border-gray-700
                  rounded-full
                  transition-all
                  duration-300
                  hover:text-cyan-400
                  hover:border-cyan-600
                  hover:-translate-y-1
                "
              >
                <ion-icon name={social_link.icons}></ion-icon>
              </a>
            ))}

          </div>

        </div>
      </div>

    </section>
  );
};

export default Home;
