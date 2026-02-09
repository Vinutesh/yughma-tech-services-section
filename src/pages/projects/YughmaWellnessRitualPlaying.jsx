import { Link } from "react-router-dom";

const YughmaWellnessRitualPlaying = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-amber-50 to-white text-slate-800">
      <main className="mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-rose-400">Yughma Wellness</p>
        <h1 className="mt-4 text-3xl font-semibold">Ritual in progress</h1>
        <p className="mt-4 text-lg text-slate-600">
          Breathing guidance is playing. Settle in and follow the prompts for five minutes.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/projects/yughma-wellness/ritual"
            className="rounded-full border border-rose-200 px-6 py-3 text-sm font-semibold text-rose-500"
          >
            Restart ritual
          </Link>
          <Link
            to="/projects/yughma-wellness"
            className="rounded-full bg-rose-400 px-6 py-3 text-sm font-semibold text-white"
          >
            Finish session
          </Link>
        </div>
      </main>
    </div>
  );
};

export default YughmaWellnessRitualPlaying;
