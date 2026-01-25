export const FooterBottom = () => {
  return (
    <div className="relative content-center items-center box-border caret-transparent flex flex-col shrink-0 h-min justify-between gap-y-4 w-full overflow-hidden pt-5 md:flex-row after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border-neutral-200 after:border-separate after:border-t after:border-solid after:left-0 after:top-0 after:font-sans_serif">
      <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-min">
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
          <p className="text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] text-nowrap font-geist">

          </p>
        </div>
      </div>
      <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
        <p className="text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] text-nowrap font-geist">
          Adminix Solutions Inc. © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};
