import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { posts } from "../data/posts";

const AuthorPostCard = ({ id, category, title, author, date, image, description }) => {
  return (
    <article className="max-w-[1100px] mx-auto mb-24 flex flex-col items-start text-left">
      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-black block mb-4">
        {category}
      </span>

      <Link to={`/article/${id}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 cursor-pointer leading-tight hover:text-gray-700 transition-colors">
          {title}
        </h2>
      </Link>

      <div className="flex items-center gap-4 text-[10px] font-bold tracking-widest uppercase mb-10">
        <span className="text-black">{author}</span>
        <span className="text-gray-300">•</span>
        <span className="text-black">{date}</span>
      </div>

      <Link to={`/article/${id}`} className="w-full">
        <div className="mb-10 overflow-hidden cursor-pointer group">
          <img
            src={image}
            alt={title}
            className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </Link>

      <p className="text-gray-500 leading-relaxed max-w-[800px] text-sm md:text-base">
        {description}
      </p>
    </article>
  );
};

const AuthorPage = () => {
  const { name } = useParams();
  
  // Filtrer les posts par auteur
  const authorPosts = posts.filter(
    (post) => post.author.toLowerCase() === name.toLowerCase()
  );

  // Simuler les infos de l'auteur (puisqu'on n'a pas de data séparée pour les auteurs)
  const authorInfo = {
    name: name,
    role: "Professional Writer",
    bio: `Passionate about sharing insights and stories as a ${name}. I believe in the power of words to inspire and educate.`,
    postsCount: authorPosts.length,
    followers: "1.2K",
    following: "850"
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-grow pt-20 pb-32">
        {/* En-tête de l'Auteur */}
        <div className="max-w-[1100px] mx-auto px-4 mb-20">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 border-b border-gray-100 pb-16">
            {/* Avatar silhouette */}
            <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
              <svg className="w-20 h-20 md:w-28 md:h-28 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>

            {/* Infos de l'Auteur */}
            <div className="flex-grow text-center md:text-left pt-2">
              <h1 className="text-4xl font-bold text-black mb-2">{authorInfo.name}</h1>
              <span className="text-[11px] font-black tracking-[0.3em] uppercase text-gray-400 block mb-6">
                {authorInfo.role}
              </span>
              
              <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mb-8">
                {authorInfo.bio}
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-8">
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-black">{authorInfo.postsCount}</span>
                  <span className="text-[10px] font-black tracking-widest uppercase text-gray-400">Articles</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-black">{authorInfo.followers}</span>
                  <span className="text-[10px] font-black tracking-widest uppercase text-gray-400">Followers</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-black">{authorInfo.following}</span>
                  <span className="text-[10px] font-black tracking-widest uppercase text-gray-400">Following</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Liste des articles de l'auteur */}
        <div className="max-w-[1100px] mx-auto px-4 flex flex-col items-start">
          <div className="mb-16 text-left w-full">
            <h2 className="text-[11px] font-black tracking-[0.3em] uppercase text-black mb-4 border-b-2 border-black inline-block pb-1">
              Articles by {name}
            </h2>
          </div>
          
          <div className="w-full">
            {authorPosts.map((post, index) => (
              <React.Fragment key={post.id}>
                <AuthorPostCard {...post} />
                {index < authorPosts.length - 1 && (
                  <div className="w-full h-[1px] bg-gray-200 mb-24"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AuthorPage;
