"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Grid3x3, Image, Zap, Award } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// 3D Perspective Gallery Item Component
const GalleryItem = ({
  image,
  title,
  category,
  location,
  capacity,
  index,
}: {
  image: string;
  title: string;
  category: string;
  location: string;
  capacity: string;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative group cursor-pointer h-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-white/10 bg-black/20 backdrop-blur-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ perspective: "1200px" }}
    >
      {/* Image Container with 3D Perspective */}
      <motion.div
        animate={{
          rotateX: isHovered ? -8 : 0,
          rotateY: isHovered ? 8 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050A15] via-[#050A15]/40 to-transparent" />

      {/* Content - Bottom Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 right-0 p-6 md:p-8"
      >
        <div className="mb-4">
          <p className="text-[10px] md:text-xs uppercase font-bold text-emerald-400 tracking-[0.2em] mb-2">
            {category}
          </p>
          <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-2">
            {title}
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-white/10">
          <div>
            <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
              Location
            </p>
            <p className="text-sm md:text-base text-slate-200 font-medium mt-1">
              {location}
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
              Capacity
            </p>
            <p className="text-sm md:text-base text-emerald-400 font-bold mt-1">
              {capacity}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Hover Indicator */}
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute top-6 right-6 w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400"
      >
        <ArrowUpRight size={18} />
      </motion.div>
    </motion.div>
  );
};

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const galleryItems = [
    {
      id: 1,
      title: "Rajkot Solar Farm",
      category: "Ground Mounted",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
      location: "Rajkot, Gujarat",
      capacity: "5.2 MWp",
      tags: ["all", "ground", "solar"],
    },
  {
      id: 2,
      title: "Industrial Rooftop",
      category: "Industrial Rooftop",
      // NAYA WORKING URL YAHAN HAI 👇
      image: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&w=1200&auto=format&fit=crop", 
      location: "Ahmedabad",
      capacity: "850 kWp",
      tags: ["all", "industrial", "rooftop"],
    },
    {
      id: 3,
      title: "Smart Grid Integration",
      category: "EHV/HV Infrastructure",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop",
      location: "Central India",
      capacity: "220 kV Line",
      tags: ["all", "infrastructure", "grid"],
    },
    {
      id: 4,
      title: "Agricultural Solar Pump",
      category: "Solar Water Pumping",
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1200&auto=format&fit=crop",
      location: "Gujarat Plains",
      capacity: "10 HP System",
      tags: ["all", "water", "solar"],
    },
    {
      id: 5,
      title: "Residential Solar Complex",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop",
      location: "Metro Cities",
      capacity: "5-10 kWp",
      tags: ["all", "residential", "solar"],
    },
    {
      id: 6,
      title: "Battery Storage System",
      category: "Energy Storage",
      image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=1200&auto=format&fit=crop",
      location: "Pan India",
      capacity: "50-100 kWh",
      tags: ["all", "storage", "battery"],
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ground", label: "Ground Mounted" },
    { id: "industrial", label: "Industrial" },
    { id: "residential", label: "Residential" },
    { id: "infrastructure", label: "Infrastructure" },
  ];

  const filteredItems = galleryItems.filter((item) =>
    activeCategory === "all" ? true : item.tags.includes(activeCategory)
  );

  return (
    <main className="min-h-screen bg-[#050A15] text-slate-200 selection:bg-emerald-500/30 overflow-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-16 px-4 md:px-8 z-10 overflow-hidden">
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
            <Grid3x3 size={14} /> 500+ Projects Showcase
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] uppercase mb-8 drop-shadow-2xl"
          >
            Project <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">
              Gallery.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed border-l-2 border-emerald-500 pl-6 py-3 bg-white/5 backdrop-blur-md rounded-r-lg"
          >
            Explore Etech Energy's extensive portfolio of successful solar and electrical infrastructure projects across India. From utility-scale farms to residential installations, witness excellence in every megawatt.
          </motion.p>
        </div>
      </section>

      {/* ===== CATEGORY FILTER ===== */}
      <section className="sticky top-20 md:top-24 py-12 px-4 md:px-8 z-10 bg-gradient-to-b from-transparent via-[#0B1221]/40 to-transparent border-y border-white/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((cat, idx) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className={`px-6 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 border ${
                  activeCategory === cat.id
                    ? "bg-emerald-500 text-white border-emerald-500 shadow-lg shadow-emerald-500/40"
                    : "border-white/20 text-slate-300 hover:border-emerald-500/50 hover:text-emerald-400"
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== GALLERY GRID ===== */}
      <section className="relative py-24 px-4 md:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {filteredItems.map((item, idx) => (
              <GalleryItem
                key={item.id}
                image={item.image}
                title={item.title}
                category={item.category}
                location={item.location}
                capacity={item.capacity}
                index={idx}
              />
            ))}
          </motion.div>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Image size={64} className="mx-auto text-slate-600 mb-4" />
              <p className="text-slate-400 text-lg">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="relative py-24 px-4 md:px-8 z-10 bg-[#0B1221]/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-16"
          >
            <p className="text-xs uppercase font-bold text-emerald-400 tracking-[0.3em] mb-4">
              Impact Numbers
            </p>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight uppercase">
              By The Numbers
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Award size={32} />, number: "500+", label: "Projects Delivered" },
              { icon: <Zap size={32} />, number: "75MW+", label: "Capacity Installed" },
              { icon: <Grid3x3 size={32} />, number: "1000+", label: "Site Locations" },
              { icon: <ArrowUpRight size={32} />, number: "14+", label: "Years Experience" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="text-center p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400 mb-2">
                  {stat.number}
                </div>
                <p className="text-slate-400 text-sm uppercase tracking-wider font-bold">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
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
              Your Next Project Awaits.
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Join the 500+ businesses that have trusted Etech Energy to transform their energy infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-500 text-white rounded-full font-bold text-sm uppercase tracking-wider hover:scale-105 transition-transform duration-300 shadow-lg shadow-emerald-500/40"
              >
                <span>Start Your Project</span>
                <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-300" />
              </Link>
              <Link
                href="/about"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-emerald-500/50 text-emerald-400 rounded-full font-bold text-sm uppercase tracking-wider hover:border-emerald-400 hover:text-emerald-300 transition-all duration-300"
              >
                <span>Learn Our Story</span>
                <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}