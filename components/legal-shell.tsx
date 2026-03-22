import type { ReactNode } from "react";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";

type LegalShellProps = {
  title: string;
  lede: string;
  updatedOn: string;
  sections: readonly string[];
  summary: readonly SummaryItem[];
  highlights?: readonly string[];
  primaryHelp: {
    href: string;
    label: string;
    title: string;
    copy: string;
  };
  secondaryHelp?: {
    href: string;
    label: string;
  };
  children: ReactNode;
};

type SummaryItem = {
  label: string;
  value: string;
  hint?: string;
};

type LegalSectionProps = {
  title: string;
  children: ReactNode;
};

export function LegalShell({
  title,
  lede,
  updatedOn,
  sections,
  summary,
  highlights = [],
  primaryHelp,
  secondaryHelp,
  children,
}: LegalShellProps) {
  return (
    <main className="relative isolate min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-30 bg-[radial-gradient(circle_at_top_left,rgba(255,129,76,0.16),transparent_24%),radial-gradient(circle_at_top_right,rgba(0,245,255,0.16),transparent_26%),linear-gradient(180deg,#04060f_0%,#08111d_48%,#040712_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-20 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:84px_84px] [mask-image:linear-gradient(180deg,rgba(255,255,255,0.42),transparent_78%)]" />
      <div className="pointer-events-none absolute inset-y-0 left-0 -z-10 w-[28rem] bg-[radial-gradient(circle_at_center,rgba(255,108,60,0.14),transparent_62%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-[32rem] bg-[radial-gradient(circle_at_center,rgba(0,245,255,0.14),transparent_60%)] blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-8 sm:pt-10">
        <Link
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/75 transition hover:bg-white/10 hover:text-white"
          href="/"
        >
          <span aria-hidden="true">←</span>
          <span>Back to Video8n</span>
        </Link>

        <section className="glass-panel mt-8 overflow-hidden rounded-[36px] px-6 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.55),transparent)]" />

          <div className="grid gap-8 xl:grid-cols-[minmax(0,1.28fr)_minmax(300px,0.72fr)] xl:items-start">
            <div>
              <p className="eyebrow">Video8n Legal Center</p>
              <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[0.95] text-white sm:text-5xl lg:text-[3.65rem]">
                {title}
              </h1>
              <p className="mt-5 max-w-4xl text-lg leading-9 text-[color:var(--muted)] sm:text-[1.18rem]">
                {lede}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <MetaChip label={`Updated ${updatedOn}`} />
                <MetaChip label="International service use" />
                <MetaChip label="Connected platform publishing" />
              </div>

              {highlights.length > 0 ? (
                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {highlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-[20px] border border-white/8 bg-white/[0.04] px-4 py-4 text-sm leading-7 text-white/80 backdrop-blur-xl"
                    >
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#00F5FF]">
                        Key Focus
                      </span>
                      <p className="mt-2 text-base leading-7 text-white/86">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
              {summary.map((item) => (
                <SummaryCard key={item.label} {...item} />
              ))}
            </div>
          </div>
        </section>

        <div className="mt-8 grid gap-8 xl:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="legal-sidebar space-y-4 xl:sticky xl:top-24 xl:self-start">
            <div className="soft-panel rounded-[28px] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/[0.45]">
                On This Page
              </p>
              <nav aria-label={`${title} sections`} className="mt-4">
                <ul className="space-y-2">
                  {sections.map((section) => (
                    <li key={section}>
                      <a
                        className="block rounded-2xl border border-transparent px-3 py-3 text-sm leading-6 text-white/70 transition hover:border-white/8 hover:bg-white/[0.04] hover:text-white"
                        href={`#${sectionId(section)}`}
                      >
                        {section}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="soft-panel rounded-[28px] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#00F5FF]">
                Need Help?
              </p>
              <h2 className="mt-3 text-xl font-semibold text-white">
                {primaryHelp.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/72">
                {primaryHelp.copy}
              </p>
              <a
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.1]"
                href={primaryHelp.href}
              >
                <span>{primaryHelp.label}</span>
                <span aria-hidden="true">↗</span>
              </a>

              {secondaryHelp ? (
                <a
                  className="mt-3 block text-sm text-[#00F5FF] transition hover:text-white"
                  href={secondaryHelp.href}
                >
                  {secondaryHelp.label}
                </a>
              ) : null}
            </div>
          </aside>

          <section className="glass-panel overflow-hidden rounded-[36px] px-6 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent)]" />

            <div className="flex flex-col gap-3 border-b border-white/8 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/[0.45]">
                  Official Document
                </p>
                <p className="mt-2 text-sm leading-7 text-white/72">
                  This page is the current public version of the {title.toLowerCase()} for
                  Video8n.
                </p>
              </div>
              <p className="text-sm font-medium text-white/58">
                Effective date: {updatedOn}
              </p>
            </div>

            <div className="legal-copy mt-10">{children}</div>
          </section>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section
      className="group mt-12 scroll-mt-28 border-t border-white/8 pt-10 first:mt-0 first:border-t-0 first:pt-0"
      id={sectionId(title)}
    >
      <div className="flex items-start justify-between gap-4">
        <h2 className="max-w-3xl text-2xl font-semibold leading-tight text-white sm:text-[2rem]">
          {title}
        </h2>
        <a
          aria-label={`Link to ${title}`}
          className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/50 opacity-0 transition hover:border-white/16 hover:bg-white/[0.08] hover:text-white group-hover:opacity-100"
          href={`#${sectionId(title)}`}
        >
          Link
        </a>
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function SummaryCard({ hint, label, value }: SummaryItem) {
  return (
    <div className="rounded-[24px] border border-white/8 bg-white/[0.04] px-5 py-5 backdrop-blur-xl">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/[0.45]">
        {label}
      </p>
      <p className="mt-3 text-lg font-semibold leading-7 text-white">{value}</p>
      {hint ? (
        <p className="mt-2 text-sm leading-7 text-white/65">{hint}</p>
      ) : null}
    </div>
  );
}

function MetaChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/62">
      <span className="h-2 w-2 rounded-full bg-[linear-gradient(135deg,#00F5FF,#FF00C8)] shadow-[0_0_18px_rgba(0,245,255,0.35)]" />
      {label}
    </span>
  );
}

function sectionId(title: string) {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
