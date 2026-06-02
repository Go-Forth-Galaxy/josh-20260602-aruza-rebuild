const steps = [
  {
    n: "01",
    title: "Inspect",
    body: "A licensed local tech walks your property — interior, exterior, attic, crawl space — and documents every entry point and hot spot.",
  },
  {
    n: "02",
    title: "Identify",
    body: "We pinpoint exactly which pests are active and why. No guesswork, no over‑treatment, no surprises on the invoice.",
  },
  {
    n: "03",
    title: "Treat",
    body: "Targeted application of family & pet‑safe products to active zones, harborages, and the perimeter — inside and out.",
  },
  {
    n: "04",
    title: "Exclude",
    body: "We seal cracks, gaps, and access points so the pests we just removed have nowhere to come back through.",
  },
  {
    n: "05",
    title: "Protect",
    body: "Quarterly visits, free re‑services between, and proactive communication so your home stays protected — all year.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="relative bg-aruza-sand text-aruza-ink py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 h-7 rounded-full bg-aruza-red/10 text-aruza-red text-[11px] font-bold uppercase tracking-widest">
              The Aruza 360° Process
            </div>
            <h2 className="mt-5 text-[clamp(2.2rem,4.6vw,3.8rem)] font-black leading-[1.02] tracking-tight">
              Five steps.
              <br />
              <span className="text-aruza-red">Zero shortcuts.</span>
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg text-aruza-ink/70 max-w-xl ml-auto">
              Every Aruza visit follows the same disciplined process — the
              difference between a quick spray and lasting protection. It&apos;s
              why our customers stay with us, year after year.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-aruza-ink/10 rounded-3xl overflow-hidden border border-aruza-ink/10">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="group relative bg-aruza-bone p-7 sm:p-8 transition-colors hover:bg-white"
            >
              <div className="flex items-center justify-between">
                <div className="text-aruza-red font-black tabular text-sm">
                  {s.n}
                </div>
                <div className="text-aruza-ink/30 group-hover:text-aruza-red transition">
                  {i === steps.length - 1 ? "✓" : "→"}
                </div>
              </div>
              <h3 className="mt-6 text-2xl font-black tracking-tight">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-aruza-ink/65">
                {s.body}
              </p>
              <div className="absolute left-0 bottom-0 h-1 w-0 bg-aruza-red group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
