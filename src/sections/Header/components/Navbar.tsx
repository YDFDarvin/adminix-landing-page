import { Logo } from "@/components/Logo";
import { NavMenu } from "@/sections/Header/components/NavMenu";
import { CTAButton } from "@/components/CTAButton";
import { MobileMenu } from "@/sections/Header/components/MobileMenu";

export const Navbar = () => {
  return (
    <header className="relative content-center items-center bg-white shadow-[rgba(0,0,0,0.03)_0px_1px_20px_0px] box-border caret-transparent gap-x-5 flex h-min justify-center gap-y-5 w-full overflow-hidden px-4 py-3.5 md:px-8 lg:px-12">
      <div className="relative content-center items-center box-border caret-transparent flex basis-0 grow shrink-0 h-min justify-between max-w-[1104px] w-px">
        <div className="relative content-center items-center box-border caret-transparent gap-x-5 flex shrink-0 h-min justify-start gap-y-5 w-min">
          <Logo />
        </div>
        <div className="hidden lg:flex">
          <NavMenu />
        </div>
        <div className="hidden lg:block relative box-border caret-transparent shrink-0">
          <CTAButton />
        </div>
        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};
