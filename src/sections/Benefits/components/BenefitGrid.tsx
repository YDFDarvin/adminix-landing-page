import { BenefitCard } from "@/sections/Benefits/components/BenefitCard";

export const BenefitGrid = () => {
  return (
    <div className="relative content-center items-center box-border caret-transparent gap-x-5 flex flex-col shrink-0 h-min justify-center gap-y-5 w-full md:grid md:grid-cols-2 md:gap-5 lg:flex lg:flex-row">
      <div className="box-border caret-transparent contents">
        <div className="relative box-border caret-transparent basis-auto grow-0 shrink-0 w-full lg:basis-0 lg:grow lg:w-px">
          <BenefitCard
            title="Real-Time Tracking"
            description="Monitor user activity instantly for smarter decision-making."
          />
        </div>
      </div>
      <div className="box-border caret-transparent contents">
        <div className="relative box-border caret-transparent basis-auto grow-0 shrink-0 w-full md:basis-0 md:grow md:w-px">
          <BenefitCard
            title="All-in-One View"
            description="Keep all your analytics in one place, without jumping between tools."
          />
        </div>
      </div>
      <div className="box-border caret-transparent contents">
        <div className="relative box-border caret-transparent basis-auto grow-0 shrink-0 w-full md:basis-0 md:grow md:w-px">
          <BenefitCard
            title="Actionable Insights"
            description="Track the metrics that matter most for sustainable business growth."
          />
        </div>
      </div>
    </div>
  );
};
