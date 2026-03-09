"use client";
import { motion } from "framer-motion";
import {
  Shield,
  Zap,
  Wind,
  Sun,
  Building2,
  CheckCircle,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050A15] text-slate-200 selection:bg-emerald-500/30 overflow-hidden">
      {/* ================= 1. PREMIUM HERO SECTION (Asymmetrical) ================= */}
      <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 px-6 md:px-12 z-10">
        {/* Subtle Ambient Glow (No heavy performance cost) */}
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#10B981]/15 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-blue-500/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
          {/* Hero Typography */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-8"
            >
              <Shield size={14} /> ISO 9001:2015 EPC Company
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-[110px] font-black text-white tracking-tighter leading-[0.9] uppercase"
            >
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                Tomorrow.
              </span>
            </motion.h1>
          </div>

          {/* Hero Context & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="w-full lg:w-1/3 pb-4"
          >
            <p className="text-base md:text-xl text-slate-400 font-medium leading-relaxed mb-8 border-l-2 border-emerald-500 pl-6">
              Leading the power sector with cutting-edge EHV, HV, Solar, and
              Wind infrastructure design and execution for over a decade.
            </p>
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-4 px-8 py-4 bg-white text-[#050A15] rounded-full font-black text-sm uppercase tracking-widest overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <span className="relative z-10">Initialize Project</span>
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white relative z-10 group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight size={16} />
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= 2. EDITORIAL STATS BAR ================= */}
      <section className="relative z-20 border-y border-white/5 bg-[#0B1221]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between divide-y md:divide-y-0 md:divide-x divide-white/5">
          {[
            { num: "10+", label: "Years Experience" },
            { num: "70+", label: "Execution Projects" },
            { num: "100+", label: "Electrical Designs" },
            { num: "20+", label: "Architectural Plans" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex-1 w-full py-10 md:py-12 flex flex-col items-center justify-center text-center hover:bg-white/[0.02] transition-colors"
            >
              <h3 className="text-4xl md:text-5xl font-black text-white mb-2">
                {stat.num}
              </h3>
              <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-[0.2em]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= 3. THE ETECH STANDARD (Clean Bento) ================= */}
      <section className="py-24 md:py-40 relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter"
          >
            The Etech <span className="text-emerald-500">Standard.</span>
          </motion.h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
            We don't just execute projects; we engineer long-term reliability
            and unbreakable trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: "Quality Paramount",
              desc: "Committed to exceeding client expectations through routine evaluation and industry recognition.",
              icon: <Shield size={28} />,
            },
            {
              title: "Safety First",
              desc: "Risk management is integrated into our daily operations, enhancing worker cooperation and results.",
              icon: <Zap size={28} />,
            },
            {
              title: "Client Devotion",
              desc: "Delivering on promises earlier than expected. We value customer loyalty and maintain an open ear.",
              icon: <CheckCircle size={28} />,
            },
          ].map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-white/[0.02] border border-white/5 p-10 md:p-12 rounded-[2rem] hover:bg-white/[0.04] hover:border-emerald-500/30 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-500 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">
                {value.title}
              </h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= 4. INTERACTIVE CAPABILITIES LIST ================= */}
      <section
        id="expertise"
        className="py-24 md:py-32 border-t border-white/5 bg-[#0B1221]"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
              Execution <br />{" "}
              <span className="text-emerald-500 border-b-2 border-emerald-500 pb-2">
                Capabilities
              </span>
            </h2>
            <p className="text-slate-400 font-medium max-w-sm text-lg">
              From EHV transmission lines to high-end commercial multiplexes.
            </p>
          </div>

          <div className="flex flex-col border-t border-white/10">
            {[
              { title: "Solar Power Plants", icon: <Sun size={32} /> },
              { title: "Wind Energy Farms", icon: <Wind size={32} /> },
              { title: "EHV Transmission", icon: <Zap size={32} /> },
              { title: "Commercial Infra", icon: <Building2 size={32} /> },
            ].map((domain, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group flex items-center justify-between py-10 md:py-12 border-b border-white/10 cursor-pointer"
              >
                <div className="flex items-center gap-6 md:gap-10">
                  <div className="text-slate-600 group-hover:text-emerald-500 transition-colors duration-300">
                    {domain.icon}
                  </div>
                  <h3 className="text-2xl md:text-5xl font-black text-slate-300 group-hover:text-white transition-colors duration-300 tracking-tighter uppercase">
                    {domain.title}
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-500 group-hover:border-emerald-500 group-hover:text-emerald-500 group-hover:rotate-45 transition-all duration-300">
                  <ArrowUpRight size={24} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 5. MINIMALIST IMPACT QUOTE ================= */}
      <section className="relative py-32 md:py-48 bg-emerald-600 overflow-hidden text-center flex items-center justify-center">
        {/* Engineering Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6 relative z-10"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#050A15] leading-[1.1] mb-8 tracking-tighter uppercase">
            "By 2600, the electricity consumed would make the earth glow{" "}
            <span className="text-white">red-hot.</span>"
          </h2>
          <p className="text-[#050A15] font-black tracking-[0.3em] uppercase text-xs md:text-sm">
            — Albert Einstein
          </p>
        </motion.div>
      </section>
    </main>
  );
}
