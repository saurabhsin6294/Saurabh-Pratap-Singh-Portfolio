import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { portfolioData } from "@/data/portfolioData";
import { User, Mail, Phone, MapPin, ArrowLeft, Award, BookOpen, Heart, GraduationCap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About Me | Saurabh Pratap Singh",
  description: "Learn more about Saurabh Pratap Singh, a Full Stack Web Developer specializing in Laravel, React, and PHP.",
};

export default function AboutPage() {
  const { personalInfo, education } = portfolioData;

  return (
    <>
      <Navbar />

      <main className="flex-1 w-full bg-neutral-950 pt-32 pb-20 relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-cyan-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* Grid Layout: Photo & Contact info on left, Bio details on right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Side: Photo Placeholder & Contact card (4 columns) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Photo Frame */}
              <div className="glass p-4 rounded-3xl border border-white/10 overflow-hidden shadow-xl shadow-cyan-500/5 group">
                <div className="relative aspect-[4/5] w-full rounded-2xl bg-neutral-900 border border-white/5 overflow-hidden">
                  <Image
                    src="/SPS.jpg"
                    alt="Saurabh Pratap Singh"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-w-7xl) 33vw, 100vw"
                    priority
                  />
                </div>
              </div>

              {/* Quick Contact Card */}
              <div className="glass p-6 rounded-3xl border border-white/10 space-y-4">
                <h3 className="font-bold text-gray-200 text-lg mb-2">Get in Touch</h3>
                
                <div className="space-y-3 text-sm text-gray-400">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="truncate">{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-violet-400 shrink-0" />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Side: Biography and Experience brief (8 columns) */}
            <div className="lg:col-span-8 space-y-8">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
                  About Me
                </span>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
                  Saurabh Pratap Singh
                </h1>
                <p className="text-lg font-medium text-cyan-400/90 font-mono tracking-wide">
                  Full Stack Web Developer | Laravel · React.js · PHP · Tailwind CSS
                </p>
                <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4" />
              </div>

              {/* Detailed narrative */}
              <div className="space-y-6 text-gray-300 leading-relaxed text-base">
                <p>
                  Hello! I am Saurabh Pratap Singh, a results-oriented Full Stack Web Developer. My passion lies in constructing high-performance, production-grade applications that solve real-world problems. With hands-on expertise in backend architectures built on PHP (Laravel) and reactive frontend interfaces styled using React.js and Tailwind CSS, I bridge the gap between engineering logic and user experience.
                </p>

                <p>
                  Throughout my professional career, I have contributed heavily to B2B SaaS applications under the eSyncora ecosystem. Specifically, I have engineered Vendor Onboarding Flow, Kanban pipeline boards, analytics dashboards, and access-controlled task components. I have also developed e-commerce platforms like FirstShake, integrating advanced Shopify synchronizations, creator tools, and affiliate referral APIs.
                </p>

                <p>
                  Beyond writing clean code, I have structured experience in Quality Assurance (QA). Testing applications for functional bottlenecks, debugging server-side email configurations, resolving case-sensitivity errors in build tools, and coordinating resolutions through Jira, Slack, and Loom videos have all helped me build highly stable, scalable web systems.
                </p>
              </div>

              {/* Education Subgrid */}
              <div className="pt-8 border-t border-white/5 space-y-4">
                <h3 className="font-bold text-gray-200 text-xl flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-violet-400" />
                  Education Profile
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {education.map((edu, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col justify-between">
                      <div>
                        <h4 className="font-bold text-gray-200 text-sm">{edu.degree}</h4>
                        <p className="text-xs text-gray-400 mt-1">{edu.institution}</p>
                      </div>
                      <div className="mt-4 flex justify-between items-center text-[10px] font-mono text-gray-500">
                        <span>{edu.duration}</span>
                        <span className="text-emerald-400">{edu.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Values / Methodology */}
              <div className="pt-8 border-t border-white/5 space-y-4">
                <h3 className="font-bold text-gray-200 text-xl flex items-center gap-2">
                  <Heart className="w-5 h-5 text-rose-400" />
                  Engineering Principles
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                    <span className="text-2xl">💻</span>
                    <h4 className="font-semibold text-gray-200 text-sm mt-2">Clean Coding</h4>
                    <p className="text-xs text-gray-400 mt-1">Structured files, comments, and reusable states.</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                    <span className="text-2xl">🔒</span>
                    <h4 className="font-semibold text-gray-200 text-sm mt-2">Security & Integrity</h4>
                    <p className="text-xs text-gray-400 mt-1">Safe authentication protocols, anti-cheat features, and RBAC.</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                    <span className="text-2xl">🚀</span>
                    <h4 className="font-semibold text-gray-200 text-sm mt-2">Agile Delivery</h4>
                    <p className="text-xs text-gray-400 mt-1">Coordinated sprint tracking, issue logging, and documentation.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
