"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-8 md:px-16 lg:px-24 pt-28 pb-16"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-12">
        {/* Left Side — Text */}
        <div className="flex-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl mb-2 text-navy"
          >
            {siteConfig.greeting}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-navy"
            style={{ whiteSpace: "pre-line" }}
          >
            {siteConfig.role}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl mt-4 text-navy"
          >
            {siteConfig.location}
          </motion.p>

          <motion.a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-block mt-8 px-6 py-3 border-2 border-navy text-navy text-sm font-medium hover:bg-navy hover:text-cream transition-colors"
          >
            Resume
          </motion.a>
        </div>

        {/* Right Side — Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex-shrink-0"
        >
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 text-gold text-3xl font-bold select-none">
            ✦✦
          </div>

          {/* Circular photo — cropped to face closeup */}
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-navy/10">
            <Image
              src="/mahima.jpeg"
              alt="Mahima Gupta — Senior Graphic Designer based in Gurgaon, India"
              width={600}
              height={600}
              className="w-full h-full object-cover object-[100%_top] scale-[1.3]"
            />
          </div>

          {/* Decorative slashes */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-navy text-2xl font-bold tracking-widest select-none">
            ////
          </div>
        </motion.div>
      </div>
    </section>
  );
}
