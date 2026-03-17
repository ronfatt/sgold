import { roadmap } from "@/lib/site-data";

export function RoadmapTimeline() {
  return (
    <div className="space-y-6">
      <div className="hidden gap-5 lg:grid lg:grid-cols-4">
        {roadmap.map((item, index) => (
          <article key={item.phase} className="relative">
            <div className="absolute left-0 right-0 top-5 h-px bg-gradient-to-r from-gold/70 to-gold/10" />
            <div className="relative rounded-card border border-gold/20 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-gold">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-highlight">
                  {item.phase}
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-xs ${
                    item.status === "LIVE"
                      ? "border border-emerald-400/25 bg-emerald-400/10 text-emerald-200"
                      : item.status === "IN PROGRESS"
                        ? "border border-gold/25 bg-gold/10 text-highlight"
                        : "border border-white/10 bg-white/[0.03] text-secondaryText"
                  }`}
                >
                  {item.status}
                </span>
              </div>
              <div className="mb-5 flex items-center gap-3">
                <div className={`h-3 w-3 rounded-full ${index === 0 ? "bg-emerald-300" : index === 1 ? "bg-gold" : "bg-white/50"}`} />
                <h3 className="font-[var(--font-inter)] text-2xl font-semibold tracking-[-0.04em] text-primary">{item.title}</h3>
              </div>
              <ul className="space-y-2 text-sm leading-7 text-muted">
                {item.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="space-y-5 lg:hidden">
        {roadmap.map((item, index) => (
          <article key={item.phase} className="relative pl-8">
            <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-gold/80 to-white/10" />
            <div className={`absolute left-0 top-6 h-6 w-6 rounded-full border ${index === 0 ? "border-emerald-300/40 bg-emerald-300/15" : index === 1 ? "border-gold/40 bg-gold/15" : "border-white/15 bg-white/[0.05]"}`} />
            <div className="rounded-card border border-gold/20 bg-white/[0.03] p-6 backdrop-blur-xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-highlight">
                  {item.phase}
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-secondaryText">
                  {item.status}
                </span>
              </div>
              <h3 className="mt-4 font-[var(--font-inter)] text-2xl font-semibold tracking-[-0.04em] text-primary">{item.title}</h3>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-muted">
                {item.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
