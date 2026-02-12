"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export default function Work() {
  return (
    <section id="work" className="px-8 md:px-16 lg:px-24 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-8xl font-bold text-gold mb-8"
        >
          work.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-navy/80 text-base md:text-lg leading-relaxed max-w-2xl mb-16"
        >
          A selection of projects I&apos;ve worked on — from branding and
          identity design to packaging and illustration.
        </motion.p>

        {/* Project Cards — 2 Column Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {siteConfig.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-sm mb-3">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Date */}
              <p className="text-navy/50 text-xs mb-1">{project.date}</p>

              {/* Title */}
              <h3 className="text-lg font-bold text-navy mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-navy/70 text-sm leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
