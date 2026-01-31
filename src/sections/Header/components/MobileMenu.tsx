import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Collapse } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { CTAButton } from "@/components/CTAButton";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUseCasesOpen, setIsUseCasesOpen] = useState(false);
  const { pathname } = useLocation();
  const handleNavClick = (id: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    setIsOpen(false);
    setIsUseCasesOpen(false);
    const target = document.getElementById(id);
    if (pathname === "/" && target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const handleUseCasesToggle = () => {
    setIsUseCasesOpen((prev) => !prev);
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
            <div className="pt-2">
              <button
                type="button"
                onClick={handleUseCasesToggle}
                className="w-full flex items-center justify-between text-zinc-700/90 text-lg font-medium py-3 px-4 hover:bg-neutral-100 rounded-lg"
                aria-expanded={isUseCasesOpen}
                aria-controls="mobile-use-cases"
              >
                <span>Use Cases</span>
                <KeyboardArrowDownIcon
                  fontSize="small"
                  className={`transition-transform duration-200 ${isUseCasesOpen ? "rotate-180" : ""}`}
                />
              </button>
              <Collapse in={isUseCasesOpen} timeout={200}>
                <div id="mobile-use-cases" className="mt-1 flex flex-col gap-1 pl-4">
                  {[
                    { label: "Insurance", href: "/use-cases/insurance" },
                    { label: "Healthcare", href: "/use-cases/healthcare" },
                    { label: "HR", href: "/use-cases/hr" },
                    { label: "Real Estate", href: "/use-cases/real-estate" },
                    { label: "E-commerce", href: "/use-cases/e-commerce" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="text-zinc-600/80 text-base font-medium py-2.5 px-4 hover:bg-neutral-100 rounded-lg"
                      onClick={() => {
                        setIsOpen(false);
                        setIsUseCasesOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </Collapse>
            </div>
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
