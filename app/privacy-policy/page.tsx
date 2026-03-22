import type { Metadata } from "next";
import { LegalSection, LegalShell } from "@/components/legal-shell";
import {
  COMPANY_NAME,
  DATA_DELETION_EMAIL,
  SUPPORT_EMAIL,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    `Privacy Policy for Video8n, an AI video generation and social publishing product owned by ${COMPANY_NAME}.`,
};

const privacySections = [
  "1. Who We Are",
  "2. Information We Collect",
  "3. How We Use Personal Data",
  "4. GDPR Legal Bases",
  "5. Connected Platform Access and Tokens",
  "6. AI-Generated Content Metadata",
  "7. Data Sharing",
  "8. Retention",
  "9. International Transfers",
  "10. Your Rights",
  "11. Security",
  "12. Children’s Privacy",
  "13. Changes to This Policy",
  "14. Contact",
] as const;

export default function PrivacyPolicyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      lede={`This Privacy Policy explains how Video8n, a product of ${COMPANY_NAME}, collects, uses, stores, and shares personal data when users create AI-generated videos and connect social publishing accounts.`}
      updatedOn="March 22, 2026"
      sections={privacySections}
      summary={[
        {
          label: "Company",
          value: COMPANY_NAME,
          hint: "Operator of Video8n and its connected publishing services.",
        },
        {
          label: "Coverage",
          value: "Website, app, and publishing workflows",
          hint: "Applies to connected platform uploads and support channels.",
        },
        {
          label: "Privacy Requests",
          value: DATA_DELETION_EMAIL,
          hint: "Use this address for deletion and data-rights requests.",
        },
      ]}
      highlights={[
        "User-authorized publishing data only",
        "Privacy-first AI processing",
        "Global compliance and deletion workflows",
      ]}
      primaryHelp={{
        href: `mailto:${SUPPORT_EMAIL}?subject=Video8n%20Privacy%20Question`,
        label: "Contact Privacy Support",
        title: "Privacy questions",
        copy: "Need clarification about how Video8n processes account data, media, or connected platform credentials?",
      }}
      secondaryHelp={{
        href: `mailto:${DATA_DELETION_EMAIL}?subject=Video8n%20Data%20Deletion%20Request`,
        label: "Submit a Data Deletion Request",
      }}
    >
      <LegalSection title="1. Who We Are">
        <p>
          Video8n is an AI video generation and social publishing platform owned
          and operated by {COMPANY_NAME}. When this policy refers to the terms
          we, us, or our, it means Video8n and {COMPANY_NAME} acting as the
          provider of the Services.
        </p>
        <p>
          We design Video8n to help users generate videos, enhance them with AI,
          and publish them to social platforms. This policy applies to our
          website, web application, support channels, and any account
          integrations used to publish user-generated videos.
        </p>
      </LegalSection>

      <LegalSection title="2. Information We Collect">
        <p>We may collect the following categories of information:</p>
        <ul>
          <li>
            <strong>Account and profile information:</strong> name, email
            address, organization details, and account preferences that you
            provide directly to us.
          </li>
          <li>
            <strong>Connected platform data obtained through authorization flows:</strong>{" "}
            TikTok User IDs and profile information, YouTube channel details,
            Meta account or Page identifiers, and the access credentials needed
            to facilitate user-authorized uploads or publishing actions.
          </li>
          <li>
            <strong>Content and publishing data:</strong> prompts, generated
            videos, captions, thumbnails, posting selections, scheduling
            settings, and metadata associated with user-generated content.
          </li>
          <li>
            <strong>AI and compliance metadata:</strong> information used to
            identify content as AI-generated and metadata shared with TikTok in
            line with applicable community and transparency guidelines.
          </li>
          <li>
            <strong>Technical and support information:</strong> log data, device
            details, browser information, IP address, diagnostics, and support
            communications needed to secure and operate the Services.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. How We Use Personal Data">
        <p>We use personal data only as reasonably necessary to operate Video8n.</p>
        <ul>
          <li>
            To create and manage user accounts, authenticate sessions, and
            provide the Services.
          </li>
          <li>
            To generate, analyze, enhance, and publish user-generated videos
            based on your instructions.
          </li>
          <li>
            To draft, refine, or localize captions and related copy using LLMs
            based on your prompts, project context, and approved video content.
          </li>
          <li>
            To connect TikTok, Meta, and YouTube accounts through supported
            authorization flows and publish videos on your behalf when you
            request it.
          </li>
          <li>
            To provide customer support, troubleshoot technical issues, and
            improve service reliability and security.
          </li>
          <li>
            To enforce our Terms of Service, detect misuse, and comply with
            legal obligations.
          </li>
        </ul>
        <p>
          Connected-platform data is used only to publish user-generated videos
          and manage related user-authorized publishing activity. We do not
          sell connected-platform data to third parties.
        </p>
      </LegalSection>

      <LegalSection title="4. GDPR Legal Bases">
        <p>
          If you are located in the European Economic Area, United Kingdom, or
          another region with similar data protection requirements, we rely on
          the following legal bases as applicable:
        </p>
        <ul>
          <li>
            <strong>Performance of a contract:</strong> to provide the Services
            you request, including generating and publishing videos.
          </li>
          <li>
            <strong>Legitimate interests:</strong> to secure the platform,
            prevent abuse, maintain service performance, and support business
            operations in a balanced and privacy-conscious manner.
          </li>
          <li>
            <strong>Consent:</strong> where consent is required, including for
            certain account connections or optional communications.
          </li>
          <li>
            <strong>Legal obligations:</strong> where processing is necessary to
            comply with applicable laws, regulations, or lawful requests.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Connected Platform Access and Tokens">
        <p>
          When you connect TikTok, YouTube, Facebook, or Instagram to Video8n,
          we receive limited account identifiers, profile information, and
          authorization credentials only to facilitate uploads or publishing
          actions that you request.
        </p>
        <p>
          We store access tokens securely and limit internal access to those
          credentials. TikTok&apos;s `video.publish` scope and YouTube&apos;s
          `youtube.upload` scope are requested only when needed for
          user-authorized content sharing. Meta-connected permissions are used
          only for creator-approved publishing to Facebook or Instagram
          destinations.
        </p>
        <p>
          Users can revoke Video8n access at any time through their connected
          platform settings. If access is revoked or a connection is
          disconnected, we will stop using the token and remove it from active
          systems within a commercially reasonable period, except where longer
          retention is required for security, auditing, or legal compliance.
        </p>
      </LegalSection>

      <LegalSection title="6. AI-Generated Content Metadata">
        <p>
          Video8n may share metadata relating to AI-generated content with
          TikTok when publishing videos in order to support transparency and
          follow relevant community guidelines and platform disclosure
          expectations.
        </p>
        <p>
          We may also retain internal metadata needed to record that a piece of
          content was generated or enhanced using AI systems for operational,
          safety, and audit purposes.
        </p>
        <p>
          We do not use user photos, footage, or other uploaded media to train
          public models. If we perform internal quality evaluation or service
          improvement, we do so using limited, permissioned, or de-identified
          data where allowed by law.
        </p>
        <p>
          We may attach or preserve provenance and transparency metadata aligned
          with 2026 C2PA content provenance practices. Users must review and
          approve every AI-generated video before it is submitted through a
          connected publishing workflow.
        </p>
      </LegalSection>

      <LegalSection title="7. Data Sharing">
        <p>We may share information in the following limited circumstances:</p>
        <ul>
          <li>
            With service providers and infrastructure partners that help us host
            the Services, process data securely, or provide customer support.
          </li>
          <li>
            With social platforms, including TikTok, when you instruct us to
            publish or manage content using a connected account.
          </li>
          <li>
            With professional advisers, regulators, courts, or authorities when
            required to comply with law or protect our rights and the safety of
            others.
          </li>
          <li>
            In connection with a merger, financing, acquisition, or sale of
            assets, subject to appropriate confidentiality safeguards.
          </li>
        </ul>
        <p>
          We do not sell personal data, and we do not sell TikTok data to third
          parties.
        </p>
      </LegalSection>

      <LegalSection title="8. Retention">
        <p>
          We keep personal data only for as long as necessary to provide the
          Services, maintain security, comply with legal obligations, resolve
          disputes, and enforce our agreements.
        </p>
        <ul>
          <li>
            Account information is generally retained while your account remains
            active and for a reasonable period afterward if needed for support,
            compliance, or record-keeping.
          </li>
          <li>
            Connected-platform credentials, including TikTok access tokens, are
            retained only while the connection remains active or until revoked,
            subject to limited backup or audit retention.
          </li>
          <li>
            Generated content and publishing records may remain available to you
            until you delete them, close your account, or request deletion,
            unless we are required to keep certain records by law.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="9. International Transfers">
        <p>
          Your information may be processed in countries other than the country
          in which you live. Where applicable, we will take reasonable steps to
          ensure appropriate safeguards are in place for cross-border transfers,
          including contractual protections where required by law.
        </p>
      </LegalSection>

      <LegalSection title="10. Your Rights">
        <p>
          Depending on your location, you may have rights to access, correct,
          delete, restrict, or object to certain processing of your personal
          data, as well as the right to request a copy of your data in a
          portable format.
        </p>
        <p>
          You may also withdraw consent where consent is the legal basis for
          processing, without affecting processing that occurred before the
          withdrawal. To exercise privacy rights, contact us at {SUPPORT_EMAIL}.
        </p>
        <p>
          To request deletion of connected-platform data or project records,
          email {DATA_DELETION_EMAIL} with the subject line &quot;Data Deletion
          Request.&quot;
        </p>
      </LegalSection>

      <LegalSection title="11. Security">
        <p>
          We use reasonable technical and organizational safeguards designed to
          protect personal data against unauthorized access, loss, misuse,
          alteration, or disclosure. No security measure is perfect, but we work
          to keep the Services and connected platform credentials protected with
          access controls and security-focused operational practices.
        </p>
      </LegalSection>

      <LegalSection title="12. Children’s Privacy">
        <p>
          Video8n is not intended for children, and we do not knowingly collect
          personal data from children in violation of applicable law. If you
          believe a child has provided personal data to us improperly, please
          contact us so we can investigate and take appropriate action.
        </p>
      </LegalSection>

      <LegalSection title="13. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          to the Services, legal requirements, or our processing practices. When
          we do, we will update the Last updated date above and, where required,
          provide additional notice.
        </p>
      </LegalSection>

      <LegalSection title="14. Contact">
        <p>
          If you have questions about this Privacy Policy or our data practices,
          please contact Video8n at {SUPPORT_EMAIL}.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
