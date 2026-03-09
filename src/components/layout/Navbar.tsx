"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav
      className={`sticky top-0 w-full z-[100] transition-all duration-300 bg-white ${
        isScrolled ? "shadow-md py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Updated Logo: Green 'E' and 'tech' */}
        <Link
          href="/"
          className="text-2xl font-black tracking-tighter text-slate-900"
        >
          <span className="text-[#10B981]">E</span>tech
          <span className="text-[#10B981]">.</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-[#10B981] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side: Contact & Actions */}
        <div className="flex items-center gap-5">
          {/* Desktop Phone Numbers (Visible only on larger screens) */}
          <div className="hidden lg:flex items-center gap-3 border-r border-slate-200 pr-5">
            <div className="p-2 bg-[#10B981]/10 rounded-full text-[#10B981]">
              <Phone size={16} />
            </div>
            <div className="flex flex-col text-[11px] font-bold text-slate-600 leading-snug">
              <a
                href="tel:+919276861882"
                className="hover:text-[#10B981] transition-colors"
              >
                +91 92768 61882
              </a>
              <a
                href="tel:+919537971075"
                className="hover:text-[#10B981] transition-colors"
              >
                +91 95379 71075
              </a>
            </div>
          </div>

          <Link
            href="/contact"
            className="hidden sm:block px-6 py-2.5 bg-slate-900 text-white rounded-full text-xs font-bold uppercase hover:bg-[#10B981] transition-colors shadow-lg shadow-emerald-100/20"
          >
            Get a Quote
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu: Push-down effect */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
        className="overflow-hidden bg-slate-50 md:hidden"
      >
        <div className="flex flex-col p-6 gap-6 border-t border-slate-100">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold text-slate-900 flex justify-between items-center group"
            >
              {link.name}{" "}
              <ArrowRight className="text-[#10B981] opacity-50 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full py-4 mt-2 bg-[#10B981] text-white rounded-xl text-center font-bold uppercase tracking-wider shadow-lg shadow-emerald-200"
          >
            Contact Now
          </Link>

          {/* Mobile Quick Call Section */}
          <div className="mt-4 pt-6 border-t border-slate-200 flex flex-col gap-4">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Direct Support
            </p>
            <a
              href="tel:+919276861882"
              className="text-lg font-bold text-slate-900 flex items-center gap-3 hover:text-[#10B981] transition-colors"
            >
              <div className="p-2 bg-emerald-100 text-[#10B981] rounded-lg">
                <Phone size={18} />
              </div>
              +91 92768 61882
            </a>
            <a
              href="tel:+919537971075"
              className="text-lg font-bold text-slate-900 flex items-center gap-3 hover:text-[#10B981] transition-colors"
            >
              <div className="p-2 bg-emerald-100 text-[#10B981] rounded-lg">
                <Phone size={18} />
              </div>
              +91 95379 71075
            </a>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
