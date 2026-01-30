import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import SendIcon from "@mui/icons-material/Send";
import ViewInArIcon from "@mui/icons-material/ViewInAr";

export const AIAssistantMock = () => {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[10px] bg-[#0f131b]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(48,70,120,0.18),_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(36,48,86,0.4),_transparent_55%)]" />
      <div className="relative flex h-full w-full flex-col gap-3 p-4 text-xs text-slate-200">
        <div className="flex gap-2 rounded-[14px] border border-white/10 bg-[#121725] p-1.5">
          <div className="flex flex-1 items-center gap-2 rounded-[12px] bg-[#0f1422] px-3 py-2 text-[11px] font-medium text-slate-300">
            <span className="flex h-6 w-6 items-center justify-center rounded-[10px] bg-white/5 text-slate-300">
              <ViewInArIcon fontSize="inherit" />
            </span>
            Components
          </div>
          <div className="flex flex-1 items-center gap-2 rounded-[12px] bg-gradient-to-r from-blue-500 to-blue-400 px-3 py-2 text-[11px] font-semibold text-white shadow-[0_6px_18px_rgba(59,130,246,0.35)]">
            <span className="flex h-6 w-6 items-center justify-center rounded-[10px] bg-white/15 text-white">
              <AutoAwesomeIcon fontSize="inherit" />
            </span>
            AI Assistant
          </div>
        </div>
        <div className="flex items-start gap-2">
          <span className="mt-0.5 flex h-6 w-6 items-center justify-center text-blue-400">
            <AutoAwesomeIcon fontSize="inherit" />
          </span>
          <div>
            <p className="text-[12px] font-semibold text-white">AI Assistant</p>
            <p className="text-[10px] text-slate-500">
              Describe what you want to build
            </p>
          </div>
        </div>
        <div className="-mx-4 border-t border-white/5" />
        <div className="relative flex gap-3">
          <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500/80 text-white">
            <AutoAwesomeIcon fontSize="inherit" />
          </span>
          <div className="relative flex-1">
            <div className="rounded-xl border border-white/5 bg-white/5 px-3 py-2.5 text-[11px] leading-4 text-slate-100 animate-[assistantFade_4.2s_ease-in-out_infinite]">
              Hi! I can help you generate applications and workflows. Describe what you want to build,
              and I'll create it for you.
            </div>
            <div className="absolute inset-0 flex items-start justify-end">
              <div className="max-w-[85%] rounded-xl border border-white/5 bg-white/5 px-3 py-2.5 text-[11px] leading-4 text-slate-100 shadow-[0_8px_24px_rgba(15,23,42,0.35)] animate-[assistantSlideIn_4.2s_ease-in-out_infinite]">
                Great -- I can assemble a dashboard layout and data schema for you. Want a CRM or
                analytics view?
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-1 space-y-1.5">
          <div className="flex items-center gap-2 text-[10.5px] font-medium text-slate-300">
            <LightbulbOutlinedIcon className="text-[3px]" />
            Try these:
          </div>
          <div className="relative rounded-[12px] border border-white/10 bg-white/5 px-3.5 py-2.5 text-[11px] font-semibold text-white">
            Build a CRM dashboard
            <span className="pointer-events-none absolute left-1 top-1.5 h-5 w-5 text-slate-100 animate-[assistantPointer_4.2s_ease-in-out_infinite]">
              <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
                <path
                  d="M6 3L18 15H12L9 21L6 3Z"
                  fill="currentColor"
                  stroke="rgba(15,23,42,0.8)"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="absolute -right-1 -bottom-1 h-2.5 w-2.5 rounded-full bg-blue-400/80 animate-[assistantClick_4.2s_ease-in-out_infinite]" />
            </span>
          </div>
        </div>
        <div className="mt-auto flex items-center gap-2">
          <div className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-[10px] text-slate-400">
            Describe the application/workflow...
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500 text-white">
            <SendIcon fontSize="inherit" />
          </div>
        </div>
      </div>
      <style>
        {`@keyframes assistantFade {
          0% { opacity: 1; transform: translateX(0) scale(1); }
          40% { opacity: 1; transform: translateX(0) scale(1); }
          55% { opacity: 0; transform: translateX(-8px) scale(0.96); }
          100% { opacity: 0; transform: translateX(-8px) scale(0.96); }
        }
        @keyframes assistantSlideIn {
          0% { opacity: 0; transform: translateX(28px) scale(0.98); }
          45% { opacity: 0; transform: translateX(28px) scale(0.98); }
          70% { opacity: 1; transform: translateX(0) scale(1); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes assistantPointer {
          0% { opacity: 0; transform: translate(0, 0) scale(0.9); }
          15% { opacity: 1; }
          45% { transform: translate(56px, 6px) scale(1); opacity: 1; }
          60% { transform: translate(56px, 6px) scale(0.96); opacity: 1; }
          100% { opacity: 0; transform: translate(56px, 6px) scale(0.96); }
        }
        @keyframes assistantClick {
          0%, 50% { transform: scale(0.2); opacity: 0; }
          58% { transform: scale(1); opacity: 0.8; }
          75% { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(0.2); opacity: 0; }
        }`}
      </style>
    </div>
  );
};

