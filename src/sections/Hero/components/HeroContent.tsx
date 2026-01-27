import { HeroText } from "@/sections/Hero/components/HeroText";
import { HeroActions } from "@/sections/Hero/components/HeroActions";

export const HeroContent = () => {
  return (
    <div className="relative content-center items-center box-border caret-transparent gap-x-5 flex flex-col shrink-0 h-min justify-center gap-y-5 w-full mb-[3.75rem] md:mb-[6rem]">
      <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 h-min justify-center gap-y-2.5 w-full md:gap-x-4 md:gap-y-4">
        <HeroText />
      </div>
      <HeroActions />
    </div>
  );
};
