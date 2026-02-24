"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const solutionCards = [
  {
    title: "HireX",
    subtitle: "AGENTIC SYSTEMS",
    desc: "End-to-end autonomous systems built for enterprise-scale operations. Military-grade screening with zero bias.",
    image: "/about/solutions1.png",
  },
  {
    title: "HireX Enterprise",
    subtitle: "RAG ENGINEERING",
    desc: "Retrieval-Augmented Generation connecting LLMs to your private data vault for 99.9% accuracy.",
    image: "/about/solution2.png",
  },
];

export default function Service() {
  return (
    <section className="
      w-full
      bg-[#020617]
      px-6 sm:px-10 lg:px-16
      py-16 sm:py-24 lg:py-28
    ">
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto">

        {/* HEADER */}
        <div className="mb-12 lg:mb-16">
          <p className="
            text-blue-500
            font-bold
            uppercase
            tracking-[0.25em]
            text-[clamp(10px,1.8vw,12px)]
            mb-3
          ">
            OUR SOLUTIONS
          </p>

          <h2 className="
            font-bold
            text-white
            tracking-tight
            leading-tight
            text-[clamp(28px,5vw,44px)]
          ">
            Architecting{" "}
            <span className="text-blue-500 italic font-light">
              Independence
            </span>
          </h2>
        </div>

        {/* GRID */}
        <div className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-12 lg:gap-16
        ">
          {solutionCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col"
            >

              {/* IMAGE */}
              <div className="
                relative
                w-full
                aspect-[16/10]
                overflow-hidden
                rounded-2xl
                border border-white/10
                bg-[#0a0f1d]
                mb-6
              ">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/20 to-transparent" />
              </div>

              {/* TEXT */}
              <div className="flex flex-col">

                <span className="
                  text-blue-400
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[clamp(11px,1.6vw,12px)]
                  mb-3
                ">
                  {card.subtitle}
                </span>

                <h3 className="
                  font-bold
                  text-white
                  mb-4
                  flex items-center justify-between
                  text-[clamp(20px,3vw,28px)]
                ">
                  {card.title}
                  <ArrowUpRight className="
                    w-5 h-5
                    text-white/30
                    group-hover:text-blue-500
                    transition-colors duration-300
                  " />
                </h3>

                <p className="
                  text-gray-400
                  font-light
                  leading-relaxed
                  mb-6
                  text-[clamp(15px,2vw,18px)]
                  max-w-prose
                ">
                  {card.desc}
                </p>

                <button className="
                  mt-auto
                  w-fit
                  px-6 py-2.5
                  rounded-lg
                  font-semibold
                  text-[clamp(13px,1.8vw,14px)]
                  text-white
                  bg-white/5
                  border border-white/10
                  hover:bg-white/10
                  transition-all
                ">
                  Learn more
                </button>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}