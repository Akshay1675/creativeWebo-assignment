import Image from "next/image";
import React from "react";

export default function GettingStarted() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12">
      <div className="max-w-[1140px] mx-auto text-center">
        {/* Top heading */}
        <div className="mb-6">
          <h3 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Getting Started Is Simple
          </h3>
          <p className="mt-2 text-sm md:text-base text-gray-500">
            Minimal documentation, onboard in 48 hours.
          </p>
        </div>

        {/* Steps container */}
        <div className="md:ml-15 mt-8 ">
          {/* connector line behind circles */}
          

          <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-6">
            {/* Step 1 */}
            <div className="flex flex-col items-start text-left">
              <div className="relative flex flex-col md:w-[284px] md:h-60 items-center md:items-start">
                <div className="w-[88px] h-[88px] md:w-24 md:h-24">
                  <Image
                    src="/images/Featured icon.png"
                    alt="Step 01"
                    width={96}
                    height={96}
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 text-left md:text-left max-w-[220px]">
                  <h4 className="text-lg font-semibold text-gray-900">Sign Up</h4>
                  <p className="mt-2 text-sm text-gray-500">
                    Create your free account with basic business information.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-start text-left">
              <div className="relative flex flex-col items-center md:left-0 md:w-[284px] md:h-60">
                <div className="w-[88px] h-[88px] md:w-24 md:h-24">
                  <Image
                    src="/images/Featured icon (1).png"
                    alt="Step 02"
                    width={96}
                    height={96}
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 text-center max-w-[220px]">
                  <h4 className="text-lg font-semibold text-gray-900">Submit Documents</h4>
                  <p className="mt-2 text-sm text-gray-500">
                    Easy setup with basic business details — no extensive paperwork.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-start text-left">
              <div className="relative flex flex-col items-center md:items-end md:w-[284px] md:h-60">
                <div className="w-[88px] h-[88px] md:w-24 md:h-24">
                  <Image
                    src="/images/Featured icon (2).png"
                    alt="Step 03"
                    width={96}
                    height={96}
                    className="object-contain"
                  />
                </div>
                <div className="mt-4 text-left md:text-right max-w-[220px]">
                  <h4 className="text-lg font-semibold text-gray-900">Start Transacting</h4>
                  <p className="mt-2 text-sm text-gray-500">
                    Begin collecting payments and growing your business instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="mt-8 mx-auto flex items-center justify-center gap-4">
          <button className="bg-[#4F1873] hover:bg-[#3b0f57] text-white px-6 py-2 rounded-md font-medium">
            Get Started - Free
          </button>
              <button className="text-[#4F1873] bg-[#E0E5E4] h-11 px-3.5 py-2.5 text-base rounded-md font-semibold shadow">Book a demo</button>
        </div>
      </div>
    </section>
  );
}
