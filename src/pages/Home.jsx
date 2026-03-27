import React from "react";
import Navbar from "../components/Navbar";
import FeaturedPosts from "../components/FeaturedPosts";
import BlogSection from "../components/BlogSection";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <FeaturedPosts />
      <BlogSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
