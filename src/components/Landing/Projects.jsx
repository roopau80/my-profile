import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../../assets/images/expense_tracker.png";
import project2 from "../../assets/images/mobile.png";
import project3 from "../../assets/images/car.png";
import slider_women1 from "../../assets/images/slider_women1.jpg";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";

const Projects = () => {
  const projects = [
    {
      img: project1,
      name: "Expense Tracker",
      description:
        "A responsive expense tracking application to manage and monitor daily expenses.",
      tools: ["HTML5", "CSS3", "Tailwind CSS", "React.js"],
      github_link: "https://github.com/Roopauppar/expensetracker",
      live_link: "https://roopauppar.github.io/expensetracker/",
    },
    {
      img: project2,
      name: "My Mobile",
      description:
        "A responsive mobile shopping application built with React and Redux.",
      tools: ["HTML5", "CSS3", "Tailwind CSS", "React.js", "Redux"],
      github_link: "https://github.com/Roopauppar/my-mobile",
      live_link: "https://roopau80.github.io/my-mobile/",
    },
    {
      img: project3,
      name: "Car Service",
      description:
        "A responsive car service website designed to provide an easy-to-use user experience.",
      tools: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap"],
      github_link: "https://github.com/Roopauppar/carservice-react",
      live_link: "https://roopau80.github.io/car-service/",
    },
  ];

  return (
    <section
      id="projects"
      className="relative px-4 py-16 overflow-hidden text-white"
    >
      {/* Background Glow */}
      <div className="absolute rounded-full w-72 h-72 bg-cyan-600/10 blur-3xl top-20 left-10"></div>

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
              My <span className="text-cyan-600">Projects</span>
            </span>
          </h3>

          <p className="mt-3 text-lg text-gray-400">Some of my recent work</p>
        </div>

        {/* Projects + Illustration */}
        <div
          className="flex flex-col items-center gap-10 mt-12 lg:flex-row"
        >
          {/* Project Slider */}
          <div className="w-full lg:w-2/3">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
              }}
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
    h-[430px]
    overflow-hidden
    bg-gray-800/80
    border
    border-gray-700
    rounded-2xl
    shadow-lg
    transition-all
    duration-500
    hover:-translate-y-2
    hover:border-cyan-600/70
    hover:shadow-cyan-600/10
  "
                  >
                    {/* Project Image */}
                    <div
                      className="relative flex items-center justify-center w-full h-48 p-3 overflow-hidden bg-gray-900 sm:h-52 md:h-56"
                    >
                      <img
                        src={project.img}
                        alt={project.name}
                        className="object-contain w-full h-full transition-transform duration-500 rounded-lg group-hover:scale-105"
                      />

                      {/* Image Overlay */}
                      <div
                        className="absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-900/30 via-transparent to-transparent"
                      ></div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5">
                      {/* Project Name */}
                      <h3 className="text-xl font-semibold text-white">
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
                              px-2.5
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
                      <div className="flex gap-3 mt-5">
                        <a
                          href={project.github_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 text-sm font-medium text-gray-200 transition duration-300 bg-gray-900 border border-gray-700 rounded-lg hover:text-cyan-400 hover:border-cyan-600"
                        >
                          GitHub
                        </a>

                        <a
                          href={project.live_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 text-sm font-medium text-gray-900 transition duration-300 rounded-lg bg-cyan-500 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
                        >
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right Side Illustration */}
          <div
            className="flex items-center justify-center w-full lg:w-1/3"
          >
            <div className="relative flex items-center justify-center w-full max-w-sm">
              {/* Glow */}
              <div
                className="absolute rounded-full w-52 h-52 sm:w-64 sm:h-64 bg-cyan-600/20 blur-3xl"
              ></div>

              {/* Circle Border */}
              <div
                className="absolute border rounded-full w-60 h-60 sm:w-72 sm:h-72 border-cyan-500/20"
              ></div>

              {/* Image Container */}
              <div
                className="relative z-10 flex items-center justify-center border border-gray-700 rounded-full shadow-2xl w-52 h-52 sm:w-60 sm:h-60 bg-gray-800/70 backdrop-blur-sm shadow-cyan-500/10"
              >
                <img
                  src={slider_women1}
                  alt="Projects illustration"
                  className="object-contain w-full h-full p-5 transition-transform duration-500 rounded-full hover:scale-105"
                />
              </div>

              {/* Decorative Dots */}
              <span
                className="absolute w-3 h-3 rounded-full shadow-lg top-8 right-8 bg-cyan-500 shadow-cyan-500/50"
              ></span>

              <span
                className="absolute w-2 h-2 rounded-full bottom-8 left-6 bg-cyan-400"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
