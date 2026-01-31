import { useParams } from "react-router-dom";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";

export const useCaseContent = {
  insurance: {
    title: "Insurance",
    description:
      "Automate intake, triage, and document collection while keeping claim data clean and audit-ready.",
  },
  healthcare: {
    title: "Healthcare",
    description:
      "Streamline patient onboarding, referrals, and prior authorization workflows with consistent data capture.",
  },
  hr: {
    title: "HR",
    description:
      "Reduce manual admin for onboarding, policy requests, and employee record updates with guided forms.",
  },
  "real-estate": {
    title: "Real Estate",
    description:
      "Move faster from lead to close with standardized documents, checklists, and client updates.",
  },
  "e-commerce": {
    title: "E-commerce",
    description:
      "Handle returns, order changes, and vendor workflows with clear intake and automated routing.",
  },
};

type UseCaseKey = keyof typeof useCaseContent;

type UseCasePageProps = {
  title: string;
  description: string;
};

export const UseCasePage = ({ title, description }: UseCasePageProps) => {
  return (
    <div className="text-black text-xs not-italic normal-nums font-normal accent-auto bg-neutral-100 box-border caret-transparent block tracking-[normal] leading-[normal] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-sans_serif min-h-screen">
      <div className="relative flex min-h-screen flex-col bg-neutral-100">
        <Header />
        <main className="w-full max-w-5xl px-6 pb-20 pt-28 sm:px-10 lg:px-12 flex-1 mx-auto">
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 font-geist">
              Use Case
            </p>
            <h1 className="text-3xl font-semibold tracking-[-0.8px] text-zinc-900 font-geist sm:text-4xl">
              {title}
            </h1>
            <p className="text-base text-zinc-600 font-geist">{description}</p>
          </div>
        </main>
        <div className="mt-auto w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export const UseCase = () => {
  const { useCase } = useParams();
  const content = useCase ? useCaseContent[useCase as UseCaseKey] : undefined;
  const title = content?.title ?? "Use Case";
  const description =
    content?.description ??
    "See how Adminix helps teams standardize requests, reduce manual work, and deliver faster outcomes.";

  return <UseCasePage title={title} description={description} />;
};
