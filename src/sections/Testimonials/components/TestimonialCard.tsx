export type TestimonialCardProps = {
  testimonialText: string;
  quoteIconUrl: string;
  avatarUrl: string;
  avatarVariant: string;
  authorName: string;
  companyLogoUrl: string;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
  return (
    <div className="relative content-start items-start bg-white shadow-[rgba(0,0,0,0.03)_0px_1px_20px_0px] box-border caret-transparent flex flex-col h-[342px] justify-between w-full rounded-[20px]">
      <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-full overflow-hidden p-6">
        <div className="relative box-border caret-transparent flex basis-0 flex-col grow shrink-0 justify-start break-words w-px">
          <p className="text-zinc-600/80 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] break-words font-geist">
            {props.testimonialText}
          </p>
        </div>
        <div className="absolute box-border caret-transparent shrink-0 h-4 w-[22px] z-[1] overflow-hidden -scale-100 left-6 top-6">
          <div className="absolute box-border caret-transparent inset-0">
            <img
              src={props.quoteIconUrl}
              alt=""
              className="aspect-[auto_23_/_17] box-border caret-transparent h-full object-cover w-full"
            />
          </div>
        </div>
      </div>
      <div className="relative content-start items-start box-border caret-transparent gap-x-0 flex flex-col shrink-0 h-min justify-start gap-y-0 w-full p-6 after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-none after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border-neutral-200 after:border-separate after:border-t after:border-solid after:left-0 after:top-0 after:font-sans_serif">
        <div className="relative content-center items-center box-border caret-transparent gap-x-3 flex shrink-0 h-min justify-start gap-y-3 w-full">
          <div className="relative aspect-square box-border caret-transparent shrink-0 w-[50px] rounded-xl">
            <div className="absolute box-border caret-transparent rounded-xl inset-0">
              <img
                src={props.avatarUrl}
                alt=""
                className={`box-border caret-transparent h-full object-cover w-full rounded-xl ${props.avatarVariant}`}
              />
            </div>
          </div>
          <div className="relative content-start items-start box-border caret-transparent gap-x-1 flex basis-0 flex-col grow shrink-0 h-min justify-center gap-y-1 w-px">
            <div className="relative content-start items-start box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-start gap-y-2.5 w-full">
              <div className="relative box-border caret-transparent flex basis-0 flex-col grow shrink-0 justify-start break-words w-px">
                <h5 className="text-lg font-semibold box-border caret-transparent tracking-[-0.36px] leading-[25.2px] break-words font-geist md:text-xl md:tracking-[-0.4px] md:leading-7">
                  {props.authorName}
                </h5>
              </div>
            </div>
            <div className="relative box-border caret-transparent shrink-0 h-[18px] w-[98px] overflow-hidden">
              <div className="absolute box-border caret-transparent inset-0">
                <img
                  src={props.companyLogoUrl}
                  alt=""
                  className="aspect-[auto_99_/_19] box-border caret-transparent h-full object-cover w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
