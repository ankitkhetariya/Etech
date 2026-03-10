"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Mail,
  Instagram,
  Linkedin,
  Facebook,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="bg-[#0B1221] text-slate-400 py-20 border-t border-slate-800 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12"
      >
        {/* Brand Bio & Social Links */}
        <motion.div
          variants={itemVariants}
          className="col-span-1 md:col-span-1"
        >
          <h2 className="text-white text-3xl font-black tracking-tighter mb-6">
            ETECH<span className="text-[#10B981]">.</span>
          </h2>
          <p className="text-sm leading-relaxed mb-8 text-slate-400">
            India's premier Solar EPC company providing sustainable engineering
            solutions for Industrial, Commercial, and Residential sectors.
          </p>
          <div className="flex gap-4">
            <motion.a
              href="https://www.facebook.com/etechenergyinfra/"
              target="_blank"
              whileHover={{ y: -5, backgroundColor: "#1877F2", color: "#fff" }}
              className="p-3 bg-slate-800/50 rounded-xl text-slate-300 transition-all"
            >
              <Facebook size={20} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/etechenergy/"
              target="_blank"
              whileHover={{ y: -5, backgroundColor: "#E4405F", color: "#fff" }}
              className="p-3 bg-slate-800/50 rounded-xl text-slate-300 transition-all"
            >
              <Instagram size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/company/etech-energy-infra/"
              target="_blank"
              whileHover={{ y: -5, backgroundColor: "#0A66C2", color: "#fff" }}
              className="p-3 bg-slate-800/50 rounded-xl text-slate-300 transition-all"
            >
              <Linkedin size={20} />
            </motion.a>
          </div>
        </motion.div>

        {/* Specialized Services */}
        <motion.div variants={itemVariants} className="md:ml-auto">
          <h4 className="text-white font-bold uppercase tracking-[0.2em] text-[10px] mb-8">
            Solutions
          </h4>
          <ul className="flex flex-col gap-4 text-sm font-medium">
            {[
              "Ground Mounted Solar",
              "Industrial Rooftops",
              "Residential Systems",
              "Solar Water Pumps",
            ].map((link) => (
              <motion.li key={link} whileHover={{ x: 5 }}>
                <Link
                  href="/services"
                  className="hover:text-[#10B981] transition-colors flex items-center gap-2 group"
                >
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-all"
                  />
                  {link}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Navigation */}
        <motion.div variants={itemVariants} className="md:ml-auto">
          <h4 className="text-white font-bold uppercase tracking-[0.2em] text-[10px] mb-8">
            Navigation
          </h4>
          <ul className="flex flex-col gap-4 text-sm font-medium">
            {[
              "Our Projects",
              "About Company",
              "Solar Calculator",
              "Contact Support",
            ].map((link) => (
              <motion.li key={link} whileHover={{ x: 5 }}>
                <Link
                  href="#"
                  className="hover:text-[#10B981] transition-colors flex items-center gap-2 group"
                >
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-all"
                  />
                  {link}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Official Contact Info (Updated Layout for Dual Branches) */}
        <motion.div variants={itemVariants} className="md:ml-auto w-full">
          <h4 className="text-white font-bold uppercase tracking-[0.2em] text-[10px] mb-6">
            Contact Info
          </h4>

          <div className="flex flex-col gap-6">
            {/* Rajkot Head Office */}
            <div className="group">
              <h5 className="text-[#10B981] text-[10px] font-bold uppercase tracking-widest mb-1.5 flex items-center gap-2">
                Rajkot Head Office
              </h5>
              <p className="text-xs text-slate-300 leading-relaxed break-words mb-2">
                224 & 225, RK World Tower, 150 Feet Ring Road, Sheetal Park,
                Rajkot, Gujarat - 360006
              </p>
              <div className="text-xs font-bold text-slate-200">
                <a
                  href="tel:+919687220485"
                  className="hover:text-[#10B981] transition-colors"
                >
                  +91 96872 20485
                </a>
                <span className="mx-2 text-slate-600">|</span>
                <a
                  href="tel:+919687220486"
                  className="hover:text-[#10B981] transition-colors"
                >
                  +91 96872 20486
                </a>
              </div>
            </div>

            {/* Ahmedabad Branch */}
            <div className="group">
              <h5 className="text-[#10B981] text-[10px] font-bold uppercase tracking-widest mb-1.5 flex items-center gap-2">
                Ahmedabad Branch
              </h5>
              <p className="text-xs text-slate-300 leading-relaxed break-words mb-2">
                306, Arth Business Center, Opp Torrent Sub Station, SP Ring
                Road, Nikol, Ahmedabad, Gujarat - 382350
              </p>
              <div className="text-xs font-bold text-slate-200">
                <a
                  href="tel:+919276861882"
                  className="hover:text-[#10B981] transition-colors"
                >
                  +91 92768 61882
                </a>
                <span className="mx-2 text-slate-600">|</span>
                <a
                  href="tel:+919537971075"
                  className="hover:text-[#10B981] transition-colors"
                >
                  +91 95379 71075
                </a>
              </div>
            </div>

            {/* Official Email */}
            <div className="flex items-center gap-3 mt-2 group cursor-pointer w-fit">
              <div className="p-2 bg-[#10B981]/10 rounded-lg text-[#10B981] group-hover:bg-[#10B981] group-hover:text-white transition-all shrink-0">
                <Mail size={16} />
              </div>
              <a
                href="mailto:info@etechenergy.com"
                className="font-bold text-slate-200 text-sm hover:text-[#10B981] transition-colors"
              >
                info@etechenergy.com
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Footer Bottom with Credit */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="container mx-auto px-6 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6"
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 text-center">
          © 2026 Etech Energy Infra. Engineering Sustainable Futures.
        </p>
        <div className="text-[10px] font-bold uppercase tracking-[0.2em]">
          Developed By{" "}
          <span className="text-[#10B981] bg-[#10B981]/10 px-2 py-1 rounded">
            Mohit Khetariya
          </span>
        </div>
      </motion.div>
    </footer>
  );
}
