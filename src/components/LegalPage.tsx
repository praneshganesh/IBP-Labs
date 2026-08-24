import type { ReactNode } from "react";
import Nav from "./Nav";
import { SiteFooter } from "./Footer";

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-muted">
        {children}
      </div>
    </section>
  );
}

export default function LegalPage({
  title,
  effectiveDate,
  children,
}: {
  title: string;
  effectiveDate: string;
  children: ReactNode;
}) {
  return (
    <main>
      <Nav />
      <div className="mx-auto max-w-3xl px-6 pt-36 pb-24">
        <h1 className="text-4xl tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-4 text-sm text-muted">
          Effective date: {effectiveDate}
        </p>
        {children}
      </div>
      <SiteFooter />
    </main>
  );
}
