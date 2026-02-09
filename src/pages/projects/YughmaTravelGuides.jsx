import { Link } from "react-router-dom";

const YughmaTravelGuides = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <main className="mx-auto grid max-w-5xl gap-8 px-6 py-16">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-cyan-200">Yughma Travel</p>
            <h1 className="mt-3 text-3xl font-semibold">Editorial guides</h1>
          </div>
          <Link to="/projects/yughma-travel" className="text-sm text-cyan-200">
            ← Back to discovery
          </Link>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Kyoto after dusk",
              detail: "Evening markets, lantern alleys, and sake tastings.",
            },
            {
              title: "Atlas ridge trek",
              detail: "High-altitude lodges and mountain tea houses.",
            },
            {
              title: "Baltic coastline",
              detail: "Nordic design hotels and slow beach days.",
            },
            {
              title: "Lisbon creative week",
              detail: "Studios, food halls, and coastal escapes.",
            },
          ].map((guide) => (
            <div key={guide.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">{guide.title}</h2>
              <p className="mt-3 text-sm text-slate-300">{guide.detail}</p>
              <Link
                to="/projects/yughma-travel/plan"
                className="mt-6 inline-flex text-sm font-semibold text-cyan-200"
              >
                Build an itinerary →
              </Link>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default YughmaTravelGuides;
