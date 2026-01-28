import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CTAButton } from "@/components/CTAButton";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const handleNavClick = (id: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    setIsOpen(false);
    const target = document.getElementById(id);
    if (pathname === "/" && target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
            <Link
              to="/#features"
              className="text-zinc-600/80 text-lg font-medium py-3 px-4 hover:bg-neutral-100 rounded-lg"
              onClick={handleNavClick("features")}
            >
              Features
            </Link>
            <Link
              to="/#benefits"
              className="text-zinc-600/80 text-lg font-medium py-3 px-4 hover:bg-neutral-100 rounded-lg"
              onClick={handleNavClick("benefits")}
            >
              Benefits
            </Link>
            <Link
              to="/#integrations"
              className="text-zinc-600/80 text-lg font-medium py-3 px-4 hover:bg-neutral-100 rounded-lg"
              onClick={handleNavClick("integrations")}
            >
              Integrations
            </Link>
            <Link
              to="/#pricing"
              className="text-zinc-600/80 text-lg font-medium py-3 px-4 hover:bg-neutral-100 rounded-lg"
              onClick={handleNavClick("pricing")}
            >
              Pricing
            </Link>
            <Link
              to="/#faq"
              className="text-zinc-600/80 text-lg font-medium py-3 px-4 hover:bg-neutral-100 rounded-lg"
              onClick={handleNavClick("faq")}
            >
              FAQ
            </Link>
            <div className="mt-4">
              <CTAButton />
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
