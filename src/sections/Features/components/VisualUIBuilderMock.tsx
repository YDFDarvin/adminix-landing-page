export const VisualUIBuilderMock = () => {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[10px] bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),_transparent_60%)]" />
      <div className="relative flex h-full w-full">
        <div className="flex w-[36%] flex-col border-r border-slate-200 bg-white text-[10px] text-slate-700">
          <div className="border-b border-slate-200 px-4 py-3">
            <div className="text-[11px] font-semibold text-slate-800">Components</div>
            <div className="text-[9px] text-slate-400">Drag components to canvas</div>
          </div>
          <div className="border-b border-slate-200 px-4 py-3">
            <div className="text-[9px] font-semibold text-slate-400">LAYOUT</div>
            <div className="mt-2 space-y-2">
              <div className="flex items-center gap-2 rounded-[10px] border border-slate-200 bg-white px-3 py-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-100 text-slate-500">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                    <rect x="5" y="5" width="14" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>
                <span className="text-[10px] font-semibold text-slate-700">Container</span>
              </div>
              <div className="flex items-center gap-2 rounded-[10px] border border-slate-200 bg-white px-3 py-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-100 text-slate-500">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                    <rect x="5" y="6" width="14" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                    <line x1="5" y1="10" x2="19" y2="10" stroke="currentColor" strokeWidth="2" />
                    <line x1="10" y1="6" x2="10" y2="18" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>
                <span className="text-[10px] font-semibold text-slate-700">Table</span>
              </div>
            </div>
          </div>
          <div className="px-4 py-3">
            <div className="text-[9px] font-semibold text-slate-400">INPUT</div>
            <div className="mt-2 space-y-2">
              {[
                { label: "Text Input" },
                { label: "Button" },
                { label: "Toggle" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 rounded-[10px] border border-slate-200 bg-white px-3 py-2"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-100 text-slate-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                  </span>
                  <span className="text-[10px] font-semibold text-slate-700">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative flex-1 bg-white">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(148,163,184,0.2)_1px,_transparent_1px),_linear-gradient(0deg,_rgba(148,163,184,0.2)_1px,_transparent_1px)] bg-[size:22px_22px]" />
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[32%] top-[70%] h-6 w-6 text-slate-600 animate-[uiPointer_4.5s_ease-in-out_infinite]">
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
          <div className="relative flex h-full w-full flex-col px-8 py-6">
            <div className="inline-flex w-[76%] items-center justify-center rounded-[12px] border border-dashed border-slate-300 bg-white px-4 py-3 text-[13px] font-semibold text-slate-800 shadow-[0_6px_18px_rgba(15,23,42,0.08)]">
              Revenue Dashboard
            </div>
            <div className="mt-6 w-full rounded-[16px] border border-slate-200 bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
              <div className="text-[10px] font-semibold text-slate-700">Revenue Chart</div>
              <div className="mt-3 w-full rounded-[10px] border border-slate-100 bg-slate-50/70 p-3">
                <div className="flex h-5 items-center justify-between text-[8px] text-slate-400">
                  <span>$20k</span>
                  <span>$40k</span>
                  <span>$60k</span>
                </div>
                <div className="relative mt-2 h-[88px] w-full">
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
          15% { opacity: 1; }
          55% { transform: translate(34px, -48px) scale(1); opacity: 1; }
          65% { transform: translate(34px, -48px) scale(0.96); }
          100% { transform: translate(70px, -92px) scale(0.98); opacity: 0; }
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
