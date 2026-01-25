export const FooterBrand = () => {
  return (
    <div className="relative content-start items-start box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 h-min justify-start gap-y-2.5 w-full">
      <div className="relative content-center items-center box-border caret-transparent gap-x-1.5 flex shrink-0 h-min justify-start gap-y-1.5 w-min overflow-hidden">
        <div className="relative aspect-square box-border caret-transparent shrink-0 w-[30px]">
          <div className="aspect-square box-border caret-transparent h-full w-full">
            <img
              src="https://c.animaapp.com/mkmz8by2SWvy85/assets/icon-1.svg"
              alt="Icon"
              className="box-border caret-transparent h-full w-full"
            />
          </div>
        </div>
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
          <h4 className="text-xl font-semibold box-border caret-transparent tracking-[-0.4px] leading-6 text-nowrap font-geist md:text-2xl md:tracking-[-0.48px] md:leading-[28.8px]">
            Alytics
          </h4>
        </div>
      </div>
      <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start max-w-[340px] break-words w-full">
        <p className="text-zinc-600/80 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] break-words font-geist">
          <mark className="bg-transparent box-border caret-transparent break-words">
            Turn complex data into clear, actionable insights so you can make
            smarter decisions and drive growth with confidence
          </mark>
        </p>
      </div>
    </div>
  );
};
