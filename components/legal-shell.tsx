import type { ReactNode } from "react";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";

type LegalShellProps = {
  title: string;
  lede: string;
  updatedOn: string;
  children: ReactNode;
};

type LegalSectionProps = {
  title: string;
  children: ReactNode;
};

export function LegalShell({
  title,
  lede,
  updatedOn,
  children,
}: LegalShellProps) {
  return (
    <main className="relative isolate min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(255,155,94,0.16),transparent_26%),radial-gradient(circle_at_top_right,rgba(127,227,255,0.12),transparent_24%),linear-gradient(180deg,#060b12_0%,#07111b_48%,#050912_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(180deg,rgba(255,255,255,0.28),transparent_85%)]" />

      <div className="mx-auto max-w-5xl px-6 pb-20 pt-8 sm:pt-10">
        <Link
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 transition hover:bg-white/10 hover:text-white"
          href="/"
        >
          <span aria-hidden="true">←</span>
          <span>Back to Video8n</span>
        </Link>

        <section className="glass-panel mt-8 overflow-hidden rounded-[36px] px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent)]" />
          <p className="eyebrow">Video8n Legal</p>
          <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[color:var(--muted)]">
            {lede}
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.24em] text-white/[0.45]">
            Last updated {updatedOn}
          </p>

          <div className="legal-copy mt-12">{children}</div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section className="mt-12 first:mt-0">
      <h2 className="text-2xl font-semibold text-white sm:text-[1.8rem]">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
