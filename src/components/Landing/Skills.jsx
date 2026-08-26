
import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      description: "Core technologies I use to build web applications",
      skills: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Redux",
      ],
    },
    {
      title: "UI & Styling",
      description: "Tools I use to create responsive user interfaces",
      skills: [
        "Tailwind CSS",
        "Bootstrap",
        "Responsive Design",
      ],
    },
    {
      title: "Tools",
      description: "Tools I use for development and debugging",
      skills: [
        "Git",
        "GitHub",
        "Chrome DevTools",
      ],
    },
    {
      title: "Libraries",
      description: "Libraries I have worked with in real-world projects",
      skills: [
        "Chart.js",
        "React Leaflet",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-16 overflow-hidden bg-gray-800"
    >
      {/* Background Glow */}
      <div className="absolute w-64 h-64 rounded-full bg-cyan-600/10 blur-3xl top-10 left-10"></div>

      <div className="relative max-w-6xl px-6 mx-auto">
        
        {/* Heading */}
        <div className="text-center">
          <h3 className="text-4xl font-semibold text-white md:text-5xl">
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
              My<span className="text-cyan-600"> Skills</span>
            </span>
          </h3>

          <p className="mt-3 text-lg text-gray-400">
            Technologies I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="
                group
                relative
                p-6
                sm:p-7
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-md
                shadow-lg
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-cyan-600/60
                hover:bg-cyan-600/5
                hover:shadow-cyan-600/10
              "
            >
              {/* Top Accent */}
              <div
                className="
                  absolute
                  top-0
                  left-6
                  right-6
                  h-[2px]
                  bg-gradient-to-r
                  from-transparent
                  via-cyan-600
                  to-transparent
                  opacity-60
                  group-hover:opacity-100
                  transition
                  duration-300
                "
              ></div>

              {/* Category Title */}
              <h4 className="text-2xl font-semibold text-white">
                {category.title}
              </h4>

              {/* Description */}
              <p className="mt-2 text-sm leading-6 text-gray-400">
                {category.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-3 mt-6">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-gray-200
                      bg-gray-900/70
                      border
                      border-gray-700
                      rounded-full
                      transition-all
                      duration-300
                      hover:text-cyan-400
                      hover:border-cyan-600
                      hover:bg-cyan-600/10
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

