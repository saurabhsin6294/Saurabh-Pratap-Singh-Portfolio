"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Code2, Briefcase, User, GraduationCap, Mail } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About Me", href: "/about", icon: User },
    { name: "Skills", href: "#skills", icon: Code2 },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Education", href: "#education", icon: GraduationCap },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-navbar py-3 shadow-lg shadow-black/20" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="group flex items-center gap-2">
              <span className="h-9 w-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-500 flex items-center justify-center text-black font-bold text-lg shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                S
              </span>
              <span className="font-sans font-bold text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                Saurabh Pratap Singh
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-cyan-400 hover:bg-white/5 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                    {link.name}
                  </Link>
                );
              })}
              
              {/* Highlight Link for Experience Page */}
              <Link
                href="/experience"
                className="ml-4 px-4 py-2 rounded-lg text-sm font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500 hover:text-black hover:border-transparent transition-all duration-300 shadow-sm shadow-cyan-500/10"
              >
                Experience Details
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-white/5 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-neutral-950/98 backdrop-blur-xl border-b border-white/10 transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-2xl border-t border-white/5">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-colors"
              >
                <Icon className="w-5 h-5 text-gray-400" />
                {link.name}
              </Link>
            );
          })}
          
          <div className="pt-2 border-t border-white/5 mt-2 px-4">
            <Link
              href="/experience"
              onClick={() => setIsOpen(false)}
              className="flex justify-center items-center py-2.5 rounded-lg text-base font-semibold bg-gradient-to-r from-cyan-500 to-indigo-500 text-black shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
            >
              Detailed Experience
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
