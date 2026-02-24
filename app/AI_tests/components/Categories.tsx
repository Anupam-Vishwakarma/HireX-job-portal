"use client";
import { motion } from "framer-motion";
import { Code, Database, Brain, Palette, ArrowRight } from "lucide-react";

export default function Categories() {
  const cats = [
    {
      id: "01",
      title: "Engineering",
      desc: "Full-stack architectural stress tests.",
      tools: ["React", "Go", "Python"],
      icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
      span: "lg:col-span-7",
      delay: 0.1,
    },
    {
      id: "02",
      title: "Data Science",
      desc: "Algorithm & data integrity.",
      tools: ["MLOps", "SQL", "PyTorch"],
      icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" />,
      span: "lg:col-span-3",
      delay: 0.2,
    },
    {
      id: "03",
      title: "AI Strategy",
      desc: "Generative logic orchestration.",
      tools: ["Prompt Eng", "RAG"],
      icon: <Brain className="w-4 h-4 sm:w-5 sm:h-5" />,
      span: "lg:col-span-4",
      delay: 0.3,
    },
    {
      id: "04",
      title: "Product Design",
      desc: "High-fidelity visual systems.",
      tools: ["UI/UX", "Framer", "Figma"],
      icon: <Palette className="w-4 h-4 sm:w-5 sm:h-5" />,
      span: "lg:col-span-5",
      delay: 0.4,
    },
  ];

  return (
    <section className="py-14 md:py-20 px-4 sm:px-8 lg:px-12 w-full">
      <div className="max-w-[1400px] mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col justify-center mb-8 lg:mb-0"
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase italic tracking-tight leading-[1.05] mb-5 break-words">
              Skill <br />
              <span className="text-blue-500">Armory</span>
            </h2>

            <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-md mb-6 leading-relaxed">
              Deploy specialized modules calibrated for elite technical talent.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-fit px-6 sm:px-8 py-3 rounded-lg border border-white/10 bg-white/5 text-[9px] font-black uppercase tracking-[0.18em] hover:bg-blue-600 transition-all"
            >
              Browse All
            </motion.button>
          </motion.div>

          {/* CARDS */}
          {cats.map((c) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: c.delay }}
              viewport={{ once: true }}
              className={`${c.span} group relative bg-white/[0.03] border border-white/10 rounded-2xl md:rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:border-blue-500/40 overflow-hidden`}
            >
              <div className="relative z-10">

                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {c.icon}
                  </div>
                  <span className="text-[8px] font-mono text-slate-600 uppercase tracking-wide">
                    {c.id}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-black uppercase italic mb-2 tracking-tight break-words">
                  {c.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm md:text-base mb-5 leading-relaxed">
                  {c.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {c.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[8px] font-mono uppercase tracking-wide text-slate-400 whitespace-nowrap"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

              </div>

              <button className="flex items-center gap-2 text-blue-500 text-[9px] font-black uppercase tracking-[0.18em] hover:text-white transition-colors">
                Go
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </button>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}