import FadeIn from "./FadeIn";

type Product = {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  status: "Live" | "Coming soon";
  href?: string;
  legal?: { privacy: string; terms: string };
  gradient: string;
  accent: string;
};

const products: Product[] = [
  {
    name: "PathToFIRE",
    tagline: "Your wealth — modeled, not guessed.",
    description:
      "A private, offline-first wealth planning system. Bring your accounts, properties, investments, and expenses into one forecast — see your next five years, simulate major moves, and know your FIRE date.",
    features: [
      "5-year cashflow engine",
      "Property & rent modeling",
      "Scenario simulation",
      "Time-to-FIRE",
      "Local-only data",
    ],
    status: "Live",
    href: "https://www.pathtofire.me/",
    gradient: "from-emerald-50 to-teal-50/40",
    accent: "text-emerald-700",
  },
  {
    name: "Saavi",
    tagline: "Your home, remembered.",
    description:
      "An AI companion that keeps the record of your home — things, reminders, habits, expenses, and subscriptions. It lives on your phone, works offline, and answers when you talk, ask, or point the camera at something.",
    features: [
      "Talk, Ask & Identify",
      "Reminders & habits",
      "Expenses & subscriptions",
      "Offline-first sync",
      "Sign in with Apple",
    ],
    status: "Coming soon",
    legal: { privacy: "/saavi/privacy", terms: "/saavi/terms" },
    gradient: "from-indigo-50 to-violet-50/40",
    accent: "text-indigo-700",
  },
];

export default function Products() {
  return (
    <section id="products" className="scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Products
          </p>
          <h2 className="max-w-2xl text-3xl tracking-tight sm:text-5xl">
            Two apps, one idea:{" "}
            <em className="font-serif italic">your life, in your hands.</em>
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {products.map((product, i) => {
            const card = (
              <div
                className={`group flex h-full flex-col rounded-3xl border border-hairline bg-gradient-to-br ${product.gradient} p-8 transition-all duration-300 sm:p-10 ${
                  product.href
                    ? "hover:-translate-y-1 hover:shadow-[0_20px_60px_-24px_rgba(17,17,20,0.25)]"
                    : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {product.name}
                  </h3>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      product.status === "Live"
                        ? "bg-emerald-600/10 text-emerald-700"
                        : "bg-indigo-600/10 text-indigo-700"
                    }`}
                  >
                    {product.status}
                  </span>
                </div>
                <p
                  className={`mt-3 font-serif text-xl italic ${product.accent}`}
                >
                  {product.tagline}
                </p>
                <p className="mt-5 leading-relaxed text-muted">
                  {product.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-hairline bg-white/60 px-3 py-1 text-xs text-foreground/70"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-10">
                  {product.href ? (
                    <span className="inline-flex items-center gap-2 text-sm font-medium">
                      Visit pathtofire.me
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  ) : (
                    <span className="text-sm text-muted">
                      In development — launching soon.
                    </span>
                  )}
                  {product.legal && (
                    <span className="flex gap-4 text-sm">
                      <a
                        href={product.legal.privacy}
                        className="text-foreground/70 underline underline-offset-4 transition-colors hover:text-foreground"
                      >
                        Privacy
                      </a>
                      <a
                        href={product.legal.terms}
                        className="text-foreground/70 underline underline-offset-4 transition-colors hover:text-foreground"
                      >
                        Terms
                      </a>
                    </span>
                  )}
                </div>
              </div>
            );

            return (
              <FadeIn key={product.name} delay={i * 0.12} className="h-full">
                {product.href ? (
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    {card}
                  </a>
                ) : (
                  card
                )}
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
