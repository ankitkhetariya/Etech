"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Phone, MapPin, Send, ShieldCheck } from "lucide-react";
import { useRef } from "react";

export default function ContactPage() {
  const containerRef = useRef(null);

  // Parallax Setup for Sleepwell-style scroll depth
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yCard = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-slate-50 pb-20 overflow-hidden relative"
    >
      {/* 1. SLEEPWELL STYLE: FLUID MORPHING BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            borderRadius: ["30%", "50%", "30%"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-[#10B981]/10 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-500/5 blur-[120px]"
        />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 pb-40 md:pt-32 md:pb-56 bg-[#0B1221] rounded-b-[3rem] md:rounded-b-[5rem] overflow-hidden">
        {/* Parallax Stars/Dots Background */}
        <motion.div
          style={{ y: yBg }}
          className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-700 via-transparent to-transparent bg-[length:20px_20px]"
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md"
          >
            <ShieldCheck size={14} />
            {/* Safe Trust Marker */}
            <span>Gujarat's Leading Solar EPC</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-4 leading-tight">
            Engineering <br className="md:hidden" />
            <span className="text-emerald-500">Connections.</span>
          </h1>
        </div>
      </section>

      {/* --- UNIFIED CONTENT CARD WITH PARALLAX & HOVER GLOW --- */}
      <motion.div
        style={{ y: yCard }}
        className="container mx-auto px-4 sm:px-6 -mt-32 md:-mt-48 relative z-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.2 }}
          className="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white overflow-hidden flex flex-col lg:flex-row"
        >
          {/* LEFT SIDE: FLOATING OBJECTS PANEL */}
          <div className="w-full lg:w-2/5 bg-slate-900 p-8 md:p-12 relative overflow-hidden group">
            {/* Interactive Glow that follows cursor concept (simulated with morphing here) */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-500/30 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-400/40 transition-colors duration-700"
            />

            <h3 className="text-2xl font-black text-white mb-2 relative z-10">
              Contact Information
            </h3>
            <p className="text-slate-400 text-sm mb-12 relative z-10">
              Reach out to our industrial engineering team. We typically respond
              within 2 business hours.
            </p>

            <div className="space-y-8 relative z-10">
              {[
                {
                  icon: <Phone size={22} />,
                  detail: "+91 96872 20485",
                  delay: 0,
                },
                {
                  icon: <Mail size={22} />,
                  detail: "info@etechenergy.com",
                  delay: 0.2,
                },
                {
                  icon: <MapPin size={24} className="mt-1" />,
                  detail:
                    "215, Sanskar Heights, Second floor, 150 feet Ring Road, Mavdi, Rajkot, Gujarat-360004",
                  delay: 0.4,
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-5">
                  {/* 2. CONTINUOUS FLOATING ICONS */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: item.delay,
                      ease: "easeInOut",
                    }}
                    className="p-3 bg-white/10 rounded-2xl text-emerald-400 shrink-0 backdrop-blur-md border border-white/5"
                  >
                    {item.icon}
                  </motion.div>
                  <div className="min-w-0 flex-1 pt-2">
                    <p className="font-medium text-white text-sm md:text-base leading-snug break-words">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: GLASSMORPHISM FORM */}
          <div className="w-full lg:w-3/5 p-8 md:p-12 lg:p-16 bg-white/50 relative">
            <form className="space-y-6 md:space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div whileTap={{ scale: 0.98 }} className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-5 py-4 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all font-medium text-sm text-slate-900 shadow-sm"
                  />
                </motion.div>
                <motion.div whileTap={{ scale: 0.98 }} className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    className="w-full px-5 py-4 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all font-medium text-sm text-slate-900 shadow-sm"
                  />
                </motion.div>
              </div>

              <motion.div whileTap={{ scale: 0.99 }} className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                  Service Required
                </label>
                <div className="relative">
                  <select className="w-full px-5 py-4 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all font-medium text-sm text-slate-900 appearance-none cursor-pointer shadow-sm">
                    <option>Industrial Solar EPC</option>
                    <option>Commercial Rooftop Solution</option>
                    <option>Ground Mounted Systems</option>
                    <option>Solar Water Pumps</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-emerald-500">
                    ▼
                  </div>
                </div>
              </motion.div>

              <motion.div whileTap={{ scale: 0.99 }} className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your industrial requirements..."
                  className="w-full px-5 py-4 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all font-medium text-sm text-slate-900 resize-none shadow-sm"
                ></textarea>
              </motion.div>

              {/* 3. MAGNETIC BUTTON EFFECT */}
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold text-sm md:text-base uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-emerald-500 transition-colors shadow-xl shadow-slate-900/20 group"
              >
                Submit Inquiry
                <motion.div className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  <Send size={18} />
                </motion.div>
              </motion.button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
