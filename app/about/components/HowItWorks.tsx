"use client";
import { motion } from "framer-motion";

export default function HowItWorks() {
  return (
    <section className="
      w-full 
      bg-[#020617] 
      px-6 
      py-12 sm:py-16 
      flex items-center justify-center
    ">
      {/* NARROW WHITE CARD */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="
          max-w-3xl w-full 
          bg-white 
          rounded-[2.5rem] sm:rounded-[3.5rem] 
          px-8 py-10 sm:px-14 sm:py-14 
          text-center 
          shadow-xl
        "
      >
        {/* TEXT CONTENT */}
        <p className="
          text-black 
          font-medium 
          leading-snug 
          mb-8 
          text-[clamp(18px,3vw,26px)]
        ">
          <span className="text-[#1e3a8a] font-bold">
            HireX helps businesses
          </span>{" "}
          use AI to flex in a whole new way. 
          Speeding up growth. Changing the game.{" "}
          <span className="font-bold">
            Making way for breakthroughs.
          </span>
        </p>

        {/* BLUE CLICKABLE BUTTON */}
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#1d4ed8" }}
          whileTap={{ scale: 0.98 }}
          className="
            bg-[#2563eb] 
            text-white 
            font-semibold 
            text-[14px] sm:text-[15px] 
            px-10 py-3 
            rounded-full 
            shadow-md 
            transition-colors 
            duration-300 
            cursor-pointer
          "
        >
          How HireX works
        </motion.button>
      </motion.div>
    </section>
  );
}