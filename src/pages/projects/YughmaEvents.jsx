import { Link } from "react-router-dom";

const YughmaEvents = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(217,70,239,0.4),rgba(248,113,113,0.25),transparent)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-fuchsia-300">Yughma Events</p>
              <h1 className="mt-3 text-4xl font-semibold">Experiences that move culture.</h1>
            </div>
            <Link
              to="/projects/yughma-events/tickets"
              className="rounded-full bg-fuchsia-500 px-5 py-2 text-sm font-semibold text-white"
            >
              Get tickets
            </Link>
          </div>
          <p className="mt-6 max-w-2xl text-lg text-slate-200">
            Yughma Events is an immersive event platform that blends ticketing, live
            schedules, and creator highlights. Designed for energy, scale, and fast action.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12">
        <section className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-300">Main Stage</p>
            <h2 className="mt-4 text-3xl font-semibold">Pulse Summit 2024</h2>
            <p className="mt-4 text-sm text-slate-300">
              Three days of creator-led sessions, product launches, and cultural meetups.
              The interface keeps everything visible with layered cards and bold labels.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "48 sessions",
                "9 headline creators",
                "City-wide activations",
                "Live stream access",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-500/30 via-slate-950 to-slate-900 p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-300">Schedule</p>
            <div className="mt-6 space-y-4">
              {[
                { time: "10:00", title: "Opening keynote", stage: "Hall A" },
                { time: "13:30", title: "Creator labs", stage: "Studio 4" },
                { time: "17:00", title: "Night showcase", stage: "Rooftop" },
              ].map((item) => (
                <div key={item.title} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs text-slate-400">{item.stage}</p>
                  </div>
                  <span className="text-sm font-semibold text-fuchsia-300">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Day Pass",
              detail: "Access to all sessions for one day.",
              price: "$120",
            },
            {
              title: "Full Festival",
              detail: "All days, VIP lounge, and after-hours.",
              price: "$420",
            },
            {
              title: "Stream Only",
              detail: "Remote access with live chat.",
              price: "$50",
            },
          ].map((tier) => (
            <div key={tier.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">{tier.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{tier.detail}</p>
              <p className="mt-6 text-2xl font-semibold text-fuchsia-300">{tier.price}</p>
              <Link
                to="/projects/yughma-events/checkout"
                className="mt-6 inline-flex w-full justify-center rounded-full border border-fuchsia-300/60 px-4 py-3 text-sm font-semibold text-fuchsia-200"
              >
                Select ticket
              </Link>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default YughmaEvents;
