export type StepCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  imageClassName: string;
};

export const StepCard = (props: StepCardProps) => {
  return (
    <div className="relative content-center items-center bg-white shadow-[rgba(0,0,0,0.03)_0px_1px_20px_0px] box-border caret-transparent gap-x-0 flex flex-col h-min justify-center gap-y-0 w-full overflow-hidden rounded-[20px]">
      <div className="relative content-center items-center box-border caret-transparent gap-x-2 flex flex-col shrink-0 h-min justify-center gap-y-2 w-full overflow-hidden pt-5 pb-2.5 px-5">
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
          <h4 className="text-xl font-semibold box-border caret-transparent tracking-[-0.4px] leading-6 break-words font-geist md:text-2xl md:tracking-[-0.48px] md:leading-[28.8px]">
            {props.title}
          </h4>
        </div>
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
          <p className="text-zinc-600/80 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] break-words font-geist">
            {props.description}
          </p>
        </div>
      </div>
      <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-[228px] justify-center gap-y-2.5 w-full">
        <div className="absolute box-border caret-transparent shrink-0 z-[1] inset-0">
          <div className="absolute box-border caret-transparent inset-0">
            <img
              src={props.imageUrl}
              alt={props.imageAlt}
              className={`box-border caret-transparent h-full object-cover w-full ${props.imageClassName}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
