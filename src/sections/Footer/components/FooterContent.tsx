import { FooterBrand } from "@/sections/Footer/components/FooterBrand";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";

export const FooterContent = () => {
  return (
    <div className="relative content-start items-start box-border caret-transparent flex flex-col shrink-0 h-min justify-between gap-y-10 w-full lg:flex-row">
      <div className="relative content-start items-start box-border caret-transparent gap-x-5 flex basis-auto flex-col grow-0 shrink-0 h-min justify-center gap-y-5 w-full lg:basis-0 lg:grow lg:w-px">
        <FooterBrand />
        <div className="relative box-border caret-transparent shrink-0">
          <a
            href="https://framer.com/remix/sYqnVgaJ6jfdOyaORZkY"
            className="relative text-blue-700 content-center items-center bg-blue-600 box-border caret-transparent gap-x-2.5 flex h-min justify-center gap-y-2.5 w-min overflow-hidden px-5 py-2.5 rounded-[10px] after:accent-auto after:box-border after:caret-transparent after:text-blue-700 after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:rounded-[10px] after:border-separate after:border-2 after:border-solid after:border-white/20 after:left-0 after:top-0 after:font-sans_serif"
          >
            <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex blur-0 shrink-0 h-min justify-center gap-y-2.5 w-min">
              <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
                <p className="text-white text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] text-nowrap font-geist">
                  Get Template
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="relative content-start items-start box-border caret-transparent gap-x-5 flex flex-col basis-auto grow-0 shrink-0 h-min justify-center w-full gap-y-5 md:flex-row lg:basis-0 lg:grow lg:max-w-[500px] lg:w-px">
        <FooterLinks
          title="Sections"
          links={[
            {
              text: "Features",
              href: "https://alytics.framer.website/#features",
            },
            {
              text: "Benefits",
              href: "https://alytics.framer.website/#benefits",
            },
            {
              text: "Integrations",
              href: "https://alytics.framer.website/#integrations",
            },
            {
              text: "Pricing",
              href: "https://alytics.framer.website/#pricing",
            },
            { text: "FAQ", href: "https://alytics.framer.website/#faq" },
          ]}
        />
        <FooterLinks
          title="Socials"
          links={[
            { text: "Instagram", href: "https://www.instagram.com/" },
            { text: "Twitter/X", href: "https://x.com/" },
            { text: "Linkedin", href: "https://www.linkedin.com/" },
          ]}
        />
        <FooterLinks
          title="Pages"
          links={[
            { text: "Home", href: "https://alytics.framer.website/" },
            {
              text: "Newsletter",
              href: "https://alytics.framer.website/newsletter",
            },
            { text: "Blogs", href: "https://alytics.framer.website/blog" },
            { text: "404", href: "https://alytics.framer.website/404" },
          ]}
        />
      </div>
    </div>
  );
};
