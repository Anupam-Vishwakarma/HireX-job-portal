"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MissionVision() {
  const sections = [
    {
      label: "MISSION PROTOCOL",
      title: "Capability-Driven, \nAI-Orchestrated Hiring",
      description:
        "We exist to dismantle the inefficiencies of legacy talent acquisition by deploying intelligent, autonomous systems that assess capability — not credentials.",
      image: "/about/connecting.png",
      reverse: false,
      points: [
        "Zero-bias candidate screening",
        "Real-time skill benchmarking",
        "Human-in-the-loop oversight",
      ],
    },
    {
      label: "VISION PROTOCOL",
      title: "Transparent, \nTalent Ecosystem",
      description:
        "A world where every hiring decision is powered by explainable AI, where candidates are matched on true potential and global talent is democratized.",
      image: "/about/connecting2.png",
      reverse: true,
      points: [
        "360° AI candidate profiling",
        "Explainable hiring decisions",
        "Global talent democratization",
      ],
    },
  ];

  return (
    <div className="w-full bg-[#020617]">

      {sections.map((section, idx) => (
        <section
          key={idx}
          className="
            w-full
            py-16 sm:py-12 lg:py-20
            border-b border-white/5
          "
        >
          <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">

            <div
              className={`
                flex flex-col
                lg:flex-row
                items-center
                gap-12 lg:gap-20
                ${section.reverse ? "lg:flex-row-reverse" : ""}
              `}
            >

              {/* TEXT SIDE */}
              <div className="w-full lg:w-1/2">

                <motion.div
                  initial={{ opacity: 0, x: section.reverse ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >

                  <span className="
                    text-brand-blue
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-[clamp(10px,1.5vw,12px)]
                    mb-6
                    block
                  ">
                    {section.label}
                  </span>

                  <h2 className="
                    font-bold
                    text-white
                    leading-[1.1]
                    mb-6
                    text-[clamp(26px,5vw,52px)]
                  ">
                    {section.title.split("\n")[0]} <br />
                    <span className="text-brand-blue italic font-light">
                      {section.title.split("\n")[1]}
                    </span>
                  </h2>

                  <p className="
                    text-gray-400
                    font-light
                    leading-relaxed
                    mb-8
                    text-[clamp(15px,2.2vw,18px)]
                  ">
                    {section.description}
                  </p>

                  <ul className="space-y-3">
                    {section.points.map((point) => (
                      <li
                        key={point}
                        className="
                          flex items-center gap-3
                          text-[clamp(13px,1.8vw,14px)]
                          font-semibold
                          tracking-wide
                          text-white/70
                        "
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                </motion.div>
              </div>

              {/* IMAGE SIDE */}
              <div className="w-full lg:w-1/2">

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="
                    relative
                    w-full
                    aspect-[4/3]
                    rounded-2xl
                    overflow-hidden
                    border border-white/10
                  "
                >

                  <Image
                    src={section.image}
                    alt={section.label}
                    fill
                    sizes="(max-width:1024px) 100vw, 50vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/40 to-transparent" />

                </motion.div>

              </div>

            </div>

          </div>
        </section>
      ))}

    </div>
  );
}