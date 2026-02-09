import { Link } from "react-router-dom";

const YughmaWellnessCommunity = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-amber-50 to-white text-slate-800">
      <main className="mx-auto grid max-w-4xl gap-8 px-6 py-16">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-rose-400">Yughma Wellness</p>
            <h1 className="mt-3 text-3xl font-semibold">Community circle</h1>
          </div>
          <Link to="/projects/yughma-wellness" className="text-sm text-rose-500">
            ← Back to overview
          </Link>
        </header>

        <section className="rounded-3xl border border-rose-100 bg-white/80 p-8 shadow-sm">
          <h2 className="text-lg font-semibold">Weekly gatherings</h2>
          <p className="mt-3 text-sm text-slate-600">
            Join guided breathwork sessions hosted by certified practitioners every Wednesday.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Mindful journaling · 7:00 PM",
              "Breathwork circle · 8:00 PM",
              "Sound bath · 9:00 PM",
              "Weekend reset · Saturday 10:00 AM",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-rose-50 p-4 text-sm text-slate-600">
                {item}
              </div>
            ))}
          </div>
          <Link
            to="/projects/yughma-wellness/community/reserved"
            className="mt-6 inline-flex w-full justify-center rounded-full bg-rose-400 px-4 py-3 text-sm font-semibold text-white"
          >
            Reserve a spot
          </Link>
        </section>
      </main>
    </div>
  );
};

export default YughmaWellnessCommunity;
