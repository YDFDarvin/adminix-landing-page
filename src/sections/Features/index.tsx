import { SectionHeader } from "@/components/SectionHeader";
import { FeatureGrid } from "@/sections/Features/components/FeatureGrid";

export const Features = () => {
  return (
    <section
      id="features"
      data-reveal
      className="reveal relative content-center items-center box-border caret-transparent gap-x-0 flex flex-col shrink-0 h-min justify-center gap-y-0 w-full overflow-hidden py-[60px] md:py-[100px]"
    >
      <div className="relative content-center items-center box-border caret-transparent gap-x-10 flex flex-col shrink-0 h-min justify-start max-w-[390px] gap-y-10 w-full px-4 md:gap-x-14 md:max-w-[1200px] md:gap-y-14 md:px-12">
        <div className="box-border caret-transparent contents">
          <div className="relative box-border caret-transparent shrink-0 w-full">
            <SectionHeader
              label="Our Features"
              title="Get a Complete Internal Software Out of the Box"
              description="Design, automate and manage internal business software from one AI-powered platform - no technical skills required"
            />
          </div>
        </div>
        <div className="relative content-center items-center box-border caret-transparent gap-x-5 flex flex-col shrink-0 h-min justify-center gap-y-5 w-full">
          <FeatureGrid />
          <div className="relative content-center items-center box-border caret-transparent gap-x-5 flex flex-col shrink-0 h-min justify-center gap-y-5 w-full md:grid md:grid-cols-2 md:gap-5 lg:flex lg:flex-row">
            <div className="box-border caret-transparent contents">
              <div className="relative box-border caret-transparent basis-auto grow-0 shrink-0 w-full md:basis-0 md:grow md:w-px">
                <div className="relative content-center items-center bg-white shadow-[rgba(0,0,0,0.03)_0px_1px_20px_0px] box-border caret-transparent gap-x-5 flex flex-col h-min justify-start gap-y-5 w-full pt-4 pb-6 px-4 rounded-[20px]">
                  <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-[280px] justify-center gap-y-2.5 w-full overflow-hidden rounded-[10px] after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border after:border-neutral-200 after:rounded-[10px] after:border-separate after:border-solid after:left-0 after:top-0 after:font-sans_serif">
                    <div className="absolute box-border caret-transparent shrink-0 z-[1] overflow-hidden inset-0">
                      <div className="absolute box-border caret-transparent inset-0">
                        <img
                          src="https://framerusercontent.com/images/HCkEwVWHcO0voDYrtskCSdReI.png?width=4000&height=2216"
                          alt="Integration performance stats for Nuvio, Klyra, and Veltix with percentage changes."
                          className="aspect-[auto_4000_/_2216] box-border caret-transparent h-full object-cover w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative content-start items-start box-border caret-transparent gap-x-2 flex flex-col shrink-0 h-min justify-start gap-y-2 w-full overflow-hidden px-2">
                    <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
                      <h4 className="text-xl font-semibold box-border caret-transparent tracking-[-0.4px] leading-6 break-words font-geist md:text-2xl md:tracking-[-0.48px] md:leading-[28.8px]">
                        Visual UI Builder
                      </h4>
                    </div>
                    <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start max-w-[400px] w-full">
                      <p className="text-zinc-600/80 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] font-geist">
                        Design custom admin interfaces to manage data, users and operations in one unified workspace.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent contents">
              <div className="relative box-border caret-transparent basis-auto grow-0 shrink-0 w-full md:basis-0 md:grow md:w-px">
                <div className="relative content-center items-center bg-white shadow-[rgba(0,0,0,0.03)_0px_1px_20px_0px] box-border caret-transparent gap-x-5 flex flex-col h-min justify-start gap-y-5 w-full pt-4 pb-6 px-4 rounded-[20px]">
                  <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-[280px] justify-center gap-y-2.5 w-full overflow-hidden rounded-[10px] after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border after:border-neutral-200 after:rounded-[10px] after:border-separate after:border-solid after:left-0 after:top-0 after:font-sans_serif">
                    <div className="absolute box-border caret-transparent shrink-0 z-[1] overflow-hidden inset-0">
                      <div className="absolute box-border caret-transparent inset-0">
                        <img
                          src="https://framerusercontent.com/images/ukxSF4evyjJNRAA1AxD2RgCC4ds.png?width=6000&height=3325"
                          alt="Retention graph with user return notifications for analyzing feature effectiveness."
                          className="aspect-[auto_6000_/_3325] box-border caret-transparent h-full object-cover w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative content-start items-start box-border caret-transparent gap-x-2 flex flex-col shrink-0 h-min justify-start gap-y-2 w-full overflow-hidden px-2">
                    <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
                      <h4 className="text-xl font-semibold box-border caret-transparent tracking-[-0.4px] leading-6 break-words font-geist md:text-2xl md:tracking-[-0.48px] md:leading-[28.8px]">
                        Workflow Automation
                      </h4>
                    </div>
                    <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start max-w-[400px] w-full">
                      <p className="text-zinc-600/80 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] font-geist">
                        Design and automate business processes with visual workflows that connect actions, data and external services.
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

