import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { PrivacyPolicy } from "@/pages/PrivacyPolicy";
import { TermsOfService } from "@/pages/TermsOfService";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Features } from "@/sections/Features";
import { Benefits } from "@/sections/Benefits";
import { HowItWorks } from "@/sections/HowItWorks";
import { Integrations } from "@/sections/Integrations";
import { Testimonials } from "@/sections/Testimonials";
import { Pricing } from "@/sections/Pricing";
import { Comparison } from "@/sections/Comparison";
import { FAQ } from "@/sections/FAQ";
// import { Newsletter } from "@/sections/Newsletter";
import { Footer } from "@/sections/Footer";

const HomePage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      return;
    }

    const targetId = hash.replace("#", "");
    if (!targetId) {
      return;
    }

    const target = document.getElementById(targetId);
    if (!target) {
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <body className="text-black text-xs not-italic normal-nums font-normal accent-auto bg-neutral-100 box-border caret-transparent block tracking-[normal] leading-[normal] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-sans_serif">
      <div className="box-border caret-transparent">
        <div className="relative content-center items-center bg-neutral-100 box-border caret-transparent gap-x-0 flex flex-col h-min justify-start min-h-[1000px] gap-y-0 overflow-hidden">
          <Header />
          <div className="relative content-center items-center bg-neutral-100 box-border caret-transparent gap-x-0 contents flex-col h-min justify-start min-h-[1000px] gap-y-0 overflow-hidden md:h-[1000px]">
            <div className="relative box-border caret-transparent shrink-0">
              <div className="box-border caret-transparent"></div>
            </div>
            <main className="relative content-center items-center box-border caret-transparent gap-x-0 flex flex-col shrink-0 h-min justify-start gap-y-0 w-full overflow-hidden">
              <Hero />
              <Features />
              <Benefits />
              <HowItWorks />
              <Integrations />
              <Testimonials />
              <Pricing />
              {/* <Comparison /> */}
              <FAQ />
              {/* <Newsletter /> */}
            </main>
          </div>
          <div className="box-border caret-transparent"></div>
          <div className="relative box-border caret-transparent grow h-0 w-0 bg-[position:0px_0px]"></div>
          <div className="relative box-border caret-transparent shrink-0 order-[1003] w-full">
            <div className="box-border caret-transparent contents">
              <Footer />
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent"></div>
      </div>
      <div className="absolute box-border caret-transparent h-0 w-0 z-0 overflow-hidden left-0 bottom-0">
        <img
          src="https://c.animaapp.com/mkmz8by2SWvy85/assets/icon-2.svg"
          alt="Icon"
          className="box-border caret-transparent h-5 w-5"
        />
      </div>
      <div className="box-border caret-transparent">
        <div className="caret-transparent">
          <div
            role="region"
            aria-label="Notifications (F8)"
            className="caret-transparent pointer-events-none"
          >
            <ol className="caret-transparent list-decimal my-3"></ol>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent">
        <div></div>
      </div>
      <div className="box-border caret-transparent">
        <div></div>
      </div>
    </body>
  );
};

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsOfService />} />
    </Routes>
  );
};
