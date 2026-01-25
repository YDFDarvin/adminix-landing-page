import { HeroDecorations } from "@/sections/Hero/components/HeroDecorations";
import { HeroContent } from "@/sections/Hero/components/HeroContent";
import { HeroImage } from "@/sections/Hero/components/HeroImage";
import { LogoCarousel } from "@/sections/Hero/components/LogoCarousel";

export const Hero = () => {
  return (
    <section className="relative content-center items-center box-border caret-transparent gap-x-0 flex flex-col shrink-0 h-min justify-center gap-y-0 w-full pt-[100px] pb-[60px] md:pt-[120px] md:pb-[80px] lg:pt-40 lg:pb-[100px]">
      <div className="relative content-center items-center box-border caret-transparent gap-x-10 flex flex-col shrink-0 h-min justify-start max-w-[390px] gap-y-10 w-full px-4 md:gap-x-12 md:max-w-[750px] md:gap-y-12 md:px-8 lg:gap-x-14 lg:max-w-[1200px] lg:gap-y-14 lg:px-12">
        <HeroDecorations
          variant="rotate-[-7.999994819856548deg] left-[90px] top-[20px]"
          imageUrl="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/slack.svg"
          alt="Slack"
          imageClassName="aspect-square"
          floatClassName="hero-float hero-float-delay-1"
        />
        <HeroDecorations
          variant="rotate-[-7.999994819856548deg] left-[90px] top-[280px]"
          imageUrl="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/gmail.svg"
          alt="Gmail"
          imageClassName="aspect-square"
          floatClassName="hero-float-ellipse hero-float-delay-2"
        />
        <HeroDecorations
          variant="rotate-[-7.999994819856548deg] left-[130px] top-[150px]"
          imageUrl="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/github.svg"
          alt="GitHub"
          imageClassName="aspect-square"
          floatClassName="hero-float hero-float-delay-3"
        />
        <HeroDecorations
          variant="rotate-[-7.999994819856548deg] left-[130px] top-[410px]"
          imageUrl="https://img.icons8.com/color/96/amazon-web-services.png"
          alt="AWS"
          imageClassName="aspect-square object-contain p-2"
          floatClassName="hero-float-ellipse hero-float-delay-4"
        />
        <HeroDecorations
          variant="flex flex-col rotate-[7.999994819856548deg] right-[90px] top-[20px]"
          imageUrl="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/google-sheets.svg"
          alt="Google Sheets"
          imageClassName="aspect-square"
          floatClassName="hero-float hero-float-slow hero-float-delay-1"
        />
        <HeroDecorations
          variant="flex flex-col rotate-[7.999994819856548deg] right-[90px] top-[280px]"
          imageUrl="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/google-docs.svg"
          alt="Google Docs"
          imageClassName="aspect-square"
          floatClassName="hero-float-ellipse hero-float-delay-2"
        />
        <HeroDecorations
          variant="flex flex-col rotate-[7.999994819856548deg] right-[130px] top-[150px]"
          imageUrl="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/google-gemini.svg"
          alt="Gemini"
          imageClassName="aspect-square"
          floatClassName="hero-float hero-float-slow hero-float-delay-3"
        />
        <HeroDecorations
          variant="flex flex-col rotate-[7.999994819856548deg] right-[130px] top-[410px]"
          imageUrl="https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/algolia.svg"
          alt="Algolia"
          imageClassName="aspect-square"
          floatClassName="hero-float-ellipse hero-float-delay-4"
        />
        <HeroContent />
        <div className="relative content-center items-center box-border caret-transparent gap-x-7 flex flex-col shrink-0 h-min justify-center gap-y-7 w-full">
          <HeroImage />
        </div>
        <LogoCarousel />
      </div>
    </section>
  );
};
