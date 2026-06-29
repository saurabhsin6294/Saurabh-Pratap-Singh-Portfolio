import { portfolioData } from "@/data/portfolioData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, Calendar, MapPin, ArrowLeft, ExternalLink, ShieldCheck, ChevronRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Professional Experience | Saurabh Pratap Singh",
  description: "Detailed professional experience and work history of Saurabh Pratap Singh, Full Stack Web Developer.",
};

export default function ExperiencePage() {
  const { experiences } = portfolioData;

  return (
    <>
      <Navbar />

      <main className="flex-1 w-full bg-neutral-950 pt-32 pb-20 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-cyan-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* Page Heading */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Detailed <span className="text-gradient">Work History</span>
            </h1>
            <p className="text-gray-400 text-base max-w-2xl leading-relaxed">
              An in-depth review of my professional career, focusing on full-stack development, SaaS portal structures, third-party integrations, and quality assurance processes.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-6" />
          </div>

          {/* Detailed Experience List */}
          <div className="space-y-8">
            {experiences.map((exp, idx) => {
              const isQA = exp.role.toLowerCase().includes("qa");
              return (
                <div
                  key={idx}
                  id={exp.id}
                  className="glass p-6 sm:p-8 rounded-3xl border border-white/5 hover:border-cyan-500/20 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Decorative glowing lines */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${isQA ? "from-violet-500 to-fuchsia-500" : "from-cyan-500 to-blue-500"}`} />

                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-900 border border-white/5 text-xs font-mono text-cyan-400 mb-2">
                        {isQA ? (
                          <ShieldCheck className="w-3.5 h-3.5 text-violet-400" />
                        ) : (
                          <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                        )}
                        <span>{isQA ? "Quality Assurance" : "Software Engineering"}</span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-100">
                        {exp.role}
                      </h2>
                      <p className="text-sm font-semibold text-gray-400 mt-1 flex items-center gap-2">
                        {exp.company}
                        {exp.link && exp.link !== "#" && (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex text-cyan-400 hover:text-cyan-300"
                            title="Visit website"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs text-gray-400 font-mono">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-gray-500" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1.5 mt-1.5">
                        <MapPin className="w-3.5 h-3.5 text-gray-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Accomplishment Bullets */}
                  <div className="space-y-3 mb-6">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-gray-500">Key Responsibilities & Achievements</h3>
                    <ul className="space-y-3">
                      {exp.points.map((pt, pIdx) => (
                        <li key={pIdx} className="text-sm text-gray-300 flex items-start gap-2.5 leading-relaxed">
                          <ChevronRight className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Used */}
                  <div className="pt-4 border-t border-white/5">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-3">Technologies & Tooling</h3>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-lg bg-neutral-900 border border-white/5 text-xs font-mono text-gray-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
