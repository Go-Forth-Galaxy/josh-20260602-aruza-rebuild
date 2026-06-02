import Image from "next/image";
import { asset } from "@/lib/assets";

const pillars = [
  {
    title: "Local routes, not call centers",
    body: "Your tech lives in your town. You see the same face. You get a cell number, not a queue.",
  },
  {
    title: "We educate, then we treat",
    body: "You leave every visit knowing what we found, what we did, and exactly what's next.",
  },
  {
    title: "100% Satisfaction Guarantee",
    body: "If a pest comes back between services, so do we — free. If you're not happy, we make it right.",
  },
  {
    title: "Pet‑ & family‑safe by default",
    body: "Modern, low‑impact products. Posted MSDS sheets. Always applied with the people who live there in mind.",
  },
];

export function Why() {
  return (
    <section
      id="why"
      className="relative bg-aruza-bone py-24 sm:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 relative">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-aruza-red/15 to-transparent blur-2xl" />
          <div className="relative rounded-[2rem] overflow-hidden border border-aruza-ink/10 shadow-[0_30px_60px_-30px_rgba(10,31,61,0.4)]">
            <Image
              src={asset("/images/family.png")}
              alt="Happy family relaxing on the lawn of their home"
              width={1200}
              height={900}
              className="w-full h-[420px] sm:h-[560px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 sm:right-6 max-w-[260px] rounded-2xl bg-aruza-navy text-white p-5 shadow-2xl">
            <div className="text-[10px] uppercase tracking-widest text-white/60">
              In the field since
            </div>
            <div className="text-4xl font-black tabular mt-1">2014</div>
            <div className="mt-2 text-xs text-white/70">
              A decade of route density, technician retention, and customers who
              stay.
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 px-3 h-7 rounded-full bg-aruza-red/10 text-aruza-red text-[11px] font-bold uppercase tracking-widest">
            Why Aruza
          </div>
          <h2 className="mt-5 text-[clamp(2.2rem,4.6vw,3.6rem)] font-black leading-[1.02] tracking-tight">
            We build relationships,
            <br />
            <span className="text-aruza-red">not just routes.</span>
          </h2>
          <p className="mt-6 text-lg text-aruza-ink/70 max-w-xl">
            We&apos;re a values‑driven, customer‑focused company that puts
            people first — homeowners, employees, and the communities we serve.
          </p>

          <dl className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-7">
            {pillars.map((p, i) => (
              <div key={p.title} className="relative pl-12">
                <div className="absolute left-0 top-0 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-aruza-red text-white font-black tabular text-sm">
                  0{i + 1}
                </div>
                <dt className="font-bold text-aruza-ink">{p.title}</dt>
                <dd
                  className="mt-1.5 text-sm text-aruza-ink/65 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: p.body }}
                />
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
