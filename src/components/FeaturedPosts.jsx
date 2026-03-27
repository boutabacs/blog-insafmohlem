import React from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const FeaturedCard = ({ image, category, title }) => {
  return (
    <div className="relative h-[320px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-full flex items-center justify-center text-white overflow-hidden group cursor-pointer">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${image})`,
        }}
      ></div>
      <div className="relative text-center px-4 sm:px-8 z-10 w-full">
        <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase block mb-3 sm:mb-4 opacity-90">
          {category}
        </span>
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 leading-tight max-w-[280px] sm:max-w-[320px] mx-auto group-hover:translate-y-[-5px] transition-transform duration-500">
          {title}
        </h2>
        <div className="flex items-center justify-center mt-4 sm:mt-6 group/link overflow-hidden">
          <div className="flex items-center gap-3 transition-all duration-500">
            {/* Ligne à gauche qui disparaît au hover */}
            <div className="w-6 sm:w-8 h-[1.5px] bg-white opacity-80 transition-all duration-500 group-hover:w-0 group-hover:opacity-0 group-hover:-translate-x-10"></div>

            <span className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase opacity-90">
              Continue Reading
            </span>

            {/* Flèche à droite qui apparaît au hover */}
            <div className="w-0 opacity-0 transition-all duration-500 transform translate-x-10 group-hover:w-10 sm:group-hover:w-14 group-hover:opacity-100 group-hover:translate-x-0">
              <HiOutlineArrowLongRight className="text-xl sm:text-2xl scale-x-150 origin-left" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedPosts = () => {
  const posts = [
    {
      category: "Fashion",
      title: "Top 10 night creams will help your skin to relax",
      image: "/assets/b1.jpg",
    },
    {
      category: "Health",
      title: "Festival, music and cool scenery: a car-free adventure",
      image: "/assets/b2.jpg",
    },
    {
      category: "Fitness",
      title: "Combing hair 10 tips for proper hair combing",
      image: "/assets/b3.jpg",
    },
  ];

  return (
    <section className="bg-black py-10 sm:py-20 px-4 md:px-10 flex justify-center ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] w-full max-w-[1400px]">
        {posts.map((post, index) => (
          <FeaturedCard key={index} {...post} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;
