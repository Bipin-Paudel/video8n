import type { Metadata } from "next";
import { LegalSection, LegalShell } from "@/components/legal-shell";
import {
  COMPANY_NAME,
  DATA_DELETION_EMAIL,
  SUPPORT_EMAIL,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    `Terms of Service for Video8n, an AI video generation and social publishing product owned by ${COMPANY_NAME}.`,
};

export default function TermsOfServicePage() {
  return (
    <LegalShell
      title="Terms of Service"
      lede={`These Terms of Service govern your access to and use of Video8n, a product of ${COMPANY_NAME}, including our AI video generation workflows, publishing tools, and connected platform integrations.`}
      updatedOn="March 22, 2026"
    >
      <LegalSection title="1. Acceptance of Terms">
        <p>
          By accessing or using Video8n, you agree to be bound by these Terms of
          Service and any policies referenced in them. If you do not agree, do
          not use the Services.
        </p>
        <p>
          If you use Video8n on behalf of a company, brand, or other entity, you
          represent that you have authority to bind that entity to these Terms.
        </p>
      </LegalSection>

      <LegalSection title="2. Eligibility and Accounts">
        <p>
          You are responsible for maintaining the confidentiality of your
          account credentials and for all activity that occurs under your
          account. You must provide accurate information and keep your account
          details up to date.
        </p>
        <p>
          You may connect third-party accounts, including TikTok accounts,
          through supported authorization flows. You are responsible for
          ensuring you have the authority to connect and use any social account
          that you authorize with Video8n.
        </p>
      </LegalSection>

      <LegalSection title="3. The Services">
        <p>
          Video8n provides tools for generating AI-assisted videos, analyzing
          and enhancing video assets, applying AI-generated content disclosure
          information, and publishing or preparing content for social platforms.
        </p>
        <p>
          We may update, improve, or modify the Services from time to time. We
          may also suspend features where necessary for maintenance, security,
          legal compliance, or operational reasons.
        </p>
        <p>
          Where a workflow requires connected-platform permissions, including
          TikTok&apos;s `video.publish` scope or YouTube&apos;s
          `youtube.upload` authorization, Video8n uses them only to share
          content you approve.
        </p>
      </LegalSection>

      <LegalSection title="4. User Content and Ownership">
        <p>
          You retain ownership of the prompts, footage, assets, and videos you
          submit to or generate through Video8n, subject to any rights in
          underlying third-party materials or platform requirements.
        </p>
        <p>
          By using Video8n, you grant us a limited, non-exclusive license to
          host, process, reproduce, modify, format, transmit, and publish your
          content solely as necessary to provide the Services, including
          generating videos, enhancing outputs, storing project files, and
          posting content to connected social accounts at your direction.
        </p>
        <p>
          You are solely responsible for your content and must ensure that it
          complies with all applicable laws, intellectual property rights, and
          platform policies, including TikTok’s Community Guidelines when you
          publish to TikTok.
        </p>
      </LegalSection>

      <LegalSection title="5. AI Labeling">
        <p>
          You agree that Video8n may automatically tag, label, or otherwise
          identify content as &quot;AI-Generated&quot; or with similar
          disclosure language when content is created or materially enhanced
          using AI systems.
        </p>
        <p>
          This automatic labeling is part of the core Video8n workflow and is
          intended to support transparency and platform policy compliance.
        </p>
        <p>
          You also agree that each AI-generated video must be reviewed and
          approved by a human user before it is submitted to TikTok or another
          connected platform through Video8n.
        </p>
        <p>
          Where supported by the workflow, Video8n may attach provenance or
          transparency metadata aligned with 2026 C2PA content provenance
          practices.
        </p>
      </LegalSection>

      <LegalSection title="6. Prohibited Use">
        <p>You may not use Video8n to create, upload, or publish content that:</p>
        <ul>
          <li>
            Contains deepfakes, manipulated identity content, or deceptive media
            intended to impersonate a person or mislead viewers.
          </li>
          <li>
            Promotes harassment, hate, abuse, threats, exploitation, or
            non-consensual harmful behavior.
          </li>
          <li>
            Violates any law, regulation, court order, or applicable platform
            rule.
          </li>
          <li>
            Infringes intellectual property, privacy, publicity, or other rights
            of any person or entity.
          </li>
          <li>
            Includes malware, unauthorized tracking, or attempts to interfere
            with the security or operation of the Services.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="7. TikTok and Third-Party Platform Limitations">
        <p>
          Video8n may integrate with TikTok and other third-party platforms, but
          those platforms remain independent services with their own rules,
          systems, and moderation decisions.
        </p>
        <p>
          Video8n is not responsible for TikTok’s or any third-party platform’s
          uptime, outages, API availability, content review outcomes, posting
          delays, distribution behavior, algorithmic treatment, or changes to
          third-party features.
        </p>
        <p>
          Video8n is also not responsible for account warnings, suspensions,
          restrictions, or bans that result from user-posted content or user
          conduct on TikTok or any other platform.
        </p>
      </LegalSection>

      <LegalSection title="8. Compliance Responsibilities">
        <p>
          You are responsible for reviewing content before publication and for
          ensuring it is accurate, lawful, properly disclosed, and suitable for
          your intended audience and platform.
        </p>
        <p>
          If you use Video8n for regulated industries, health-related claims,
          or other sensitive campaigns, you remain responsible for any
          additional approvals, notices, or substantiation required by law or
          industry standards.
        </p>
      </LegalSection>

      <LegalSection title="9. Suspension and Termination">
        <p>
          We may suspend or terminate access to Video8n if we reasonably believe
          you have violated these Terms, created material risk to the Services
          or others, or used the Services in a way that may expose us or our
          partners to legal or operational harm.
        </p>
        <p>
          You may stop using the Services at any time. Upon termination, rights
          granted to you under these Terms will end, but provisions that should
          survive by their nature will remain in effect.
        </p>
      </LegalSection>

      <LegalSection title="10. Intellectual Property">
        <p>
          The Video8n platform, software, branding, site design, workflows, and
          related materials are owned by {COMPANY_NAME} or its licensors and
          are protected by applicable intellectual property laws.
        </p>
        <p>
          Except for the limited rights expressly granted in these Terms, no
          rights, title, or interest in the Services are transferred to you.
        </p>
      </LegalSection>

      <LegalSection title="11. Disclaimers">
        <p>
          Video8n is provided on an “as is” and “as available” basis to the
          maximum extent permitted by law. We do not guarantee that the Services
          will be uninterrupted, error-free, or suitable for every use case.
        </p>
        <p>
          AI-generated outputs may be incomplete, inaccurate, or unsuitable for
          particular commercial, legal, medical, or regulatory contexts. You are
          responsible for reviewing outputs before use or publication.
        </p>
      </LegalSection>

      <LegalSection title="12. Limitation of Liability">
        <p>
          To the maximum extent permitted by applicable law, Video8n and{" "}
          {COMPANY_NAME} will not be liable for any indirect, incidental,
          special, consequential, exemplary, or punitive damages, or for any
          loss of profits, revenue, data, goodwill, or business opportunity
          arising out of or related to your use of the Services.
        </p>
        <p>
          To the maximum extent permitted by law, our total liability for claims
          arising out of or related to the Services will not exceed the amount
          you paid us for the Services in the twelve months before the event
          giving rise to the claim, or one hundred U.S. dollars if you have not
          paid us any fees.
        </p>
      </LegalSection>

      <LegalSection title="13. Changes to the Terms">
        <p>
          We may update these Terms from time to time. If we make material
          changes, we may provide notice through the Services or by other
          reasonable means. Your continued use of Video8n after updated Terms
          become effective constitutes acceptance of the revised Terms.
        </p>
      </LegalSection>

      <LegalSection title="14. Contact">
        <p>
          Questions about these Terms of Service can be sent to {SUPPORT_EMAIL}.
        </p>
        <p>
          Requests to delete connected-platform data can be sent to{" "}
          {DATA_DELETION_EMAIL}.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
