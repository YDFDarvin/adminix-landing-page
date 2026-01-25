import { Navbar } from "@/sections/Header/components/Navbar";

export const Header = () => {
  return (
    <div className="fixed box-border caret-transparent shrink-0 order-[-1000] w-full z-10 left-0 top-0">
      <div className="box-border caret-transparent contents">
        <Navbar />
      </div>
    </div>
  );
};
