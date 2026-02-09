import { Link } from "react-router-dom";

const YughmaWellnessRitual = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-amber-50 to-white text-slate-800">
      <main className="mx-auto grid max-w-4xl gap-8 px-6 py-16">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-rose-400">Yughma Wellness</p>
            <h1 className="mt-3 text-3xl font-semibold">Five-minute ritual</h1>
          </div>
          <Link to="/projects/yughma-wellness" className="text-sm text-rose-500">
            ← Back to overview
          </Link>
        </header>

        <section className="rounded-3xl border border-rose-100 bg-white/80 p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.3em] text-rose-400">Ritual flow</p>
          <ol className="mt-6 space-y-4 text-sm text-slate-600">
            <li>1. Set intention · 60 seconds</li>
            <li>2. Guided breathing · 120 seconds</li>
            <li>3. Gentle stretch · 90 seconds</li>
            <li>4. Gratitude note · 30 seconds</li>
          </ol>
          <Link
            to="/projects/yughma-wellness/ritual/playing"
            className="mt-6 inline-flex w-full justify-center rounded-full bg-rose-400 px-4 py-3 text-sm font-semibold text-white"
          >
            Start ritual audio
          </Link>
        </section>

        <section className="rounded-3xl border border-rose-100 bg-white/80 p-8 shadow-sm">
          <h2 className="text-lg font-semibold">Suggested ambience</h2>
          <p className="mt-3 text-sm text-slate-600">
            Soft piano, warm lighting, and a cup of herbal tea. Set the tone for calm focus.
          </p>
        </section>
      </main>
    </div>
  );
};

export default YughmaWellnessRitual;
