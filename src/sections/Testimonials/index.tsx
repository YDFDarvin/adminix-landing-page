import { SectionHeader } from "@/components/SectionHeader";
import { TestimonialCarousel } from "@/sections/Testimonials/components/TestimonialCarousel";

export const Testimonials = () => {
  return (
    <section className="relative content-center items-center box-border caret-transparent gap-x-0 flex flex-col shrink-0 h-min justify-center gap-y-0 w-full overflow-hidden py-[60px] md:py-[100px]">
      <div className="relative content-center items-center box-border caret-transparent gap-x-10 flex flex-col shrink-0 h-min justify-start max-w-[390px] gap-y-10 w-full px-4 md:gap-x-14 md:max-w-[1200px] md:gap-y-14 md:px-12">
        <div className="box-border caret-transparent contents">
          <div className="relative box-border caret-transparent shrink-0 w-full">
            <SectionHeader
              label="Testimonials"
              title="Hear what others say about us"
              description="See what top teams say after switching to a smarter product anAdminix platform."
            />
          </div>
        </div>
        <div className="relative content-center items-center box-border caret-transparent gap-x-4 flex flex-col shrink-0 h-min justify-center gap-y-4 w-full md:gap-x-6 md:gap-y-6">
          <TestimonialCarousel />
        </div>
      </div>
    </section>
  );
};

