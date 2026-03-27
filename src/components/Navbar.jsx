import React, { useState } from "react";
import { BiMessage, BiSearch, BiUser, BiMenu, BiX } from "react-icons/bi";
import { Link } from "react-router-dom";

const Nav = ({ icon, text, className = "" }) => {
  return (
    <div className={`flex gap-3 items-center ${className}`}>
      {typeof icon === "string" ? (
        <img className="w-4 h-4" src={icon} alt="icon" />
      ) : (
        icon
      )}
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="relative w-full border-b border-gray-100 bg-white z-50 uppercase font-black">
      <div className="max-w-[1400px] mx-auto h-20 px-4 md:px-10 flex items-center justify-between">
        
        {/* Search Overlay (Absolute) */}
        {isSearchOpen && (
          <div className="absolute inset-0 bg-white z-50 flex items-center px-4 md:px-10 animate-in fade-in duration-300">
            <div className="max-w-[1400px] mx-auto w-full flex items-center gap-4">
              <BiSearch className="text-2xl text-black" />
              <input 
                type="text" 
                placeholder="Search articles..." 
                autoFocus
                className="flex-grow bg-transparent border-none outline-none text-lg font-bold placeholder-gray-300"
              />
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="text-3xl text-black cursor-pointer hover:rotate-90 transition-transform duration-300"
              >
                <BiX />
              </button>
            </div>
          </div>
        )}

        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src="/assets/imgi_1_logo.svg" alt="logo" className="h-8 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6 border-r border-gray-100 pr-8 mr-2">
            <Nav icon="/assets/twitter.svg" text="32K" className="hover:opacity-70 transition-opacity cursor-pointer" />
            <Nav icon="/assets/instagram.svg" text="62K" className="hover:opacity-70 transition-opacity cursor-pointer" />
          </div>
          <div className="flex items-center gap-6">
            <Nav icon={<BiMessage className="text-xl" />} text="Subscribe" className="hover:text-gray-600 transition-colors cursor-pointer" />
            <div className="flex items-center gap-5 ml-4">
              <BiSearch 
                onClick={() => setIsSearchOpen(true)}
                className="text-2xl font-medium cursor-pointer hover:text-gray-600 transition-colors" 
              />
              <Link to="/profile">
                <BiUser className="text-2xl font-medium cursor-pointer hover:text-gray-600 transition-colors" />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Icons + Toggle */}
        <div className="flex lg:hidden items-center gap-4">
          <Link to="/profile">
            <BiUser className="text-2xl font-medium cursor-pointer" />
          </Link>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-3xl focus:outline-none cursor-pointer"
          >
            {isMenuOpen ? <BiX /> : <BiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl py-8 px-6 flex flex-col gap-8 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-6">
            <Nav icon={<BiMessage className="text-xl" />} text="Subscribe" />
            <button 
              onClick={() => {
                setIsMenuOpen(false);
                setIsSearchOpen(true);
              }}
              className="flex items-center gap-3 text-sm font-medium cursor-pointer"
            >
              <BiSearch className="text-xl" />
              <span>Search articles</span>
            </button>
          </div>
          
          <div className="h-[1px] bg-gray-100 w-full"></div>
          
          <div className="flex items-center gap-8">
            <Nav icon="/assets/twitter.svg" text="32K" />
            <Nav icon="/assets/instagram.svg" text="62K" />
          </div>
        </div>
      )}
    </nav>
  );
};


export default Navbar;
