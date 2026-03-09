"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ShieldCheck } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-12">
      {/* --- HERO: Mobile-Optimized Height & Text --- */}
      <section className="relative pt-20 pb-24 md:pt-40 md:pb-48 overflow-hidden bg-[#0B1221]">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-6"
          >
            <ShieldCheck size={12} />
            <span>ISO 9001:2015 Certified EPC</span>
          </motion.div>

          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-4 leading-tight">
            Engineering <br className="md:hidden" />
            <span className="text-emerald-500">Connections.</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-xl max-w-xl mx-auto px-4 font-medium">
            Official Etech Energy Infrastructure Support
          </p>
        </div>
      </section>

      {/* --- CONTENT: Dynamic Grid --- */}
      <div className="container mx-auto px-4 md:px-6 -mt-12 md:-mt-24 relative z-20">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* LEFT: OFFICIAL CONTACT INFO (Rajkot Details) */}
          <div className="w-full lg:w-1/3 space-y-3 md:space-y-4">
            {[
              {
                icon: <Phone size={20} />,
                title: "Support Line",
                detail: "+91 96872 20485",
              },
              {
                icon: <Mail size={20} />,
                title: "Official Email",
                detail: "info@etechenergy.com",
              },
              {
                icon: <MapPin size={20} />,
                title: "Rajkot HQ",
                detail:
                  "215, Sanskar Heights, Second floor, 150 feet Ring Road, Mavdi, Rajkot, Gujarat-360004",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-5 md:p-6 rounded-2xl md:rounded-3xl border border-slate-100 shadow-lg flex items-start gap-4 group hover:border-emerald-500 transition-colors"
              >
                <div className="p-3 bg-emerald-500 text-white rounded-xl shrink-0 group-hover:scale-110 transition-transform mt-1">
                  {item.icon}
                </div>
                {/* min-w-0 aur flex-1 zaroori hai text wrap ke liye */}
                <div className="min-w-0 flex-1">
                  <h4 className="font-bold text-slate-400 text-[10px] md:text-xs uppercase tracking-widest mb-1.5">
                    {item.title}
                  </h4>
                  {/* truncate hata diya hai taaki lamba address wrap ho sake */}
                  <p className="text-slate-900 font-bold text-sm leading-snug break-words">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: INDUSTRIAL INQUIRY FORM */}
          <div className="w-full lg:w-2/3 bg-white p-6 md:p-12 rounded-[2rem] md:rounded-[3.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50">
            <form className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest ml-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-5 py-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-bold text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    className="w-full px-5 py-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-bold text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest ml-1">
                  Service Required
                </label>
                <div className="relative">
                  <select className="w-full px-5 py-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-bold text-sm appearance-none cursor-pointer">
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
                <label className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest ml-1">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your industrial requirements..."
                  className="w-full px-5 py-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-bold text-sm resize-none"
                ></textarea>
              </div>

              <button className="w-full py-4 md:py-5 bg-slate-900 text-white rounded-2xl font-black text-sm md:text-base uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-100">
                Submit Inquiry <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
