import { useState } from "react";
import { ArrowRight, Menu, X, Phone, Mail, CheckCircle2 } from "lucide-react";

const JOBBER_BOOKING_URL =
  "https://clienthub.getjobber.com/hubs/b0a4965a-f82a-458a-8803-cb6c2b747614/public/requests/2759676/new";

const pricing = [
  {
    name: "One-Time",
    badge: "Try it first",
    prices: ["1 bin — $30", "2 bins — $45", "3 bins — $55", "+$10 each after"],
  },
  {
    name: "Quarterly",
    badge: "Most popular",
    highlight: true,
    prices: ["1 bin — $22", "2 bins — $40", "3 bins — $50", "+$10 each after"],
  },
  {
    name: "Bi-Monthly",
    badge: "More upkeep",
    prices: ["1 bin — $20", "2 bins — $36", "3 bins — $46", "+$9 each after"],
  },
  {
    name: "Monthly",
    badge: "Heavy use",
    prices: ["1 bin — $18", "2 bins — $32", "3 bins — $42", "+$8 each after"],
  },
];

const faqs = [
  {
    q: "Do I need to be home?",
    a: "No. As long as your bins are accessible after pickup, we handle everything.",
  },
  {
    q: "When do you clean?",
    a: "After your trash pickup, usually between 12 PM and sundown.",
  },
  {
    q: "Do you bring water and power?",
    a: "Yes. We bring everything — you don't need to do anything.",
  },
  {
    q: "What happens to the dirty water?",
    a: "We capture all wastewater. Nothing gets left in the street or near drains.",
  },
];

const beforeAfterPairs = [
  { before: "/photos/before1.jpg", after: "/photos/after1.jpg", label: "Same gray bin — rust & grime gone" },
  { before: "/photos/before2.jpg", after: "/photos/after2.jpg", label: "Same blue bin — buildup removed" },
  { before: "/photos/before3.jpg", after: "/photos/after3.jpg", label: "Same gray bin — moss & debris cleared" },
];

function BeforeAfter({ before, after, label }) {
  const [showAfter, setShowAfter] = useState(false);
  return (
    <div className="rounded-3xl overflow-hidden border border-white/10 bg-zinc-900">
      <div className="relative aspect-square">
        <img
          src={showAfter ? after : before}
          alt={showAfter ? "After cleaning" : "Before cleaning"}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
        <div className="absolute top-3 left-3">
          <span className={`text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full ${showAfter ? "bg-lime-400 text-zinc-950" : "bg-zinc-950/80 text-zinc-300"}`}>
            {showAfter ? "After" : "Before"}
          </span>
        </div>
      </div>
      <div className="p-4 flex items-center justify-between gap-3">
        <span className="text-sm text-zinc-400">{label}</span>
        <button
          onClick={() => setShowAfter(!showAfter)}
          className={`shrink-0 text-xs font-bold px-4 py-2 rounded-full transition ${showAfter ? "bg-zinc-700 text-white" : "bg-lime-400 text-zinc-950"}`}
        >
          {showAfter ? "See Before" : "See After"}
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div>
            <div className="text-xl font-black tracking-tight">BinBoyz</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">Merced & Atwater, CA</div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7 text-sm text-zinc-400">
            <a href="#results" className="hover:text-white transition">Results</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={JOBBER_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-lime-400 px-4 py-2 text-sm font-bold text-zinc-950 hover:-translate-y-0.5 transition"
            >
              Book Now
            </a>
            {/* Hamburger */}
            <button
              className="md:hidden p-2 text-zinc-400 hover:text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/10 bg-zinc-950 px-5 pb-5 pt-3 flex flex-col gap-4">
            {["#results", "#pricing", "#faq", "#contact"].map((href) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-semibold text-zinc-300 hover:text-white capitalize"
              >
                {href.replace("#", "")}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>
        {/* ── HERO ── */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(163,230,53,0.12),transparent_60%)] pointer-events-none" />
          <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28 text-center">
            <span className="inline-block rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-lime-300 mb-6">
              Hot water · Sanitized · Fresh finish
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-3xl mx-auto">
              Trash Bin Cleaning in<br />
              <span className="text-lime-300">Merced & Atwater</span>
            </h1>
            <p className="mt-5 text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed">
              We clean your bins after pickup using hot water and sanitizing treatment. You don't lift a finger.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={JOBBER_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-lime-400 px-7 py-3.5 font-black text-zinc-950 hover:-translate-y-0.5 transition text-base"
              >
                Book My Cleaning <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white hover:bg-white/10 transition text-base"
              >
                See Pricing
              </a>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm text-zinc-400">
              {["We bring our own water & power", "Wastewater fully captured", "No appointment needed"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime-400 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="border-y border-white/10 bg-zinc-900/50">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="text-2xl font-black text-center mb-10">How it works</h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { step: "1", title: "Book online", body: "Pick your plan and submit your request. Takes 2 minutes." },
                { step: "2", title: "We show up after pickup", body: "We clean your bins the same day trash is collected — no scheduling back and forth." },
                { step: "3", title: "Bins are done", body: "Hot water wash, sanitizing treatment, fresh finish. We send you confirmation when it's done." },
              ].map(({ step, title, body }) => (
                <div key={step} className="rounded-3xl border border-white/10 bg-zinc-950 p-6">
                  <div className="h-10 w-10 rounded-2xl bg-lime-400 flex items-center justify-center text-zinc-950 font-black text-lg mb-4">{step}</div>
                  <div className="font-black text-lg mb-2">{title}</div>
                  <div className="text-zinc-400 text-sm leading-6">{body}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BEFORE & AFTER ── */}
        <section id="results" className="mx-auto max-w-6xl px-5 py-20">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-lime-300 mb-2">Real results</p>
            <h2 className="text-3xl font-black">Before & After</h2>
            <p className="mt-3 text-zinc-400 text-sm">Tap each photo to see the difference.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {beforeAfterPairs.map((pair) => (
              <BeforeAfter key={pair.label} {...pair} />
            ))}
          </div>
        </section>

        {/* ── PRICING ── */}
        <section id="pricing" className="bg-zinc-900/50 border-y border-white/10">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="text-center mb-10">
              <p className="text-xs font-bold uppercase tracking-widest text-lime-300 mb-2">Pricing</p>
              <h2 className="text-3xl font-black">Simple, flat pricing</h2>
              <p className="mt-3 text-zinc-400 text-sm max-w-md mx-auto">Most homes go quarterly. Move up if your bins get nasty faster.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {pricing.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-3xl p-6 flex flex-col ${plan.highlight ? "bg-lime-400 text-zinc-950" : "border border-white/10 bg-zinc-950"}`}
                >
                  <div className={`text-xs font-bold uppercase tracking-widest mb-1 ${plan.highlight ? "text-zinc-800" : "text-lime-300"}`}>{plan.badge}</div>
                  <div className="text-2xl font-black mb-4">{plan.name}</div>
                  <div className="space-y-2 flex-1">
                    {plan.prices.map((p) => (
                      <div key={p} className={`text-sm rounded-xl px-3 py-2 ${plan.highlight ? "bg-zinc-950/10 text-zinc-900" : "bg-white/5 text-zinc-200"}`}>{p}</div>
                    ))}
                  </div>
                  <a
                    href={JOBBER_BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-5 inline-flex items-center justify-center gap-1 rounded-xl px-4 py-2.5 text-sm font-bold transition hover:-translate-y-0.5 ${plan.highlight ? "bg-zinc-950 text-white" : "bg-white text-zinc-950"}`}
                  >
                    Book This <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="mx-auto max-w-3xl px-5 py-20">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-lime-300 mb-2">FAQ</p>
            <h2 className="text-3xl font-black">Quick answers</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((item) => (
              <details key={item.q} className="group rounded-2xl border border-white/10 bg-zinc-900 px-6 py-4 cursor-pointer">
                <summary className="list-none font-bold text-white flex justify-between items-center">
                  {item.q}
                  <span className="text-lime-400 text-xl leading-none group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-zinc-400 text-sm leading-6">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="bg-lime-400">
          <div className="mx-auto max-w-6xl px-5 py-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-950">Ready for clean bins?</h2>
            <p className="mt-3 text-zinc-800 text-base max-w-md mx-auto">Book online in 2 minutes. We handle the rest.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={JOBBER_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-zinc-950 px-7 py-3.5 font-black text-white hover:-translate-y-0.5 transition"
              >
                Book My Cleaning <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="tel:2096765866"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-zinc-950/20 px-7 py-3.5 font-bold text-zinc-950 hover:bg-zinc-950/10 transition"
              >
                <Phone className="h-4 w-4" /> (209) 676-5866
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer id="contact" className="border-t border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-5 py-10 grid sm:grid-cols-3 gap-8">
          <div>
            <div className="text-lg font-black">BinBoyz</div>
            <p className="mt-2 text-sm text-zinc-500 leading-6">Local trash bin cleaning for Merced and Atwater homeowners.</p>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3">Service Area</div>
            <div className="text-sm text-zinc-300 space-y-1">
              <div>Merced, CA</div>
              <div>Atwater, CA</div>
            </div>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3">Contact</div>
            <div className="space-y-2">
              <a href="tel:2096765866" className="flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition">
                <Phone className="h-3.5 w-3.5 text-lime-400" /> (209) 676-5866
              </a>
              <a href="mailto:info@binboyz.net" className="flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition">
                <Mail className="h-3.5 w-3.5 text-lime-400" /> info@binboyz.net
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
