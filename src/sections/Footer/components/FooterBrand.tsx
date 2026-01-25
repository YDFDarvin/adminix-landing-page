import adminixLogo from "@/assets/adminix-logo-full-text-light.svg";

export const FooterBrand = () => {
  return (
    <div className="relative content-start items-start box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 h-min justify-start gap-y-2.5 w-full">
      <div className="relative content-center items-center box-border caret-transparent gap-x-2 flex shrink-0 h-min justify-start gap-y-2 overflow-hidden">
        <img
          src={adminixLogo}
          alt="Adminix logo"
          className="box-border caret-transparent h-8 w-auto md:h-10"
        />
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
          <h4 className="text-xl font-semibold box-border caret-transparent tracking-[-0.4px] leading-6 text-nowrap font-geist md:text-2xl md:tracking-[-0.48px] md:leading-[28.8px]">
            Adminix
          </h4>
        </div>
      </div>
      <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start max-w-[340px] break-words w-full">
        <p className="text-zinc-600/80 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] break-words font-geist">
          <mark className="bg-transparent box-border caret-transparent break-words">
            Improve your productivity and save money on development with our AI-based automation solution
          </mark>
        </p>
      </div>
    </div>
  );
};

