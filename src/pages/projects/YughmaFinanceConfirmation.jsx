import { Link } from "react-router-dom";

const YughmaFinanceConfirmation = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-emerald-400">Yughma Finance</p>
        <h1 className="mt-4 text-4xl font-semibold">Review locked in.</h1>
        <p className="mt-4 text-lg text-slate-300">
          Your quarterly review has been scheduled and shared with the executive team.
          Calendar invites have been sent to all participants.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/projects/yughma-finance"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold"
          >
            Return to dashboard
          </Link>
          <Link
            to="/projects/yughma-finance/schedule"
            className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950"
          >
            Edit the schedule
          </Link>
        </div>
      </main>
    </div>
  );
};

export default YughmaFinanceConfirmation;
