import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handlChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const login = async () => {
    const { data } = await axios.post(
      "http://localhost:3000/api/v1/auth/login",
      user,
    );
    setUser({
      email: "",
      password: "",
    });
    const { token, ...others } = data;
    localStorage.setItem("user", JSON.stringify(others));
    localStorage.setItem("token", JSON.stringify(token));
    navigate("/");
  };
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="grow flex items-center justify-center py-20 px-4">
        <div className="w-full max-w-[450] bg-white p-8 md:p-12 border border-gray-100 shadow-sm">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-black mb-3">Welcome Back</h1>
            <p className="text-gray-500 text-sm tracking-wide">
              Enter your details to access your account
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label
                className="text-[11px] font-black tracking-widest uppercase text-black"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={user.email}
                onChange={handlChange}
                placeholder="hello@example.com"
                className="w-full border-b border-gray-200 py-3 outline-none focus:border-black transition-colors placeholder-gray-300 text-sm"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label
                  className="text-[11px] font-black tracking-widest uppercase text-black"
                  htmlFor="password"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-[10px] font-bold text-gray-400 hover:text-black transition-colors uppercase tracking-tighter"
                >
                  Forgot Password?
                </a>
              </div>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                name="password"
                value={user.password}
                onChange={handlChange}
                className="w-full border-b border-gray-200 py-3 outline-none focus:border-black transition-colors placeholder-gray-300 text-sm"
                required
              />
            </div>

            <button
              onClick={login}
              className="block w-full text-center bg-black text-white py-4 text-[11px] font-black tracking-[0.3em] uppercase hover:bg-gray-900 transition-colors mt-4"
            >
              Log In
            </button>
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-500 text-sm">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-black font-bold hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
