"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Zap, BarChart3, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Engine() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 w-full relative">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* LEFT SIDE: Content (Spans 4 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 flex flex-col justify-center sticky top-24"
          >
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase italic leading-[0.9]">
                Adaptive <br />
                <span className="text-blue-500 text-glow-blue">Neural</span> <br />
                Scaling
              </h2>

              <p className="text-slate-500 text-lg md:text-xl leading-relaxed border-l-2 border-blue-500/30 pl-6 max-w-md">
                Our agents don&apos;t just ask questions—they analyze the silence between answers. 
                The test adapts its architectural complexity in real-time.
              </p>

              {/* Clickable Button */}
              <Link href="/initialize">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex items-center gap-4 py-5 px-8 rounded-2xl border border-blue-500/50 bg-blue-500/5 text-blue-400 font-black text-xs uppercase tracking-[0.2em] transition-all hover:bg-blue-600 hover:text-white hover:border-blue-600"
                >
                  Initialize Complexity Engine
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Bento Grid (Spans 8 columns) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* MAIN VISUAL: Hero Image Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              /* aspect-video ensures the full image is shown without cutting */
              className="md:col-span-2 relative aspect-[16/9] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-black"
            >
              <Image
                src="/AI_test/engine_logic.png"
                alt="Engine Logic Visual"
                fill
                priority
                /* Use object-contain if you want the full image visible regardless of shape, 
                   or object-cover with a larger aspect ratio for the cinematic look */
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Gradient Overlay for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
            </motion.div>

            {/* SMALL CARD 1: Instant Scaling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-[2.5rem] bg-white/[0.03] border border-white/10 p-10 hover:border-blue-500/40 transition-all group"
            >
              <Zap className="text-blue-500 mb-8 w-10 h-10 group-hover:fill-blue-500/20 transition-all" />
              <h4 className="font-black text-2xl uppercase italic mb-4 tracking-tight">
                Instant Scaling
              </h4>
              <p className="text-slate-500 text-base leading-relaxed">
                Real-time difficulty adjustment triggers based on response patterns and cognitive fatigue levels.
              </p>
            </motion.div>

            {/* SMALL CARD 2: Deep Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="rounded-[2.5rem] bg-white/[0.03] border border-white/10 p-10 hover:border-blue-500/40 transition-all group"
            >
              <BarChart3 className="text-blue-500 mb-8 w-10 h-10 group-hover:scale-110 transition-transform" />
              <h4 className="font-black text-2xl uppercase italic mb-4 tracking-tight">
                Deep Metrics
              </h4>
              <p className="text-slate-500 text-base leading-relaxed">
                Extraction of 40+ behavioral data points per session to generate a unique technical DNA profile.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}