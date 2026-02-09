import { Link } from "react-router-dom";

const YughmaWellness = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-amber-50 to-white text-slate-800">
      <header className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-rose-400">Yughma Wellness</p>
            <h1 className="mt-3 text-4xl font-semibold">Daily rituals for balance.</h1>
          </div>
          <Link
            to="/projects/yughma-wellness/ritual"
            className="rounded-full bg-rose-400 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-rose-200"
          >
            Start your reset
          </Link>
        </div>
      </header>

      <main className="mx-auto grid max-w-5xl gap-10 px-6 pb-16 lg:grid-cols-[1fr_1.1fr]">
        <section className="space-y-6">
          <p className="text-lg text-slate-600">
            Yughma Wellness is a calm companion that blends mindful breathing, gentle movement,
            and journaling into one soothing flow. The experience is intentionally soft,
            emphasizing open space and warm gradients.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: "Morning Reset", detail: "7-minute guided check-in" },
              { title: "Afternoon Flow", detail: "Stretch + hydration reminders" },
              { title: "Evening Unwind", detail: "Sleep prep with light sounds" },
              { title: "Weekly Reflection", detail: "Mood patterns and insights" },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-rose-100 bg-white/70 p-4 shadow-sm">
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[32px] bg-white p-6 shadow-xl shadow-rose-100">
          <div className="rounded-3xl bg-gradient-to-br from-rose-200 via-amber-100 to-white p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-rose-500">Today</p>
            <h2 className="mt-3 text-2xl font-semibold">Balance Score</h2>
            <div className="mt-6 rounded-2xl bg-white/70 p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">Mind</span>
                <span className="text-sm font-semibold">82%</span>
              </div>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-rose-100">
                <div className="h-full w-[82%] rounded-full bg-rose-400" />
              </div>
            </div>
            <div className="mt-4 rounded-2xl bg-white/70 p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">Body</span>
                <span className="text-sm font-semibold">74%</span>
              </div>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-rose-100">
                <div className="h-full w-[74%] rounded-full bg-amber-400" />
              </div>
            </div>
            <Link
              to="/projects/yughma-wellness/ritual"
              className="mt-6 inline-flex w-full justify-center rounded-full bg-rose-400 px-4 py-3 text-sm font-semibold text-white"
            >
              Begin 5-minute ritual
            </Link>
          </div>
        </section>
      </main>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-3xl border border-rose-100 bg-white/70 p-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-rose-400">Community</p>
              <h3 className="mt-2 text-2xl font-semibold">Soft spaces, real stories.</h3>
            </div>
            <Link
              to="/projects/yughma-wellness/community"
              className="rounded-full border border-rose-200 px-4 py-2 text-sm font-semibold text-rose-500"
            >
              Join the circle
            </Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              "32k daily check-ins",
              "1.2k guided sessions",
              "98% calmer after week one",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-rose-50 p-4 text-sm text-slate-600">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default YughmaWellness;
