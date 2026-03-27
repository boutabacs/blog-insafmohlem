import React from "react";
import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn } from "react-icons/fa";
import { HiArrowLeft } from "react-icons/hi";

const ArticleFooter = () => {
  return (
    <div className="max-w-[1100px] mx-auto px-4 py-20 border-t border-gray-100">
      
      <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
        <div className="flex items-center gap-4">
          <span className="text-gray-400 text-sm">Tags:</span>
          <div className="flex gap-2">
            {["Beauty", "Fashion", "Travel"].map((tag) => (
              <span
                key={tag}
                className="bg-gray-50 px-4 py-1 rounded-full text-xs font-bold text-gray-600 cursor-pointer hover:bg-gray-100 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase">Share on</span>
          <div className="flex gap-5 text-gray-600">
            <FaFacebookF className="cursor-pointer hover:text-black transition-colors" size={14} />
            <FaTwitter className="cursor-pointer hover:text-black transition-colors" size={14} />
            <FaPinterestP className="cursor-pointer hover:text-black transition-colors" size={14} />
            <FaLinkedinIn className="cursor-pointer hover:text-black transition-colors" size={14} />
          </div>
        </div>
      </div>

      
      <div className="mb-24">
        <div className="inline-flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-black mb-6 cursor-pointer hover:bg-gray-100 transition-colors">
          <HiArrowLeft size={14} />
          <span>Previous Article</span>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-black max-w-[600px] leading-tight">
          Festival, music and cool scenery: a car-free adventure
        </h3>
      </div>

      
      <div>
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-black">Leave a comment</h2>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative group">
            <input
              type="text"
              placeholder="Name*"
              className="w-full border-b border-gray-200 py-4 outline-none focus:border-black transition-colors placeholder-gray-400 text-sm"
            />
          </div>
          <div className="relative group">
            <input
              type="email"
              placeholder="Email*"
              className="w-full border-b border-gray-200 py-4 outline-none focus:border-black transition-colors placeholder-gray-400 text-sm"
            />
          </div>
          <div className="relative group">
            <input
              type="text"
              placeholder="Website"
              className="w-full border-b border-gray-200 py-4 outline-none focus:border-black transition-colors placeholder-gray-400 text-sm"
            />
          </div>
          <div className="md:col-span-3 mt-4">
            <textarea
              placeholder="Comment"
              rows={6}
              className="w-full border-b border-gray-200 py-4 outline-none focus:border-black transition-colors placeholder-gray-400 text-sm resize-none"
            ></textarea>
          </div>
          <div className="md:col-span-3 mt-8">
            <button
              type="submit"
              className="bg-[#1a1c2e] text-white px-12 py-4 text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ArticleFooter;
