const reviews = [
  {
    name: "Mara T.",
    city: "Raleigh, NC",
    text: "Aruza completely turned around the bug problem we'd been fighting for two summers. My tech Jordan walks me through every step. We've referred four neighbors.",
    stars: 5,
  },
  {
    name: "Devon R.",
    city: "Charleston, SC",
    text: "Mosquitos used to own our back deck. After the first treatment we sat outside for two hours and not a single bite. Worth every dollar.",
    stars: 5,
  },
  {
    name: "Priya S.",
    city: "Tampa, FL",
    text: "They found German roaches our last company missed for years. Knocked them out in two visits. Honest, professional, on time.",
    stars: 5,
  },
  {
    name: "Garrett W.",
    city: "Charlotte, NC",
    text: "The crawl space encapsulation alone changed the smell of our whole house. Office, scheduling, billing — everything is just easy.",
    stars: 5,
  },
];

export function Reviews() {
  return (
    <section
      id="reviews"
      className="relative bg-aruza-sand py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 h-7 rounded-full bg-aruza-red/10 text-aruza-red text-[11px] font-bold uppercase tracking-widest">
              What customers say
            </div>
            <h2 className="mt-5 text-[clamp(2.2rem,4.6vw,3.6rem)] font-black leading-[1.02] tracking-tight">
              6,200+ reviews.
              <br />
              <span className="text-aruza-red">4.9 average.</span>
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {[
                "bg-aruza-red",
                "bg-aruza-navy",
                "bg-aruza-gold",
                "bg-emerald-600",
              ].map((b, i) => (
                <div
                  key={i}
                  className={`h-10 w-10 rounded-full ${b} border-2 border-aruza-sand`}
                />
              ))}
            </div>
            <div className="text-sm text-aruza-ink/70">
              <div className="flex items-center gap-1 text-aruza-gold">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
              <div className="text-xs mt-0.5 text-aruza-ink/55">
                Google · Facebook · BBB
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="lift relative bg-aruza-bone rounded-3xl p-6 border border-aruza-ink/5 flex flex-col"
            >
              <div className="text-aruza-red text-3xl font-black leading-none">
                &ldquo;
              </div>
              <blockquote
                className="mt-3 text-sm leading-relaxed text-aruza-ink/80 flex-1"
                dangerouslySetInnerHTML={{ __html: r.text }}
              />
              <figcaption className="mt-6 pt-5 border-t border-aruza-ink/10 flex items-center justify-between">
                <div>
                  <div className="font-bold text-aruza-ink text-sm">
                    {r.name}
                  </div>
                  <div className="text-xs text-aruza-ink/55">{r.city}</div>
                </div>
                <div className="text-aruza-gold tabular text-sm">
                  {"★★★★★".slice(0, r.stars)}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
