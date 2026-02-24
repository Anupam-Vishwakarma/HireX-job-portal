"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Share2, ArrowUpRight, Zap, Globe } from "lucide-react";

export default function Enterprise() {
  return (
    <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8">

      <div className="relative rounded-xl md:rounded-[2.5rem] overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm p-5 sm:p-8 md:p-12">

        {/* Background Effects */}
        <div className="hidden md:block absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/10 to-transparent -z-10" />
        <div className="absolute -bottom-20 -left-20 w-56 md:w-80 h-56 md:h-80 bg-blue-500/10 rounded-full blur-[60px] md:blur-[90px] -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-5"
          >
            {/* Badge */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-blue-600 flex items-center justify-center">
                <Globe className="text-white w-3 h-3 sm:w-4 sm:h-4" />
              </div>
              <span className="text-[8px] sm:text-[9px] font-mono font-black uppercase tracking-[0.18em] text-blue-400">
                Global Infrastructure
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tight leading-[1.1]">
              Enterprise <span className="text-blue-500">Calibration.</span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-slate-400 leading-relaxed max-w-lg">
              Sync HireX with{" "}
              <span className="text-white font-bold">
                Greenhouse, Workday, Lever
              </span>{" "}
              and automate validation pipelines for the top 3%.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <button className="w-full sm:w-auto px-5 sm:px-7 py-2.5 sm:py-3 bg-white text-black font-black uppercase text-[9px] tracking-[0.15em] rounded-lg sm:rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2">
                Request Demo
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button className="w-full sm:w-auto px-5 sm:px-7 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-white/10 bg-white/5 font-black uppercase text-[9px] tracking-[0.15em] hover:bg-white/10 transition-all">
                API Docs
              </button>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative h-[220px] sm:h-[280px] md:h-[360px] flex items-center justify-center"
          >

            {/* Background Image */}
            <div className="absolute inset-0 opacity-20 grayscale pointer-events-none">
              <Image
                src="/AI_test/enterprise_sync.png"
                alt="Enterprise Sync"
                fill
                className="object-contain scale-105 md:scale-120"
              />
            </div>

            <div className="relative z-10 w-full h-full">

              {/* ATS Badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-3 left-3 sm:top-6 sm:left-6 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-black/60 border border-white/10 backdrop-blur-xl flex flex-col items-center gap-1"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                  <Share2 className="w-3 h-3" />
                </div>
                <span className="text-[7px] font-mono font-bold uppercase">
                  ATS
                </span>
              </motion.div>

              {/* Top 3% Badge */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 p-3 sm:p-4 rounded-lg sm:rounded-2xl bg-blue-600/10 border border-blue-500/40 backdrop-blur-xl flex flex-col items-center gap-1"
              >
                <Zap className="text-blue-500 w-4 h-4" />
                <div className="text-center">
                  <p className="text-sm sm:text-base font-black italic">
                    3%
                  </p>
                  <p className="text-[7px] font-mono uppercase opacity-60">
                    Filter
                  </p>
                </div>
              </motion.div>

              {/* Lines */}
              <div className="hidden md:flex absolute inset-0 items-center justify-center opacity-25">
                <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent rotate-45" />
                <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent -rotate-45" />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}