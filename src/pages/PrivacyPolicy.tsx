import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";

export const PrivacyPolicy = () => {
  return (
    <div className="text-black text-xs not-italic normal-nums font-normal accent-auto bg-neutral-100 box-border caret-transparent block tracking-[normal] leading-[normal] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-sans_serif min-h-screen">
      <div className="relative flex min-h-screen flex-col bg-neutral-100">
        <Header />
        <main className="w-full max-w-5xl px-6 pb-20 pt-28 sm:px-10 lg:px-12 flex-1 mx-auto">
          <div className="flex flex-col gap-8 text-base text-zinc-700 leading-7 font-geist">
            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 font-geist">
                Legal
              </p>
              <h1 className="text-3xl font-semibold tracking-[-0.8px] text-zinc-900 font-geist sm:text-4xl">
                PRIVACY POLICY
              </h1>
              <p className="text-sm text-zinc-500 font-geist">Last updated: January 28, 2026</p>
            </div>

            <p>
              Adminix Solutions Inc. (“Adminix”, “we”, “us”, or “our”) respects your
              privacy and is committed to protecting the personal data we collect from
              users of our website, customers of our products and services, and
              subscribers to our communications. This Privacy Policy explains how we
              collect, use, disclose, and protect information when you access or use{" "}
              <a href="https://www.adminix.io" className="text-blue-700">
                https://www.adminix.io
              </a>{" "}
              and the Adminix software platform (collectively, the “Service”), as well
              as your rights under applicable data protection laws.
            </p>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-zinc-900">1. Company Information</h2>
              <p>
                Legal name: Adminix Solutions Inc. Website:{" "}
                <a href="https://www.adminix.io" className="text-blue-700">
                  https://www.adminix.io
                </a>{" "}
                Contact email: contact@adminix.io
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-zinc-900">2. Your Consent</h2>
              <p>
                By accessing or using our Service, you acknowledge that you have read
                and understood this Privacy Policy and consent to the collection and
                use of your information as described herein.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-xl font-semibold text-zinc-900">3. Information We Collect</h2>

              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-zinc-900">
                  3.1 Personal Information You Provide
                </h3>
                <p>We collect personal information that you voluntarily provide when you:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>create an account or sign up for a trial</li>
                  <li>subscribe to newsletters or marketing communications</li>
                  <li>purchase or subscribe to a paid plan</li>
                  <li>submit a support request or contact us</li>
                </ul>
                <p>This information may include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>first and last name</li>
                  <li>email address</li>
                  <li>company name</li>
                  <li>phone number</li>
                  <li>mailing address</li>
                  <li>username and password</li>
                  <li>billing and payment information</li>
                </ul>
                <p>
                  Payment information is processed securely by third-party payment
                  providers and is used solely for billing and subscription management
                  purposes.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-zinc-900">
                  3.2 Information Collected Automatically
                </h3>
                <p>
                  When you access or use the Service, we automatically collect certain
                  technical and usage information, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address and approximate geolocation</li>
                  <li>browser type, device type, operating system</li>
                  <li>referral URLs and pages visited</li>
                  <li>features accessed and actions taken within the platform</li>
                  <li>timestamps, error logs, and performance data</li>
                </ul>
                <p>
                  This information is collected through log files and similar
                  technologies and is used to improve product performance, user
                  experience, security, and internal operations. Our lawful basis for
                  processing this information includes legitimate interests such as
                  service optimization, fraud prevention, and system security.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-zinc-900">3.3 Customer Data</h3>
                <p>
                  “Customer Data” refers to any data uploaded, generated, or processed
                  by users within internal tools built using Adminix, including
                  business records, operational workflows, employee-related data, or
                  other internal information. Adminix acts as a data processor with
                  respect to Customer Data. Customers remain the data controllers and
                  determine the purposes and means of processing such data.
                </p>
              </div>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-zinc-900">4. How We Use Information</h2>
              <p>We use collected information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>to provide, operate, and maintain the Service</li>
                <li>to manage user accounts and authentication</li>
                <li>to enable AI-assisted internal software creation</li>
                <li>to process payments and subscriptions</li>
                <li>to communicate service updates, security notices, and support messages</li>
                <li>to improve product functionality, performance, and reliability</li>
                <li>to conduct analytics and improve marketing effectiveness</li>
                <li>to comply with legal obligations and enforce agreements</li>
              </ul>
              <p>Testimonials or feedback shared by users may be displayed publicly with prior consent.</p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-zinc-900">5. AI Processing and Use of Data</h2>
              <p>
                Adminix uses artificial intelligence to assist users in building internal
                software, including generating UI structures, workflows, and data models.
                Customer Data is not used to train public or external AI models. AI
                processing is limited to the customer’s workspace and is performed solely
                to provide the Service. Users remain responsible for reviewing AI-generated
                outputs before deploying them in production environments.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-zinc-900">
                6. Sharing of Information with Third Parties
              </h2>
              <p>We do not sell or rent personal data.</p>
              <p>
                We may share information with trusted third parties who assist us in
                operating the Service, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>cloud hosting and infrastructure providers</li>
                <li>payment processors</li>
                <li>analytics and monitoring services</li>
                <li>email and communication providers</li>
              </ul>
              <p>
                These third parties are bound by contractual confidentiality and data
                protection obligations. We may also disclose information if required to
                comply with applicable laws, regulations, court orders, or to protect the
                rights, property, or safety of Adminix, our users, or others.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-zinc-900">
                7. Cookies and Tracking Technologies
              </h2>
              <p>
                Adminix uses cookies and similar technologies to ensure the proper
                functioning of the Service, analyze usage, and improve user experience.
                Cookies may include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>session cookies, which expire when you close your browser</li>
                <li>performance and functionality cookies, which remember user preferences</li>
              </ul>
              <p>You can control cookie usage through your browser settings.</p>
              <p>We do not transfer cookie-derived information to unauthorized third parties.</p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-zinc-900">8. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect
                personal data, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>encryption of data in transit using SSL/TLS</li>
                <li>access controls and role-based permissions</li>
                <li>logical separation of customer workspaces</li>
                <li>regular review of security practices</li>
              </ul>
              <p>
                Despite these measures, no method of transmission or storage is completely
                secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-zinc-900">
                9. International Data Transfers
              </h2>
              <p>Adminix operates from the United States.</p>
              <p>
                If you access the Service from outside the U.S., your information may be
                transferred to and processed in the United States or other jurisdictions.
                Where required, we rely on approved data transfer mechanisms, including
                Standard Contractual Clauses (SCCs), to ensure adequate protection of
                personal data.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-zinc-900">10. Data Retention</h2>
              <p>We retain personal data only for as long as necessary to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>provide the Service</li>
                <li>comply with legal and regulatory requirements</li>
                <li>resolve disputes and enforce agreements</li>
              </ul>
              <p>
                Customer Data is retained and deleted in accordance with customer
                instructions and applicable law.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-zinc-900">11. Your Privacy Rights</h2>
              <p>Depending on your jurisdiction, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>access your personal data</li>
                <li>request correction or deletion</li>
                <li>restrict or object to processing</li>
                <li>request data portability</li>
              </ul>
              <p>Requests may be submitted to contact@adminix.io.</p>
              <p>We will respond within the timeframes required by law.</p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-zinc-900">12. Children’s Privacy</h2>
              <p>The Service is not intended for individuals under the age of 16.</p>
              <p>We do not knowingly collect personal data from minors.</p>
              <p>If such data is identified, it will be deleted promptly.</p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-zinc-900">
                13. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time to reflect legal,
                regulatory, or operational changes. The updated version will be posted on
                this page with a revised “Last updated” date.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-zinc-900">14. Contact Information</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy or our
                data practices, please contact us at:
              </p>
              <p>contact@adminix.io</p>
            </section>
          </div>
        </main>
        <div className="mt-auto w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};
