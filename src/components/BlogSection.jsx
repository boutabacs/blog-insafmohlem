import React, { useState } from "react";
import { HiCheck } from "react-icons/hi";
import { Link } from "react-router-dom";
import { posts as postsData } from "../data/posts";

export const PostCard = ({
  _id,
  category,
  title,
  author,
  date,
  image,
  description,
}) => {
  return (
    <article className="max-w-[1100px] mx-auto mb-24 text-center flex flex-col items-center justify-center">
      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-black block mb-4">
        {category}
      </span>

      <Link to={`/article/${_id}`}>
        <h2 className="w-3/4 mx-auto text-5xl md:text-5xl font-bold mb-6 cursor-pointer underline decoration-6 underline-offset-8 decoration-black leading-tight hover:text-gray-700 transition-colors">
          {title}
        </h2>
      </Link>

      {/* Author and Date */}
      <div className="flex items-center justify-center gap-4 text-[10px] font-bold tracking-widest uppercase mb-10">
        <Link
          to={`/article/${author}`}
          className="text-black hover:text-gray-500 transition-colors cursor-pointer"
        >
          {author}
        </Link>
        <span className="text-gray-300">•</span>
        <span className="text-black">{date}</span>
      </div>

      <Link to={`/article/${_id}`} className="w-full">
        <div className="mb-10 overflow-hidden cursor-pointer group">
          <img
            src={image}
            alt={title}
            className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </Link>

      <p className="text-gray-500 leading-relaxed max-w-[700px] mx-auto text-sm md:text-base">
        {description}
      </p>
    </article>
  );
};

const BlogSection = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const posts = postsData;

  const handleLoadMore = () => {
    setVisibleCount(posts.length);
  };

  return (
    <section className="py-20 px-4 bg-white flex flex-col items-center">
      <div className="w-full">
        {posts.slice(0, visibleCount).map((post, index) => (
          <React.Fragment key={index}>
            <PostCard {...post} />
            {index < visibleCount - 1 && (
              <div className="w-2/3 h-[1px] bg-gray-200 mx-auto mb-24"></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {visibleCount < posts.length ? (
        <button
          onClick={handleLoadMore}
          className="mt-8 px-10 py-4 bg-[#222] text-white text-[12px] font-bold tracking-[0.2em] uppercase rounded-sm hover:bg-black transition-all duration-300 cursor-pointer"
        >
          Load more
        </button>
      ) : (
        <div className=" flex items-center gap-2 text-sm  text-black">
          <span>All items loaded</span>
          <HiCheck className="text-xl" />
        </div>
      )}
    </section>
  );
};

export default BlogSection;
