"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const servicesDropdown = [
    { name: "Solar Energy", href: "/services/solar-energy" },
    { name: "Industrial Services", href: "/services/industrial-services" },
    { name: "Project EPC", href: "/services/project-epc" },
  ];

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`sticky top-0 w-full z-[100] transition-all duration-300 bg-[#050A15]/95 backdrop-blur-md border-b border-white/5 ${
        isScrolled ? "shadow-xl shadow-black/50 py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-black tracking-tighter text-white"
        >
          <span className="text-[#10B981]">E</span>tech
          <span className="text-[#10B981]">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider text-slate-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              prefetch={true} // Makes navigation instantaneous
              className="hover:text-[#10B981] transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {/* Services Dropdown (Desktop) */}
          <div
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="flex items-center gap-2 hover:text-[#10B981] transition-colors group-hover:text-[#10B981]">
              Services
              <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-56 bg-[#0B1221]/95 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden z-50"
                >
                  {servicesDropdown.map((service, idx) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      prefetch={true}
                      className="block px-6 py-4 hover:bg-emerald-500/10 border-b border-white/5 last:border-b-0 transition-colors hover:text-[#10B981]"
                    >
                      <p className="font-bold text-sm uppercase tracking-wider">{service.name}</p>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-5">
          {/* Desktop Phone Info */}
          <div className="hidden lg:flex items-center gap-3 border-r border-slate-700/50 pr-5">
            <div className="p-2 bg-[#10B981]/10 rounded-full text-[#10B981]">
              <Phone size={16} />
            </div>
            <div className="flex flex-col text-[11px] font-bold text-slate-400 leading-snug">
              <a href="tel:+919276861882" className="hover:text-[#10B981] transition-colors">
                +91 92768 61882
              </a>
              <a href="tel:+919537971075" className="hover:text-[#10B981] transition-colors">
                +91 95379 71075
              </a>
            </div>
          </div>

          <Link
            href="/contact"
            prefetch={true}
            className="hidden sm:block px-6 py-2.5 bg-emerald-500 text-white rounded-full text-xs font-bold uppercase hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/30"
          >
            Get Free Quote
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-300 hover:bg-white/10 rounded-full transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Slide-in */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden bg-[#0B1221]/95 backdrop-blur-md border-t border-white/10 md:hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {/* Main Nav Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-bold text-slate-200 flex justify-between items-center group hover:text-[#10B981] transition-colors"
                >
                  {link.name}
                  <ArrowRight className="text-[#10B981] opacity-50 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}

              {/* Mobile Services Dropdown */}
              <div className="border-t border-white/10 pt-4">
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full text-left text-xl font-bold text-slate-200 flex justify-between items-center group hover:text-[#10B981] transition-colors"
                >
                  Services
                  <ChevronDown
                    size={20}
                    className={`text-[#10B981] transition-transform duration-300 ${
                      isMobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-3 mt-4 pl-6 border-l-2 border-emerald-500/30"
                    >
                      {servicesDropdown.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          onClick={() => {
                            setIsOpen(false);
                            setIsMobileServicesOpen(false);
                          }}
                          className="text-base text-slate-300 hover:text-[#10B981] transition-colors font-medium uppercase tracking-wider py-1"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile CTA */}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full py-4 mt-4 bg-[#10B981] text-white rounded-xl text-center font-bold uppercase tracking-wider shadow-lg shadow-emerald-500/30"
              >
                Get Free Quote
              </Link>

              {/* Mobile Quick Call */}
              <div className="mt-4 pt-6 border-t border-white/10 flex flex-col gap-4">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  Direct Support
                </p>
                <a href="tel:+919276861882" className="text-lg font-bold text-slate-200 flex items-center gap-3 hover:text-[#10B981] transition-colors">
                  <div className="p-2 bg-emerald-500/10 text-[#10B981] border border-emerald-500/20 rounded-lg">
                    <Phone size={18} />
                  </div>
                  +91 92768 61882
                </a>
                <a href="tel:+919537971075" className="text-lg font-bold text-slate-200 flex items-center gap-3 hover:text-[#10B981] transition-colors">
                  <div className="p-2 bg-emerald-500/10 text-[#10B981] border border-emerald-500/20 rounded-lg">
                    <Phone size={18} />
                  </div>
                  +91 95379 71075
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}