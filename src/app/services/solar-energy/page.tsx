"use client";
import { motion } from "framer-motion";
import {
  Sun,
  Zap,
  CheckCircle2,
  ArrowUpRight,
  TrendingUp,
  Lightbulb,
  Leaf,
  Battery,
} from "lucide-react";
import Link from "next/link";

// 3D Rotating Card Component
interface SolarCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
  features: string[];
  index: number;
}

const SolarCard = ({ title, desc, icon, features, index }: SolarCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md hover:border-emerald-500/40 transition-all duration-300 overflow-hidden h-full"
      style={{ perspective: "1200px" }}
    >
      {/* Gradient bg on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-emerald-500/20 transition-colors duration-300">
          {icon}
        </div>

        <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-wider">
          {title}
        </h3>

        <p className="text-slate-400 leading-relaxed mb-6 text-lg">{desc}</p>

        {features && features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature: string, i: number) => (
              <li key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

export default function SolarEnergyPage() {
  const solarTypes = [
    {
      title: "Ground Mounted Solar",
      desc: "Large-scale photovoltaic farms designed for maximum yield and optimal land utilization.",
      icon: <Sun className="w-6 h-6" />,
      features: [
        "1 kWp to 10+ MWp capacity",
        "Single & dual-axis trackers",
        "Agrivoltaics compatible",
        "Advanced SCADA monitoring",
      ],
    },
    {
      title: "Rooftop Solar Systems",
      desc: "Industrial, commercial, and residential rooftop installations tailored to existing structures.",
      icon: <Lightbulb className="w-6 h-6" />,
      features: [
        "100 kWp to 500 kWp typical",
        "Structural load analysis",
        "Zero modification required",
        "40-70% energy offset",
      ],
    },
    {
      title: "Hybrid Solar Solutions",
      desc: "Combined solar + battery storage systems for 24/7 energy availability.",
      icon: <Battery className="w-6 h-6" />,
      features: [
        "Grid-tied with battery backup",
        "AI energy management",
        "Peak shaving capability",
        "10-15 year battery life",
      ],
    },
    {
      title: "Agricultural Pumping",
      desc: "Solar-powered water pumps for irrigation, eliminating diesel dependency.",
      icon: <Leaf className="w-6 h-6" />,
      features: [
        "0.5 HP to 10 HP systems",
        "Submersible & surface options",
        "Remote monitoring included",
        "90% cost savings vs diesel",
      ],
    },
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "ROI in 5-6 Years",
      desc: "Industry-leading payback periods with optimized system design.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "99.2% Availability",
      desc: "24/7 monitoring and preventive maintenance ensure peak performance.",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Carbon Credits Eligible",
      desc: "Generate additional revenue through verified carbon offset programs.",
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
            <Sun size={14} /> Solar Energy Solutions
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] uppercase mb-8 drop-shadow-2xl"
          >
            Harness The <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">
              Sun's Power.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed border-l-2 border-emerald-500 pl-6 py-3 bg-white/5 backdrop-blur-md rounded-r-lg"
          >
            From utility-scale solar farms generating 10MW+ to residential rooftop systems, we deliver photovoltaic solutions with industry-leading efficiency and 25-year performance warranties.
          </motion.p>
        </div>
      </section>

      {/* ===== SOLAR TYPES ===== */}
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
              Solar Categories
            </p>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight uppercase">
              Our Solar Solutions
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solarTypes.map((type, idx) => (
              <SolarCard
                key={idx}
                title={type.title}
                desc={type.desc}
                icon={type.icon}
                features={type.features}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
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
              Why Solar Energy
            </p>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight uppercase">
              Proven Benefits
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md text-center hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto mb-6">
                  {benefit.icon}
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

      {/* ===== SPECS TABLE ===== */}
      <section className="relative py-24 px-4 md:px-8 z-10 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-16"
          >
            <p className="text-xs uppercase font-bold text-emerald-400 tracking-[0.3em] mb-4">
              Technical Specs
            </p>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase">
              Industry Standards
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10 bg-gradient-to-r from-emerald-500/10 to-transparent">
                    <th className="px-6 py-4 font-bold uppercase text-sm tracking-wider text-emerald-400">
                      Specification
                    </th>
                    <th className="px-6 py-4 font-bold uppercase text-sm tracking-wider text-emerald-400">
                      Standard
                    </th>
                    <th className="px-6 py-4 font-bold uppercase text-sm tracking-wider text-emerald-400">
                      Etech Performance
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      spec: "Panel Efficiency",
                      standard: "18-22%",
                      etech: "22-24% (Premium)",
                    },
                    {
                      spec: "System Lifespan",
                      standard: "25 years",
                      etech: "30+ years (Rated)",
                    },
                    {
                      spec: "Performance Warranty",
                      standard: "80% @ 25yrs",
                      etech: "85% @ 25yrs",
                    },
                    {
                      spec: "Annual Maintenance",
                      standard: "2%",
                      etech: "1.2% (Optimized)",
                    },
                    {
                      spec: "Grid Integration",
                      standard: "Basic",
                      etech: "Smart SCADA + AI",
                    },
                  ].map((row, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-white/5 ${
                        idx % 2 === 0 ? "bg-white/[0.01]" : ""
                      } hover:bg-white/[0.05] transition-colors`}
                    >
                      <td className="px-6 py-4 text-white font-medium text-lg">
                        {row.spec}
                      </td>
                      <td className="px-6 py-4 text-slate-400 text-lg">
                        {row.standard}
                      </td>
                      <td className="px-6 py-4 text-emerald-400 font-bold text-lg">
                        {row.etech}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
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
              Ready to Go Solar?
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Get a custom solar solution designed for your specific needs. Free site assessment & detailed ROI analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-500 text-white rounded-full font-bold text-sm uppercase tracking-wider hover:scale-105 transition-transform duration-300 shadow-lg shadow-emerald-500/40"
              >
                <span>Get Free Assessment</span>
                <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-300" />
              </Link>
              <Link
                href="/gallery"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-emerald-500/50 text-emerald-400 rounded-full font-bold text-sm uppercase tracking-wider hover:border-emerald-400 hover:text-emerald-300 transition-all duration-300"
              >
                <span>See Our Projects</span>
                <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
