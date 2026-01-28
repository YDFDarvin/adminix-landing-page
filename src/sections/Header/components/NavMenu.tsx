import { Link, useLocation } from "react-router-dom";

export const NavMenu = () => {
  const { pathname } = useLocation();
  const handleNavClick = (id: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById(id);
    if (pathname === "/" && target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-min">
      <div className="relative box-border caret-transparent shrink-0">
        <Link
          to="/#features"
          className="relative text-blue-700 content-center items-center shadow-[rgb(228,228,228)_0px_0px_0px_0px] box-border caret-transparent gap-x-2.5 flex h-10 justify-center gap-y-2.5 w-min px-3 py-2.5 rounded-lg"
          onClick={handleNavClick("features")}
        >
          <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
            <p className="text-zinc-600/80 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] text-nowrap font-geist">
              Features
            </p>
          </div>
        </Link>
      </div>
      <div className="relative box-border caret-transparent shrink-0">
        <Link
          to="/#benefits"
          className="relative text-blue-700 content-center items-center box-border caret-transparent gap-x-2.5 flex h-10 justify-center gap-y-2.5 w-min px-3 py-2.5 rounded-lg"
          onClick={handleNavClick("benefits")}
        >
          <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
            <p className="text-zinc-600/80 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] text-nowrap font-geist">
              Benefits
            </p>
          </div>
        </Link>
      </div>
      <div className="relative box-border caret-transparent shrink-0">
        <Link
          to="/#integrations"
          className="relative text-blue-700 content-center items-center box-border caret-transparent gap-x-2.5 flex h-10 justify-center gap-y-2.5 w-min px-3 py-2.5 rounded-lg"
          onClick={handleNavClick("integrations")}
        >
          <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
            <p className="text-zinc-600/80 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] text-nowrap font-geist">
              Integrations
            </p>
          </div>
        </Link>
      </div>
      <div className="relative box-border caret-transparent shrink-0">
        <Link
          to="/#pricing"
          className="relative text-blue-700 content-center items-center box-border caret-transparent gap-x-2.5 flex h-10 justify-center gap-y-2.5 w-min px-3 py-2.5 rounded-lg"
          onClick={handleNavClick("pricing")}
        >
          <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
            <p className="text-zinc-600/80 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] text-nowrap font-geist">
              Pricing
            </p>
          </div>
        </Link>
      </div>
      <div className="relative box-border caret-transparent shrink-0">
        <Link
          to="/#faq"
          className="relative text-blue-700 content-center items-center box-border caret-transparent gap-x-2.5 flex h-10 justify-center gap-y-2.5 w-min px-3 py-2.5 rounded-lg"
          onClick={handleNavClick("faq")}
        >
          <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
            <p className="text-zinc-600/80 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] text-nowrap font-geist">
              FAQ
            </p>
          </div>
        </Link>
      </div>
    </nav>
  );
};
