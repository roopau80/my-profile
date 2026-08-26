import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const contact_info = [
    { logo: 'mail', text: "roopauppar80@gmail.com" },
    { logo: 'call-outline', text: "+91 9380683319" },
    // { logo: 'person-circle-outline', text: "https://www.linkedin.com/in/roopa-uppar-1901141b3/" },
  ]

  // Emailjs free email sending
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_clyu7cc', 'template_rwigyks', form.current, 'ckxp4rk2f8HWpyZ55')
      .then((result) => {
        console.log(result.text);
        // console.log("message sent succesfully")
        e.target.reset();
        alert("message sent successfully")
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <section id='contact' className='py-10 px-3 text-white'>
        <div className='text-center mt-8'>
          <h3 className='text-4xl font-semibold'>
            <span className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-white
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300">
              Contact <span className='text-cyan-600'>Me</span>
            </span>
          </h3>
          <p className='text-gray-400 mt-3 text-lg'> Get in touch</p>
          <div className='mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto'>
            {/* <form className="flex flex-col flex-1 gap-5" ref={form} onSubmit={sendEmail}>
              <input type='text' placeholder='Your Name' name="user_name"></input>
              <input type='email' placeholder='Your Email Address' name="user_email"></input>
              <textarea placeholder='Your Message' rows={10} name="message"></textarea>
              <button type="submit" value="Send" className='text-white w-fit bg-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded-full text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" '>
                Send Message
              </button>

            </form> */}
            <div className=' flex flex-col gap-7'>
              {
                contact_info.map((contact, i) => (
                  <div key={i} className='flex gap-4 w-fit items-center'>
                    <div className='min-w-[3rem] text-3xl min-h-[3rem] flex items-center justify-center text-white bg-cyan-600 rounded-full'>
                      <ion-icon name={contact.logo}></ion-icon>
                    </div>
                    <p className='text-base'>{contact.text}</p>

                  </div>
                ))
              }



            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
