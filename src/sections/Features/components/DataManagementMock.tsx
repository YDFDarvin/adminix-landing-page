export const DataManagementMock = () => {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[10px] bg-white">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(15,23,42,0.04),_transparent_40%)]" />
      <div className="relative flex h-full w-full flex-col text-[10px] text-slate-700">
        <div className="flex items-center border-b border-slate-200 bg-white">
          <div className="flex flex-1 items-center">
            <div className="flex items-center justify-between gap-2 border-r border-slate-200 px-4 py-2 text-[11px] font-medium text-slate-500">
              <span>UI</span>
              <span className="text-[9px] text-slate-300">×</span>
            </div>
            <div className="flex items-center justify-between gap-2 border-b-2 border-b-blue-500 border-r border-r-slate-200 bg-blue-50 px-4 py-2 text-[11px] font-semibold text-slate-900">
              <span>DB</span>
              <span className="text-[9px] text-slate-300">×</span>
            </div>
            <div className="flex items-center justify-between gap-2 px-4 py-2 text-[11px] font-medium text-slate-500">
              <span>Automations</span>
              <span className="text-[9px] text-slate-300">×</span>
            </div>
          </div>
        </div>
        <div className="flex min-h-0 flex-1">
          <div className="flex w-[52%] flex-col border-r border-slate-200">
            <div className="flex items-center justify-between px-4 py-2 text-[10px] font-semibold text-slate-400">
              TABLES
              <span className="text-base font-semibold text-slate-400">+</span>
            </div>
            <div className="space-y-2 px-4 pb-3">
              <div className="flex items-center justify-between rounded-[10px] bg-blue-500 px-3 py-2 text-[11px] font-semibold text-white">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white/20 text-white">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                      <path
                        d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-4 0-7 2-7 5v1h14v-1c0-3-3-5-7-5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  Users
                </div>
                <span className="text-sm">›</span>
              </div>
              {[
                { label: "Products" },
                { label: "Orders" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-[10px] border border-slate-200 bg-white px-3 py-2 text-[11px] font-semibold text-slate-700"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-100 text-slate-500">
                      {item.label === "Products" ? (
                        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                          <path
                            d="M3.5 7.5 12 3l8.5 4.5-8.5 4.5L3.5 7.5Zm0 3.5L12 15l8.5-4v6L12 21l-8.5-4v-6Z"
                            fill="currentColor"
                          />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                          <path
                            d="M7 6h14l-2 8H8L7 6Zm0 0-1-3H3"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle cx="9" cy="19" r="1.5" fill="currentColor" />
                          <circle cx="17" cy="19" r="1.5" fill="currentColor" />
                        </svg>
                      )}
                    </span>
                    {item.label}
                  </div>
                  <span className="text-sm text-slate-400">›</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between border-t border-slate-200 px-4 py-2 text-[10px] font-semibold text-slate-400">
              FIELDS
              <span className="rounded-md bg-blue-500 px-2 py-1 text-[10px] font-semibold text-white">
                + Add
              </span>
            </div>
            <div className="space-y-2 px-4 pb-4">
              {[
                { title: "id", meta: "UUID • Primary key" },
                { title: "email", meta: "Email • User email address" },
                { title: "name", meta: "Text • Full name" },
                { title: "role", meta: "Select • User role (Admin, Editor, Viewer)" },
                { title: "created_at", meta: "Timestamp • Account creation date" },
                { title: "is_active", meta: "Boolean • Account status" },
              ].map((field, index) => (
                <div
                  key={field.title}
                  className="rounded-[12px] border border-slate-200 bg-white px-3 py-2"
                >
                  <div className="flex items-center justify-between text-[10px] font-semibold text-slate-800">
                    {field.title}
                    {index < 5 ? (
                      <span className="rounded-md bg-rose-100 px-1.5 py-0.5 text-[9px] font-semibold text-rose-500">
                        Required
                      </span>
                    ) : null}
                  </div>
                  <div className="text-[9px] text-slate-400">{field.meta}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex w-[48%] flex-col">
            <div className="border-b border-slate-200 px-3 py-2 text-[10px] font-semibold text-slate-700">
              Users - Data
            </div>
            <div className="border-b border-slate-200 px-3 py-2 text-[9px] text-slate-400">
              Click a field on the left to edit
            </div>
            <div className="grid grid-cols-2 border-b border-slate-200 text-[9px] font-semibold text-slate-500">
              <div className="border-r border-slate-200 px-3 py-2">name</div>
              <div className="px-3 py-2">email</div>
            </div>
            <div className="grid flex-1 grid-cols-2 text-[9px] text-slate-500">
              {[
                { name: "Avery Miles", email: "avery@adminix.ai" },
                { name: "Jordan Park", email: "jordan@adminix.ai" },
                { name: "Samira Iqbal", email: "samira@adminix.ai" },
                { name: "Leo Chen", email: "leo@adminix.ai" },
                { name: "Maya Patel", email: "maya@adminix.ai" },
                { name: "Noah Stone", email: "noah@adminix.ai" },
              ].flatMap((row, rowIndex, rows) => [
                <div
                  key={`name-${row.name}`}
                  className={`px-3 py-2 border-r border-slate-200 ${
                    rowIndex < rows.length - 1 ? "border-b border-slate-200" : ""
                  }`}
                >
                  {row.name}
                </div>,
                <div
                  key={`email-${row.email}`}
                  className={`px-3 py-2 ${
                    rowIndex < rows.length - 1 ? "border-b border-slate-200" : ""
                  }`}
                >
                  {row.email}
                </div>,
              ])}
            </div>
          </div>
        </div>
        <div className="h-4 bg-white" />
      </div>
    </div>
  );
};
