import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import HttpOutlinedIcon from "@mui/icons-material/HttpOutlined";
import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined";
import MoveDownOutlinedIcon from "@mui/icons-material/MoveDownOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";

export const WorkflowAutomationMock = () => {
  return (
    <div className="relative h-full w-full select-none overflow-hidden rounded-[10px] bg-[#0c111b] text-[10px] text-slate-200">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(15,23,42,0.35),_rgba(15,23,42,0.7))]" />
      <div className="relative flex h-full w-full">
        <div className="flex w-[48%] flex-col border-r border-white/10 bg-[#0b101a]">
          <div className="border-b border-white/10 px-2 py-2">
            <div className="grid w-full grid-cols-2 items-center gap-1 rounded-[12px] border border-white/10 bg-[#121826] p-1 text-[9px] font-semibold text-slate-300 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.2)]">
              <div className="flex min-h-[34px] items-center justify-center gap-1 rounded-[10px] bg-blue-500 px-2 py-1.5 text-white leading-none shadow-[0_8px_18px_rgba(59,130,246,0.3)]">
                <span className="flex shrink-0 items-center justify-center">
                  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden="true">
                    <circle cx="8" cy="8" r="2.2" fill="#ffffff" />
                    <circle cx="16" cy="16" r="2.2" fill="#ffffff" />
                    <rect x="7.4" y="10.2" width="1.2" height="5.6" rx="0.6" fill="#ffffff" />
                    <rect x="15.4" y="8" width="1.2" height="5.6" rx="0.6" fill="#ffffff" />
                  </svg>
                </span>
                Nodes
              </div>
              <div className="flex min-h-[34px] items-center justify-center gap-1 rounded-[10px] bg-[#1a2133] px-2 py-1.5 text-center text-[9px] leading-none text-slate-200">
                <span className="flex shrink-0 items-center justify-center">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                    <path
                      d="M12 3l2.2 4.4L19 9l-4.8 1.6L12 15l-2.2-4.4L5 9l4.8-1.6L12 3Z"
                      fill="#cbd5e1"
                    />
                  </svg>
                </span>
                <span className="whitespace-nowrap text-[9px]">AI Assistant</span>
              </div>
            </div>
          </div>
          <div className="border-b border-white/10 px-3 py-2">
            <div className="text-[10px] font-semibold text-slate-100">Automation Nodes</div>
            <div className="mt-1 text-[9px] text-slate-500">Drag nodes to workflow</div>
          </div>
          <div className="px-3 py-2">
            <div className="text-[9px] font-semibold tracking-[0.18em] text-slate-500">
              COMMON
            </div>
            <div className="mt-2 space-y-2">
              {[
                { label: "delete - entity", Icon: DeleteOutlineIcon },
                { label: "manual", Icon: EditOutlinedIcon },
                { label: "update - entity", Icon: LoopOutlinedIcon },
                { label: "get - entity", Icon: DownloadOutlinedIcon },
                { label: "http - in", Icon: HttpOutlinedIcon },
                { label: "webhook - in", Icon: HubOutlinedIcon },
                { label: "complete", Icon: DoneAllOutlinedIcon },
                { label: "comment", Icon: ChatBubbleOutlineIcon },
                { label: "render", Icon: MoveDownOutlinedIcon },
                { label: "change", Icon: CreateOutlinedIcon },
                { label: "create - entity", Icon: WidgetsOutlinedIcon },
              ].map(({ label, Icon }) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-[10px] border border-blue-400/40 bg-blue-500/90 px-2.5 py-2 text-[9px] font-semibold text-white shadow-[0_10px_18px_rgba(37,99,235,0.25)]"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-md bg-white/15 text-[10px]">
                      <Icon fontSize="inherit" />
                    </span>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex min-h-0 flex-1 flex-col">
          <div className="flex items-center justify-between border-b border-white/10 bg-[#0f1422] px-3 py-2 text-[10px] font-medium text-slate-300">
            <div className="flex w-[220px] items-center justify-center border-b-2 border-blue-500 bg-[#111827] px-4 py-1.5 text-slate-100 shadow-[0_8px_18px_rgba(37,99,235,0.25)]">
              <span>Automations</span>
              <span className="ml-2 text-[9px] text-slate-500">x</span>
            </div>
            <div className="ml-3 flex h-8 w-8 items-center justify-center rounded-[8px] border border-white/10 bg-[#0b101a] text-slate-300">
              +
            </div>
          </div>
          <div className="relative flex-1">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(148,163,184,0.08)_1px,_transparent_1px),_linear-gradient(0deg,_rgba(148,163,184,0.08)_1px,_transparent_1px)] bg-[size:18px_18px]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 py-6">
              <div className="relative w-[58%] rounded-[12px] border border-white/10 bg-[#111827] px-3 py-2 shadow-[0_10px_26px_rgba(15,23,42,0.6)]">
                <div className="flex items-center gap-2 text-[9px] font-semibold text-slate-100">
                  <span className="flex h-5 w-5 items-center justify-center rounded-md bg-emerald-500/20 text-emerald-200">
                    !
                  </span>
                  Form Submitted
                </div>
                <div className="mt-1 text-[8px] text-slate-400">Trigger when new lead arrives</div>
              </div>
              <div className="h-5 w-px bg-blue-400/40" />
              <div
                className="relative w-[58%] rounded-[12px] border border-blue-400/30 bg-[#0f172a] px-3 py-2 shadow-[0_12px_28px_rgba(59,130,246,0.22)]"
                style={{ animation: "workflowGlow 6s ease-in-out infinite" }}
              >
                <div className="flex items-center gap-2 text-[9px] font-semibold text-slate-100">
                  <span className="flex h-5 w-5 items-center justify-center rounded-md bg-blue-500/30 text-blue-200">
                    +
                  </span>
                  Create Record
                </div>
                <div className="mt-1 text-[8px] text-slate-400">Add lead to database</div>
              </div>
              <div className="h-5 w-px bg-blue-400/40" />
              <div className="relative w-[62%] rounded-[12px] border border-amber-400/30 bg-[#111827] px-3 py-2 shadow-[0_10px_26px_rgba(15,23,42,0.5)]">
                <div className="flex items-center gap-2 text-[9px] font-semibold text-slate-100">
                  <span className="flex h-5 w-5 items-center justify-center rounded-md bg-amber-500/25 text-amber-200">
                    ?
                  </span>
                  Check Score
                </div>
                <div className="mt-1 text-[8px] text-slate-400">Lead score &gt; 50?</div>
              </div>
              <div className="relative mt-2 flex w-full items-center justify-between px-6">
                <div className="flex w-[45%] flex-col items-center gap-2">
                  <span className="text-[8px] font-semibold text-slate-400">No</span>
                  <div className="w-full rounded-[12px] border border-white/10 bg-[#0f172a] px-3 py-2 text-[9px] font-semibold text-slate-100">
                    Webhook
                  </div>
                </div>
                <div className="flex w-[45%] flex-col items-center gap-2">
                  <span className="text-[8px] font-semibold text-slate-400">Yes</span>
                  <div className="w-full rounded-[12px] border border-white/10 bg-[#0f172a] px-3 py-2 text-[9px] font-semibold text-slate-100">
                    Send Email
                  </div>
                </div>
                <span
                  className="pointer-events-none absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-blue-500/70 shadow-[0_0_0_6px_rgba(59,130,246,0.2)]"
                  style={{ animation: "workflowDot 6s ease-in-out infinite" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`@keyframes workflowGlow {
          0% { box-shadow: 0 12px 28px rgba(59,130,246,0.15); }
          45% { box-shadow: 0 16px 32px rgba(59,130,246,0.35); }
          100% { box-shadow: 0 12px 28px rgba(59,130,246,0.15); }
        }
        @keyframes workflowDot {
          0%, 40% { transform: translateX(-50%) scale(0.6); opacity: 0; }
          55% { transform: translateX(-50%) scale(1); opacity: 1; }
          70% { transform: translateX(-50%) scale(1.6); opacity: 0; }
          100% { transform: translateX(-50%) scale(0.6); opacity: 0; }
        }`}
      </style>
    </div>
  );
};
