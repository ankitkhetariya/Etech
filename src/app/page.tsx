import Hero from "@/components/home/Hero";
import { ServiceGrid } from "@/components/home/Services"; // We'll create this next

export default function Home() {
  return (
    <div className="relative">
      <Hero />

      {/* Quick Stats Section */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-slate-900">10k+</p>
              <p className="text-sm text-slate-500 uppercase tracking-wider">
                Installs
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900">25yr</p>
              <p className="text-sm text-slate-500 uppercase tracking-wider">
                Warranty
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900">98%</p>
              <p className="text-sm text-slate-500 uppercase tracking-wider">
                Efficiency
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900">0%</p>
              <p className="text-sm text-slate-500 uppercase tracking-wider">
                Down Payment
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServiceGrid />
    </div>
  );
}
