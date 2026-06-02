import Image from "next/image";
import { asset } from "@/lib/assets";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-aruza-navy-deep text-white grain isolate"
    >
      {/* Aurora */}
      <div
        className="aurora animate-float-slow"
        style={{
          width: "640px",
          height: "640px",
          background:
            "radial-gradient(closest-side, rgba(225,26,43,0.85), rgba(225,26,43,0))",
          top: "-180px",
          right: "-160px",
        }}
      />
      <div
        className="aurora animate-float-slow"
        style={{
          width: "520px",
          height: "520px",
          background:
            "radial-gradient(closest-side, rgba(233,180,76,0.45), rgba(233,180,76,0))",
          bottom: "-200px",
          left: "-120px",
          animationDelay: "3s",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-14 sm:pt-20 pb-16 sm:pb-28 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 xl:col-span-7 relative z-10">
          <div className="rise inline-flex items-center gap-2 px-3 h-8 rounded-full border border-white/15 bg-white/5 text-[12px] font-semibold tracking-wider uppercase text-white/90">
            <span className="h-1.5 w-1.5 rounded-full bg-aruza-red animate-pulse-soft" />
            Trusted by 60,000+ Southern homes
          </div>

          <h1 className="rise rise-delay-1 mt-6 text-[clamp(2.6rem,6.4vw,5.4rem)] font-black leading-[0.95] tracking-tight">
            Pests don&apos;t stand
            <br className="hidden sm:block" />{" "}
            <span className="relative inline-block">
              <span className="relative z-10">a chance.</span>
              <span
                aria-hidden
                className="absolute left-0 right-0 bottom-1 h-3 sm:h-4 bg-aruza-red -skew-x-6"
              />
            </span>
            <br />
            <span className="text-white/80 font-extralight italic">
              And neither does the average tech.
            </span>
          </h1>

          <p className="rise rise-delay-2 mt-7 max-w-xl text-base sm:text-lg text-white/75 leading-relaxed">
            Year‑round protection powered by the{" "}
            <span className="font-semibold text-white">
              Aruza 360° process
            </span>
            . Five proven steps, twelve local branches, one promise — your home
            stays pest‑free and your family stays safe.
          </p>

          <div className="rise rise-delay-3 mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#schedule"
              className="group inline-flex items-center gap-3 h-14 px-7 rounded-full bg-aruza-red text-white font-bold shadow-[0_20px_40px_-12px_rgba(225,26,43,0.7)] hover:bg-aruza-red-deep transition"
            >
              Schedule a free inspection
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-aruza-red font-black group-hover:translate-x-1 transition">
                →
              </span>
            </a>
            <a
              href="tel:18885694575"
              className="inline-flex items-center gap-3 h-14 px-6 rounded-full border border-white/20 bg-white/5 font-semibold text-white hover:bg-white/10 transition tabular"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                ☎
              </span>
              (888) 569‑4575
            </a>
          </div>

          <div className="rise rise-delay-4 mt-10 grid grid-cols-3 max-w-lg gap-6">
            {[
              { k: "100%", v: "Satisfaction Guarantee" },
              { k: "12", v: "Local Branches" },
              { k: "4", v: "States Served" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-3xl sm:text-4xl font-black tabular text-white">
                  {s.k}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-widest text-white/55">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="lg:col-span-5 relative z-10">
          <div className="relative rise rise-delay-2">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-aruza-red/30 via-transparent to-aruza-gold/20 blur-2xl" />
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)]">
              <Image
                src={asset("/images/hero-tech.png")}
                alt="Aruza pest control technician outside a southern home at golden hour"
                width={1280}
                height={1600}
                priority
                className="w-full h-[460px] sm:h-[560px] lg:h-[640px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-aruza-navy-deep via-aruza-navy-deep/10 to-transparent" />

              {/* Floating badge */}
              <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3 h-9 rounded-full bg-white/95 text-aruza-ink text-xs font-bold shadow-lg">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse-soft" />
                Available today
              </div>

              {/* Floating card */}
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-[320px] rounded-2xl bg-white/95 backdrop-blur p-4 shadow-2xl border border-white/60">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-xl bg-aruza-red text-white flex items-center justify-center font-black">
                    ★
                  </div>
                  <div className="text-aruza-ink">
                    <div className="text-sm font-bold leading-tight">
                      4.9 / 5 from 6,200+ reviews
                    </div>
                    <div className="text-xs text-aruza-ink/60 mt-0.5">
                      &ldquo;On time, thorough, kind. Best I&apos;ve had.&rdquo;
                      — Mara T., Raleigh
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating side stat */}
            <div className="hidden sm:flex absolute -left-8 top-20 flex-col items-start rounded-2xl bg-aruza-red text-white px-4 py-3 shadow-[0_20px_40px_-12px_rgba(225,26,43,0.7)] rotate-[-4deg]">
              <div className="text-[10px] uppercase tracking-widest text-white/80">
                Aruza 360°
              </div>
              <div className="text-xl font-black tabular leading-none mt-1">
                5‑step plan
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="relative border-t border-white/10 bg-aruza-navy">
        <div className="overflow-hidden">
          <div className="animate-marquee flex gap-12 whitespace-nowrap py-5 text-sm font-semibold text-white/65 uppercase tracking-[0.18em]">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-12 shrink-0">
                <span>★ Charlotte</span>
                <span>★ Raleigh</span>
                <span>★ Greensboro</span>
                <span>★ Smithfield</span>
                <span>★ Charleston</span>
                <span>★ Columbia</span>
                <span>★ Greenville</span>
                <span>★ Jacksonville</span>
                <span>★ Orlando</span>
                <span>★ Tampa</span>
                <span>★ Dallas</span>
                <span>★ Houston</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
