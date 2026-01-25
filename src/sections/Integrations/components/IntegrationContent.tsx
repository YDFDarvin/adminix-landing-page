export const IntegrationContent = () => {
  return (
    <div className="relative content-center items-center box-border caret-transparent gap-x-5 flex basis-auto flex-col grow-0 shrink-0 h-min justify-center gap-y-5 w-full lg:content-start lg:items-start lg:basis-0 lg:grow lg:w-px">
      <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 h-min justify-center gap-y-2.5 w-full lg:content-start lg:items-start">
        <div className="relative box-border caret-transparent shrink-0">
          <div className="relative content-center items-center bg-indigo-100 box-border caret-transparent gap-x-1.5 flex h-min justify-center gap-y-1.5 w-min overflow-hidden px-3 py-1.5 rounded-[50px] after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border after:border-blue-600 after:rounded-[50px] after:border-separate after:border-solid after:left-0 after:top-0 after:font-sans_serif">
            <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
              <p className="text-blue-600 text-sm font-medium box-border caret-transparent tracking-[-0.28px] leading-[18.2px] text-nowrap font-geist">
                Integrations
              </p>
            </div>
          </div>
        </div>
        <div className="relative content-center items-center box-border caret-transparent gap-x-1.5 flex flex-col shrink-0 h-min justify-center gap-y-1.5 w-full lg:content-start lg:items-start lg:gap-x-2.5 lg:gap-y-2.5">
          <div className="box-border caret-transparent contents">
            <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start max-w-[500px] break-words w-full">
              <h2 className="text-[28px] font-semibold box-border caret-transparent tracking-[-0.84px] leading-[30.8px] break-words text-left capitalize font-geist md:text-5xl md:tracking-[-1.44px] md:leading-[52.8px]">
                Seamless Integrations
              </h2>
            </div>
          </div>
          <div className="box-border caret-transparent contents">
            <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start max-w-[450px] w-full">
              <p className="text-zinc-600/80 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] text-left font-geist">
                Connect Adminix with your favorite tools to streamline workflows
                and keep everything running smoothly.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative box-border caret-transparent shrink-0">
        <button
          disabled
          className="relative text-blue-700 disabled:opacity-50 content-center items-center bg-blue-600 box-border caret-transparent gap-x-2.5 flex h-min justify-center gap-y-2.5 w-min overflow-hidden px-5 py-2.5 rounded-[10px] after:accent-auto after:box-border after:caret-transparent after:text-blue-700 after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:rounded-[10px] after:border-separate after:border-2 after:border-solid after:border-white/20 after:left-0 after:top-0 after:font-sans_serif"
        >
          <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex blur-0 shrink-0 h-min justify-center gap-y-2.5 w-min">
            <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
              <p className="text-white text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] text-nowrap font-geist">
                Get Started Now
              </p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

