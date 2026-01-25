export const Logo = () => {
  return (
    <a
      href="https://alytics.framer.website/"
      className="relative text-blue-700 content-center items-center box-border caret-transparent gap-x-1.5 flex shrink-0 h-min justify-start gap-y-1.5 w-min"
    >
      <div className="relative text-black aspect-square box-border caret-transparent shrink-0 w-[30px]">
        <div className="aspect-square box-border caret-transparent h-full w-full">
          <img
            src="https://c.animaapp.com/mkmz8by2SWvy85/assets/icon-1.svg"
            alt="Icon"
            className="box-border caret-transparent h-full w-full"
          />
        </div>
      </div>
      <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
        <h4 className="text-black text-xl font-semibold box-border caret-transparent tracking-[-0.4px] leading-6 text-nowrap font-geist md:text-2xl md:tracking-[-0.48px] md:leading-[28.8px]">
          Alytics
        </h4>
      </div>
    </a>
  );
};
