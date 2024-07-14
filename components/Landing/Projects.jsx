import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import project1 from '../../assets/images/expense_tracker.png';
import project2 from '../../assets/images/mobile.png';
import project3 from '../../assets/images/car.png'
import slider_women1 from '../../assets/images/slider_women1.jpg'
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from 'swiper';


const Projects = () => {
  const projects=[{
    img: project1,
    name: "Expense Tracker",
    tools:"Tools: HTML5, CSS3, Tailwind css, React.js",
    github_link: "https://github.com/Roopauppar/expensetracker",
    live_link:  "https://roopauppar.github.io/expensetracker/",
  },
  {
    img: project2,
    name: "My Mobile",
    tools:"Tools: HTML5, CSS3, Tailwind css, React.js, Redux",
    github_link: "https://github.com/Roopauppar/my-mobile",
    live_link:  " https://roopauppar.github.io/my-mobile/",
  },
  {
    img: project3,
    name: "Car Service",
    tools:"Tools: HTML5, CSS3, Javascript, React.js, Bootstrap",
    github_link: "https://github.com/Roopauppar/carservice-react",
    live_link:  "https://roopauppar.github.io/carservice-react/",
  },
  
]
 return (
    <>
      <section id='projects' className='py-10 text-white'>
        <div className='text-center'>
          <h3 className='text-4xl font-semibold'>
            <span className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-white
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300">
            My <span className='text-cyan-600'>Projects</span>

            </span>
          </h3>
          <p className='text-gray-400 mt-3 text-lg'>My awesome works</p>
        </div>
        <br />
        <div className='flex max-w-6xl px-5 mx-auto items-center relative'>
          <div className='lg:w-2/3 w-full'>
            <Swiper
              slidesPerview={1.2}
              spaceBetween={20}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
              }}
              loop={true}
              autoplay={{
                delay: 3000,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
            >
            {
              projects.map((project_info,i)=>(
              <SwiperSlide key={i}>
                <div className='h-fit w-full p-4 bg-slate-700 rounded-xl'>
                  <img src={project_info.img} alt='' className='rounded-lg' />
                  <h3 className='text-xl my-4'>{project_info.name}</h3>
                  <h6 className='text-sm my-4'>{project_info.tools}</h6>
                  <div className='flex gap-3'>
                    <a href={project_info.github_link} target="_blank" className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block'>GitHub</a>
                    <a href={project_info.live_link}  target="_blank" className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block'>Live Demo</a>

                  </div>

                </div>
              </SwiperSlide>
            ))}
              
             
            </Swiper>
          </div>
          <div className='lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm  aboutImg lg:block hidden'>
            <img src={slider_women1} alt='' />

            
          </div>
         
        </div>
      </section>
    </>
  )
}

export default Projects
