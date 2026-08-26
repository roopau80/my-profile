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
                <div className='mt-8 text-center'>
                    <h3 className='text-4xl font-semibold '>
                        <span className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-white
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300">
                            About <span className='text-cyan-600'>Me</span></span>
                    </h3>
                    <p className='my-3 text-lg text-gray-400 '>My introduction</p>
                    <div className='flex flex-col-reverse items-center max-w-6xl gap-12 px-10 mx-auto md:flex-row md:gap-6'>
                        <div className='p-2'>
                            <div className='my-3 text-gray-300'>
                                <p className='mx-auto leading-7 text-justify w-11-12'>My name is Roopa, and I am an enthusiastic, self-motivated, and reliable individual who takes her responsibilities seriously. I pride myself on being a hardworking person who is dedicated to achieving goals and consistently meeting expectations. I thrive in a team environment, contributing positively and valuing collaboration, but I'm equally comfortable using my own initiative to tackle challenges. I am highly adaptable and can quickly adjust to different situations, finding innovative solutions when needed. One of my strengths is my ability to perform effectively under pressure, ensuring that I not only meet but exceed strict deadlines. This combination of qualities allows me to excel in various work settings and make a positive impact on any team or project.</p>
                                <div className='flex items-center mt-10 text-center gap-7'>
                                    {
                                        info.map((content) => (
                                            <div className="" key={content.text}>
                                                <h3 className='text-2xl font-semibold text-white md:text-4xl'>
                                                    {content.count}<span className='text-cyan-600'>+</span>{""}</h3>
                                                <span className='text-xs md:text-base'>{content.text}</span>

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
                        <div className='flex items-center justify-center flex-1 mb-12 md:mt-0'>
                            <div className='relative w-11/12 h-full max-w-sm lg:w-80 sm:w-10/12 aboutImg'>
                                <img src={aboutwomen} alt='' className='object-cover w-full lg:h-50 bg-slate-200 rounded-xl' />


                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About
