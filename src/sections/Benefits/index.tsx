import { SectionHeader } from "@/components/SectionHeader";
import { BenefitGrid } from "@/sections/Benefits/components/BenefitGrid";

export const Benefits = () => {
  return (
    <section className="relative content-center items-center box-border caret-transparent gap-x-0 flex flex-col shrink-0 h-min justify-center gap-y-0 w-full overflow-hidden py-[60px] md:py-[100px]">
      <div className="relative content-center items-center box-border caret-transparent gap-x-10 flex flex-col shrink-0 h-min justify-start max-w-[390px] gap-y-10 w-full px-4 md:gap-x-14 md:max-w-[1200px] md:gap-y-14 md:px-12">
        <div className="box-border caret-transparent contents">
          <div className="relative box-border caret-transparent shrink-0 w-full">
            <SectionHeader
              label="Benefits"
              title="Benefits That Truly Matter to You"
              description="Monitor metrics as they happen, so you can respond quickly and keep your goals on track."
            />
          </div>
        </div>
        <div className="relative content-center items-center box-border caret-transparent gap-x-5 flex flex-col shrink-0 h-min justify-center gap-y-5 w-full">
          <BenefitGrid />
          <div className="relative content-center items-center box-border caret-transparent gap-x-5 flex flex-col shrink-0 h-min justify-center gap-y-5 w-full md:grid md:grid-cols-2 md:gap-5 lg:flex lg:flex-row">
            <div className="box-border caret-transparent contents">
              <div className="relative box-border caret-transparent basis-auto grow-0 shrink-0 w-full md:basis-0 md:grow md:w-px">
                <div className="relative content-start items-start bg-white shadow-[rgba(0,0,0,0.03)_0px_1px_20px_0px] box-border caret-transparent gap-x-10 flex flex-col h-min justify-start gap-y-10 w-full overflow-hidden pt-5 pb-6 px-5 rounded-[20px]">
                  <div className="relative content-center items-center bg-indigo-100 shadow-[rgba(18,109,251,0.15)_0px_0.602187px_0.602187px_-1px,rgba(18,109,251,0.14)_0px_2.28853px_2.28853px_-2px,rgba(18,109,251,0.1)_0px_10px_10px_-3px] box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-min overflow-hidden p-1.5 rounded-md after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border after:rounded-md after:border-separate after:border-solid after:border-white/20 after:left-0 after:top-0 after:font-sans_serif">
                    <div className="relative box-border caret-transparent shrink-0 h-7 w-7">
                      <div className="box-border caret-transparent contents"></div>
                    </div>
                  </div>
                  <div className="relative content-start items-start box-border caret-transparent gap-x-2 flex flex-col shrink-0 h-min justify-center gap-y-2 w-full overflow-hidden">
                    <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start w-full">
                      <h5 className="text-lg font-semibold box-border caret-transparent tracking-[-0.36px] leading-[25.2px] font-geist md:text-xl md:tracking-[-0.4px] md:leading-7">
                        Secure Data
                      </h5>
                    </div>
                    <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start w-full">
                      <p className="text-zinc-600/80 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] font-geist">
                        Keep your analytics safe with advanced security and
                        strong encryption.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent contents">
              <div className="relative box-border caret-transparent basis-auto grow-0 shrink-0 w-full md:basis-0 md:grow md:w-px">
                <div className="relative content-start items-start bg-white shadow-[rgba(0,0,0,0.03)_0px_1px_20px_0px] box-border caret-transparent gap-x-10 flex flex-col h-min justify-start gap-y-10 w-full overflow-hidden pt-5 pb-6 px-5 rounded-[20px]">
                  <div className="relative content-center items-center bg-indigo-100 shadow-[rgba(18,109,251,0.15)_0px_0.602187px_0.602187px_-1px,rgba(18,109,251,0.14)_0px_2.28853px_2.28853px_-2px,rgba(18,109,251,0.1)_0px_10px_10px_-3px] box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-min overflow-hidden p-1.5 rounded-md after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border after:rounded-md after:border-separate after:border-solid after:border-white/20 after:left-0 after:top-0 after:font-sans_serif">
                    <div className="relative box-border caret-transparent shrink-0 h-7 w-7">
                      <div className="box-border caret-transparent contents"></div>
                    </div>
                  </div>
                  <div className="relative content-start items-start box-border caret-transparent gap-x-2 flex flex-col shrink-0 h-min justify-center gap-y-2 w-full overflow-hidden">
                    <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start w-full">
                      <h5 className="text-lg font-semibold box-border caret-transparent tracking-[-0.36px] leading-[25.2px] font-geist md:text-xl md:tracking-[-0.4px] md:leading-7">
                        Custom Reports
                      </h5>
                    </div>
                    <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start w-full">
                      <p className="text-zinc-600/80 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] font-geist">
                        Create tailored reports that fit your needs and
                        highlight key insights.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent contents">
              <div className="relative box-border caret-transparent basis-auto grow-0 shrink-0 w-full md:basis-0 md:grow md:w-px">
                <div className="relative content-start items-start bg-white shadow-[rgba(0,0,0,0.03)_0px_1px_20px_0px] box-border caret-transparent gap-x-10 flex flex-col h-min justify-start gap-y-10 w-full overflow-hidden pt-5 pb-6 px-5 rounded-[20px]">
                  <div className="relative content-center items-center bg-indigo-100 shadow-[rgba(18,109,251,0.15)_0px_0.602187px_0.602187px_-1px,rgba(18,109,251,0.14)_0px_2.28853px_2.28853px_-2px,rgba(18,109,251,0.1)_0px_10px_10px_-3px] box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-min overflow-hidden p-1.5 rounded-md after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border after:rounded-md after:border-separate after:border-solid after:border-white/20 after:left-0 after:top-0 after:font-sans_serif">
                    <div className="relative box-border caret-transparent shrink-0 h-7 w-7">
                      <div className="box-border caret-transparent contents"></div>
                    </div>
                  </div>
                  <div className="relative content-start items-start box-border caret-transparent gap-x-2 flex flex-col shrink-0 h-min justify-center gap-y-2 w-full overflow-hidden">
                    <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start w-full">
                      <h5 className="text-lg font-semibold box-border caret-transparent tracking-[-0.36px] leading-[25.2px] font-geist md:text-xl md:tracking-[-0.4px] md:leading-7">
                        Simple to Use
                      </h5>
                    </div>
                    <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start w-full">
                      <p className="text-zinc-600/80 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] font-geist">
                        Navigate easily—no steep learning curve, start making
                        better decisions quickly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
