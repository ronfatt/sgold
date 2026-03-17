import { mediaItems } from "@/lib/site-data";

export function SocialProof() {
  return (
    <div className="columns-1 gap-5 md:columns-2 xl:columns-4">
      {mediaItems.map((item) => (
        <article
          key={`${item.name}-${item.platform}`}
          className="glass-panel card-hover mb-5 inline-block w-full break-inside-avoid rounded-card border border-gold/20 p-6"
        >
          <div className="flex items-start gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/20 bg-gradient-to-br from-gold/25 to-white/[0.03] font-[var(--font-inter)] text-lg font-semibold text-highlight">
              {item.name
                .split(" ")
                .map((part) => part[0])
                .join("")
                .slice(0, 2)}
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-[var(--font-inter)] text-lg font-medium text-primary">{item.name}</p>
                <span className="rounded-full border border-gold/25 bg-gold/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.18em] text-highlight">
                  {item.tag}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted">{item.role}</p>
            </div>
          </div>
          <p className="mt-5 text-base leading-8 text-secondaryText">{item.excerpt}</p>
          <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/8 pt-4">
            <p className="text-sm text-muted">{item.platform}</p>
            <p className="text-sm text-highlight">{item.metric}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
