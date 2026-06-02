import Image from "next/image";
import { asset } from "@/lib/assets";

const states = [
  {
    code: "NC",
    name: "North Carolina",
    cities: ["Charlotte", "Raleigh", "Greensboro", "Smithfield"],
  },
  {
    code: "SC",
    name: "South Carolina",
    cities: ["Charleston", "Columbia", "Greenville"],
  },
  { code: "FL", name: "Florida", cities: ["Jacksonville", "Orlando", "Tampa"] },
  { code: "TX", name: "Texas", cities: ["Dallas", "Houston"] },
];

export function Locations() {
  return (
    <section
      id="locations"
      className="relative bg-aruza-navy text-white py-24 sm:py-32 overflow-hidden"
    >
      <Image
        src={asset("/images/aerial-night.png")}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-aruza-navy via-aruza-navy/80 to-aruza-navy-deep" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 h-7 rounded-full bg-white/10 text-white/85 text-[11px] font-bold uppercase tracking-widest">
              12 branches · 4 states
            </div>
            <h2 className="mt-5 text-[clamp(2.2rem,4.6vw,3.8rem)] font-black leading-[1.02] tracking-tight">
              Right around
              <br />
              <span className="text-aruza-red">the corner.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-white/70 text-lg">
            Aruza technicians live and work in the communities they protect.
            Find your local branch and book in under a minute.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {states.map((s) => (
            <div
              key={s.code}
              className="lift relative rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden"
            >
              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <div className="text-[11px] uppercase tracking-widest text-white/60">
                    {s.name}
                  </div>
                  <div className="text-3xl font-black text-aruza-red tabular">
                    {s.code}
                  </div>
                </div>
                <ul className="mt-6 space-y-2">
                  {s.cities.map((c) => (
                    <li key={c}>
                      <a
                        href="#schedule"
                        className="flex items-center justify-between text-sm font-semibold text-white/90 hover:text-aruza-red transition group"
                      >
                        <span>{c}</span>
                        <span
                          aria-hidden
                          className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
                        >
                          →
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="h-1 bg-gradient-to-r from-aruza-red to-aruza-red-deep" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
