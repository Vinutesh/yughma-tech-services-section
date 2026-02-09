import { Link } from "react-router-dom";

const YughmaMarketServices = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <main className="mx-auto grid max-w-4xl gap-8 px-6 py-16">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-stone-500">Yughma Market</p>
            <h1 className="mt-3 text-3xl font-semibold">Concierge services</h1>
          </div>
          <Link to="/projects/yughma-market" className="text-sm text-stone-500">
            ← Back to market
          </Link>
        </header>

        <section className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
          <div className="space-y-4 text-sm text-stone-600">
            <p>• Styling consultation with moodboards</p>
            <p>• White-glove delivery scheduling</p>
            <p>• On-site placement and assembly</p>
            <p>• Care plans for bespoke pieces</p>
          </div>
          <Link
            to="/projects/yughma-market/cart"
            className="mt-6 inline-flex w-full justify-center rounded-full border border-stone-300 px-4 py-3 text-sm font-semibold"
          >
            Review your cart
          </Link>
        </section>
      </main>
    </div>
  );
};

export default YughmaMarketServices;
