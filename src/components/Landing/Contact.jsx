import React from "react";

const Contact = () => {
  const contact_info = [
    {
      logo: "mail",
      title: "Email",
      text: "roopauppar80@gmail.com",
      link: "mailto:roopauppar80@gmail.com",
    },
    {
      logo: "call-outline",
      title: "Phone",
      text: "+91 9380683319",
      link: "tel:+919380683319",
    },
  ];

  return (
    <section
      id="contact"
      className="relative px-4 py-16 overflow-hidden text-white"
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          top-20
          left-10
          w-72
          h-72
          rounded-full
          bg-cyan-600/10
          blur-3xl
        "
      ></div>

      <div className="relative max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center">
          <h3 className="text-4xl font-semibold md:text-5xl">
            <span
              className="
                relative
                before:content-['']
                before:absolute
                before:block
                before:w-full
                before:h-[2px]
                before:bottom-0
                before:left-0
                before:bg-white
                before:scale-x-0
                before:hover:scale-x-100
                before:origin-top-left
                before:transition
                before:ease-in-out
                before:duration-300
              "
            >
              Contact <span className="text-cyan-600">Me</span>
            </span>
          </h3>

          <p className="mt-3 text-lg text-gray-400">
            Let's connect
          </p>
        </div>

        {/* Contact Card */}
        <div
          className="
            relative
            grid
            grid-cols-1
            gap-5
            max-w-3xl
            p-5
            mx-auto
            mt-12
            bg-gray-800/80
            border
            border-gray-700
            rounded-3xl
            shadow-xl
            sm:grid-cols-2
            sm:p-8
          "
        >

          {contact_info.map((contact, i) => (
            <a
              key={i}
              href={contact.link}
              className="
                flex
                items-center
                gap-4
                p-5
                bg-gray-900/70
                border
                border-gray-700
                rounded-2xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-600
                hover:shadow-lg
                hover:shadow-cyan-600/10
              "
            >
              {/* Icon */}
              <div
                className="
                  flex
                  items-center
                  justify-center
                  flex-shrink-0
                  w-12
                  h-12
                  text-xl
                  text-white
                  bg-cyan-600
                  rounded-full
                "
              >
                <ion-icon name={contact.logo}></ion-icon>
              </div>

              {/* Contact Details */}
              <div className="min-w-0">
                <p className="text-xs text-gray-500">
                  {contact.title}
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    text-gray-200
                    break-all
                    sm:text-base
                  "
                >
                  {contact.text}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Message */}
        <p className="mt-8 text-center text-sm text-gray-500">
          I'm always open to discussing new opportunities,
          projects and collaborations.
        </p>

      </div>
    </section>
  );
};

export default Contact;