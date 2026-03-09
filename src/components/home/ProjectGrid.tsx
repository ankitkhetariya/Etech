"use client";
import { motion } from "framer-motion";
import { ExternalLink, MapPin, Zap } from "lucide-react";

const projects = [
  {
    title: "1.2MW Industrial EPC",
    location: "Sanand GIDC, Ahmedabad",
    capacity: "1200 KW",
    gridSpan: "md:col-span-2 md:row-span-2",
    bg: "bg-slate-900",
  },
  {
    title: "Commercial Rooftop",
    location: "Rajkot, Gujarat",
    capacity: "150 KW",
    gridSpan: "md:col-span-1 md:row-span-1",
    bg: "bg-emerald-600",
  },
  {
    title: "Govt. Solar Pump",
    location: "Bhavnagar",
    capacity: "50 Units",
    gridSpan: "md:col-span-1 md:row-span-1",
    bg: "bg-solar-yellow",
  },
];

export default function ProjectGrid() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 mb-4">
              Proven <span className="text-solar-green">Excellence.</span>
            </h2>
            <p className="text-slate-500 text-lg font-medium">
              Powering Gujarat's industrial landscape with precision
              engineering.
            </p>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-solar-green font-bold uppercase tracking-widest text-sm border-b-2 border-solar-green pb-1"
          >
            Explore All Projects <ExternalLink size={18} />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[350px]">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`${p.gridSpan} group relative rounded-[2.5rem] overflow-hidden border border-slate-100 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500`}
            >
              {/* Overlay for Stats */}
              <div
                className={`absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity ${p.bg}`}
              />

              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end bg-gradient-to-t from-white via-white/40 to-transparent">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-solar-green/10 rounded-lg text-solar-green">
                    <Zap size={16} fill="currentColor" />
                  </div>
                  <span className="text-sm font-bold text-solar-green uppercase tracking-widest">
                    {p.capacity}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 leading-tight group-hover:text-solar-green transition-colors">
                  {p.title}
                </h3>

                <div className="flex items-center gap-1 text-slate-400 font-bold text-sm">
                  <MapPin size={14} />
                  {p.location}
                </div>
              </div>

              {/* Advanced Interaction Layer */}
              <motion.div
                className="absolute top-8 right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ rotate: 45 }}
              >
                <ArrowRight size={20} className="text-solar-green" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
