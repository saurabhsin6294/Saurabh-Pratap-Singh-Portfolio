"use client";

import { portfolioData } from "@/data/portfolioData";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 bg-neutral-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Education Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Academic Background
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Education Timeline Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="group relative glass p-6 rounded-2xl border border-white/5 hover:border-violet-500/20 shadow-md hover:shadow-violet-500/5 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card top border glow */}
              <div className="absolute top-0 left-0 w-16 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-tr-full rounded-bl-full group-hover:w-full transition-all duration-300" />
              
              <div className="space-y-4">
                {/* Degree / Certificate Name */}
                <h3 className="font-bold text-gray-200 group-hover:text-violet-400 transition-colors text-lg">
                  {edu.degree}
                </h3>
                
                {/* Institution name */}
                <div className="text-sm font-semibold text-gray-400 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-violet-400" />
                  {edu.institution}
                </div>
              </div>

              {/* Timing & Score footer */}
              <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center text-xs font-mono text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {edu.duration}
                </span>
                <span className="flex items-center gap-1 font-semibold text-emerald-400 bg-emerald-500/5 border border-emerald-500/10 px-2 py-0.5 rounded">
                  <Award className="w-3.5 h-3.5" />
                  {edu.score.replace("Score: ", "")}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
