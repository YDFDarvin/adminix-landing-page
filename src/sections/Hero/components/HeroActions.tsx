import { useEffect, useState } from "react";
import { SIGNUP_URL } from "@/constants/urls";

const promptSentences = [
  "Build an automated workflow to sync leads across your tools.",
  "Design a UI builder layout for your new onboarding flow.",
  "Spin up a managed database service for your next app.",
];

export const HeroActions = () => {
  const [prompt, setPrompt] = useState("");
  const [debouncedPrompt, setDebouncedPrompt] = useState("");
  const isStartDisabled = debouncedPrompt.trim().length === 0;
  const [animatedText, setAnimatedText] = useState("");
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "hold" | "deleting" | "gap">(
    "typing",
  );

  useEffect(() => {
    const currentSentence = promptSentences[sentenceIndex];
    let timer: ReturnType<typeof setTimeout> | undefined;

    if (phase === "typing") {
      if (animatedText.length < currentSentence.length) {
        timer = setTimeout(() => {
          setAnimatedText(currentSentence.slice(0, animatedText.length + 1));
        }, 35);
      } else {
        timer = setTimeout(() => setPhase("hold"), 2000);
      }
    }

    if (phase === "hold") {
      timer = setTimeout(() => setPhase("deleting"), 2000);
    }

    if (phase === "deleting") {
      if (animatedText.length > 0) {
        timer = setTimeout(() => {
          setAnimatedText(currentSentence.slice(0, animatedText.length - 1));
        }, 22);
      } else {
        setPhase("gap");
      }
    }

    if (phase === "gap") {
      timer = setTimeout(() => {
        setSentenceIndex((index) => (index + 1) % promptSentences.length);
        setPhase("typing");
      }, 2000);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [animatedText, phase, sentenceIndex]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedPrompt(prompt);
    }, 300);

    return () => clearTimeout(timer);
  }, [prompt]);

  return (
    <div className="mt-10 relative content-center items-center box-border gap-x-4 flex flex-col shrink-0 h-min justify-center gap-y-4 w-full">
      <div className="relative content-center items-center bg-white shadow-[rgba(0,0,0,0.03)_0px_1px_20px_0px] box-border gap-x-3 flex flex-col shrink-0 h-min justify-center gap-y-3 w-full max-w-[704px] overflow-hidden px-4 pt-6 pb-3 rounded-[32px] md:px-5 md:pt-7 md:pb-3.5">
        <div className="relative box-border flex flex-col shrink-0 justify-start w-full">
          <label className="sr-only" htmlFor="hero-prompt">
            Prompt
          </label>
          <input
            id="hero-prompt"
            type="text"
            placeholder={animatedText}
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
            className="mt-1 w-full bg-transparent text-[15px] font-medium text-zinc-900 placeholder:text-zinc-500/70 outline-none caret-blue-600 leading-[21px] font-geist md:text-base"
          />
        </div>
        <div className="relative content-center items-center box-border gap-x-2.5 flex shrink-0 h-min justify-between gap-y-2.5 w-full flex-wrap">
          <div className="relative content-center items-center box-border gap-x-2 flex shrink-0 h-min justify-start gap-y-2 w-min">
            <div className="relative flex items-center">
              <div className="absolute right-0 translate-x-1/2 -top-1 z-10 rounded-full bg-blue-600 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.08em] text-white font-geist shadow-[rgba(18,109,251,0.25)_0px_4px_10px_0px]">
                soon
              </div>
              <button
                type="button"
                disabled
                className="relative content-center items-center bg-neutral-100 text-zinc-400 shadow-[rgba(0,0,0,0.04)_0px_1px_8px_0px] box-border gap-x-2 flex h-9 justify-center gap-y-2 w-min px-3 rounded-full text-sm font-medium font-geist cursor-not-allowed opacity-70"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-zinc-200 bg-white">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    className="h-3.5 w-3.5 text-zinc-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path d="M10 4.5v11M4.5 10h11" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="hidden sm:inline">Attach</span>
              </button>
            </div>
          </div>
          <div className="relative content-center items-center box-border gap-x-2 flex shrink-0 h-min justify-end gap-y-2 w-min">
            <a
              href={isStartDisabled ? undefined : SIGNUP_URL}
              target={isStartDisabled ? undefined : "_blank"}
              rel={isStartDisabled ? undefined : "noreferrer"}
              aria-disabled={isStartDisabled}
              className={`relative content-center items-center box-border gap-x-2 flex h-9 justify-center gap-y-2 w-min px-3.5 rounded-full text-sm font-medium font-geist transition-[background-color,box-shadow,opacity,transform] duration-200 ease-out ${
                isStartDisabled
                  ? "bg-blue-600/50 text-white/70 shadow-[rgba(18,109,251,0.12)_0px_6px_18px_0px] cursor-not-allowed pointer-events-none opacity-80"
                  : "bg-blue-600 text-white shadow-[rgba(18,109,251,0.2)_0px_6px_18px_0px] active:scale-[0.98]"
              }`}
            >
              <span className="hidden sm:inline">Build</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 text-white -rotate-45"
                fill="currentColor"
              >
                <path d="M2 3.25 22.5 12 2 20.75l3.75-7.75L2 3.25Z" />
                <path d="M6.4 12.1 2.9 10.6 19.6 12 2.9 13.4l3.5-1.3Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
