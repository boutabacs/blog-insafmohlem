import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Register = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="w-full max-w-[450px] bg-white p-8 md:p-12 border border-gray-100 shadow-sm">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-black mb-3">Create Account</h1>
            <p className="text-gray-500 text-sm tracking-wide">Join our community of readers</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[11px] font-black tracking-widest uppercase text-black" htmlFor="name">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Philip Reyes"
                className="w-full border-b border-gray-200 py-3 outline-none focus:border-black transition-colors placeholder-gray-300 text-sm"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-black tracking-widest uppercase text-black" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="hello@example.com"
                className="w-full border-b border-gray-200 py-3 outline-none focus:border-black transition-colors placeholder-gray-300 text-sm"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-black tracking-widest uppercase text-black" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full border-b border-gray-200 py-3 outline-none focus:border-black transition-colors placeholder-gray-300 text-sm"
                required
              />
            </div>

            <Link
              to="/profile"
              className="block w-full text-center bg-black text-white py-4 text-[11px] font-black tracking-[0.3em] uppercase hover:bg-gray-900 transition-colors mt-4"
            >
              Sign Up
            </Link>
          </form>

          <div className="mt-10 text-center">
            <p className="text-gray-500 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-black font-bold hover:underline">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Register;
