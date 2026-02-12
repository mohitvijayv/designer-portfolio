"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export default function Work() {
  return (
    <section id="work" className="px-6 py-24">
      <h2 className="text-4xl font-bold mb-12 text-center">Selected Work</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {siteConfig.projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative group overflow-hidden"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={500}
              className="w-full h-[350px] object-cover"
            />

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-center">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-300 text-sm mt-2">
                {project.category}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
