import type { ReactNode } from "react";

export type PricingCardProps = {
  planName: string;
  price: ReactNode;
  description: string;
  features: string[];
  variant?: string;
  priceSuffix?: string;
  buttonLabel?: string;
};

export const PricingCard = (props: PricingCardProps) => {
  return (
    <div
      className={`relative content-center items-center box-border caret-transparent gap-x-5 flex flex-col flex-1 shrink-0 h-full justify-center gap-y-5 w-full p-4 ${props.variant || ""}`}
    >
      <div className="relative content-start items-start box-border caret-transparent gap-x-4 flex flex-col shrink-0 h-min justify-center gap-y-4 w-full overflow-hidden">
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
          <h5 className="text-lg font-semibold box-border caret-transparent tracking-[-0.36px] leading-[25.2px] text-nowrap font-geist md:text-xl md:tracking-[-0.4px] md:leading-7">
            {props.planName}
          </h5>
        </div>
        <div className="relative content-start items-start box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 h-min justify-center gap-y-2.5 w-full overflow-hidden">
          <div className="relative content-center items-center box-border caret-transparent gap-x-1 flex shrink-0 h-min justify-center gap-y-1 w-min overflow-hidden">
            <div className="relative box-border caret-transparent shrink-0">
              <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex flex-col h-min justify-center gap-y-2.5 w-min overflow-hidden">
                <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 h-min justify-center gap-y-2.5 w-min">
                  <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
                    <h2 className="text-[28px] font-semibold box-border caret-transparent tracking-[-0.84px] leading-[30.8px] capitalize text-nowrap font-geist md:text-5xl md:tracking-[-1.44px] md:leading-[52.8px]">
                      {props.price}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            {props.priceSuffix !== "" && (
              <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
                <p className="text-zinc-600/80 text-sm font-medium box-border caret-transparent tracking-[-0.28px] leading-[18.2px] text-nowrap font-geist">
                  {props.priceSuffix || "/month"}
                </p>
              </div>
            )}
          </div>
          <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start w-full">
            <p className="text-zinc-600/80 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] font-geist">
              {props.description}
            </p>
          </div>
        </div>
      </div>
      <div
        className={`relative content-start items-start box-border caret-transparent gap-x-4 flex flex-col flex-1 justify-between gap-y-4 w-full ${props.variant === "bg-white rounded-[18px]" ? "order-1" : ""}`}
      >
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
          <p className="text-sm font-medium box-border caret-transparent tracking-[-0.28px] leading-[18.2px] text-nowrap font-geist">
            What&#39;s included
          </p>
        </div>
        <div className="relative content-center items-center box-border caret-transparent gap-x-3 flex flex-col shrink-0 h-min justify-center gap-y-3 w-full">
          {props.features.map((feature, index) => (
            <div
              key={index}
              className="relative box-border caret-transparent shrink-0 w-full"
            >
              <div className="relative content-center items-center box-border caret-transparent gap-x-2 flex h-min justify-start gap-y-2 w-full">
                <div className="relative box-border caret-transparent shrink-0">
                  <div className="relative content-center items-center bg-neutral-100 shadow-[rgb(228,228,228)_0px_0px_0px_1.3px] box-border caret-transparent gap-x-2.5 flex h-3.5 justify-center gap-y-2.5 w-3.5 rounded-[50px]">
                    <div className="relative box-border caret-transparent shrink-0 h-3.5 w-2.5">
                      <div className="box-border caret-transparent contents"></div>
                    </div>
                  </div>
                </div>
                <div className="relative box-border caret-transparent flex basis-0 flex-col grow shrink-0 justify-start break-words w-px">
                  <p className="text-zinc-600/80 text-sm font-medium box-border caret-transparent tracking-[-0.28px] leading-[18.2px] break-words font-geist">
                    {feature}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="relative box-border caret-transparent shrink-0 w-full">
          <button
            type="button"
            disabled
            className={`relative disabled:opacity-50 text-blue-700 content-center items-center bg-blue-600 box-border caret-transparent gap-x-2.5 flex h-min justify-center gap-y-2.5 w-full overflow-hidden px-5 py-2.5 rounded-[10px] after:accent-auto after:box-border after:caret-transparent after:text-blue-700 after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:rounded-[10px] after:border-separate after:border-2 after:border-solid after:border-white/20 after:left-0 after:top-0 after:font-sans_serif ${props.variant === "bg-white rounded-[18px]" ? "shadow-[rgba(18,109,251,0)_0px_0px_0px_0px,rgba(18,109,251,0)_0px_0px_0px_0px,rgba(18,109,251,0)_0px_0px_0px_0px]" : ""}`}
          >
            <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex blur-0 shrink-0 h-min justify-center gap-y-2.5 w-min">
              <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
                <p className="text-white text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] text-nowrap font-geist">
                  {props.buttonLabel || "Get Started"}
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
