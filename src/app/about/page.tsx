import Hero from "@/components/home/Hero";
import { ServiceGrid } from "@/components/home/Services"; // This now points to the file you just made

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <ServiceGrid />
    </div>
  );
}
