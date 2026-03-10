"use client";
import { motion } from "framer-motion";
import {
  Sun,
  Zap,
  Wind,
  Battery,
  Gauge,
  Shield,
  Wrench,
  Lightbulb,
  Cpu,
  PieChart,
  ArrowUpRight,
  CheckCircle2,
  Layers,
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Ground Mounted Solar",
      icon: <Sun className="w-8 h-8" />,
      shortDesc: "Utility-scale solar farms",
      desc: "Large-scale photovoltaic installations on agricultural and industrial land. Features advanced tracking systems, optimized layouts, and grid integration for maximum energy yield.",
      features: [
        "1kWp to 10MWp capacity",
        "Single & dual-axis trackers",
        "Agrivoltaics compatible",
        "Land lease optimization",
        "Grid-tie integration",
      ],
      image: "https://images.unsplash.com/photo-1559302374-645ab9296dc4?w=800&q=80",
      specs: "25-30 year lifespan | 22-24% panel efficiency | Bi-annual cleaning",
    },
    {
      id: 2,
      title: "Industrial Rooftop Solar",
      icon: <Building2Icon className="w-8 h-8" />,
      shortDesc: "Manufacturing & warehouse solutions",
      desc: "High-capacity rooftop installations designed for factories, warehouses, and commercial facilities. Optimized for existing structures with minimal modifications.",
      features: [
        "100kWp to 500kWp typical",
        "Cantilever racking systems",
        "Load distribution analysis",
        "Structural reinforcement (if needed)",
        "Energy offset: 40-70%",
      ],
      image: "https://images.unsplash.com/photo-1508215885607-7716917eef1d?w=800&q=80",
      specs: "25+ year warranty | 15-20% LCOE savings | T&D loss reduction",
    },
    {
      id: 3,
      title: "Residential Solar Systems",
      icon: <Lightbulb className="w-8 h-8" />,
      shortDesc: "Home solar solutions",
      desc: "Tailored solar systems for homes, ranging from grid-tied to hybrid and off-grid configurations. Includes battery storage and smart monitoring.",
      features: [
        "2-10kWp systems",
        "On-grid & hybrid options",
        "Battery backup (4-10kWh)",
        "Bi-directional metering",
        "Mobile app monitoring",
      ],
      image: "https://images.unsplash.com/photo-1509514185276-541e64505f7e?w=800&q=80",
      specs: "25-year performance warranty | ROI in 5-6 years | 40-80% bill reduction",
    },
    {
      id: 4,
      title: "EHV/HV Infrastructure",
      icon: <Zap className="w-8 h-8" />,
      shortDesc: "High-voltage transmission & distribution",
      desc: "Engineering, procurement, and installation of extra-high voltage (EHV) and high-voltage (HV) electrical infrastructure for power grids and substations.",
      features: [
        "132kV to 765kV lines",
        "Substation design & build",
        "Cable & overhead networks",
        "Grid automation systems",
        "SCADA integration",
      ],
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
      specs: "ISO 9001 compliance | Live-line testing |Zero-downtime installation",
    },
    {
      id: 5,
      title: "Solar Water Pumping",
      icon: <Water className="w-8 h-8" />,
      shortDesc: "Agricultural pump systems",
      desc: "Solar-powered water pumping solutions for agriculture, reducing diesel dependence and operational costs. Perfect for irrigation in remote areas.",
      features: [
        "0.5HP to 10HP capacity",
        "AC & DC pump options",
        "Submersible & surface pumps",
        "Battery backup available",
        "Remote monitoring",
      ],
      image: "https://images.unsplash.com/photo-1574371259107-1a62df32bbad?w=800&q=80",
      specs: "90% cost savings vs. diesel | 25-year lifespan | Automatic operation",
    },
    {
      id: 6,
      title: "Electrical Infrastructure",
      icon: <Gauge className="w-8 h-8" />,
      shortDesc: "Complete electrical systems",
      desc: "End-to-end electrical engineering services including cable management, panel boards, switchyards, and distribution networks for industrial complexes.",
      features: [
        "Design & detailed engineering",
        "Power factor correction",
        "Load balancing systems",
        "Cable tray & conduit design",
        "Earthing & lightning protection",
      ],
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80",
      specs: "IEC 61936 standards | Redundancy-designed | 99.8% uptime SLA",
    },
    {
      id: 7,
      title: "Operations & Maintenance",
      icon: <Wrench className="w-8 h-8" />,
      shortDesc: "Long-term system care",
      desc: "Comprehensive O&M services ensuring optimal performance, maximum uptime, and extended system lifespan. Includes preventive maintenance, repairs, and monitoring.",
      features: [
        "Bi-annual physical audits",
        "Thermal imaging diagnostics",
        "Inverter servicing & replacement",
        "Layout cleaning protocols",
        "24/7 emergency support",
      ],
      image: "https://images.unsplash.com/photo-1581092915550-0174db704908?w=800&q=80",
      specs: "99.2%+ availability | Real-time monitoring | Predictive maintenance",
    },
    {
      id: 8,
      title: "Energy Storage & Batteries",
      icon: <Battery className="w-8 h-8" />,
      shortDesc: "Battery & storage solutions",
      desc: "Advanced lithium-ion and lead-acid battery systems for backup power, peak shaving, and off-grid applications. Smart energy management included.",
      features: [
        "5-100kWh systems",
        "Lithium-ion & lead-acid",
        "AC & DC coupled options",
        "AI-powered load scheduling",
        "Grid services capable",
      ],
      image: "https://images.unsplash.com/photo-1581092163562-40038d37d0a7?w=800&q=80",
      specs: "10-15 year battery life | 95% round-trip efficiency | Remote diagnostics",
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Site Assessment",
      desc: "Comprehensive site survey, soil analysis, shadow mapping, and grid feasibility study.",
      icon: <PieChart className="w-6 h-6" />,
    },
    {
      step: "2",
      title: "Design & Engineering",
      desc: "Custom system design, structural calculations, 3D modeling, and regulatory approvals.",
      icon: <Cpu className="w-6 h-6" />,
    },
    {
      step: "3",
      title: "Procurement",
      desc: "Supply of OEM-certified components, trackers, inverters, and mounting structures.",
      icon: <Layers className="w-6 h-6" />,
    },
    {
      step: "4",
      title: "Installation",
      desc: "Civil works, electrical connections, safety testing, and on-site training.",
      icon: <Wrench className="w-6 h-6" />,
    },
    {
      step: "5",
      title: "Commissioning",
      desc: "Performance testing, grid synchronization, and handover documentation.",
      icon: <CheckCircle2 className="w-6 h-6" />,
    },
    {
      step: "6",
      title: "O&M Support",
      desc: "Preventive maintenance, 24/7 monitoring, and performance optimization.",
      icon: <Shield className="w-6 h-6" />,
    },
  ];

  const whyChoose = [
    {
      title: "Government-Approved Partner",
      desc: "Recognized by MNRE, GEDA, and all state regulatory bodies.",
    },
    {
      title: "ISO 9001:2015 Certified",
      desc: "Standardized processes, quality audits, and continuous improvement.",
    },
    {
      title: "500+ Projects Delivered",
      desc: "Proven track record across residential, commercial, and utility sectors.",
    },
    {
      title: "75MW+ Operational Capacity",
      desc: "Currently managing and maintaining portfolio exceeding 75MW.",
    },
    {
      title: "Expert Team",
      desc: "200+ engineers (mechanical, electrical, structural, software).",
    },
    {
      title: "Transparent Pricing",
      desc: "No hidden costs, itemized quotes, and flexible payment options.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050A15] text-slate-200 selection:bg-emerald-500/30 overflow-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-20 px-4 md:px-8 z-10 overflow-hidden">
        {/* Ambient Lights */}
        <div className="absolute top-0 right-[-20%] w-[60vw] h-[60vw] bg-emerald-500/15 blur-[150px] rounded-full mix-blend-screen pointer-events-none z-0" />
        <div className="absolute bottom-[-40%] left-0 w-[50vw] h-[50vw] bg-amber-500/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] mb-8 backdrop-blur-md"
          >
            <Zap size={14} /> Complete Energy Solutions
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-6xl sm:text-7xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] uppercase mb-8 drop-shadow-2xl"
          >
            Solar & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">
              Electrical Infrastructure.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed border-l-2 border-emerald-500 pl-6 py-3 bg-white/5 backdrop-blur-md rounded-r-lg"
          >
            From utility-scale solar farms to residential rooftop systems, EHV transmission lines to smart storage solutions. We deliver end-to-end engineering excellence.
          </motion.p>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="relative py-32 px-4 md:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <p className="text-xs uppercase font-bold text-emerald-400 tracking-[0.3em] mb-4">
              Our Expertise
            </p>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight uppercase">
              Complete Solution Portfolio
            </h2>
          </motion.div>

          <div className="space-y-20">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative rounded-3xl overflow-hidden border border-white/10 h-96 md:h-[450px] group"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050A15]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-sm text-emerald-300 font-bold uppercase tracking-[0.2em] mb-2">
                      Specification
                    </div>
                    <p className="text-slate-200 text-sm leading-relaxed">
                      {service.specs}
                    </p>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                    {service.icon}
                  </div>

                  <h3 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 text-lg leading-relaxed mb-8 border-l-2 border-amber-500/50 pl-6">
                    {service.desc}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-white font-bold uppercase text-sm tracking-[0.2em] mb-4">
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3 text-slate-300"
                        >
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                          <span className="font-medium">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-emerald-500/50 text-emerald-400 font-bold text-sm uppercase tracking-wider hover:border-emerald-400 hover:text-emerald-300 transition-all duration-300"
                  >
                    <span>Learn More</span>
                    <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-300" />
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS SECTION ===== */}
      <section className="relative py-32 px-4 md:px-8 z-10 bg-[#0B1221]/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <p className="text-xs uppercase font-bold text-amber-400 tracking-[0.3em] mb-4">
              How We Work
            </p>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight uppercase">
              6-Step Delivery Process
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((ps, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-amber-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md hover:border-emerald-500/30 transition-all duration-300 h-full">
                  <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-amber-500 flex items-center justify-center text-white font-black text-2xl shadow-lg">
                    {ps.step}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-wider mt-4">
                    {ps.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-6">{ps.desc}</p>
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    {ps.icon}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE ETECH ===== */}
      <section className="relative py-32 px-4 md:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-xs uppercase font-bold text-emerald-400 tracking-[0.3em] mb-4">
              Your Advantage
            </p>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight uppercase">
              Why Choose Etech?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChoose.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md hover:border-emerald-500/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-amber-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 uppercase">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-lg">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CERTIFICATIONS ===== */}
      <section className="relative py-24 px-4 md:px-8 z-10 bg-gradient-to-b from-[#0B1221]/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xs uppercase font-bold text-amber-400 tracking-[0.3em] mb-8">
              Industry Recognition
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-16 uppercase">
              Certifications & Approvals
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "ISO 9001:2015", icon: "🏆" },
                { name: "MNRE Approved", icon: "✓" },
                { name: "GEDA Partner", icon: "⚡" },
                { name: "2+ Decades", icon: "📅" },
              ].map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md"
                >
                  <div className="text-3xl mb-2">{cert.icon}</div>
                  <p className="text-white font-bold text-sm uppercase tracking-wider">
                    {cert.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative py-32 px-4 md:px-8 z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-amber-500/10 blur-3xl opacity-30" />
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 uppercase leading-tight">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
              Get a customized quote in 48 hours. Our experts will assess your site and design the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-500 text-white rounded-full font-bold text-sm uppercase tracking-wider hover:scale-105 transition-transform duration-300 shadow-lg shadow-emerald-500/40"
              >
                <span>Schedule Free Consultation</span>
                <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-300" />
              </Link>
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-emerald-500/50 text-emerald-400 rounded-full font-bold text-sm uppercase tracking-wider hover:border-emerald-400 hover:text-emerald-300 transition-all duration-300"
              >
                <span>View Case Studies</span>
                <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== FAQ SECTION (Optional) ===== */}
      <section className="relative py-32 px-4 md:px-8 z-10 bg-[#0B1221]/50 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs uppercase font-bold text-emerald-400 tracking-[0.3em] mb-4">
              Questions Answered
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white upppercase">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "What's the typical installation timeline?",
                a: "Most projects take 2-4 weeks from survey to commissioning. Large utility-scale projects may take 3-6 months depending on site conditions and grid connections.",
              },
              {
                q: "Do you provide financing options?",
                a: "Yes! We work with NBFC partners for flexible EMI options, subsidy-linked financing, and performance guarantee bonds.",
              },
              {
                q: "What kind of warranty do systems come with?",
                a: "Our systems include 25-year performance warranties on panels, 10-12 years on inverters, and comprehensive O&M coverage for guaranteed availability.",
              },
              {
                q: "Can I monitor my system remotely?",
                a: "Absolutely. All systems include real-time cloud-based monitoring via mobile app + automatic alerts for any performance issues.",
              },
            ].map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-md group cursor-pointer hover:border-emerald-500/30 transition-all duration-300"
              >
                <summary className="flex items-center justify-between font-bold text-white text-lg uppercase tracking-wider">
                  {faq.q}
                  <ArrowUpRight size={20} className="group-open:rotate-45 transition-transform duration-300" />
                </summary>
                <p className="mt-4 text-slate-400 leading-relaxed text-lg">
                  {faq.a}
                </p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// Icon Components
function Building2Icon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"
      />
      <polyline points="17 21 17 13 7 13 7 21" />
      <polyline points="7 5 7 13 17 13 17 5" />
    </svg>
  );
}

function Water({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 3v9m-6 0h12m0 0l-4.5 4.5M12 12l4.5 4.5"
      />
    </svg>
  );
}
