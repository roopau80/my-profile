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
      live_link: "https://github.com/Roopauppar",
    }

  ]

  return (
    <>
      <section id='home' className='min-h-screen flex py-10 md:flex-row flex-col items-center '>

        {/* <div className='flex-1 flex items-center justify-center h-full mt-16 space-x-10  realtive  rounded-lg shadow-2xl  overflow-hidden '>
    <img src={bgimg2} alt='' className='absolute inset-0 h-full  object-cover'></img>
      <img src={portfoliowomen} alt='' className='md:w-3/4 h-full object-cover mix-blend-darken inset-0 w-full'></img>
    </div> */}
        {/* <div className='wrapper'> */}
        <div className='mt-16 flex-1 flex  justify-center space-x-10  '>
          <div className=' relative w-80 h-80 max-w-full rounded-lg shadow-2xl overflow-hidden '>
            {/* <div className='bubble x8'></div> */}
            <img src={bgimg2} className='absolute inset-0 w-full h-full object-cover' />
            <img src={portfoliowomen} className=' absolute inset-0 w-full h-full object-cover' />
            {/* <div className='bubble x1'></div> */}

          </div>

        </div>

        <div className='flex-1'>
          <div className='md:text-left text-center mt-4'>
            {/* <div className='bubble x2'></div> */}
            <h1 className='md:text-4xl text-2xl md:leading-normal leading-10 text-white font-bold'>
              {/* <div className='bubble x9'></div> */}
              <span className='text-cyan-600 md:text-5xl text-4xl'>
                Hello!
                <br />
                {/* <div className='bubble x3'></div> */}
              </span>
              My Name is <span>Roopa Uppar</span>

            </h1>
            <h4 className='md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600'>Frontend Developer(React js)</h4>
            {/* <div className='bubble x4'></div> */}

            {/* <button  className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Contact Me
            </button> */}
            <div className='mt-2 text-2xl flex md:justify-start justify-center gap-5'>
              {/* <div className='bubble x5'></div> */}
              {
                social_media?.map(social_link => (
                  <>
                    <div key={social_link} className='text-gray-600 hover:text-white cursor-pointer'>
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
