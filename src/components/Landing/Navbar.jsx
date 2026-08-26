import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when clicking a link
  const handleMenuClick = () => {
    setOpen(false);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <nav
        className={`
          fixed
          top-0
          left-0
          z-[999]
          w-full
          transition-all
          duration-300
          ${
            sticky
              ? "bg-gray-900/90 border-b border-gray-700/60 shadow-lg backdrop-blur-md"
              : "bg-transparent"
          }
        `}
      >
        <div
          className="
            flex
            items-center
            justify-between
            max-w-7xl
            px-5
            py-4
            mx-auto
            sm:px-8
          "
        >

          {/* ================= LOGO ================= */}

          <a
            href="#home"
            onClick={handleMenuClick}
            className="
              text-2xl
              font-bold
              tracking-wide
              text-white
              transition-colors
              duration-300
              sm:text-3xl
              hover:text-cyan-500
            "
          >
            Roopa<span className="text-cyan-500">.</span>
          </a>

          {/* ================= DESKTOP MENU ================= */}

          <div className="hidden md:block">
            <ul
              className="
                flex
                items-center
                gap-2
                text-sm
                font-medium
              "
            >
              {menuLinks.map((menu, i) => (
                <li key={i}>
                  <a
                    href={menu.link}
                    className="
                      relative
                      px-4
                      py-2
                      text-gray-300
                      transition-colors
                      duration-300
                      hover:text-cyan-500
                      before:content-['']
                      before:absolute
                      before:left-1/2
                      before:bottom-0
                      before:w-0
                      before:h-[2px]
                      before:bg-cyan-500
                      before:-translate-x-1/2
                      before:transition-all
                      before:duration-300
                      hover:before:w-8
                    "
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            className="
              relative
              z-[1001]
              flex
              items-center
              justify-center
              w-10
              h-10
              text-2xl
              text-white
              transition-all
              duration-300
              rounded-lg
              md:hidden
              hover:text-cyan-500
            "
          >
            <ion-icon
              name={open ? "close-outline" : "menu-outline"}
            ></ion-icon>
          </button>
        </div>
      </nav>

      {/* ================= MOBILE BACKDROP ================= */}

      <div
        onClick={() => setOpen(false)}
        className={`
          fixed
          inset-0
          z-[998]
          bg-black/50
          backdrop-blur-sm
          transition-opacity
          duration-300
          md:hidden
          ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      ></div>

      {/* ================= MOBILE SIDE MENU ================= */}

      <div
        className={`
          fixed
          top-0
          right-0
          z-[1000]
          w-72
          h-screen
          bg-gray-900
          border-l
          border-gray-700
          shadow-2xl
          transition-transform
          duration-300
          md:hidden
          ${
            open
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >

        {/* Mobile Menu Header */}

        <div
          className="
            flex
            items-center
            justify-between
            px-6
            py-5
            border-b
            border-gray-700
          "
        >
          <h3 className="text-xl font-bold text-white">
            Roopa<span className="text-cyan-500">.</span>
          </h3>

          <button
            onClick={() => setOpen(false)}
            className="
              text-2xl
              text-gray-400
              transition-colors
              duration-300
              hover:text-cyan-500
            "
          >
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>

        {/* Mobile Links */}

        <ul className="flex flex-col gap-2 px-6 py-8">
          {menuLinks.map((menu, i) => (
            <li key={i}>
              <a
                href={menu.link}
                onClick={handleMenuClick}
                className="
                  block
                  px-4
                  py-3
                  text-sm
                  font-medium
                  tracking-wide
                  text-gray-300
                  rounded-lg
                  transition-all
                  duration-300
                  hover:bg-gray-800
                  hover:text-cyan-500
                  hover:translate-x-1
                "
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Bottom Accent */}

        <div
          className="
            absolute
            bottom-0
            left-0
            w-full
            h-1
            bg-cyan-600
          "
        ></div>
      </div>
    </>
  );
};

export default Navbar;