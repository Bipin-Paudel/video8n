import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { siInstagram, siYoutube } from "simple-icons";
import {
  COMPANY_NAME,
  DATA_DELETION_EMAIL,
  SUPPORT_EMAIL,
} from "@/lib/site";

const productLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#integrity", label: "Integrity" },
  { href: "/#notes", label: "Changelog" },
] as const;

const companyLinks = [
  { href: "/#trust", label: `About ${COMPANY_NAME}` },
  { href: `mailto:${SUPPORT_EMAIL}?subject=Video8n%20Careers`, label: "Careers" },
  { href: `mailto:${SUPPORT_EMAIL}?subject=Video8n%20Press%20Kit`, label: "Press Kit" },
] as const;

const socialLinks = [
  {
    href: "/#platforms",
    label: "See TikTok integration",
    name: "TikTok",
    type: "tiktok",
  },
  {
    href: "/#platforms",
    label: "See YouTube integration",
    name: "YouTube",
    type: "youtube",
  },
  {
    href: "/#platforms",
    label: "See Instagram integration",
    name: "Instagram",
    type: "instagram",
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-[#04040c]" id="footer">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_repeat(3,minmax(0,1fr))]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/video8n_logo.svg"
                alt="Video8n logo"
                width={611}
                height={336}
                className="h-11 w-auto"
              />
              <div>
                <p
                  className="text-lg font-bold tracking-[-0.02em] text-[#F0F0FF]"
                  style={{ fontFamily: "var(--font-display), sans-serif" }}
                >
                  Video8n
                </p>
                <p className="text-xs text-[#8888AA]">A {COMPANY_NAME} Product</p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  aria-label={link.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/4 text-[#F0F0FF] transition hover:border-[#00F5FF]/40 hover:text-white"
                  href={link.href}
                >
                  {link.type === "tiktok" ? (
                    <TikTokIcon className="h-5 w-5" />
                  ) : link.type === "youtube" ? (
                    <SimpleIcon path={siYoutube.path} className="h-5 w-5" />
                  ) : (
                    <SimpleIcon path={siInstagram.path} className="h-5 w-5" />
                  )}
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Product">
            {productLinks.map((link) => (
              <Link
                className="text-sm text-[#8888AA] transition hover:text-white"
                href={link.href}
                key={link.label}
              >
                {link.label}
              </Link>
            ))}
          </FooterColumn>

          <FooterColumn title="Company">
            {companyLinks.map((link) =>
              link.href.startsWith("mailto:") ? (
                <a
                  className="text-sm text-[#8888AA] transition hover:text-white"
                  href={link.href}
                  key={link.label}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  className="text-sm text-[#8888AA] transition hover:text-white"
                  href={link.href}
                  key={link.label}
                >
                  {link.label}
                </Link>
              ),
            )}
          </FooterColumn>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F0F0FF]">
              Enterprise & Support
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00F5FF]/20 bg-[#00F5FF]/8 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#DFFBFF]">
              <span className="h-2 w-2 rounded-full bg-[#00F5FF]" />
              Developer Review Ready
            </div>
            <p className="max-w-xs text-sm leading-7 text-[#8888AA]">
              For enterprise inquiries and technical support, contact our team:
            </p>
            <a
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#00F5FF] transition hover:text-white"
              href={`mailto:${SUPPORT_EMAIL}`}
            >
              {SUPPORT_EMAIL}
            </a>
            <a
              className="inline-flex items-center gap-2 text-sm text-[#8888AA] transition hover:text-white"
              href={`mailto:${DATA_DELETION_EMAIL}?subject=Video8n%20Data%20Deletion%20Request`}
            >
              Data Deletion Request
            </a>
            <p className="text-[11px] leading-5 text-[#8888AA]">
              Response within 1 business day. TikTok, Meta, and YouTube review
              inquiries welcome.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/8 pt-6 text-sm text-[#8888AA] md:flex-row md:items-center md:justify-between">
          <p>Copyright © 2026 {COMPANY_NAME}. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link
              className="text-sm text-[#8888AA] transition hover:text-white"
              href="/privacy-policy"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-sm text-[#8888AA] transition hover:text-white"
              href="/terms-of-service"
            >
              Terms of Service
            </Link>
            <a
              className="text-sm text-[#8888AA] transition hover:text-white"
              href={`mailto:${SUPPORT_EMAIL}?subject=Video8n%20Cookie%20Preferences`}
            >
              Cookie Preferences
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <div className="space-y-4">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F0F0FF]">
        {title}
      </p>
      <div className="flex flex-col gap-3 text-sm text-[#8888AA]">{children}</div>
    </div>
  );
}

function SimpleIcon({
  className,
  path,
}: {
  className?: string;
  path: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d={path} />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.228V2h-3.554v13.393a2.96 2.96 0 0 1-5.922 0 2.96 2.96 0 0 1 2.96-2.96c.184 0 .362.02.535.054V8.904a6.56 6.56 0 0 0-.535-.022A6.52 6.52 0 0 0 2.785 15.4a6.52 6.52 0 0 0 11.13 4.61 6.49 6.49 0 0 0 1.905-4.61V8.543a8.36 8.36 0 0 0 4.894 1.584V6.686a4.8 4.8 0 0 1-1.125 0Z"
        fill="#FF0050"
        transform="translate(-1.15 0.55)"
      />
      <path
        d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.228V2h-3.554v13.393a2.96 2.96 0 0 1-5.922 0 2.96 2.96 0 0 1 2.96-2.96c.184 0 .362.02.535.054V8.904a6.56 6.56 0 0 0-.535-.022A6.52 6.52 0 0 0 2.785 15.4a6.52 6.52 0 0 0 11.13 4.61 6.49 6.49 0 0 0 1.905-4.61V8.543a8.36 8.36 0 0 0 4.894 1.584V6.686a4.8 4.8 0 0 1-1.125 0Z"
        fill="#00F2EA"
        transform="translate(0.9 -0.2)"
      />
      <path
        d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.228V2h-3.554v13.393a2.96 2.96 0 0 1-5.922 0 2.96 2.96 0 0 1 2.96-2.96c.184 0 .362.02.535.054V8.904a6.56 6.56 0 0 0-.535-.022A6.52 6.52 0 0 0 2.785 15.4a6.52 6.52 0 0 0 11.13 4.61 6.49 6.49 0 0 0 1.905-4.61V8.543a8.36 8.36 0 0 0 4.894 1.584V6.686a4.8 4.8 0 0 1-1.125 0Z"
        fill="white"
      />
    </svg>
  );
}
