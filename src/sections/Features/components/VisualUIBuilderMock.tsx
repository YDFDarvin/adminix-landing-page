export const VisualUIBuilderMock = () => {
  return (
    <div className="relative h-full w-full select-none overflow-hidden rounded-[10px] bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),_transparent_60%)]" />
      <div className="relative flex h-full w-full">
        <div className="flex w-[36%] flex-col border-r border-slate-200 bg-white text-[9px] text-slate-700 sm:text-[10px]">
          <div className="border-b border-slate-200 px-3 py-2 sm:px-4 sm:py-3">
            <div className="text-[10px] font-semibold text-slate-800 sm:text-[11px]">Components</div>
            <div className="text-[8px] text-slate-400 sm:text-[9px]">Drag components to canvas</div>
          </div>
          <div className="border-b border-slate-200 px-3 py-2 sm:px-4 sm:py-3">
            <div className="text-[9px] font-semibold text-slate-400">LAYOUT</div>
            <div className="mt-1.5 space-y-1.5 sm:mt-2 sm:space-y-2">
              <div className="flex items-center gap-1.5 rounded-[10px] border border-slate-200 bg-white px-2 py-1.5 sm:gap-2 sm:px-3 sm:py-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-md bg-slate-100 text-slate-500 sm:h-6 sm:w-6">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true">
                    <rect x="5" y="5" width="14" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>
                <span className="text-[9px] font-semibold text-slate-700 sm:text-[10px]">Box</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-[10px] border border-slate-200 bg-white px-2 py-1.5 sm:gap-2 sm:px-3 sm:py-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-md bg-slate-100 text-slate-500 sm:h-6 sm:w-6">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true">
                    <rect x="5" y="6" width="14" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                    <line x1="5" y1="10" x2="19" y2="10" stroke="currentColor" strokeWidth="2" />
                    <line x1="10" y1="6" x2="10" y2="18" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>
                <span className="text-[9px] font-semibold text-slate-700 sm:text-[10px]">Table</span>
              </div>
            </div>
          </div>
          <div className="px-3 py-2 sm:px-4 sm:py-3">
            <div className="text-[9px] font-semibold text-slate-400">INPUT</div>
            <div className="mt-1.5 space-y-1.5 sm:mt-2 sm:space-y-2">
              {[
                {
                  label: "Text Input",
                  icon: (
                    <>
                      <rect x="5" y="7" width="14" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                      <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </>
                  ),
                },
                {
                  label: "Button",
                  icon: (
                    <rect x="6" y="8" width="12" height="8" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                  ),
                },
                {
                  label: "Toggle",
                  icon: (
                    <>
                      <rect x="4" y="9" width="16" height="6" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
                      <circle cx="9" cy="12" r="2" fill="currentColor" />
                    </>
                  ),
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-1.5 rounded-[10px] border border-slate-200 bg-white px-2 py-1.5 sm:gap-2 sm:px-3 sm:py-2"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-md bg-slate-100 text-slate-500 sm:h-6 sm:w-6">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true">
                      {item.icon}
                    </svg>
                  </span>
                  <span className="text-[9px] font-semibold text-slate-700 sm:text-[10px]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative flex-1 bg-white">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(148,163,184,0.2)_1px,_transparent_1px),_linear-gradient(0deg,_rgba(148,163,184,0.2)_1px,_transparent_1px)] bg-[size:22px_22px]" />
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[12%] top-[78%] z-10 h-6 w-6 text-slate-800 drop-shadow-[0_4px_10px_rgba(15,23,42,0.25)] animate-[uiPointer_4.5s_ease-in-out_infinite] sm:h-7 sm:w-7">
              <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
                <path
                  d="M6 3L18 15H12L9 21L6 3Z"
                  fill="currentColor"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-blue-500/70 animate-[uiClick_1.5s_ease-in-out_infinite]" />
            </div>
          </div>
          <div className="relative flex h-full w-full flex-col px-4 py-4 sm:px-8 sm:py-6">
            <div className="inline-flex w-[82%] items-center justify-center rounded-[12px] border border-dashed border-slate-300 bg-white px-3 py-2 text-[11px] font-semibold text-slate-800 shadow-[0_6px_18px_rgba(15,23,42,0.08)] sm:w-[76%] sm:px-4 sm:py-3 sm:text-[13px]">
              Revenue Dashboard
            </div>
            <div className="mt-4 w-full rounded-[16px] border border-slate-200 bg-white p-3 shadow-[0_8px_24px_rgba(15,23,42,0.08)] sm:mt-6 sm:p-4">
              <div className="text-[9px] font-semibold text-slate-700 sm:text-[10px]">Revenue Chart</div>
              <div className="mt-2 w-full rounded-[10px] border border-slate-100 bg-slate-50/70 p-2.5 sm:mt-3 sm:p-3">
                <div className="flex h-5 items-center justify-between text-[8px] text-slate-400">
                  <span>$20k</span>
                  <span>$40k</span>
                  <span>$60k</span>
                </div>
                <div className="relative mt-2 h-[76px] w-full sm:h-[88px]">
                  <svg viewBox="0 0 240 88" className="h-full w-full" aria-hidden="true">
                    <defs>
                      <linearGradient id="revenueLine" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0" stopColor="#60A5FA" />
                        <stop offset="1" stopColor="#2563EB" />
                      </linearGradient>
                      <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="rgba(59,130,246,0.28)" />
                        <stop offset="1" stopColor="rgba(59,130,246,0)" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M2 78 C 20 62, 34 64, 48 52 C 62 40, 78 44, 94 30 C 110 16, 126 22, 144 14 C 162 6, 178 18, 196 10 C 214 2, 230 8, 238 4 L 238 86 L 2 86 Z"
                      fill="url(#revenueFill)"
                    />
                    <path
                      d="M2 78 C 20 62, 34 64, 48 52 C 62 40, 78 44, 94 30 C 110 16, 126 22, 144 14 C 162 6, 178 18, 196 10 C 214 2, 230 8, 238 4"
                      fill="none"
                      stroke="url(#revenueLine)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    {[
                      { cx: 48, cy: 52 },
                      { cx: 94, cy: 30 },
                      { cx: 144, cy: 14 },
                      { cx: 196, cy: 10 },
                    ].map((point) => (
                      <circle
                        key={`${point.cx}-${point.cy}`}
                        cx={point.cx}
                        cy={point.cy}
                        r="3.5"
                        fill="#2563EB"
                        stroke="#fff"
                        strokeWidth="2"
                      />
                    ))}
                  </svg>
                </div>
                <div className="mt-2 flex items-center justify-between text-[8px] text-slate-400">
                  <span>Jan</span>
                  <span>Mar</span>
                  <span>May</span>
                  <span>Jul</span>
                  <span>Sep</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`@keyframes uiPointer {
          0% { transform: translate(0, 0) scale(1); opacity: 0; }
          12% { opacity: 1; }
          60% { transform: translate(64px, -96px) scale(1); opacity: 1; }
          70% { transform: translate(64px, -96px) scale(0.96); }
          100% { transform: translate(104px, -140px) scale(0.98); opacity: 0; }
        }
        @keyframes uiClick {
          0%, 60% { transform: scale(0.6); opacity: 0; }
          70% { transform: scale(1); opacity: 0.9; }
          90% { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(0.6); opacity: 0; }
        }`}
      </style>
    </div>
  );
};
