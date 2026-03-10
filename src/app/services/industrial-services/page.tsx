"use client";
import { motion } from "framer-motion";
import {
  Building2,
  Zap,
  CheckCircle2,
  ArrowUpRight,
  Wrench,
  Gauge,
  Shield,
  Cpu,
} from "lucide-react";
import Link from "next/link";

export default function IndustrialServicesPage() {
  const industrialServices = [
    {
      title: "Factory Rooftop Installations",
      desc: "High-capacity solar systems for manufacturing facilities with structural optimization.",
      icon: <Building2 className="w-6 h-6" />,
      features: [
        "100 kWp to 500 kWp capacity",
        "Engineering load analysis",
        "Zero downtime installation",
        "40-60% electricity offset",
      ],
    },
    {
      title: "Warehouse Solar Canopy",
      desc: "Dual-purpose solar canopies providing shade, parking, and clean energy.",
      icon: <Gauge className="w-6 h-6" />,
      features: [
        "Custom structural design",
        "EV charging integration",
        "Weather protection",
        "Scalable modular design",
      ],
    },
    {
      title: "Power Factor Correction",
      desc: "Reactive power management systems reducing electricity bills by 20-30%.",
      icon: <Zap className="w-6 h-6" />,
      features: [
        "Automatic power factor controllers",
        "Harmonic distortion reduction",
        "Real-time monitoring",
        "Energy audit included",
      ],
    },
    {
      title: "Industrial Battery Backup",
      desc: "Lithium battery systems ensuring uninterrupted production during grid outages.",
      icon: <Shield className="w-6 h-6" />,
      features: [
        "50-500 kWh capacity",
        "99.9% uptime SLA",
        "Load distribution management",
        "10-15 year warranty",
      ],
    },
  ];

  const industrialBenefits = [
    {
      title: "Lower Operating Costs",
      stat: "30-40%",
      desc: "Reduction in electricity expenses through optimized energy systems.",
    },
    {
      title: "Production Continuity",
      stat: "99.9%",
      desc: "Uptime guarantee with zero unplanned downtime due to backup power.",
    },
    {
      title: "ESG Compliance",
      stat: "100%",
      desc: "Meet corporate sustainability goals and environmental targets.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050A15] text-slate-200 selection:bg-emerald-500/30 overflow-hidden">
      {/* ===== HERO ===== */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-20 px-4 md:px-8 z-10 overflow-hidden">
        <div className="absolute top-0 right-[-20%] w-[60vw] h-[60vw] bg-emerald-500/15 blur-[150px] rounded-full mix-blend-screen pointer-events-none z-0" />
        <div className="absolute bottom-[-40%] left-0 w-[50vw] h-[50vw] bg-amber-500/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none z-0" />

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] mb-8 backdrop-blur-md"
          >
            <Building2 size={14} /> Industrial Services
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] uppercase mb-8 drop-shadow-2xl"
          >
            Power Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">
              Factories.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed border-l-2 border-emerald-500 pl-6 py-3 bg-white/5 backdrop-blur-md rounded-r-lg"
          >
            Comprehensive industrial energy solutions including solar installations, power factor correction, and battery backup systems. Reduce operational costs while improving production reliability.
          </motion.p>
        </div>
      </section>

      {/* ===== INDUSTRIAL SERVICES ===== */}
      <section className="relative py-24 px-4 md:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-20"
          >
            <p className="text-xs uppercase font-bold text-emerald-400 tracking-[0.3em] mb-4">
              Service Categories
            </p>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight uppercase">
              Industrial Solutions
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industrialServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md hover:border-emerald-500/40 transition-all duration-300 overflow-hidden h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-emerald-500/20 transition-colors duration-300">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-wider">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed mb-6 text-lg">
                    {service.desc}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== KEY BENEFITS SHOWCASE ===== */}
      <section className="relative py-24 px-4 md:px-8 z-10 bg-[#0B1221]/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-20"
          >
            <p className="text-xs uppercase font-bold text-amber-400 tracking-[0.3em] mb-4">
              Business Impact
            </p>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight uppercase">
              Why Industries Choose Etech
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industrialBenefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md text-center hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400 mb-4">
                  {benefit.stat}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 uppercase">
                  {benefit.title}
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="relative py-24 px-4 md:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-20"
          >
            <p className="text-xs uppercase font-bold text-emerald-400 tracking-[0.3em] mb-4">
              Implementation
            </p>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight uppercase">
              Our Process
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Energy Audit",
                desc: "Comprehensive analysis of your facility's energy consumption patterns and opportunities.",
                icon: <Gauge className="w-6 h-6" />,
              },
              {
                step: "2",
                title: "Custom Design",
                desc: "Tailored solution design using advanced simulation and structural analysis tools.",
                icon: <Cpu className="w-6 h-6" />,
              },
              {
                step: "3",
                title: "Installation",
                desc: "Expert installation with zero production downtime using strategic timing.",
                icon: <Wrench className="w-6 h-6" />,
              },
              {
                step: "4",
                title: "Optimization",
                desc: "Performance tuning and staff training for maximum system efficiency.",
                icon: <Shield className="w-6 h-6" />,
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`flex gap-8 items-center ${
                  idx % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-shrink-0 relative">
                  <div className="w-16 h-16 rounded-full bg-emerald-500 border-4 border-[#050A15] flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-emerald-500/50">
                    {item.step}
                  </div>
                </div>

                <div className="flex-1 p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white uppercase">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-slate-400 text-lg leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-24 px-4 md:px-8 z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-amber-500/10 blur-3xl opacity-30" />
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-8 uppercase leading-tight">
              Lower Costs. Boost Production.
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Schedule a free energy audit for your facility. Our experts will identify savings opportunities unique to your operation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-500 text-white rounded-full font-bold text-sm uppercase tracking-wider hover:scale-105 transition-transform duration-300 shadow-lg shadow-emerald-500/40"
              >
                <span>Schedule Audit</span>
                <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-300" />
              </Link>
              <Link
                href="/gallery"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-emerald-500/50 text-emerald-400 rounded-full font-bold text-sm uppercase tracking-wider hover:border-emerald-400 hover:text-emerald-300 transition-all duration-300"
              >
                <span>View Case Studies</span>
                <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
