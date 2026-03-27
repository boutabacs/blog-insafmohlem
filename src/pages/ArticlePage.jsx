import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { posts } from "../data/posts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArticleFooter from "../components/ArticleFooter";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";
import axios from "axios";

const ArticlePage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchSingleArticle = async () => {
      const { data } = await axios.get(
        `http://localhost:3000/api/v1/blog/single-article/${id}`,
      );
      setPost(data);
    };
    fetchSingleArticle();
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Article non trouvé</h1>
        <Link to="/" className="text-blue-500 underline">
          Retour à l'accueil
        </Link>
      </div>
    );
  }

  const date = new Date(post.createdAt);

  const options = { day: "2-digit", month: "long", year: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("fr-FR", options).format(date);

  console.log(formattedDate); // "27 mars 2026"

  return (
    <div className="bg-white min-h-screen">
      <main className="w-full py-10 md:py-20">
        <div className="max-w-275 mx-auto px-4 mb-10 md:mb-16 flex flex-col items-start text-left">
          <div className="inline-block mb-6 md:mb-8">
            <span className="text-[10px] md:text-[11px] font-black tracking-[0.3em] uppercase text-black border-b-2 border-black pb-1">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-[80px] font-bold mb-8 md:mb-10 leading-[1.1] md:leading-none max-w-275 text-black">
            {post.title}
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-[10px] md:text-[11px] font-bold tracking-widest uppercase text-black">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
              <svg
                className="w-8 h-8 md:w-10 md:h-10 text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <Link
                to={`/author/${post.user._id}`}
                className="hover:text-gray-500 transition-colors cursor-pointer"
              >
                {post.user.username}
              </Link>
              <span className="text-gray-400 text-xs hidden sm:inline">•</span>
              <span>{formattedDate}</span>
              <span className="text-gray-400 text-xs hidden sm:inline">•</span>
              <span>{post.readTime || 3} min</span>
            </div>
          </div>
        </div>

        <div className="w-full mb-12 md:mb-20">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto object-cover max-h-[500px] md:max-h-[800px]"
          />
        </div>

        <div className="max-w-[1100px] mx-auto px-4 md:px-0">
          <div className="flex flex-col md:flex-row gap-10 md:gap-8 relative">
            <aside className="md:sticky md:top-24 h-fit border-b md:border-none pb-8 md:pb-0 border-gray-100">
              <div className="flex flex-row md:flex-col gap-6 text-gray-400 items-center justify-center md:justify-start md:w-10">
                <a
                  href="#"
                  className="hover:text-black transition-colors text-xl"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="hover:text-black transition-colors text-xl"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="hover:text-black transition-colors text-xl"
                >
                  <FaPinterestP />
                </a>
                <a
                  href="#"
                  className="hover:text-black transition-colors text-xl"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </aside>

            <div className="flex-grow max-w-full md:max-w-[800px] mx-auto overflow-hidden">
              <div
                className="prose prose-xl prose-stone max-w-none 
                  prose-headings:font-bold prose-headings:text-black prose-headings:mt-12 prose-headings:mb-8
                  prose-p:text-[#4a5568] prose-p:leading-[1.8] prose-p:mb-8
                  prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-8
                  prose-li:text-[#4a5568] prose-li:mb-2
                  prose-img:rounded-none prose-img:my-12"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
};

export default ArticlePage;
