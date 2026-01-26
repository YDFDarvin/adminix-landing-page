import { IntegrationItem } from "@/sections/Integrations/components/IntegrationItem";

const integrations = [
  {
    logoUrl: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/slack.svg",
    logoAlt: "Slack Logo",
    name: "Slack",
    imageVariant: "aspect-square",
  },
  {
    logoUrl: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/github.svg",
    logoAlt: "GitHub Logo",
    name: "GitHub",
    imageVariant: "aspect-square",
  },
  {
    logoUrl: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/gmail.svg",
    logoAlt: "Gmail Logo",
    name: "Gmail",
    imageVariant: "aspect-square",
  },
  {
    logoUrl: "https://img.icons8.com/color/96/amazon-web-services.png",
    logoAlt: "AWS Logo",
    name: "AWS",
    imageVariant: "aspect-square object-contain",
  },
  {
    logoUrl:
      "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/google-docs.svg",
    logoAlt: "Google Docs Logo",
    name: "Google Docs",
    imageVariant: "aspect-square",
  },
  {
    logoUrl:
      "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/google-sheets.svg",
    logoAlt: "Google Sheets Logo",
    name: "Google Sheets",
    imageVariant: "aspect-square",
  },
  {
    logoUrl:
      "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/google-gemini.svg",
    logoAlt: "Google Gemini Logo",
    name: "Gemini",
    imageVariant: "aspect-square",
  },
  {
    logoUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/algolia.svg",
    logoAlt: "Algolia Logo",
    name: "Algolia",
    imageVariant: "aspect-square",
  },
];

export const IntegrationCarousel = () => {
  return (
    <div className="relative content-center items-center bg-neutral-100 box-border caret-transparent gap-x-5 flex basis-auto flex-col grow-0 shrink-0 h-min justify-center gap-y-5 w-full overflow-hidden rounded-[10px] lg:basis-0 lg:grow lg:w-px lg:rounded-[20px]">
      <div className="relative box-border caret-transparent shrink-0 h-[290px] w-full z-[2]">
        <div className="box-border caret-transparent contents">
          <section className="items-center box-border caret-transparent flex h-full justify-items-center list-none max-h-full max-w-full w-full overflow-hidden p-2.5">
            <ul className="relative items-center box-border caret-transparent gap-x-5 flex flex-col h-full justify-items-center max-h-full max-w-full gap-y-5 w-full pl-0">
              {integrations.map((integration) => (
                <li key={integration.name} className="box-border caret-transparent h-[61px]">
                  <div className="relative box-border caret-transparent shrink-0 h-[61px]">
                    <IntegrationItem
                      logoUrl={integration.logoUrl}
                      logoAlt={integration.logoAlt}
                      name={integration.name}
                      imageVariant={integration.imageVariant}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};
