import { HeroDecorations } from "@/sections/Hero/components/HeroDecorations";
import { HeroContent } from "@/sections/Hero/components/HeroContent";
import { HeroImage } from "@/sections/Hero/components/HeroImage";
import { LogoCarousel } from "@/sections/Hero/components/LogoCarousel";

export const Hero = () => {
  return (
    <section className="relative content-center items-center box-border caret-transparent gap-x-0 flex flex-col shrink-0 h-min justify-center gap-y-0 w-full pt-[100px] pb-[60px] md:pt-[120px] md:pb-[80px] lg:pt-40 lg:pb-[100px]">
      <div className="relative content-center items-center box-border caret-transparent gap-x-10 flex flex-col shrink-0 h-min justify-start max-w-[390px] gap-y-10 w-full px-4 md:gap-x-12 md:max-w-[750px] md:gap-y-12 md:px-8 lg:gap-x-14 lg:max-w-[1200px] lg:gap-y-14 lg:px-12">
        <HeroDecorations
          variant="rotate-[-7.999994819856548deg] left-[60px] top-[30px]"
          imageUrl="https://framerusercontent.com/images/nJN9fw89j7L0b6R9JJh3qGL98.png?width=161&height=161"
          alt="Veltix Logo"
          imageClassName="aspect-[auto_161_/_161]"
        />
        <HeroDecorations
          variant="rotate-[-7.999994819856548deg] left-[60px] top-[250px]"
          imageUrl="https://framerusercontent.com/images/rpot5Bf0TIFeRoXSfetpc2GULFo.png?width=161&height=161"
          alt="Knot logo"
          imageClassName="aspect-[auto_161_/_161]"
        />
        <HeroDecorations
          variant="flex flex-col rotate-[7.999994819856548deg] right-[60px] top-[30px]"
          imageUrl="https://framerusercontent.com/images/GfeiYrM8yVHItoK8N01yQWI7djQ.png?width=160&height=160"
          alt="Klyra Logo"
          imageClassName="aspect-[auto_160_/_160]"
        />
        <HeroDecorations
          variant="flex flex-col rotate-[7.999994819856548deg] right-20 top-[250px]"
          imageUrl="https://framerusercontent.com/images/3xq9uOvolNwNx1mCSkE8bN0BYQ.png?width=160&height=160"
          alt="Nuvio Logo"
          imageClassName="aspect-[auto_160_/_160]"
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
