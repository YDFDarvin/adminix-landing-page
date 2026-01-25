import { FAQItem } from "@/sections/FAQ/components/FAQItem";

export const FAQList = () => {
  return (
    <div className="relative box-border caret-transparent shrink-0 h-[467.812px] max-w-[800px] w-full">
      <div className="relative content-center items-center box-border caret-transparent gap-x-5 flex flex-col h-min justify-center max-w-full gap-y-5 w-full">
        <div className="absolute box-border caret-transparent shrink-0 z-[1] left-2/4 top-0">
          <div className="box-border caret-transparent"></div>
        </div>
        <div className="relative box-border caret-transparent shrink-0 w-full">
          <FAQItem
            question="How does your platform track feature usage?"
            answer="We automatically collect interaction data across your product and visualize which features are being used most — no manual tagging needed."
            isExpanded={true}
          />
        </div>
        <FAQItem
          question="Do I need technical skills to use Alytics?"
          isExpanded={false}
        />
        <FAQItem
          question="Can Alytics integrate with tools we already use?"
          isExpanded={false}
        />
        <FAQItem question="Is my data secure on Alytics?" isExpanded={false} />
        <FAQItem
          question="Can I try Alytics before committing?"
          isExpanded={false}
        />
      </div>
    </div>
  );
};
