import type { ReactNode } from "react";

export type FeatureCardProps = {
  imageUrl?: string;
  imageAlt?: string;
  imageClassName?: string;
  visual?: ReactNode;
  title: string;
  description: string;
};

export const FeatureCard = (props: FeatureCardProps) => {
  return (
    <div className="relative content-center items-center bg-white shadow-[rgba(0,0,0,0.03)_0px_1px_20px_0px] box-border caret-transparent gap-x-5 flex flex-col h-min justify-start gap-y-5 w-full pt-4 pb-6 px-4 rounded-[20px]">
      <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-[280px] justify-center gap-y-2.5 w-full overflow-hidden rounded-[10px] after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border after:border-neutral-200 after:rounded-[10px] after:border-separate after:border-solid after:left-0 after:top-0 after:font-sans_serif">
        {props.visual ? (
          <div className="absolute inset-0 box-border caret-transparent shrink-0 z-[1] overflow-hidden">
            {props.visual}
          </div>
        ) : (
          <div className="absolute box-border caret-transparent shrink-0 z-[1] overflow-hidden inset-0">
            <div className="absolute box-border caret-transparent inset-0">
              <img
                src={props.imageUrl}
                alt={props.imageAlt}
                className={`box-border caret-transparent h-full object-cover w-full ${props.imageClassName ?? ""}`}
              />
            </div>
          </div>
        )}
      </div>
      <div className="relative content-start items-start box-border caret-transparent gap-x-2 flex flex-col shrink-0 h-min justify-start gap-y-2 w-full overflow-hidden px-2">
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
          <h4 className="text-xl font-semibold box-border caret-transparent tracking-[-0.4px] leading-6 break-words font-geist md:text-2xl md:tracking-[-0.48px] md:leading-[28.8px]">
            {props.title}
          </h4>
        </div>
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start max-w-[400px] w-full">
          <p className="text-zinc-600/80 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] font-geist">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};
