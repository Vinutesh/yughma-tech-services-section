import { Link } from "react-router-dom";

const YughmaMarketEdit = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <main className="mx-auto grid max-w-4xl gap-8 px-6 py-16">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-stone-500">Yughma Market</p>
            <h1 className="mt-3 text-3xl font-semibold">The Sandstone Edit</h1>
          </div>
          <Link to="/projects/yughma-market" className="text-sm text-stone-500">
            ← Back to market
          </Link>
        </header>

        <section className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.3em] text-stone-500">Featured pieces</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Sculptural lamp",
              "Stoneware set",
              "Neutral linen chair",
              "Handwoven rug",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                <h2 className="text-base font-semibold">{item}</h2>
                <p className="mt-2 text-sm text-stone-500">Ready to ship in 2-3 days</p>
                <Link
                  to="/projects/yughma-market/cart"
                  className="mt-4 inline-flex text-sm font-semibold text-slate-900"
                >
                  Add to cart →
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default YughmaMarketEdit;
