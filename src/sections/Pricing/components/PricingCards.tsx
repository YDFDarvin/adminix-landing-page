import { PricingCard } from "@/sections/Pricing/components/PricingCard";

export const PricingCards = () => {
  return (
    <div className="relative content-end items-end box-border caret-transparent gap-x-5 flex flex-col shrink-0 h-min justify-center gap-y-5 w-full md:gap-y-0 lg:flex-row">
      <div className="relative box-border caret-transparent basis-auto grow-0 shrink-0 w-full lg:basis-0 lg:grow lg:w-px">
        <div className="relative content-center items-center bg-white shadow-[rgba(0,0,0,0.03)_0px_1px_20px_0px] box-border caret-transparent gap-x-6 flex flex-col h-min justify-center gap-y-6 w-full overflow-hidden rounded-[20px]">
          <PricingCard
            planName="Starter"
            price="$39"
            description="Great for small teams getting started."
            features={[
              "5,000 tracked users",
              "Core analytics",
              "Simple dashboards",
              "Email support",
              "Weekly reports",
            ]}
            buttonUrl="https://framer.com/remix/sYqnVgaJ6jfdOyaORZkY"
          />
        </div>
      </div>
      <div className="relative box-border caret-transparent basis-0 grow shrink-0 w-px">
        <div className="relative content-center items-center bg-blue-600 shadow-[rgba(18,109,251,0.14)_0px_0.796192px_0.557334px_-0.6875px,rgba(18,109,251,0.13)_0px_2.41451px_1.69015px_-1.375px,rgba(18,109,251,0.13)_0px_6.38265px_4.46786px_-2.0625px,rgba(18,109,251,0.11)_0px_20px_14px_-2.75px,rgba(18,109,251,0.17)_0.722625px_0px_0.722625px_-1.16667px,rgba(18,109,251,0.15)_2.74624px_0px_2.74624px_-2.33333px,rgba(18,109,251,0.08)_12px_0px_12px_-3.5px,rgba(18,109,251,0.17)_-0.722625px_0px_0.722625px_-1.16667px,rgba(18,109,251,0.15)_-2.74624px_0px_2.74624px_-2.33333px,rgba(18,109,251,0.08)_-12px_0px_12px_-3.5px] box-border caret-transparent gap-x-2 flex flex-col h-min justify-start gap-y-2 w-full overflow-hidden pt-2 pb-1 px-1 rounded-[20px] after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border after:rounded-[20px] after:border-separate after:border-solid after:border-white/20 after:left-0 after:top-0 after:font-sans_serif">
          <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
            <p className="text-white text-sm font-medium box-border caret-transparent tracking-[-0.28px] leading-[18.2px] text-nowrap font-geist">
              Most Popular
            </p>
          </div>
          <PricingCard
            planName="Growth"
            price="$99"
            description="For fast-growing teams who are scaling."
            features={[
              "Everything in starter",
              "50,000 tracked users",
              "Funnel & drop-off analysis",
              "Custom dashboards",
              "Team collaboration tools",
            ]}
            buttonUrl="https://framer.com/remix/sYqnVgaJ6jfdOyaORZkY"
            variant="bg-white rounded-[18px]"
          />
        </div>
      </div>
      <div className="relative box-border caret-transparent basis-0 grow shrink-0 w-px">
        <div className="relative content-center items-center bg-white shadow-[rgba(0,0,0,0.03)_0px_1px_20px_0px] box-border caret-transparent gap-x-6 flex flex-col h-min justify-center gap-y-6 w-full overflow-hidden rounded-[20px]">
          <PricingCard
            planName="Premium"
            price="$299"
            description="Great for enterprizes to convert more."
            features={[
              "All Growth features",
              "Unlimited tracked users",
              "Dedicated account manager",
              "SLA & compliance support",
              "Advanced integrations",
            ]}
            buttonUrl="https://framer.com/remix/sYqnVgaJ6jfdOyaORZkY"
          />
        </div>
      </div>
    </div>
  );
};
