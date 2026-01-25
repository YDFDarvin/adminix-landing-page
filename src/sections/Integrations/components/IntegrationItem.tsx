export type IntegrationItemProps = {
  logoUrl: string;
  logoAlt: string;
  name: string;
  imageVariant: string;
};

export const IntegrationItem = (props: IntegrationItemProps) => {
  return (
    <div className="relative content-center items-center bg-white shadow-[rgba(0,0,0,0.01)_0px_0.602187px_0.421531px_-0.916667px,rgba(0,0,0,0.01)_0px_2.28853px_1.60197px_-1.83333px,rgba(0,0,0,0.01)_0px_10px_7px_-2.75px,rgba(0,0,0,0.01)_0px_-0.602187px_0.421531px_-0.916667px,rgba(0,0,0,0.01)_0px_-2.28853px_1.60197px_-1.83333px,rgba(0,0,0,0.01)_0px_-10px_7px_-2.75px,rgba(0,0,0,0.01)_0.602187px_0px_0.602187px_-1.16667px,rgba(0,0,0,0.01)_2.28853px_0px_2.28853px_-2.33333px,rgba(0,0,0,0.01)_10px_0px_10px_-3.5px,rgba(0,0,0,0.01)_-0.602187px_0px_0.602187px_-1.16667px,rgba(0,0,0,0.01)_-2.28853px_0px_2.28853px_-2.33333px,rgba(0,0,0,0.01)_-10px_0px_10px_-3.5px] box-border caret-transparent gap-x-2 flex h-min justify-center gap-y-2 w-min overflow-hidden p-2 rounded-xl">
      <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-min overflow-hidden">
        <div className="relative aspect-square box-border caret-transparent shrink-0 w-[45px] overflow-hidden rounded-lg">
          <div className="absolute box-border caret-transparent rounded-lg inset-0">
            <img
              src={props.logoUrl}
              alt={props.logoAlt}
              className={`box-border caret-transparent h-full object-cover w-full rounded-lg ${props.imageVariant}`}
            />
          </div>
        </div>
      </div>
      <div className="relative content-start items-start box-border caret-transparent gap-x-1.5 flex flex-col shrink-0 h-min justify-center gap-y-1.5 w-[173px]">
        <div className="relative content-center items-center box-border caret-transparent gap-x-1.5 flex shrink-0 h-min justify-center gap-y-1.5 w-min">
          <div className="relative box-border caret-transparent shrink-0">
            <div className="relative content-center items-center bg-blue-600 shadow-[rgb(225,234,248)_0px_0px_0px_1px] box-border caret-transparent gap-x-2.5 flex h-3.5 justify-center gap-y-2.5 w-3.5 rounded-[50px]">
              <div className="relative box-border caret-transparent shrink-0 h-3.5 w-2.5">
                <div className="box-border caret-transparent contents"></div>
              </div>
            </div>
          </div>
          <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
            <p className="text-sm font-medium box-border caret-transparent tracking-[-0.28px] leading-[18.2px] text-nowrap font-geist">
              {props.name}
            </p>
          </div>
        </div>
        <div className="relative content-start items-start box-border caret-transparent gap-x-1 flex flex-col shrink-0 h-min justify-center gap-y-1 w-full">
          <div className="relative bg-indigo-100 box-border caret-transparent shrink-0 h-[7px] w-full overflow-hidden rounded-[10px]"></div>
          <div className="relative bg-indigo-100 box-border caret-transparent shrink-0 h-[7px] w-[122px] overflow-hidden rounded-[10px]"></div>
        </div>
      </div>
    </div>
  );
};
