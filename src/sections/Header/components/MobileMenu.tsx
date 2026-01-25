import { useState } from "react";
import { CTAButton } from "@/components/CTAButton";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
        aria-label="Toggle menu"
      >
        <span
          className={`w-6 h-0.5 bg-black transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-black transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-black transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 top-[60px]">
          <nav className="flex flex-col gap-2 p-6">
            <a
              href="https://alytics.framer.website/#features"
              className="text-zinc-600/80 text-lg font-medium py-3 px-4 hover:bg-neutral-100 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a
              href="https://alytics.framer.website/#benefits"
              className="text-zinc-600/80 text-lg font-medium py-3 px-4 hover:bg-neutral-100 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Benefits
            </a>
            <a
              href="https://alytics.framer.website/#integrations"
              className="text-zinc-600/80 text-lg font-medium py-3 px-4 hover:bg-neutral-100 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Integrations
            </a>
            <a
              href="https://alytics.framer.website/#pricing"
              className="text-zinc-600/80 text-lg font-medium py-3 px-4 hover:bg-neutral-100 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <a
              href="https://alytics.framer.website/#faq"
              className="text-zinc-600/80 text-lg font-medium py-3 px-4 hover:bg-neutral-100 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </a>
            <a
              href="https://alytics.framer.website/blog"
              className="text-zinc-600/80 text-lg font-medium py-3 px-4 hover:bg-neutral-100 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Blogs
            </a>
            <div className="mt-4">
              <CTAButton />
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
