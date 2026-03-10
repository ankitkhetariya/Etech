"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Shield,
  Zap,
  Wind,
  Sun,
  Building2,
  CheckCircle,
  ArrowUpRight,
  Award,
  Activity,
} from "lucide-react";
import Link from "next/link";

// ==========================================
// 3D SOLAR PANEL COMPONENT (REALISTIC)
// ==========================================
const RealisticSolarPanel = ({ delay = 0, yOffset = 0, zRotation = -20 }) => {
  const { scrollYProgress } = useScroll();

  // Scroll Parallax Physics
  const rotateX = useTransform(scrollYProgress, [0, 0.3], [60, 30]);
  const rotateZ = useTransform(
    scrollYProgress,
    [0, 0.3],
    [zRotation, zRotation + 10],
  );
  const translateY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [yOffset, yOffset - 100],
  );
  const glareX = useTransform(scrollYProgress, [0, 0.3], ["-100%", "200%"]);

  return (
    <motion.div
      style={{ rotateX, rotateZ, y: translateY, transformStyle: "preserve-3d" }}
      transition={{ delay }}
      className="relative w-[280px] md:w-[320px] lg:w-[400px] h-[400px] md:h-[460px] lg:h-[550px] shrink-0 shadow-[20px_40px_60px_rgba(0,0,0,0.8)] rounded-md border-[6px] md:border-[8px] border-slate-300/90 bg-slate-900"
    >
      {/* Aluminum Frame Edge Highlights */}
      <div className="absolute inset-0 border border-white/40 rounded-sm pointer-events-none z-20" />

      {/* Moving Glass Glare (Shine Effect) */}
      <motion.div
        style={{ left: glareX }}
        className="absolute top-0 bottom-0 w-[150%] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] pointer-events-none z-30"
      />

      {/* Solar Cells Grid (Monocrystalline Look) */}
      <div className="w-full h-full grid grid-cols-6 gap-1 p-1 bg-slate-800/80">
        {[...Array(42)].map((_, i) => (
          <div
            key={i}
            className="relative bg-[#0a122c] border border-blue-900/40 rounded-[2px] overflow-hidden flex justify-evenly shadow-inner"
          >
            {/* Silver Busbars (The lines on solar panels) */}
            <div className="w-[1px] h-full bg-slate-300/40" />
            <div className="w-[1px] h-full bg-slate-300/40" />
            <div className="w-[1px] h-full bg-slate-300/40" />
            {/* Cell Corner cuts (classic mono-crystalline look) */}
            <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-slate-800/80 -translate-x-1/2 -translate-y-1/2 rotate-45" />
            <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-slate-800/80 translate-x-1/2 -translate-y-1/2 rotate-45" />
            <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-slate-800/80 -translate-x-1/2 translate-y-1/2 rotate-45" />
            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-slate-800/80 translate-x-1/2 translate-y-1/2 rotate-45" />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default function HomePage() {
  const clients = [
    "TATA Power Solar",
    "L&T",
    "Torrent Power",
    "PGVCL",
    "MNRE",
    "GEDA",
    "GSECL",
    "Juniper Green",
    "Maxxis Tires",
  ];

  return (
    <main className="min-h-screen bg-[#050A15] text-slate-200 selection:bg-emerald-500/30 overflow-hidden">
      {/* ================= 1. SOLAR HERO SECTION (3D INTERACTIVE) ================= */}
      <section className="relative min-h-[100svh] flex flex-col justify-center pt-28 pb-16 px-4 md:px-8 lg:px-12 z-10 overflow-hidden">
        {/* Ambient Lights */}
        <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-amber-500/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-emerald-500/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none z-0" />

        {/* --- 3D PANELS & WIRES CONTAINER --- */}
        <div
          className="absolute top-1/2 -translate-y-1/2 right-[-30%] md:right-[-10%] lg:right-[5%] w-full max-w-[800px] h-[600px] lg:h-[800px] pointer-events-none z-0 flex items-center justify-center opacity-30 md:opacity-60 lg:opacity-100"
          style={{ perspective: "1200px" }}
        >
          {/* SVG Electric Wires (Connecting from panels downwards) */}
          <svg
            className="absolute inset-0 w-full h-full z-0"
            style={{ transform: "translateZ(-50px)" }}
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              d="M 300 400 Q 300 600 100 800"
              fill="transparent"
              stroke="#10B981"
              strokeWidth="6"
              strokeLinecap="round"
              className="drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
              d="M 450 450 Q 500 700 300 900"
              fill="transparent"
              stroke="#F59E0B"
              strokeWidth="8"
              strokeLinecap="round"
              className="drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }}
              d="M 350 420 Q 400 650 200 850"
              fill="transparent"
              stroke="#1e293b"
              strokeWidth="12"
              strokeLinecap="round"
            />
          </svg>

          {/* Panel 1 (Back/Left) */}
          <div className="absolute top-[10%] left-[10%]">
            <RealisticSolarPanel delay={0.2} yOffset={-40} zRotation={-15} />
          </div>

          {/* Panel 2 (Front/Right) */}
          <div className="absolute top-[25%] left-[30%] md:left-[45%]">
            <RealisticSolarPanel delay={0} yOffset={20} zRotation={-25} />
          </div>
        </div>

        {/* Hero Content (Text overlay) */}
        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 mt-10 md:mt-0">
          <div className="flex-1 w-full lg:max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[9px] md:text-xs font-bold uppercase tracking-[0.2em] mb-6 md:mb-8 backdrop-blur-md"
            >
              <Award size={14} /> Govt. Approved Solar EPC
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-8xl lg:text-[100px] font-black text-white tracking-tighter leading-[0.95] md:leading-[0.9] uppercase drop-shadow-2xl"
            >
              Excellence <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-500">
                Through Innovation.
              </span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full lg:w-1/3 pb-2 md:pb-4"
          >
            <p className="text-sm md:text-base lg:text-lg text-slate-200 font-medium leading-relaxed mb-6 md:mb-8 border-l-2 border-emerald-500 pl-4 md:pl-6 bg-[#050A15]/60 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none py-3 lg:py-0 rounded-r-lg lg:rounded-none shadow-xl lg:shadow-none">
              Always ahead to deliver excellence. Engaged in high-end Solar,
              EHV, HV, and Wind execution to fulfill valuable customer
              expectations.
            </p>
            <Link
              href="/contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-4 px-6 md:px-8 py-4 bg-emerald-500 text-white rounded-full font-black text-xs md:text-sm uppercase tracking-widest overflow-hidden hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(16,185,129,0.4)]"
            >
              <span>Get Free Quote</span>
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white text-emerald-600 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight size={16} />
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= 2. RESPONSIVE MARQUEE (Clients) ================= */}
      <section className="py-6 md:py-8 border-y border-white/5 bg-[#0B1221]/80 overflow-hidden flex flex-col items-center">
        <p className="text-[9px] md:text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] mb-4 md:mb-6 text-center px-4">
          Trusted by Leading Brands & Govt. Bodies
        </p>
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)] md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-8 md:gap-24 whitespace-nowrap px-4 md:px-8"
          >
            {[...clients, ...clients].map((client, i) => (
              <div
                key={i}
                className="text-xl md:text-3xl lg:text-4xl font-black text-white/10 uppercase tracking-tighter hover:text-emerald-500/80 transition-colors duration-300"
              >
                {client}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= 3. STATS (Responsive Grid) ================= */}
      <section className="relative z-20 border-b border-white/5 bg-[#050A15]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 flex flex-col sm:flex-row flex-wrap items-center justify-between divide-y sm:divide-y-0 sm:divide-x divide-white/5">
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
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: i * 0.1 }}
              className="w-full sm:w-1/2 lg:w-1/4 py-8 md:py-12 lg:py-16 flex flex-col items-center justify-center text-center hover:bg-white/[0.02] transition-colors"
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-1 md:mb-2">
                {stat.num}
              </h3>
              <p className="text-[9px] md:text-[10px] font-bold text-emerald-500 uppercase tracking-[0.1em] md:tracking-[0.2em]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= 4. CORE VALUES (Mobile-Stack, Desktop-Sticky) ================= */}
      <section className="py-16 md:py-24 lg:py-40 relative z-10 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="w-full lg:w-1/3 relative">
            <div className="lg:sticky lg:top-32 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 uppercase tracking-tighter">
                Why Choose <br className="hidden lg:block" />{" "}
                <span className="text-emerald-500">Us?</span>
              </h2>
              <p className="text-slate-400 text-sm md:text-base lg:text-lg font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
                Our strengths are our expert team having deep experience in
                individual fields to get results beyond our client's
                expectations.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-2/3 flex flex-col gap-6 md:gap-8">
            {[
              {
                title: "Quality is Paramount",
                desc: "We continually strive not only to meet client expectations but to exceed them through our routine evaluation processes and industry recognition.",
                icon: <Shield size={24} />,
              },
              {
                title: "Safety First",
                desc: "We integrate safety and risk management into our daily operations, ensuring it becomes a natural part of our culture with positive results.",
                icon: <Activity size={24} />,
              },
              {
                title: "Customer Satisfaction",
                desc: "Delivering on a promise earlier than expected. We hold an open ear for both pleased and displeased customers to understand needs.",
                icon: <CheckCircle size={24} />,
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-[#0B1221] border border-white/5 p-6 md:p-8 lg:p-12 rounded-[1.5rem] md:rounded-[2rem] hover:border-emerald-500/30 transition-all duration-500 group"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/[0.03] text-amber-400 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:bg-amber-500 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                  {value.icon}
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4 tracking-wide">
                  {value.title}
                </h3>
                <p className="text-slate-400 leading-relaxed font-medium text-xs md:text-sm lg:text-base">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 5. SUCCESS STORIES ================= */}
      <section
        id="expertise"
        className="py-16 md:py-24 lg:py-32 border-t border-white/5 bg-[#0B1221]"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="mb-12 md:mb-16 lg:mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-6 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase">
              Execution <br className="hidden lg:block" />{" "}
              <span className="text-emerald-500 border-b-2 border-emerald-500 pb-1 lg:pb-2 inline-block mt-2 lg:mt-0">
                Capabilities
              </span>
            </h2>
            <p className="text-slate-400 font-medium max-w-sm mx-auto lg:mx-0 text-sm md:text-base lg:text-lg">
              We have satisfactorily handled plenty of high-end Residential,
              Commercial, and Infrastructural Projects.
            </p>
          </div>

          <div className="flex flex-col border-t border-white/10">
            {[
              { title: "Solar Power Plants", icon: <Sun size={28} /> },
              { title: "Wind Energy Farms", icon: <Wind size={28} /> },
              { title: "Transmission Lines", icon: <Zap size={28} /> },
              { title: "Commercial Malls", icon: <Building2 size={28} /> },
            ].map((domain, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col sm:flex-row sm:items-center justify-between py-6 md:py-10 lg:py-12 border-b border-white/10 cursor-pointer gap-4 sm:gap-0"
              >
                <div className="flex items-center gap-4 md:gap-6 lg:gap-10">
                  <div className="text-slate-500 group-hover:text-amber-400 transition-colors duration-300">
                    {domain.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black text-slate-300 group-hover:text-white transition-colors duration-300 tracking-tighter uppercase">
                    {domain.title}
                  </h3>
                </div>
                <div className="hidden sm:flex w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/10 items-center justify-center text-slate-500 group-hover:border-amber-400 group-hover:text-amber-400 group-hover:rotate-45 transition-all duration-300 shrink-0">
                  <ArrowUpRight size={20} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 6. ALBERT EINSTEIN QUOTE ================= */}
      <section className="relative py-24 md:py-32 lg:py-48 bg-emerald-600 overflow-hidden text-center flex items-center justify-center px-4">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:15px_15px] md:[background-size:20px_20px]" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto relative z-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-[#050A15] leading-[1.2] lg:leading-[1.1] mb-6 md:mb-8 tracking-tight md:tracking-tighter uppercase">
            "By 2600, the world population would be standing shoulder to
            shoulder and the electricity consumed would make the earth glow{" "}
            <span className="text-white">red-hot.</span>"
          </h2>
          <p className="text-[#050A15] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] md:text-sm">
            — Albert Einstein
          </p>
        </motion.div>
      </section>
    </main>
  );
}
