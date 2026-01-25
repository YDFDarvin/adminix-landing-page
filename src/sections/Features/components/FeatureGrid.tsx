import { FeatureCard } from "@/sections/Features/components/FeatureCard";

export const FeatureGrid = () => {
  return (
    <div className="relative content-center items-center box-border caret-transparent gap-x-5 flex flex-col shrink-0 h-min justify-center gap-y-5 w-full lg:flex-row">
      <div className="box-border caret-transparent contents">
        <div className="relative box-border caret-transparent basis-auto grow-0 shrink-0 w-full lg:basis-0 lg:grow lg:w-px">
          <FeatureCard
            imageUrl="https://framerusercontent.com/images/UasGKBRyLZHeUJr1HL5mRgukJU.png?width=4000&height=2216"
            imageAlt="Dashboard showing MRR of $69,897 and 1206 active users with an upward trend graph."
            imageClassName="aspect-[auto_4000_/_2216]"
            title="Unified Metrics"
            description="See your MRR and active users in one clean, unified view — no more switching tabs."
          />
        </div>
      </div>
      <div className="box-border caret-transparent contents">
        <div className="relative box-border caret-transparent basis-auto grow-0 shrink-0 w-full md:basis-0 md:grow md:w-px">
          <FeatureCard
            imageUrl="https://framerusercontent.com/images/eUVqpWJ3R7uJaOJnHDYhRMM4WPE.png?width=4000&height=2216"
            imageAlt="AI suggesting actions like 'Optimize onboarding flow' and 'Raise pricing tier' based on user data."
            imageClassName="aspect-[auto_4000_/_2216]"
            title="AI Growth Insights"
            description="Actionable suggestions from your data, without digging into spreadsheets or dashboards."
          />
        </div>
      </div>
    </div>
  );
};
