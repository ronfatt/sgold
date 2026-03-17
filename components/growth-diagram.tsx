import { growthNodes } from "@/lib/site-data";

export function GrowthDiagram() {
  const widths = ["w-24", "w-40", "w-56", "w-72"];

  return (
    <div className="glass-panel rounded-card border border-border px-6 py-8 md:px-10">
      <div className="flex flex-col items-center">
        {growthNodes.map((node, index) => (
          <div key={node.label} className="flex flex-col items-center">
            <div
              className={`grid h-14 ${widths[index]} place-items-center rounded-full border border-gold/20 bg-gradient-to-r from-white/[0.02] to-gold/5 px-6 text-center font-[var(--font-inter)] text-sm text-secondaryText`}
            >
              {node.label}
            </div>
            {index < growthNodes.length - 1 ? <div className="h-10 w-px bg-gradient-to-b from-gold/80 to-gold/10" /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
