import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { posts } from "../data/posts";
import { Link } from "react-router-dom";
import { BiEditAlt, BiLogOut } from "react-icons/bi";
import { PostCard } from "../components/BlogSection";

const Profile = () => {
  // Simuler un utilisateur (plus tard, cela viendra d'un contexte d'authentification)
  const user = {
    name: "Philip Reyes",
    role: "Premium Writer",
    bio: "Passionate about fashion, skin care and lifestyle. Sharing my thoughts on how to live a better life through simple habits.",
    avatar: null, // Silhouette par défaut
    joinedDate: "September 2021",
    postsCount: 8,
    following: 124,
    followers: 1250
  };

  // On prend quelques posts pour la section "My Articles"
  const myPosts = posts.slice(0, 3);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-grow pt-20 pb-32">
        {/* Header du Profil */}
        <div className="max-w-[1100px] mx-auto px-4 mb-20">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 border-b border-gray-100 pb-16">
            {/* Avatar */}
            <div className="relative group">
              <div className="w-32 h-32 md:w-48 md:h-48 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-xl">
                <svg className="w-24 h-24 md:w-32 md:h-32 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <button className="absolute bottom-2 right-2 bg-black text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
                <BiEditAlt className="text-xl" />
              </button>
            </div>

            {/* Infos Utilisateur */}
            <div className="flex-grow text-center md:text-left pt-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                <div>
                  <h1 className="text-4xl font-bold text-black mb-1">{user.name}</h1>
                  <span className="text-[11px] font-black tracking-[0.3em] uppercase text-gray-400">{user.role}</span>
                </div>
                <div className="flex gap-4 justify-center">
                  <button className="bg-black text-white px-8 py-3 text-[11px] font-black tracking-[0.2em] uppercase hover:bg-gray-800 transition-colors">
                    Edit Profile
                  </button>
                  <Link to="/login" className="border border-gray-200 p-3 hover:bg-gray-50 transition-colors text-gray-400 hover:text-red-500">
                    <BiLogOut className="text-xl" />
                  </Link>
                </div>
              </div>

              <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mb-8">
                {user.bio}
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-12">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-black">{user.postsCount}</span>
                  <span className="text-[10px] font-black tracking-widest uppercase text-gray-400">Posts</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-black">{user.followers}</span>
                  <span className="text-[10px] font-black tracking-widest uppercase text-gray-400">Followers</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-black">{user.following}</span>
                  <span className="text-[10px] font-black tracking-widest uppercase text-gray-400">Following</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Contenu */}
        <div className="max-w-[1100px] mx-auto px-4 flex flex-col items-center">
          <div className="flex items-center gap-12 mb-12 border-b border-gray-100 w-full justify-center md:justify-start">
            <button className="pb-4 border-b-2 border-black text-[11px] font-black tracking-widest uppercase text-black">
              My Articles
            </button>
            <button className="pb-4 border-b-2 border-transparent text-[11px] font-black tracking-widest uppercase text-gray-400 hover:text-black transition-colors">
              Bookmarked
            </button>
          </div>

          <div className="w-full">
            {myPosts.map((post, index) => (
              <React.Fragment key={post.id}>
                <PostCard {...post} />
                {index < myPosts.length - 1 && (
                  <div className="w-2/3 h-[1px] bg-gray-200 mx-auto mb-24"></div>
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

export default Profile;
