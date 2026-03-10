"use client";
import { motion } from "framer-motion";
import {
  Award,
  CheckCircle2,
  Zap,
  Target,
  Building2,
  Wind,
  Sun,
  ArrowUpRight,
  MapPin,
} from "lucide-react";
import Link from "next/link";

// ==========================================
// 3D FLOATING ISOMETRIC PANEL COMPONENT (Fully Responsive)
// ==========================================
const FloatingIsometricPanel = () => {
  return (
    // Changed: Removed 'hidden', added responsive max-widths and opacities so it looks great on mobile too
    <div className="relative w-full max-w-[220px] sm:max-w-[280px] md:max-w-[350px] aspect-[3/4] mx-auto flex items-center justify-center pointer-events-none opacity-80 lg:opacity-100" style={{ perspective: "1000px" }}>
      <motion.div
        animate={{
          y: [-10, 10, -10],
          rotateX: [55, 60, 55],
          rotateZ: [-35, -30, -35],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-[80%] h-[80%] bg-slate-900 border-4 md:border-8 border-slate-300/90 rounded-xl shadow-[20px_30px_50px_rgba(16,185,129,0.25)] overflow-hidden"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Dynamic Glare */}
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
          className="absolute inset-0 w-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] z-20"
        />
        
        {/* Detailed Solar Cells */}
        <div className="w-full h-full grid grid-cols-4 gap-1 p-1 md:p-1.5 bg-slate-800">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="bg-[#0a122c] border border-blue-500/30 rounded-[2px] relative flex justify-evenly overflow-hidden shadow-inner">
              <div className="w-[1px] h-full bg-white/30" />
              <div className="w-[1px] h-full bg-white/30" />
              <div className="w-[1px] h-full bg-white/30" />
              {/* Corner cuts */}
              <div className="absolute top-0 left-0 w-1 h-1 bg-slate-800 -translate-x-1/2 -translate-y-1/2 rotate-45" />
              <div className="absolute top-0 right-0 w-1 h-1 bg-slate-800 translate-x-1/2 -translate-y-1/2 rotate-45" />
              <div className="absolute bottom-0 left-0 w-1 h-1 bg-slate-800 -translate-x-1/2 translate-y-1/2 rotate-45" />
              <div className="absolute bottom-0 right-0 w-1 h-1 bg-slate-800 translate-x-1/2 translate-y-1/2 rotate-45" />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default function AboutPage() {
  const stats = [
    { number: "14+", label: "Years of Excellence", desc: "Engineering innovations" },
    { number: "500+", label: "Projects Delivered", desc: "Across India" },
    { number: "75MW+", label: "Total Capacity", desc: "Installed & Operational" },
    { number: "200+", label: "Team Members", desc: "Expert professionals" },
  ];

  const competencies = [
    { title: "Ground Mounted Solar", desc: "Utility-scale and agricultural solar farms with advanced tracking systems.", icon: <Sun className="w-5 h-5 md:w-6 md:h-6" /> },
    { title: "Industrial Rooftop", desc: "High-capacity rooftop installations for manufacturing & warehouses.", icon: <Building2 className="w-5 h-5 md:w-6 md:h-6" /> },
    { title: "EHV/HV Infrastructure", desc: "Transmission & distribution network engineering for power grids.", icon: <Zap className="w-5 h-5 md:w-6 md:h-6" /> },
    { title: "Renewable Integration", desc: "Wind, solar, and hybrid energy system design & deployment.", icon: <Wind className="w-5 h-5 md:w-6 md:h-6" /> },
  ];

  const milestones = [
    { year: "2010", title: "Founded", desc: "Launched with vision to revolutionize India's energy landscape." },
    { year: "2014", title: "First 10MWp", desc: "Achieved first major utility-scale solar installation milestone." },
    { year: "2018", title: "ISO Certified", desc: "Achieved ISO 9001:2015 certification for process excellence." },
    { year: "2024", title: "75MW Portfolio", desc: "Crossed 75MW operational capacity across 500+ projects." },
  ];

  return (
    <main className="min-h-screen bg-[#050A15] text-slate-200 selection:bg-emerald-500/30 overflow-hidden">
      
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center pt-28 pb-16 px-4 md:px-8 lg:px-12 z-10 overflow-hidden">
        <div className="absolute top-0 right-[-20%] w-[60vw] h-[60vw] bg-emerald-500/15 blur-[150px] rounded-full mix-blend-screen pointer-events-none z-0" />
        <div className="absolute bottom-[-40%] left-0 w-[50vw] h-[50vw] bg-amber-500/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none z-0" />

        {/* Changed: flex-col-reverse on mobile so panel is below text, gap adjustments */}
        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-8">
          
          <div className="flex-1 w-full text-center lg:text-left mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[9px] md:text-xs font-bold uppercase tracking-[0.2em] mb-6 md:mb-8 backdrop-blur-md"
            >
              <Award size={14} /> 14 Years of Engineering Excellence
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[1.1] md:leading-[0.95] uppercase mb-6 drop-shadow-2xl"
            >
              Engineering <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">
                India's Energy.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed lg:border-l-2 lg:border-emerald-500 lg:pl-6 py-2 lg:py-3 lg:bg-white/5 lg:backdrop-blur-md rounded-r-lg px-2 lg:px-0"
            >
              From concept to commissioning, Etech Energy delivers world-class solar and electrical infrastructure solutions. 500+ completed projects, 75MW+ operational capacity, and a relentless commitment to sustainable India.
            </motion.p>
          </div>

          {/* 3D Element Container - Now visible on mobile, appropriately sized */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
             <FloatingIsometricPanel />
          </div>

        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 z-10 bg-gradient-to-b from-transparent via-[#0B1221]/60 to-transparent border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative group cursor-default"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-amber-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-6 md:p-8 lg:p-10 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md hover:border-emerald-500/30 transition-all duration-300 text-center sm:text-left">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400 mb-2 md:mb-3">
                    {stat.number}
                  </div>
                  <h3 className="text-white font-bold text-sm md:text-lg uppercase tracking-wider mb-1 md:mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{stat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MISSION STATEMENT ===== */}
      <section className="relative py-20 md:py-32 px-4 md:px-8 z-10 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-center lg:text-left"
            >
              <p className="text-[10px] md:text-xs uppercase font-bold text-emerald-400 tracking-[0.3em] mb-4">
                Our Mission
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 uppercase">
                Enabling Distributed Energy Independence
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                We believe India's energy future is solar-first, decentralized, and technology-enabled. Every project we deliver reduces carbon footprint, creates local jobs, and strengthens energy resilience.
              </p>
              <div className="flex flex-col gap-3 md:gap-4 max-w-sm mx-auto lg:mx-0 text-left">
                {[
                  "Government-Approved EPC Partner",
                  "ISO 9001:2015 Certified Quality",
                  "Transparent, Performance-Based Execution",
                ].map((item, i) => (
                  <div key={i} className="flex items-start md:items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5 md:mt-0" />
                    <span className="text-slate-200 text-sm md:text-base font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-50px" }}
              className="p-8 md:p-10 lg:p-12 rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-amber-500/5 backdrop-blur-md"
            >
              <p className="text-[10px] md:text-xs uppercase font-bold text-amber-400 tracking-[0.3em] mb-4 md:mb-6">
                Our Vision
              </p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-6">
                1GW Clean Energy Capacity by 2030
              </h3>
              <ul className="space-y-3 md:space-y-4 text-slate-300 text-sm md:text-base">
                {[
                  "100+ new projects annually",
                  "10,000+ jobs in renewables sector",
                  "50+ million tons CO₂ avoided",
                  "Pan-India presence with 8 regional offices",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ===== CORE COMPETENCIES ===== */}
      <section className="relative py-20 md:py-32 px-4 md:px-8 z-10 bg-[#0B1221]/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="mb-12 md:mb-20 text-center"
          >
            <p className="text-[10px] md:text-xs uppercase font-bold text-emerald-400 tracking-[0.3em] mb-4">
              What We Do Best
            </p>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight uppercase">
              Core Competencies
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
            {competencies.map((comp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative p-6 md:p-8 lg:p-10 rounded-[1.5rem] md:rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md hover:border-emerald-500/40 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 md:mb-6 group-hover:bg-emerald-500/20 transition-colors duration-300">
                    {comp.icon}
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 md:mb-3 uppercase tracking-wider">
                    {comp.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-xs md:text-sm lg:text-base">
                    {comp.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MILESTONES TIMELINE ===== */}
      <section className="relative py-20 md:py-32 px-4 md:px-8 z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-12 md:mb-20"
          >
            <p className="text-[10px] md:text-xs uppercase font-bold text-amber-400 tracking-[0.3em] mb-4">
              Beyond Numbers
            </p>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight uppercase">
              Journey of Innovation
            </h2>
          </motion.div>

          <div className="space-y-6 md:space-y-8 relative">
            {milestones.map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`flex flex-col md:flex-row gap-4 md:gap-8 md:items-center ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Desktop Timeline Dot */}
                <div className="flex-shrink-0 relative hidden md:flex w-1/2 justify-end">
                   <div className={`flex w-full ${i % 2 === 1 ? 'justify-start' : 'justify-end'}`}>
                      <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-emerald-500 border-4 border-[#050A15] shadow-lg shadow-emerald-500/50 relative z-10" />
                   </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md w-full md:w-1/2">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400 mb-1 md:mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-base sm:text-lg md:text-2xl font-bold text-white mb-2 uppercase">
                    {milestone.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VALUES SECTION ===== */}
      <section className="relative py-20 md:py-32 px-4 md:px-8 z-10 bg-gradient-to-b from-[#0B1221]/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-12 md:mb-16"
          >
            <p className="text-[10px] md:text-xs uppercase font-bold text-emerald-400 tracking-[0.3em] mb-4">
              Our Foundation
            </p>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight uppercase">
              Core Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "Technical Excellence", desc: "ISO certified processes, rigorous quality checks, and continuous innovation." },
              { title: "Transparent Execution", desc: "Real-time project tracking, honest timelines, and results-oriented delivery." },
              { title: "Sustainable Impact", desc: "Every project reduces carbon, creates jobs, and strengthens India's energy security." },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="text-center p-6 bg-white/[0.01] rounded-2xl border border-white/5"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-emerald-500/20 to-amber-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <Target className="w-6 h-6 md:w-8 md:h-8 text-emerald-400" />
                </div>
                <h3 className="text-base sm:text-lg md:text-2xl font-bold text-white mb-2 md:mb-3 uppercase">
                  {value.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative py-20 md:py-24 px-4 md:px-8 z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-amber-500/10 blur-3xl opacity-30" />
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-8 uppercase leading-tight">
              Ready to Transform Your Energy?
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-slate-300 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
              Join 500+ businesses that have partnered with Etech Energy for sustainable, profitable solar solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-6 md:px-8 py-3.5 md:py-4 bg-emerald-500 text-white rounded-full font-bold text-xs md:text-sm uppercase tracking-wider hover:scale-105 transition-transform duration-300 shadow-lg shadow-emerald-500/40"
              >
                <span>Schedule Consultation</span>
                <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-300" />
              </Link>
              <Link
                href="/projects"
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-6 md:px-8 py-3.5 md:py-4 border-2 border-emerald-500/50 text-emerald-400 rounded-full font-bold text-xs md:text-sm uppercase tracking-wider hover:border-emerald-400 hover:text-emerald-300 transition-all duration-300"
              >
                <span>View Our Projects</span>
                <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 z-10 bg-[#0B1221]/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h3 className="text-2xl md:text-4xl font-black text-white mb-6 md:mb-8 uppercase text-center md:text-left">
                Get in Touch
              </h3>
              <div className="space-y-4 md:space-y-6">
                {[
                  {
                    title: "Rajkot Headquarters",
                    details: [
                      "224 & 225, RK World Tower",
                      "150 Feet Ring Road, Sheetal Park",
                      "Rajkot, Gujarat - 360006",
                      "+91 96872 20485 / +91 96872 20486",
                    ],
                  },
                  {
                    title: "Ahmedabad Branch",
                    details: [
                      "306, Arth Business Center",
                      "Opp Torrent Sub Station, SP Ring Road",
                      "Nikol, Ahmedabad - 382350",
                      "+91 92768 61882 / +91 95379 71075",
                    ],
                  },
                ].map((office, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="p-5 md:p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md"
                  >
                    <div className="flex items-center gap-3 mb-2 md:mb-3">
                      <MapPin className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 shrink-0" />
                      <h4 className="text-white font-bold text-sm md:text-lg uppercase">
                        {office.title}
                      </h4>
                    </div>
                    <ul className="space-y-1 md:space-y-2 text-slate-400 text-xs md:text-sm ml-7 md:ml-8">
                      {office.details.map((detail, j) => (
                        <li key={j}>{detail}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-50px" }}
              className="p-6 sm:p-8 md:p-10 rounded-[1.5rem] md:rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-amber-500/5 backdrop-blur-md h-fit text-center lg:text-left mt-4 lg:mt-0"
            >
              <h4 className="text-lg md:text-2xl font-bold text-white mb-3 md:mb-4 uppercase">
                Email Us
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
                Have a question about your solar project? We're here to help.
              </p>
              <a
                href="mailto:info@etechenergy.com"
                className="inline-flex items-center justify-center lg:justify-start gap-2 text-emerald-400 hover:text-emerald-300 font-bold text-sm md:text-lg transition-colors duration-300 break-all"
              >
                <MailIcon className="w-4 h-4 md:w-6 md:h-6 shrink-0" />
                info@etechenergy.com
              </a>
              <p className="text-slate-400 text-[10px] md:text-sm mt-6 md:mt-8">
                Response time: Within 4 business hours
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Icon component for Mail
function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}