import { StepCard } from "@/sections/HowItWorks/components/StepCard";

export const StepGrid = () => {
  return (
    <div className="relative box-border caret-transparent gap-x-5 grid shrink-0 auto-rows-[minmax(0px,1fr)] grid-cols-[repeat(1,minmax(50px,1fr))] grid-rows-[repeat(1,minmax(0px,1fr))] h-min justify-end gap-y-5 w-full md:grid-cols-[repeat(2,minmax(50px,1fr))] lg:grid-cols-[repeat(3,minmax(50px,1fr))] lg:justify-center">
      <div className="box-border caret-transparent contents">
        <div className="relative self-start box-border caret-transparent shrink-0 justify-self-start w-full">
          <StepCard
            title="Define What You Want to Build"
            description="Begin with an AI assistant or choose a pre-set template to define your internal tool."
            imageUrl="https://framerusercontent.com/images/eZxPRr9DFJ1LBw2C6XgbmteUwk.png?width=6000&height=3673"
            imageAlt="Logos of tools outward, illustrating easy integration with no engineering required."
            imageClassName="aspect-[auto_6000_/_3673]"
          />
        </div>
      </div>
      <div className="box-border caret-transparent contents">
        <div className="relative self-start box-border caret-transparent shrink-0 justify-self-start w-full">
          <StepCard
            title="Review Your Software"
            description="Review the generated data model, workflows and interface as a complete internal system."
            imageUrl="https://framerusercontent.com/images/MTi16xQQXh1uLFK6rlUiLRrhNc4.png?width=6000&height=3528"
            imageAlt="Gauge showing levels of user engagement, with tags for high and low engagement percentages."
            imageClassName="aspect-[auto_6000_/_3528]"
          />
        </div>
      </div>
      <div className="box-border caret-transparent contents">
        <div className="relative self-start box-border caret-transparent shrink-0 justify-self-start w-full">
          <StepCard
            title="Customize and Launch"
            description="Adjust interfaces and logic to your business needs, then deploy a scalable, production-ready internal system."
            imageUrl="https://framerusercontent.com/images/WVfMImGvfZB1ZvVOi4f8QpGgcQ.png?width=6000&height=3615"
            imageAlt="Envelope containing recommendations like “Fix churn spike” and “Action,” symbolizing actionable insights."
            imageClassName="aspect-[auto_6000_/_3615]"
          />
        </div>
      </div>
    </div>
  );
};
