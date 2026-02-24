"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "10K+", label: "JOBS", sub: "LIVE ENTERPRISE LISTINGS" },
  { value: "15K+", label: "CANDIDATES", sub: "VERIFIED INTERNX PROFILES" },
  { value: "360°", label: "AI PROFILING", sub: "FULL-SPECTRUM ASSESSMENT" },
  { value: "∞", label: "INTEGRATIONS", sub: "API-FIRST ARCHITECTURE" },
];

export default function StatsSection() {
  return (
    <section className="px-4 sm:px-6 py-14 sm:py-20 relative flex justify-center items-center overflow-hidden bg-[#020617]">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-full bg-blue-500/5 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">

          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="
                bg-white/5 
                border border-white/5 
                p-6 sm:p-8 md:p-12
                rounded-2xl sm:rounded-3xl md:rounded-[36px]
                group 
                hover:border-blue-500/30 
                transition-all duration-700 
                relative 
                flex flex-col items-center text-center 
                shadow-xl
              "
            >
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-blue-600/10 blur-3xl group-hover:bg-blue-600/20 transition-all duration-1000" />

              <div className="relative z-10 flex flex-col items-center">

                {/* VALUE */}
                <p className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-6 sm:mb-8 tracking-tight uppercase leading-tight group-hover:scale-105 transition-transform duration-700">
                  {stat.value}
                </p>

                {/* LABEL */}
                <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <span className="w-6 sm:w-8 h-px bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,1)]" />

                  <p className="text-[9px] sm:text-[11px] font-black tracking-[0.25em] sm:tracking-[0.4em] text-blue-500 uppercase">
                    {stat.label}
                  </p>

                  <span className="w-6 sm:w-8 h-px bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,1)]" />
                </div>

                {/* SUBTEXT */}
                <p className="text-slate-500 text-[9px] sm:text-[10px] font-bold leading-relaxed uppercase tracking-[0.15em] sm:tracking-[0.25em] max-w-[180px] break-words">
                  {stat.sub}
                </p>
              </div>

              {/* HOVER BORDER */}
              <div className="absolute inset-0 border border-blue-500/0 group-hover:border-blue-500/20 rounded-2xl sm:rounded-3xl md:rounded-[36px] transition-all duration-700" />

              {/* BOTTOM BAR */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.8)] group-hover:w-full transition-all duration-1000 ease-in-out" />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
