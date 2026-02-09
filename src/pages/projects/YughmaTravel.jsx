import { Link } from "react-router-dom";

const YughmaTravel = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),_transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-200">Yughma Travel</p>
              <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
                Discover places that feel like stories.
              </h1>
            </div>
            <Link
              to="/projects/yughma-travel/plan"
              className="rounded-full bg-cyan-300 px-5 py-2 text-sm font-semibold text-slate-900"
            >
              Plan a journey
            </Link>
          </div>
          <p className="mt-6 max-w-2xl text-lg text-slate-200">
            Yughma Travel is a discovery hub blending editorial guides, curated stays, and
            immersive itinerary planning. The interface is built around narrative pacing
            and oversized visuals.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-16">
        <section className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Kyoto after dusk",
              detail: "Food alleys, lanterns, and quiet temples",
              tag: "Japan",
            },
            {
              title: "Atlas ridge trek",
              detail: "High altitude stays with local guides",
              tag: "Morocco",
            },
            {
              title: "Baltic coastline",
              detail: "Slow travel with Nordic design hotels",
              tag: "Estonia",
            },
          ].map((place) => (
            <div
              key={place.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">{place.tag}</p>
              <h2 className="mt-4 text-2xl font-semibold">{place.title}</h2>
              <p className="mt-3 text-sm text-slate-300">{place.detail}</p>
              <Link
                to="/projects/yughma-travel/guides"
                className="mt-6 inline-flex text-sm font-semibold text-cyan-200"
              >
                Read the guide →
              </Link>
            </div>
          ))}
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 via-slate-900 to-black p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">Journey Builder</p>
            <h3 className="mt-4 text-2xl font-semibold">Build a 10-day coastal itinerary</h3>
            <p className="mt-4 text-sm text-slate-300">
              Drag, drop, and edit your days with transport suggestions, hidden stays, and
              hand-picked cafes. Everything stays editable for your crew.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "Local host picks",
                "Weather-aware timing",
                "Offline access",
                "Budget tracking",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">Upcoming</p>
            <h3 className="mt-4 text-2xl font-semibold">Editor-led expeditions</h3>
            <ul className="mt-6 space-y-4 text-sm text-slate-300">
              <li>• Patagonia photo residency · Nov 12</li>
              <li>• Lisbon studio retreat · Dec 03</li>
              <li>• Iceland film week · Jan 18</li>
            </ul>
            <Link
              to="/projects/yughma-travel/waitlist"
              className="mt-6 inline-flex w-full justify-center rounded-full border border-cyan-200/50 px-4 py-3 text-sm font-semibold text-cyan-200"
            >
              Join the waitlist
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default YughmaTravel;
