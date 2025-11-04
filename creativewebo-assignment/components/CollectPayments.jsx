import Image from "next/image";
import React from "react";

const CollectPayments = () => {
  return (
    <section className="w-full py-20 px-6 md:px-20 flex flex-col items-center text-center border-t border-gray-100">
      
      {/* TOP HEADING + DESCRIPTION */}
      <div className="max-w-3xl mb-12">
        <button className="bg-[#EDE3ED] w-[85px] rounded-md uppercase text-base tracking-wider py-1  text-[#4F1873] font-semibold mb-2">
          Collect
        </button>
        <h2 className="text-4xl md:text-5xl font-bold text-[#141414] leading-tight mb-4">
          Collect Payments with Confidence
        </h2>
        <p className="text-[#737373] text-base font-medium leading-7">
          Simplify your business finances with our comprehensive payment
          collection solutions designed to automate, track, and optimize your
          revenue stream.
        </p>
      </div>

      {/* MAIN CONTENT SECTION */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full max-w-6xl text-left">
        
        {/* LEFT SIDE */}
        <div className="flex-1 relative flex items-center justify-center">
          <div className="rounded-2xl overflow-hidden shadow-lg w-[580px] h-[450px] relative">
            <Image
              src="/images/Mockup wrapper.png"
              alt="Payment Background"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>

          
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 max-w-[500px] space-y-4">
          <ul className="space-y-10 text-gray-800">
            <li className=" gap-2">
              <span className="flex items-start">
                <b className="text-[#141414] text-xl font-semibold leading-5">Payment Links</b> 
                {/* <Image
              src="/images/arrow-up-right.png"
              alt="Payment Background"
              fill
              className="w-5 h-5 object-cover"
            /> */}
              </span>
              <span className="text-[#737373] text-base font-medium leading-7">
                generate instant, secure payment links to
                share via WhatsApp, email, or social media.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span>
                <b className="text-[#141414] text-xl font-semibold leading-5">Product Payment Pages</b>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span>
                <b className="text-[#141414] text-xl font-semibold leading-5">Complete Storefront</b> 
              </span>
            </li>
            <li className="flex items-start gap-8">
              <span>
                <b className="text-[#141414] text-xl font-semibold leading-5">E-commerce Integration</b> 
              </span>
            </li>
            <li className="flex items-start gap-8">
              <span>
                <b className="text-[#141414] text-xl font-semibold leading-5">Bulk Payment Links</b> 
              </span>
            </li>
          </ul>

          <button className="bg-purple-700 hover:bg-purple-800 text-white font-medium px-6 py-3 rounded-lg shadow-md transition">
            Get Started – Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default CollectPayments;
