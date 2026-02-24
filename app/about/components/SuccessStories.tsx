"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const stories = [
  {
    title: "Neural Nexus",
    desc: "Neural Nexus, a global logistics leader operating across 40+ countries, partnered with HireX to deploy a fleet of AI Agents that now autonomously manage end-to-end supply chain forecasting. By integrating real-time inventory signals with predictive demand modeling, their teams cut stockout incidents by 63% and reduced warehouse overhead costs by nearly a third — all without adding headcount. HireX agents continuously retrain on live freight and supplier data, adapting to disruptions before they cascade into delays.",
    image: "/about/success stories.png",
    color: "bg-[#060d1f]",
    // Image panel gradient overlay
    imageOverlay: "from-blue-600/30 via-cyan-500/10 to-transparent",
    // Text panel: ambient blob + border accent
    textGlow: "from-blue-500/25 to-cyan-500/10",
    textBorder: "border-blue-500/10",
    // Divider
    divider: "from-blue-500/70 to-transparent",
    // Tag
    tagDot: "bg-blue-400",
    tagText: "text-blue-400",
    tag: "Supply Chain AI",
    // Panel bg tint
    panelBg: "bg-gradient-to-br from-blue-950/40 via-[#060d1f] to-[#060d1f]",
    reverse: false,
  },
  {
    title: "Quantum Leap Finance",
    desc: "Quantum Leap Finance, a fast-scaling fintech serving over 2 million retail banking customers, brought in HireX RAG engineers to transform a decade's worth of siloed legacy data into a fully agentic, autonomous decision layer. Within six months, loan processing times dropped from days to minutes, compliance checks became fully automated, and customer-facing advisors were freed from manual data retrieval. The new architecture now handles 95% of routine queries without human intervention, enabling the team to focus entirely on high-value relationship banking.",
    image: "/about/poly AI.png",
    color: "bg-[#060d1f]",
    imageOverlay: "from-blue-600/30 via-cyan-500/10 to-transparent",
    textGlow: "from-blue-500/25 to-cyan-500/10",
    textBorder: "border-blue-500/10",
    divider: "from-blue-500/70 to-transparent",
    tagDot: "bg-blue-400",
    tagText: "text-blue-400",
    tag: "FinTech Automation",
    panelBg: "bg-gradient-to-br from-blue-950/50 via-[#060d1f] to-[#060d1f]",
    reverse: true,
  },
  {
    title: "Stellar MedTech",
    desc: "Stellar MedTech, a healthcare innovator working with hospital networks across North America and Europe, engaged HireX specialists to architect and deploy a suite of AI diagnostic tools tailored for remote patient monitoring. Clinicians now receive real-time alerts enriched with contextual AI analysis, dramatically reducing response times in critical care scenarios. The platform integrates with existing EHR systems, processes thousands of patient data streams simultaneously, and has contributed to a measurable 41% reduction in preventable readmission rates across pilot hospitals.",
    image: "/about/vonte.png",
    color: "bg-[#060d1f]",
    imageOverlay: "from-blue-600/30 via-cyan-500/10 to-transparent",
    textGlow: "from-blue-500/25 to-cyan-500/10",
    textBorder: "border-blue-500/10",
    divider: "from-blue-500/70 to-transparent",
    tagDot: "bg-blue-400",
    tagText: "text-blue-400",
    tag: "Healthcare AI",
    panelBg: "bg-gradient-to-br from-blue-950/50 via-[#060d1f] to-[#060d1f]",
    reverse: false,
  },
];

function StoryCard({ story, idx }: { story: typeof stories[0]; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      viewport={{ once: true, margin: "-80px" }}
      className={`
        flex flex-col
        lg:flex-row
        ${story.reverse ? "lg:flex-row-reverse" : ""}
        items-stretch
        gap-0
        rounded-3xl
        overflow-hidden
        border ${story.textBorder}
        shadow-2xl
        ${story.color}
      `}
    >
      {/* ── IMAGE PANEL ── */}
      <div className="relative w-full lg:w-1/2 min-h-[280px] sm:min-h-[380px] lg:min-h-[500px] overflow-hidden">
        {/* Gradient overlay matching the theme colour */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${story.imageOverlay} z-10 mix-blend-overlay`}
        />

        {/* Parallax image */}
        <motion.div className="absolute inset-0" style={{ y }}>
          <Image
            src={story.image}
            alt={story.title}
            fill
            sizes="(max-width:1024px) 100vw, 50vw"
            className="object-cover"
            priority={idx === 0}
          />
        </motion.div>

        {/* Bottom fade into card bg — mobile only */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t ${story.color} to-transparent z-20 lg:hidden`}
        />
      </div>

      {/* ── TEXT PANEL ── */}
      <div
        className={`
          relative w-full lg:w-1/2
          flex flex-col justify-center
          ${story.panelBg}
          px-7 sm:px-10 lg:px-12 xl:px-16
          py-10 sm:py-14 lg:py-16
        `}
      >
        {/* Ambient glow blob — top corner */}
        <div
          className={`
            absolute pointer-events-none
            ${story.reverse ? "-top-24 -left-24" : "-top-24 -right-24"}
            w-72 h-72 rounded-full
            bg-gradient-to-br ${story.textGlow}
            blur-3xl opacity-60
          `}
        />

        {/* Secondary glow blob — bottom opposite corner */}
        <div
          className={`
            absolute pointer-events-none
            ${story.reverse ? "-bottom-20 -right-20" : "-bottom-20 -left-20"}
            w-56 h-56 rounded-full
            bg-gradient-to-br ${story.textGlow}
            blur-3xl opacity-30
          `}
        />

        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, x: story.reverse ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 mb-5 sm:mb-6 w-fit relative z-10"
        >
          <span className={`w-2 h-2 rounded-full ${story.tagDot} animate-pulse`} />
          <span className={`${story.tagText} font-semibold uppercase tracking-[0.3em] text-[10px] sm:text-[11px]`}>
            {story.tag}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="
            relative z-10
            font-bold text-white mb-5 sm:mb-6 tracking-tight leading-tight
            text-[clamp(24px,3.5vw,44px)]
          "
        >
          {story.title}
        </motion.h3>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className={`relative z-10 h-px bg-gradient-to-r ${story.divider} mb-5 sm:mb-6 origin-left`}
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          viewport={{ once: true }}
          className="
            relative z-10
            text-gray-400 font-light leading-[1.85]
            text-[clamp(13px,1.5vw,16px)]
            mb-8 sm:mb-10
          "
        >
          {story.desc}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <button
            className={`
              group relative
              inline-flex items-center gap-2 sm:gap-3
              text-white font-semibold
              px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl
              text-[clamp(12px,1.5vw,15px)]
              transition-all duration-300
              hover:-translate-y-0.5
              ${
                idx === 1
                  ? "bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:shadow-xl"
                  : idx === 2
                  ? "bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:shadow-xl"
                  : "bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:shadow-xl"
              }
            `}
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current flex-shrink-0" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 110 16A8 8 0 018 0zm-1.5 5.5v5l4.5-2.5-4.5-2.5z" />
            </svg>
            Watch the video
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function SuccessStories() {
  return (
    <section
      className="
        w-full bg-[#020617]
        px-4 sm:px-8 lg:px-16
        py-14 sm:py-20 lg:py-28
      "
    >
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14 sm:mb-20"
        >
          <p
            className="
              text-blue-500 font-bold uppercase tracking-[0.35em]
              text-[10px] sm:text-[11px] lg:text-[12px] mb-4
            "
          >
            Our Mission in Action
          </p>
          <h2
            className="
              font-bold text-white tracking-tight
              text-[clamp(28px,6vw,56px)]
            "
          >
            Success Stories
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed px-4">
            Real companies. Real outcomes. See how HireX AI specialists are reshaping industries worldwide.
          </p>
        </motion.div>

        {/* STORIES */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-12">
          {stories.map((story, idx) => (
            <StoryCard key={idx} story={story} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}