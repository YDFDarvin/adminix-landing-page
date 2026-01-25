import { IntegrationContent } from "@/sections/Integrations/components/IntegrationContent";
import { IntegrationCarousel } from "@/sections/Integrations/components/IntegrationCarousel";

export const Integrations = () => {
  return (
    <section
      id="integrations"
      className="relative content-center items-center box-border caret-transparent gap-x-0 flex flex-col shrink-0 h-min justify-center gap-y-0 w-full overflow-hidden py-[60px] md:py-[100px]"
    >
      <div className="relative content-center items-center box-border caret-transparent gap-x-10 flex flex-col shrink-0 h-min justify-start max-w-[390px] gap-y-10 w-full px-4 md:gap-x-14 md:max-w-[1200px] md:gap-y-14 md:px-12">
        <div className="relative content-center items-center bg-white shadow-[rgba(0,0,0,0.03)_0px_1px_20px_0px] box-border caret-transparent gap-x-10 flex flex-col shrink-0 h-min justify-center gap-y-10 w-full overflow-hidden pt-10 pb-4 px-4 rounded-[20px] lg:flex-row lg:pb-10 lg:px-10">
          <IntegrationContent />
          <IntegrationCarousel />
        </div>
      </div>
    </section>
  );
};
