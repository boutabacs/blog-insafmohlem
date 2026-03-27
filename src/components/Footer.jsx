import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-20 flex flex-col items-center text-center">
      
      <h2 className="text-4xl font-black mb-8 tracking-tight font-serif">Danny</h2>

      
      <p className="text-[#6b7c93] text-[15px] mb-2">
        2021 Hub. All images are for demo purposes only.
      </p>

      
      <a
        href="mailto:info@liquid-themes.com"
        className="text-[#6b7c93] text-[15px] hover:text-black transition-colors"
      >
        info@liquid-themes.com
      </a>
    </footer>
  );
};

export default Footer;
