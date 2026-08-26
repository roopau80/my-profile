import React from "react";
import educationowomen from "../../assets/images/edu-removebg-preview.png";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      year: "2017 – 2020",
      institution:
        "Bharatesh College of Computer Applications, Belagavi",
      university: "Rani Channamma University, Belagavi",
      percentage: "72.92%",
    },
    {
      degree: "PUC – Science",
      year: "2015 – 2017",
      institution: "Maratha Mandal's PU College, Belagavi",
      university:
        "Karnataka Department of Pre-University Education",
      percentage: "61.16%",
    },
    {
      degree: "SSLC",
      year: "2014 – 2015",
      institution:
        "Nirmala High School, Nirmala Nagar, Belagavi",
      university:
        "Karnataka Secondary Education Examination Board",
      percentage: "83.68%",
    },
  ];

  return (
    <section
      id="education"
      className="relative px-4 py-16 overflow-hidden text-white"
    >
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
            Educ<span className="text-cyan-600">ation</span>
          </span>
        </h3>

        <p className="mt-3 text-lg text-gray-400">
          My academic journey
        </p>
      </div>

      {/* Main Container */}
      <div
        className="
          grid
          grid-cols-1
          items-center
          max-w-6xl
          gap-10
          px-5
          py-8
          mx-auto
          mt-12
          bg-gray-800
          border
          border-gray-700
          rounded-3xl
          shadow-xl
          sm:px-7
          md:px-10
          lg:grid-cols-3
          lg:gap-8
        "
      >
        {/* Education Timeline */}
        <div className="w-full lg:col-span-2">
          <div className="relative">

            {/* Timeline Line */}
            <div
              className="
                absolute
                left-[9px]
                top-3
                bottom-3
                w-[2px]
                bg-cyan-600/40
              "
            ></div>

            {education.map((item, index) => (
              <div
                key={index}
                className="
                  relative
                  pl-8
                  pb-6
                  sm:pl-10
                  sm:pb-8
                  last:pb-0
                "
              >
                {/* Timeline Dot */}
                <div
                  className="
                    absolute
                    left-0
                    top-1
                    w-5
                    h-5
                    rounded-full
                    bg-cyan-600
                    border-4
                    border-gray-800
                    shadow-md
                    shadow-cyan-600/40
                  "
                ></div>

                {/* Education Card */}
                <div
                  className="
                    w-full
                    p-4
                    bg-gray-900/80
                    border
                    border-gray-700
                    rounded-2xl
                    transition-all
                    duration-300
                    hover:border-cyan-600/70
                    hover:-translate-y-1
                    hover:shadow-lg
                    hover:shadow-cyan-600/10
                    sm:p-5
                  "
                >
                  {/* Degree + Year */}
                  <div
                    className="
                      flex
                      flex-col
                      gap-2
                      sm:flex-row
                      sm:items-start
                      sm:justify-between
                    "
                  >
                    <h4
                      className="
                        text-base
                        font-semibold
                        leading-6
                        text-white
                        sm:text-lg
                        md:text-xl
                      "
                    >
                      {item.degree}
                    </h4>

                    <span
                      className="
                        w-fit
                        px-3
                        py-1
                        text-xs
                        font-medium
                        text-cyan-400
                        bg-cyan-600/10
                        border
                        border-cyan-600/30
                        rounded-full
                        whitespace-nowrap
                      "
                    >
                      {item.year}
                    </span>
                  </div>

                  {/* Institution */}
                  <p className="mt-3 text-sm leading-6 text-gray-300">
                    {item.institution}
                  </p>

                  {/* University / Board */}
                  <p className="mt-1 text-xs leading-5 text-gray-400 sm:text-sm">
                    {item.university}
                  </p>

                  {/* Percentage */}
                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-xs text-gray-500 sm:text-sm">
                      Percentage:
                    </span>

                    <span className="text-sm font-semibold text-cyan-500">
                      {item.percentage}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================= */}
        {/* Attractive Education Image */}
        {/* ============================= */}

        <div className="flex items-center justify-center w-full lg:col-span-1">
          <div className="relative flex items-center justify-center w-full max-w-sm">

            {/* Large Cyan Glow */}
            <div
              className="
                absolute
                w-52
                h-52
                sm:w-64
                sm:h-64
                lg:w-72
                lg:h-72
                rounded-full
                bg-cyan-500/20
                blur-3xl
              "
            ></div>

            {/* Outer Decorative Circle */}
            <div
              className="
                absolute
                w-60
                h-60
                sm:w-72
                sm:h-72
                lg:w-80
                lg:h-80
                rounded-full
                border
                border-cyan-500/30
              "
            ></div>

            {/* Dashed Circle */}
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
                border-2
                border-dashed
                border-cyan-500/20
              "
            ></div>

            {/* Glass Circle */}
            <div
              className="
                relative
                z-10
                flex
                items-center
                justify-center
                w-52
                h-52
                sm:w-60
                sm:h-60
                md:w-64
                md:h-64
                lg:w-72
                lg:h-72
                rounded-full
                bg-gray-900/60
                backdrop-blur-md
                border
                border-cyan-500/20
                shadow-2xl
                shadow-cyan-500/20
              "
            >
              {/* Education Image */}
              <img
                src={educationowomen}
                alt="Education illustration"
                className="
                  object-contain
                  w-auto
                  h-48
                  sm:h-56
                  md:h-60
                  lg:h-64
                  transition-transform
                  duration-500
                  hover:scale-110
                "
              />
            </div>

            {/* Top Decorative Dot */}
            <span
              className="
                absolute
                z-20
                top-6
                right-8
                w-3
                h-3
                rounded-full
                bg-cyan-500
                shadow-lg
                shadow-cyan-500/60
              "
            ></span>

            {/* Bottom Decorative Dot */}
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
                shadow-lg
                shadow-cyan-400/60
              "
            ></span>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;