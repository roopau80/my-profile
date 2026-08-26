import React from 'react';
import educationowomen from '../../assets/images/edu-removebg-preview.png'

const Hireme = () => {
  return (
    <>
      <section id="hireme" className='py-10 px-3 text-white'>
        <div className="text-center ">
          <h3 className="text-4xl font-semibold  ">
           <span className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-white
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300">Educ<span className="text-cyan-600 ">ation</span></span>
          </h3>
          {/* <p className='text-gray-400 mt-3 text-lg'>Do you have any work</p> */}
        </div>
        <div className='bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-5xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center'>
          <div>
            {/* <h2 className='text-2xl font-semibold px-4'>Do you want any work from me? </h2> */}
            {/* <p className='lg-text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6 px-4'>"I'm a Front-End Developer with a strong passion for UI effects, animations, and creating intuitive, dynamic user experiences. Whether you're a business owner looking to start a web development project, a fellow developer interested in collaborating on exciting projects, or simply wanting to say hello, please feel free to reach out to me. Let's work together!"
            </p> */}
            {/* <button className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded-full text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" '>
                                       Say Hello
                                    </button> */}




            {/* table */}
            {/* <!-- component --> */}

            <body class=" font-sans rounded-xl">
              <div class="max-w-md mx-auto   rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div class="md:flex px-5 py-5  ">
                  <div class="md:shrink-0 text-center">
                    {/* <img class="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Modern building architecture" /> */}
                    <h4 className=' font-medium text-white'>BCA</h4>
                    <h4 className='text-white '>2017-2020</h4>
                  </div>
                  <div class="px-8">
                    <p class="   text-white ">Rani Channamma University, Belagavi </p>
                    <p class="mt-2 text-white">Bharatesh College of Computer Application Belagavi</p>
                  </div>
                  <div class="px-2">
                    <p class="mt-2 text-white text-center">72.92%</p>
                  </div>
                </div>
                <hr />
                <div class="md:flex px-5 py-5 ">
                  <div class="md:shrink-0 text-center">
                    {/* <img class="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Modern building architecture" /> */}
                    <h4 className='text-white font-medium '>PUC<p>(Science)</p></h4>
                    <h4 className='text-white '>2015-2017</h4>
                  </div>
                  <div class="px-8">
                    <div class=" tracking-wide  text-white ">Karnataka Department of pre-university education  </div>
                    <p class="mt-2 text-white">Maratha Mandal’s PU College, Belagavi</p>
                  </div>
                  <div class="px-2">
                    <p class="mt-2 text-white text-center">61.16%</p>
                  </div>
                </div>
                <hr />
                <div class="md:flex px-5 py-5">
                  <div class="md:shrink-0 text-center">
                    {/* <img class="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Modern building architecture" /> */}
                    <h4 className='text-white font-medium '>SSLC</h4>
                    <h4 className='text-white '>2014-2015</h4>
                  </div>
                  <div class="px-8">
                    <div class=" tracking-wide  text-white ">Karnataka Secondary Education Examination Board </div>
                    <p class="mt-2 text-white">Nirmala High School, Nirmala Nagar, Belagavi</p>
                  </div>
                  <div class="px-2">
                    <p class="mt-2 text-white text-center">83.68%</p>
                  </div>
                </div>
              </div>
            </body>
          </div>
          <img src={educationowomen} alt='' className='lg:h-[25.5rem] top-1  h-80 lg:absolute bottom-0 -right-2 object-cover' />
        </div>

      </section>
    </>
  )
}

export default Hireme
