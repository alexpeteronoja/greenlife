import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function PrivacyPolicy() {
  return (
    <>
      <div className="bg-[#F5F5F533]">
        <Navbar navStyle="bg-[#AFAFAE1A] text-black" />
        <div className="px-8 pt-9 pb-10 text-center">
          <h1 className="text-3xl md:text-6xl font-bold">Privacy Policy</h1>
          <div className="text-sm text-gray-600 mt-5 md:mt-10">
            Last Updated: <strong>29th September, 2025</strong>
          </div>
        </div>
      </div>

      <div className="mx-8 mt-3 md:mt-6">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <article className="prose prose-neutral max-w-none">
            {/* 1. Introduction */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
              <p>
                Greenlife Pharmaceuticals (“we,” “us,” “our”) respects your
                privacy and is committed to protecting your personal data. This
                Privacy Policy explains how we collect, use, disclose, and
                safeguard the information you provide when you use our website{' '}
                <strong>greenlifepharmaceuticals.com</strong> or interact with
                us.
              </p>
              <p>
                By accessing or using our Site, you agree to the terms of this
                Privacy Policy. If you do not agree, do not use or access the
                Site.
              </p>
            </section>

            {/* 2. Information We Collect */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-2">
                2. Information We Collect
              </h2>
              <p>We may collect the following types of information:</p>

              <div className="mt-4">
                <h3 className="font-medium">
                  2.1 Personal Information You Provide
                </h3>
                <ul className="list-disc ml-6 mt-2">
                  <li>Name, email address, phone number, mailing address</li>
                  <li>Organization / Company name (if applicable)</li>
                  <li>
                    Any other information you volunteer (e.g. in contact forms,
                    subscription forms, inquiry forms)
                  </li>
                </ul>
              </div>

              <div className="mt-4">
                <h3 className="font-medium">
                  2.2 Automatically Collected Information
                </h3>
                <ul className="list-disc ml-6 mt-2">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Device type</li>
                  <li>Operating system</li>
                  <li>
                    Pages you visit, time and date of visit, time spent on
                    pages, referring/exit pages
                  </li>
                  <li>
                    Clickstream data, cookies, and similar technology (see
                    “Cookies” section)
                  </li>
                </ul>
              </div>

              <div className="mt-4">
                <h3 className="font-medium">2.3 Third-Party Sources</h3>
                <p>
                  We may receive information about you from third-party sources
                  (e.g. analytics providers, advertising networks) in accordance
                  with their privacy policies.
                </p>
              </div>
            </section>

            {/* 3. Use of Information */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-2">
                3. Use of Information
              </h2>
              <p>
                We use the information we collect for purposes including, but
                not limited to:
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li>Operating, maintaining, and improving our Site</li>
                <li>Responding to inquiries, requests, or customer service</li>
                <li>
                  Sending you newsletters, updates, marketing or promotional
                  materials (where permitted)
                </li>
                <li>Monitoring and analyzing usage trends and preferences</li>
                <li>Personalizing your experience</li>
                <li>
                  Detecting, preventing, and addressing security or technical
                  issues
                </li>
                <li>Compliance with legal obligations</li>
              </ul>
            </section>

            {/* 4. Disclosure */}
            <section className="mb-8 ">
              <h2 className="text-xl font-semibold mb-2">
                4. Disclosure of Information
              </h2>
              <p>We may share your personal information:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>
                  With service providers who perform functions on our behalf
                  (hosting, email delivery, analytics, etc.)
                </li>
                <li>With affiliates, subsidiaries, or related companies</li>
                <li>
                  For legal reasons (e.g. to comply with a court order, to
                  protect rights, safety, or property)
                </li>
                <li>
                  In connection with a merger, acquisition, or sale of assets
                </li>
              </ul>
              <p className="mt-2">
                We require that service providers only use personal data for the
                purposes for which we share it.
              </p>
            </section>

            {/* 5. Data Retention */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-2">5. Data Retention</h2>
              <p>
                We will retain your personal data only as long as necessary to
                fulfill the purposes for which it was collected, and to comply
                with our legal obligations, resolve disputes, enforce
                agreements, and otherwise as required or permitted by law.
              </p>
            </section>

            {/* 6. Security */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-2">6. Security</h2>
              <p>
                We implement appropriate technical and organizational measures
                to protect your personal data from unauthorized access, loss,
                misuse, alteration, or disclosure. However, no method of
                transmission over the internet or electronic storage is 100%
                secure, and we cannot guarantee absolute security.
              </p>
            </section>

            {/* 7. International Transfers */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-2">
                7. International Transfers
              </h2>
              <p>
                If we transfer your data outside of Nigeria (or your country of
                residence), we will ensure that appropriate safeguards are in
                place (e.g. standard contractual clauses, data protection
                agreements).
              </p>
            </section>

            {/* 8. Your Rights */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-2">8. Your Rights</h2>
              <p>Depending on applicable law, you may have rights including:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>The right to access your personal data</li>
                <li>The right to correct or update your personal data</li>
                <li>
                  The right to delete or restrict use of your personal data
                </li>
                <li>The right to object to processing</li>
                <li>The right to data portability</li>
                <li>
                  The right to withdraw consent (if processing is based on
                  consent)
                </li>
              </ul>
              <p className="mt-3">
                To exercise these rights, contact us at{' '}
                <strong>
                  <a href="mailto:info@greenlifepharma.com">
                    info@greenlifepharma.com
                  </a>
                </strong>
                . We will respond within applicable legal timeframes.
              </p>
            </section>

            {/* 9. Children */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-2">9. Children</h2>
              <p>
                Our Site is not intended for children under{' '}
                <strong>age of 13</strong>. We do not knowingly collect or
                solicit personal information from children. If we become aware
                that we have collected personal data from a child, we will take
                steps to delete such data.
              </p>
            </section>

            {/* 10. Changes */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-2">
                10. Changes to this Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of material changes via prominent notice on the Site
                or via email (if we have your address). The “Last Updated” date
                will reflect the change.
              </p>
            </section>

            {/* 11. Contact */}
            <section className="mb-12">
              <h2 className="text-xl font-semibold mb-2">11. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy,
                contact:
              </p>
              <div className="mt-4 bg-white border rounded-lg p-4 shadow-sm">
                <p className="font-medium">Greenlife Pharmaceuticals</p>
                <address className="not-italic mt-2 text-sm text-gray-700">
                  Address: 35A, Association Avenue, Off Obanikoro Bus Stop,
                  Ilupeju, Lagos, Nigeria <br />
                  Phone:{' '}
                  <a
                    href="tel:+2347046183362"
                    className="text-indigo-600 hover:underline"
                  >
                    +234 704 618 3362
                  </a>
                  <br />
                  Email:
                  <span className="text-indigo-600 hover:underline">
                    <a href="mailto:info@greenlifepharma.com">
                      info@greenlifepharma.com
                    </a>
                  </span>
                </address>
              </div>
            </section>
          </article>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default PrivacyPolicy;
