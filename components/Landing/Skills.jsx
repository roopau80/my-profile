import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {html5,css3,javascript,react  } from '@fortawesome/free-solid-svg-icons' ;

const Skills = () => {
  const skill = [
    {
      logo: 'logo-html5',
      level: 'HTML5',
      count: 86,

    },
    {
      logo: 'logo-css3',
      level: 'Css3',
      count: 90,

    },
    {
      logo: 'logo-javascript',
      level: 'Javascript',
      count: 86,

    },
    {
      logo: 'logo-react',
      level: 'React.js',
      count: 80,

    },
    // {
    //   logo: 'logo-bootstrap',
    //   level: 'Bootstrap5',
    //   count: 85,

    // },

  ]
  return (
    <>
      <section id='skills' className='py-10 bg-gray-800 relative'>
        <div className='mt-8 text-gray-100 text-center'>
          <h3 className='text-4xl font-semibold'>
            <span className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-white
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300">
            My<span className='text-cyan-600'>Skills</span></span>

          </h3>
          <p className='text-gray-400 mt-3 text-lg '>My Knowledge</p>
          <div className='flex items-center justify-center mt-12 gap-10 flex-wrap'>

            {
              skill?.map((skill, i) => (
                <div key={i} className='border-2 group relative min-w[10rem] max-w-[16rem] bg-gray-900 border-cyan-600 p-10 rounded-xl' >
                  <div
                    style={{
                      background: `conic-gradient(rgb(8,145,175) ${skill.count}%, #ddd ${skill.count}%)`,
                    }}
                    className='w-32 h-32 flex items-center justify-center rounded-full'>
                    <div className='text-6xl group-hover:text-cyan-600 w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center'>
                      <ion-icon name={skill.logo}></ion-icon>
                      {/* <FontAwesomeIcon icon={skill.logo} /> */}
                    </div>
                  </div>
                  <p className='text-xl mt-2'>{skill.level}</p>
                </div>
              ))
            }
          </div>
        </div>

      </section>
    </>
  )
}

export default Skills
