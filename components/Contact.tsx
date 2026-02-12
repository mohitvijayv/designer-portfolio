"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="px-8 md:px-16 lg:px-24 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-8xl font-bold text-gold mb-12"
        >
          contact.
        </motion.h2>

        {/* Content — Image + Text */}
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full md:w-72 flex-shrink-0 overflow-hidden rounded-sm"
          >
            <Image
              src={siteConfig.contact.image}
              alt="Contact"
              width={300}
              height={400}
              className="w-full h-[300px] object-cover"
            />
          </motion.div>

          {/* Text + Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <p className="text-navy/80 text-base md:text-lg leading-relaxed mb-8">
              {siteConfig.contact.description}
            </p>

            <div className="space-y-2">
              <a
                href={`mailto:${siteConfig.email}`}
                className="block text-navy font-medium hover:text-navy-light transition"
              >
                {siteConfig.email}
              </a>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-navy font-medium hover:text-navy-light transition"
              >
                linkedin.com/in/mahimagupta787
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
