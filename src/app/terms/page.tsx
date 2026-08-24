import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — IBP Labs",
  description:
    "The terms that govern your use of the IBP Labs website and general terms for our published products.",
};

export default function TermsOfService() {
  return (
    <LegalPage title="Terms of Service" effectiveDate="August 24, 2026">
      <LegalSection title="Acceptance of terms">
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your use of the
          IBP Labs website. By accessing or using this website, you agree to
          be bound by these Terms. If you do not agree, please do not use the
          website.
        </p>
      </LegalSection>

      <LegalSection title="About IBP Labs">
        <p>
          IBP Labs LLC (&quot;IBP Labs&quot;, &quot;we&quot;, &quot;us&quot;)
          is an independent app studio that builds and publishes software
          products, including PathToFIRE and LifeOS. This website provides
          information about our company and products.
        </p>
      </LegalSection>

      <LegalSection title="Product-specific terms">
        <p>
          Each product we publish is governed by its own terms of service and
          privacy policy, which you accept when you use that product. For
          example, PathToFIRE&apos;s terms are available at{" "}
          <a
            href="https://www.pathtofire.me/"
            className="text-accent underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            pathtofire.me
          </a>
          . Where these Terms and a product&apos;s terms differ, the
          product&apos;s terms govern your use of that product.
        </p>
      </LegalSection>

      <LegalSection title="Intellectual property">
        <p>
          All content on this website — including text, design, logos, product
          names, and graphics — is owned by IBP Labs LLC or its licensors and
          is protected by applicable intellectual property laws. You may not
          reproduce, distribute, or create derivative works from this content
          without our prior written permission.
        </p>
      </LegalSection>

      <LegalSection title="Acceptable use">
        <p>You agree not to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Use the website in any way that violates applicable laws or
            regulations.
          </li>
          <li>
            Attempt to gain unauthorized access to the website or its
            infrastructure.
          </li>
          <li>
            Interfere with or disrupt the operation of the website, including
            through automated scraping that burdens our infrastructure.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Disclaimers">
        <p>
          This website and its content are provided &quot;as is&quot; and
          &quot;as available&quot; without warranties of any kind, whether
          express or implied. Information on this website is for general
          informational purposes only and does not constitute financial,
          legal, or professional advice.
        </p>
      </LegalSection>

      <LegalSection title="Limitation of liability">
        <p>
          To the maximum extent permitted by law, IBP Labs LLC shall not be
          liable for any indirect, incidental, special, consequential, or
          punitive damages arising out of or relating to your use of this
          website.
        </p>
      </LegalSection>

      <LegalSection title="Changes to these terms">
        <p>
          We may revise these Terms from time to time. The most current
          version will always be posted on this page with an updated effective
          date. By continuing to use the website after changes take effect,
          you agree to the revised Terms.
        </p>
      </LegalSection>

      <LegalSection title="Governing law">
        <p>
          These Terms are governed by the laws of the jurisdiction in which
          IBP Labs LLC is registered, without regard to conflict of law
          principles.
        </p>
      </LegalSection>

      <LegalSection title="Contact us">
        <p>
          For any questions about these Terms, email us at{" "}
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
