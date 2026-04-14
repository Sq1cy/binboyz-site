import React, { useState } from "react";
import {
  ArrowRight,
  Bug,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Droplets,
  Mail,
  Phone,
  ShieldCheck,
  Trash2,
} from "lucide-react";
import "./index.css";

// ─── JOBBER BOOKING LINK ──────────────────────────────────────────────────────
const JOBBER_BOOKING_URL = "https://clienthub.getjobber.com/hubs/b0a4965a-f82a-458a-8803-cb6c2b747614/public/requests/2759675/new";
// ─────────────────────────────────────────────────────────────────────────────

const pricing = [
  {
    name: "One-Time Clean",
    badge: "Start here",
    subtitle: "Best if you want to try the service first or reset a nasty bin.",
    prices: ["1 bin — $30", "2 bins — $45", "3 bins — $55", "Additional bins — $10 each"],
  },
  {
    name: "Quarterly",
    badge: "Best for most homes",
    subtitle: "A great fit for many households that just want bins cleaned out on a regular schedule.",
    prices: ["1 bin — $22", "2 bins — $40", "3 bins — $50", "Additional bins — $10 each"],
  },
  {
    name: "Bi-Monthly",
    badge: "More frequent upkeep",
    subtitle: "Good for homes that want a little more consistency without going monthly.",
    prices: ["1 bin — $20", "2 bins — $36", "3 bins — $46", "Additional bins — $9 each"],
  },
  {
    name: "Monthly",
    badge: "Heavy-use homes",
    subtitle: "Best for larger families, hotter months, diapers, pet waste, and stronger odor problems.",
    prices: ["1 bin — $18", "2 bins — $32", "3 bins — $42", "Additional bins — $8 each"],
  },
];

const faqs = [
  {
    q: "Do I need to be home?",
    a: "Usually no. As long as your bins are accessible and reasonably empty after pickup, we can usually take care of the service without you being there.",
  },
  {
    q: "When do you clean the bins?",
    a: "Most service happens after trash pickup, usually between 12 PM and sundown.",
  },
  {
    q: "Do you bring your own water and power?",
    a: "Yes. BinBoyz brings its own water and power, so the process stays easy for homeowners.",
  },
  {
    q: "What happens to the dirty water?",
    a: "We capture and contain wastewater instead of leaving nasty runoff in the street or near storm drains.",
  },
  {
    q: "Which plan is best for most homes?",
    a: "For a lot of homes, quarterly is the best value and the most realistic fit. If your bins get nasty faster, bi-monthly or monthly may make more sense.",
  },
  {
    q: "Can dirty bins attract pests?",
    a: "Yes. Dirty bins can attract flies, maggots, rodents, raccoons, and other pests looking for food residue and odor.",
  },
];

const pickupDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const galleryCards = [
  { title: "Gray bin reset", subtitle: "Strong first proof pair" },
  { title: "Blue bin cleanup", subtitle: "A clean, obvious transformation" },
  { title: "Sludge cleanup", subtitle: "Great for showing the grime problem" },
  { title: "Heavy buildup cleanup", subtitle: "Best dramatic lower-page proof pair" },
];

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-lime-300">
      {children}
    </span>
  );
}

function SectionTitle({ eyebrow, title, body }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-300">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">{title}</h2>
      {body ? <p className="mt-5 text-lg leading-8 text-zinc-300">{body}</p> : null}
    </div>
  );
}

function DayChip({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-4 py-3 text-sm font-bold transition ${
        active
          ? "bg-lime-400 text-zinc-950 shadow-lg shadow-lime-400/20"
          : "border border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10"
      }`}
    >
      {children}
    </button>
  );
}

function BeforeAfterMock() {
  const [activePair, setActivePair] = useState(0);
  const [position, setPosition] = useState(50);
  const active = galleryCards[activePair];
  return (
    <div className="rounded-[2rem] border border-white/10 bg-zinc-950 p-4 shadow-2xl">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div>
          <div className="text-lg font-black">Before & After Slider</div>
          <div className="text-sm text-zinc-400">Swipe through real cleanups</div>
        </div>
        <Pill>Interactive</Pill>
      </div>
      <div className="mb-4 flex flex-wrap gap-2">
        {galleryCards.map((card, index) => (
          <button
            key={card.title}
            type="button"
            onClick={() => setActivePair(index)}
            className={`rounded-full px-3 py-2 text-xs font-bold transition ${
              index === activePair
                ? "bg-lime-400 text-zinc-950"
                : "border border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10"
            }`}
          >
            {card.title}
          </button>
        ))}
      </div>
      <div className="mb-3 rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="text-sm font-bold text-white">{active.title}</div>
        <div className="mt-1 text-xs text-zinc-400">{active.subtitle}</div>
      </div>
      <div className="relative aspect-[5/4] overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-900">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#1f2937,#0f172a)]" />
        <div
          className="absolute inset-y-0 left-0 bg-[linear-gradient(135deg,#84cc16,#1a2e05)]"
          style={{ width: `${position}%` }}
        />
        <div className="absolute inset-0 flex items-start justify-between p-4 text-xs font-bold uppercase tracking-[0.2em]">
          <span className="rounded-full bg-black/40 px-3 py-1 text-zinc-300">Before</span>
          <span className="rounded-full bg-lime-400/90 px-3 py-1 text-zinc-950">After</span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center text-sm text-zinc-300">
          Real photo slider goes here for this cleanup pair
        </div>
        <div className="absolute bottom-0 top-0 w-1 bg-white/80" style={{ left: `${position}%` }} />
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className="mt-4 w-full accent-lime-400"
      />
    </div>
  );
}

export default function BinBoyzWebsite() {
  const [selectedDay, setSelectedDay] = useState("Thursday");

  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <div className="text-2xl font-black tracking-tight">BinBoyz</div>
            <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Trash Bin Cleaning • Merced & Atwater</div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
            <a href="#pricing" className="transition hover:text-white">Pricing</a>
            <a href="#route" className="transition hover:text-white">Find Your Route</a>
            <a href="#faq" className="transition hover:text-white">FAQ</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
          <a
            href={JOBBER_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-lime-400 px-4 py-2 text-sm font-bold text-zinc-950 transition hover:-translate-y-0.5"
          >
            Book Now
          </a>
        </div>
      </header>

      <main>
        {/* ── HERO ── */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(163,230,53,0.16),transparent_35%)]" />
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
            <div className="relative z-10">
              <Pill>Hot water • Sanitizing treatment • Fresh finish</Pill>
              <h1 className="mt-5 max-w-3xl text-5xl font-black tracking-tight sm:text-6xl">
                Trash Bin Cleaning in <span className="text-lime-300">Merced & Atwater</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                Dirty bins can quietly attract flies, maggots, rodents, raccoons, and grime around the part of the home you touch every week.
                BinBoyz cleans them the right way so you do not have to deal with the mess yourself.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={JOBBER_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-lime-400 px-6 py-3 text-center font-bold text-zinc-950 transition hover:-translate-y-0.5"
                >
                  Book My Cleaning
                </a>
                <a href="#route" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10">
                  What Day Is Your Trash Pickup?
                </a>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  [Bug, "Dirty bins can attract pests and bugs faster than most people realize"],
                  [Trash2, "You should not have to scrub out a nasty bin yourself"],
                  [ShieldCheck, "Dirty water is captured instead of being left in the street"],
                  [Droplets, "Hot water pressure washing plus sanitizing treatment and fresh finish"],
                ].map(([Icon, label]) => (
                  <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-lg">
                    <Icon className="mb-3 h-5 w-5 text-lime-300" />
                    <div className="text-sm font-medium text-zinc-200">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative z-10 space-y-5">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <div className="text-lg font-black">Before & After Proof</div>
                    <div className="text-sm text-zinc-400">Real proof. Real results.</div>
                  </div>
                  <Pill>Hero pair</Pill>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-zinc-900 p-4">
                    <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Before</div>
                    <div className="flex aspect-[4/5] items-center justify-center rounded-2xl border border-dashed border-white/15 bg-zinc-950 text-center text-sm text-zinc-500">
                      Your best before photo goes here
                    </div>
                  </div>
                  <div className="rounded-3xl border border-lime-400/30 bg-lime-400/10 p-4">
                    <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-lime-300">After</div>
                    <div className="flex aspect-[4/5] items-center justify-center rounded-2xl border border-dashed border-lime-300/30 bg-zinc-950/80 text-center text-sm text-zinc-300">
                      Matching after photo goes here
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-5 shadow-xl">
                <div className="flex items-start gap-3">
                  <Clock3 className="mt-1 h-5 w-5 text-lime-300" />
                  <p className="text-base leading-7 text-zinc-300">
                    Most service happens after trash pickup, usually between <span className="font-bold text-white">12 PM and sundown</span>. You do not choose a custom appointment time — you choose the route that fits your pickup schedule best.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY IT MATTERS ── */}
        <section className="border-y border-white/10 bg-zinc-900/70">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <SectionTitle
              eyebrow="Why it matters"
              title="What dirty bins can do without you realizing it"
              body="For a lot of homeowners, the issue is not just smell. Dirty bins can quietly bring pests closer to the house, leave grime on the places you touch, and make the side of the home feel dirtier than it should."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Attract flies and maggots",
                "Pull in raccoons and other pests",
                "Leave grime where you grab lids and handles",
                "Turn a simple chore into a nasty mess",
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-5 text-zinc-200 shadow-lg">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ROUTE FINDER ── */}
        <section id="route" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <SectionTitle
                eyebrow="Find your route"
                title="What day is your trash pickup?"
                body="Pick your normal trash pickup day. We'll clean your bins after pickup, usually between 12 PM and sundown."
              />
              <div className="mt-8 flex flex-wrap gap-3">
                {pickupDays.map((day) => (
                  <DayChip key={day} active={selectedDay === day} onClick={() => setSelectedDay(day)}>
                    {day}
                  </DayChip>
                ))}
              </div>
              <div className="mt-6 rounded-[2rem] border border-white/10 bg-zinc-900 p-5">
                <div className="flex items-start gap-3">
                  <CalendarDays className="mt-1 h-5 w-5 text-lime-300" />
                  <p className="text-zinc-300">
                    Once you book, we use your address and pickup day to place you on the right route. We'll confirm the service window after booking.
                  </p>
                </div>
              </div>
              <a
                href={JOBBER_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-lime-400 px-6 py-3 font-bold text-zinc-950 transition hover:-translate-y-0.5"
              >
                Book My {selectedDay} Route <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="space-y-6">
              <BeforeAfterMock />
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl">
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-lime-300">Service area</div>
                <h3 className="mt-3 text-2xl font-black">Merced and Atwater only</h3>
                <p className="mt-4 leading-7 text-zinc-300">
                  We keep the service area tight so routes stay cleaner, timing stays smoother, and customers are easier to take care of.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section id="pricing" className="bg-zinc-900/70">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <SectionTitle
              eyebrow="Pricing"
              title="Simple plans that match how your home actually uses the bins"
              body="Most homes are great on quarterly. If your bins get nasty faster, move up to bi-monthly or monthly."
            />
            <div className="mt-10 grid gap-6 xl:grid-cols-4">
              {pricing.map((plan) => (
                <div key={plan.name} className="rounded-3xl border border-white/10 bg-zinc-950 p-6 shadow-2xl">
                  <Pill>{plan.badge}</Pill>
                  <h3 className="mt-4 text-2xl font-black">{plan.name}</h3>
                  <p className="mt-2 min-h-[72px] text-sm leading-6 text-zinc-400">{plan.subtitle}</p>
                  <div className="mt-5 space-y-3">
                    {plan.prices.map((price) => (
                      <div key={price} className="rounded-2xl bg-white/5 px-4 py-3 text-zinc-100">
                        {price}
                      </div>
                    ))}
                  </div>
                  <a
                    href={JOBBER_BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 font-bold text-zinc-950 transition hover:-translate-y-0.5"
                  >
                    Book This Plan <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5 text-zinc-300">
              Quick guide: <span className="font-bold text-white">Quarterly</span> is best for most homes. <span className="font-bold text-white">Bi-monthly</span> is for a little more upkeep. <span className="font-bold text-white">Monthly</span> is best for heavier-use bins.
            </div>
          </div>
        </section>

        {/* ── WHY BINBOYZ ── */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <SectionTitle
                eyebrow="Why BinBoyz"
                title="Local service that makes a nasty job feel easy"
                body="You need somebody local who shows up, cleans the bins the right way, and makes the whole thing simple to stay on top of."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "We bring our own water and power",
                  "We clean after pickup when bins are easier to service",
                  "Hot water, sanitizing treatment, and a fresh finish",
                  "Dirty wastewater captured, not left in the street",
                  "Recurring plans keep you ahead of the problem",
                  "Serving Merced and Atwater only — tight and local",
                ].map((reason) => (
                  <div key={reason} className="rounded-3xl border border-white/10 bg-white/5 p-5 text-zinc-200">
                    <CheckCircle2 className="mb-3 h-5 w-5 text-lime-300" />
                    {reason}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl">
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-lime-300">Contact</div>
              <h3 className="mt-3 text-2xl font-black">Easy to reach. Easy to book.</h3>
              <p className="mt-4 leading-7 text-zinc-300">
                If you have a question before booking, reach out. Otherwise, go ahead and book directly.
              </p>
              <div className="mt-6 space-y-3">
                <a href="tel:2096765866" className="flex items-center gap-3 rounded-2xl bg-zinc-900 px-4 py-3 text-zinc-200 hover:bg-zinc-800 transition">
                  <Phone className="h-4 w-4 text-lime-300" />
                  <span>(209) 676-5866</span>
                </a>
                <a href="mailto:info@binboyz.net" className="flex items-center gap-3 rounded-2xl bg-zinc-900 px-4 py-3 text-zinc-200 hover:bg-zinc-800 transition">
                  <Mail className="h-4 w-4 text-lime-300" />
                  <span>info@binboyz.net</span>
                </a>
              </div>
              <a
                href={JOBBER_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-lime-400 px-6 py-4 font-black text-zinc-950 transition hover:-translate-y-0.5"
              >
                Book My Cleaning <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="FAQ"
            title="Questions? We keep it simple."
            body="Quick answers for the stuff most homeowners want to know before they book."
          />
          <div className="mt-10 grid gap-4">
            {faqs.map((item) => (
              <details key={item.q} className="group rounded-3xl border border-white/10 bg-white/5 p-6">
                <summary className="cursor-pointer list-none text-lg font-bold text-white">{item.q}</summary>
                <p className="mt-4 leading-7 text-zinc-300">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── BOOKING CTA ── */}
        <section id="book" className="bg-gradient-to-b from-lime-400 to-lime-300 text-zinc-950">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-800">Ready to book?</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Get your bins cleaned today</h2>
            <p className="mt-5 mx-auto max-w-xl text-lg leading-8 text-zinc-800">
              Choose your plan, pick your pickup day, and finish booking in minutes. Scheduling is handled securely through Jobber.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={JOBBER_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-zinc-950 px-8 py-4 text-lg font-black text-white transition hover:-translate-y-0.5 hover:bg-zinc-800"
              >
                Start My Booking <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="tel:2096765866"
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-zinc-950/20 px-8 py-4 text-lg font-bold text-zinc-950 transition hover:bg-zinc-950/10"
              >
                <Phone className="h-5 w-5" /> Call (209) 676-5866
              </a>
            </div>
            <p className="mt-6 text-sm text-zinc-700">Serving Merced & Atwater, CA • Scheduling handled securely through Jobber</p>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer id="contact" className="border-t border-white/10 bg-zinc-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div>
            <div className="text-2xl font-black">BinBoyz</div>
            <p className="mt-3 max-w-sm text-sm leading-7 text-zinc-400">
              Local trash bin cleaning for Merced and Atwater homeowners who want the job handled right.
            </p>
          </div>
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">Service area</div>
            <div className="mt-3 space-y-2 text-zinc-300">
              <div>Merced, California</div>
              <div>Atwater, California</div>
            </div>
          </div>
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">Contact</div>
            <div className="mt-3 space-y-2 text-zinc-300">
              <div>Phone: (209) 676-5866</div>
              <div>Email: info@binboyz.net</div>
              <div>Text-friendly support available</div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
