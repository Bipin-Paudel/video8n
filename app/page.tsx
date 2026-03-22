"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { useEffect } from "react";
import {
  siFacebook,
  siGooglecloud,
  siInstagram,
  siYoutube,
} from "simple-icons";
import { SiteFooter } from "@/components/site-footer";
import {
  COMPANY_NAME,
  DATA_DELETION_EMAIL,
  ENGINE_NAME,
  SUPPORT_EMAIL,
} from "@/lib/site";

type BrandName =
  | "tiktok"
  | "youtube"
  | "facebook"
  | "instagram"
  | "googlecloud";

type PreviewCard = {
  accent: string;
  copy: string;
  platform: "TikTok" | "YouTube" | "Facebook";
  ratio: "9:16" | "16:9" | "1:1";
  tone: "vertical" | "wide" | "square";
};

type StepCard = {
  copy: string;
  title: string;
};

type PricingTier = {
  cta: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  href: string;
  name: string;
  price: string;
  unit: string;
};

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#platforms", label: "Platforms" },
  { href: "#pricing", label: "Pricing" },
  { href: "#integrity", label: "Integrity" },
  { href: "#notes", label: "Blog" },
] as const;

const trustSignals = [
  "No credit card required",
  "Posts in under 90 seconds",
  "C2PA Verified Content",
] as const;

const connectedPlatforms = [
  { brand: "tiktok" as const, name: "TikTok" },
  { brand: "youtube" as const, name: "YouTube" },
  { brand: "facebook" as const, name: "Facebook" },
  { brand: "instagram" as const, name: "Instagram" },
] as const;

const previewCards: PreviewCard[] = [
  {
    accent: "#00F5FF",
    copy: "Vertical • AI captions • Trending audio matched",
    platform: "TikTok",
    ratio: "9:16",
    tone: "vertical",
  },
  {
    accent: "#FF3B3B",
    copy: "Widescreen • Chapter markers • Auto description",
    platform: "YouTube",
    ratio: "16:9",
    tone: "wide",
  },
  {
    accent: "#1877F2",
    copy: "Square feed + Reels • Hashtag optimization • Scheduled",
    platform: "Facebook",
    ratio: "1:1",
    tone: "square",
  },
] as const;

const steps: StepCard[] = [
  {
    title: "Prompt",
    copy: "Type your idea, paste a script, or upload a concept.",
  },
  {
    title: "Generate",
    copy: "Pyple's AI produces a platform-ready video in seconds.",
  },
  {
    title: "Publish",
    copy: "One click posts to all connected platforms simultaneously.",
  },
] as const;

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "Free",
    unit: "5 videos/mo",
    description: "Built for first tests, fast approvals, and early traction.",
    features: [
      "5 videos each month",
      "TikTok-ready exports",
      "Manual review controls",
    ],
    cta: "Start Free",
    href: `mailto:${SUPPORT_EMAIL}?subject=Video8n%20Starter%20Plan`,
  },
  {
    name: "Creator",
    price: "$19",
    unit: "/mo",
    description: "Amplify your output across every core platform from one flow.",
    features: [
      "100 videos monthly",
      "TikTok, YouTube, Facebook, Instagram",
      "AI captions and scheduling",
    ],
    cta: "Pick Creator",
    href: `mailto:${SUPPORT_EMAIL}?subject=Video8n%20Creator%20Plan`,
    highlighted: true,
  },
  {
    name: "Agency",
    price: "$79",
    unit: "/mo",
    description: "Systematic content growth for teams, brands, and client work.",
    features: [
      "Unlimited video volume",
      "Team seats and approvals",
      "White-label delivery paths",
    ],
    cta: "Talk to Sales",
    href: `mailto:${SUPPORT_EMAIL}?subject=Video8n%20Agency%20Plan`,
  },
] as const;

const notes = [
  {
    label: "Reviewer note",
    title: "Human Approval",
    copy: "Every publish request stays blocked until a user reviews the final cut, label, and metadata pack.",
  },
  {
    label: "Workflow note",
    title: "Caption Control",
    copy: "LLM-drafted captions remain editable before export, so teams keep tone, compliance, and platform fit in hand.",
  },
  {
    label: "Format note",
    title: "Multi-Format Queue",
    copy: "One prompt fans into vertical, widescreen, and square deliverables without splitting the workflow or the review trail.",
  },
] as const;

const dataUsePolicies = [
  {
    platform: "TikTok",
    scope: "video.publish",
    copy: "Requested only when a user authorizes direct publishing from Video8n.",
  },
  {
    platform: "YouTube",
    scope: "youtube.upload",
    copy: "Requested only when a user authorizes channel uploads from Video8n.",
  },
  {
    platform: "Meta",
    scope: "publish permissions",
    copy: "Used only for creator-approved sharing to connected Facebook and Instagram destinations.",
  },
] as const;

export default function Home() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    document.documentElement.setAttribute("data-animate", "true");

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
      observer.disconnect();
      document.documentElement.removeAttribute("data-animate");
    };
  }, []);

  return (
    <>
      <main className="video8n-page">
        <div className="page-shell">
          <header className="site-nav" id="top">
            <div className="site-nav__inner">
              <a className="brand-lockup" href="#top" aria-label="Video8n home">
                <Image
                  src="/video8n_logo.svg"
                  alt="Video8n logo"
                  width={611}
                  height={336}
                  className="brand-lockup__mark"
                  priority
                />
                <div>
                  <p className="brand-lockup__title">Video8n</p>
                  <p className="brand-lockup__subtitle">by {COMPANY_NAME}</p>
                </div>
              </a>

              <nav className="site-nav__links" aria-label="Primary">
                {navLinks.map((item) => (
                  <a key={item.label} href={item.href}>
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="site-nav__actions">
                <a
                  className="cta-button cta-button--ghost cta-button--sm"
                  href={`mailto:${SUPPORT_EMAIL}?subject=Video8n%20Sign%20In%20Access`}
                >
                  Sign In
                </a>
                <ActionStack
                  href={`mailto:${SUPPORT_EMAIL}?subject=Video8n%20Start%20Free`}
                  label="Start Free"
                  size="sm"
                />
              </div>
            </div>
          </header>

          <section className="section hero" id="hero">
            <div className="container hero-grid">
              <div className="reveal is-visible" data-reveal>
                <p className="eyebrow">[ PYPLE TECHNOLOGY ]</p>
                <h1>Your Content, Everywhere, Instantly.</h1>
                <p className="section-copy hero-copy">
                  Scale your presence with a Pyple-powered AI engine that turns
                  one prompt into platform-ready videos for TikTok, YouTube,
                  Facebook, and Instagram.
                </p>
                <p className="hero-kicker">
                  Amplify your output. Built for velocity. Systematic content
                  growth.
                </p>

                <div className="hero-actions">
                  <ActionStack
                    href={`mailto:${SUPPORT_EMAIL}?subject=Generate%20Your%20First%20Video`}
                    label="Generate Your First Video"
                    icon={<ArrowRightIcon />}
                  />
                  <ActionStack
                    href={`mailto:${SUPPORT_EMAIL}?subject=Watch%20a%2060-second%20Demo`}
                    label="Watch a 60-second Demo"
                    variant="ghost"
                    icon={<PlayIcon />}
                  />
                </div>

                <ul className="hero-signals" aria-label="Trust signals">
                  {trustSignals.map((signal) => (
                    <li key={signal}>{signal}</li>
                  ))}
                </ul>
              </div>

              <div className="reveal" data-reveal>
                <div className="phone-scene">
                  <div className="phone-scene__glow phone-scene__glow--cyan" />
                  <div className="phone-scene__glow phone-scene__glow--magenta" />

                  <div className="phone-shell">
                    <div className="phone-shell__notch" />
                    <div className="phone-screen">
                      <div className="phone-screen__top">
                        <span className="ai-chip">Label: AI-Generated</span>
                        <span className="status-chip">Ready in 88s</span>
                      </div>

                      <div className="phone-video">
                        <div className="phone-video__noise" />
                        <p className="phone-video__eyebrow">
                          {ENGINE_NAME}
                        </p>
                        <h2 className="phone-video__title">
                          One prompt. Four feeds.
                        </h2>
                        <p className="phone-video__copy">
                          Auto captions, format shifts, and publish-ready packs.
                        </p>

                        <div className="phone-video__meter">
                          <span />
                        </div>

                        <div className="phone-video__card">
                          <span>TikTok preset matched</span>
                          <span>Trending hook synced</span>
                        </div>
                      </div>

                      <div className="phone-screen__bottom">
                        <div className="metric-tile">
                          <strong>1 Prompt</strong>
                          <span>Source workflow</span>
                        </div>
                        <div className="metric-tile metric-tile--animated">
                          <strong>4 Platforms</strong>
                          <span>Connected queue</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="connected-pills">
                    {connectedPlatforms.map((platform) => (
                      <div className="connected-pill glass-card" key={platform.name}>
                        <PlatformIcon
                          brand={platform.brand}
                          className="connected-pill__icon"
                        />
                        <span>{platform.name}</span>
                        <span className="connected-pill__dot" aria-hidden="true" />
                        <small>Connected</small>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="trust-strip" id="trust" aria-label="Trust bar">
            <div className="container">
              <p className="trust-strip__label">
                Securely powered by {COMPANY_NAME} Infrastructure
              </p>
            </div>
            <div className="marquee" aria-hidden="true">
              <div className="marquee__track">
                <TrustMarqueeItems />
                <TrustMarqueeItems />
              </div>
            </div>
          </section>

          <section className="section" id="platforms">
            <div className="container">
              <div className="section-head reveal" data-reveal>
                <p className="section-badge">MULTI-PLATFORM OUTPUT</p>
                <h2>One Video. Every Feed.</h2>
                <p className="section-copy">
                  Video8n renders every ratio, caption format, and posting pack
                  automatically for short-form, feed, and widescreen delivery.
                </p>
              </div>

              <div className="preview-grid">
                {previewCards.map((card) => (
                  <article
                    className="glass-card preview-card reveal"
                    data-reveal
                    key={card.platform}
                    style={{ ["--card-accent" as string]: card.accent }}
                  >
                    <div className="preview-card__top">
                      <div className="preview-card__brand">
                        <PlatformIcon
                          brand={brandNameFor(card.platform)}
                          className="preview-card__icon"
                        />
                        <span>{card.platform}</span>
                      </div>
                      <span className="ratio-badge">{card.ratio}</span>
                    </div>

                    <div
                      className={`preview-stage preview-stage--${card.tone}`}
                      aria-hidden="true"
                    >
                      <div className="preview-stage__chrome" />
                      <div className="preview-stage__media" />
                      <div className="preview-stage__caption" />
                      <div className="preview-stage__footer">
                        <span />
                        <span />
                      </div>
                    </div>

                    <p className="section-copy preview-card__copy">{card.copy}</p>
                  </article>
                ))}
              </div>

              <div className="flow-strip glass-card reveal" data-reveal>
                <span className="flow-chip">1 Prompt</span>
                <span className="flow-arrow">→</span>
                <span className="flow-chip">AI Engine</span>
                <span className="flow-arrow">→</span>
                <span className="flow-chip">3 Formats</span>
                <span className="flow-arrow">→</span>
                <span className="flow-chip">Posted</span>
              </div>
            </div>
          </section>

          <section className="section" id="integrity">
            <div className="container">
              <div className="section-head reveal" data-reveal>
                <p className="section-badge">PLATFORM INTEGRITY</p>
                <h2>Platform Integrity.</h2>
                <p className="section-copy">
                  Reviewer-ready labeling, scope use, and human approval stay
                  visible before Video8n calls any connected publishing API.
                </p>
              </div>

              <div className="safety-grid">
                <article className="glass-card safety-main reveal" data-reveal>
                  <p className="section-badge">SYNTHETIC MEDIA LABELING</p>
                  <h3>Transparent by Default.</h3>
                  <p className="section-copy">
                    Video8n is a product of {COMPANY_NAME}. Every synthetic
                    asset carries the is_ai_generated: true metadata flag and
                    C2PA Content Credentials before supported publishing begins.
                  </p>

                  <pre className="code-block">
                    <code>{`{
  "is_ai_generated": true,
  "standard": "C2PA",
  "issuer": "Pyple Technology"
}`}</code>
                  </pre>
                </article>

                <div className="safety-side">
                  <article className="glass-card safety-mini reveal" data-reveal>
                    <div className="icon-tile">
                      <ShieldIcon />
                    </div>
                    <h3>Data Use Policy</h3>
                    <p className="section-copy">
                      We request only the scopes needed to share user-authorized
                      content to connected platforms.
                    </p>
                    <ul className="policy-list">
                      {dataUsePolicies.map((policy) => (
                        <li key={policy.platform}>
                          <div className="policy-list__header">
                            <strong>{policy.platform}</strong>
                            <span className="policy-list__scope">
                              {policy.scope}
                            </span>
                          </div>
                          <p>{policy.copy}</p>
                        </li>
                      ))}
                    </ul>
                    <a
                      className="mini-link"
                      href={`mailto:${DATA_DELETION_EMAIL}?subject=Video8n%20Data%20Deletion%20Request`}
                    >
                      <span>Data Deletion Request</span>
                      <ArrowRightIcon />
                    </a>
                  </article>

                  <article className="glass-card safety-mini reveal" data-reveal>
                    <div className="icon-tile">
                      <VerifiedIcon />
                    </div>
                    <h3>Human Review</h3>
                    <p className="section-copy">
                      Users review captions, labels, destinations, and timing
                      before Video8n sends media to TikTok, Meta, or YouTube.
                    </p>
                    <div className="badge-row">
                      <span className="review-badge">Product of Pyple Technology</span>
                      <span className="review-badge">Audit trail retained</span>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>

          <section className="section" id="features">
            <div className="container">
              <div className="section-head reveal" data-reveal>
                <p className="section-badge">WORKFLOW</p>
                <h2>How It Works</h2>
                <p className="section-copy">
                  Scale your presence without stacking tools, duplicate edits,
                  or separate approval queues.
                </p>
              </div>

              <div className="steps-grid">
                {steps.map((step, index) => (
                  <article className="glass-card step-card reveal" data-reveal key={step.title}>
                    <div className="step-card__icon">
                      {index === 0 ? (
                        <PromptIcon />
                      ) : index === 1 ? (
                        <SparkIcon />
                      ) : (
                        <PublishIcon />
                      )}
                    </div>
                    <span className="step-card__number">0{index + 1}</span>
                    <h3>{step.title}</h3>
                    <p className="section-copy">{step.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section" id="pricing">
            <div className="container">
              <div className="section-head reveal" data-reveal>
                <p className="section-badge">PRICING</p>
                <h2>Plans Built for Velocity.</h2>
                <p className="section-copy">
                  Built for creators, brand teams, and agencies that need more
                  output without more headcount.
                </p>
              </div>

              <div className="pricing-grid">
                {pricingTiers.map((tier) => (
                  <article
                    className={`glass-card pricing-card reveal${
                      tier.highlighted ? " pricing-card--featured" : ""
                    }`}
                    data-reveal
                    key={tier.name}
                  >
                    {tier.highlighted ? (
                      <span className="pricing-badge">Most Popular</span>
                    ) : null}
                    <p className="pricing-card__name">{tier.name}</p>
                    <div className="pricing-card__price-row">
                      <strong>{tier.price}</strong>
                      <span>{tier.unit}</span>
                    </div>
                    <p className="section-copy">{tier.description}</p>
                    <ul className="pricing-list">
                      {tier.features.map((feature) => (
                        <li key={feature}>
                          <span className="pricing-list__dot" aria-hidden="true" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <ActionStack
                      href={tier.href}
                      label={tier.cta}
                      variant={tier.highlighted ? "primary" : "ghost"}
                      stretch
                    />
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section" id="notes">
            <div className="container">
              <div className="section-head reveal" data-reveal>
                <p className="section-badge">BLOG + CHANGELOG</p>
                <h2>Velocity Notes.</h2>
                <p className="section-copy">
                  Built for velocity means clearer review, tighter disclosure,
                  and fewer surprises before content reaches an API.
                </p>
              </div>

              <div className="notes-grid">
                {notes.map((note) => (
                  <article className="glass-card note-card reveal" data-reveal key={note.title}>
                    <p className="note-card__label">{note.label}</p>
                    <h3>{note.title}</h3>
                    <p className="section-copy">{note.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <SiteFooter />
        </div>
      </main>

      <style jsx global>{`
        .video8n-page {
          --bg: #020208;
          --bg-soft: #070713;
          --surface: #0e0e1a;
          --surface-solid: rgba(14, 14, 26, 0.94);
          --text: #f0f0ff;
          --muted: #8888aa;
          --cyan: #00f5ff;
          --magenta: #ff00c8;
          --line: rgba(255, 255, 255, 0.08);
          --line-strong: rgba(255, 255, 255, 0.14);
          --success: #21d887;
          --shadow: 0 28px 90px rgba(0, 0, 0, 0.42);
          background:
            radial-gradient(circle at 12% 8%, rgba(0, 245, 255, 0.12), transparent 24%),
            radial-gradient(circle at 88% 10%, rgba(255, 0, 200, 0.14), transparent 18%),
            radial-gradient(circle at 50% 120%, rgba(0, 245, 255, 0.06), transparent 34%),
            linear-gradient(180deg, #020208 0%, #050512 56%, #04040d 100%);
          color: var(--text);
        }

        .video8n-page * {
          box-sizing: border-box;
        }

        .video8n-page a {
          color: inherit;
          text-decoration: none;
        }

        .page-shell {
          position: relative;
          overflow: hidden;
        }

        .page-shell::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 92px 92px;
          mask-image: linear-gradient(180deg, rgba(255, 255, 255, 0.16), transparent 72%);
          opacity: 0.25;
          pointer-events: none;
        }

        .container {
          width: min(1200px, calc(100% - 48px));
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .section {
          padding: 120px 0;
          position: relative;
        }

        .site-nav {
          position: sticky;
          top: 0;
          z-index: 60;
          border-bottom: 1px solid var(--line);
          background: rgba(2, 2, 8, 0.72);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .site-nav__inner {
          width: min(1280px, calc(100% - 48px));
          margin: 0 auto;
          min-height: 84px;
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 24px;
        }

        .brand-lockup {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          min-width: 0;
        }

        .brand-lockup__mark {
          width: 56px;
          height: auto;
        }

        .brand-lockup__title {
          font-family: var(--font-display), sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          line-height: 1;
          letter-spacing: -0.02em;
          color: var(--text);
          margin: 0;
        }

        .brand-lockup__subtitle {
          margin: 6px 0 0;
          font-size: 11px;
          line-height: 1;
          color: var(--muted);
          letter-spacing: 0.02em;
        }

        .site-nav__links {
          display: flex;
          justify-content: center;
          gap: 28px;
          font-size: 0.96rem;
          color: rgba(240, 240, 255, 0.84);
        }

        .site-nav__links a,
        .footer-link {
          transition:
            color 180ms ease,
            opacity 180ms ease;
        }

        .site-nav__links a:hover,
        .footer-link:hover {
          color: white;
        }

        .site-nav__actions {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .eyebrow,
        .section-badge,
        .phone-video__eyebrow,
        .note-card__label {
          font-family:
            ui-monospace, SFMono-Regular, SFMono, Menlo, Monaco, Consolas,
            "Liberation Mono", "Courier New", monospace;
        }

        .eyebrow {
          color: var(--cyan);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.32em;
          margin: 0;
        }

        .hero {
          padding-top: 78px;
          padding-bottom: 96px;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(360px, 0.9fr);
          gap: 56px;
          align-items: center;
        }

        .hero h1,
        .section-head h2,
        .safety-main h3,
        .step-card h3,
        .pricing-card__price-row strong,
        .note-card h3,
        .safety-mini h3 {
          font-family: var(--font-display), sans-serif;
          letter-spacing: -0.04em;
        }

        .hero h1 {
          margin: 18px 0 0;
          max-width: 8ch;
          font-size: clamp(3.4rem, 7vw, 4.5rem);
          line-height: 0.93;
        }

        .section-copy {
          color: var(--muted);
          font-size: 1rem;
          line-height: 1.75;
          margin: 0;
        }

        .hero-copy {
          margin-top: 24px;
          max-width: 37rem;
          font-size: 1.25rem;
        }

        .hero-kicker {
          margin: 18px 0 0;
          color: rgba(240, 240, 255, 0.8);
          font-size: 0.98rem;
          line-height: 1.7;
        }

        .hero-actions {
          margin-top: 32px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          max-width: 360px;
        }

        .action-stack {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
        }

        .action-stack--stretch {
          width: 100%;
        }

        .cta-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          overflow: hidden;
          min-height: 52px;
          padding: 14px 18px;
          border-radius: 12px;
          border: 1px solid transparent;
          font-size: 0.96rem;
          font-weight: 700;
          transition:
            transform 180ms ease,
            border-color 180ms ease,
            box-shadow 180ms ease,
            background 180ms ease;
        }

        .cta-button::after {
          content: "";
          position: absolute;
          inset: -2px;
          background: linear-gradient(
            110deg,
            transparent 24%,
            rgba(255, 255, 255, 0.28) 46%,
            transparent 66%
          );
          transform: translateX(-130%);
          animation: shimmer 3.2s linear infinite;
        }

        .cta-button > * {
          position: relative;
          z-index: 1;
        }

        .cta-button:hover {
          transform: translateY(-2px);
        }

        .cta-button--primary {
          background: linear-gradient(120deg, var(--cyan), var(--magenta));
          color: #06070d;
          box-shadow: 0 22px 50px rgba(0, 245, 255, 0.18);
        }

        .cta-button--ghost {
          background: rgba(255, 255, 255, 0.04);
          border-color: var(--line-strong);
          color: var(--text);
        }

        .cta-button--sm {
          min-height: 46px;
          padding: 12px 16px;
          font-size: 0.92rem;
        }

        .cta-button--stretch {
          width: 100%;
        }

        .encryption-note {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 10px;
          line-height: 1.4;
          color: var(--muted);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .encryption-note__icon {
          width: 14px;
          height: 14px;
          color: var(--cyan);
          flex: none;
        }

        .hero-signals {
          list-style: none;
          padding: 0;
          margin: 28px 0 0;
          display: flex;
          flex-wrap: wrap;
          gap: 10px 18px;
          color: rgba(240, 240, 255, 0.86);
          font-size: 0.94rem;
        }

        .hero-signals li::before {
          content: "✦";
          margin-right: 8px;
          color: var(--cyan);
        }

        .phone-scene {
          position: relative;
          min-height: 660px;
          display: grid;
          place-items: center;
        }

        .phone-scene__glow {
          position: absolute;
          border-radius: 999px;
          filter: blur(80px);
          opacity: 0.42;
          pointer-events: none;
        }

        .phone-scene__glow--cyan {
          width: 320px;
          height: 320px;
          background: rgba(0, 245, 255, 0.32);
          top: 72px;
          left: 18px;
        }

        .phone-scene__glow--magenta {
          width: 280px;
          height: 280px;
          background: rgba(255, 0, 200, 0.32);
          right: 8px;
          bottom: 138px;
        }

        .phone-shell {
          position: relative;
          width: min(100%, 360px);
          aspect-ratio: 0.56;
          padding: 16px;
          border-radius: 36px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.03)),
            linear-gradient(160deg, rgba(0, 245, 255, 0.12), rgba(255, 0, 200, 0.08));
          box-shadow: 0 36px 90px rgba(0, 0, 0, 0.45);
          transform: perspective(1600px) rotateY(-12deg) rotateX(8deg);
          animation: phoneFloat 7.6s ease-in-out infinite;
        }

        .phone-shell__notch {
          position: absolute;
          top: 14px;
          left: 50%;
          transform: translateX(-50%);
          width: 112px;
          height: 20px;
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.44);
          z-index: 3;
        }

        .phone-screen {
          height: 100%;
          border-radius: 28px;
          overflow: hidden;
          background: linear-gradient(180deg, #090915 0%, #0d1024 100%);
          position: relative;
        }

        .phone-screen::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 24% 16%, rgba(0, 245, 255, 0.2), transparent 28%),
            radial-gradient(circle at 80% 18%, rgba(255, 0, 200, 0.2), transparent 22%);
          pointer-events: none;
        }

        .phone-screen__top,
        .phone-screen__bottom {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: space-between;
          gap: 12px;
          padding: 22px 20px 0;
        }

        .phone-screen__bottom {
          padding-top: 18px;
          padding-bottom: 20px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .ai-chip,
        .status-chip {
          display: inline-flex;
          align-items: center;
          border-radius: 999px;
          padding: 8px 12px;
          font-size: 0.76rem;
          font-weight: 700;
          line-height: 1;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(2, 2, 8, 0.54);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        .ai-chip {
          color: white;
          box-shadow:
            0 0 0 1px rgba(0, 245, 255, 0.12),
            0 0 26px rgba(0, 245, 255, 0.12),
            0 0 40px rgba(255, 0, 200, 0.12);
          animation: neonPulse 3.4s ease-in-out infinite;
        }

        .status-chip {
          color: rgba(240, 240, 255, 0.8);
        }

        .phone-video {
          position: relative;
          margin: 16px 18px 0;
          min-height: 420px;
          border-radius: 28px;
          overflow: hidden;
          padding: 24px 22px 22px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background:
            linear-gradient(180deg, rgba(0, 245, 255, 0.12), transparent 38%),
            linear-gradient(180deg, rgba(8, 11, 28, 0.32), rgba(3, 4, 12, 0.88)),
            linear-gradient(145deg, rgba(0, 245, 255, 0.12), rgba(255, 0, 200, 0.18));
        }

        .phone-video__noise {
          position: absolute;
          inset: -20%;
          background:
            radial-gradient(circle at 18% 22%, rgba(255, 255, 255, 0.24), transparent 18%),
            radial-gradient(circle at 72% 28%, rgba(255, 255, 255, 0.16), transparent 22%),
            conic-gradient(
              from 0deg,
              rgba(0, 245, 255, 0.2),
              rgba(255, 0, 200, 0.16),
              rgba(0, 245, 255, 0.14)
            );
          opacity: 0.72;
          animation: slowSpin 18s linear infinite;
        }

        .phone-video__eyebrow {
          position: relative;
          z-index: 1;
          margin: 0;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.24em;
          color: rgba(240, 240, 255, 0.7);
          text-transform: uppercase;
        }

        .phone-video__title {
          position: relative;
          z-index: 1;
          margin: 10px 0 0;
          max-width: 9ch;
          font-size: 1.7rem;
          line-height: 0.96;
          letter-spacing: -0.04em;
          color: white;
        }

        .phone-video__copy {
          position: relative;
          z-index: 1;
          margin: 14px 0 0;
          max-width: 18rem;
          font-size: 0.95rem;
          line-height: 1.7;
          color: rgba(240, 240, 255, 0.82);
        }

        .phone-video__meter {
          position: relative;
          z-index: 1;
          margin-top: 20px;
          height: 10px;
          border-radius: 999px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.12);
        }

        .phone-video__meter span {
          display: block;
          width: 74%;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, var(--cyan), var(--magenta));
          animation: swipeLift 2.8s ease-in-out infinite;
        }

        .phone-video__card {
          position: relative;
          z-index: 1;
          margin-top: 18px;
          display: flex;
          justify-content: space-between;
          gap: 12px;
          padding: 12px 14px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(2, 2, 8, 0.42);
          color: rgba(240, 240, 255, 0.88);
          font-size: 0.85rem;
          line-height: 1.5;
        }

        .metric-tile {
          padding: 14px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .metric-tile strong {
          font-size: 1rem;
          line-height: 1.2;
          color: white;
        }

        .metric-tile span {
          font-size: 0.82rem;
          line-height: 1.5;
          color: var(--muted);
        }

        .metric-tile--animated {
          animation: swipeLift 3s ease-in-out infinite;
        }

        .connected-pills {
          width: min(100%, 520px);
          margin-top: 24px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
        }

        .glass-card {
          position: relative;
          border-radius: 16px;
          border: 1px solid var(--line);
          background: rgba(255, 255, 255, 0.04);
          box-shadow: var(--shadow);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .connected-pill {
          padding: 12px 14px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          min-width: 0;
        }

        .connected-pill__icon {
          width: 20px;
          height: 20px;
          color: white;
          flex: none;
        }

        .connected-pill span {
          font-weight: 600;
          color: white;
        }

        .connected-pill small {
          font-size: 0.78rem;
          line-height: 1;
          color: var(--muted);
        }

        .connected-pill__dot {
          width: 9px;
          height: 9px;
          border-radius: 999px;
          background: var(--success);
          box-shadow: 0 0 0 5px rgba(33, 216, 135, 0.12);
          flex: none;
        }

        .trust-strip {
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          background: rgba(6, 6, 14, 0.84);
          position: relative;
          z-index: 1;
          overflow: hidden;
        }

        .trust-strip__label {
          margin: 0;
          padding: 28px 0 14px;
          text-align: center;
          color: var(--muted);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .marquee {
          overflow: hidden;
          padding: 0 0 28px;
          mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
        }

        .marquee__track {
          display: flex;
          width: max-content;
          animation: marquee 26s linear infinite;
        }

        .marquee__item {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          padding-right: 24px;
          white-space: nowrap;
          color: rgba(240, 240, 255, 0.88);
          font-size: 0.96rem;
          line-height: 1;
        }

        .marquee__item + .marquee__item::before {
          content: "";
          width: 1px;
          height: 18px;
          background: rgba(0, 245, 255, 0.3);
          margin-right: 24px;
        }

        .marquee__icon {
          width: 18px;
          height: 18px;
          color: white;
          flex: none;
        }

        .marquee__image {
          width: 26px;
          height: auto;
        }

        .marquee__verified {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 18px;
          height: 18px;
          border-radius: 999px;
          background: rgba(0, 245, 255, 0.16);
          color: var(--cyan);
        }

        .section-head {
          max-width: 720px;
          margin: 0 auto 46px;
          text-align: center;
        }

        .section-badge {
          margin: 0;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.24em;
          color: var(--cyan);
          text-transform: uppercase;
        }

        .section-head h2 {
          margin: 16px 0 0;
          font-size: clamp(2.7rem, 5vw, 3.25rem);
          line-height: 0.96;
        }

        .section-head .section-copy {
          margin-top: 16px;
        }

        .preview-grid,
        .pricing-grid,
        .notes-grid {
          display: grid;
          gap: 22px;
        }

        .preview-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .preview-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          min-height: 470px;
        }

        .preview-card__top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
        }

        .preview-card__brand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 1rem;
          font-weight: 700;
          color: white;
        }

        .preview-card__icon {
          width: 20px;
          height: 20px;
          color: var(--card-accent);
          flex: none;
        }

        .ratio-badge {
          display: inline-flex;
          align-items: center;
          border-radius: 999px;
          border: 1px solid color-mix(in srgb, var(--card-accent) 45%, transparent);
          color: var(--card-accent);
          padding: 7px 12px;
          font-size: 0.74rem;
          font-weight: 700;
          line-height: 1;
        }

        .preview-stage {
          position: relative;
          margin-top: 6px;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background:
            linear-gradient(160deg, color-mix(in srgb, var(--card-accent) 18%, #090915), #0d1121 70%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.01));
        }

        .preview-stage--vertical {
          width: min(100%, 270px);
          aspect-ratio: 9 / 16;
          margin-left: auto;
          margin-right: auto;
        }

        .preview-stage--wide {
          width: 100%;
          aspect-ratio: 16 / 9;
        }

        .preview-stage--square {
          width: min(100%, 320px);
          aspect-ratio: 1 / 1;
          margin-left: auto;
          margin-right: auto;
        }

        .preview-stage__chrome {
          position: absolute;
          top: 14px;
          left: 14px;
          right: 14px;
          height: 10px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.12);
        }

        .preview-stage__media {
          position: absolute;
          left: 14px;
          right: 14px;
          top: 38px;
          bottom: 72px;
          border-radius: 18px;
          background:
            radial-gradient(circle at 24% 22%, rgba(255, 255, 255, 0.22), transparent 22%),
            linear-gradient(145deg, color-mix(in srgb, var(--card-accent) 30%, transparent), transparent 56%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.12));
        }

        .preview-stage__caption {
          position: absolute;
          left: 18px;
          right: 18px;
          bottom: 46px;
          height: 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.14);
        }

        .preview-stage__footer {
          position: absolute;
          left: 18px;
          right: 18px;
          bottom: 18px;
          display: flex;
          justify-content: space-between;
          gap: 12px;
        }

        .preview-stage__footer span {
          display: block;
          height: 10px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.1);
          flex: 1;
        }

        .preview-card__copy {
          margin-top: auto;
        }

        .flow-strip {
          margin-top: 24px;
          padding: 18px 22px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 14px;
        }

        .flow-chip {
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: rgba(240, 240, 255, 0.9);
          font-size: 0.92rem;
          font-weight: 700;
        }

        .flow-arrow {
          color: var(--cyan);
          font-size: 1.2rem;
          line-height: 1;
        }

        .safety-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.88fr);
          gap: 22px;
          align-items: stretch;
        }

        .safety-main {
          padding: 32px;
          border-color: rgba(0, 245, 255, 0.2);
          box-shadow:
            0 0 0 1px rgba(0, 245, 255, 0.1),
            0 34px 90px rgba(0, 245, 255, 0.06);
        }

        .safety-main h3,
        .safety-mini h3,
        .step-card h3,
        .note-card h3 {
          margin: 16px 0 0;
          font-size: 1.72rem;
          line-height: 1;
          color: white;
        }

        .safety-main .section-copy {
          margin-top: 16px;
          max-width: 58ch;
        }

        .code-block {
          margin: 24px 0 0;
          padding: 18px;
          border-radius: 16px;
          overflow: auto;
          background: rgba(2, 2, 8, 0.88);
          border: 1px solid rgba(0, 245, 255, 0.16);
          color: var(--cyan);
          font-size: 0.95rem;
          line-height: 1.7;
        }

        .safety-side {
          display: grid;
          gap: 22px;
        }

        .safety-mini,
        .step-card,
        .pricing-card,
        .note-card {
          padding: 24px;
        }

        .icon-tile,
        .step-card__icon {
          width: 48px;
          height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.04);
          color: var(--cyan);
        }

        .safety-mini .section-copy,
        .step-card .section-copy,
        .note-card .section-copy {
          margin-top: 14px;
        }

        .policy-list {
          list-style: none;
          padding: 0;
          margin: 18px 0 0;
          display: grid;
          gap: 14px;
        }

        .policy-list li {
          padding: 14px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.03);
        }

        .policy-list__header {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px;
        }

        .policy-list__header strong {
          font-size: 0.95rem;
          line-height: 1.3;
          color: white;
        }

        .policy-list__scope,
        .review-badge {
          display: inline-flex;
          align-items: center;
          border-radius: 999px;
          padding: 6px 10px;
          border: 1px solid rgba(0, 245, 255, 0.14);
          background: rgba(0, 245, 255, 0.08);
          color: var(--cyan);
          font-size: 0.72rem;
          font-weight: 700;
          line-height: 1;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .policy-list p {
          margin: 10px 0 0;
          color: var(--muted);
          font-size: 0.92rem;
          line-height: 1.7;
        }

        .mini-link {
          margin-top: 18px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: white;
          font-size: 0.92rem;
          font-weight: 700;
          transition:
            color 180ms ease,
            transform 180ms ease;
        }

        .mini-link:hover {
          color: var(--cyan);
          transform: translateX(2px);
        }

        .badge-row {
          margin-top: 16px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .review-badge {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.1);
          color: rgba(240, 240, 255, 0.86);
          letter-spacing: 0.04em;
        }

        .steps-grid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .steps-grid::before {
          content: "";
          position: absolute;
          left: 15%;
          right: 15%;
          top: 52px;
          height: 1px;
          background: linear-gradient(90deg, rgba(0, 245, 255, 0.08), rgba(0, 245, 255, 0.42), rgba(255, 0, 200, 0.22));
          pointer-events: none;
        }

        .step-card {
          position: relative;
          z-index: 1;
        }

        .step-card__number {
          display: inline-block;
          margin-top: 18px;
          font-size: 1rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          color: var(--cyan);
        }

        .pricing-grid,
        .notes-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .pricing-card {
          display: flex;
          flex-direction: column;
          gap: 18px;
          min-height: 100%;
        }

        .pricing-card--featured {
          border-color: rgba(0, 245, 255, 0.22);
          box-shadow:
            0 0 0 1px rgba(0, 245, 255, 0.12),
            0 36px 90px rgba(0, 245, 255, 0.08);
          transform: translateY(-10px);
        }

        .pricing-badge {
          align-self: flex-start;
          padding: 7px 12px;
          border-radius: 999px;
          background: rgba(0, 245, 255, 0.14);
          color: var(--cyan);
          font-size: 0.74rem;
          font-weight: 800;
          line-height: 1;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .pricing-card__name {
          margin: 0;
          font-size: 0.86rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(240, 240, 255, 0.76);
        }

        .pricing-card__price-row {
          display: flex;
          align-items: flex-end;
          gap: 10px;
        }

        .pricing-card__price-row strong {
          font-size: 3rem;
          line-height: 0.9;
          color: white;
        }

        .pricing-card__price-row span {
          color: var(--muted);
          font-size: 1rem;
          line-height: 1.2;
        }

        .pricing-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 10px;
          color: rgba(240, 240, 255, 0.86);
          font-size: 0.96rem;
          line-height: 1.65;
        }

        .pricing-list li {
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }

        .pricing-list__dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: linear-gradient(90deg, var(--cyan), var(--magenta));
          margin-top: 9px;
          flex: none;
        }

        .note-card__label {
          margin: 0;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--cyan);
        }

        .reveal {
          opacity: 1;
          transform: translateY(0);
          transition:
            opacity 720ms ease,
            transform 720ms ease;
        }

        html[data-animate="true"] .video8n-page .reveal {
          opacity: 0;
          transform: translateY(28px);
        }

        html[data-animate="true"] .video8n-page .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @supports not (
          (backdrop-filter: blur(20px)) or (-webkit-backdrop-filter: blur(20px))
        ) {
          .glass-card,
          .site-nav,
          .ai-chip,
          .status-chip {
            background: var(--surface-solid);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-130%);
          }
          100% {
            transform: translateX(220%);
          }
        }

        @keyframes phoneFloat {
          0%,
          100% {
            transform: perspective(1600px) rotateY(-12deg) rotateX(8deg) translateY(0);
          }
          50% {
            transform: perspective(1600px) rotateY(-10deg) rotateX(8deg) translateY(-14px);
          }
        }

        @keyframes neonPulse {
          0%,
          100% {
            box-shadow:
              0 0 0 1px rgba(0, 245, 255, 0.12),
              0 0 22px rgba(0, 245, 255, 0.08),
              0 0 32px rgba(255, 0, 200, 0.08);
          }
          50% {
            box-shadow:
              0 0 0 1px rgba(0, 245, 255, 0.24),
              0 0 28px rgba(0, 245, 255, 0.16),
              0 0 44px rgba(255, 0, 200, 0.18);
          }
        }

        @keyframes swipeLift {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.92;
          }
          50% {
            transform: translateY(-8px);
            opacity: 1;
          }
        }

        @keyframes slowSpin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 1100px) {
          .site-nav__inner {
            grid-template-columns: 1fr;
            justify-items: stretch;
            gap: 12px;
            padding: 14px 0;
          }

          .site-nav__links {
            justify-content: flex-start;
            overflow-x: auto;
            padding-bottom: 4px;
          }

          .site-nav__actions {
            justify-content: flex-start;
            flex-wrap: wrap;
          }

          .hero-grid,
          .safety-grid,
          .preview-grid,
          .pricing-grid,
          .notes-grid,
          .steps-grid {
            grid-template-columns: 1fr;
          }

          .steps-grid::before {
            display: none;
          }

          .phone-scene {
            min-height: auto;
          }

          .pricing-card--featured {
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .container,
          .site-nav__inner {
            width: min(100%, calc(100% - 32px));
          }

          .section {
            padding: 88px 0;
          }

          .hero {
            padding-top: 52px;
            padding-bottom: 76px;
          }

          .hero h1 {
            font-size: clamp(2.9rem, 13vw, 4rem);
          }

          .hero-copy {
            font-size: 1.08rem;
          }

          .hero-actions,
          .action-stack,
          .action-stack--stretch {
            max-width: none;
            width: 100%;
          }

          .cta-button,
          .cta-button--stretch {
            width: 100%;
          }

          .phone-shell {
            width: min(100%, 320px);
          }

          .phone-video {
            min-height: 360px;
          }

          .flow-strip,
          .connected-pills {
            justify-content: flex-start;
          }

          .connected-pill {
            width: 100%;
            justify-content: flex-start;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal,
          .cta-button,
          .phone-shell,
          .phone-video__noise,
          .metric-tile--animated,
          .marquee__track,
          .ai-chip,
          .phone-video__meter span {
            animation: none !important;
            transition: none !important;
          }

          .cta-button::after {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

function ActionStack({
  href,
  label,
  icon,
  size = "md",
  stretch = false,
  variant = "primary",
}: {
  href: string;
  icon?: ReactNode;
  label: string;
  size?: "md" | "sm";
  stretch?: boolean;
  variant?: "ghost" | "primary";
}) {
  return (
    <div className={`action-stack${stretch ? " action-stack--stretch" : ""}`}>
      <a
        className={`cta-button cta-button--${variant} cta-button--${size}${
          stretch ? " cta-button--stretch" : ""
        }`}
        href={href}
      >
        <span>{label}</span>
        {icon}
      </a>
      <span className="encryption-note">
        <LockIcon className="encryption-note__icon" />
        256-bit Pyple Encryption
      </span>
    </div>
  );
}

function TrustMarqueeItems() {
  return (
    <>
      <span className="marquee__item">
        <PlatformIcon brand="tiktok" className="marquee__icon" />
        TikTok
      </span>
      <span className="marquee__item">
        <PlatformIcon brand="youtube" className="marquee__icon" />
        YouTube
      </span>
      <span className="marquee__item">
        <PlatformIcon brand="facebook" className="marquee__icon" />
        Facebook
      </span>
      <span className="marquee__item">
        <PlatformIcon brand="instagram" className="marquee__icon" />
        Instagram
      </span>
      <span className="marquee__item">
        <PlatformIcon brand="googlecloud" className="marquee__icon" />
        Google Cloud
      </span>
      <span className="marquee__item">
        <VerifiedIcon className="marquee__icon" />
        Content Credentials
      </span>
      <span className="marquee__item">
        <Image
          src="/video8n_logo.svg"
          alt=""
          width={611}
          height={336}
          className="marquee__image"
        />
        {COMPANY_NAME}
        <span className="marquee__verified">
          <CheckIcon />
        </span>
      </span>
    </>
  );
}

function PlatformIcon({
  brand,
  className,
}: {
  brand: BrandName;
  className?: string;
}) {
  if (brand === "tiktok") {
    return <TikTokIcon className={className} />;
  }

  const pathMap = {
    facebook: siFacebook.path,
    googlecloud: siGooglecloud.path,
    instagram: siInstagram.path,
    youtube: siYoutube.path,
  } as const;

  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d={pathMap[brand]} />
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

function PromptIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 6.5h14M5 12h8m-8 5.5h14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path
        d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PublishIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 5v11m0-11 4 4m-4-4-4 4M5 19h14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3 5.5 5.8v5.6c0 4.1 2.7 7.9 6.5 9.6 3.8-1.7 6.5-5.5 6.5-9.6V5.8L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m9.2 12 2 2 3.6-4.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VerifiedIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="m12 2.8 2.3 2 3.1-.2 1.4 2.8 2.7 1.6-.6 3 1.4 2.8-2 2.3.2 3.1-2.8 1.4-1.6 2.7-3-.6-2.8 1.4-2.3-2-3.1.2-1.4-2.8-2.7-1.6.6-3-1.4-2.8 2-2.3-.2-3.1 2.8-1.4 1.6-2.7 3 .6L12 2.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="m8.7 12.4 2.1 2.1 4.5-4.9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" width="16" height="16">
      <path
        d="M5 12h14m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" width="16" height="16">
      <path
        d="M8.5 7.4 17 12l-8.5 4.6V7.4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M7 10V8a5 5 0 1 1 10 0v2m-9 0h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" width="12" height="12">
      <path
        d="m5.5 12.5 4.1 4L18.5 7.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function brandNameFor(platform: PreviewCard["platform"]): BrandName {
  if (platform === "TikTok") {
    return "tiktok";
  }
  if (platform === "YouTube") {
    return "youtube";
  }
  return "facebook";
}
