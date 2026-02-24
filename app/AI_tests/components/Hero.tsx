"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Terminal, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center pt-20 md:pt-24 pb-12 overflow-hidden px-4 sm:px-6 lg:px-8">

      {/* Background Glow */}
      <div className="absolute top-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto w-full">

        {/* TEXT AREA */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-16">

          {/* Compact Badge */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-950/40 backdrop-blur-md mb-4"
          >
            <Sparkles className="w-3 h-3 text-blue-400" />
            <span className="text-blue-400 text-[8px] sm:text-[9px] font-mono tracking-[0.15em] uppercase">
              Autonomous Validation
            </span>
          </motion.div>

          {/* 2-Line Optimized Heading */}
          <motion.h1
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-4 md:mb-6 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent uppercase"
          >
            COMMAND YOUR <span className="text-blue-500 italic">HIREX EMPIRE</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xs sm:text-sm md:text-base lg:text-lg max-w-xl md:max-w-2xl text-slate-400 mb-8 md:mb-10 leading-relaxed"
          >
            Deploy AI agents that simulate real-world environments and validate talent without manual effort.
          </motion.p>

          {/* Compact CTAs */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto px-5 sm:px-7 py-2.5 sm:py-3 bg-blue-600 rounded-lg sm:rounded-xl text-white font-black text-[9px] uppercase tracking-[0.15em] flex items-center justify-center gap-2 transition-all hover:scale-105">
              <Terminal className="w-4 h-4" />
              Initialize
            </button>

            <button className="w-full sm:w-auto px-5 sm:px-7 py-2.5 sm:py-3 border border-white/10 rounded-lg sm:rounded-xl bg-white/5 text-white font-black text-[9px] uppercase tracking-[0.15em] flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
              <ShieldCheck className="w-4 h-4 text-blue-500" />
              View Dossier
            </button>
          </motion.div>
        </div>

        {/* IMAGE BENTO */}
        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* Main Card */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="md:col-span-8 relative rounded-xl md:rounded-[2rem] overflow-hidden border border-white/10 shadow-lg group h-[200px] sm:h-[260px] md:h-[380px]"
          >
            <Image
              src="/AI_test/hero_vision.png"
              alt="Hero Vision"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/30 to-transparent" />
          </motion.div>

          {/* Secondary Card */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="md:col-span-4 relative rounded-xl md:rounded-[2rem] overflow-hidden border border-white/10 bg-blue-900/10 p-5 md:p-6 flex flex-col justify-end h-[180px] sm:h-[220px] md:h-[380px]"
          >
            <div className="absolute inset-0 -z-10">
              <Image
                src="/AI_test/category_grid.png"
                alt="Sub Engine"
                fill
                className="object-cover opacity-20"
              />
            </div>

            <div>
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-3">
                <span className="text-xl font-black italic text-white">A+</span>
              </div>

              <p className="text-xs font-bold uppercase text-slate-300 mb-1">
                Fidelity Score
              </p>
              <p className="text-[8px] text-slate-500 font-mono uppercase">
                Neural Sync Active
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}