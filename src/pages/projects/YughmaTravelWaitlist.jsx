import { Link } from "react-router-dom";

const YughmaTravelWaitlist = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <main className="mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-cyan-200">Yughma Travel</p>
        <h1 className="mt-4 text-3xl font-semibold">You're on the waitlist.</h1>
        <p className="mt-4 text-lg text-slate-300">
          We will reach out with the next expedition details and planning support options.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/projects/yughma-travel/plan"
            className="rounded-full border border-cyan-200/50 px-6 py-3 text-sm font-semibold text-cyan-200"
          >
            Continue planning
          </Link>
          <Link
            to="/projects/yughma-travel"
            className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-900"
          >
            Back to travel home
          </Link>
        </div>
      </main>
    </div>
  );
};

export default YughmaTravelWaitlist;
