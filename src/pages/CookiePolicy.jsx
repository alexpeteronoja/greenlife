import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function CookiePolicy() {
  return (
    <>
      <div className="bg-[#F5F5F533]">
        <Navbar navStyle="bg-[#AFAFAE1A] text-black" />
        <div className="px-8 pt-9 pb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            Cookie Settings / Cookie Policy (and Settings Panel)
          </h1>
          <div className="text-sm text-gray-600 mt-5 md:mt-10">
            Last Updated: <strong>29th September, 2025</strong>
          </div>
        </div>
      </div>

      <div className="mx-8 mt-3 md:mt-6">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <article className="prose prose-neutral max-w-none">
            <section className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  1. What Are Cookies
                </h2>
                <p>
                  Cookies are small text files placed on your device when you
                  visit websites, used to store information to help the site
                  function or to improve your user experience.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">
                  2. Types of Cookies We Use
                </h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>Necessary / Essential Cookies</strong> – required
                    for the basic operation of the Site (e.g. security, login
                    session).
                  </li>
                  <li>
                    <strong>Performance / Analytics Cookies</strong> – collect
                    anonymous information about how visitors use the Site.
                  </li>
                  <li>
                    <strong>Functional Cookies</strong> – allow the Site to
                    remember your preferences (e.g. language, settings).
                  </li>
                  <li>
                    <strong>Marketing / Advertising Cookies</strong> – used to
                    deliver relevant ads and track ad campaign performance.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">
                  3. Cookie Settings Panel
                </h2>
                <p>
                  When users first land on the Site (or via a “Cookie Settings”
                  link), they can:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Accept all cookies</li>
                  <li>Reject non-essential cookies</li>
                  <li>
                    Customize preferences (toggle analytics, marketing,
                    functional)
                  </li>
                </ul>
                <p className="mt-2">
                  Users can update cookie settings anytime via a “Cookie
                  Settings” link in the footer or within their account settings
                  (if applicable).
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">
                  4. How We Use Cookies
                </h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>Enable core site functionality</li>
                  <li>Understand and analyze site traffic and user behavior</li>
                  <li>Improve user experience and site performance</li>
                  <li>Serve relevant advertising</li>
                  <li>Remember user preferences</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">
                  5. Third-Party Cookies
                </h2>
                <p>
                  We may allow third parties (analytics providers, ad networks)
                  to set cookies on the Site. Their use is governed by their
                  respective privacy/cookie policies.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">
                  6. Managing / Disabling Cookies
                </h2>
                <p>
                  You can control cookies via browser settings (delete, block,
                  or accept them). You may also use the Cookie Settings panel on
                  our Site to disable non-essential cookies. However, disabling
                  certain cookies may impact site features and your user
                  experience.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">
                  7. Changes to Cookie Policy
                </h2>
                <p>
                  We may update this Cookie Policy over time. The “Last Updated”
                  date will reflect changes, and we will notify you of material
                  changes via the Site or other means.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">8. Contact</h2>
                <p>
                  For questions about our use of cookies or this policy,
                  contact: <br />
                  <strong>Greenlife Pharmaceuticals</strong> <br />
                  Email:{' '}
                  <a href="mailto:info@greenlifepharma.com">
                    info@greenlifepharma.com
                  </a>
                </p>
              </div>
            </section>
          </article>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CookiePolicy;
