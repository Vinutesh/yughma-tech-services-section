import { useState } from "react";
import { Link } from "react-router-dom";

const YughmaFinance = () => {
  const [reportStatus, setReportStatus] = useState("Download report");

  const handleDownload = () => {
    setReportStatus("Report downloaded ✓");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-emerald-400">Yughma Finance</p>
            <h1 className="text-2xl font-semibold">Risk-aware financial operations</h1>
          </div>
          <div className="flex gap-3 text-sm">
            <button
              type="button"
              onClick={handleDownload}
              className="rounded-full border border-white/20 px-4 py-2"
            >
              {reportStatus}
            </button>
            <Link
              to="/projects/yughma-finance/schedule"
              className="rounded-full bg-emerald-400 px-4 py-2 font-semibold text-slate-950"
            >
              Schedule review
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12">
        <section className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Overview</p>
            <h2 className="mt-4 text-4xl font-semibold">Live portfolio health at a glance.</h2>
            <p className="mt-4 text-lg text-slate-300">
              Yughma Finance is a premium fintech workspace designed for CFOs and compliance
              teams. It surfaces real-time liquidity, exposure, and audit readiness in a
              dark, focused environment.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Liquidity", value: "$18.4M", delta: "+8.4%" },
                { label: "Exposure", value: "$4.2M", delta: "-2.1%" },
                { label: "Compliance", value: "98.7%", delta: "+1.8%" },
              ].map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-widest text-slate-400">{metric.label}</p>
                  <p className="mt-3 text-2xl font-semibold">{metric.value}</p>
                  <p className="mt-1 text-xs text-emerald-400">{metric.delta} vs last week</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Alert Center</p>
            <div className="mt-6 space-y-4">
              {[
                {
                  title: "Q4 liquidity report pending",
                  detail: "3 items require CFO approval before 6:00 PM.",
                },
                {
                  title: "Vendor exposure threshold exceeded",
                  detail: "Rebalance within the next 24 hours.",
                },
                {
                  title: "Audit prep readiness",
                  detail: "All 18 regions synced, 2 need documentation.",
                },
              ].map((alert) => (
                <div key={alert.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <h3 className="text-base font-semibold">{alert.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{alert.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="insights" className="mt-14 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Regional cash flow",
              description: "Monitor 24 markets with daily variance thresholds and auto alerts.",
            },
            {
              title: "Vendor risk scoring",
              description: "AI-assisted scoring to prevent exposure spikes and sanction risk.",
            },
            {
              title: "Board-ready reporting",
              description: "Instant export for board packs with brand-safe styling.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{item.description}</p>
              <a href="#insights" className="mt-6 inline-flex text-sm font-semibold text-emerald-400">
                Explore →
              </a>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default YughmaFinance;
