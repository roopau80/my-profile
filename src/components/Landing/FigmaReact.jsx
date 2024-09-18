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
      tools: "Tools: HTML5, CSS3, Tailwind css, React.js",
      figma_link:
        "https://www.figma.com/design/I29stCW5RRoMHzvvfTQIJT/Shoes-design?node-id=0-1&t=IBlPKyEKfuY7CFWz-1",
      github_link: "https://github.com/roopau80/my-figma-design-react1",
      live_link: "https://roopau80.github.io/my-figma-design-react1/",
    },
  ];

  return (
    <>
      <section id="projects" className="py-10 text-white">
        <div className="text-center">
          <h3 className="text-4xl font-semibold">
            <span
              className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-white
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"
            >
              My <span className="text-cyan-600">Figma Designs</span>
            </span>
          </h3>
        </div>
        <br />
        <div className="relative flex items-center max-w-6xl px-5 mx-auto">
        <div className="flex items-center justify-center flex-1 mb-12 md:mt-0">
            <div className="relative w-11/12 h-full max-w-sm lg:w-80 sm:w-10/12 aboutImg">
              <img
                src={slider_women1}
                alt=""
                className="object-cover w-full lg:h-50 bg-slate-200 rounded-xl"
              />
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            <Swiper
              slidesPerView={1} // Show only one slide
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 3000,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
            >
              {projects.map((project_info, i) => (
                <SwiperSlide key={i}>
                  <div className="w-full max-w-sm p-4 mx-auto h-fit bg-slate-700 rounded-xl">
                    {" "}
                    {/* Reduced card size */}
                    <img src={project_info.img} alt="" className="rounded-lg" />
                    <h3 className="my-4 text-xl">{project_info.name}</h3>
                    <h6 className="my-4 text-sm">{project_info.tools}</h6>
                    <div className="flex gap-3">
                      <a
                        href={project_info.github_link}
                        target="_blank"
                        className="inline-block px-2 py-1 bg-gray-800 text-cyan-600"
                      >
                        GitHub
                      </a>
                      <a
                        href={project_info.live_link}
                        target="_blank"
                        className="inline-block px-2 py-1 bg-gray-800 text-cyan-600"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project_info.figma_link}
                        target="_blank"
                        className="inline-block px-2 py-1 bg-gray-800 text-cyan-600"
                      >
                        Figma Demo
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default FigmaReact;
