import { useState } from "react";
import { FAQItem } from "@/sections/FAQ/components/FAQItem";

export const FAQList = () => {
  const [expandedItems, setExpandedItems] = useState<string[]>([
    "feature-usage",
  ]);

  const items = [
    {
      id: "feature-usage",
      question: "How does your platform track feature usage?",
      answer:
        "We automatically collect interaction data across your product and visualize which features are being used most -- no manual tagging needed.",
    },
    {
      id: "technical-skills",
      question: "Do I need technical skills to use Adminix?",
      answer:
        "No. Adminix is built for teams of all skill levels, with templates and guided workflows to get started quickly.",
    },
    {
      id: "integrations",
      question: "Can Adminix integrate with tools we already use?",
      answer:
        "Yes. Connect your existing tools and data sources via our integration library or API connectors.",
    },
    {
      id: "security",
      question: "Is my data secure on Adminix?",
      answer:
        "We follow industry-standard security practices and offer on-premise deployment options for added control.",
    },
    {
      id: "trial",
      question: "Can I try Adminix before committing?",
      answer:
        "Absolutely. You can start with a trial to explore the platform before choosing a plan.",
    },
  ];

  return (
    <div className="relative box-border caret-transparent shrink-0 h-min max-w-[800px] w-full">
      <div className="relative content-center items-center box-border caret-transparent gap-x-5 flex flex-col h-min justify-center max-w-full gap-y-5 w-full">
        <div className="absolute box-border caret-transparent shrink-0 z-[1] left-2/4 top-0">
          <div className="box-border caret-transparent"></div>
        </div>
        {items.map((item) => {
          const isExpanded = expandedItems.includes(item.id);
          return (
            <div
              key={item.id}
              className="relative box-border caret-transparent shrink-0 w-full"
            >
              <FAQItem
                question={item.question}
                answer={item.answer}
                isExpanded={isExpanded}
                onToggle={(nextExpanded) => {
                  setExpandedItems((current) =>
                    nextExpanded
                      ? [...current, item.id]
                      : current.filter((id) => id !== item.id),
                  );
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
