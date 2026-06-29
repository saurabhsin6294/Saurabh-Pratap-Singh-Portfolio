"use client";

import { portfolioData } from "@/data/portfolioData";
import { User, ShieldAlert, Award, FileText, CheckCircle2 } from "lucide-react";

export default function About() {
  const { personalInfo } = portfolioData;

  const stats = [
    { label: "Hands-on Development", value: "Full Stack" },
    { label: "Production Platforms", value: "3+" },
    { label: "B2B SaaS Projects", value: "2" },
    { label: "QA Testing Cycles", value: "100%" },
  ];

  return (
    <section id="about" className="py-20 bg-neutral-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Professional Profile & Experience
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Bio text (8 columns on lg) */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-2xl font-bold text-gray-200">
              Crafting scalable web platforms with PHP, Laravel & React
            </h3>
            
            <p className="text-gray-400 leading-relaxed text-base">
              {personalInfo.summary}
            </p>
            
            <p className="text-gray-400 leading-relaxed text-base">
              My engineering approach combines a solid understanding of software logic with strict attention to quality. 
              Having worked across the development lifecycle—from backend architecture in PHP and database schema design 
              to building reactive interfaces in React.js and executing QA regression testing—I deliver web products 
              that are robust, secure, and intuitive for end users.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="p-5 glass rounded-xl border border-white/5 flex gap-4 items-start">
                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-200 text-lg">Product-Oriented</h4>
                  <p className="text-sm text-gray-400 mt-1">Experienced in SaaS ecosystems, vendor management flows, and analytics dashboards.</p>
                </div>
              </div>

              <div className="p-5 glass rounded-xl border border-white/5 flex gap-4 items-start">
                <div className="p-3 rounded-lg bg-violet-500/10 text-violet-400">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-200 text-lg">Detail & QA Minded</h4>
                  <p className="text-sm text-gray-400 mt-1">Strong QA testing skills ensuring high production readiness, handling regression and functional tests.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats & Details (4 columns on lg) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass p-6 rounded-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-xl" />
              
              <h4 className="font-bold text-gray-200 text-lg mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-400" />
                Key Stats
              </h4>
              
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/20 transition-all duration-200">
                    <span className="text-2xl font-extrabold text-gradient">{stat.value}</span>
                    <p className="text-xs text-gray-400 mt-1 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages and Meta Details */}
            <div className="glass p-6 rounded-2xl border border-white/10">
              <h4 className="font-bold text-gray-200 text-lg mb-3">Communication Languages</h4>
              <div className="flex gap-2">
                {personalInfo.languages.map((lang, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-lg bg-neutral-900 border border-white/5 text-sm text-gray-300 font-medium"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
