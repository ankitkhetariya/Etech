import { Sun, Battery, Zap, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Residential Solar",
    desc: "Sleek, high-efficiency panels designed to blend perfectly with your home's architecture.",
    icon: <Sun className="text-emerald-600" />,
  },
  {
    title: "Battery Storage",
    desc: "Tesla Powerwall and smart battery integration to keep you powered 24/7.",
    icon: <Battery className="text-emerald-600" />,
  },
  {
    title: "Smart Monitoring",
    desc: "Real-time AI energy tracking through our proprietary mobile dashboard.",
    icon: <Zap className="text-emerald-600" />,
  },
  {
    title: "25-Year Warranty",
    desc: "Complete peace of mind with the industry's most comprehensive hardware protection.",
    icon: <ShieldCheck className="text-emerald-600" />,
  },
];

export function ServiceGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Solar Solutions
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Everything you need to go 100% sustainable with zero hassle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-emerald-100 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-emerald-50 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
