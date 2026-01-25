export type BenefitCardProps = {
  title: string;
  description: string;
};

export const BenefitCard = (props: BenefitCardProps) => {
  return (
    <div className="relative content-start items-start bg-white shadow-[rgba(0,0,0,0.03)_0px_1px_20px_0px] box-border caret-transparent gap-x-10 flex flex-col h-min justify-start gap-y-10 w-full overflow-hidden pt-5 pb-6 px-5 rounded-[20px]">
      <div className="relative content-center items-center bg-indigo-100 shadow-[rgba(18,109,251,0.15)_0px_0.602187px_0.602187px_-1px,rgba(18,109,251,0.14)_0px_2.28853px_2.28853px_-2px,rgba(18,109,251,0.1)_0px_10px_10px_-3px] box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-min overflow-hidden p-1.5 rounded-md after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border after:rounded-md after:border-separate after:border-solid after:border-white/20 after:left-0 after:top-0 after:font-sans_serif">
        <div className="relative box-border caret-transparent shrink-0 h-7 w-7">
          <div className="box-border caret-transparent contents"></div>
        </div>
      </div>
      <div className="relative content-start items-start box-border caret-transparent gap-x-2 flex flex-col shrink-0 h-min justify-center gap-y-2 w-full overflow-hidden">
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start w-full">
          <h5 className="text-lg font-semibold box-border caret-transparent tracking-[-0.36px] leading-[25.2px] font-geist md:text-xl md:tracking-[-0.4px] md:leading-7">
            {props.title}
          </h5>
        </div>
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start w-full">
          <p className="text-zinc-600/80 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] font-geist">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};
