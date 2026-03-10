import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

// 1. Explicit Viewport (Mobile par perfect scaling aur unwanted zoom rokne ke liye)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, 
};

export const metadata: Metadata = {
  title: "Etech Energy | Engineering Connections",
  description:
    "India's premier Solar EPC company providing sustainable engineering solutions for Industrial, Commercial, and Residential sectors.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // scroll-smooth add kiya hai taki on-page links par click karne par smooth scroll ho
    <html lang="en" className="scroll-smooth">
      <body 
        className={`
          ${inter.className} 
          bg-[#050A15] 
          text-slate-200 
          antialiased 
          overflow-x-hidden /* 2. MOST IMPORTANT: Mobile par left-right scroll rokne ke liye */
          flex flex-col min-h-screen /* 3. Footer ko hamesha bottom mein chipkaye rakhne ke liye */
        `}
      >
        <Navbar />
        {/* flex-grow ensure karta hai ki main content saari bachi hui space le le */}
        <main className="flex-grow w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}