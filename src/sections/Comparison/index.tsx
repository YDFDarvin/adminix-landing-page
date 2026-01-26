import { SectionHeader } from "@/components/SectionHeader";
import { ComparisonTable } from "@/sections/Comparison/components/ComparisonTable";

export const Comparison = () => {
  return (
    <section
      data-reveal
      className="reveal relative content-center items-center box-border caret-transparent gap-x-0 flex flex-col shrink-0 h-min justify-center gap-y-0 w-full overflow-hidden py-[60px] md:py-[100px]"
    >
      <div className="relative content-center items-center box-border caret-transparent gap-x-10 flex flex-col shrink-0 h-min justify-start max-w-[390px] gap-y-10 w-full px-4 md:gap-x-14 md:max-w-[1200px] md:gap-y-14 md:px-12">
        <div className="box-border caret-transparent contents">
          <div className="relative box-border caret-transparent shrink-0 w-full">
            <SectionHeader
              label="Why Adminix"
              title="A smarter way to grow with data"
              description="Turn complex metrics into clear insights that help you make better decisions, faster."
            />
          </div>
        </div>
        <div className="box-border caret-transparent contents">
          <div className="relative box-border caret-transparent shrink-0 max-w-[800px] w-full">
            <ComparisonTable />
          </div>
        </div>
      </div>
    </section>
  );
};

