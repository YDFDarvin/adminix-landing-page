import { AIAssistantMock } from "@/sections/Features/components/AIAssistantMock";
import { FeatureCard } from "@/sections/Features/components/FeatureCard";

export const FeatureGrid = () => {
  return (
    <div className="relative content-center items-stretch box-border caret-transparent gap-x-5 flex flex-col shrink-0 h-min justify-center gap-y-5 w-full md:flex-row md:flex-wrap md:justify-center md:gap-5 lg:justify-start">
      <div className="box-border caret-transparent contents">
        <div className="relative box-border caret-transparent basis-auto grow-0 shrink-0 w-full md:basis-[calc(50%-10px)] md:grow-0 md:w-auto lg:basis-0 lg:grow lg:w-px">
          <FeatureCard
            visual={<AIAssistantMock />}
            title="AI-Assisted Software Creation"
            description="Use AI to design complete internal software - from data structure to workflows and UI - based on your business needs."
          />
        </div>
      </div>
      <div className="box-border caret-transparent contents">
        <div className="relative box-border caret-transparent basis-auto grow-0 shrink-0 w-full md:basis-[calc(50%-10px)] md:grow-0 md:w-auto lg:basis-0 lg:grow lg:w-px">
          <FeatureCard
            imageUrl="https://framerusercontent.com/images/eUVqpWJ3R7uJaOJnHDYhRMM4WPE.png?width=4000&height=2216"
            imageAlt="AI suggesting actions like 'Optimize onboarding flow' and 'Raise pricing tier' based on user data."
            imageClassName="aspect-[auto_4000_/_2216]"
            title="Data Management"
            description="Create structured data models, permissions and business rules that power your internal systems."
          />
        </div>
      </div>
    </div>
  );
};
