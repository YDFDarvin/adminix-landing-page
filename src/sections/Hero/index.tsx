import { HeroContent } from "@/sections/Hero/components/HeroContent";
import { HeroImage } from "@/sections/Hero/components/HeroImage";
import { LogoCarousel } from "@/sections/Hero/components/LogoCarousel";

export const Hero = () => {
  return (
    <section
      data-reveal
      className="reveal relative content-center items-center box-border caret-transparent gap-x-0 flex flex-col shrink-0 h-min justify-center gap-y-0 w-full pt-[100px] pb-[60px] md:pt-[120px] md:pb-[80px] lg:pt-40 lg:pb-[100px]"
    >
      <div className="relative content-center items-center box-border caret-transparent gap-x-10 flex flex-col shrink-0 h-min justify-start max-w-[390px] gap-y-10 w-full px-4 md:gap-x-12 md:max-w-[750px] md:gap-y-12 md:px-8 lg:gap-x-14 lg:max-w-[1200px] lg:gap-y-14 lg:px-12">
        <HeroContent />
        <div className="relative content-center items-center box-border caret-transparent gap-x-7 flex flex-col shrink-0 h-min justify-center gap-y-7 w-full">
          <HeroImage />
        </div>
        <LogoCarousel />
      </div>
    </section>
  );
};
