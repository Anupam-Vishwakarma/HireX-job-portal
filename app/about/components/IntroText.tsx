"use client";
import React from "react";

const IntroText = () => {
  return (
    <section className="
      w-full
      bg-[#020617]
      border-y border-white/5
      px-6 sm:px-10 lg:px-16
      py-14 sm:py-20 lg:py-24
    ">
      <div className="max-w-4xl 2xl:max-w-[1200px] mx-auto text-center">

        <h2 className="
          font-medium
          text-white
          leading-relaxed
          text-[clamp(18px,3.5vw,32px)]
        ">
         &quot; HireX is on a mission to{" "}
          <span className="text-brand-blue">
            modernize
          </span>{" "}
          how the world works together. We connect people to move your business
          forward with AI-driven precision.&quot;
        </h2>

      </div>
    </section>
  );
};

export default IntroText;