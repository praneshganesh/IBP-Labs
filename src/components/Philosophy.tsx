import FadeIn from "./FadeIn";

const principles = [
  {
    number: "01",
    title: "Privacy is the default",
    body: "No bank logins, no email scraping, no selling your data. We collect the minimum needed to make each product work, and every app is transparent about what stays on your device and what is stored securely.",
  },
  {
    number: "02",
    title: "AI that does the work",
    body: "Extraction, organization, and recommendations — not folders and chores. Our software understands your information and tells you what needs attention.",
  },
  {
    number: "03",
    title: "Built for real households",
    body: "Families, expats, property owners, planners. Software shaped around how people actually live — shared with real permissions, not workarounds.",
  },
  {
    number: "04",
    title: "Calm and built to last",
    body: "No engagement tricks, no dark patterns. Quiet, careful software designed for years of daily use, sustained by fair subscriptions.",
  },
];

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="scroll-mt-16 border-y border-hairline bg-white/50 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Philosophy
          </p>
          <h2 className="max-w-2xl text-3xl tracking-tight sm:text-5xl">
            How we build.
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2">
          {principles.map((principle, i) => (
            <FadeIn key={principle.number} delay={i * 0.08}>
              <div className="flex gap-5">
                <span className="font-mono text-sm text-accent">
                  {principle.number}
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {principle.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted">
                    {principle.body}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
