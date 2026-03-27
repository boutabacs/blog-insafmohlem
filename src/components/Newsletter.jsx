import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const Newsletter = () => {
  return (
    <section className="bg-[#111] text-white py-12 px-4 flex flex-col items-center">
      
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 max-w-[600px] leading-tight">
        Stay tuned with weekly newsletters.
      </h2>

      
      <div className="w-full max-w-[600px] mb-6">
        <div className="flex items-center border-b border-gray-700 pb-2">
          <input
            type="email"
            placeholder="Enter your email address"
            className="bg-transparent border-none outline-none flex-grow text-white placeholder-white text-lg"
          />
          <button className="text-white  text-sm tracking-widest hover:text-gray-300 transition-colors cursor-pointer">
            Subscribe
          </button>
        </div>
        <p className="text-gray-500 text-sm mt-4">
          No worries, we don't spam your inbox.
        </p>
      </div>

      
      <div className="flex flex-wrap justify-center gap-8 mt-16">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
            <FaTwitter size={16} />
          </div>
          <span className="text-sm font-bold tracking-widest">32K</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
            <FaFacebookF size={16} />
          </div>
          <span className="text-sm font-bold tracking-widest">22K</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
            <FaInstagram size={16} />
          </div>
          <span className="text-sm font-bold tracking-widest">62K</span>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
