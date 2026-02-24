"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="relative w-full bg-[#020617] overflow-hidden">

      {/* HERO WRAPPER */}
      <div className="
        relative 
        flex flex-col lg:flex-row 
        justify-start lg:items-center
        pt-12 lg:pt-20
      ">

        {/* LEFT CONTENT */}
        <div className="
          relative z-10 
          w-full lg:w-1/2 
          px-6 sm:px-10 lg:px-16
        ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="
              text-brand-blue 
              font-bold 
              tracking-[0.25em] 
              uppercase 
              text-[clamp(10px,2vw,18px)] 
              mb-6 
              block 
              opacity-80
            ">
              ABOUT US
            </span>

            <h1 className="
              font-bold 
              text-white 
              leading-[0.9] 
              tracking-tight 
              mb-6
              text-[clamp(34px,8vw,110px)]
            ">
              Making way for <br />
              <span className="text-brand-blue italic font-extralight">
                breakthroughs
              </span>
            </h1>

            <p className="
              text-gray-400 
              font-light 
              leading-relaxed 
              text-[clamp(14px,2.5vw,20px)] 
              max-w-lg
            ">
              We are architecting the future of AI-orchestrated hiring at{" "}
              <span className="text-white font-medium">HireX</span>, 
              connecting global talent with opportunities through cognitive independence.
            </p>
          </motion.div>
        </div>

        
        {/* RIGHT IMAGE */}
        <div className="
          relative 
          w-full lg:w-1/2
          /* Changed from mt-4 to a negative margin to pull the image UP */
          -mt-12 sm:-mt-20 lg:mt-0
          /* Adjusted height for mobile to prevent overflow/empty space */
          h-[320px] sm:h-[480px] lg:h-[90vh]
          flex justify-center lg:justify-end
          /* Added z-0 to ensure it stays behind the text if they overlap slightly */
          z-0
        ">
          <div className="relative w-full h-full">
            <Image
              src="/about/hero.png"
              alt="HireX Environment"
              fill
              priority
              sizes="(max-width:1024px) 100vw, 50vw"
              className="
                object-contain 
                /* Ensures the image stays pinned to the top of its container */
                object-top
                lg:object-cover 
                lg:object-center
              "
            />
            {/* DESKTOP LEFT GRADIENT */}
            <div className="
              hidden lg:block 
              absolute inset-0 
              bg-gradient-to-r 
              from-[#020617] 
              via-[#020617]/60 
              to-transparent
            " />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutHero;