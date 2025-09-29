import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function TermOfUse() {
  return (
    <>
      <div className="bg-[#F5F5F533]">
        <Navbar navStyle="bg-[#AFAFAE1A] text-black" />
        <div className="px-8 pt-9 pb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            Terms of Use (Terms & Conditions)
          </h1>
          <div className="text-sm text-gray-600 mt-5 md:mt-10">
            Last Updated: <strong>29th September, 2025</strong>
          </div>
        </div>
      </div>

      <div className="mx-8 mt-3 md:mt-6">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <article className="prose prose-neutral max-w-none">
            <p className="mb-2">
              By accessing or using the Site, you agree to be bound by these
              Terms of Use (“Terms”). If you do not agree, please do not use the
              Site.
            </p>

            {/* 1. Use of the Site */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold">1. Use of the Site</h2>
              <ul className="list-disc ml-6 mt-2">
                <li>
                  You may use the Site for lawful purposes and in accordance
                  with these Terms.
                </li>
                <li>
                  You agree not to use the Site in any way that violates
                  applicable laws or regulations.
                </li>
                <li>
                  You agree not to use the Site to transmit any harmful or
                  malicious code.
                </li>
              </ul>
            </section>

            {/* 2. Intellectual Property */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold">
                2. Intellectual Property
              </h2>
              <ul className="list-disc ml-6 mt-2">
                <li>
                  All content on the Site (text, graphics, logos, images,
                  videos, software) is owned or licensed by Greenlife
                  Pharmaceuticals and protected by copyright, trademark, and
                  other intellectual property laws.
                </li>
                <li>
                  You may not reproduce, distribute, modify, create derivative
                  works, display, perform, or otherwise use the content except
                  as permitted by these Terms or with our express prior written
                  consent.
                </li>
              </ul>
            </section>

            {/* 3. User Content */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold">
                3. User Content / Submissions
              </h2>
              <ul className="list-disc ml-6 mt-2">
                <li>
                  If you submit comments, feedback, or other content (e.g., via
                  contact forms), you grant us a non-exclusive, royalty-free,
                  worldwide, perpetual license to use, copy, modify, display,
                  and distribute such content.
                </li>
                <li>
                  You represent that you have all necessary rights in your
                  submissions, and that they do not violate any third-party
                  rights or contain unlawful content.
                </li>
              </ul>
            </section>

            {/* 4. Links */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold">
                4. Links to Third-Party Sites
              </h2>
              <ul className="list-disc ml-6 mt-2">
                <li>
                  Our Site may contain links to third-party websites or services
                  that are not owned or controlled by us.
                </li>
                <li>
                  We do not endorse or assume responsibility for the content,
                  privacy practices, or security of third-party sites.
                </li>
                <li>Visiting such sites is at your own risk.</li>
              </ul>
            </section>

            {/* 5. Disclaimers */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold">5. Disclaimers</h2>
              <ul className="list-disc ml-6 mt-2">
                <li>
                  The Site and its content are provided “as is” and “as
                  available,” without warranties of any kind, whether express or
                  implied (to the maximum extent permitted by law).
                </li>
                <li>
                  We disclaim all warranties, including warranties of
                  merchantability, fitness for a particular purpose,
                  non-infringement, or accuracy of the content.
                </li>
              </ul>
            </section>

            {/* 6. Limitation of Liability */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold">
                6. Limitation of Liability
              </h2>
              <ul className="list-disc ml-6 mt-2">
                <li>
                  To the maximum extent permitted by law, Greenlife
                  Pharmaceuticals and its affiliates, officers, directors,
                  employees, agents, and licensors will not be liable for any
                  indirect, incidental, special, punitive, exemplary, or
                  consequential damages arising from your use or inability to
                  use the Site, even if advised of the possibility of such
                  damages.
                </li>
                <li>
                  In no event will our total liability to you for all damages
                  exceed the amount you have paid (if any) to access or use the
                  Site.
                </li>
              </ul>
            </section>

            {/* 7. Indemnification */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold">7. Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless Greenlife
                Pharmaceuticals (and its officers, directors, employees, agents,
                licensors) from and against any claims, damages, liabilities,
                losses, costs, or expenses (including reasonable attorney’s
                fees) arising from your breach of these Terms or your misuse of
                the Site.
              </p>
            </section>

            {/* 8. Termination */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold">8. Termination</h2>
              <p>
                We may suspend or terminate your access to the Site (in whole or
                part) at our discretion, without notice, for violation of these
                Terms or other lawful reasons. After termination, the provisions
                that by their nature should survive will remain in effect (e.g.
                intellectual property, indemnification, limitation of
                liability).
              </p>
            </section>

            {/* 9. Governing Law */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold">
                9. Governing Law & Dispute Resolution
              </h2>
              <p>
                These Terms are governed by the laws of Nigeria. Any disputes
                arising from or relating to these Terms or the Site shall be
                submitted to the courts or arbitration in Nigeria (as per your
                choice).
              </p>
            </section>

            {/* 10. Changes */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold">10. Changes to Terms</h2>
              <p>
                We may revise these Terms at any time. The “Last Updated” date
                will reflect such changes. By continuing to access or use the
                Site after the changes take effect, you agree to be bound by the
                revised Terms.
              </p>
            </section>

            {/* 11. Severability */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold">11. Severability</h2>
              <p>
                If any provision of these Terms is found invalid or
                unenforceable, the remainder will remain in effect.
              </p>
            </section>
          </article>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default TermOfUse;
