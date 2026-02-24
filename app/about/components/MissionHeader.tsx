"use client";
import { motion } from "framer-motion";

export default function MissionHeader() {
  return (
    <section className="
      w-full 
      bg-[#020617]
      px-6 sm:px-10 lg:px-16
      py-16 sm:py-24 lg:py-28
      flex items-center justify-center
      text-center
    ">

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl 2xl:max-w-[1200px]"
      >

        {/* LABEL */}
        <p className="
          text-blue-500
          font-bold
          uppercase
          opacity-90
          mb-6
          tracking-[0.1em]
          text-[clamp(30px,5vw,84px)]
        ">
          Our Mission
        </p>

        {/* HEADING */}
        <h2 className="
          font-bold
          text-white
          tracking-tight
          leading-[1.05]
          text-[clamp(30px,7vw,56px)]
        ">
          Orchestrating the{" "}
          <br className="hidden md:block" />
          <span className="text-blue-500 italic font-light">
            Autonomy
          </span>{" "}
          of tomorrow.
        </h2>

      </motion.div>
    </section>
  );
}