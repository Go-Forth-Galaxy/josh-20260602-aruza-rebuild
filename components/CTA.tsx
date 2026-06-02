export function CTA() {
  return (
    <section
      id="schedule"
      className="relative bg-aruza-bone py-24 sm:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative rounded-[2.5rem] bg-gradient-to-br from-aruza-red via-aruza-red to-aruza-red-deep p-1 shadow-[0_40px_80px_-30px_rgba(225,26,43,0.55)]">
          <div className="relative rounded-[2.3rem] bg-aruza-red overflow-hidden">
            <div
              className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/15 blur-3xl pointer-events-none"
              aria-hidden
            />
            <div
              className="absolute -bottom-40 -left-20 w-[28rem] h-[28rem] rounded-full bg-aruza-navy/40 blur-3xl pointer-events-none"
              aria-hidden
            />

            <div className="relative grid lg:grid-cols-12 gap-10 p-8 sm:p-14 text-white">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 h-7 rounded-full bg-white/15 text-[11px] font-bold uppercase tracking-widest">
                  Schedule in under 60 seconds
                </div>
                <h2 className="mt-5 text-[clamp(2.2rem,5vw,4.2rem)] font-black leading-[1] tracking-tight">
                  Book your free
                  <br />
                  inspection today.
                </h2>
                <p className="mt-5 text-white/85 max-w-lg">
                  No commitment. No high‑pressure pitch. Just a real local tech,
                  a real walkthrough, and an honest plan.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="tel:18885694575"
                    className="inline-flex items-center gap-3 h-14 px-7 rounded-full bg-white text-aruza-red font-black shadow-[0_20px_40px_-12px_rgba(0,0,0,0.35)] hover:bg-aruza-bone transition"
                  >
                    <span aria-hidden>☎</span>
                    (888) 569‑4575
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-3 h-14 px-6 rounded-full border border-white/40 bg-white/10 font-semibold hover:bg-white/20 transition"
                  >
                    Or request online →
                  </a>
                </div>

                <ul className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl">
                  {[
                    "Same‑week appointments",
                    "Free re‑services",
                    "Licensed & insured",
                    "No long contracts",
                    "Pet‑ & kid‑safe products",
                    "100% guarantee",
                  ].map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm font-medium text-white/90"
                    >
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-aruza-red text-[10px] font-black">
                        ✓
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <form
                id="contact"
                className="lg:col-span-5 relative bg-white text-aruza-ink rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/60"
                action="#"
                method="get"
              >
                <div className="text-xs font-bold uppercase tracking-widest text-aruza-red">
                  Step 1 of 3 · 33%
                </div>
                <div className="mt-2 h-1.5 w-full bg-aruza-mist rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-aruza-red rounded-full" />
                </div>
                <h3 className="mt-5 text-xl font-black tracking-tight">
                  Let&apos;s get started.
                </h3>
                <p className="mt-1 text-sm text-aruza-ink/60">
                  Tell us how to reach you and we&apos;ll do the rest.
                </p>

                <div className="mt-5 space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="First name" />
                    <Field label="Last name" />
                  </div>
                  <Field label="Email" type="email" />
                  <Field label="Phone" type="tel" />
                  <Field label="ZIP" />
                  <div className="relative">
                    <label className="absolute -top-2 left-3 px-1.5 bg-white text-[10px] font-bold uppercase tracking-widest text-aruza-ink/55">
                      Reason
                    </label>
                    <select className="w-full h-12 rounded-xl border border-aruza-ink/15 px-3 text-sm font-medium focus:outline-none focus:border-aruza-red bg-white">
                      <option>Pest Control</option>
                      <option>Termite Control</option>
                      <option>Mosquito Patrol</option>
                      <option>Rodent Exclusion</option>
                      <option>Home Health Inspection</option>
                      <option>Crawl Space / Moisture</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-5 w-full h-13 py-3.5 rounded-xl bg-aruza-red text-white font-bold hover:bg-aruza-red-deep transition"
                >
                  Continue →
                </button>
                <p className="mt-3 text-[11px] text-aruza-ink/50 leading-relaxed">
                  By submitting, you consent to be contacted by Aruza Pest
                  Control regarding your request. Consent is not a condition of
                  purchase.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  type = "text",
}: {
  label: string;
  type?: string;
}) {
  return (
    <div className="relative">
      <label className="absolute -top-2 left-3 px-1.5 bg-white text-[10px] font-bold uppercase tracking-widest text-aruza-ink/55">
        {label}
      </label>
      <input
        type={type}
        className="w-full h-12 rounded-xl border border-aruza-ink/15 px-3 text-sm focus:outline-none focus:border-aruza-red bg-white"
      />
    </div>
  );
}
