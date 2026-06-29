"use client";

import { portfolioData } from "@/data/portfolioData";
import { Code2, Server, Database, Hammer, GitFork, ShieldCheck } from "lucide-react";

export default function Skills() {
  const { skills } = portfolioData;

  const categories = [
    {
      title: "Languages",
      items: skills.languages,
      icon: Code2,
      color: "from-cyan-500 to-blue-500",
      accent: "text-cyan-400"
    },
    {
      title: "Frameworks & CSS",
      items: skills.frameworks,
      icon: Server,
      color: "from-violet-500 to-fuchsia-500",
      accent: "text-violet-400"
    },
    {
      title: "Databases",
      items: skills.databases,
      icon: Database,
      color: "from-indigo-500 to-purple-500",
      accent: "text-indigo-400"
    },
    {
      title: "Tools & Agile Platforms",
      items: skills.tools,
      icon: Hammer,
      color: "from-emerald-500 to-teal-500",
      accent: "text-emerald-400"
    },
    {
      title: "APIs & Email Integrations",
      items: skills.apis,
      icon: GitFork,
      color: "from-amber-500 to-orange-500",
      accent: "text-amber-400"
    },
    {
      title: "Testing & QA Methodologies",
      items: skills.testing,
      icon: ShieldCheck,
      color: "from-rose-500 to-pink-500",
      accent: "text-rose-400"
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
            <Code2 className="w-3.5 h-3.5" />
            Skills Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            My Technical Arsenal
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={idx}
                className="group relative glass p-6 rounded-2xl border border-white/5 hover:border-white/10 hover:shadow-xl hover:shadow-black/20 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Accent Corner Glow */}
                <div className={`absolute top-0 left-0 w-24 h-1 bg-gradient-to-r ${category.color} rounded-tr-full rounded-bl-full opacity-60 group-hover:w-full transition-all duration-500`} />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2.5 rounded-xl bg-white/5 border border-white/5 group-hover:bg-neutral-900 group-hover:border-white/10 transition-colors ${category.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-200 group-hover:text-white transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Badges Grid */}
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-white/5 text-xs font-medium text-gray-300 group-hover:text-cyan-200 group-hover:border-cyan-500/10 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
