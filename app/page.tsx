"use client";

import { ArrowRight, Check, ChevronRight } from "lucide-react";

import { AiAdvisor } from "@/components/ai-advisor";
import { AskAiButton } from "@/components/ask-ai-button";
import { AssetHub } from "@/components/asset-hub";
import { DownloadCenter } from "@/components/download-center";
import { FaqAccordion } from "@/components/faq-accordion";
import { FloatingAiWidget } from "@/components/floating-ai-widget";
import { FlowDiagram } from "@/components/flow-diagram";
import { GrowthDiagram } from "@/components/growth-diagram";
import { HeroAiPanel } from "@/components/hero-ai-panel";
import { OfficialLinks } from "@/components/official-links";
import { Reveal } from "@/components/reveal";
import { RevenueDiagram } from "@/components/revenue-diagram";
import { RoadmapTimeline } from "@/components/roadmap-timeline";
import { SectionShell } from "@/components/section-shell";
import { SiteHeader } from "@/components/site-header";
import { SocialProof } from "@/components/social-proof";
import { useSiteLanguage } from "@/components/language-provider";
import {
  copy,
  getLocalizedArchitectureCards,
  getLocalizedCtaLinks,
  getLocalizedEcosystemGroups,
  getLocalizedFooterSignals,
  getLocalizedHeroSummary,
  getLocalizedMetrics,
  getLocalizedNodeCards,
  getLocalizedProcessFlow,
  getLocalizedRevenueCards,
  getLocalizedWhatIsCards,
  getLocalizedWhyNowCards,
  t,
} from "@/lib/copy";
import {
  ctaLinks,
} from "@/lib/site-data";

export default function Home() {
  const { language } = useSiteLanguage();
  const localizedMetrics = getLocalizedMetrics(language);
  const localizedCtaLinks = getLocalizedCtaLinks(language);
  const localizedHeroSummary = getLocalizedHeroSummary(language);
  const localizedWhatIsCards = getLocalizedWhatIsCards(language);
  const localizedWhyNowCards = getLocalizedWhyNowCards(language);
  const localizedArchitectureCards = getLocalizedArchitectureCards(language);
  const localizedProcessFlow = getLocalizedProcessFlow(language);
  const localizedRevenueCards = getLocalizedRevenueCards(language);
  const localizedNodeCards = getLocalizedNodeCards(language);
  const localizedEcosystemGroups = getLocalizedEcosystemGroups(language);
  const localizedFooterSignals = getLocalizedFooterSignals(language);

  return (
    <main className="pb-16">
      <SiteHeader />
      <FloatingAiWidget />

      <section id="hero" className="section-shell grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:pt-16">
        <Reveal className="space-y-8">
          <div className="space-y-5">
            <p className="font-[var(--font-inter)] text-sm uppercase tracking-[0.32em] text-gold">
              {t(language, copy.hero.eyebrow)}
            </p>
            <h1 className="max-w-4xl font-[var(--font-inter)] text-5xl font-semibold leading-[0.92] tracking-[-0.05em] text-primary md:text-7xl">
              {t(language, copy.hero.title)}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-secondaryText">
              {t(language, copy.hero.description)}
            </p>
            <p className="max-w-2xl text-base font-medium leading-8 text-highlight">
              {t(language, copy.hero.punchline)}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <AskAiButton
              prompt="Explain S-Gold in simple terms and guide me on what to review first."
              label={t(language, copy.hero.askAiNow)}
              className="inline-flex min-h-14 items-center gap-2 rounded-full bg-gradient-to-r from-highlight to-darkGold px-6 font-[var(--font-inter)] text-sm font-medium text-background shadow-gold"
            />
            {localizedCtaLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="inline-flex min-h-14 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 font-[var(--font-inter)] text-sm font-medium text-primary transition hover:border-gold/30"
                >
                  {link.label}
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>

          <div className="glass-panel rounded-[28px] border border-gold/20 p-5">
            <p className="font-[var(--font-inter)] text-sm uppercase tracking-[0.24em] text-gold">{t(language, copy.hero.aiLive)}</p>
            <p className="mt-3 max-w-2xl text-base leading-8 text-secondaryText">
              {t(language, copy.hero.aiLiveDescription)}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <AskAiButton prompt="Explain the S-Gold system model." label={t(language, copy.hero.systemModel)} />
              <AskAiButton prompt="Explain S-Gold revenue logic in a simple way." label={t(language, copy.hero.revenueLogic)} />
              <AskAiButton prompt="Help me understand which node tier may fit me." label={t(language, copy.hero.nodeFit)} />
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {localizedMetrics.map((item, index) => (
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
                    {t(language, copy.hero.aiConsole)}
                  </p>
                  <p className="mt-2 text-sm text-muted">{t(language, copy.hero.heroConsoleSub)}</p>
                </div>
                <span className="rounded-full border border-gold/20 bg-gold/10 px-4 py-2 text-sm text-highlight">
                  {t(language, copy.hero.aiActive)}
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
              {localizedHeroSummary.map((item) => (
                  <div key={item} className="rounded-[20px] border border-white/8 bg-white/[0.03] p-4">
                    <Check className="h-5 w-5 text-gold" />
                    <p className="mt-3 text-sm leading-7 text-secondaryText">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <HeroAiPanel />
          </div>
        </Reveal>
      </section>

      <SectionShell
        id="download-center"
        eyebrow={t(language, copy.sections.download.eyebrow)}
        title={t(language, copy.sections.download.title)}
        description={t(language, copy.sections.download.description)}
        askAiPrompt="Which S-Gold documents should I start with if I want to understand the project quickly?"
        askAiFocus="advisor"
      >
        <Reveal>
          <DownloadCenter />
        </Reveal>
      </SectionShell>

      <SectionShell
        id="what-is"
        eyebrow={t(language, copy.sections.whatIs.eyebrow)}
        title={t(language, copy.sections.whatIs.title)}
        description={t(language, copy.sections.whatIs.description)}
        askAiPrompt="Explain what S-Gold is in simple terms for a first-time visitor."
        askAiFocus="explain"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {localizedWhatIsCards.map((card, index) => {
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
        eyebrow={t(language, copy.sections.whyNow.eyebrow)}
        title={t(language, copy.sections.whyNow.title)}
        description={t(language, copy.sections.whyNow.description)}
        askAiPrompt="Why does S-Gold think understanding the system matters more than entering early?"
        askAiFocus="explain"
      >
        <div className="grid gap-5 lg:grid-cols-[1fr_1fr_1fr]">
          {localizedWhyNowCards.map((card, index) => {
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
        eyebrow={t(language, copy.sections.architecture.eyebrow)}
        title={t(language, copy.sections.architecture.title)}
        description={t(language, copy.sections.architecture.description)}
        askAiPrompt="Explain the three engines of S-Gold and how they work together."
        askAiFocus="explain"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {localizedArchitectureCards.map((card, index) => {
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
        eyebrow={t(language, copy.sections.coreLogic.eyebrow)}
        title={t(language, copy.sections.coreLogic.title)}
        description={t(language, copy.sections.coreLogic.description)}
        askAiPrompt="Walk me through the five-step logic of S-Gold like I am a serious new prospect."
        askAiFocus="explain"
      >
        <Reveal>
          <FlowDiagram steps={localizedProcessFlow} />
        </Reveal>
      </SectionShell>

      <SectionShell
        id="revenue"
        eyebrow={t(language, copy.sections.revenue.eyebrow)}
        title={t(language, copy.sections.revenue.title)}
        description={t(language, copy.sections.revenue.description)}
        askAiPrompt="Ask AI to explain S-Gold distribution logic and where revenue is supposed to come from."
        askAiFocus="explain"
      >
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-5">
            <div className="grid gap-5 md:grid-cols-3">
              {localizedRevenueCards.map((card, index) => {
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
        eyebrow={t(language, copy.sections.growth.eyebrow)}
        title={t(language, copy.sections.growth.title)}
        description={t(language, copy.sections.growth.description)}
        askAiPrompt="Explain the growth model in a clear, non-hype way."
        askAiFocus="explain"
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
        description="This gives larger participants and team leaders a clean institutional frame for roles, benefits, and progression. Not sure which node fits you? Ask the AI advisor."
        askAiPrompt="Which S-Gold node tier might fit me best if I tell you my goals and budget?"
        askAiFocus="advisor"
      >
        <div className="grid gap-5 xl:grid-cols-4 md:grid-cols-2">
          {localizedNodeCards.map((card, index) => (
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
        askAiPrompt="Explain how the S-Gold ecosystem connects infrastructure, payments, and consumption."
        askAiFocus="explain"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {localizedEcosystemGroups.map((group, index) => (
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
        askAiPrompt="Summarize the S-Gold roadmap and tell me what stage the project is in right now."
        askAiFocus="advisor"
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
        askAiPrompt="What community resources should I use if I want to present S-Gold professionally?"
        askAiFocus="advisor"
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
        askAiPrompt="Which official S-Gold links should I open first based on what I want to do?"
        askAiFocus="advisor"
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
        askAiPrompt="How should I use social proof when presenting S-Gold to someone skeptical?"
        askAiFocus="advisor"
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
        eyebrow={t(language, copy.sections.faq.eyebrow)}
        title={t(language, copy.sections.faq.title)}
        description={t(language, copy.sections.faq.description)}
        askAiPrompt="Answer my S-Gold questions directly instead of making me browse the FAQ."
        askAiFocus="advisor"
      >
        <div className="mb-6">
          <AskAiButton prompt="I still have questions about S-Gold. Please answer them directly like an advisor." label={t(language, copy.sections.faq.askAi)} />
        </div>
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
                <p className="font-[var(--font-inter)] text-sm uppercase tracking-[0.28em] text-gold">{t(language, copy.sections.cta.eyebrow)}</p>
                <h2 className="mt-4 max-w-3xl font-[var(--font-inter)] text-4xl font-semibold tracking-[-0.04em] text-primary md:text-5xl">
                  {t(language, copy.sections.cta.title)}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-secondaryText">
                  {t(language, copy.sections.cta.description)}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <AskAiButton
                    prompt="Help me understand S-Gold and recommend what role or path I should consider."
                    label={t(language, copy.sections.cta.askAi)}
                    className="inline-flex min-h-14 items-center gap-2 rounded-full bg-gradient-to-r from-highlight to-darkGold px-6 font-[var(--font-inter)] text-sm font-medium text-background shadow-gold"
                  />
                  <a
                    href="#what-is"
                    className="inline-flex min-h-14 items-center rounded-full border border-white/10 px-6 font-[var(--font-inter)] text-sm font-medium text-primary"
                  >
                    {t(language, copy.sections.cta.explore)}
                  </a>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {localizedFooterSignals.map((item) => {
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
