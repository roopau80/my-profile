

import React, { useState, useEffect } from 'react'



const Bot = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Show the button when the user scrolls down 100 pixels or more
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Scroll smoothly to the top
    });
  };

  return (
    <>
      <button
        className={`${isVisible ? 'block' : 'hidden'
          } fixed bottom-5 sm:right-8 animate-bounce right-4 z-[999] cursor-pointer text-white text-4xl bg-cyan-600 w-16 h-16 flex items-center justify-center rounded-full`}
        onClick={scrollToTop}
      >
        <ion-icon name="chevron-up-circle-outline"></ion-icon>
      </button>
    </>

  )
}

export default Bot