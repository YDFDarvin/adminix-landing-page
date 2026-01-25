import { SectionHeader } from "@/components/SectionHeader";
import { PricingToggle } from "@/sections/Pricing/components/PricingToggle";

export const Pricing = () => {
  return (
    <section className="relative content-center items-center box-border caret-transparent gap-x-0 flex flex-col shrink-0 h-min justify-center gap-y-0 w-full overflow-hidden py-[60px] md:py-[100px]">
      <div className="relative content-center items-center box-border caret-transparent gap-x-10 flex flex-col shrink-0 h-min justify-start max-w-[390px] gap-y-10 w-full px-4 md:gap-x-14 md:max-w-[1200px] md:gap-y-14 md:px-12">
        <div className="box-border caret-transparent contents">
          <div className="relative box-border caret-transparent shrink-0 w-full">
            <SectionHeader
              label="Our Pricing"
              title="Choose the best Plan that suites you"
              description="Flexible pricing built for every stage — from startup to scale, no hidden fees."
            />
          </div>
        </div>
        <div className="box-border caret-transparent contents">
          <div className="relative box-border caret-transparent shrink-0 w-full">
            <PricingToggle />
          </div>
        </div>
      </div>
    </section>
  );
};
