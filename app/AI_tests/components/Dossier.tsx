"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Download, ShieldAlert, Cpu } from "lucide-react";

export default function Dossier() {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

      {/* Decorative Background Text */}
      <div className="hidden md:block absolute -top-8 right-0 text-[6rem] lg:text-[10rem] font-black text-white/[0.02] select-none pointer-events-none uppercase italic leading-none">
        Report
      </div>

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6 z-20"
        >
          <div className="space-y-3">

            <div className="flex items-center gap-2 text-blue-500 font-mono text-[8px] sm:text-[9px] tracking-[0.2em] uppercase">
              <ShieldAlert className="w-3 h-3" />
              Intelligence Output
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight uppercase italic">
              Neural DNA <br />
              <span className="text-blue-500">Dossier.</span>
            </h2>

            <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-md">
              We generate a{" "}
              <span className="text-white font-bold">
                12-page intelligence brief
              </span>{" "}
              decoding cognitive architecture and stress patterns.
            </p>
          </div>

          {/* Compact Stats */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <p className="text-lg sm:text-xl font-black italic text-blue-500">
                80+
              </p>
              <p className="text-[8px] uppercase font-mono text-slate-500">
                Logic Points
              </p>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <p className="text-lg sm:text-xl font-black italic text-blue-500">
                Real-Time
              </p>
              <p className="text-[8px] uppercase font-mono text-slate-500">
                Sentiment Scan
              </p>
            </div>
          </div>

          {/* Compact Button */}
          <button className="group w-full sm:w-fit flex justify-center items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 bg-white text-black font-black uppercase text-[9px] tracking-[0.15em] rounded-lg sm:rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-lg">
            <Download className="w-4 h-4" />
            Download Sample
          </button>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-7 relative mt-8 lg:mt-0">

          <div className="relative w-full h-[240px] sm:h-[320px] md:h-[420px]">

            {/* Main Image */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, x: 40 }}
              whileInView={{ scale: 1, opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute right-0 top-0 w-full md:w-[92%] h-full rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-xl group"
            >
              <Image
                src="/AI_test/report_preview.png"
                alt="AI Report Preview"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay" />
            </motion.div>

            {/* Floating Card 1 */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="hidden sm:block absolute top-4 left-2 sm:left-6 p-3 rounded-xl bg-blue-950/90 border border-blue-500/40 backdrop-blur-xl shadow-xl z-30 max-w-[160px]"
            >
              <p className="text-[8px] font-mono text-blue-400 uppercase mb-1">
                Verified
              </p>
              <p className="text-[9px] text-slate-200 leading-tight">
                Biometric identity cross-validated.
              </p>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-3 right-3 p-3 sm:p-4 rounded-xl bg-black/60 border border-white/10 backdrop-blur-xl shadow-xl z-30 flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-md bg-blue-600 flex items-center justify-center">
                <Cpu className="text-white w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-black italic">A-04</p>
                <p className="text-[7px] font-mono text-slate-500 uppercase">
                  Rank
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}