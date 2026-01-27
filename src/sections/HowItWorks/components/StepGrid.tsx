import { StepCard } from "@/sections/HowItWorks/components/StepCard";

export const StepGrid = () => {
  return (
    <div className="relative box-border caret-transparent gap-x-5 grid shrink-0 auto-rows-[minmax(0px,1fr)] grid-cols-[repeat(1,minmax(50px,1fr))] grid-rows-[repeat(1,minmax(0px,1fr))] h-min justify-end gap-y-5 w-full md:grid-cols-[repeat(2,minmax(50px,1fr))] lg:grid-cols-[repeat(3,minmax(50px,1fr))] lg:justify-center">
      <div className="box-border caret-transparent contents">
        <div className="relative self-start box-border caret-transparent shrink-0 justify-self-start w-full">
          <StepCard
            title="Define What You Want to Build"
            description="Begin with an AI assistant or choose a pre-set template to define your internal tool."
            media="chat"
          />
        </div>
      </div>
      <div className="box-border caret-transparent contents">
        <div className="relative self-start box-border caret-transparent shrink-0 justify-self-start w-full">
          <StepCard
            title="Review Your Software"
            description="Review the generated data model, workflows and interface as a complete internal system."
            media="review"
          />
        </div>
      </div>
      <div className="box-border caret-transparent contents">
        <div className="relative self-start box-border caret-transparent shrink-0 justify-self-start w-full">
          <StepCard
            title="Customize and Launch"
            description="Adjust interfaces and logic to your business needs, then deploy a scalable, production-ready internal system."
            media="launch"
          />
        </div>
      </div>
    </div>
  );
};
