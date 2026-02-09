import { Link } from "react-router-dom";

const YughmaMarketCatalog = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <main className="mx-auto grid max-w-5xl gap-8 px-6 py-16">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-stone-500">Yughma Market</p>
            <h1 className="mt-3 text-3xl font-semibold">Catalog overview</h1>
          </div>
          <Link to="/projects/yughma-market" className="text-sm text-stone-500">
            ← Back to market
          </Link>
        </header>

        <section className="grid gap-4 md:grid-cols-2">
          {[
            "Living room essentials",
            "Dining collection",
            "Lighting + ambiance",
            "Studio workspace",
            "Outdoor lounging",
            "Seasonal drops",
          ].map((item) => (
            <div key={item} className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">{item}</h2>
              <p className="mt-2 text-sm text-stone-500">Curated sets with small-batch makers.</p>
              <Link
                to="/projects/yughma-market/cart"
                className="mt-4 inline-flex text-sm font-semibold text-slate-900"
              >
                Add curated set →
              </Link>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default YughmaMarketCatalog;
