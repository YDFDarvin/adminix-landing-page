import { TestimonialCard } from "@/sections/Testimonials/components/TestimonialCard";

const testimonials = [
  {
    testimonialText:
      "Adminix is a game-changer, seamlessly reducing development costs and consolidating multiple APIs into one user-friendly platform—an invaluable solution for efficiency and workflow improvement.",
    quoteIconUrl:
      "https://framerusercontent.com/images/UBNbepHJf0KbEt8th3mWIASU8.svg?width=23&height=17",
    avatarUrl:
      "https://www.adminix.io/assets/images/customers/customer_5.jpg",
    avatarVariant: "aspect-[auto_101_/_101]",
    authorName: "🇬🇧 Ashley",
    companyLogoUrl:
      "https://framerusercontent.com/images/7gBs4Qym6w5w5VToXqPFZUirIg.svg?width=99&height=19",
  },
  {
    testimonialText:
      "Adminix proves to be an excellent productivity tool, enabling the swift development of applications and workflow automations with reduced reliance on both developer and DevOps resources. The on-premise version operates seamlessly, ensuring robust data security protection.",
    quoteIconUrl:
      "https://framerusercontent.com/images/UBNbepHJf0KbEt8th3mWIASU8.svg?width=23&height=17",
    avatarUrl:
      "https://www.adminix.io/assets/images/customers/customer_1.jpg",
    avatarVariant: "aspect-[auto_904_/_1200] rounded-xl",
    authorName: "🇫🇷 Yurii",
    companyLogoUrl:
      "https://framerusercontent.com/images/7gBs4Qym6w5w5VToXqPFZUirIg.svg?width=99&height=19",
  },
  {
    testimonialText:
      "This solution is an ideal match for embedding into financial applications. Its remarkable flexibility enables seamless integration with external APIs or databases. The extensive library of plugins not only enhances functionality but also proves to be a time-saving asset.",
    quoteIconUrl:
      "https://framerusercontent.com/images/UBNbepHJf0KbEt8th3mWIASU8.svg?width=23&height=17",
    avatarUrl:
      "https://www.adminix.io/assets/images/customers/customer_2.jpg",
    avatarVariant: "aspect-[auto_800_/_1200]",
    authorName: "🇺🇸 Alex",
    companyLogoUrl:
      "https://framerusercontent.com/images/7gBs4Qym6w5w5VToXqPFZUirIg.svg?width=99&height=19",
  },
  {
    testimonialText:
      "Their expertise in automating distributed deployments for IoT devices has revolutionized our processes.",
    quoteIconUrl:
      "https://framerusercontent.com/images/UBNbepHJf0KbEt8th3mWIASU8.svg?width=23&height=17",
    avatarUrl:
      "https://www.adminix.io/assets/images/customers/customer_3.jpg",
    avatarVariant: "aspect-[auto_800_/_1200]",
    authorName: "🇺🇦 Illia",
    companyLogoUrl:
      "https://framerusercontent.com/images/7gBs4Qym6w5w5VToXqPFZUirIg.svg?width=99&height=19",
  },
];

export const TestimonialCarousel = () => {
  return (
    <div className="relative box-border caret-transparent shrink-0 h-[350px] w-full">
      <section className="[mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_7.5%,rgb(0,0,0)_92.5%,rgba(0,0,0,0)_100%)] items-center box-border caret-transparent flex h-full justify-items-center list-none max-h-full max-w-full w-full overflow-hidden">
        <div className="flex w-max items-center gap-x-5 animate-[marquee_55s_linear_infinite_reverse] motion-reduce:animate-none will-change-transform">
          <ul className="flex items-center gap-x-5 h-full">
            {testimonials.map((testimonial, index) => (
              <li key={`testimonial-${index}`} className="box-border caret-transparent h-[342px] w-[352px]">
                <div className="relative box-border caret-transparent shrink-0 h-[342px] w-[352px]">
                  <TestimonialCard
                    testimonialText={testimonial.testimonialText}
                    quoteIconUrl={testimonial.quoteIconUrl}
                    avatarUrl={testimonial.avatarUrl}
                    avatarVariant={testimonial.avatarVariant}
                    authorName={testimonial.authorName}
                    companyLogoUrl={testimonial.companyLogoUrl}
                  />
                </div>
              </li>
            ))}
          </ul>
          <ul className="flex items-center gap-x-5 h-full" aria-hidden="true">
            {testimonials.map((testimonial, index) => (
              <li key={`testimonial-dup-${index}`} className="box-border caret-transparent h-[342px] w-[352px]">
                <div className="relative box-border caret-transparent shrink-0 h-[342px] w-[352px]">
                  <TestimonialCard
                    testimonialText={testimonial.testimonialText}
                    quoteIconUrl={testimonial.quoteIconUrl}
                    avatarUrl={testimonial.avatarUrl}
                    avatarVariant={testimonial.avatarVariant}
                    authorName={testimonial.authorName}
                    companyLogoUrl={testimonial.companyLogoUrl}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};
