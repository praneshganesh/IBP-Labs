import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Saavi",
  description:
    "How Saavi, published by IBP Labs LLC, collects, stores, and protects the record of your home.",
};

export default function SaaviPrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy — Saavi" effectiveDate="10 October 2026">
      <LegalSection title="Who we are">
        <p>
          Saavi is published by IBP Labs LLC (&quot;IBP Labs&quot;,
          &quot;we&quot;, &quot;us&quot;). Questions about this policy:{" "}
          <a
            href="mailto:hello@ibp-labs.com"
            className="text-accent underline underline-offset-2"
          >
            hello@ibp-labs.com
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="What this policy covers">
        <p>
          This policy describes the Saavi app: the home record you keep, sync,
          Talk, Ask, Identify, and the Pro subscription. The IBP Labs website
          policy at{" "}
          <a
            href="/privacy"
            className="text-accent underline underline-offset-2"
          >
            ibp-labs.com/privacy
          </a>{" "}
          covers the studio website only. Where the two differ, this policy
          governs your use of Saavi.
        </p>
      </LegalSection>

      <LegalSection title="What Saavi is">
        <p>
          Saavi keeps a record of your home: things, reminders, habits,
          classes, expenses, and subscriptions. The record lives on your phone
          so it works offline, and it syncs to your account when you are
          online.
        </p>
      </LegalSection>

      <LegalSection title="Your account">
        <p>
          The first time you open Saavi we create a temporary account so the
          app can sync. Sign in with Apple replaces that with an Apple
          identity, including a private relay email if you choose Hide My
          Email. We store that identity to restore your data and subscription
          on another phone. We do not ask you to create a password.
        </p>
      </LegalSection>

      <LegalSection title="What is stored">
        <p>
          The things you type or capture: names, dates, amounts, people in
          your home, rooms, notes, and files you attach (photos and PDFs). A
          home record can include someone else&apos;s name, such as a person
          in the household or a child&apos;s class. Those files sit in private
          storage tied to your account. They are not public and they are not
          used for advertising.
        </p>
      </LegalSection>

      <LegalSection title="How we collect it, and what we use it for">
        <p>
          You give us this by typing it, by using the camera, or by choosing a
          photo or PDF. Sign in with Apple gives us an Apple identity and, if
          you allow it, an email address.
        </p>
        <p>
          The camera, photo library, and microphone are used only when you
          capture or talk. You can turn that access off in iOS Settings, and
          Saavi still works without it. Speech recognition, Face ID, and
          on-device text reading stay on the phone. Reminders are scheduled on
          the device.
        </p>
        <p>
          We use this data to keep your record, sync it to your account,
          answer Talk, Ask, and Identify, schedule the reminders you set, and
          apply your subscription. We do not use it for advertising or to
          track you across other companies&apos; apps.
        </p>
      </LegalSection>

      <LegalSection title="Talk, Ask, and Identify">
        <p>
          A Talk turn, an Ask message, or a photo you choose to Identify is
          sent to Saavi&apos;s server and then to OpenAI so it can answer.
          Talk and Ask send the message plus a short summary of names, rooms,
          and dates already in your record. Your photo library is not scanned
          in the background. Speech recognition and on-device text reading
          stay on the phone.
        </p>
      </LegalSection>

      <LegalSection title="Subscriptions">
        <p>
          Apple charges for Pro through the App Store. RevenueCat tells us
          whether the subscription is active so the app and the server can
          apply your plan. We do not receive your card number.
        </p>
      </LegalSection>

      <LegalSection title="Who we share it with">
        <p>
          We do not sell your record. We share it only with services that run
          Saavi, and only as far as each one needs:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-foreground">Supabase</strong> stores your
            account, the synced record, and attached files.
          </li>
          <li>
            <strong className="text-foreground">Our server and OpenAI</strong>{" "}
            handle Talk, Ask, and Identify requests you start.
          </li>
          <li>
            <strong className="text-foreground">Apple</strong> handles Sign in
            with Apple and App Store payment.
          </li>
          <li>
            <strong className="text-foreground">RevenueCat</strong> reports
            whether your subscription is active.
          </li>
        </ul>
        <p>
          Those companies receive data only to provide that part of Saavi.
          They protect it to the same standard described in this policy. We do
          not connect Gmail or your bank.
        </p>
      </LegalSection>

      <LegalSection title="How long we keep it">
        <p>
          We keep the record for as long as the account exists. Talk, Ask, and
          Identify requests are sent so that turn can be answered.
        </p>
        <p>
          You can take consent back by turning off camera, photo, microphone,
          or speech access in iOS Settings. You can delete the account in the
          app, as described below. You can also email{" "}
          <a
            href="mailto:hello@ibp-labs.com"
            className="text-accent underline underline-offset-2"
          >
            hello@ibp-labs.com
          </a>{" "}
          and ask us to delete your data.
        </p>
      </LegalSection>

      <LegalSection title="Deleting your account">
        <p>
          In the app, Settings → Account → Delete account erases the login,
          the home record that belongs only to you, attached files, and the
          copy on that phone. If you share a home with someone else, you leave
          that home and their record stays.
        </p>
        <p>
          Deleting the account does not cancel an Apple subscription. Cancel
          that in iOS Settings → Apple ID → Subscriptions.
        </p>
      </LegalSection>

      <LegalSection title="Children">
        <p>
          Saavi is not directed at children under 13, and we do not knowingly
          collect personal information from them.
        </p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          We may update this policy from time to time. When we do, we will
          revise the effective date at the top of this page.
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
