import { Logo } from "./Logo";

const nav: { label: string; href: string }[] = [
  { label: "Services", href: "#services" },
  { label: "The 360° Process", href: "#process" },
  { label: "Why Aruza", href: "#why" },
  { label: "Locations", href: "#locations" },
  { label: "Reviews", href: "#reviews" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-aruza-bone/75 border-b border-aruza-ink/5">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="px-4 py-2 text-sm font-semibold text-aruza-ink/80 rounded-full hover:bg-aruza-ink/5 hover:text-aruza-ink transition"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:18885694575"
            className="hidden sm:inline-flex items-center gap-2 px-4 h-10 rounded-full border border-aruza-ink/15 text-sm font-bold text-aruza-ink hover:border-aruza-red hover:text-aruza-red transition"
          >
            <span className="hidden md:inline">Call</span>
            <span className="tabular">(888) 569-4575</span>
          </a>
          <a
            href="#schedule"
            className="inline-flex items-center gap-2 h-10 px-4 sm:px-5 rounded-full bg-aruza-red text-white text-sm font-bold shadow-[0_10px_30px_-10px_rgba(225,26,43,0.6)] hover:bg-aruza-red-deep transition"
          >
            Schedule
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
