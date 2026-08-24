import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — IBP Labs",
  description:
    "How IBP Labs LLC collects, uses, and protects information across our website and communications.",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" effectiveDate="August 24, 2026">
      <LegalSection title="Who we are">
        <p>
          IBP Labs LLC (&quot;IBP Labs&quot;, &quot;we&quot;, &quot;us&quot;) is
          an independent app studio that builds and publishes software
          products, including PathToFIRE and LifeOS. We build our products
          with privacy as a core principle: we do not sell personal data, we
          do not show advertising, and we collect only what is needed to make
          our products work.
        </p>
      </LegalSection>

      <LegalSection title="Scope of this policy">
        <p>
          This policy covers the IBP Labs website and your communications with
          us (for example, when you email us). It does not replace the
          product-specific privacy policies of our apps. Each product we
          publish has its own privacy policy that describes in detail what
          data that product collects and how it is handled. For example,
          PathToFIRE&apos;s privacy policy is available at{" "}
          <a
            href="https://www.pathtofire.me/"
            className="text-accent underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            pathtofire.me
          </a>
          . Where this policy and a product policy differ, the product policy
          governs your use of that product.
        </p>
      </LegalSection>

      <LegalSection title="Information we collect">
        <p>
          Our website does not require an account and does not use advertising
          trackers. The information we may collect is limited to:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-foreground">Contact information.</strong>{" "}
            If you email us, we receive your email address and the contents of
            your message.
          </li>
          <li>
            <strong className="text-foreground">Technical data.</strong> Our
            hosting providers may automatically log basic technical
            information such as IP address, browser type, and pages visited,
            as is standard for operating and securing a website.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="How we use information">
        <p>We use the information described above only to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Respond to your inquiries and provide support.</li>
          <li>Operate, secure, and improve our website.</li>
          <li>Comply with legal obligations.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Sharing of information">
        <p>
          We do not sell or rent personal information. We share information
          only with service providers that help us operate our website (such
          as hosting providers), and only to the extent necessary for them to
          provide their services, or where required by law.
        </p>
      </LegalSection>

      <LegalSection title="Data retention">
        <p>
          We keep correspondence for as long as needed to handle your inquiry
          and for reasonable record-keeping. Technical logs are retained for
          limited periods by our hosting providers according to their standard
          practices.
        </p>
      </LegalSection>

      <LegalSection title="Your rights">
        <p>
          Depending on where you live, you may have rights to access, correct,
          or delete personal information we hold about you. To exercise any of
          these rights, contact us at the email address below and we will
          respond promptly.
        </p>
      </LegalSection>

      <LegalSection title="Children">
        <p>
          Our website and products are not directed to children under the age
          of 13, and we do not knowingly collect personal information from
          children.
        </p>
      </LegalSection>

      <LegalSection title="Changes to this policy">
        <p>
          We may update this policy from time to time. When we do, we will
          revise the effective date at the top of this page. Material changes
          will be highlighted on this page.
        </p>
      </LegalSection>

      <LegalSection title="Contact us">
        <p>
          For any questions about this policy or our privacy practices, email
          us at{" "}
          <a
            href="mailto:hello@ibp-labs.com"
            className="text-accent underline underline-offset-2"
          >
            hello@ibp-labs.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
