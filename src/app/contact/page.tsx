"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ShieldCheck } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* --- HERO SECTION --- */}
      {/* Bottom padding badha di hai taaki card properly overlap kar sake */}
      <section className="relative pt-24 pb-40 md:pt-32 md:pb-56 overflow-hidden bg-[#0B1221]">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6"
          >
            <ShieldCheck size={14} />
            <span>ISO 9001:2015 Certified EPC</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-4 leading-tight">
            Engineering <br className="md:hidden" />
            <span className="text-emerald-500">Connections.</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-lg max-w-xl mx-auto px-4 font-medium">
            Official Etech Energy Infrastructure Support
          </p>
        </div>
      </section>

      {/* --- UNIFIED CONTENT CARD (The Fix) --- */}
      {/* Ab sab kuch ek single dibbe (container) ke andar hai */}
      <div className="container mx-auto px-4 sm:px-6 -mt-24 md:-mt-32 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto bg-white rounded-3xl md:rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100"
        >
          {/* LEFT SIDE: OFFICIAL CONTACT INFO (Dark Panel) */}
          <div className="w-full lg:w-2/5 bg-slate-900 p-8 md:p-12 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>

            <h3 className="text-2xl font-black text-white mb-2 relative z-10">
              Contact Information
            </h3>
            <p className="text-slate-400 text-sm mb-12 relative z-10">
              Reach out to our industrial engineering team. We typically respond
              within 2 business hours.
            </p>

            <div className="space-y-8 relative z-10">
              {[
                { icon: <Phone size={22} />, detail: "+91 96872 20485" },
                { icon: <Mail size={22} />, detail: "info@etechenergy.com" },
                {
                  icon: <MapPin size={24} className="mt-1" />,
                  detail:
                    "215, Sanskar Heights, Second floor, 150 feet Ring Road, Mavdi, Rajkot, Gujarat-360004",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="text-emerald-400 shrink-0">{item.icon}</div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-white text-sm md:text-base leading-snug break-words">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: THE FORM (White Panel) */}
          <div className="w-full lg:w-3/5 p-8 md:p-12 lg:p-16 bg-white">
            <form className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-emerald-500 focus:bg-white transition-all font-medium text-sm text-slate-900"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-emerald-500 focus:bg-white transition-all font-medium text-sm text-slate-900"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                  Service Required
                </label>
                <div className="relative">
                  <select className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-emerald-500 focus:bg-white transition-all font-medium text-sm text-slate-900 appearance-none cursor-pointer">
                    <option>Industrial Solar EPC</option>
                    <option>Commercial Rooftop Solution</option>
                    <option>Ground Mounted Systems</option>
                    <option>Solar Water Pumps</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
                    ▼
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your industrial requirements..."
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-emerald-500 focus:bg-white transition-all font-medium text-sm text-slate-900 resize-none"
                ></textarea>
              </div>

              <button className="w-full py-4 md:py-5 bg-emerald-500 text-white rounded-xl font-bold text-sm md:text-base uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/30">
                Submit Inquiry <Send size={18} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
