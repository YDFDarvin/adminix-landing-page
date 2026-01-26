import { useEffect, useState } from "react";

const promptSentences = [
  "Build an automated workflow to sync leads across your tools.",
  "Design a UI builder layout for your new onboarding flow.",
  "Spin up a managed database service for your next app.",
];

export const HeroActions = () => {
  const [prompt, setPrompt] = useState("");
  const isStartDisabled = prompt.trim().length === 0;
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
            <button
              type="button"
              className="relative content-center items-center bg-neutral-100 text-zinc-700 shadow-[rgba(0,0,0,0.05)_0px_1px_8px_0px] box-border gap-x-2 flex h-9 justify-center gap-y-2 w-min px-3 rounded-full text-sm font-medium font-geist"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="h-4 w-4 text-zinc-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path
                  d="M7 15.5H6c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h8c1.7 0 3 1.3 3 3v5.5c0 1.7-1.3 3-3 3h-1l-3 2-3-2Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="hidden sm:inline">Chat</span>
            </button>
            <button
              type="button"
              disabled={isStartDisabled}
              aria-disabled={isStartDisabled}
              className={`relative content-center items-center box-border gap-x-2 flex h-9 justify-center gap-y-2 w-min px-3.5 rounded-full text-sm font-medium font-geist ${
                isStartDisabled
                  ? "bg-blue-600/50 text-white/70 shadow-[rgba(18,109,251,0.12)_0px_6px_18px_0px] cursor-not-allowed opacity-80"
                  : "bg-blue-600 text-white shadow-[rgba(18,109,251,0.2)_0px_6px_18px_0px]"
              } transition-[background-color,box-shadow,opacity,transform] duration-200 ease-out active:scale-[0.98]`}
            >
              <span className="hidden sm:inline">Start</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="h-4 w-4 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M10 4.5v11M5.5 10H14.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
