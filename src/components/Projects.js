"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { ExternalLink, FolderGit2, Briefcase, GraduationCap, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Professional Experience", "College Project"];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-neutral-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            Projects Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Demonstrated Work & Creations
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-12 flex-wrap">
          {filters.map((filter, i) => (
            <button
              key={i}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-cyan-500 text-black shadow-md shadow-cyan-500/15"
                  : "glass text-gray-400 hover:text-gray-200 border border-white/5"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="group relative glass rounded-2xl border border-white/5 hover:border-cyan-500/20 shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Category Indicator Corner Tag */}
              <div className="absolute top-4 right-4 flex items-center gap-1 text-[10px] font-mono tracking-widest text-gray-500 uppercase">
                {project.category === "Professional Experience" ? (
                  <>
                    <Briefcase className="w-3 h-3 text-cyan-400" />
                    <span>Commercial</span>
                  </>
                ) : (
                  <>
                    <GraduationCap className="w-3 h-3 text-violet-400" />
                    <span>Academic</span>
                  </>
                )}
              </div>

              <div className="p-6 pt-10 space-y-4">
                {/* Project Title */}
                <h3 className="text-xl font-bold text-gray-200 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                {/* Project Description */}
                <p className="text-sm text-gray-400 leading-relaxed min-h-[80px]">
                  {project.description}
                </p>
              </div>

              <div className="px-6 pb-6 space-y-4">
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-md bg-neutral-900 border border-white/5 text-[10px] font-mono text-gray-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer Action Links */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs font-semibold">
                  <span className="text-gray-500 uppercase tracking-wider text-[10px] font-mono">
                    {project.category === "Professional Experience" ? "Production-Grade" : "Local Build"}
                  </span>
                  
                  {project.link && project.link !== "#" ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Visit Platform
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-gray-600 cursor-not-allowed">
                      Private Repository
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Experience Page */}
        <div className="mt-16 text-center">
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 hover:border-cyan-500/30 text-gray-300 hover:text-cyan-400 text-sm font-semibold transition-all duration-300 shadow-md group"
          >
            Read Detailed Professional Work History
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
