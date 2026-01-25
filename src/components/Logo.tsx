import adminixLogo from "@/assets/adminix-logo-full-text-light.svg";

export const Logo = () => {
  return (
    <a
      href="/"
      className="relative text-blue-700 content-center items-center box-border caret-transparent gap-x-2 flex shrink-0 h-min justify-start gap-y-2 w-min"
    >
      <img
        src={adminixLogo}
        alt="Adminix logo"
        className="box-border caret-transparent h-8 w-auto md:h-10"
      />
      <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
        <h4 className="text-black text-xl font-semibold box-border caret-transparent tracking-[-0.4px] leading-6 text-nowrap font-geist md:text-2xl md:tracking-[-0.48px] md:leading-[28.8px]">
          Adminix
        </h4>
      </div>
    </a>
  );
};

