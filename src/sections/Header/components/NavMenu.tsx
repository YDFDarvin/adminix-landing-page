export const NavMenu = () => {
  const handleNavClick = (id: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-min">
      <div className="relative box-border caret-transparent shrink-0">
        <a
          href="#features"
          className="relative text-blue-700 content-center items-center shadow-[rgb(228,228,228)_0px_0px_0px_0px] box-border caret-transparent gap-x-2.5 flex h-10 justify-center gap-y-2.5 w-min px-3 py-2.5 rounded-lg"
          onClick={handleNavClick("features")}
        >
          <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
            <p className="text-zinc-600/80 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] text-nowrap font-geist">
              Features
            </p>
          </div>
        </a>
      </div>
      <div className="relative box-border caret-transparent shrink-0">
        <a
          href="#benefits"
          className="relative text-blue-700 content-center items-center box-border caret-transparent gap-x-2.5 flex h-10 justify-center gap-y-2.5 w-min px-3 py-2.5 rounded-lg"
          onClick={handleNavClick("benefits")}
        >
          <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
            <p className="text-zinc-600/80 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] text-nowrap font-geist">
              Benefits
            </p>
          </div>
        </a>
      </div>
      <div className="relative box-border caret-transparent shrink-0">
        <a
          href="#integrations"
          className="relative text-blue-700 content-center items-center box-border caret-transparent gap-x-2.5 flex h-10 justify-center gap-y-2.5 w-min px-3 py-2.5 rounded-lg"
          onClick={handleNavClick("integrations")}
        >
          <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
            <p className="text-zinc-600/80 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] text-nowrap font-geist">
              Integrations
            </p>
          </div>
        </a>
      </div>
      <div className="relative box-border caret-transparent shrink-0">
        <a
          href="#pricing"
          className="relative text-blue-700 content-center items-center box-border caret-transparent gap-x-2.5 flex h-10 justify-center gap-y-2.5 w-min px-3 py-2.5 rounded-lg"
          onClick={handleNavClick("pricing")}
        >
          <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
            <p className="text-zinc-600/80 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] text-nowrap font-geist">
              Pricing
            </p>
          </div>
        </a>
      </div>
      <div className="relative box-border caret-transparent shrink-0">
        <a
          href="#faq"
          className="relative text-blue-700 content-center items-center box-border caret-transparent gap-x-2.5 flex h-10 justify-center gap-y-2.5 w-min px-3 py-2.5 rounded-lg"
          onClick={handleNavClick("faq")}
        >
          <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
            <p className="text-zinc-600/80 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] text-nowrap font-geist">
              FAQ
            </p>
          </div>
        </a>
      </div>
    </nav>
  );
};
