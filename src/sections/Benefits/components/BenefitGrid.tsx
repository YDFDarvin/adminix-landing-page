import { BenefitCard } from "@/sections/Benefits/components/BenefitCard";
import RocketLaunchRounded from "@mui/icons-material/RocketLaunchRounded";
import AccountTreeRounded from "@mui/icons-material/AccountTreeRounded";
import BrushRounded from "@mui/icons-material/BrushRounded";

export const BenefitGrid = () => {
  return (
    <div className="relative content-center items-stretch box-border caret-transparent gap-x-5 flex flex-col shrink-0 h-min justify-center gap-y-5 w-full md:flex-row md:flex-wrap md:justify-center md:gap-5 lg:flex-nowrap lg:justify-start">
      <div className="box-border caret-transparent contents">
        <div className="relative box-border caret-transparent basis-auto grow-0 shrink-0 w-full md:basis-[calc(50%-10px)] md:grow-0 md:w-auto lg:basis-0 lg:grow lg:w-px">
          <BenefitCard
            icon={<RocketLaunchRounded className="h-9 w-9" />}
            title="Start Faster with Templates"
            description="Use pre-set templates to launch internal tools quickly, without building everything from scratch."
          />
        </div>
      </div>
      <div className="box-border caret-transparent contents">
        <div className="relative box-border caret-transparent basis-auto grow-0 shrink-0 w-full md:basis-[calc(50%-10px)] md:grow-0 md:w-auto lg:basis-0 lg:grow lg:w-px">
          <BenefitCard
            icon={<AccountTreeRounded className="h-9 w-9" />}
            title="AI That Builds a Complete Structure"
            description="AI Assistant helps design data models, workflows and interfaces as one connected system."
          />
        </div>
      </div>
      <div className="box-border caret-transparent contents">
        <div className="relative box-border caret-transparent basis-auto grow-0 shrink-0 w-full md:basis-[calc(50%-10px)] md:grow-0 md:w-auto lg:basis-0 lg:grow lg:w-px">
          <BenefitCard
            icon={<BrushRounded className="h-9 w-9" />}
            title="Customization Without Rework"
            description="Adapt UI, logic and workflows to your processes without rebuilding tools again and again."
          />
        </div>
      </div>
    </div>
  );
};

