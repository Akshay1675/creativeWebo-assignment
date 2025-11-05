import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <header className="w-full shadow-sm">
      {/* 🔹 Top Gradient Rating Bar */}
      <div
        className="hidden w-full h-14 md:flex justify-center items-center"
        style={{
          background: "linear-gradient(90deg, #4F1873 0%, #A05ACE 100%)",
        }}
      >
        <div className="relative w-[920.85px] h-8">
          {/* Rating image */}
          <Image
            src="/images/Frame 2147224512.png"
            alt="Google Rating 5.0/5"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* 🔹 Main Navigation Bar */}
      <nav className="md:w-7xl w-full md:border md:rounded-2xl md:mx-auto mt-2 md:border-gray-300 flex justify-between items-center px-10 py-4 bg-white">
        {/* Logo */}
        <div className="flex justify-between items-center">
          <img src="/images/logo.png" alt="Omnis Pay" className="md:w-[140px] w-[156px]" />
          <img src="/images/Button.png" alt="Omnis Pay" className="md:hidden ml-40" />

        </div>

        {/* Menu Links */}
        <ul className="hidden md:flex gap-8 text-[#737373] font-[Inter Tight] font-medium text-sm">
          <li className="hover:text-[#4F1873] cursor-pointer">Products</li>
          <li className="hover:text-[#4F1873] cursor-pointer">Pro Tools</li>
          <li className="hover:text-[#4F1873] cursor-pointer">Pricing</li>
          <li className="hover:text-[#4F1873] cursor-pointer">Resources</li>
          <li className="hover:text-[#4F1873] cursor-pointer">Company</li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-gray-700 font-medium hover:text-[#4F1873]">
            Sign In
          </button>
          <button className="bg-[#4F1873] w-[88px] h-11 text-white  rounded-md font-semibold hover:bg-[#3e0e5b]">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
