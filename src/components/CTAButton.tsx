import { Link, useLocation } from "react-router-dom";

export const CTAButton = () => {
  const { pathname } = useLocation();
  if (pathname === "/contact") {
    return null;
  }

  return (
    <Link
      to="/contact"
      className="relative text-blue-700 content-center items-center bg-blue-600 box-border caret-transparent gap-x-2.5 flex h-min justify-center gap-y-2.5 w-min overflow-hidden px-5 py-2.5 rounded-[10px] after:accent-auto after:box-border after:caret-transparent after:text-blue-700 after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:rounded-[10px] after:border-separate after:border-2 after:border-solid after:border-white/20 after:left-0 after:top-0 after:font-sans_serif"
    >
      <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex blur-0 shrink-0 h-min justify-center gap-y-2.5 w-min">
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
          <p className="text-white text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] text-nowrap font-geist">
            Contact Us
          </p>
        </div>
      </div>
    </Link>
  );
};
