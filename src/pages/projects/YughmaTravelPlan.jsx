import { Link } from "react-router-dom";

const YughmaTravelPlan = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <main className="mx-auto grid max-w-5xl gap-8 px-6 py-16">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-cyan-200">Yughma Travel</p>
            <h1 className="mt-3 text-3xl font-semibold">Plan a journey</h1>
          </div>
          <Link to="/projects/yughma-travel" className="text-sm text-cyan-200">
            ← Back to discovery
          </Link>
        </header>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Trip setup</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              "Destination: Northern Portugal",
              "Dates: Oct 10 - Oct 20",
              "Travelers: 4 people",
              "Style: Boutique + coastal",
              "Budget: $2,800 / person",
              "Pace: Slow travel",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 via-slate-900 to-black p-6">
            <h2 className="text-lg font-semibold">Suggested route</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>• Porto · 3 nights</li>
              <li>• Douro Valley · 2 nights</li>
              <li>• Lisbon · 3 nights</li>
              <li>• Comporta · 2 nights</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold">Next step</h2>
            <p className="mt-3 text-sm text-slate-300">
              Invite your travel companions and start refining the itinerary.
            </p>
            <Link
              to="/projects/yughma-travel/waitlist"
              className="mt-6 inline-flex w-full justify-center rounded-full bg-cyan-300 px-4 py-3 text-sm font-semibold text-slate-900"
            >
              Lock in planning support
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default YughmaTravelPlan;
