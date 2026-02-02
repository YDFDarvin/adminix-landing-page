export type SectionHeaderProps = {
  label: string;
  title: string;
  description: string;
};

export const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <div className="relative content-center items-center box-border caret-transparent gap-x-4 flex flex-col h-min justify-center gap-y-4 w-full">
      <div className="relative box-border caret-transparent shrink-0">
        <div className="relative content-center items-center bg-indigo-100 box-border caret-transparent gap-x-1.5 flex h-min justify-center gap-y-1.5 max-w-full overflow-hidden px-3 py-1.5 rounded-[50px] after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border after:border-blue-600 after:rounded-[50px] after:border-separate after:border-solid after:left-0 after:top-0 after:font-sans_serif">
          <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start">
            <p className="text-blue-600 text-sm font-medium box-border caret-transparent tracking-[-0.28px] leading-[18.2px] break-words font-geist">
              {props.label}
            </p>
          </div>
        </div>
      </div>
      <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 h-min justify-center gap-y-2.5 w-full">
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start max-w-[630px] w-full">
          <h2 className="text-[28px] font-semibold box-border caret-transparent tracking-[-0.84px] leading-[30.8px] text-center capitalize font-geist md:text-5xl md:tracking-[-1.44px] md:leading-[52.8px]">
            {props.title}
          </h2>
        </div>
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start max-w-[340px] w-full">
          <p className="text-zinc-600/80 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] text-center font-geist">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};
