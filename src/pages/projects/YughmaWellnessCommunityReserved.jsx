import { Link } from "react-router-dom";

const YughmaWellnessCommunityReserved = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-amber-50 to-white text-slate-800">
      <main className="mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-rose-400">Yughma Wellness</p>
        <h1 className="mt-4 text-3xl font-semibold">Spot reserved</h1>
        <p className="mt-4 text-lg text-slate-600">
          You are confirmed for the next community circle. A calendar invite is on its way.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/projects/yughma-wellness/community"
            className="rounded-full border border-rose-200 px-6 py-3 text-sm font-semibold text-rose-500"
          >
            View schedule
          </Link>
          <Link
            to="/projects/yughma-wellness"
            className="rounded-full bg-rose-400 px-6 py-3 text-sm font-semibold text-white"
          >
            Return to wellness home
          </Link>
        </div>
      </main>
    </div>
  );
};

export default YughmaWellnessCommunityReserved;
