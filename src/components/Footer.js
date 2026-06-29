"use client";

import { portfolioData } from "@/data/portfolioData";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import Link from "next/link";

export default function Footer() {
  const { personalInfo } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-neutral-950 border-t border-white/5 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <p className="text-sm text-gray-400 font-semibold">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 font-mono">
            Handcrafted with Next.js, React & Tailwind CSS.
          </p>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex gap-6 text-sm font-semibold text-gray-400">
          <Link href="#about" className="hover:text-cyan-400 transition-colors">
            About
          </Link>
          <Link href="#projects" className="hover:text-cyan-400 transition-colors">
            Projects
          </Link>
          <Link href="/experience" className="hover:text-cyan-400 transition-colors">
            Experience
          </Link>
          <Link href="#contact" className="hover:text-cyan-400 transition-colors">
            Contact
          </Link>
        </div>

        {/* Right Side: Back to Top & Social Profiles */}
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 border border-white/5 hover:border-cyan-500/20 hover:text-cyan-400 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 border border-white/5 hover:border-cyan-500/20 hover:text-cyan-400 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
          
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-white/5 border border-white/5 hover:border-cyan-500/20 hover:text-cyan-400 transition-colors"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
