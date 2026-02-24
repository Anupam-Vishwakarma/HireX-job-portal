"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FreelanceCTA() {
  return (
    <section className="relative w-full bg-[#020617] overflow-hidden border-y border-white/[0.06]">

      {/* ── Background grid lines ── */}
      <div className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Corner glow blobs ── */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-600/10 blur-[100px] pointer-events-none z-0" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-blue-500/8 blur-[100px] pointer-events-none z-0" />

      {/* ── Scan line ── */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent pointer-events-none z-0"
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* ── LEFT — Text ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 border border-blue-500/20 rounded-full px-4 py-1.5 bg-blue-500/[0.06] mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-blue-400 text-[10px] font-semibold uppercase tracking-[0.3em]">
                Network Open · AI Specialists
              </span>
            </motion.div>

            <h2 className="
              font-bold text-white leading-[1.05] tracking-tight
              text-[clamp(30px,5.5vw,64px)]
              mb-6
            ">
              Are you an{" "}
              <span className="italic font-light text-blue-400">AI expert</span>{" "}
              looking to{" "}
              <br className="hidden xl:block" />
              deploy your skills?
            </h2>

            <p className="text-gray-500 font-light leading-relaxed text-[clamp(14px,1.8vw,17px)] mb-10 max-w-lg mx-auto lg:mx-0">
              Join a global network of elite AI specialists working on real agentic deployments. Get matched with high-impact projects from day one.
            </p>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 0 32px rgba(59,130,246,0.45)" }}
                whileTap={{ scale: 0.97 }}
                className="
                  relative overflow-hidden
                  bg-blue-600 hover:bg-blue-500
                  text-white font-semibold
                  px-8 py-3.5 rounded-xl
                  text-[clamp(13px,1.6vw,15px)]
                  shadow-xl shadow-blue-600/30
                  transition-all duration-300
                  w-full sm:w-auto
                "
              >
                <span className="relative z-10">Join the Network</span>
                {/* Shine sweep */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="
                  text-gray-400 hover:text-white
                  font-medium text-sm
                  underline underline-offset-4 decoration-white/20
                  transition-colors duration-300
                  w-full sm:w-auto text-center
                "
              >
                See how it works →
              </motion.button>
            </div>
          </motion.div>

          {/* ── RIGHT — Image ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            viewport={{ once: true }}
            className="flex-1 w-full max-w-xl lg:max-w-none"
          >
            {/* Futuristic image frame */}
            <div className="relative group">
              {/* Glow behind image */}
              <div className="absolute -inset-1 rounded-3xl bg-blue-500/10 blur-xl group-hover:bg-blue-500/20 transition-all duration-700" />

              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-blue-500/60 rounded-tl-xl z-20" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-blue-500/60 rounded-tr-xl z-20" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-blue-500/60 rounded-bl-xl z-20" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-blue-500/60 rounded-br-xl z-20" />

              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] aspect-[4/3]">
                <Image
                  src="/about/freelance.png"
                  alt="AI freelancer network"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay tint */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#020617]/60 via-transparent to-blue-900/20" />

                {/* Floating stat badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute bottom-5 left-5 flex items-center gap-3 rounded-xl px-4 py-3 z-10"
                  style={{
                    background: "rgba(2,6,23,0.75)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(59,130,246,0.2)",
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <div>
                    <p className="text-white text-xs font-semibold">Match found</p>
                    <p className="text-gray-500 text-[10px]">AI Agent · Remote · Full-time</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}