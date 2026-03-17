"use client";

import { Copy, Download, Eye } from "lucide-react";
import { useMemo, useState } from "react";

import { assetHubCategories, assetHubItems } from "@/lib/site-data";

export function AssetHub() {
  const [activeCategory, setActiveCategory] = useState("All");

  const items = useMemo(() => {
    if (activeCategory === "All") return assetHubItems;
    return assetHubItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {assetHubCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-4 py-2 text-sm transition ${
              activeCategory === category
                ? "border border-gold/30 bg-gold/10 text-primary"
                : "border border-white/10 bg-white/[0.03] text-muted hover:text-primary"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <article key={item.title} className="group glass-panel card-hover overflow-hidden rounded-card border border-gold/20">
            <div className={`relative aspect-video bg-gradient-to-br ${item.gradient}`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,185,138,0.18),transparent_45%)]" />
              <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-background/55 px-3 py-1 text-xs uppercase tracking-[0.22em] text-highlight">
                {item.type}
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
                <div className="flex gap-3">
                  <button
                    type="button"
                    className="rounded-full border border-gold/25 bg-background/75 px-4 py-2 text-sm text-primary backdrop-blur-sm"
                  >
                    <Download className="mr-2 inline h-4 w-4" />
                    Download
                  </button>
                  <button
                    type="button"
                    className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-secondaryText backdrop-blur-sm"
                  >
                    <Eye className="mr-2 inline h-4 w-4" />
                    Preview
                  </button>
                </div>
              </div>
            </div>
            <div className="space-y-4 p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-[var(--font-inter)] text-xl font-semibold tracking-[-0.04em] text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{item.category}</p>
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-secondaryText">
                  {item.size}
                </span>
              </div>
              <div className="flex gap-2">
                <button type="button" className="rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-sm text-primary">
                  <Download className="mr-2 inline h-4 w-4" />
                  Download
                </button>
                <button type="button" className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-secondaryText">
                  <Copy className="mr-2 inline h-4 w-4" />
                  Copy Link
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
