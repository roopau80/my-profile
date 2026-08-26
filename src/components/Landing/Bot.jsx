import React, { useState, useEffect } from "react";

const Bot = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed
        bottom-6
        right-5
        sm:right-8
        z-[999]
        flex
        items-center
        justify-center
        w-12
        h-12
        sm:w-14
        sm:h-14
        rounded-full
        text-cyan-400
        bg-gray-900/90
        border
        border-cyan-600/60
        shadow-lg
        shadow-cyan-600/10
        backdrop-blur-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:text-white
        hover:bg-cyan-600
        hover:border-cyan-500
        hover:shadow-cyan-500/30
        active:scale-90
        ${isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-5 pointer-events-none"
        }
      `}
    >
      <ion-icon
        name="chevron-up-outline"
        className="text-2xl sm:text-3xl"
      ></ion-icon>
    </button>
  );
};

export default Bot;