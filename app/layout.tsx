import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aruza Pest Control — Effective Protection, Delivered with Integrity",
  description:
    "Year-round pest, termite, and moisture protection across NC, SC, FL, and TX — powered by the Aruza 360° process. 100% satisfaction guarantee.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-aruza-bone text-aruza-ink antialiased">
        {children}
      </body>
    </html>
  );
}
