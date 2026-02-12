"use client";

import { siteConfig } from "@/config/site";

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg shadow-black/5 border border-gray-200/60 pl-2 pr-8 py-2">
        {/* Home Icon Button */}
        <a
          href="#home"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition"
          aria-label="Home"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-900"
          >
            <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </a>

        {/* Linkedin */}
        <a
          href={siteConfig.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 text-sm font-semibold text-gray-900 hover:text-black transition tracking-wide"
        >
          Linkedin
        </a>

        {/* Resume */}
        <a
          href="https://drive.google.com/file/d/14wIUqHXnGSm8T2YpcSW9Zteeu5Wka98b/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 text-sm font-semibold text-gray-900 hover:text-black transition tracking-wide"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
