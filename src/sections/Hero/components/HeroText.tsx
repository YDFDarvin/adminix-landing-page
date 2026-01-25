export const HeroText = () => {
  return (
    <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 h-min justify-center gap-y-2.5 w-full">
      <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start max-w-[450px] md:max-w-[700px]">
        <h1 className="text-[44px] font-semibold box-border caret-transparent tracking-[-1.32px] leading-[48.4px] text-center capitalize font-geist md:text-6xl md:tracking-[-1.8px] md:leading-[66px]">
          Streamline your business processes with Adminix
        </h1>
      </div>
      <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start max-w-[300px] md:max-w-[400px]">
        <p className="text-zinc-600/80 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] text-center font-geist">
          Improve your productivity and save money on development with our AI-based automation solution
        </p>
      </div>
    </div>
  );
};
