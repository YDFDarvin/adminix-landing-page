import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";

export const PrivacyPolicy = () => {
  return (
    <div className="text-black text-xs not-italic normal-nums font-normal accent-auto bg-neutral-100 box-border caret-transparent block tracking-[normal] leading-[normal] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-sans_serif min-h-screen">
      <div className="relative flex min-h-screen flex-col bg-neutral-100">
        <Header />
        <main className="w-full max-w-5xl px-6 pb-20 pt-28 sm:px-10 lg:px-12 flex-1 mx-auto">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 font-geist">
                Legal
              </p>
              <h1 className="text-3xl font-semibold tracking-[-0.8px] text-zinc-900 font-geist sm:text-4xl">
                Privacy Policy
              </h1>
              <p className="text-sm text-zinc-500 font-geist">
                Updated January 28, 2026
              </p>
            </div>
            <div className="flex flex-col gap-6 text-base text-zinc-700 leading-7 font-geist">
              <p>
                This is a mock privacy policy page for Adminix. It is provided for
                demonstration purposes only and does not represent a real legal
                agreement.
              </p>
              <p>
                We describe how information could be collected and used to deliver
                services, improve product experiences, and communicate important
                updates. Specific implementation details can be added once the
                production policy is finalized.
              </p>
              <p>
                For now, treat this page as a placeholder. Replace the sections
                below with final legal language approved by your counsel.
              </p>
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">
                  Placeholder sections
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                  <li>Information we collect</li>
                  <li>How we use information</li>
                  <li>Data retention and security</li>
                  <li>Your choices and rights</li>
                  <li>Contact information</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
        <div className="mt-auto w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};
