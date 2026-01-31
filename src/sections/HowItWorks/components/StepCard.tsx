export type StepCardProps =
  | {
      title: string;
      description: string;
      media: "chat";
    }
  | {
      title: string;
      description: string;
      media: "review";
    }
  | {
      title: string;
      description: string;
      media: "launch";
    }
  | {
      title: string;
      description: string;
      media: "image";
      imageUrl: string;
      imageAlt: string;
      imageClassName?: string;
    };

export const StepCard = (props: StepCardProps) => {
  return (
    <div className="relative content-center items-center bg-white shadow-[rgba(0,0,0,0.03)_0px_1px_20px_0px] box-border caret-transparent gap-x-0 flex flex-col h-min justify-center gap-y-0 w-full overflow-hidden rounded-[20px]">
      <div className="relative content-center items-center box-border caret-transparent gap-x-2 flex flex-col shrink-0 h-min justify-center gap-y-2 w-full overflow-hidden pt-5 pb-2.5 px-5">
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
          <h4 className="text-xl font-semibold box-border caret-transparent tracking-[-0.4px] leading-6 break-words font-geist md:text-2xl md:tracking-[-0.48px] md:leading-[28.8px]">
            {props.title}
          </h4>
        </div>
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
          <p className="text-zinc-600/80 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[22.4px] break-words font-geist">
            {props.description}
          </p>
        </div>
      </div>
      <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-[228px] justify-center gap-y-2.5 w-full px-5 pb-5 pt-2.5">
        {props.media === "chat" ? (
          <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl bg-sky-50/70 ring-1 ring-sky-100">
            <div className="flex flex-col gap-2 p-4">
              <div className="flex items-start">
                <div className="max-w-[75%] rounded-2xl rounded-tl-md bg-blue-600 px-3 py-2 text-sm font-medium text-white shadow-sm">
                  Hi! I can help set things up for you.
                </div>
              </div>
            </div>
            <div className="px-4 pb-4">
              <div className="flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 shadow-sm ring-1 ring-slate-200">
                <div className="h-2 w-20 rounded-full bg-slate-200" />
                <div className="ml-auto h-7 w-7 rounded-full bg-blue-600" />
              </div>
            </div>
          </div>
        ) : props.media === "review" ? (
          <div className="relative flex h-full w-full overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200">
            <div className="flex h-full w-[40%] flex-col gap-3 bg-slate-50/70 p-3">
              <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                <span>Tables</span>
                <span className="text-slate-400">+</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between rounded-xl bg-blue-600/10 px-3 py-2 text-xs font-semibold text-blue-700 ring-1 ring-blue-600/20">
                  <span>Users</span>
                  <span className="text-blue-500">›</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-white px-3 py-2 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                  <span>Products</span>
                  <span className="text-slate-400">›</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-white px-3 py-2 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                  <span>Orders</span>
                  <span className="text-slate-400">›</span>
                </div>
              </div>
              <div className="mt-1 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                <span>Fields</span>
                <span className="rounded-md bg-blue-600 px-2 py-1 text-[9px] font-semibold uppercase text-white">
                  +
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {[
                  ["id", "UUID • Primary key"],
                  ["email", "Email • User email address"],
                  ["name", "Text • Full name"],
                  ["role", "Select • User role"],
                ].map(([field, details]) => (
                  <div
                    key={field}
                    className="rounded-xl bg-white px-3 py-2 text-[11px] font-semibold text-slate-700 ring-1 ring-slate-200"
                  >
                    <div className="flex items-center justify-between">
                      <span>{field}</span>
                      <span className="rounded-md bg-rose-100 px-2 py-0.5 text-[9px] font-semibold uppercase text-rose-600">
                        Required
                      </span>
                    </div>
                    <div className="mt-1 text-[10px] font-medium text-slate-500">
                      {details}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex h-full w-[60%] flex-col bg-white">
              <div className="border-b border-slate-200 px-3 py-2">
                <div className="text-xs font-semibold text-slate-900">
                  Users - Data
                </div>
                <div className="text-[11px] text-slate-500">
                  Click a field on the left to edit its properties
                </div>
              </div>
              <div className="grid grid-cols-2 text-[11px] text-slate-500">
                <div className="border-b border-r border-slate-200 px-3 py-2">
                  id
                </div>
                <div className="border-b border-slate-200 px-3 py-2">
                  email
                </div>
                {[
                  ["a1f2c3", "ava@sample.io"],
                  ["b4d5e6", "liam@sample.io"],
                  ["c7h8i9", "noah@sample.io"],
                  ["d0j1k2", "mia@sample.io"],
                ].map(([id, email]) => (
                  <div key={id} className="contents">
                    <div className="border-b border-r border-slate-100 px-3 py-2 text-slate-600">
                      {id}
                    </div>
                    <div className="border-b border-slate-100 px-3 py-2 text-slate-600">
                      {email}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : props.media === "launch" ? (
          <div className="relative flex h-full w-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200">
            <div className="flex flex-col gap-2 border-b border-slate-200 bg-slate-50 px-3 py-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-rose-400" />
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                </div>
                <div className="flex items-center gap-2 text-[10px] text-slate-400">
                  <span>Adminix</span>
                  <span className="text-slate-300">•</span>
                  <span>Live</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-slate-400">
                  <span>—</span>
                  <span>□</span>
                  <span>×</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-[11px] text-slate-500">
                  <span className="rounded-md bg-white px-2 py-1 ring-1 ring-slate-200">
                    Dashboard
                  </span>
                  <span className="rounded-md bg-slate-100 px-2 py-1 text-slate-400">
                    Settings
                  </span>
                </div>
                <div className="ml-auto flex flex-1 items-center rounded-lg bg-white px-3 py-1.5 text-[10px] text-slate-400 ring-1 ring-slate-200">
                  https://app.adminix.com/support
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3 p-3">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-slate-900">
                  Support Dashboard
                </div>
                <div className="flex items-center gap-2">
                  <button className="rounded-lg bg-blue-600 px-3 py-1 text-[10px] font-semibold text-white">
                    Refresh
                  </button>
                  <button className="rounded-lg bg-blue-600 px-3 py-1 text-[10px] font-semibold text-white">
                    Export
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-7 flex-1 items-center rounded-lg bg-slate-50 px-2 text-[10px] text-slate-500 ring-1 ring-slate-200">
                  Filter by status
                </div>
                <div className="flex h-7 flex-1 items-center rounded-lg bg-slate-50 px-2 text-[10px] text-slate-500 ring-1 ring-slate-200">
                  Filter by priority
                </div>
                <button className="h-7 rounded-lg bg-blue-600 px-3 text-[10px] font-semibold text-white">
                  Clear
                </button>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  ["Open Tickets", "7,552"],
                  ["High Priority", "1,203"],
                  ["Unassigned", "412"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-xl bg-white p-2 ring-1 ring-slate-200"
                  >
                    <div className="text-[10px] font-semibold text-slate-500">
                      {label}
                    </div>
                    <div className="text-sm font-semibold text-slate-900">
                      {value}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      Since last month
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-1 flex-col overflow-hidden rounded-xl ring-1 ring-slate-200">
                <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  <span>Support Tickets</span>
                  <span>100 results</span>
                </div>
                <div className="grid grid-cols-[1.2fr_1fr_1fr_1.4fr] gap-2 px-3 py-2 text-[10px] font-semibold text-slate-500">
                  <span>User</span>
                  <span>Role</span>
                  <span>Team</span>
                  <span>Status</span>
                </div>
                <div className="flex flex-col gap-2 px-3 pb-3 text-[10px] text-slate-600">
                  {[
                    ["Chic Footitt", "Viewer", "Workplace", "Open"],
                    ["Kenton Worling", "Editor", "Product", "In progress"],
                    ["Evelina Fender", "Admin", "Design", "Open"],
                    ["Lexis Speers", "Viewer", "Infra", "Resolved"],
                  ].map(([user, role, team, status]) => (
                    <div
                      key={user}
                      className="grid grid-cols-[1.2fr_1fr_1fr_1.4fr] gap-2 rounded-lg bg-white px-2 py-2 ring-1 ring-slate-100"
                    >
                      <span>{user}</span>
                      <span className="text-blue-600">{role}</span>
                      <span>{team}</span>
                      <span className="text-slate-500">{status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="absolute box-border caret-transparent shrink-0 z-[1] inset-0">
            <div className="absolute box-border caret-transparent inset-0">
              <img
                src={props.imageUrl}
                alt={props.imageAlt}
                className={`box-border caret-transparent h-full object-cover w-full ${props.imageClassName ?? ""}`}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
