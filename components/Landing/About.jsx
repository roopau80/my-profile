import React from 'react';
import resumeUrl from '../../Resume/roopauppar-cv.pdf'
import aboutwomen from '../../assets/images/aboutimg2.png';
// import react_pdf from 'react_pdf';


const About = () => {
    const info = [
        { text: 'Year experince', count: '2' },
        { text: 'Completed Projects', count: '5' },
        { text: 'Companies Work', count: '3' },
    ]


    return (
        <>
            <section id='about' className='py-10 text-white'>
                <div className='text-center mt-8'>
                    <h3 className=' text-4xl font-semibold'>
                        <span className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-white
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300">
                            About <span className='text-cyan-600'>Me</span></span>
                    </h3>
                    <p className=' text-gray-400 my-3 text-lg'>My introduction</p>
                    <div className='flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>
                        <div className='p-2'>
                            <div className='text-gray-300 my-3'>
                                <p className='text-justify leading-7 w-11-12 mx-auto'>My name is Roopa, and I am an enthusiastic, self-motivated, and reliable individual who takes her responsibilities seriously. I pride myself on being a hardworking person who is dedicated to achieving goals and consistently meeting expectations. I thrive in a team environment, contributing positively and valuing collaboration, but I'm equally comfortable using my own initiative to tackle challenges. I am highly adaptable and can quickly adjust to different situations, finding innovative solutions when needed. One of my strengths is my ability to perform effectively under pressure, ensuring that I not only meet but exceed strict deadlines. This combination of qualities allows me to excel in various work settings and make a positive impact on any team or project.</p>
                                <div className='flex mt-10 items-center gap-7 text-center'>
                                    {
                                        info.map((content) => (
                                            <div className="" key={content.text}>
                                                <h3 className='md:text-4xl text-2xl font-semibold text-white'>
                                                    {content.count}<span className='text-cyan-600'>+</span>{""}</h3>
                                                <span className='md:text-base text-xs'>{content.text}</span>

                                            </div>
                                        ))}

                                </div>

                                <a href={resumeUrl} target='_blank' rel="noreferrer">
                                    <button className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5'>
                                        Download CV
                                    </button>
                                </a>

                            </div>
                        </div>
                        <div className='flex-1 md:mt-0 mb-12 flex justify-center items-center'>
                            <div className='lg:w-80 h-full relative sm:w-10/12 w-11/12 max-w-sm  aboutImg'>
                                <img src={aboutwomen} alt='' className='w-full lg:h-50 object-cover bg-slate-200 rounded-xl' />


                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About
