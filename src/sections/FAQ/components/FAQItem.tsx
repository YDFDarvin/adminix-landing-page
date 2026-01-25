export type FAQItemProps = {
  question: string;
  answer?: string;
  isExpanded?: boolean;
  containerVariant?: string;
  iconVariant?: string;
};

export const FAQItem = (props: FAQItemProps) => {
  const containerClass =
    props.containerVariant ||
    "relative box-border caret-transparent w-full shrink-0";
  const iconClass =
    props.iconVariant ||
    "relative content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-[30px] justify-center gap-y-2.5 w-[30px] overflow-hidden";
  const iconLine1Class = props.isExpanded
    ? "absolute bg-black box-border caret-transparent shrink-0 h-3.5 left-[calc(53.3333%_-_1px)] top-[calc(50%_-_7px)] -rotate-90 w-0.5 z-[1] overflow-hidden"
    : "absolute bg-black box-border caret-transparent shrink-0 h-3.5 left-[calc(53.3333%_-_1px)] top-[calc(50%_-_7px)] w-0.5 z-[1] overflow-hidden";
  const iconLine2Class = props.isExpanded
    ? "absolute bg-black box-border caret-transparent shrink-0 h-3.5 left-[calc(53.3333%_-_1px)] top-[calc(50%_-_7px)] -rotate-90 w-0.5 z-[1] overflow-hidden"
    : "absolute bg-black box-border caret-transparent shrink-0 h-3.5 left-[calc(53.3333%_-_1px)] top-[calc(50%_-_7px)] rotate-90 w-0.5 z-[1] overflow-hidden";

  return (
    <div className={containerClass}>
      <div className="relative content-center items-center box-border caret-transparent flex h-min justify-start w-full overflow-hidden bg-white shadow-[rgba(0,0,0,0.03)_0px_1px_20px_0px] gap-x-0 flex-col gap-y-0 rounded-2xl">
        <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-start gap-y-2.5 w-full overflow-hidden p-4">
          <div className="relative box-border caret-transparent flex basis-0 flex-col grow shrink-0 justify-start break-words w-px">
            <h6 className="text-lg font-medium box-border caret-transparent tracking-[-0.36px] leading-[25.2px] break-words font-geist">
              {props.question}
            </h6>
          </div>
          <div
            className={
              props.isExpanded
                ? "relative content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-[30px] justify-center order-1 gap-y-2.5 w-[30px] overflow-hidden"
                : iconClass
            }
          >
            <div className={iconLine1Class}></div>
            <div className={iconLine2Class}></div>
          </div>
        </div>
        {props.isExpanded && props.answer && (
          <>
            <div className="relative bg-neutral-200 box-border caret-transparent shrink-0 h-px w-full overflow-hidden"></div>
            <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-start gap-y-2.5 w-full overflow-hidden p-4">
              <div className="relative box-border caret-transparent flex basis-0 flex-col grow shrink-0 justify-start w-px">
                <p className="text-zinc-600/80 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] font-geist">
                  {props.answer}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
