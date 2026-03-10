"use client";
import { motion } from "framer-motion";
import {
  Hammer,
  Zap,
  CheckCircle2,
  ArrowUpRight,
  BarChart,
  Layers,
  Shield,
  Cpu,
} from "lucide-react";
import Link from "next/link";

export default function ProjectEPCPage() {
  const epcServices = [
    {
      title: "Engineering & Design",
      desc: "Complete project engineering from concept to detailed design specifications.",
      icon: <Layers className="w-6 h-6" />,
      features: [
        "3D CAD modeling & simulation",
        "Structural & electrical analysis",
        "Environmental impact assessment",
        "Regulatory compliance documentation",
      ],
    },
    {
      title: "Procurement Management",
      desc: "Global sourcing of OEM-certified components at competitive rates.",
      icon: <BarChart className="w-6 h-6" />,
      features: [
        "Vendor qualification & audits",
        "Quality assurance testing",
        "Logistics & on-time delivery",
        "Cost optimization strategies",
      ],
    },
    {
      title: "Construction & Installation",
      desc: "Expert on-site execution with zero safety incidents and minimal disruptions.",
      icon: <Hammer className="w-6 h-6" />,
      features: [
        "Experienced construction teams",
        "Advanced safety protocols",
        "24/7 site supervision",
        "Real-time progress tracking",
      ],
    },
    {
      title: "Commissioning & Handover",
      desc: "Rigorous testing and optimization ensuring peak performance from day one.",
      icon: <Shield className="w-6 h-6" />,
      features: [
        "Performance verification testing",
        "Grid synchronization & certification",
        "Staff training & documentation",
        "Warranty & support initiation",
      ],
    },
  ];

  const epcStats = [
    { number: "500+", label: "Projects Commissioned" },
    { number: "75MW+", label: "Total Capacity" },
    { number: "4M", label: "Project Hours" },
    { number: "99.5%", label: "On-Time Delivery" },
  ];

  const timeline = [
    {
      month: "Month 1",
      title: "Planning & Permits",
      desc: "Site assessment, design finalization, regulatory approvals.",
    },
    {
      month: "Month 2-3",
      title: "Procurement Phase",
      desc: "Component sourcing, quality verification, logistics planning.",
    },
    {
      month: "Month 4-6",
      title: "Installation",
      desc: "Civil works, electrical connections, system integration.",
    },
    {
      month: "Month 7",
      title: "Testing & Handover",
      desc: "Performance verification, staff training, warranty activation.",
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
            <Hammer size={14} /> EPC Turnkey Solutions
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] uppercase mb-8 drop-shadow-2xl"
          >
            Complete <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">
              Project Delivery.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed border-l-2 border-emerald-500 pl-6 py-3 bg-white/5 backdrop-blur-md rounded-r-lg"
          >
            Engineering, Procurement, and Construction services covering everything from design to commissioning. Full accountability, transparent timelines, and guaranteed performance.
          </motion.p>
        </div>
      </section>

      {/* ===== EPC SERVICES ===== */}
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
              Service Offerings
            </p>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight uppercase">
              EPC Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {epcServices.map((service, idx) => (
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

      {/* ===== STATS ===== */}
      <section className="relative py-24 px-4 md:px-8 z-10 bg-[#0B1221]/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {epcStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md text-center hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400 mb-2">
                  {stat.number}
                </div>
                <p className="text-slate-400 text-lg uppercase tracking-wider font-bold">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="relative py-24 px-4 md:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-20"
          >
            <p className="text-xs uppercase font-bold text-amber-400 tracking-[0.3em] mb-4">
              Project Timeline
            </p>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight uppercase">
              Typical Project Schedule
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md hover:border-emerald-500/30 transition-all duration-300"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-emerald-500 border-4 border-[#050A15] flex items-center justify-center text-white font-black shadow-lg shadow-emerald-500/50">
                  {idx + 1}
                </div>

                <div className="pt-4">
                  <p className="text-[10px] uppercase font-bold text-emerald-400 tracking-[0.2em] mb-2">
                    {phase.month}
                  </p>
                  <h3 className="text-xl font-bold text-white mb-3 uppercase">
                    {phase.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {phase.desc}
                  </p>
                </div>

                {/* Connector line (except last) */}
                {idx < timeline.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY EPC ===== */}
      <section className="relative py-24 px-4 md:px-8 z-10 bg-gradient-to-b from-[#0B1221]/50 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-20"
          >
            <p className="text-xs uppercase font-bold text-emerald-400 tracking-[0.3em] mb-4">
              Why Choose EPC
            </p>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight uppercase">
              Single Point of Accountability
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Zero Risk Transfer",
                desc: "We assume all project risks. No surprises, no cost overruns.",
              },
              {
                title: "Transparent Timeline",
                desc: "Milestone-based delivery with real-time progress tracking.",
              },
              {
                title: "Performance Guarantee",
                desc: "Contractual guarantees on capacity, efficiency, and LCOE.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md text-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto mb-6">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 uppercase">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  {item.desc}
                </p>
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
              Ready for Turnkey Delivery?
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              From concept to commissioning, we handle everything. Let's discuss your project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-500 text-white rounded-full font-bold text-sm uppercase tracking-wider hover:scale-105 transition-transform duration-300 shadow-lg shadow-emerald-500/40"
              >
                <span>Get Project Quote</span>
                <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-300" />
              </Link>
              <Link
                href="/gallery"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-emerald-500/50 text-emerald-400 rounded-full font-bold text-sm uppercase tracking-wider hover:border-emerald-400 hover:text-emerald-300 transition-all duration-300"
              >
                <span>View Completed Projects</span>
                <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
