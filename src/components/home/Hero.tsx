"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sun,
  Zap,
  Award,
  MapPin,
  ExternalLink,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-slate-50">
      {/* --- SOLAR FLUX ANIMATION LAYER --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -100, y: Math.random() * 400 }}
            animate={{
              opacity: [0, 0.2, 0],
              x: [0, 1500],
              transition: {
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                delay: i * 2,
                ease: "linear",
              },
            }}
            className="absolute h-[1px] w-[200px] bg-gradient-to-r from-transparent via-[#10B981] to-transparent"
          />
        ))}
      </div>

      {/* Background Decorative Blurs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#10B981]/20 blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* ================= LEFT SIDE: TEXT & BUTTONS ================= */}
          <div className="text-left">
            {/* Efficiency Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-8 shadow-sm"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sun size={16} className="text-[#10B981]" />
              </motion.div>
              <span>ISO 9001:2015 Certified EPC</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-slate-900 mb-6 leading-[1.05]"
            >
              Engineering the <br className="hidden md:block" />
              <span className="text-[#10B981] relative inline-block mt-2">
                Solar Revolution
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1 }}
                  className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-3 md:h-4"
                  viewBox="0 0 400 20"
                  fill="none"
                >
                  <path
                    d="M5 15Q100 5 200 15T395 10"
                    stroke="#10B981"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-lg text-slate-600 mb-10 max-w-lg leading-relaxed font-medium"
            >
              Etech Energy Infra delivers high-performance solar infrastructure
              for industrial leaders and commercial projects across Gujarat.
            </motion.p>

            {/* Interactive Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <button className="group relative w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm uppercase tracking-widest overflow-hidden transition-all hover:shadow-2xl hover:shadow-emerald-500/30 active:scale-95">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Free Site Audit{" "}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
                <div className="absolute inset-0 bg-[#10B981] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>

              <button className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-slate-200 text-slate-900 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-slate-50 hover:border-[#10B981] transition-all active:scale-95">
                View Projects
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 border-t border-slate-200 pt-8"
            >
              {[
                { icon: <Zap size={18} />, label: "50MW+ Capacity" },
                { icon: <Award size={18} />, label: "Top EPC Vendor" },
                { icon: <Sun size={18} />, label: "25yr Warranty" },
                { icon: <MapPin size={18} />, label: "Gujarat Wide" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-start gap-2 group">
                  <div className="p-2.5 bg-slate-100 rounded-lg text-slate-600 group-hover:bg-[#10B981] group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-500 leading-tight">
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ================= RIGHT SIDE: IMAGE & MAP CARD ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative w-full h-[450px] lg:h-[650px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl group"
          >
            {/* Real Cloud Solar Image */}
            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop"
              alt="Etech Industrial Solar Setup"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Dark Gradient Overlay at the bottom for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80" />

            {/* Floating Map Detail Card (Ahmedabad Office) */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 bg-white/10 backdrop-blur-md border border-white/20 p-5 md:p-6 rounded-3xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="p-3 md:p-4 bg-[#10B981] text-white rounded-2xl shadow-lg shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-black text-sm md:text-lg mb-1">
                      Ahmedabad Headquarters
                    </h3>
                    <p className="text-slate-200 text-xs md:text-sm leading-relaxed max-w-[250px]">
                      16-First floor, Adishwar Gold, Near Galaxy business park,
                      Nikol, Ahmedabad - 382350
                    </p>
                  </div>
                </div>
                {/* Google Maps Link Button */}
                <a
                  href="https://maps.google.com/?q=Adishwar+Gold,+Nikol,+Ahmedabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:flex p-4 bg-white text-slate-900 hover:bg-[#10B981] hover:text-white rounded-2xl transition-colors shrink-0 items-center justify-center"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
