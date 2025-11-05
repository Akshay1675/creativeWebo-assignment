import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 md:py-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
          {/* Left column */}
          <div className="md:w-1/2">
            <img src="/images/Badge.png" alt="visa" className="h-6 object-contain" />

            {/* Headline: ~60px / leading 72px / semi-bold / letter-spacing ~2% */}
            <h1
              className="font-semibold text-[52px] leading-[72px] tracking-[0.02em] text-[#0A0A0A] mb-6"
              style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto" }}
            >
              The All-In One <br />
              Payments Platform <br />
              For Growing Businesses
            </h1>

            {/* Subtext */}
            <p className="text-base leading-6 text-[#737373] max-w-xl mb-6" style={{ fontWeight: 500 }}>
              From payment collections to payouts to credit — do it all in one place with fast settlements and minimal
              paperwork made for growing UAE businesses.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-4">
              <button
                className="bg-[#4F1873] hover:bg-[#3b0f57]  h-11 text-white px-3.5 py-2.5 text-base rounded-md font-semibold shadow"
                aria-label="Get Started - Free"
              >
                Get Started — Free
              </button>

              <button className="text-[#4F1873] bg-[#E0E5E4] h-11 px-3.5 py-2.5 text-base rounded-md font-semibold shadow">Book a demo</button>
            </div>
          </div>

          {/* Right column (dashboard mock + floating cards) */}
           <div className="flex-1 relative w-full flex items-center justify-center">
        {/* Main dashboard image */}
        <div className="rounded-2xl mt-62  overflow-hidden">
          <Image
            src="/images/Widget.png"
            alt="Dashboard Preview"
            width={600}
            height={400}
            className="object-cover"
          />
        </div>

        {/* Floating card - top right */}
        <div className="absolute top-6 right-10 bg-white rounded-2xl  p-3 w-56">
          <div className="flex items-center gap-3">
            <Image
              src="/images/Group 1686556974.png"
              alt="user"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            
          </div>
        </div>

        {/* Floating card - bottom left */}
        {/* Right Side Images / Cards */}
      <div className="relative mt-12 lg:mt-0 lg:w-[600px] h-[500px] flex justify-center items-center">
        
        {/* Main Large Card */}
        <div className="absolute top-[30] left-0 -translate-x-1/2 bg-white rounded-2xl p-4 w-[280px]">
          <Image
            src="/images/Balance.png"
            alt="Main card"
            width={280}
            height={200}
            className="rounded-xl"
          />
          
        </div>

        {/* Top Left Avatar Card */}
        <div className="absolute top-[20px] left-[-280] rotate-[-4.93deg]">
          <Image
            src="/images/Group 1686556973.png"
            alt="User Left"
            width={120}
            height={120}
            className="rounded-xl shadow-md"
          />
        </div>

        {/* Top Right Avatar Card */}
        <div className="absolute top-[20px] right-[40px] ">
          <Image
            src="/images/Group 1686556974.png"
            alt="User Right"
            width={140}
            height={140}
            className="rounded-xl shadow-md"
          />
        </div>

        {/* Middle Floating Widget Card */}
        <div className="absolute bottom-[80px] left-[20px] bg-white  rounded-xl p-2  w-[300px]">
          <Image
            src="/images/Recipient.png"
            alt="Widget"
            width={300}
            height={220}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Bottom Floating Small Avatar */}
        <div className="absolute bottom-[60px] right-[220px] rotate-[-5deg]">
          <Image
            src="/images/Rectangle 2628738.png"
            alt="Bottom Avatar"
            width={90}
            height={90}
            className="rounded-xl border object-cover  shadow-md"
          />
        </div>
        </div>
      </div>
        </div>

    
      </div>
    </section>
  );
}

