import FadeIn from "./FadeIn";
import { LogoMark } from "./Nav";

const columns = [
  {
    heading: "Products",
    links: [
      {
        label: "PathToFIRE",
        href: "https://www.pathtofire.me/",
        external: true,
      },
      { label: "Saavi — coming soon", href: "/#products" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Philosophy", href: "/#philosophy" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Saavi Privacy", href: "/saavi/privacy" },
      { label: "Saavi Terms", href: "/saavi/terms" },
    ],
  },
];

export function SiteFooter() {
  return (
    <div className="border-t border-hairline bg-white/60">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <a href="/" className="flex items-center gap-3">
              <LogoMark />
              <span className="text-[15px] font-semibold tracking-tight">
                IBP Labs
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              An independent app studio building private, AI-powered software
              for modern life.
            </p>
            <a
              href="mailto:hello@ibp-labs.com"
              className="mt-4 inline-block text-sm font-medium text-accent transition-opacity hover:opacity-70"
            >
              hello@ibp-labs.com
            </a>
          </div>

          {columns.map((column) => (
            <div key={column.heading}>
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
                {column.heading}
              </p>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-sm text-foreground/70 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-hairline pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} IBP Labs LLC. All rights reserved.</p>
          <p>
            <a
              href="https://ibp-labs.com/"
              className="transition-colors hover:text-foreground"
            >
              ibp-labs.com
            </a>
            <span className="mx-2">·</span>
            Private. Thoughtful. Built to last.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer>
      <section id="contact" className="scroll-mt-16">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl border border-hairline bg-foreground px-8 py-16 text-background sm:px-16">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(50% 80% at 80% 20%, rgba(37,71,208,0.35), transparent 70%)",
                }}
              />
              <div className="relative">
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-background/60">
                  Contact
                </p>
                <h2 className="max-w-xl text-3xl tracking-tight sm:text-5xl">
                  Say{" "}
                  <em className="font-serif italic text-background">hello.</em>
                </h2>
                <p className="mt-5 max-w-md leading-relaxed text-background/70">
                  Questions about our apps, partnerships, or press — we read
                  everything.
                </p>
                <a
                  href="mailto:hello@ibp-labs.com"
                  className="mt-8 inline-block rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5"
                >
                  hello@ibp-labs.com
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      <SiteFooter />
    </footer>
  );
}
