"use client";

import { useSiteLanguage } from "@/components/language-provider";
import { getLocalizedOfficialLinks } from "@/lib/copy";
import { ExternalLink } from "lucide-react";

export function OfficialLinks() {
  const { language } = useSiteLanguage();
  const officialLinkGroups = getLocalizedOfficialLinks(language);

  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {officialLinkGroups.map((group) => (
        <article key={group.title} className="glass-panel rounded-card border border-gold/20 p-6 md:p-7">
          <h3 className="font-[var(--font-inter)] text-2xl font-semibold tracking-[-0.04em] text-primary">{group.title}</h3>
          <div className="mt-6 space-y-3">
            {group.items.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.title}
                  href={item.href}
                  className="card-hover block rounded-[22px] border border-white/10 bg-white/[0.03] p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-4">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/20 bg-gold/10">
                        <Icon className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <p className="font-[var(--font-inter)] text-lg font-medium text-primary">{item.title}</p>
                        <p className="mt-2 text-sm leading-7 text-muted">{item.description}</p>
                      </div>
                    </div>
                    <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-highlight" />
                  </div>
                </a>
              );
            })}
          </div>
        </article>
      ))}
    </div>
  );
}
