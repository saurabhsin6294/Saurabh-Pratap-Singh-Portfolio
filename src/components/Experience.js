"use client";

import { portfolioData } from "@/data/portfolioData";
import { Briefcase, ArrowRight, MapPin, Calendar, Link2 } from "lucide-react";
import Link from "next/link";

export default function Experience() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Professional Experience
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Timeline Layout */}
        <div className="max-w-3xl mx-auto relative border-l border-white/10 pl-6 sm:pl-8 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Bullet Icon */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-neutral-900 border-2 border-cyan-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Briefcase className="w-3 h-3 text-cyan-400" />
              </div>

              {/* Card Container */}
              <div className="glass p-6 rounded-2xl border border-white/5 hover:border-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300">
                {/* Meta details */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-200 group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-gray-400">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end text-xs text-gray-500 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1 sm:mt-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullets Preview (First 2 points) */}
                <ul className="space-y-2 mb-6">
                  {exp.points.slice(0, 2).map((pt, pIdx) => (
                    <li key={pIdx} className="text-sm text-gray-400 flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                  {exp.points.length > 2 && (
                    <li className="text-xs text-cyan-500/80 font-mono pl-3.5">
                      <Link href={`/experience#${exp.id}`} className="hover:text-cyan-300 hover:underline transition-colors">
                        + {exp.points.length - 2} more accomplishments...
                      </Link>
                    </li>
                  )}
                </ul>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.slice(0, 5).map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-md bg-neutral-900 border border-white/5 text-[10px] font-mono text-gray-400"
                    >
                      {t}
                    </span>
                  ))}
                  {exp.tags.length > 5 && (
                    <Link
                      href={`/experience#${exp.id}`}
                      className="px-2.5 py-0.5 rounded-md bg-neutral-900/50 border border-dashed border-white/10 text-[10px] font-mono text-gray-500 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all"
                    >
                      +{exp.tags.length - 5} more
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Details CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-black font-bold shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/25 transition-all duration-300"
          >
            Read Detailed Experience Work History
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
