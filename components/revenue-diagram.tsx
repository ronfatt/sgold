import { revenueMix } from "@/lib/site-data";

export function RevenueDiagram() {
  return (
    <div className="glass-panel rounded-card border border-border p-6 md:p-8">
      <div className="flex items-end justify-between gap-3">
        {revenueMix.map((item) => (
          <div key={item.label} className="flex flex-1 flex-col items-center gap-4">
            <div className="flex h-56 w-full items-end rounded-[20px] border border-white/6 bg-white/[0.02] p-3">
              <div
                className="w-full rounded-[14px] bg-gradient-to-t from-darkGold via-gold to-highlight shadow-gold"
                style={{ height: `${item.value * 2}%` }}
              />
            </div>
            <div className="space-y-1 text-center">
              <p className="font-[var(--font-inter)] text-2xl font-semibold text-primary">{item.value}%</p>
              <p className="text-sm leading-6 text-muted">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
