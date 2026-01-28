const logos = [
  {
    src: "https://claimtechnology.co.uk/wp-content/uploads/2020/06/xfooter-logo.png.pagespeed.ic.nP0oq8Jksp.png",
    className: "w-[120px] aspect-[3.5_/_1]",
    imgClassName: "brightness-0",
  },
  {
    src: "https://dopetgztsfho3.cloudfront.net/Logo_DS_blue_bb827584c6.webp",
    className: "w-[130px] aspect-[4_/_1]",
  },
  {
    src: "https://www.google.com/s2/favicons?domain=neo-fin.com&sz=128",
    className: "w-8 aspect-square",
  },
  {
    src: "https://bmotion.technology/wp-content/uploads/2016/03/logo_white_outlines_dark-01-300x118.png",
    className: "w-[120px] aspect-[2.5_/_1]",
  },
  {
    src: "https://seedsofbravery.eu/wp-content/uploads/2024/02/seeds_logo_black_eng.png",
    className: "w-[120px] aspect-[2.5_/_1]",
  },
  {
    src: "https://vc4a.com/wp-content/uploads/2021/10/Notion.png",
    className: "w-[70px] aspect-[2.5_/_1]",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Logo_for_Google_for_Startups_page.png",
    className: "w-[120px] aspect-[2.5_/_1]",
  },
];

export const LogoCarousel = () => {
  return (
    <div className="mt-10 relative content-center items-center box-border caret-transparent gap-x-7 flex flex-col shrink-0 h-min justify-center gap-y-7 w-full">
      <div className="relative content-center items-center box-border caret-transparent gap-x-5 flex flex-col shrink-0 h-min justify-center gap-y-5 w-full px-2.5 md:gap-x-6 md:gap-y-6 md:px-0">
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
          <h5 className="text-lg font-semibold box-border caret-transparent tracking-[-0.36px] leading-[25.2px] text-nowrap font-geist md:text-xl md:tracking-[-0.4px] md:leading-7">
            Trusted by
          </h5>
        </div>
        <div className="relative box-border caret-transparent shrink-0 h-[55px] w-[65%] mx-auto">
          <section className="[mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_7.5%,rgb(0,0,0)_92.5%,rgba(0,0,0,0)_100%)] items-center box-border caret-transparent flex h-full justify-items-center list-none max-h-full max-w-full w-full overflow-hidden">
            <div className="flex w-max items-center gap-x-6 md:gap-x-8 animate-marquee motion-reduce:animate-none will-change-transform">
              <ul className="flex items-center gap-x-6 md:gap-x-8 h-full">
                {logos.map((logo, index) => (
                  <li key={`logo-${index}`} className="box-border caret-transparent">
                    <div className={`relative box-border caret-transparent shrink-0 ${logo.className}`}>
                      <div className="absolute box-border caret-transparent inset-0">
                        <img
                          src={logo.src}
                          alt=""
                          className={`box-border caret-transparent h-full object-contain w-full ${
                            logo.imgClassName ?? ""
                          }`}
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <ul className="flex items-center gap-x-6 md:gap-x-8 h-full" aria-hidden="true">
                {logos.map((logo, index) => (
                  <li key={`logo-dup-${index}`} className="box-border caret-transparent">
                    <div className={`relative box-border caret-transparent shrink-0 ${logo.className}`}>
                      <div className="absolute box-border caret-transparent inset-0">
                        <img
                          src={logo.src}
                          alt=""
                          className={`box-border caret-transparent h-full object-contain w-full ${
                            logo.imgClassName ?? ""
                          }`}
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
