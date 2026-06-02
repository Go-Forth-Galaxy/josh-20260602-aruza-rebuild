import { Logo } from "./Logo";

const cols = [
  {
    title: "Company",
    links: [
      "About Aruza",
      "Aruza Gives Back",
      "Military Makeover",
      "Careers",
      "In the News",
    ],
  },
  {
    title: "Services",
    links: [
      "Pest Control",
      "Termite Control",
      "Mosquito Patrol",
      "Rodent Exclusion",
      "Home Health Inspection",
      "Crawl Space Encapsulation",
    ],
  },
  {
    title: "Resources",
    links: ["FAQ", "Pest Library", "Financing", "SDS & Labels", "Blog"],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-aruza-navy-deep text-white pt-20 pb-10 overflow-hidden">
      <div
        className="aurora"
        style={{
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(closest-side, rgba(225,26,43,0.35), transparent)",
          top: "-200px",
          right: "-200px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-5 text-white/65 max-w-xs text-sm leading-relaxed">
              Effective pest protection — delivered with integrity, gratitude,
              and a 100% satisfaction guarantee. Serving NC, SC, FL & TX.
            </p>
            <a
              href="tel:18885694575"
              className="mt-6 inline-flex items-center gap-3 h-12 px-5 rounded-full bg-aruza-red text-white font-bold hover:bg-aruza-red-deep transition tabular"
            >
              ☎ (888) 569‑4575
            </a>
            <div className="mt-6 flex items-center gap-3">
              {["FB", "IG", "YT", "LI"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-xs font-black text-white/85 hover:bg-aruza-red hover:border-aruza-red hover:text-white transition"
                  aria-label={s}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-10">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="text-[11px] uppercase tracking-widest text-white/45 font-bold">
                  {c.title}
                </div>
                <ul className="mt-5 space-y-3">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm text-white/85 hover:text-aruza-red transition"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/55">
          <div>
            © 2026 Aruza Pest Control. All rights reserved. Licensed in NC, SC,
            FL & TX.
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="#" className="hover:text-white">
              100% Guarantee
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
