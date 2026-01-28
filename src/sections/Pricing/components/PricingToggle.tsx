import { useEffect, useState } from "react";
import { PricingCard } from "@/sections/Pricing/components/PricingCard";

export const PricingToggle = () => {
  const monthlyPrices = { starter: 45, advanced: 99, pro: 599 };
  const yearlyPrices = {
    starter: Math.round(monthlyPrices.starter * 0.85),
    advanced: Math.round(monthlyPrices.advanced * 0.85),
    pro: Math.round(monthlyPrices.pro * 0.85),
  };
  const [isYearly, setIsYearly] = useState(true);
  const formatPrice = (value: number) => `$${value}`;
  const prices = isYearly ? yearlyPrices : monthlyPrices;
  const displayPrices = {
    starter: formatPrice(prices.starter),
    advanced: formatPrice(prices.advanced),
    pro: formatPrice(prices.pro),
  };
  const [prevPrices, setPrevPrices] = useState(displayPrices);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const renderAnimatedPrice = (price: string, prevPrice: string, keyBase: string) => (
    <span className="price-flip-stack">
      <span className="price-flip-placeholder">{price}</span>
      <span key={`${keyBase}-out-${isYearly}`} className={hasMounted ? "price-flip-out" : ""}>
        {prevPrice}
      </span>
      <span key={`${keyBase}-in-${isYearly}`} className={hasMounted ? "price-flip-in" : ""}>
        {price}
      </span>
    </span>
  );

  return (
    <div className="relative content-center items-center box-border caret-transparent gap-x-10 flex flex-col h-min justify-center gap-y-10 w-full">
      <div className="relative box-border caret-transparent shrink-0">
        <div className="relative content-center items-center box-border caret-transparent gap-x-6 flex flex-col h-min justify-center gap-y-6 w-min">
          <div className="relative content-center items-center box-border caret-transparent gap-x-5 flex shrink-0 h-min justify-center gap-y-4 w-min px-1 overflow-clip">
            <div
              className={`relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap transition-colors duration-300 ${
                isYearly ? "text-zinc-400" : "text-black"
              }`}
            >
              <h6 className="text-inherit text-lg font-medium box-border caret-transparent tracking-[-0.36px] leading-[25.2px] text-nowrap font-geist">
                Monthly
              </h6>
            </div>
            <div className="relative box-border caret-transparent shrink-0">
              <button
                type="button"
                aria-pressed={isYearly}
                onClick={() => {
                  setPrevPrices(displayPrices);
                  setIsYearly(!isYearly);
                }}
                className={`relative content-center items-center box-border caret-transparent gap-x-2.5 flex h-12 justify-center gap-y-2.5 w-[90px] overflow-clip rounded-[40px] transition-all duration-300 ${
                  isYearly ? "bg-blue-600" : "bg-neutral-200"
                } after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border after:rounded-[40px] after:border-separate after:border-solid after:border-white/20 after:left-0 after:top-0 after:font-sans_serif`}
              >
                <div
                  className={`absolute bg-white box-border caret-transparent shrink-0 w-10 z-[1] overflow-clip rounded-[30px] inset-y-1 left-1 transition-transform duration-300 ${
                    isYearly ? "translate-x-[42px]" : "translate-x-0"
                  }`}
                ></div>
              </button>
            </div>
            <div
              className={`relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap transition-colors duration-300 ${
                isYearly ? "text-black" : "text-zinc-400"
              }`}
            >
              <h6 className="text-inherit text-lg font-medium box-border caret-transparent tracking-[-0.36px] leading-[25.2px] text-nowrap font-geist">
                Yearly
              </h6>
            </div>
          </div>
          <div
            className={`relative content-center items-center self-stretch box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 transition-opacity duration-300 ${
              isYearly ? "opacity-100" : "opacity-40"
            }`}
          >
            <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
              <p className="text-zinc-600/80 text-sm font-medium box-border caret-transparent tracking-[-0.28px] leading-[18.2px] text-nowrap font-geist">
                Save
              </p>
            </div>
            <div className="relative content-center items-center bg-blue-600 box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-min overflow-clip px-2 py-1 rounded-[50px] after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border after:rounded-[50px] after:border-separate after:border-solid after:border-white/20 after:left-0 after:top-0 after:font-sans_serif">
              <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
                <p className="text-white text-sm font-medium box-border caret-transparent tracking-[-0.28px] leading-[18.2px] text-nowrap font-geist">
                  15%
                </p>
              </div>
            </div>
            <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
              <p className="text-zinc-600/80 text-sm font-medium box-border caret-transparent tracking-[-0.28px] leading-[18.2px] text-nowrap font-geist">
                With yearly
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative content-end items-end box-border caret-transparent gap-x-5 flex flex-col shrink-0 h-min justify-center gap-y-8 w-full md:gap-y-6 lg:gap-y-0 lg:flex-row">
        <div className="relative box-border caret-transparent basis-auto grow-0 shrink-0 w-full lg:basis-0 lg:grow lg:w-px">
          <div className="relative content-center items-center bg-white shadow-[rgba(0,0,0,0.03)_0px_1px_20px_0px] box-border caret-transparent gap-x-6 flex flex-col h-min justify-center gap-y-6 w-full overflow-hidden rounded-[20px]">
            <PricingCard
              planName="Starter"
              price={renderAnimatedPrice(displayPrices.starter, prevPrices.starter, "starter")}
              description="Best option for personal use & for your next project"
              features={[
                "1 active projects",
                "5 active workflows",
                "1 subflows per workflow",
                "10k executions",
                "1 members per project",
                "10 entities",
                "10k database records",
                "1 GB of storage",
              ]}
              buttonLabel="Start free trial"
            />
          </div>
        </div>
        <div className="relative box-border caret-transparent basis-auto grow-0 shrink-0 w-full lg:basis-0 lg:grow lg:w-px">
          <div className="relative content-center items-center bg-blue-600 shadow-[rgba(18,109,251,0.14)_0px_0.796192px_0.557334px_-0.6875px,rgba(18,109,251,0.13)_0px_2.41451px_1.69015px_-1.375px,rgba(18,109,251,0.13)_0px_6.38265px_4.46786px_-2.0625px,rgba(18,109,251,0.11)_0px_20px_14px_-2.75px,rgba(18,109,251,0.17)_0.722625px_0px_0.722625px_-1.16667px,rgba(18,109,251,0.15)_2.74624px_0px_2.74624px_-2.33333px,rgba(18,109,251,0.08)_12px_0px_12px_-3.5px,rgba(18,109,251,0.17)_-0.722625px_0px_0.722625px_-1.16667px,rgba(18,109,251,0.15)_-2.74624px_0px_2.74624px_-2.33333px,rgba(18,109,251,0.08)_-12px_0px_12px_-3.5px] box-border caret-transparent gap-x-2 flex flex-col h-min justify-start gap-y-2 w-full overflow-hidden pt-2 pb-1 px-1 rounded-[20px] after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border after:rounded-[20px] after:border-separate after:border-solid after:border-white/20 after:left-0 after:top-0 after:font-sans_serif">
            <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
              <p className="text-white text-sm font-medium box-border caret-transparent tracking-[-0.28px] leading-[18.2px] text-nowrap font-geist">
                Most Popular
              </p>
            </div>
            <PricingCard
              planName="Advanced"
              price={renderAnimatedPrice(displayPrices.advanced, prevPrices.advanced, "advanced")}
              description="Best for startups, SMBs and fast growing projects"
              features={[
                "300 AI assistant requests",
                "5 active projects",
                "Unlimited active workflows",
                "10 subflows per workflow",
                "100k executions",
                "5 members per project",
                "20 entities",
                "50k database records",
                "10 GB of storage",
              ]}
              variant="bg-white rounded-[18px]"
              buttonLabel="Start free trial"
            />
          </div>
        </div>
        <div className="relative box-border caret-transparent basis-auto grow-0 shrink-0 w-full lg:basis-0 lg:grow lg:w-px">
          <div className="relative content-center items-center bg-white shadow-[rgba(0,0,0,0.03)_0px_1px_20px_0px] box-border caret-transparent gap-x-6 flex flex-col h-min justify-center gap-y-6 w-full overflow-hidden rounded-[20px]">
            <PricingCard
              planName="Pro"
              price={renderAnimatedPrice(displayPrices.pro, prevPrices.pro, "pro")}
              description="Perfect for scaling businesses and complex projects"
              features={[
                "300 AI assistant requests",
                "10 active projects",
                "30 active workflows",
                "Unlimited subflows",
                "300k executions",
                "10 members per project",
                "Unlimited entities",
                "100k database records",
                "100 GB of storage",
              ]}
              buttonLabel="Start free trial"
            />
          </div>
        </div>
        <div className="relative box-border caret-transparent basis-auto grow-0 shrink-0 w-full lg:basis-0 lg:grow lg:w-px">
          <div className="relative content-center items-center bg-white shadow-[rgba(0,0,0,0.03)_0px_1px_20px_0px] box-border caret-transparent gap-x-6 flex flex-col h-min justify-center gap-y-6 w-full overflow-hidden rounded-[20px]">
            <PricingCard
              planName="Enterprise"
              price="Custom"
              priceSuffix=""
              description="Perfect for secure, scalable enterprise automation"
              features={[
                "1000 AI assistant requests",
                "Unlimited active projects",
                "Unlimited active workflows",
                "Unlimited subflows",
                "Unlimited executions",
                "Unlimited members",
                "Unlimited entities",
                "Unlimited database records",
                "Unlimited storage",
              ]}
              buttonLabel="Start free trial"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
