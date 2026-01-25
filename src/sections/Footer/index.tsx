import { FooterContent } from "@/sections/Footer/components/FooterContent";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

export const Footer = () => {
  return (
    <footer className="relative content-center items-center bg-white shadow-[rgba(0,0,0,0.03)_0px_-1px_20px_0px] box-border caret-transparent gap-x-0 flex flex-col h-min justify-center gap-y-0 w-full overflow-hidden pt-12 pb-5 px-12">
      <div className="relative content-center items-center box-border caret-transparent gap-x-5 flex flex-col shrink-0 h-min justify-center max-w-[1104px] gap-y-5 w-full">
        <FooterContent />
        <FooterBottom />
      </div>
    </footer>
  );
};
