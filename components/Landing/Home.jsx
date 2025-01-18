import React from 'react';
import portfoliowomen from '../../assets/images/portfoliowomen.png';
import bgimg2 from '../../assets/images/bgimg2.jpg';


const Home = () => {
  const social_media = [
    {
      icons: 'logo-linkedin',
      live_link: "https://www.linkedin.com/in/roopa-uppar-1901141b3/",

    },
    {
      icons: 'logo-github',
      live_link: "https://github.com/roopau80",
    }

  ]

  return (
    <>
      <section id='home' className='flex flex-col items-center min-h-screen py-10 md:flex-row '>

        {/* <div className='flex items-center justify-center flex-1 h-full mt-16 space-x-10 overflow-hidden rounded-lg shadow-2xl realtive '>
    <img src={bgimg2} alt='' className='absolute inset-0 object-cover h-full'></img>
      <img src={portfoliowomen} alt='' className='inset-0 object-cover w-full h-full md:w-3/4 mix-blend-darken'></img>
    </div> */}
        {/* <div className='wrapper'> */}
        <div className='flex justify-center flex-1 mt-16 space-x-10 '>
          <div className='relative max-w-full overflow-hidden rounded-lg shadow-2xl  w-80 h-80'>
            {/* <div className='bubble x8'></div> */}
            <img src={bgimg2} className='absolute inset-0 object-cover w-full h-full' />
            <img src={portfoliowomen} className='absolute inset-0 object-cover w-full h-full ' />
            {/* <div className='bubble x1'></div> */}

          </div>

        </div>

        <div className='flex-1'>
          <div className='mt-4 text-center md:text-left'>
            {/* <div className='bubble x2'></div> */}
            <h1 className='text-2xl font-bold leading-10 text-white md:text-4xl md:leading-normal'>
              {/* <div className='bubble x9'></div> */}
              <span className='text-4xl text-cyan-600 md:text-5xl'>
                Hello!
                <br />
                {/* <div className='bubble x3'></div> */}
              </span>
              My Name is <span>Roopa Uppar</span>

            </h1>
            <h4 className='mt-4 text-lg font-bold leading-5 text-gray-600 md:text-2xl md:leading-normal'>Frontend Developer(React js)</h4>
            {/* <div className='bubble x4'></div> */}

            {/* <button  className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Contact Me
            </button> */}
            <div className='flex justify-center gap-5 mt-2 text-2xl md:justify-start'>
              {/* <div className='bubble x5'></div> */}
              {
                social_media?.map(social_link => (
                  <>
                    <div key={social_link} className='text-gray-600 cursor-pointer hover:text-white'>
                      {/* <div className='bubble x6'></div> */}
                      <div className='flex gap-3'>
                        <a href={social_link.live_link} target="_blank" ><ion-icon name={social_link.icons}></ion-icon></a>
                        {/* <div className='bubble x10'></div> */}
                        {/* <div className='bubble x7'></div> */}

                      </div>
                    </div>
                  </>
                ))
              }
              
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>

    </>
  )
}

export default Home
