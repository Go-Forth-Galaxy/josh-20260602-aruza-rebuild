import Image from "next/image";
import { asset } from "@/lib/assets";

type Service = {
  title: string;
  tagline: string;
  bullets: string[];
  img?: string;
  featured?: boolean;
};

const services: Service[] = [
  {
    title: "Year‑Round Pest Control",
    tagline:
      "Ants, roaches, spiders, fleas, ticks, wasps — exterior + interior protection with quarterly re‑visits and free re‑services in between.",
    bullets: ["Ants & Roaches", "Spiders & Wasps", "Fleas & Ticks"],
    img: asset("/images/pest-ant.png"),
    featured: true,
  },
  {
    title: "Termite Defense",
    tagline:
      "Liquid barrier + bait systems with annual inspections, structural warranty, and re‑treatment included.",
    bullets: ["Sentricon Bait", "Liquid Barrier", "Warranty Renewals"],
    img: asset("/images/pest-termite.png"),
  },
  {
    title: "Mosquito Patrol",
    tagline:
      "Monthly treatments April–October that knock down adults, larvae, and breeding zones so you reclaim the yard.",
    bullets: ["Adulticide & Larvicide", "Yard Audit", "Event Treatments"],
    img: asset("/images/pest-mosquito.png"),
  },
  {
    title: "Rodent Control & Exclusion",
    tagline:
      "Trap, remove, and seal. We don't just bait — we find the entry points and shut them down for good.",
    bullets: ["Live‑Trap & Removal", "Full Exclusion", "Sanitation"],
  },
  {
    title: "Home Health Inspection",
    tagline:
      "A 50‑point look at the systems pests exploit: moisture, ventilation, insulation, gaps, and infestation history.",
    bullets: ["Crawl Space Audit", "Moisture Mapping", "Action Plan"],
  },
  {
    title: "Crawl Space & Moisture",
    tagline:
      "Encapsulation, dehumidifiers, and pest control insulation — fewer pests, lower bills, healthier air upstairs.",
    bullets: ["Encapsulation", "Dehumidifier Install", "TAP Insulation"],
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative bg-aruza-navy-deep text-white py-24 sm:py-32 overflow-hidden"
    >
      <div
        className="aurora"
        style={{
          width: "520px",
          height: "520px",
          background:
            "radial-gradient(closest-side, rgba(225,26,43,0.55), transparent)",
          top: "10%",
          left: "-100px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 h-7 rounded-full bg-white/10 text-white/85 text-[11px] font-bold uppercase tracking-widest">
              What we protect against
            </div>
            <h2 className="mt-5 text-[clamp(2.2rem,4.6vw,3.8rem)] font-black leading-[1.02] tracking-tight">
              One team.
              <br />
              <span className="text-aruza-red">Every pest, every season.</span>
            </h2>
          </div>
          <a
            href="#schedule"
            className="self-start inline-flex items-center gap-3 h-12 px-6 rounded-full border border-white/20 bg-white/5 text-sm font-bold hover:bg-white/10 transition"
          >
            View all services →
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <article
              key={s.title}
              className={`lift relative rounded-3xl border border-white/10 p-6 sm:p-7 overflow-hidden ${
                s.featured
                  ? "bg-gradient-to-br from-aruza-red to-aruza-red-deep"
                  : "bg-white/[0.04]"
              }`}
            >
              {s.img && (
                <div
                  className={`absolute -top-6 -right-6 w-32 h-32 rounded-2xl overflow-hidden opacity-50 ${
                    s.featured ? "" : "mix-blend-screen"
                  }`}
                >
                  <Image
                    src={s.img}
                    alt=""
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="relative">
                <h3 className="text-2xl font-black tracking-tight pr-12">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  {s.tagline}
                </p>
                <ul className="mt-5 space-y-1.5">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2 text-sm text-white/90"
                    >
                      <span
                        className={`inline-flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-black ${
                          s.featured
                            ? "bg-white text-aruza-red"
                            : "bg-aruza-red text-white"
                        }`}
                      >
                        ✓
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="#schedule"
                  className={`mt-6 inline-flex items-center gap-2 text-sm font-bold ${
                    s.featured ? "text-white" : "text-aruza-red"
                  }`}
                >
                  Get a quote
                  <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
