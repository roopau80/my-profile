import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../../assets/images/figma-design.png";
import slider_women1 from "../../assets/images/figma-girl2.png";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";

const FigmaReact = () => {
  const projects = [
    {
      img: project1,
      name: "Landing Page",
      description:
        "A modern and responsive landing page designed in Figma and developed using React.js and Tailwind CSS.",
      tools: ["HTML5", "CSS3", "Tailwind CSS", "React.js"],
      figma_link:
        "https://www.figma.com/design/I29stCW5RRoMHzvvfTQIJT/Shoes-design?node-id=0-1&t=IBlPKyEKfuY7CFWz-1",
      github_link:
        "https://github.com/roopau80/my-figma-design-react1",
      live_link:
        "https://roopau80.github.io/my-figma-design-react1/",
    },
  ];

  return (
    <section
      id="figma"
      className="relative px-4 py-16 overflow-hidden text-white"
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          top-20
          right-10
          w-72
          h-72
          rounded-full
          bg-cyan-600/10
          blur-3xl
        "
      ></div>

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center">
          <h3 className="text-4xl font-semibold md:text-5xl">
            <span
              className="
                relative
                before:content-['']
                before:absolute
                before:block
                before:w-full
                before:h-[2px]
                before:bottom-0
                before:left-0
                before:bg-white
                before:scale-x-0
                before:hover:scale-x-100
                before:origin-top-left
                before:transition
                before:ease-in-out
                before:duration-300
              "
            >
              My{" "}
              <span className="text-cyan-600">
                Figma Designs
              </span>
            </span>
          </h3>

          <p className="mt-3 text-lg text-gray-400">
            Designs translated into responsive React applications
          </p>
        </div>

        {/* Main Content */}
        <div
          className="
            flex
            flex-col-reverse
            items-center
            gap-12
            mt-12
            lg:flex-row
            lg:gap-16
          "
        >

          {/* ============================= */}
          {/* Illustration */}
          {/* ============================= */}

          <div
            className="
              flex
              items-center
              justify-center
              w-full
              lg:w-2/5
            "
          >
            <div className="relative flex items-center justify-center w-full max-w-sm">

              {/* Glow */}
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

              {/* Outer Circle */}
              <div
                className="
                  absolute
                  w-64
                  h-64
                  sm:w-72
                  sm:h-72
                  rounded-full
                  border
                  border-cyan-500/20
                "
              ></div>

              {/* Image Container */}
              <div
                className="
                  relative
                  z-10
                  flex
                  items-center
                  justify-center
                  w-56
                  h-56
                  sm:w-64
                  sm:h-64
                  lg:w-72
                  lg:h-72
                  overflow-hidden
                  rounded-full
                  bg-gray-800/70
                  backdrop-blur-md
                  border
                  border-gray-700
                  shadow-2xl
                  shadow-cyan-500/10
                "
              >
                <img
                  src={slider_women1}
                  alt="Figma design illustration"
                  className="
                    object-contain
                    w-full
                    h-full
                    p-5
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
                  z-20
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
                  z-20
                  bottom-8
                  left-6
                  w-2
                  h-2
                  rounded-full
                  bg-cyan-400
                "
              ></span>
            </div>
          </div>

          {/* ============================= */}
          {/* Figma Project */}
          {/* ============================= */}

          <div className="w-full lg:w-3/5">

            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              className="pb-12"
            >
              {projects.map((project, i) => (
                <SwiperSlide key={i}>

                  {/* Project Card */}
                  <div
                    className="
                      group
                      flex
                      flex-col
                      w-full
                      h-[500px]
                      overflow-hidden
                      bg-gray-800/80
                      border
                      border-gray-700
                      rounded-3xl
                      shadow-xl
                      transition-all
                      duration-500
                      hover:-translate-y-2
                      hover:border-cyan-600/60
                      hover:shadow-cyan-600/10
                    "
                  >

                    {/* Project Image */}
                    <div
                      className="
                        relative
                        flex
                        items-center
                        justify-center
                        w-full
                        h-56
                        p-4
                        overflow-hidden
                        bg-gray-900
                        shrink-0
                        sm:h-64
                      "
                    >
                      <img
                        src={project.img}
                        alt={project.name}
                        className="
                          object-contain
                          w-full
                          h-full
                          rounded-xl
                          transition-transform
                          duration-500
                          group-hover:scale-105
                        "
                      />

                      {/* Image Overlay */}
                      <div
                        className="
                          absolute
                          inset-0
                          pointer-events-none
                          bg-gradient-to-t
                          from-gray-900/40
                          to-transparent
                        "
                      ></div>
                    </div>

                    {/* Card Content */}
                    <div className="flex flex-col flex-1 p-6">

                      {/* Title */}
                      <h3 className="text-2xl font-semibold text-white">
                        {project.name}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 text-sm leading-6 text-gray-400">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tools.map((tool, index) => (
                          <span
                            key={index}
                            className="
                              px-3
                              py-1
                              text-xs
                              font-medium
                              text-cyan-400
                              bg-cyan-600/10
                              border
                              border-cyan-600/20
                              rounded-full
                            "
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      {/* Buttons */}
                      <div
                        className="
                          flex
                          flex-wrap
                          gap-3
                          pt-5
                          mt-auto
                        "
                      >

                        {/* GitHub */}
                        <a
                          href={project.github_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            px-4
                            py-2
                            text-sm
                            font-medium
                            text-gray-200
                            bg-gray-900
                            border
                            border-gray-700
                            rounded-lg
                            transition-all
                            duration-300
                            hover:text-cyan-400
                            hover:border-cyan-600
                          "
                        >
                          GitHub
                        </a>

                        {/* Live Demo */}
                        <a
                          href={project.live_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            px-4
                            py-2
                            text-sm
                            font-medium
                            text-gray-900
                            bg-cyan-500
                            rounded-lg
                            transition-all
                            duration-300
                            hover:bg-cyan-400
                            hover:shadow-lg
                            hover:shadow-cyan-500/20
                          "
                        >
                          Live Demo
                        </a>

                        {/* Figma */}
                        <a
                          href={project.figma_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            px-4
                            py-2
                            text-sm
                            font-medium
                            text-cyan-400
                            bg-transparent
                            border
                            border-cyan-600
                            rounded-lg
                            transition-all
                            duration-300
                            hover:bg-cyan-600
                            hover:text-white
                          "
                        >
                          Figma
                        </a>

                      </div>
                    </div>
                  </div>

                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FigmaReact;