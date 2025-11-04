'use client';
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-[#000000] border-t border-[#E0E5E4] px-[72px] py-20 font-inter">
      <div className="flex flex-wrap justify-between gap-10">
        {/* Left side */}
        <div className="max-w-[419px] space-y-3">
          <img src="/images/logo.png" alt="Omnis Pay" className="w-[140px]" />
          <p className="text-base text-[#737373] font-medium  leading-relaxed">
            Building the all-in-one finance platform for SMEs in the Middle East and Africa. We believe SMEs deserve better.
          </p>
          <img src="/images/e570aee08d3dc42ff769402be0d23ea94e5192f0.png" alt="PCI DSS Certified" className="w-[90px]" />


          
        </div>

        {/* Center columns */}
        <div className="flex flex-wrap gap-16 text-sm text-[#4D4D4D]">
          <div>
            <h4 className="font-medium text-[#141414] mb-2 text-3.5">Collect</h4>
            <ul className="space-y-1">
              <li>Payment Links</li>
              <li>Product Payment Pages</li>
              <li>Complete Storefront</li>
              <li>E-commerce Integration</li>
              <li>Bulk Payment Links</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-[#141414] mb-2 text-3.5">Pay</h4>
            <ul className="space-y-1">
              <li>Supplier Payment</li>
              <li>Smart Spend</li>
              <li>Cash Flow Management</li>
              <li className="text-[#141414] font-medium">Borrow</li>
              <li>Cash Advance</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-[#141414] mb-2 text-3.5">Company</h4>
            <ul className="space-y-1">
              <li>Pricing</li>
              <li>About Us</li>
              <li>News & Media</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-[#141414] mb-2 text-3.5">Support</h4>
            <ul className="space-y-1">
              <li>Contact Us</li>
              <li>Help Centre</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>

        </div>

        {/* Subscribe section */}
        <div className="mt-14">
        <div className=" flex justify-between items-center">
            <div className="">
            <h4 className="font-semibold text-[16px] mb-1">Get the app</h4>
            <div className="flex gap-3 pt-3">
                <img src="/images/Mobile app store badge.png" alt="App Store" className="w-[130px]" />
                <img src="/images/Mobile app store badge (1).png" alt="Play Store" className="w-[130px]" />
            </div>
            
          </div>
          <div>
            <h4 className="font-semibold text-[16px] mb-1">Sign Up For Updates</h4>
          {/* <p className="text-sm text-[#6B6B75] mb-3">Get product updates and news</p> */}
          <div className="flex items-center gap-2 mb-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border border-[#E2E2E6] w-[296px] rounded-md px-3 py-2 text-sm focus:outline-none"
            />
            <button className="bg-[#4F1873] text-white font-semibold text-sm px-4 py-2 rounded-md">
              Subscribe
            </button>
          </div>

          </div>
          
        </div>
        <div className="mt-14 flex justify-between items-center">
            <div className="flex gap-4 pt-4">
            <img src="/images/Social icon.png" alt="X" className="w-5" />
            <img src="/images/Social icon (1).png" alt="Instagram" className="w-5 cursor-pointer" />
            <img src="/images/Social icon (2).png" alt="LinkedIn" className="w-5 cursor-pointer" />
            <img src="/images/Social icon (3).png" alt="Facebook" className="w-5 cursor-pointer" />
            <img src="/images/Social icon (4).png" alt="TikTok" className="w-5 cursor-pointer" />
          </div>
          <p className="text-xs text-[#6B6B75]">© 2025 — All rights reserved</p>
        </div>


      </div>
    </footer>
  );
}
