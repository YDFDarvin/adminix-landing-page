export type HeroDecorationsProps = {
  variant: string;
  imageUrl: string;
  alt: string;
  imageClassName: string;
  floatClassName?: string;
};

export const HeroDecorations = (props: HeroDecorationsProps) => {
  return (
    <div
      className={`absolute content-center items-center box-border caret-transparent gap-x-2.5 hidden lg:flex shrink-0 h-min justify-center gap-y-2.5 w-min z-[3] ${props.variant}`}
    >
      <div
        className={`relative box-border caret-transparent shrink-0 z-[1] ${props.floatClassName ?? ""}`}
      >
        <div className="box-border caret-transparent contents">
          <div className="relative content-center items-center bg-neutral-100 shadow-[rgb(255,255,255)_0px_0px_0px_6px,rgba(0,0,0,0.05)_0px_0.602187px_0.421531px_-0.916667px,rgba(0,0,0,0.05)_0px_2.28853px_1.60197px_-1.83333px,rgba(0,0,0,0.04)_0px_10px_7px_-2.75px,rgba(0,0,0,0.06)_0px_-0.602187px_0.541969px_-1.08333px,rgba(0,0,0,0.05)_0px_-2.28853px_2.05968px_-2.16667px,rgba(0,0,0,0.03)_0px_-10px_9px_-3.25px,rgba(0,0,0,0.06)_0.602187px_0px_0.541969px_-1.16667px,rgba(0,0,0,0.05)_2.28853px_0px_2.05968px_-2.33333px,rgba(0,0,0,0.03)_10px_0px_9px_-3.5px,rgba(0,0,0,0.06)_-0.602187px_0px_0.602187px_-1.16667px,rgba(0,0,0,0.05)_-2.28853px_0px_2.28853px_-2.33333px,rgba(0,0,0,0.03)_-10px_0px_10px_-3.5px] box-border caret-transparent gap-x-2.5 flex flex-col h-[50px] justify-center gap-y-2.5 w-[50px] overflow-hidden rounded-xl">
            <div className="absolute box-border caret-transparent shrink-0 z-[1] inset-0">
              <div className="absolute box-border caret-transparent inset-0">
                <img
                  src={props.imageUrl}
                  alt={props.alt}
                  className={`box-border caret-transparent h-full object-cover w-full ${props.imageClassName}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
