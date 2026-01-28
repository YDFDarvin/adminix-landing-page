import { Link, useLocation } from "react-router-dom";

export type FooterLinksProps = {
  title: string;
  links: Array<{
    text: string;
    href: string;
  }>;
};

export const FooterLinks = (props: FooterLinksProps) => {
  const { pathname } = useLocation();
  const handleLinkClick =
    (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) {
        return;
      }

      const targetId = href.slice(hashIndex + 1);
      if (!targetId) {
        return;
      }

      const target = document.getElementById(targetId);
      if (pathname === "/" && target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

  const isHashLink = (href: string) => href.includes("#");
  const isExternalLink = (href: string) => /^https?:\/\//i.test(href);

  return (
    <div className="relative content-start items-start box-border caret-transparent gap-x-4 flex basis-0 flex-col grow shrink-0 h-min justify-start gap-y-4 w-px overflow-hidden">
      <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
        <h5 className="text-lg font-semibold box-border caret-transparent tracking-[-0.36px] leading-[25.2px] break-words font-geist md:text-xl md:tracking-[-0.4px] md:leading-7">
          {props.title}
        </h5>
      </div>
      <div className="relative content-start items-start box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 h-min justify-center gap-y-2.5 w-full">
        {props.links.map((link, index) => (
          <div
            key={index}
            className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap"
          >
            <p className="text-zinc-600/80 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] text-nowrap font-geist">
              {isExternalLink(link.href) ? (
                <a
                  href={link.href}
                  className="box-border caret-transparent text-nowrap"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.text}
                </a>
              ) : isHashLink(link.href) ? (
                <Link
                  to={link.href}
                  className="box-border caret-transparent text-nowrap"
                  onClick={handleLinkClick(link.href)}
                >
                  {link.text}
                </Link>
              ) : (
                <Link to={link.href} className="box-border caret-transparent text-nowrap">
                  {link.text}
                </Link>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
