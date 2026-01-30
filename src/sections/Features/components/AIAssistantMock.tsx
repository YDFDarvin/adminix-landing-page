import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import SendIcon from "@mui/icons-material/Send";
import ViewInArIcon from "@mui/icons-material/ViewInAr";

export const AIAssistantMock = () => {
  return (
    <div className="relative h-full w-full select-none overflow-hidden rounded-[10px] bg-[#0f131b]">
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
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500/80 text-white">
              <AutoAwesomeIcon fontSize="inherit" />
            </span>
            <div className="flex-1 rounded-xl border border-white/5 bg-white/5 px-3 py-2.5 text-[11px] leading-4 text-slate-100">
              Hi! I can help you generate applications and workflows. Describe what you want to build,
              and I'll create it for you.
            </div>
          </div>
          <div className="flex items-start justify-end gap-2">
            <div
              className="max-w-[75%] translate-x-2 rounded-xl border border-blue-400/40 bg-blue-500/80 px-3 py-2.5 text-[11px] leading-4 text-white opacity-0 shadow-[0_8px_24px_rgba(59,130,246,0.35)]"
              style={{ animation: "assistantSlideIn 6s ease-in-out infinite" }}
            >
              Build a CRM dashboard.
            </div>
            <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/10 text-[9px] font-semibold text-slate-200">
              You
            </span>
          </div>
        </div>
        <div
          className="relative mt-1 space-y-1.5"
          style={{ animation: "assistantTip 6s ease-in-out infinite" }}
        >
          <div className="flex items-center gap-2 text-[10.5px] font-medium text-slate-300">
            <LightbulbOutlinedIcon className="text-[3px]" />
            Try these:
          </div>
          <div
            className="relative rounded-[12px] border border-white/10 bg-white/5 px-3.5 py-2.5 text-[11px] font-semibold text-white"
          >
            Build a CRM dashboard
            <span
              className="pointer-events-none absolute left-1 top-1.5 h-5 w-5 text-slate-100"
              style={{ animation: "assistantPointer 6s ease-in-out infinite" }}
            >
              <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
                <path
                  d="M6 3L18 15H12L9 21L6 3Z"
                  fill="currentColor"
                  stroke="rgba(15,23,42,0.8)"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                className="absolute -right-1 -bottom-1 h-2.5 w-2.5 rounded-full bg-blue-400/80"
                style={{ animation: "assistantClick 6s ease-in-out infinite" }}
              />
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
        {`@keyframes assistantSlideIn {
          0% { opacity: 0; transform: translateX(28px) scale(0.98); }
          64% { opacity: 0; transform: translateX(28px) scale(0.98); }
          80% { opacity: 1; transform: translateX(0) scale(1); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes assistantTip {
          0% { opacity: 1; transform: translateY(0); }
          48% { opacity: 1; transform: translateY(0); }
          58% { opacity: 0; transform: translateY(4px); }
          100% { opacity: 0; transform: translateY(4px); }
        }
        @keyframes assistantPointer {
          0% { opacity: 0; transform: translate(-8px, -6px) scale(0.9); }
          12% { opacity: 1; }
          42% { transform: translate(46px, 4px) scale(1); opacity: 1; }
          55% { transform: translate(46px, 4px) scale(0.96); opacity: 1; }
          100% { opacity: 0; transform: translate(46px, 4px) scale(0.96); }
        }
        @keyframes assistantClick {
          0%, 46% { transform: scale(0.2); opacity: 0; }
          54% { transform: scale(1); opacity: 0.85; }
          66% { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(0.2); opacity: 0; }
        }`}
      </style>
    </div>
  );
};
