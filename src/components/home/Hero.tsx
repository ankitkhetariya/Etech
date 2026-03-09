"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sun, Zap, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-16 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-white">
      {/* --- SOLAR FLUX ANIMATION LAYER --- */}
      <div className="absolute inset-0 pointer-events-none -z-10">
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
            className="absolute h-[1px] w-[200px] bg-gradient-to-r from-transparent via-solar-green to-transparent"
          />
        ))}
      </div>

      {/* Background Decorative Blurs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-100/40 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/40 blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-6 text-center">
        {/* Efficiency Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-bold mb-10 shadow-sm"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <Sun size={18} className="text-solar-green" />
          </motion.div>
          <span>ISO 9001:2015 Certified EPC Solutions</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl lg:text-8xl font-black tracking-tighter text-slate-900 mb-8 max-w-5xl mx-auto leading-[0.95]"
        >
          Engineering the <br />
          <span className="text-solar-green relative inline-block">
            Solar Revolution
            <motion.svg
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
              className="absolute -bottom-2 left-0 w-full h-3"
              viewBox="0 0 400 20"
              fill="none"
            >
              <path
                d="M5 15Q100 5 200 15T395 10"
                stroke="#10B981"
                strokeWidth="4"
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
          className="text-lg md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
        >
          Etech Energy delivers high-performance solar infrastructure for
          industrial leaders and modern homes across Gujarat.
        </motion.p>

        {/* Interactive Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="group relative w-full sm:w-auto px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] active:scale-95">
            <span className="relative z-10 flex items-center gap-2">
              Request Free Audit{" "}
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-solar-green translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>

          <button className="w-full sm:w-auto px-10 py-5 bg-white border-2 border-slate-100 text-slate-900 rounded-2xl font-bold text-lg hover:bg-slate-50 hover:border-solar-green transition-all active:scale-95">
            View Our Projects
          </button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-slate-100 pt-12"
        >
          {[
            { icon: <Zap size={20} />, label: "50MW+ Installed" },
            { icon: <Award size={20} />, label: "Top EPC Vendor" },
            { icon: <Sun size={20} />, label: "25yr Lifecycle" },
            { icon: <Award size={20} />, label: "Govt. Approved" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2 group">
              <div className="p-3 bg-slate-50 rounded-xl text-solar-green group-hover:bg-solar-green group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 text-center">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
