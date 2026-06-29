"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";

export default function Contact() {
  const { personalInfo } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    // Mock Send: Wait 1.5 seconds and trigger success
    setTimeout(() => {
      setStatus({ submitting: false, success: true, error: null });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Dynamic Glow background */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            Contact Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Let&apos;s Start a Conversation
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          {/* Contact Details (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between glass p-8 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl" />
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-200">Contact Information</h3>
                <p className="text-sm text-gray-400 mt-2">
                  Feel free to reach out for project proposals, hiring inquiries, or code collaborations.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 group p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/20 hover:bg-cyan-500/5 transition-all"
                >
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-mono">Email Address</p>
                    <p className="text-sm font-semibold text-gray-300 group-hover:text-cyan-400 transition-colors">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-4 group p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/20 hover:bg-cyan-500/5 transition-all"
                >
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-mono">Phone Number</p>
                    <p className="text-sm font-semibold text-gray-300 group-hover:text-cyan-400 transition-colors">
                      {personalInfo.phone}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 group p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-violet-500/20 hover:bg-violet-500/5 transition-all">
                  <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400 group-hover:bg-violet-500 group-hover:text-black transition-all">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-mono">Location</p>
                    <p className="text-sm font-semibold text-gray-300">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social profiles */}
            <div className="pt-8 border-t border-white/5 mt-8">
              <h4 className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-4">Connect Socially</h4>
              <div className="flex gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/20 hover:text-cyan-400 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/20 hover:text-cyan-400 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Contact Form (7 columns) */}
          <div className="lg:col-span-7 glass p-8 rounded-3xl border border-white/10 relative">
            <h3 className="text-xl font-bold text-gray-200 mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 font-mono">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/5 text-sm text-gray-200 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 font-mono">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/5 text-sm text-gray-200 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 font-mono">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/5 text-sm text-gray-200 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Inquiry / Feedback"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 font-mono">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/5 text-sm text-gray-200 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="Enter details..."
                />
              </div>

              <button
                type="submit"
                disabled={status.submitting}
                className="w-full inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-black font-bold shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/25 hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-55 disabled:cursor-not-allowed transition-all duration-300"
              >
                {status.submitting ? "Sending message..." : "Send Message"}
                <Send className="w-4 h-4" />
              </button>

              {/* Status Alert Panels */}
              {status.success && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span>Message sent successfully! Thank you for reaching out.</span>
                </div>
              )}

              {status.error && (
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{status.error}</span>
                </div>
              )}
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
