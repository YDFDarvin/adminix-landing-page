import { SectionHeader } from "@/components/SectionHeader";
import { BenefitCard } from "@/sections/Benefits/components/BenefitCard";
import RocketLaunchRounded from "@mui/icons-material/RocketLaunchRounded";
import AccountTreeRounded from "@mui/icons-material/AccountTreeRounded";
import BrushRounded from "@mui/icons-material/BrushRounded";
import CloudRounded from "@mui/icons-material/CloudRounded";
import TrendingUpRounded from "@mui/icons-material/TrendingUpRounded";
import AttachMoneyRounded from "@mui/icons-material/AttachMoneyRounded";

export const Benefits = () => {
  return (
    <section
      id="benefits"
      data-reveal
      className="reveal relative content-center items-center box-border caret-transparent gap-x-0 flex flex-col shrink-0 h-min justify-center gap-y-0 w-full overflow-hidden py-[60px] md:py-[100px]"
    >
      <div className="relative content-center items-center box-border caret-transparent gap-x-10 flex flex-col shrink-0 h-min justify-start max-w-[390px] gap-y-10 w-full px-4 md:gap-x-14 md:max-w-[1200px] md:gap-y-14 md:px-12">
        <div className="box-border caret-transparent contents">
          <div className="relative box-border caret-transparent shrink-0 w-full">
            <SectionHeader
              label="Benefits"
              title="Benefits That Truly Matter to Your Team"
              description="Develop faster, stay flexible and get internal software that you can rely on in production."
            />
          </div>
        </div>
        <div className="relative content-center items-stretch box-border caret-transparent gap-x-5 flex flex-col shrink-0 h-min justify-center gap-y-5 w-full">
          <div className="relative content-center items-stretch box-border caret-transparent gap-x-5 flex flex-col shrink-0 h-min justify-center gap-y-5 w-full md:flex-row md:flex-wrap md:justify-center md:gap-5 lg:justify-start">
            <div className="box-border caret-transparent contents">
              <div className="relative box-border caret-transparent basis-auto grow-0 shrink-0 w-full md:basis-[calc(50%-10px)] md:grow-0 md:w-auto lg:basis-[calc(33.333%-13.34px)] lg:grow-0 lg:w-auto">
                <BenefitCard
                  icon={<RocketLaunchRounded className="h-9 w-9" />}
                  title="Start Faster with Templates"
                  description="Use pre-set templates to launch internal tools quickly, without building everything from scratch."
                />
              </div>
            </div>
            <div className="box-border caret-transparent contents">
              <div className="relative box-border caret-transparent basis-auto grow-0 shrink-0 w-full md:basis-[calc(50%-10px)] md:grow-0 md:w-auto lg:basis-[calc(33.333%-13.34px)] lg:grow-0 lg:w-auto">
                <BenefitCard
                  icon={<AccountTreeRounded className="h-9 w-9" />}
                  title="AI That Builds a Complete Structure"
                  description="AI Assistant helps design data models, workflows and interfaces as one connected system."
                />
              </div>
            </div>
            <div className="box-border caret-transparent contents">
              <div className="relative box-border caret-transparent basis-auto grow-0 shrink-0 w-full md:basis-[calc(50%-10px)] md:grow-0 md:w-auto lg:basis-[calc(33.333%-13.34px)] lg:grow-0 lg:w-auto">
                <BenefitCard
                  icon={<BrushRounded className="h-9 w-9" />}
                  title="Customization Without Rework"
                  description="Adapt UI, logic and workflows to your processes without rebuilding tools again and again."
                />
              </div>
            </div>
            <div className="box-border caret-transparent contents">
              <div className="relative box-border caret-transparent basis-auto grow-0 shrink-0 w-full md:basis-[calc(50%-10px)] md:grow-0 md:w-auto lg:basis-[calc(33.333%-13.34px)] lg:grow-0 lg:w-auto">
                <BenefitCard
                  icon={<CloudRounded className="h-9 w-9" />}
                  title="Production-Ready by Design"
                  description="Build internal tools meant for real usage, with structure, permissions and long-term stability."
                />
              </div>
            </div>
            <div className="box-border caret-transparent contents">
              <div className="relative box-border caret-transparent basis-auto grow-0 shrink-0 w-full md:basis-[calc(50%-10px)] md:grow-0 md:w-auto lg:basis-[calc(33.333%-13.34px)] lg:grow-0 lg:w-auto">
                <BenefitCard
                  icon={<TrendingUpRounded className="h-9 w-9" />}
                  title="Scales with Your Business"
                  description="Grow and evolve your internal systems as operations become more complex - without platform limitations."
                />
              </div>
            </div>
            <div className="box-border caret-transparent contents">
              <div className="relative box-border caret-transparent basis-auto grow-0 shrink-0 w-full md:basis-[calc(50%-10px)] md:grow-0 md:w-auto lg:basis-[calc(33.333%-13.34px)] lg:grow-0 lg:w-auto">
                <BenefitCard
                  icon={<AttachMoneyRounded className="h-9 w-9" />}
                  title="Lower Long-Term Costs"
                  description="Reduce ongoing development and maintenance costs by building tools that last."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

