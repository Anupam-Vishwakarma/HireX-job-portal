"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const resources = [
  {
    title: "10 Real-World Problems AI Can Solve for Your Business",
    image: "/about/job matches.png",
  },
  {
    title: "Offline to Online Business: How to Successfully Lead a Digital Transformation",
    image: "/about/hiring.png",
  },
  {
    title: "How to turn your skills into a profitable side business",
    image: "/about/meeting.png",
  },
];

export default function Resources() {
  return (
    <section className="
      w-full
      bg-[#020617]
      px-6 sm:px-10 lg:px-16
      py-16 sm:py-16 lg:py-16
    ">
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="
            font-bold
            text-white
            tracking-tight
            text-[clamp(28px,6vw,56px)]
          ">
            How-to&apos;s on{" "}
            <span className="text-blue-500">HireX</span>
          </h2>
        </div>

        {/* GRID */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-y-12
          gap-x-8
          lg:gap-x-12
          mb-20
        ">
          {resources.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col group"
            >

              {/* IMAGE */}
              <div className="
                relative
                w-full
                aspect-[16/10]
                overflow-hidden
                rounded-2xl
                bg-white/5
                shadow-xl
              ">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width:1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* TITLE */}
              <div className="mt-8 px-2">
                <h3 className="
                  text-white
                  font-semibold
                  leading-tight
                  text-center
                  transition-colors duration-300
                  group-hover:text-blue-400
                  text-[clamp(16px,2.5vw,22px)]
                ">
                  {item.title}
                </h3>
              </div>

            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              bg-transparent
              text-white
              border-2 border-white/20
              hover:bg-white hover:text-black
              px-8 sm:px-10
              py-3 sm:py-3.5
              rounded-full
              font-semibold
              text-[clamp(13px,2vw,15px)]
              transition-all duration-300
            "
          >
            Discover more guides
          </motion.button>
        </div>

      </div>
    </section>
  );
}