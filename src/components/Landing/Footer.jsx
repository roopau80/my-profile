import React from "react";

const Footer = () => {
  return (
    <footer className="relative px-4 py-8 overflow-hidden text-white bg-gray-900">

      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-cyan-600/40"></div>

      {/* Background Glow */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-64
          h-32
          bg-cyan-600/10
          rounded-full
          blur-3xl
        "
      ></div>

      <div className="relative max-w-6xl mx-auto text-center">

        {/* Thank You */}
        <h3 className="text-xl font-semibold sm:text-2xl">
          Thank You for{" "}
          <span className="text-cyan-500">
            Visiting
          </span>
        </h3>

        {/* Message */}
        <p className="max-w-md mx-auto mt-2 text-sm leading-6 text-gray-400">
          Thank you for taking the time to explore my portfolio.
          I look forward to connecting with you.
        </p>

        {/* Divider */}
        <div className="w-16 h-px mx-auto my-5 bg-cyan-600"></div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="text-gray-300">
            Roopa Uppar
          </span>
          . All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;