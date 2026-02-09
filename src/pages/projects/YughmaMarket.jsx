import { Link } from "react-router-dom";

const YughmaMarket = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <header className="border-b border-stone-200">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-8">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-stone-500">Yughma Market</p>
            <h1 className="mt-3 text-4xl font-semibold">Curated objects for modern spaces.</h1>
          </div>
          <div className="flex gap-3">
            <Link
              to="/projects/yughma-market/catalog"
              className="rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold"
            >
              View catalog
            </Link>
            <Link
              to="/projects/yughma-market/drop"
              className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
            >
              Member drop
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12">
        <section className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Featured Capsule</p>
            <h2 className="mt-4 text-3xl font-semibold">The Sandstone Edit</h2>
            <p className="mt-4 text-sm text-stone-600">
              A limited capsule inspired by raw textures, matte ceramics, and sculptural
              lighting. Each piece is sourced from independent studios.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Hand-thrown", "Neutral palette", "Small batch"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-stone-200 bg-stone-100 px-3 py-1 text-xs font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              to="/projects/yughma-market/edit"
              className="mt-8 inline-flex rounded-full border border-stone-300 px-5 py-2 text-sm font-semibold"
            >
              Shop the edit
            </Link>
          </div>
          <div className="grid gap-4">
            {[
              { name: "Stoneware Set", price: "$260" },
              { name: "Linen Lounge Chair", price: "$480" },
              { name: "Sable Glass Lamp", price: "$320" },
            ].map((item) => (
              <div key={item.name} className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-stone-400">New</p>
                <h3 className="mt-3 text-xl font-semibold">{item.name}</h3>
                <p className="mt-2 text-sm text-stone-500">Available in 4 finishes</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-semibold">{item.price}</span>
                  <Link to="/projects/yughma-market/cart" className="text-sm font-semibold text-slate-900">
                    Add to cart
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Studio stories",
              detail: "Meet the artisans behind each collection.",
            },
            {
              title: "Home styling",
              detail: "Personalized styling sessions with moodboards.",
            },
            {
              title: "Delivery concierge",
              detail: "White-glove setup in major cities.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm text-stone-500">{item.detail}</p>
              <Link
                to="/projects/yughma-market/services"
                className="mt-6 inline-flex text-sm font-semibold text-stone-700"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default YughmaMarket;
