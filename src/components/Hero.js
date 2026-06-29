"use client";

import { portfolioData } from "@/data/portfolioData";
import { Mail, Phone, MapPin, ArrowRight, Download, Send } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const { personalInfo } = portfolioData;

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Dynamic Ambient Background */}
      <div className="mesh-bg" />

      {/* Decorative Circles */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Typography */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-cyan-500/20 text-xs font-semibold tracking-wider text-cyan-400 uppercase shadow-sm">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
              Available for New Opportunities
            </div>

            {/* Name and Title */}
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
                Hi, I&apos;m <br />
                <span className="text-gradient font-black">{personalInfo.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-gray-200">
                {personalInfo.title}
              </p>
              <p className="text-md sm:text-lg font-medium text-cyan-400/90 tracking-wide font-mono">
                {personalInfo.subTitle}
              </p>
            </div>

            {/* Summary */}
            <p className="text-gray-400 text-base max-w-xl leading-relaxed">
              {personalInfo.summary.split(".").slice(0, 2).join(".")}...
            </p>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-md pt-2 text-sm text-gray-400">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2.5 hover:text-cyan-400 transition-colors py-1 group"
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover:border-cyan-500/20 group-hover:bg-cyan-500/5 transition-all">
                  <Mail className="w-4 h-4 text-cyan-400" />
                </div>
                <span>{personalInfo.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-2.5 hover:text-cyan-400 transition-colors py-1 group"
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover:border-cyan-500/20 group-hover:bg-cyan-500/5 transition-all">
                  <Phone className="w-4 h-4 text-cyan-400" />
                </div>
                <span>{personalInfo.phone}</span>
              </a>
              <div className="flex items-center gap-2.5 py-1 sm:col-span-2 group">
                <div className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover:border-violet-500/20 group-hover:bg-violet-500/5 transition-all">
                  <MapPin className="w-4 h-4 text-violet-400" />
                </div>
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Call To Actions */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
              <a
                href="#projects"
                className="inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-black font-bold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-0.5 transition-all duration-300"
              >
                View My Projects
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-xl glass hover:bg-white/5 font-semibold text-gray-200 border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                Let&apos;s Talk
                <Send className="w-4 h-4 text-cyan-400" />
              </a>
            </div>
          </div>

          {/* Right Section: Interactive Terminal Card */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="w-full max-w-md glass rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-cyan-500/5 code-card animate-glow">
              {/* Terminal Header */}
              <div className="px-4 py-3 bg-neutral-900 border-b border-white/5 flex items-center justify-between">
                <div className="flex space-x-1.5">
                  <div className="w-3 w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <span className="text-xs font-mono text-gray-500">developer.js</span>
                <span className="w-5" />
              </div>
              
              {/* Terminal Body */}
              <div className="p-6 font-mono text-xs sm:text-sm text-gray-300 leading-relaxed overflow-x-auto">
                <p className="text-gray-500">{"//"}</p>
                <p className="text-gray-500">{"// Saurabh Pratap Singh Profile"}</p>
                <p className="text-gray-500">{"//"}</p>
                <p className="mt-2">
                  <span className="text-violet-400">const</span> developer = {"{"}
                </p>
                <p className="pl-4">
                  name: <span className="text-cyan-300">&quot;{personalInfo.name}&quot;</span>,
                </p>
                <p className="pl-4">
                  role: <span className="text-cyan-300">&quot;Full Stack Web Developer&quot;</span>,
                </p>
                <p className="pl-4">
                  coreStack: [
                  <span className="text-amber-400">&quot;Laravel&quot;</span>,{" "}
                  <span className="text-amber-400">&quot;React.js&quot;</span>,{" "}
                  <span className="text-amber-400">&quot;PHP&quot;</span>
                  ],
                </p>
                <p className="pl-4">
                  experience: <span className="text-emerald-400">&quot;B2B SaaS &amp; E-comm&quot;</span>,
                </p>
                <p className="pl-4">
                  location: <span className="text-cyan-300">&quot;India&quot;</span>,
                </p>
                <p className="pl-4 text-emerald-500">
                  status: <span className="text-cyan-300">&quot;Building clean software&quot;</span>
                </p>
                <p className="pl-2">{"};"}</p>
                
                {/* Simulated Console Command */}
                <div className="mt-6 pt-4 border-t border-white/5">
                  <p className="text-gray-500">{">"} developer.getValues()</p>
                  <p className="text-gray-400 mt-1">
                    <span className="text-emerald-400">&quot;✓ High performance web apps&quot;</span>
                  </p>
                  <p className="text-gray-400">
                    <span className="text-emerald-400">&quot;✓ Fully responsive UI&quot;</span>
                  </p>
                  <p className="text-gray-400">
                    <span className="text-emerald-400">&quot;✓ Production-grade architectures&quot;</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
