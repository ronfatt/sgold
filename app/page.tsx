import { ArrowRight, Check, ChevronRight } from "lucide-react";

import { AiAdvisor } from "@/components/ai-advisor";
import { AssetHub } from "@/components/asset-hub";
import { DownloadCenter } from "@/components/download-center";
import { FaqAccordion } from "@/components/faq-accordion";
import { FlowDiagram } from "@/components/flow-diagram";
import { GrowthDiagram } from "@/components/growth-diagram";
import { OfficialLinks } from "@/components/official-links";
import { Reveal } from "@/components/reveal";
import { RevenueDiagram } from "@/components/revenue-diagram";
import { RoadmapTimeline } from "@/components/roadmap-timeline";
import { SectionShell } from "@/components/section-shell";
import { SiteHeader } from "@/components/site-header";
import { SocialProof } from "@/components/social-proof";
import {
  architectureCards,
  ctaLinks,
  ecosystemGroups,
  footerSignals,
  heroSummary,
  metrics,
  nodeCards,
  processFlow,
  revenueCards,
  whatIsCards,
  whyNowCards,
} from "@/lib/site-data";

export default function Home() {
  return (
    <main className="pb-16">
      <SiteHeader />

      <section id="hero" className="section-shell grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:pt-16">
        <Reveal className="space-y-8">
          <div className="space-y-5">
            <p className="font-[var(--font-inter)] text-sm uppercase tracking-[0.32em] text-gold">
              Premium Digital Asset Infrastructure
            </p>
            <h1 className="max-w-4xl font-[var(--font-inter)] text-5xl font-semibold leading-[0.92] tracking-[-0.05em] text-primary md:text-7xl">
              S-Gold builds a knowledge-first infrastructure layer for digital asset growth.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-secondaryText">
              Designed as a premium investor-facing presentation, S-Gold frames assets, payments, and
              consumption as one institutional system rather than a hype-driven token page.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {ctaLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`inline-flex min-h-14 items-center gap-2 rounded-full px-6 font-[var(--font-inter)] text-sm font-medium transition ${
                    index === 0
                      ? "bg-gradient-to-r from-highlight to-darkGold text-background shadow-gold"
                      : "border border-white/10 bg-white/[0.03] text-primary hover:border-gold/30"
                  }`}
                >
                  {link.label}
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {metrics.map((item, index) => (
              <Reveal key={item.label} delay={index * 0.08}>
                <article className="glass-panel card-hover rounded-card border border-border p-5">
                  <p className="font-[var(--font-inter)] text-4xl font-semibold tracking-[-0.04em] text-highlight">
                    {item.value}
                  </p>
                  <p className="mt-3 font-[var(--font-inter)] text-base font-medium text-primary">{item.label}</p>
                  <p className="mt-2 text-sm leading-7 text-muted">{item.note}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12} className="relative overflow-hidden rounded-[36px] border border-white/8 bg-aura p-4 shadow-gold">
          <div className="glass-panel relative overflow-hidden rounded-[32px] border border-white/8 bg-secondary/70 px-6 py-8 md:px-8 md:py-10">
            <div className="absolute inset-x-8 top-8 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
            <div className="absolute left-[-8%] top-[8%] h-48 w-48 rounded-full bg-gold/10 blur-3xl" />
            <div className="absolute bottom-[10%] right-[-8%] h-60 w-60 rounded-full bg-highlight/10 blur-3xl" />

            <div className="relative flex min-h-[540px] flex-col justify-between">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-[var(--font-inter)] text-xs uppercase tracking-[0.28em] text-gold">
                    Institutional Snapshot
                  </p>
                  <p className="mt-2 text-sm text-muted">A premium dark-theme system overview</p>
                </div>
                <span className="rounded-full border border-gold/20 bg-gold/10 px-4 py-2 text-sm text-highlight">
                  Investor View
                </span>
              </div>

              <div className="relative py-12 text-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(214,185,138,0.16),transparent_55%)]" />
                <p className="relative font-[var(--font-inter)] text-[12rem] font-semibold leading-none tracking-[-0.08em] text-white/[0.05] md:text-[16rem]">
                  S
                </p>
                <div className="absolute inset-x-0 top-1/2 mx-auto max-w-md -translate-y-1/2 space-y-3 rounded-[28px] border border-white/10 bg-background/60 px-6 py-5 backdrop-blur-md">
                  <p className="font-[var(--font-inter)] text-sm uppercase tracking-[0.24em] text-gold">
                    Core Positioning
                  </p>
                  <p className="text-lg leading-8 text-secondaryText">
                    Assets become system inputs. Finance becomes infrastructure. Consumption becomes demand.
                  </p>
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                {heroSummary.map((item) => (
                  <div key={item} className="rounded-[20px] border border-white/8 bg-white/[0.03] p-4">
                    <Check className="h-5 w-5 text-gold" />
                    <p className="mt-3 text-sm leading-7 text-secondaryText">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <SectionShell
        id="download-center"
        eyebrow="Download Center"
        title="Official materials should read like premium institutional documentation."
        description="A featured document card leads the section, while secondary files stay compact, categorized, and easy to scan."
      >
        <Reveal>
          <DownloadCenter />
        </Reveal>
      </SectionShell>

      <SectionShell
        id="what-is"
        eyebrow="What is S-Gold"
        title="A premium operating narrative for digital asset infrastructure."
        description="This section explains S-Gold like a boardroom presentation: what it is, why it exists, and how it defines productive participation."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {whatIsCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={index * 0.06}>
                <article className="glass-panel card-hover h-full rounded-card border border-border p-6 md:p-7">
                  {Icon ? <Icon className="h-10 w-10 text-gold" /> : null}
                  <h3 className="mt-5 font-[var(--font-inter)] text-2xl font-semibold tracking-[-0.04em] text-primary">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-muted">{card.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </SectionShell>

      <SectionShell
        id="why-now"
        eyebrow="Why Now"
        title="The timing works because passive assets and old financial rails no longer explain the future."
        description="This section educates the visitor instead of selling too early, creating the institutional logic for why this system needs to exist."
      >
        <div className="grid gap-5 lg:grid-cols-[1fr_1fr_1fr]">
          {whyNowCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={index * 0.06}>
                <article className="glass-panel card-hover h-full rounded-card border border-border p-6 md:p-7">
                  {Icon ? <Icon className="h-10 w-10 text-gold" /> : null}
                  <h3 className="mt-5 font-[var(--font-inter)] text-2xl font-semibold tracking-[-0.04em] text-primary">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-muted">{card.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.18} className="mt-6">
          <div className="rounded-card border border-gold/20 bg-gradient-to-r from-gold/10 to-highlight/5 px-6 py-6 md:px-8">
            <p className="font-[var(--font-inter)] text-xl leading-9 text-secondaryText md:text-2xl">
              Conclusion: the next generation of digital asset projects will be judged by clarity of structure,
              quality of infrastructure, and the ability to connect capital with real demand.
            </p>
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell
        id="architecture"
        eyebrow="System Architecture"
        title="Three coordinated engines define the S-Gold system."
        description="Each engine has a distinct role in making the model legible to investors and scalable for future product extensions."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {architectureCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={index * 0.07}>
                <article className="glass-panel card-hover h-full rounded-card border border-border p-6 md:p-8">
                  <p className="font-[var(--font-inter)] text-xs uppercase tracking-[0.28em] text-gold">{card.eyebrow}</p>
                  <div className="mt-8 flex items-start justify-between gap-4">
                    <h3 className="font-[var(--font-inter)] text-3xl font-semibold tracking-[-0.04em] text-primary">
                      {card.title}
                    </h3>
                    {Icon ? <Icon className="h-9 w-9 shrink-0 text-highlight" /> : null}
                  </div>
                  <p className="mt-6 text-base leading-8 text-muted">{card.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </SectionShell>

      <SectionShell
        id="core-logic"
        eyebrow="Core Logic"
        title="A five-step process makes the model understandable."
        description="The flow is intentionally simple and legible, using horizontal progression instead of dense technical diagrams."
      >
        <Reveal>
          <FlowDiagram steps={processFlow} />
        </Reveal>
      </SectionShell>

      <SectionShell
        id="revenue"
        eyebrow="Revenue Model"
        title="Revenue is framed as system activity, not promise-driven speculation."
        description="This block pairs cards, a minimal chart, and one explanation panel so the economics feel premium and readable."
      >
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-5">
            <div className="grid gap-5 md:grid-cols-3">
              {revenueCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <Reveal key={card.title} delay={index * 0.06}>
                    <article className="glass-panel card-hover h-full rounded-card border border-border p-6">
                      {Icon ? <Icon className="h-9 w-9 text-gold" /> : null}
                      <h3 className="mt-5 font-[var(--font-inter)] text-xl font-semibold tracking-[-0.04em] text-primary">
                        {card.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-muted">{card.description}</p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
            <Reveal delay={0.1}>
              <RevenueDiagram />
            </Reveal>
          </div>

          <Reveal delay={0.14}>
            <aside className="glass-panel flex h-full flex-col justify-between rounded-card border border-border p-7 md:p-8">
              <div>
                <p className="font-[var(--font-inter)] text-sm uppercase tracking-[0.24em] text-gold">
                  Explanation Panel
                </p>
                <h3 className="mt-4 font-[var(--font-inter)] text-3xl font-semibold tracking-[-0.04em] text-primary">
                  The model only works if every layer can be explained cleanly.
                </h3>
                <p className="mt-6 text-base leading-8 text-muted">
                  S-Gold should present revenue as a structured mix of flows, fees, and ecosystem demand. This keeps the
                  design aligned with a premium institutional tone and avoids exchange-style noise.
                </p>
              </div>
              <div className="mt-8 rounded-[22px] border border-gold/15 bg-gold/6 p-5">
                <p className="font-[var(--font-inter)] text-sm uppercase tracking-[0.24em] text-highlight">
                  Positioning Note
                </p>
                <p className="mt-3 text-base leading-8 text-secondaryText">
                  Phrase distributions as rule-based and system-dependent. Keep explicit promises out of the visual
                  language.
                </p>
              </div>
            </aside>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell
        id="growth-model"
        eyebrow="Fission / Growth Model"
        title="Growth is shown as an elegant network tree, not a noisy recruitment chart."
        description="The tree is intentionally restrained to keep it premium while still visualizing compounding structure."
      >
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="glass-panel rounded-card border border-border p-7 md:p-8">
              <p className="font-[var(--font-inter)] text-sm uppercase tracking-[0.24em] text-gold">
                Structured expansion
              </p>
              <h3 className="mt-4 font-[var(--font-inter)] text-3xl font-semibold tracking-[-0.04em] text-primary">
                From one core to a readable layered network.
              </h3>
              <p className="mt-5 text-base leading-8 text-muted">
                This section should read as system multiplication, operational scale, and coordinated network growth.
                The visual avoids hype and keeps the focus on structure.
              </p>
              <div className="mt-6 flex items-center gap-3 text-sm text-secondaryText">
                <ChevronRight className="h-4 w-4 text-gold" />
                1 → 4 → 16 → 64 expansion logic
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <GrowthDiagram />
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell
        id="node-system"
        eyebrow="Node System"
        title="Node tiers are presented like premium pricing and participation packages."
        description="This gives larger participants and team leaders a clean institutional frame for roles, benefits, and progression."
      >
        <div className="grid gap-5 xl:grid-cols-4 md:grid-cols-2">
          {nodeCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.06}>
              <article className="glass-panel card-hover flex h-full flex-col rounded-card border border-border p-6 md:p-7">
                <p className="font-[var(--font-inter)] text-xs uppercase tracking-[0.28em] text-gold">{card.eyebrow}</p>
                <h3 className="mt-5 font-[var(--font-inter)] text-2xl font-semibold tracking-[-0.04em] text-primary">
                  {card.title}
                </h3>
                <p className="mt-4 flex-1 text-base leading-8 text-muted">{card.description}</p>
                <div className="mt-8 rounded-[20px] border border-white/8 bg-white/[0.03] p-4">
                  <p className="text-sm leading-7 text-secondaryText">
                    Includes narrative support, onboarding materials, and role-specific growth positioning.
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="ecosystem"
        eyebrow="Ecosystem"
        title="The ecosystem is grouped into clear operating categories."
        description="Logo grids are shown as curated placeholders so future partners can be swapped in without touching layout logic."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {ecosystemGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.06}>
              <article className="glass-panel rounded-card border border-border p-6 md:p-7">
                <h3 className="font-[var(--font-inter)] text-2xl font-semibold tracking-[-0.04em] text-primary">
                  {group.title}
                </h3>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {group.logos.map((logo) => (
                    <div
                      key={logo}
                      className="rounded-[18px] border border-white/8 bg-white/[0.03] px-4 py-5 text-center text-sm text-secondaryText"
                    >
                      {logo}
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="roadmap"
        eyebrow="Roadmap"
        title="The roadmap should feel like an operating timeline, not a stack of black cards."
        description="Desktop uses a horizontal phase progression, while mobile shifts to a clear vertical track with highlighted status states."
      >
        <Reveal>
          <RoadmapTimeline />
        </Reveal>
      </SectionShell>

      <SectionShell
        id="asset-hub"
        eyebrow="Community Asset Hub"
        title="Community resources need system logic, not a pile of loose files."
        description="Tabs organize the library, card proportions stay consistent, and the hover layer keeps downloads clean without cluttering the view."
      >
        <Reveal>
          <AssetHub />
        </Reveal>
      </SectionShell>

      <SectionShell
        id="official-links"
        eyebrow="Official Links"
        title="Official pathways should be grouped and ranked like controlled entry points."
        description="Instead of one long list, links are grouped into meaningful categories for website access, documentation, and community distribution."
      >
        <Reveal>
          <OfficialLinks />
        </Reveal>
      </SectionShell>

      <SectionShell
        id="kol-media"
        eyebrow="KOL Media Matrix"
        title="Social proof works best when it has breathing room and editorial rhythm."
        description="This layout treats KOL and media references like a premium press wall, with measured density and consistent card styling."
      >
        <Reveal>
          <SocialProof />
        </Reveal>
      </SectionShell>

      <SectionShell
        id="ai-advisor"
        eyebrow="AI Advisor"
        title="Turn the presentation into a guided conversation layer."
        description="This section connects the premium landing page to a real OpenAI-backed advisor so visitors can ask direct questions instead of bouncing between static blocks."
      >
        <Reveal>
          <AiAdvisor />
        </Reveal>
      </SectionShell>

      <SectionShell
        id="faq"
        eyebrow="FAQ"
        title="Common questions should feel curated, not overloaded."
        description="A restrained accordion keeps the tone premium while giving visitors direct answers."
      >
        <Reveal>
          <FaqAccordion />
        </Reveal>
      </SectionShell>

      <section id="footer-cta" className="section-shell pt-6">
        <Reveal>
          <div className="overflow-hidden rounded-[36px] border border-gold/20 bg-gradient-to-br from-white/[0.03] via-gold/[0.06] to-white/[0.02] p-8 shadow-gold md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="font-[var(--font-inter)] text-sm uppercase tracking-[0.28em] text-gold">Call to Action</p>
                <h2 className="mt-4 max-w-3xl font-[var(--font-inter)] text-4xl font-semibold tracking-[-0.04em] text-primary md:text-5xl">
                  Present S-Gold like premium infrastructure, then connect the next layer.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-secondaryText">
                  This design system is intentionally ready for future investor portals, AI advisor workflows, and multilingual
                  content operations.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#hero"
                    className="inline-flex min-h-14 items-center gap-2 rounded-full bg-gradient-to-r from-highlight to-darkGold px-6 font-[var(--font-inter)] text-sm font-medium text-background shadow-gold"
                  >
                    Enter Presentation
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#faq"
                    className="inline-flex min-h-14 items-center rounded-full border border-white/10 px-6 font-[var(--font-inter)] text-sm font-medium text-primary"
                  >
                    Review FAQ
                  </a>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {footerSignals.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="rounded-[22px] border border-white/10 bg-background/40 p-5 backdrop-blur-sm">
                      <Icon className="h-8 w-8 text-gold" />
                      <p className="mt-4 font-[var(--font-inter)] text-lg text-secondaryText">{item.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
