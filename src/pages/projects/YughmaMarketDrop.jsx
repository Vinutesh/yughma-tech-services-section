import { Link } from "react-router-dom";

const YughmaMarketDrop = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <main className="mx-auto flex max-w-4xl flex-col px-6 py-16">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-stone-500">Yughma Market</p>
            <h1 className="mt-3 text-3xl font-semibold">Member drop access</h1>
          </div>
          <Link to="/projects/yughma-market" className="text-sm text-stone-500">
            ← Back to market
          </Link>
        </header>

        <section className="mt-8 rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold">The Obsidian Collection</h2>
          <p className="mt-3 text-sm text-stone-500">
            Exclusive hand-finished pieces with matte finishes and limited quantities.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["12 items", "Early access", "Priority delivery"].map((item) => (
              <span key={item} className="rounded-full border border-stone-200 bg-stone-100 px-3 py-1 text-xs font-semibold">
                {item}
              </span>
            ))}
          </div>
          <Link
            to="/projects/yughma-market/cart"
            className="mt-8 inline-flex rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white"
          >
            Reserve your pieces
          </Link>
        </section>
      </main>
    </div>
  );
};

export default YughmaMarketDrop;
