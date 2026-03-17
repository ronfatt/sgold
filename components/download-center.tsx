import { Download, Eye } from "lucide-react";

import { downloadCenterFeatured, downloadCenterItems, downloadCategoryIcons } from "@/lib/site-data";

export function DownloadCenter() {
  return (
    <div className="space-y-6">
      <article className="glass-panel card-hover overflow-hidden rounded-card border border-gold/20 p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className={`relative aspect-[16/10] overflow-hidden rounded-[28px] bg-gradient-to-br ${downloadCenterFeatured.gradient}`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(241,223,192,0.2),transparent_42%)]" />
            <div className="absolute left-5 top-5 rounded-full border border-gold/25 bg-background/60 px-3 py-1 text-xs uppercase tracking-[0.24em] text-highlight">
              {downloadCenterFeatured.tag}
            </div>
            <div className="absolute bottom-6 left-6 right-6 rounded-[24px] border border-white/10 bg-background/45 p-5 backdrop-blur-md">
              <p className="font-[var(--font-inter)] text-sm uppercase tracking-[0.24em] text-gold">Featured file</p>
              <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-primary">
                Institutional brief
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-highlight">
                  {downloadCenterFeatured.tag}
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-secondaryText">
                  {downloadCenterFeatured.size}
                </span>
              </div>
              <h3 className="mt-5 font-[var(--font-inter)] text-4xl font-semibold tracking-[-0.04em] text-primary">
                {downloadCenterFeatured.title}
              </h3>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted">{downloadCenterFeatured.description}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <button type="button" className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-primary">
                <Eye className="mr-2 inline h-4 w-4" />
                View
              </button>
              <button type="button" className="rounded-full bg-gradient-to-r from-highlight to-darkGold px-5 py-3 text-sm font-medium text-background shadow-gold">
                <Download className="mr-2 inline h-4 w-4" />
                Download
              </button>
            </div>
          </div>
        </div>
      </article>

      <div className="grid gap-5 xl:grid-cols-3 md:grid-cols-2">
        {downloadCenterItems.map((item) => {
          const Icon = downloadCategoryIcons[item.tag as keyof typeof downloadCategoryIcons];
          return (
            <article key={item.title} className="glass-panel card-hover overflow-hidden rounded-card border border-gold/20">
              <div className={`relative aspect-video bg-gradient-to-br ${item.gradient}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,185,138,0.18),transparent_45%)]" />
                <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-background/60 px-3 py-1 text-xs uppercase tracking-[0.24em] text-highlight">
                  {item.tag}
                </div>
                {Icon ? <Icon className="absolute bottom-5 right-5 h-8 w-8 text-highlight/80" /> : null}
              </div>
              <div className="space-y-4 p-6">
                <div>
                  <h3 className="font-[var(--font-inter)] text-xl font-semibold tracking-[-0.04em] text-primary">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm text-secondaryText">{item.size}</span>
                  <div className="flex gap-2">
                    <button type="button" className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-secondaryText">
                      View
                    </button>
                    <button type="button" className="rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-sm text-primary">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
