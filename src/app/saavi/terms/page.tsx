import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — Saavi",
  description:
    "The service terms for Saavi, published by IBP Labs LLC: subscriptions, trial, Talk limits, and Apple's standard license.",
};

export default function SaaviTermsOfService() {
  return (
    <LegalPage title="Terms of Service — Saavi" effectiveDate="10 October 2026">
      <LegalSection title="The service">
        <p>
          These terms are between you and IBP Labs LLC, the publisher of
          Saavi. By using Saavi you agree to them. Saavi is a record of your
          home. You keep what you enter. We run the sync, the subscription
          check, and the Talk, Ask, and Identify requests you start.
        </p>
        <p>
          The{" "}
          <a
            href="/terms"
            className="text-accent underline underline-offset-2"
          >
            IBP Labs website terms
          </a>{" "}
          cover the studio site only. Where those terms and these differ,
          these terms govern your use of Saavi.
        </p>
      </LegalSection>

      <LegalSection title="Subscriptions">
        <p>
          Pro is billed by Apple to your Apple ID. The price and length are
          shown in the app before you confirm. A subscription renews until you
          cancel it in iOS Settings → Apple ID → Subscriptions, at least 24
          hours before the period ends. Deleting your Saavi account does not
          cancel that Apple subscription. Restore purchases puts an existing
          subscription back on this phone. Refunds are handled by Apple.
        </p>
      </LegalSection>

      <LegalSection title="Trial and Talk">
        <p>
          A new account can use a trial of 7 days. Trial Talk is 25 turns a
          day. Pro is 100 turns a day. Adding and editing your record by hand
          is not counted. Unused turns do not roll over.
        </p>
      </LegalSection>

      <LegalSection title="Your record">
        <p>
          You are responsible for what you put in Saavi. Do not use Talk or
          Ask to break the law or to attack the service. We may stop a request
          that would do that.
        </p>
      </LegalSection>

      <LegalSection title="Apple's license">
        <p>
          The App Store license for the app itself is Apple&apos;s standard
          end user license:{" "}
          <a
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            className="text-accent underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            apple.com/legal/internet-services/itunes/dev/stdeula
          </a>
        </p>
        <p>
          These terms cover how Saavi&apos;s subscription and service work on
          top of that license.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          <a
            href="mailto:hello@ibp-labs.com"
            className="text-accent underline underline-offset-2"
          >
            hello@ibp-labs.com
          </a>
        </p>
      </LegalSection>
    </LegalPage>
  );
}
