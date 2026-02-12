"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function About() {
  return (
    <section id="about" className="px-8 md:px-16 lg:px-24 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-8xl font-bold text-gold mb-12"
        >
          about.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-navy/80 text-base md:text-lg leading-relaxed max-w-2xl mb-20"
        >
          {siteConfig.about.description}
        </motion.p>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto space-y-12">
          {siteConfig.about.timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex gap-4"
            >
              {/* Bullet */}
              <div className="mt-2 flex-shrink-0">
                <div className="w-3 h-3 rounded-full bg-navy" />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-bold text-navy mb-2">
                  {item.period}
                </h3>
                <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
