import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Phone, Sparkles, ShieldCheck, Leaf, BadgeCheck, Star, ArrowRight,
  CheckCircle2, Home, Building2, Truck, Brush, CalendarCheck, MapPin,
  Mail, Clock, Instagram, Facebook, ChevronLeft, ChevronRight, X,
} from "lucide-react";

import hero from "@/assets/hero-living.jpg";
import cleaner from "@/assets/cleaner.jpg";
import beforeKitchen from "@/assets/before-kitchen.jpg";
import afterKitchen from "@/assets/after-kitchen.jpg";
import beforeBath from "@/assets/before-bath.jpg";
import afterBath from "@/assets/after-bath.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FreshNest Cleaning Co. — A spotless home, booked in 60 seconds" },
      { name: "description", content: "Vetted, insured cleaners. Instant transparent pricing. Book residential or commercial cleaning in under a minute. 100% satisfaction guaranteed." },
      { property: "og:title", content: "FreshNest Cleaning Co." },
      { property: "og:description", content: "A spotless home, booked in 60 seconds. Insured, background-checked cleaners. Instant quote." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: hero },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: Index,
});

const PHONE_DISPLAY = "(415) 555-0142";
const PHONE_HREF = "tel:+14155550142";

/* ------------------------------ atoms ------------------------------ */

function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`flex items-center gap-2 ${className}`}>
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-mint text-white shadow-[0_8px_20px_-8px_var(--mint)]">
        <Sparkles className="h-5 w-5" />
      </span>
      <span className="text-lg font-extrabold tracking-tight text-ink">
        FreshNest<span className="text-mint">.</span>
      </span>
    </a>
  );
}

function TrustRow({ compact = false }: { compact?: boolean }) {
  const items = [
    { icon: <Star className="h-4 w-4 fill-[var(--sun-deep)] text-[var(--sun-deep)]" />, label: "4.9 (800+ reviews)" },
    { icon: <ShieldCheck className="h-4 w-4 text-mint" />, label: "Insured & Bonded" },
    { icon: <BadgeCheck className="h-4 w-4 text-mint" />, label: "Background-checked" },
    { icon: <CheckCircle2 className="h-4 w-4 text-mint" />, label: "100% Satisfaction" },
  ];
  return (
    <ul className={`flex flex-wrap items-center gap-x-5 gap-y-2 ${compact ? "text-xs" : "text-sm"} text-ink-soft`}>
      {items.map((i) => (
        <li key={i.label} className="flex items-center gap-1.5 font-medium">
          {i.icon}<span>{i.label}</span>
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------ header ------------------------------ */

function Header() {
  const [open, setOpen] = useState(false);
  const nav = [
    ["Services", "#services"],
    ["Pricing", "#quote"],
    ["Why Us", "#why"],
    ["Reviews", "#reviews"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map(([l, h]) => (
            <a key={l} href={h} className="text-sm font-semibold text-ink-soft transition-colors hover:text-mint">
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <a href={PHONE_HREF} className="hidden items-center gap-1.5 text-sm font-bold text-ink sm:inline-flex">
            <Phone className="h-4 w-4 text-mint" /> {PHONE_DISPLAY}
          </a>
          <a href="#quote" className="btn-cta hidden text-sm md:inline-flex">
            Get Instant Quote <ArrowRight className="h-4 w-4" />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white lg:hidden"
            aria-label="Menu"
          >
            <div className="flex flex-col gap-1">
              <span className="h-0.5 w-4 bg-ink" />
              <span className="h-0.5 w-4 bg-ink" />
              <span className="h-0.5 w-4 bg-ink" />
            </div>
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-white lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {nav.map(([l, h]) => (
              <a
                key={l}
                href={h}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-ink hover:bg-mint-soft"
              >
                {l}
              </a>
            ))}
            <a href={PHONE_HREF} className="rounded-lg px-3 py-2.5 text-sm font-bold text-mint">
              <Phone className="mr-1.5 inline h-4 w-4" /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ------------------------------ hero ------------------------------ */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-mint-gradient">
      <div className="bg-sparkle">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:py-20 lg:grid-cols-12 lg:gap-12 lg:px-6 lg:py-24">
          <div className="lg:col-span-7 animate-float-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-xs font-semibold text-mint shadow-sm ring-1 ring-mint/20">
              <Sparkles className="h-3.5 w-3.5" /> Eco-friendly · Pet & kid-safe
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              A spotless home, <span className="relative inline-block">
                <span className="relative z-10 text-mint">booked in 60 seconds.</span>
                <svg className="absolute -bottom-1 left-0 z-0 w-full" height="10" viewBox="0 0 300 10" preserveAspectRatio="none">
                  <path d="M2 6 Q 150 -2 298 6" stroke="var(--sun)" strokeWidth="6" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink-soft">
              Get a transparent online quote in under a minute. Vetted, insured cleaners.
              Every clean backed by our 100% satisfaction guarantee.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href="#quote" className="btn-cta text-base">
                Get My Instant Quote <ArrowRight className="h-5 w-5" />
              </a>
              <a href={PHONE_HREF} className="btn-ghost-ink text-base">
                <Phone className="h-4 w-4 text-mint" /> Call to Book · {PHONE_DISPLAY}
              </a>
            </div>

            <div className="mt-6">
              <TrustRow />
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-30px_rgba(22,48,43,0.35)] ring-1 ring-white/60">
              <img
                src={hero}
                alt="Bright, freshly cleaned modern living room"
                width={1536}
                height={1152}
                className="h-full w-full object-cover"
              />
            </div>
            {/* floating cards */}
            <div className="absolute -left-4 bottom-6 hidden rounded-2xl bg-white p-3 shadow-xl ring-1 ring-border sm:flex sm:items-center sm:gap-3">
              <img src={cleaner} alt="" width={48} height={48} className="h-12 w-12 rounded-xl object-cover" />
              <div className="text-xs">
                <div className="font-bold text-ink">Maya · Lead Cleaner</div>
                <div className="text-ink-soft">Background-checked · 4yrs</div>
              </div>
            </div>
            <div className="absolute -right-3 -top-3 hidden rotate-3 rounded-2xl bg-[var(--sun)] px-4 py-3 text-ink shadow-xl md:block">
              <div className="text-xs font-semibold">Recurring clients save</div>
              <div className="text-2xl font-extrabold leading-none">20% off</div>
            </div>
            <Sparkles className="absolute right-10 top-8 h-8 w-8 text-[var(--sun)] animate-sparkle" />
            <Sparkles className="absolute -bottom-2 right-1/3 h-5 w-5 text-mint animate-sparkle [animation-delay:.6s]" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- quote calculator --------------------------- */

const SERVICE_BASE = { standard: 89, deep: 149, move: 199 } as const;
const FREQ_DISCOUNT = { once: 0, monthly: 0.1, biweekly: 0.15, weekly: 0.2 } as const;
type ServiceKey = keyof typeof SERVICE_BASE;
type FreqKey = keyof typeof FREQ_DISCOUNT;

function QuoteCalculator() {
  const [bedrooms, setBedrooms] = useState(2);
  const [bathrooms, setBathrooms] = useState(2);
  const [service, setService] = useState<ServiceKey>("standard");
  const [freq, setFreq] = useState<FreqKey>("biweekly");

  const { base, total, savings } = useMemo(() => {
    const base = SERVICE_BASE[service] + bedrooms * 18 + bathrooms * 14;
    const total = Math.round(base * (1 - FREQ_DISCOUNT[freq]));
    const savings = Math.round(base - total);
    return { base, total, savings };
  }, [bedrooms, bathrooms, service, freq]);

  const services: { id: ServiceKey; label: string; sub: string; icon: React.ReactNode }[] = [
    { id: "standard", label: "Standard", sub: "Regular upkeep", icon: <Home className="h-4 w-4" /> },
    { id: "deep", label: "Deep Clean", sub: "Top to bottom", icon: <Brush className="h-4 w-4" /> },
    { id: "move", label: "Move In/Out", sub: "Empty home", icon: <Truck className="h-4 w-4" /> },
  ];
  const freqs: { id: FreqKey; label: string; tag?: string }[] = [
    { id: "once", label: "One-time" },
    { id: "monthly", label: "Monthly", tag: "Save 10%" },
    { id: "biweekly", label: "Bi-weekly", tag: "Save 15%" },
    { id: "weekly", label: "Weekly", tag: "Save 20%" },
  ];

  return (
    <section id="quote" className="relative -mt-6 px-4 pb-16 md:-mt-12 md:pb-24 lg:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="card-soft grid gap-0 overflow-hidden lg:grid-cols-5">
          {/* left: form */}
          <div className="p-6 sm:p-8 lg:col-span-3 lg:p-10">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-mint">
              <Sparkles className="h-4 w-4" /> Instant quote · No sign-up
            </div>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              Build your clean. See your price.
            </h2>
            <p className="mt-1 text-sm text-ink-soft">Adjust the details — your estimate updates live.</p>

            {/* steppers */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <Stepper label="Bedrooms" value={bedrooms} setValue={setBedrooms} min={0} max={8} />
              <Stepper label="Bathrooms" value={bathrooms} setValue={setBathrooms} min={1} max={6} />
            </div>

            {/* service */}
            <div className="mt-6">
              <div className="mb-2 text-sm font-semibold text-ink">Service type</div>
              <div className="grid grid-cols-3 gap-2">
                {services.map((s) => {
                  const active = service === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setService(s.id)}
                      className={`group rounded-2xl border p-3 text-left transition-all ${
                        active
                          ? "border-mint bg-mint-soft shadow-[inset_0_0_0_1px_var(--mint)]"
                          : "border-border bg-white hover:border-mint/50"
                      }`}
                    >
                      <div className={`flex h-7 w-7 items-center justify-center rounded-lg ${active ? "bg-mint text-white" : "bg-muted text-ink-soft"}`}>
                        {s.icon}
                      </div>
                      <div className="mt-2 text-sm font-bold text-ink">{s.label}</div>
                      <div className="text-xs text-ink-soft">{s.sub}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* frequency */}
            <div className="mt-6">
              <div className="mb-2 text-sm font-semibold text-ink">Frequency</div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {freqs.map((f) => {
                  const active = freq === f.id;
                  return (
                    <button
                      key={f.id}
                      onClick={() => setFreq(f.id)}
                      className={`relative rounded-2xl border p-3 text-center text-sm font-semibold transition-all ${
                        active ? "border-mint bg-mint text-white" : "border-border bg-white text-ink hover:border-mint/50"
                      }`}
                    >
                      {f.label}
                      {f.tag && (
                        <span className={`mt-1 block text-[11px] font-bold ${active ? "text-white/90" : "text-[var(--sun-deep)]"}`}>
                          {f.tag}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* right: price summary */}
          <div className="relative flex flex-col justify-between bg-[linear-gradient(160deg,var(--ink),#0d2520)] p-6 text-white sm:p-8 lg:col-span-2 lg:p-10">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-mint">Your estimate</div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-5xl font-extrabold tracking-tight">${total}</span>
                {savings > 0 && (
                  <span className="text-sm font-medium text-white/60 line-through">${base}</span>
                )}
              </div>
              {savings > 0 ? (
                <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-[var(--sun)] px-2.5 py-1 text-xs font-bold text-ink">
                  <Sparkles className="h-3 w-3" /> You save ${savings} per clean
                </div>
              ) : (
                <div className="mt-2 text-xs text-white/60">Switch to recurring to save up to 20%.</div>
              )}

              <ul className="mt-6 space-y-2 text-sm text-white/85">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-mint" /> All supplies included</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-mint" /> Same cleaner every visit</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-mint" /> Re-clean free if you're not happy</li>
              </ul>
            </div>

            <a href="#book" className="btn-cta mt-8 w-full justify-center text-base">
              Book This Clean <ArrowRight className="h-5 w-5" />
            </a>
            <div className="mt-3 text-center text-[11px] text-white/60">
              Free quote · No obligation · Reply within 1 hour
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stepper({
  label, value, setValue, min, max,
}: { label: string; value: number; setValue: (n: number) => void; min: number; max: number }) {
  return (
    <div>
      <div className="mb-2 text-sm font-semibold text-ink">{label}</div>
      <div className="flex items-center justify-between rounded-2xl border border-border bg-white p-1">
        <button
          onClick={() => setValue(Math.max(min, value - 1))}
          className="grid h-10 w-10 place-items-center rounded-xl text-ink-soft hover:bg-mint-soft"
          aria-label={`Decrease ${label}`}
        >−</button>
        <div className="text-xl font-extrabold text-ink tabular-nums">{value}</div>
        <button
          onClick={() => setValue(Math.min(max, value + 1))}
          className="grid h-10 w-10 place-items-center rounded-xl text-ink-soft hover:bg-mint-soft"
          aria-label={`Increase ${label}`}
        >+</button>
      </div>
    </div>
  );
}

/* ------------------------------ why ------------------------------ */

function Why() {
  const items = [
    { icon: <ShieldCheck className="h-5 w-5" />, t: "Fully insured & bonded", d: "$2M liability coverage on every job. Your home is protected." },
    { icon: <BadgeCheck className="h-5 w-5" />, t: "Background-checked cleaners", d: "Every team member is vetted, trained, and uniformed." },
    { icon: <CheckCircle2 className="h-5 w-5" />, t: "100% satisfaction guarantee", d: "Not happy? We come back within 24 hours and re-clean free." },
    { icon: <Leaf className="h-5 w-5" />, t: "Eco, pet & kid-safe", d: "Non-toxic, plant-based products that smell as fresh as they clean." },
  ];
  return (
    <section id="why" className="px-4 py-16 md:py-24 lg:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-mint">Why FreshNest</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            You're letting someone into your home. We don't take that lightly.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => (
            <div key={i.t} className="card-soft p-6 transition-transform hover:-translate-y-1">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-mint-soft text-mint">{i.icon}</div>
              <div className="mt-4 text-base font-bold text-ink">{i.t}</div>
              <div className="mt-1.5 text-sm text-ink-soft">{i.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ services ------------------------------ */

function Services() {
  const items = [
    { icon: <Home className="h-5 w-5" />, t: "Standard Home Cleaning", d: "Weekly upkeep that keeps your home consistently fresh.", price: 89 },
    { icon: <Brush className="h-5 w-5" />, t: "Deep Cleaning", d: "Top-to-bottom reset — baseboards, grout, the works.", price: 149 },
    { icon: <Truck className="h-5 w-5" />, t: "Move In / Move Out", d: "Empty-home deep clean ready for keys or inspection.", price: 199 },
    { icon: <Building2 className="h-5 w-5" />, t: "Office / Commercial", d: "After-hours cleaning for offices, retail, and studios.", price: 0 },
  ];
  const addons = ["Inside fridge", "Inside oven", "Inside windows", "Laundry & fold", "Cabinet interiors"];
  return (
    <section id="services" className="bg-white px-4 py-16 md:py-24 lg:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-mint">Services</span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Pick the clean that fits your week.
            </h2>
          </div>
          <a href="#quote" className="text-sm font-bold text-mint hover:underline">See live pricing →</a>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s) => (
            <article key={s.t} className="card-soft group relative flex flex-col p-6 transition-all hover:-translate-y-1 hover:border-mint">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-mint text-white shadow-[0_8px_18px_-8px_var(--mint)]">{s.icon}</div>
              <h3 className="mt-4 text-lg font-extrabold text-ink">{s.t}</h3>
              <p className="mt-1 text-sm text-ink-soft">{s.d}</p>
              <div className="mt-5 flex items-end justify-between">
                <div>
                  {s.price > 0 ? (
                    <>
                      <div className="text-[11px] font-semibold uppercase text-ink-soft">From</div>
                      <div className="text-2xl font-extrabold text-ink">${s.price}</div>
                    </>
                  ) : (
                    <div className="text-sm font-bold text-ink">Custom quote</div>
                  )}
                </div>
                <a href="#quote" className="inline-flex items-center gap-1 text-sm font-bold text-mint">
                  Book <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3 rounded-2xl bg-mint-soft p-5">
          <span className="text-sm font-bold text-ink">Popular add-ons:</span>
          {addons.map((a) => (
            <span key={a} className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-ink shadow-sm ring-1 ring-mint/20">
              + {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ how it works ------------------------------ */

function HowItWorks() {
  const steps = [
    { icon: <Sparkles className="h-5 w-5" />, t: "Get your instant quote", d: "Tell us a few details. See your price in seconds." },
    { icon: <CalendarCheck className="h-5 w-5" />, t: "Pick a date", d: "Choose a time that fits your week — even tomorrow." },
    { icon: <Home className="h-5 w-5" />, t: "Relax, we clean", d: "Our vetted team shows up on time and gets to work." },
  ];
  return (
    <section className="bg-mint-gradient px-4 py-16 md:py-24 lg:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-mint">How it works</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Effortless from quote to clean.
          </h2>
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.t} className="relative">
              <div className="card-soft h-full p-6 text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-mint text-white shadow-[0_10px_20px_-10px_var(--mint)]">
                  {s.icon}
                </div>
                <div className="mt-4 text-xs font-bold uppercase tracking-wider text-ink-soft">Step {i + 1}</div>
                <div className="mt-1 text-lg font-extrabold text-ink">{s.t}</div>
                <p className="mt-1.5 text-sm text-ink-soft">{s.d}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-mint md:block" />
              )}
            </li>
          ))}
        </ol>
        <div className="mt-10 text-center">
          <a href="#quote" className="btn-cta">Get My Instant Quote <ArrowRight className="h-5 w-5" /></a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ before/after ------------------------------ */

const pairs = [
  { before: beforeKitchen, after: afterKitchen, room: "Kitchen", service: "Deep Clean" },
  { before: beforeBath, after: afterBath, room: "Master Bathroom", service: "Standard Clean" },
];

function BeforeAfter() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="px-4 py-16 md:py-24 lg:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-mint">Real results</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Before & after — from actual FreshNest visits.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {pairs.map((p, i) => (
            <button
              key={p.room}
              onClick={() => setOpen(i)}
              className="card-soft group overflow-hidden text-left transition-transform hover:-translate-y-1"
            >
              <div className="grid grid-cols-2 gap-px bg-border">
                <div className="relative">
                  <img src={p.before} alt={`${p.room} before`} loading="lazy" width={1024} height={1024} className="aspect-square w-full object-cover" />
                  <span className="absolute left-3 top-3 rounded-full bg-ink/85 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white">Before</span>
                </div>
                <div className="relative">
                  <img src={p.after} alt={`${p.room} after`} loading="lazy" width={1024} height={1024} className="aspect-square w-full object-cover" />
                  <span className="absolute left-3 top-3 rounded-full bg-mint px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white">After</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-5">
                <div>
                  <div className="text-base font-bold text-ink">{p.room}</div>
                  <div className="text-sm text-ink-soft">{p.service}</div>
                </div>
                <span className="text-sm font-bold text-mint">Tap to enlarge →</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4"
          onClick={() => setOpen(null)}
        >
          <button className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white text-ink" aria-label="Close">
            <X className="h-5 w-5" />
          </button>
          <div className="grid w-full max-w-5xl grid-cols-1 gap-2 sm:grid-cols-2">
            <img src={pairs[open].before} alt="" className="w-full rounded-2xl" />
            <img src={pairs[open].after} alt="" className="w-full rounded-2xl" />
          </div>
        </div>
      )}
    </section>
  );
}

/* ------------------------------ reviews ------------------------------ */

const reviews = [
  { name: "Jenna R.", neighborhood: "Noe Valley", text: "Booked Friday night, cleaned Saturday morning. House felt brand new. The team even folded the throw blankets.", rating: 5 },
  { name: "Marcus T.", neighborhood: "Mission Bay", text: "I've tried four cleaning services in SF. FreshNest is the only one I've kept on a weekly recurring plan. Worth every dollar.", rating: 5 },
  { name: "Priya S.", neighborhood: "Hayes Valley", text: "Move-out clean got our full deposit back. Landlord literally said 'this looks better than when you moved in.'", rating: 5 },
  { name: "Daniel K.", neighborhood: "SoMa office", text: "Reliable, professional, and our office actually smells nice on Monday mornings. Highly recommend for commercial.", rating: 5 },
];

function Reviews() {
  const [i, setI] = useState(0);
  const r = reviews[i];
  return (
    <section id="reviews" className="bg-white px-4 py-16 md:py-24 lg:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-wider text-mint">Loved by locals</span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              5,000+ homes cleaned. 4.9★ average.
            </h2>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="card-soft flex items-center gap-3 px-4 py-3">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-white shadow ring-1 ring-border text-xs font-extrabold">
                  G
                </div>
                <div>
                  <div className="text-sm font-bold text-ink">Google 4.9 ★</div>
                  <div className="text-xs text-ink-soft">820+ verified reviews</div>
                </div>
              </div>
              <div className="card-soft px-4 py-3">
                <div className="text-sm font-bold text-ink">5,000+ homes</div>
                <div className="text-xs text-ink-soft">cleaned since 2019</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="card-soft relative p-7 sm:p-9">
              <div className="flex items-center gap-1 text-[var(--sun-deep)]">
                {Array.from({ length: r.rating }).map((_, n) => <Star key={n} className="h-5 w-5 fill-current" />)}
              </div>
              <p className="mt-4 text-xl font-semibold leading-snug text-ink sm:text-2xl">
                "{r.text}"
              </p>
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-ink">{r.name}</div>
                  <div className="text-xs text-ink-soft">{r.neighborhood}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setI((i - 1 + reviews.length) % reviews.length)}
                    className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white hover:border-mint"
                    aria-label="Previous"
                  ><ChevronLeft className="h-4 w-4" /></button>
                  <button
                    onClick={() => setI((i + 1) % reviews.length)}
                    className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white hover:border-mint"
                    aria-label="Next"
                  ><ChevronRight className="h-4 w-4" /></button>
                </div>
              </div>
            </div>
            <div className="mt-3 flex gap-1.5">
              {reviews.map((_, n) => (
                <button
                  key={n}
                  onClick={() => setI(n)}
                  className={`h-1.5 rounded-full transition-all ${n === i ? "w-8 bg-mint" : "w-3 bg-border"}`}
                  aria-label={`Review ${n + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ service area ------------------------------ */

function ServiceArea() {
  const hoods = ["Noe Valley", "Mission", "Hayes Valley", "SoMa", "Pacific Heights", "Marina", "Sunset", "Richmond", "Potrero Hill", "Bernal Heights"];
  return (
    <section className="bg-mint-gradient px-4 py-16 md:py-24 lg:px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-mint">Service area</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Proudly serving San Francisco & the Bay Area.
          </h2>
          <p className="mt-3 text-ink-soft">Same friendly team, every visit. If you're near one of these neighborhoods, we've got you.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {hoods.map((h) => (
              <span key={h} className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-ink shadow-sm ring-1 ring-mint/15">
                <MapPin className="h-3.5 w-3.5 text-mint" /> {h}
              </span>
            ))}
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-white/60 shadow-[0_30px_60px_-30px_rgba(22,48,43,0.35)]">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#e7f6f1,#cfe8f5)]" />
          {/* fake map lines */}
          <svg className="absolute inset-0 h-full w-full opacity-60" viewBox="0 0 400 300" fill="none">
            <path d="M0 80 Q120 40 220 110 T400 90" stroke="white" strokeWidth="3" />
            <path d="M0 180 Q140 140 240 210 T400 200" stroke="white" strokeWidth="3" />
            <path d="M60 0 Q90 120 180 160 T300 300" stroke="white" strokeWidth="3" />
            <path d="M260 0 Q220 100 300 180 T400 260" stroke="white" strokeWidth="3" />
          </svg>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="mx-auto grid h-14 w-14 animate-pulse place-items-center rounded-full bg-mint text-white shadow-xl">
              <MapPin className="h-6 w-6" />
            </div>
            <div className="mt-2 rounded-full bg-white px-3 py-1 text-xs font-bold text-ink shadow">FreshNest HQ · SF</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ booking form ------------------------------ */

function BookingForm() {
  const [sent, setSent] = useState(false);
  return (
    <section id="book" className="px-4 py-16 md:py-24 lg:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="card-soft grid overflow-hidden lg:grid-cols-5">
          {/* form */}
          <div className="p-7 sm:p-10 lg:col-span-3">
            <span className="text-xs font-bold uppercase tracking-wider text-mint">Book your clean</span>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              Tell us where & when. We'll handle the rest.
            </h2>
            {sent ? (
              <div className="mt-6 rounded-2xl bg-mint-soft p-6 text-ink">
                <CheckCircle2 className="h-6 w-6 text-mint" />
                <div className="mt-2 text-lg font-extrabold">You're on the schedule.</div>
                <p className="text-sm text-ink-soft">We'll text you a confirmation within the hour. Demo form — no data was sent.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="mt-6 grid gap-4 sm:grid-cols-2"
              >
                <Field label="Your name" name="name" placeholder="Alex Rivera" />
                <Field label="Phone" name="phone" type="tel" placeholder="(415) 555-0188" />
                <Field label="Email" name="email" type="email" placeholder="alex@email.com" />
                <Field label="ZIP / Address" name="zip" placeholder="94114" />
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-semibold text-ink">Service type</label>
                  <select className="w-full rounded-2xl border border-input bg-white px-4 py-3 text-sm text-ink outline-none transition-all focus:border-mint focus:ring-4 focus:ring-mint/15">
                    <option>Standard Home Cleaning</option>
                    <option>Deep Cleaning</option>
                    <option>Move In / Move Out</option>
                    <option>Office / Commercial</option>
                  </select>
                </div>
                <button type="submit" className="btn-cta sm:col-span-2 mt-2 justify-center text-base">
                  Book My Cleaning <ArrowRight className="h-5 w-5" />
                </button>
                <div className="sm:col-span-2 text-center text-xs text-ink-soft">
                  Free quote · No obligation · Reply within 1 hour
                </div>
              </form>
            )}
          </div>

          {/* reassurance */}
          <aside className="bg-[linear-gradient(160deg,var(--mint-soft),white)] p-7 sm:p-10 lg:col-span-2">
            <div className="flex items-center gap-1 text-[var(--sun-deep)]">
              {Array.from({ length: 5 }).map((_, n) => <Star key={n} className="h-4 w-4 fill-current" />)}
              <span className="ml-1 text-xs font-bold text-ink">4.9 · 820+ reviews</span>
            </div>
            <p className="mt-4 text-base font-semibold leading-snug text-ink">
              "Booked Friday night, cleaned Saturday morning. House felt brand new."
            </p>
            <div className="mt-2 text-xs font-semibold text-ink-soft">— Jenna R., Noe Valley</div>

            <hr className="my-6 border-mint/20" />

            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-mint" /><span className="text-ink"><b>Insured & Bonded</b> — $2M coverage.</span></li>
              <li className="flex items-start gap-2"><BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-mint" /><span className="text-ink"><b>Background-checked</b> cleaners.</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-mint" /><span className="text-ink"><b>100% Satisfaction</b> — re-clean free.</span></li>
              <li className="flex items-start gap-2"><Leaf className="mt-0.5 h-4 w-4 shrink-0 text-mint" /><span className="text-ink"><b>Eco, pet & kid-safe</b> products.</span></li>
            </ul>

            <a href={PHONE_HREF} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-ink hover:text-mint">
              <Phone className="h-4 w-4 text-mint" /> Prefer to call? {PHONE_DISPLAY}
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-ink">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-2xl border border-input bg-white px-4 py-3 text-sm text-ink outline-none transition-all placeholder:text-ink-soft/60 focus:border-mint focus:ring-4 focus:ring-mint/15"
      />
    </div>
  );
}

/* ------------------------------ footer ------------------------------ */

function Footer() {
  return (
    <footer id="contact" className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-mint text-white">
                <Sparkles className="h-5 w-5" />
              </span>
              <span className="text-lg font-extrabold tracking-tight">FreshNest<span className="text-mint">.</span></span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/70">
              A spotless home, booked in 60 seconds. Vetted, insured cleaners across the Bay Area —
              every visit backed by our 100% satisfaction guarantee.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#quote" className="btn-cta text-sm">Get My Quote <ArrowRight className="h-4 w-4" /></a>
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-bold text-white hover:border-mint hover:text-mint">
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-7 lg:grid-cols-3">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-mint">Contact</div>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
                <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-mint" /><a href={PHONE_HREF} className="hover:text-white">{PHONE_DISPLAY}</a></li>
                <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-mint" /><a href="mailto:hello@freshnest.co" className="hover:text-white">hello@freshnest.co</a></li>
                <li className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 text-mint" /><span>Mon–Sat · 7am–7pm</span></li>
                <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-mint" /><span>San Francisco & Bay Area</span></li>
              </ul>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-mint">Services</div>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li><a href="#services" className="hover:text-white">Standard cleaning</a></li>
                <li><a href="#services" className="hover:text-white">Deep cleaning</a></li>
                <li><a href="#services" className="hover:text-white">Move in/out</a></li>
                <li><a href="#services" className="hover:text-white">Office & commercial</a></li>
              </ul>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-mint">Our promise</div>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-mint" /> Insured & Bonded</li>
                <li className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-mint" /> Background-checked</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-mint" /> 100% Satisfaction</li>
                <li className="flex items-center gap-2"><Leaf className="h-4 w-4 text-mint" /> Eco-friendly</li>
              </ul>
              <div className="mt-5 flex gap-3">
                <a href="#" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-mint" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
                <a href="#" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-mint" aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} FreshNest Cleaning Co. All rights reserved.</div>
          <div>Made with care in San Francisco · 100% satisfaction guaranteed.</div>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------ mobile sticky bar ------------------------------ */

function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-border bg-white/95 p-3 shadow-[0_-10px_30px_-15px_rgba(22,48,43,0.25)] backdrop-blur lg:hidden">
      <a href="#quote" className="btn-cta justify-center !py-3 text-sm">Get a Quote</a>
      <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 rounded-full bg-mint px-4 py-3 text-sm font-bold text-white">
        <Phone className="h-4 w-4" /> Call Now
      </a>
    </div>
  );
}

/* ------------------------------ page ------------------------------ */

function Index() {
  return (
    <div className="min-h-screen pb-20 lg:pb-0">
      <Header />
      <main>
        <Hero />
        <QuoteCalculator />
        <Why />
        <Services />
        <HowItWorks />
        <BeforeAfter />
        <Reviews />
        <ServiceArea />
        <BookingForm />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}
