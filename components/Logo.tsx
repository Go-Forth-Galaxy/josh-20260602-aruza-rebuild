type LogoProps = { variant?: "light" | "dark"; className?: string };

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const text = variant === "light" ? "text-white" : "text-aruza-ink";
  return (
    <a
      href="#top"
      className={`flex items-center gap-2.5 group ${className}`}
      aria-label="Aruza Pest Control"
    >
      <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-aruza-red text-white font-black text-xl shadow-[0_8px_24px_-8px_rgba(225,26,43,0.6)] transition-transform group-hover:rotate-[-6deg]">
        A
        <span className="absolute -inset-1 rounded-2xl bg-aruza-red/30 blur-md -z-10" />
      </span>
      <span className={`text-xl font-black tracking-tight ${text}`}>
        ARUZA
        <span className="text-aruza-red">.</span>
      </span>
    </a>
  );
}
