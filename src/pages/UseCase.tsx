import { useParams } from "react-router-dom";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { SIGNUP_URL } from "@/constants/urls";

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

export const InsuranceUseCase = () => {
  return (
    <div className="text-black text-xs not-italic normal-nums font-normal accent-auto bg-neutral-100 box-border caret-transparent block tracking-[normal] leading-[normal] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-sans_serif min-h-screen">
      <div className="relative flex min-h-screen flex-col bg-neutral-100">
        <Header />
        <main className="w-full max-w-5xl px-6 pb-20 pt-28 sm:px-10 lg:px-12 flex-1 mx-auto">
          <section className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 font-geist">
                Use Case
              </p>
              <h1 className="text-3xl font-semibold tracking-[-0.8px] text-zinc-900 font-geist sm:text-4xl">
                Automate Insurance processes with Adminix
              </h1>
              <p className="text-base text-zinc-600 font-geist">
                Fulfill your customers&#39; needs by bringing automation to your business
                processes while remaining compliant
              </p>
            </div>
            <div>
              <a
                href={SIGNUP_URL}
                target="_blank"
                rel="noreferrer"
                className="relative text-blue-700 content-center items-center bg-blue-600 box-border caret-transparent gap-x-2.5 flex h-min justify-center gap-y-2.5 w-min overflow-hidden px-5 py-2.5 rounded-[10px] after:accent-auto after:box-border after:caret-transparent after:text-blue-700 after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:rounded-[10px] after:border-separate after:border-2 after:border-solid after:border-white/20 after:left-0 after:top-0 after:font-sans_serif"
              >
                <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex blur-0 shrink-0 h-min justify-center gap-y-2.5 w-min">
                  <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
                    <p className="text-white text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] text-nowrap font-geist">
                      Get Started
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </section>

          <section className="mt-12 flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold tracking-[-0.6px] text-zinc-900 font-geist">
                Challenge
              </h2>
              <p className="text-base text-zinc-600 font-geist">
                US-based auto insurance provider needed to automate its premium calculation
                process and integrate a chatbot to improve customer support. The company
                previously relied on manual data entry, which was time-consuming and
                error-prone, leading to delays in policy issuance and unsatisfactory
                customer experience.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold tracking-[-0.6px] text-zinc-900 font-geist">
                Solution
              </h2>
              <p className="text-base text-zinc-600 font-geist">
                To address this challenge, our team employed Adminix, a robust AI-based
                low-code automation solution. Leveraging the platform&#39;s user-friendly
                drag &amp; drop designer, we developed an intelligent web-based chatbot
                dedicated to automating the premium calculation process. The workflow
                pulled customer&#39;s data from various sources, such as the company&#39;s
                website, CRM, and third-party data providers, and calculated the premium
                based on the customer&#39;s risk profile.
              </p>
              <p className="text-base text-zinc-600 font-geist">
                This chatbot utilized cutting-edge AI capabilities provided by Open AI and
                AWS AI services to understand customer queries, assess risk factors, and
                generate accurate insurance quotes in real-time. The chatbot seamlessly
                interacted with customers, gathering essential information such as vehicle
                details, driver history, and coverage preferences. Through dynamic
                interactions, the chatbot utilized Adminix&#39;s capabilities to perform
                complex quote calculations, considering various factors that influence
                auto insurance premiums.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold tracking-[-0.6px] text-zinc-900 font-geist">
                Results
              </h2>
              <p className="text-base text-zinc-600 font-geist">
                By using Adminix to automate premium calculation and integrate a chatbot
                for customer support, the insurance company achieved significant results,
                including:
              </p>
              <ul className="list-disc pl-6 text-base text-zinc-600 font-geist space-y-2">
                <li>
                  Faster policy issuance: The chatbot&#39;s accuracy in assessing risk
                  factors and providing tailored quotes led to a 25% increase in conversion
                  rates.
                </li>
                <li>
                  Reduced errors: Automated premium calculation eliminated errors caused by
                  manual data entry, leading to more accurate premium calculation and
                  reduced risk of underwriting losses.
                </li>
                <li>
                  Increased productivity: Automated premium calculation and customer
                  support speeded up employees&#39; time to focus on more complex tasks,
                  such as claims handling and risk analysis.
                </li>
                <li>
                  Improved customer experience: Customers experienced a 40% reduction in
                  the time required to receive accurate insurance quotes, enhancing overall
                  satisfaction with the quote generation process.
                </li>
              </ul>
            </div>
          </section>
        </main>
        <div className="mt-auto w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export const HealthcareUseCase = () => {
  return (
    <div className="text-black text-xs not-italic normal-nums font-normal accent-auto bg-neutral-100 box-border caret-transparent block tracking-[normal] leading-[normal] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-sans_serif min-h-screen">
      <div className="relative flex min-h-screen flex-col bg-neutral-100">
        <Header />
        <main className="w-full max-w-5xl px-6 pb-20 pt-28 sm:px-10 lg:px-12 flex-1 mx-auto">
          <section className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 font-geist">
                Use Case
              </p>
              <h1 className="text-3xl font-semibold tracking-[-0.8px] text-zinc-900 font-geist sm:text-4xl">
                How Adminix helps hospitals
              </h1>
              <p className="text-base text-zinc-600 font-geist">
                The hospital can use Adminix to create automated workflows to manage
                patient records, appointment scheduling, and communication with patients.
              </p>
            </div>
            <div>
              <a
                href={SIGNUP_URL}
                target="_blank"
                rel="noreferrer"
                className="relative text-blue-700 content-center items-center bg-blue-600 box-border caret-transparent gap-x-2.5 flex h-min justify-center gap-y-2.5 w-min overflow-hidden px-5 py-2.5 rounded-[10px] after:accent-auto after:box-border after:caret-transparent after:text-blue-700 after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:rounded-[10px] after:border-separate after:border-2 after:border-solid after:border-white/20 after:left-0 after:top-0 after:font-sans_serif"
              >
                <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex blur-0 shrink-0 h-min justify-center gap-y-2.5 w-min">
                  <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
                    <p className="text-white text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] text-nowrap font-geist">
                      Get Started
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </section>

          <section className="mt-12 flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold tracking-[-0.6px] text-zinc-900 font-geist">
                Challenges
              </h2>
              <p className="text-base text-zinc-600 font-geist">
                A hospital is facing difficulties in managing patient records and appointment
                scheduling, which is leading to delays and errors in their business processes.
                The hospital staff is overwhelmed with manual tasks, and they lack a streamlined
                approach to manage patient data, leading to delayed diagnoses and treatment.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold tracking-[-0.6px] text-zinc-900 font-geist">
                Solutions
              </h2>
              <p className="text-base text-zinc-600 font-geist">
                Adminix can help the hospital automate these processes with its low-code designer
                and developer-friendly environment. The hospital can use Adminix to create automated
                workflows to manage patient records, appointment scheduling, and communication with
                patients. Adminix allows the hospital staff to build and modify workflows without
                requiring any technical knowledge, thus reducing the need for developer engagement.
              </p>
              <p className="text-base text-zinc-600 font-geist">
                The hospital can also extend the existing workflows by using AWS Lambda functions to
                add additional automation processes. For instance, a developer can use AWS Lambda
                functions to automate the process of sending reminder notifications to patients
                before their appointments.
              </p>
              <p className="text-base text-zinc-600 font-geist">
                Moreover, the hospital can enhance their workflows with AI capabilities using Open
                AI and AWS AI services. They can use these services to automate the diagnosis process
                and identify potential health risks. Adminix can integrate with these services to
                provide a more accurate and efficient solution for patient diagnosis and treatment.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold tracking-[-0.6px] text-zinc-900 font-geist">
                Results
              </h2>
              <p className="text-base text-zinc-600 font-geist">
                By using Adminix, the hospital can automate their business processes and reduce
                manual tasks, leading to reduced errors and delays. The hospital staff can
                efficiently manage patient records and appointment scheduling, which can lead to
                better patient outcomes. The hospital can also reduce costs associated with manual
                tasks, such as paperwork and communication. Overall, Adminix can provide a more
                streamlined and efficient approach to manage hospital operations, resulting in
                improved patient care and increased productivity.
              </p>
            </div>
          </section>
        </main>
        <div className="mt-auto w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export const HRUseCase = () => {
  return (
    <div className="text-black text-xs not-italic normal-nums font-normal accent-auto bg-neutral-100 box-border caret-transparent block tracking-[normal] leading-[normal] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-sans_serif min-h-screen">
      <div className="relative flex min-h-screen flex-col bg-neutral-100">
        <Header />
        <main className="w-full max-w-5xl px-6 pb-20 pt-28 sm:px-10 lg:px-12 flex-1 mx-auto">
          <section className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 font-geist">
                Use Case
              </p>
              <h1 className="text-3xl font-semibold tracking-[-0.8px] text-zinc-900 font-geist sm:text-4xl">
                HR automation with Adminix
              </h1>
              <p className="text-base text-zinc-600 font-geist">
                Optimize your routine HR processes by implementing workflow automation
                and recruit talents more effectively
              </p>
            </div>
            <div>
              <a
                href={SIGNUP_URL}
                target="_blank"
                rel="noreferrer"
                className="relative text-blue-700 content-center items-center bg-blue-600 box-border caret-transparent gap-x-2.5 flex h-min justify-center gap-y-2.5 w-min overflow-hidden px-5 py-2.5 rounded-[10px] after:accent-auto after:box-border after:caret-transparent after:text-blue-700 after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:rounded-[10px] after:border-separate after:border-2 after:border-solid after:border-white/20 after:left-0 after:top-0 after:font-sans_serif"
              >
                <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex blur-0 shrink-0 h-min justify-center gap-y-2.5 w-min">
                  <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
                    <p className="text-white text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] text-nowrap font-geist">
                      Get Started
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </section>

          <section className="mt-12 flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold tracking-[-0.6px] text-zinc-900 font-geist">
                Challenges
              </h2>
              <p className="text-base text-zinc-600 font-geist">
                One of the biggest challenges faced by HR departments is the tedious and
                time-consuming process of manually screening job applications and resumes.
                HR managers spend a significant amount of time sifting through piles of
                resumes and job applications to identify the best candidates for the job.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold tracking-[-0.6px] text-zinc-900 font-geist">
                Solution
              </h2>
              <p className="text-base text-zinc-600 font-geist">
                Adminix helps automate this process by integrating with job board platforms
                and leveraging AI services like AWS Comprehend to extract key information
                from resumes such as education, work experience, and skills. This information
                is used to automatically score and rank the resumes based on pre-defined
                criteria. HR team uses Adminix user-friendly drag &amp; drop designer to build
                a workflow that automatically sends personalized emails to candidates that
                meet certain criteria, inviting them to schedule an interview or take a
                pre-screening assessment.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold tracking-[-0.6px] text-zinc-900 font-geist">
                Results
              </h2>
              <p className="text-base text-zinc-600 font-geist">
                By automating the resume screening process, HR department significantly reduce
                the amount of time spent on administrative tasks, allowing HR managers to focus
                on higher value-add activities such as building relationships with candidates
                and managing employee engagement. Additionally, the use of AI helps eliminate
                bias in the hiring process, ensuring that all candidates are evaluated based
                on their skills and qualifications, rather than their gender, race, or other
                personal characteristics. This leads to a more diverse and inclusive workforce,
                which leads to increased innovation and better business outcomes.
              </p>
            </div>
          </section>
        </main>
        <div className="mt-auto w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export const RealEstateUseCase = () => {
  return (
    <div className="text-black text-xs not-italic normal-nums font-normal accent-auto bg-neutral-100 box-border caret-transparent block tracking-[normal] leading-[normal] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-sans_serif min-h-screen">
      <div className="relative flex min-h-screen flex-col bg-neutral-100">
        <Header />
        <main className="w-full max-w-5xl px-6 pb-20 pt-28 sm:px-10 lg:px-12 flex-1 mx-auto">
          <section className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 font-geist">
                Use Case
              </p>
              <h1 className="text-3xl font-semibold tracking-[-0.8px] text-zinc-900 font-geist sm:text-4xl">
                How Adminix helps real estate companies
              </h1>
              <p className="text-base text-zinc-600 font-geist">
                Improve communication with clients by automating your daily research
                process and reducing the paperwork
              </p>
            </div>
            <div>
              <a
                href={SIGNUP_URL}
                target="_blank"
                rel="noreferrer"
                className="relative text-blue-700 content-center items-center bg-blue-600 box-border caret-transparent gap-x-2.5 flex h-min justify-center gap-y-2.5 w-min overflow-hidden px-5 py-2.5 rounded-[10px] after:accent-auto after:box-border after:caret-transparent after:text-blue-700 after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:rounded-[10px] after:border-separate after:border-2 after:border-solid after:border-white/20 after:left-0 after:top-0 after:font-sans_serif"
              >
                <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex blur-0 shrink-0 h-min justify-center gap-y-2.5 w-min">
                  <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
                    <p className="text-white text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] text-nowrap font-geist">
                      Get Started
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </section>

          <section className="mt-12 flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold tracking-[-0.6px] text-zinc-900 font-geist">
                Challenge
              </h2>
              <p className="text-base text-zinc-600 font-geist">
                Real estate companies have to process manually a large volume of paperwork
                daily, such as lease agreements, property inspection reports, and tenant
                screening applications. This is often time-consuming and prone to errors,
                which results in delays and lost opportunities. Additionally, real estate
                companies need to manage their property listings across multiple platforms,
                which can be overwhelming and difficult to keep up with.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold tracking-[-0.6px] text-zinc-900 font-geist">
                Solution
              </h2>
              <p className="text-base text-zinc-600 font-geist">
                Adminix automate these manual processes using the drag&amp;drop no-code
                designer and AI capabilities. Users create automations to extract key
                information from lease agreements and other documents, insert it into
                relevant fields, and trigger workflows that perform various actions, such
                as notifying stakeholders, updating databases, or generating reports.
                Additionally, Adminix provide a possibility to integrate with various
                listing platforms, such as Zillow and Realtor.com, and automate the process
                of publishing and updating property listings across multiple platforms,
                thereby saving users time and ensuring consistency across platforms.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold tracking-[-0.6px] text-zinc-900 font-geist">
                Results
              </h2>
              <p className="text-base text-zinc-600 font-geist">
                By automating various real estate processes with Adminix, customers save
                significant amount of time and reduce errors. Automation the management of
                property listings across multiple platforms also saves time and reduce
                errors, as users no longer need to manually update each platform separately.
                Overall, Adminix helps increase efficiency, reduce costs, and improve
                customer satisfaction to real estate companies.
              </p>
            </div>
          </section>
        </main>
        <div className="mt-auto w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export const EcommerceUseCase = () => {
  return (
    <div className="text-black text-xs not-italic normal-nums font-normal accent-auto bg-neutral-100 box-border caret-transparent block tracking-[normal] leading-[normal] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-sans_serif min-h-screen">
      <div className="relative flex min-h-screen flex-col bg-neutral-100">
        <Header />
        <main className="w-full max-w-5xl px-6 pb-20 pt-28 sm:px-10 lg:px-12 flex-1 mx-auto">
          <section className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 font-geist">
                Use Case
              </p>
              <h1 className="text-3xl font-semibold tracking-[-0.8px] text-zinc-900 font-geist sm:text-4xl">
                E-commerce automation with Adminix
              </h1>
              <p className="text-base text-zinc-600 font-geist">
                Automate order fulfilment and inventory management processes using
                Adminix and its AI capabilities
              </p>
            </div>
            <div>
              <a
                href={SIGNUP_URL}
                target="_blank"
                rel="noreferrer"
                className="relative text-blue-700 content-center items-center bg-blue-600 box-border caret-transparent gap-x-2.5 flex h-min justify-center gap-y-2.5 w-min overflow-hidden px-5 py-2.5 rounded-[10px] after:accent-auto after:box-border after:caret-transparent after:text-blue-700 after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:rounded-[10px] after:border-separate after:border-2 after:border-solid after:border-white/20 after:left-0 after:top-0 after:font-sans_serif"
              >
                <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex blur-0 shrink-0 h-min justify-center gap-y-2.5 w-min">
                  <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
                    <p className="text-white text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] text-nowrap font-geist">
                      Get Started
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </section>

          <section className="mt-12 flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold tracking-[-0.6px] text-zinc-900 font-geist">
                Challenge
              </h2>
              <p className="text-base text-zinc-600 font-geist">
                Ukrainian e-commerce company faced the challenge of managing order
                fulfilment and inventory management. Over the time, managing these
                processes manually became time-consuming, prone to errors, and difficult
                to scale for the company. That&#39;s why they seek an efficient and
                cost-effective solution that can automate these processes while reducing
                the need for manual intervention.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold tracking-[-0.6px] text-zinc-900 font-geist">
                Solution
              </h2>
              <p className="text-base text-zinc-600 font-geist">
                Adminix provided efficient solution to this challenge by providing custom
                automated workflows that eliminated a need in developer engagement and
                allowed this e-commerce company to focus more on core business activities.
                Using Adminix, the e-commerce company leveraged Open AI and AWS AI
                capabilities to add intelligent automation to their processes, including
                predicting demand and automating inventory management. With Adminix, this
                company improved the accuracy, speed and scalability of their order
                fulfilment and inventory management processes.
              </p>
              <p className="text-base text-zinc-600 font-geist">
                Using Adminix, the e-commerce company can also leverage Open AI and AWS AI
                services to add intelligent automation to their processes, including
                predicting demand and automating inventory management. With Adminix, the
                e-commerce company can improve the accuracy, speed, and scalability of
                their order fulfilment and inventory management processes.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold tracking-[-0.6px] text-zinc-900 font-geist">
                Results
              </h2>
              <p className="text-base text-zinc-600 font-geist">
                By implementing Adminix&#39;s automation solution, the e-commerce company
                achieved several benefits, including:
              </p>
              <ul className="list-disc pl-6 text-base text-zinc-600 font-geist space-y-2">
                <li>
                  Reduced operational costs: By automating their processes, the e-commerce
                  company significantly reduced the costs associated with manual work, such
                  as developer labor costs.
                </li>
                <li>
                  Improved accuracy: Adminix&#39;s AI capabilities reduced errors in order
                  fulfilment and inventory management, improved the accuracy of the process
                  by 90%.
                </li>
                <li>
                  Increased scalability: With Adminix&#39;s automation solution, the
                  e-commerce company scaled their processes without the need for additional
                  resources.
                </li>
                <li>
                  Enhanced customer experience: By improving the accuracy and speed of order
                  fulfilment, this company now provides a better customer experience, leading
                  to 35% increase in customer satisfaction and loyalty.
                </li>
              </ul>
            </div>
          </section>
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
