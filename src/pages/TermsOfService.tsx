import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";

export const TermsOfService = () => {
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
                TERMS OF SERVICE
              </h1>
              <p className="text-sm text-zinc-500 font-geist">Last updated: January 28, 2026</p>
            </div>

            <p>
              These Terms of Service (“Terms”) govern access to and use of the Adminix
              website and software platform operated by Adminix Solutions Inc. (“Adminix”,
              “we”, “us”, or “our”). By accessing or using{" "}
              <a href="https://www.adminix.io" className="text-blue-700">
                https://www.adminix.io
              </a>{" "}
              and the Adminix platform (collectively, the “Service”), you agree to be
              bound by these Terms. If you do not agree, you may not use the Service.
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
              <h2 className="text-xl font-semibold text-zinc-900">
                2. Eligibility and Authority
              </h2>
              <p>You may use the Service only if:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>you are at least 18 years old, and</li>
                <li>
                  you have the legal authority to enter into these Terms on behalf of
                  yourself or the organization you represent.
                </li>
              </ul>
              <p>
                By using the Service on behalf of an organization, you represent and
                warrant that you are authorized to bind that organization to these Terms.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-zinc-900">3. Scope of the Service</h2>
              <p>
                Adminix is a software platform designed to help users design, build, and
                operate internal business software, including administrative tools,
                dashboards, workflows, and other internal systems. The Service may
                include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>visual UI builders</li>
                <li>workflow and data management tools</li>
                <li>AI-assisted functionality</li>
                <li>templates and preconfigured components</li>
              </ul>
              <p>Adminix does not provide legal, financial, or professional advice.</p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-zinc-900">
                4. Account Registration and Security
              </h2>
              <p>To access certain features, you must create an account.</p>
              <p>You are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>providing accurate and complete information</li>
                <li>maintaining the confidentiality of your login credentials</li>
                <li>all activities conducted under your account</li>
              </ul>
              <p>
                You agree to notify us immediately of any unauthorized use or security
                breach. Adminix is not responsible for losses caused by unauthorized
                access resulting from your failure to secure your account.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-zinc-900">5. Acceptable Use</h2>
              <p>You agree to use the Service only for lawful internal business purposes.</p>
              <p>You may not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>use the Service for illegal, fraudulent, or harmful activities</li>
                <li>
                  upload or process content that violates applicable laws or third-party
                  rights
                </li>
                <li>
                  interfere with or disrupt the integrity or performance of the Service
                </li>
                <li>attempt to reverse engineer, copy, resell, or exploit the platform</li>
                <li>abuse AI features, system resources, or usage limits</li>
              </ul>
              <p>
                Adminix reserves the right to suspend or terminate access for violations of
                this section.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-zinc-900">
                6. Customer Data and Content
              </h2>
              <p>
                “Customer Data” means any data, content, or information submitted,
                generated, or processed by you within the Service, including data processed
                through internal tools built using Adminix. You retain all rights, title,
                and interest in Customer Data. You grant Adminix a limited, non-exclusive
                right to process Customer Data solely to provide, maintain, and improve the
                Service in accordance with these Terms and our Privacy Policy.
              </p>
              <p>You are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>the accuracy and legality of Customer Data</li>
                <li>ensuring that you have the right to process such data</li>
                <li>complying with applicable data protection and privacy laws</li>
              </ul>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-zinc-900">7. AI-Assisted Features</h2>
              <p>
                The Service may include artificial intelligence features designed to assist
                with generating structures, workflows, data models, or other components of
                internal software. You acknowledge that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>AI-generated outputs are produced automatically</li>
                <li>AI outputs may be incomplete, inaccurate, or unsuitable without review</li>
                <li>
                  you are responsible for reviewing, testing, and validating outputs before
                  production use
                </li>
              </ul>
              <p>
                Adminix does not guarantee the correctness, reliability, or suitability of
                AI-generated outputs and is not responsible for business decisions made
                based on such outputs. Customer Data is not used to train public or external
                AI models.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-zinc-900">8. Intellectual Property</h2>
              <p>
                All rights, title, and interest in the Service, including software, code,
                designs, trademarks, and documentation, are owned by Adminix Solutions Inc.
                or its licensors. Except for the limited right to use the Service as
                expressly granted in these Terms, no rights are transferred to you. You
                retain ownership of your Customer Data and internal tool configurations.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-zinc-900">
                9. Fees, Billing, and Payments
              </h2>
              <p>Certain features of the Service may require payment.</p>
              <p>By subscribing to a paid plan, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>pay all applicable fees according to the selected plan</li>
                <li>provide accurate billing information</li>
                <li>authorize recurring charges where applicable</li>
              </ul>
              <p>
                Failure to pay fees may result in suspension or termination of access. Fees
                are non-refundable except where required by law or explicitly stated
                otherwise.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-zinc-900">10. Third-Party Services</h2>
              <p>The Service may integrate with or link to third-party services.</p>
              <p>
                Adminix is not responsible for third-party services, content, or practices.
                Your use of third-party services is subject to their respective terms and
                policies.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-zinc-900">
                11. Suspension and Termination
              </h2>
              <p>Adminix may suspend or terminate your access to the Service if:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>you violate these Terms</li>
                <li>required by law or regulation</li>
                <li>necessary to protect the security or integrity of the Service</li>
              </ul>
              <p>
                You may terminate your account at any time. Upon termination, access to
                the Service will cease, and Customer Data may be deleted in accordance with
                our data retention policies.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-zinc-900">
                12. Disclaimer of Warranties
              </h2>
              <p>The Service is provided on an “as is” and “as available” basis.</p>
              <p>
                To the maximum extent permitted by law, Adminix disclaims all warranties,
                whether express, implied, or statutory, including warranties of
                merchantability, fitness for a particular purpose, and non-infringement.
              </p>
              <p>Adminix does not warrant that the Service will be uninterrupted, error-free, or secure.</p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-zinc-900">
                13. Limitation of Liability
              </h2>
              <p>To the maximum extent permitted by law:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Adminix shall not be liable for indirect, incidental, special,
                  consequential, or punitive damages
                </li>
                <li>
                  Adminix’s total liability arising out of or related to the Service shall
                  not exceed the fees paid by you to Adminix in the twelve (12) months
                  preceding the claim
                </li>
              </ul>
              <p>This limitation applies regardless of the legal theory under which liability arises.</p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-zinc-900">14. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Adminix Solutions Inc., its
                affiliates, officers, directors, employees, and agents from any claims,
                damages, liabilities, losses, and expenses arising out of:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>your use of the Service</li>
                <li>your Customer Data</li>
                <li>your violation of these Terms or applicable laws</li>
              </ul>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-zinc-900">
                15. Governing Law and Jurisdiction
              </h2>
              <p>
                These Terms are governed by and construed in accordance with the laws of
                the State of Delaware, USA, without regard to conflict of law principles.
              </p>
              <p>
                Any disputes arising out of or relating to these Terms or the Service shall
                be resolved exclusively in the state or federal courts located in Delaware.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-zinc-900">16. Changes to These Terms</h2>
              <p>Adminix reserves the right to modify these Terms at any time.</p>
              <p>
                Updated Terms will be posted on this page with a revised “Last updated”
                date.
              </p>
              <p>Your continued use of the Service constitutes acceptance of the updated Terms.</p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-zinc-900">17. Miscellaneous</h2>
              <p>
                These Terms constitute the entire agreement between you and Adminix
                regarding the Service and supersede all prior agreements. If any provision
                of these Terms is found unenforceable, the remaining provisions shall
                remain in full force and effect. Failure by Adminix to enforce any right
                shall not constitute a waiver of that right.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-zinc-900">18. Contact Information</h2>
              <p>If you have any questions regarding these Terms, please contact us at:</p>
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
