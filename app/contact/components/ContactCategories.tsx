"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const categories = [
  {
    title: "Enterprise Partnerships",
    tag: "Module 01",
    number: "01",
    image: "/contact/enterprise_inquery.png",
    points: [
      "Custom HireX API Architecture & Scaling",
      "Strategic AI Agent Fleet Deployment",
      "Executive-Level Talent Pipeline Automation",
    ],
  },
  {
    title: "Candidate Ecosystem",
    tag: "Module 02",
    number: "02",
    image: "/contact/candidate.png",
    points: [
      "High-Performance Profile Optimization",
      "Advanced AI Behavioral Assessment",
      "Automated Career Path Synchronization",
    ],
  },
  {
    title: "Consulting & Advisory",
    tag: "Module 03",
    number: "03",
    image: "/contact/consulting.png",
    points: [
      "Data-Driven Acquisition Architecture",
      "Organizational AI Readiness Diagnostics",
      "Proprietary LLM Workflow Engineering",
    ],
  },
  {
    title: "Gov & Compliance",
    tag: "Module 04",
    number: "04",
    image: "/contact/gov.png",
    points: [
      "Ethical AI Bias Mitigation Protocols",
      "Regulatory Workforce Compliance",
      "Public Sector Talent Infrastructures",
    ],
  },
];

export default function ContactCategories() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative px-6 sm:px-10 lg:px-16 py-22 sm:py-20 overflow-hidden bg-[#020617]">

      {/* Radial bg glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto relative z-10">

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-[clamp(26px,7vw,60px)] font-black text-white  tracking-tighter leading-[1]">
            Inquiry{" "}<br className="xs:hidden" /><span className="text-blue-500">Categories</span>
          </h2>
        </motion.div>

        {/* ── CARDS ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/[0.07] bg-[#080f1e] cursor-default hover:border-blue-500/40 transition-colors duration-500"
            >
              {/* ── IMAGE ZONE ── */}
              <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-[#0a1628] flex-shrink-0">
                {/* Gradient fade into card */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#080f1e] z-10" />
                {/* Hover overlay tint */}
                <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:1280px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Module tag — top left */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center bg-blue-600 px-3 py-1 text-[9px] font-black  tracking-widest text-white rounded-sm">
                    {cat.tag}
                  </span>
                </div>

                {/* Big ghost number — top right */}
                <div className="absolute top-3 right-4 z-20 text-5xl font-black text-white/[0.07] group-hover:text-blue-500/[0.12] transition-colors duration-500 leading-none select-none">
                  {cat.number}
                </div>
              </div>

              {/* ── TEXT ZONE ── */}
              <div className="relative flex flex-col flex-1 px-6 pt-5 pb-7">

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-white  tracking-tight leading-tight mb-4 group-hover:text-blue-100 transition-colors duration-300">
                  {cat.title}
                </h3>

                {/* Animated divider */}
                <div className="h-px w-10 bg-blue-500/30 mb-5 group-hover:w-full group-hover:bg-blue-500/50 transition-all duration-600 ease-out" />

                {/* Points */}
                <ul className="space-y-3 flex-1">
                  {cat.points.map((point, pi) => (
                    <motion.li
                      key={pi}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: i * 0.12 + pi * 0.08 + 0.3, duration: 0.5 }}
                      className="flex gap-2.5 items-start"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mt-1.5 shrink-0 group-hover:bg-blue-400 transition-colors duration-300" />
                      <p className="text-xs font-medium text-slate-500 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                        {point}
                      </p>
                    </motion.li>
                  ))}
                </ul>

                {/* Bottom glow line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-blue-500 group-hover:w-[70%] transition-all duration-700 ease-in-out shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
              </div>

              {/* Corner bracket accents */}
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-blue-500/0 group-hover:border-blue-500/50 transition-colors duration-500 rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-blue-500/0 group-hover:border-blue-500/50 transition-colors duration-500 rounded-bl-2xl" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}