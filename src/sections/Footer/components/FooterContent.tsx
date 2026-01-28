import { FooterBrand } from "@/sections/Footer/components/FooterBrand";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
import { CTAButton } from "@/components/CTAButton";

export const FooterContent = () => {
  return (
    <div className="relative content-start items-start box-border caret-transparent flex flex-col shrink-0 h-min justify-between gap-y-10 w-full lg:flex-row">
      <div className="relative content-start items-start box-border caret-transparent gap-x-5 flex basis-auto flex-col grow-0 shrink-0 h-min justify-center gap-y-5 w-full lg:basis-0 lg:grow lg:w-px">
        <FooterBrand />
        <div className="relative box-border caret-transparent shrink-0">
          <CTAButton />
        </div>
      </div>
      <div className="relative content-start items-start box-border caret-transparent gap-x-5 flex flex-col basis-auto grow-0 shrink-0 h-min justify-center w-full gap-y-5 md:flex-row lg:basis-0 lg:grow lg:max-w-[500px] lg:w-px">
        <FooterLinks
          title="Product"
          links={[
            {
              text: "Features",
              href: "/#features",
            },
            {
              text: "Benefits",
              href: "/#benefits",
            },
            {
              text: "Integrations",
              href: "/#integrations",
            },
            {
              text: "Pricing",
              href: "/#pricing",
            },
            { text: "FAQ", href: "/#faq" },
          ]}
        />
        <FooterLinks
          title="Resources"
          links={[
            { text: "Facebook", href: "https://www.facebook.com/adminixio" },
            { text: "Linkedin", href: "https://www.linkedin.com/company/adminix-io/" },
            { text: "Blog", href: "/blog" },
          ]}
        />
        <FooterLinks
          title="Legal"
          links={[
            { text: "Privacy Policy", href: "/privacy" },
            { text: "Terms of Service", href: "/terms" },
          ]}
        />
      </div>
    </div>
  );
};
