import { Link } from "react-router-dom";

const YughmaFinanceSchedule = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 px-6 py-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-emerald-400">Yughma Finance</p>
            <h1 className="text-2xl font-semibold">Schedule a financial review</h1>
          </div>
          <Link to="/projects/yughma-finance" className="text-sm text-emerald-300">
            ← Back to dashboard
          </Link>
        </div>
      </header>

      <main className="mx-auto grid max-w-4xl gap-8 px-6 py-12">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Review details</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {[
              { label: "Department", value: "Executive Finance" },
              { label: "Review type", value: "Quarterly liquidity" },
              { label: "Preferred date", value: "Aug 24, 2024" },
              { label: "Participants", value: "CFO + Regional leads" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-widest text-slate-400">{item.label}</p>
                <p className="mt-2 text-sm font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold">Available time slots</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>• Tuesday · 10:00 AM · Executive briefing room</li>
              <li>• Wednesday · 2:30 PM · Virtual boardroom</li>
              <li>• Friday · 9:00 AM · Global ops call</li>
            </ul>
            <Link
              to="/projects/yughma-finance/confirmation"
              className="mt-6 inline-flex w-full justify-center rounded-full bg-emerald-400 px-4 py-3 text-sm font-semibold text-slate-950"
            >
              Confirm schedule
            </Link>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-6">
            <h2 className="text-lg font-semibold">Preparation checklist</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>• Attach liquidity variance report</li>
              <li>• Share regional risk summary</li>
              <li>• Confirm compliance sign-off</li>
            </ul>
            <p className="mt-6 text-xs uppercase tracking-widest text-emerald-300">
              Status: Ready for approval
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default YughmaFinanceSchedule;
