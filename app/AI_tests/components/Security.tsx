"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldAlert, Eye, Lock, Scan, Activity } from "lucide-react";

export default function Security() {
  const securityFeatures = [
    "Neural Eye Tracking",
    "Audio Scan",
    "Plagiarism Detection",
    "Device Fingerprint",
  ];

  return (
    <section className="relative py-12 md:py-20 overflow-hidden px-4 sm:px-6 lg:px-8">

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="space-y-4">

            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-red-500/10 border border-red-500/20 text-red-500 font-mono text-[8px] uppercase tracking-[0.15em]">
              <Activity className="w-3 h-3" /> Surveillance Active
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tight leading-[1.1]">
              Neural <span className="text-blue-500">Proctor</span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-slate-400 leading-relaxed border-l border-white/10 pl-4">
              Real-time biometric mapping and environmental auditing ensure a{" "}
              <span className="text-white">zero-compromise</span> validation arena.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-5">
            {securityFeatures.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-2 group"
              >
                <div className="w-6 h-6 rounded-md bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <ShieldAlert className="w-3 h-3" />
                </div>
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wide text-slate-300 group-hover:text-blue-400 transition-colors">
                  {text}
                </span>
              </motion.div>
            ))}
          </div>

          <button className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.18em] text-slate-500 hover:text-white transition-colors pt-2">
            <Lock className="w-4 h-4 text-blue-500" />
            Security Protocol
          </button>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-7 relative h-[220px] sm:h-[300px] md:h-[380px]"
        >
          {/* Monitor */}
          <div className="absolute right-0 top-0 w-full md:w-[95%] h-full rounded-xl md:rounded-[2rem] overflow-hidden border border-white/10 shadow-lg group">
            <Image
              src="/AI_test/security_audit.png"
              alt="AI Proctoring"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-blue-950/20 mix-blend-overlay" />
          </div>

          {/* Floating Eye Card */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden sm:flex absolute top-4 left-4 p-3 rounded-lg bg-black/80 border border-white/10 backdrop-blur-xl shadow-md items-center gap-2"
          >
            <Eye className="w-4 h-4 text-red-500 animate-pulse" />
            <span className="text-[8px] font-mono uppercase text-slate-400">
              Target Locked
            </span>
          </motion.div>

          {/* Identity Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-3 right-3 p-3 rounded-lg bg-blue-600 border border-blue-400/40 shadow-md flex items-center gap-2"
          >
            <Scan className="w-4 h-4 text-white" />
            <span className="text-[9px] font-black text-white">
              99.2%
            </span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}