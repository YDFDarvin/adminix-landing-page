import { useState } from "react";
import { FAQItem } from "@/sections/FAQ/components/FAQItem";

export const FAQList = () => {
  const [expandedItems, setExpandedItems] = useState<string[]>([
    "build-with-adminix",
  ]);

  const items = [
    {
      id: "build-with-adminix",
      question: "What can I build with Adminix?",
      answer:
        "Adminix is designed for internal software: admin panels, CRMs, back-office tools, internal dashboards and workflow-based systems tailored to your business processes.",
    },
    {
      id: "technical-skills",
      question: "Do I need technical skills to use Adminix?",
      answer:
        "No. You can start with our AI Assistant or templates and work visually. Technical users can go deeper, but non-technical teams can build and maintain internal tools without writing code.",
    },
    {
      id: "production-ready",
      question: "Is Adminix suitable for production use or only for prototypes?",
      answer:
        "Adminix is built for production from day one. The platform generates scalable, production-ready internal software - not just demos or prototypes.",
    },
    {
      id: "ai-help",
      question: "How does AI help in the building process?",
      answer:
        "AI helps you define structure, generate data models and workflows, and connect UI and logic into a single system. You stay in control and can review or adjust everything before launch.",
    },
    {
      id: "security",
      question: "How is data security handled in Adminix?",
      answer:
        "Adminix is designed with security in mind. Data is isolated per workspace, access is controlled by roles and permissions, and industry-standard encryption is used to protect information at rest and in transit.",
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
