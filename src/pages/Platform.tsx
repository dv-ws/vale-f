import { brand, businessModels, platformModules, valueProps } from '../data/content';
import { MarketSizePanel } from '../components/MarketSizePanel';
import { GlassCard } from '../components/GlassCard';
import { PageMotionHero } from '../components/PageMotionHero';
import { FarmMotionStrip } from '../components/FarmMotionStrip';
import { SectionHeader } from '../components/SectionHeader';

export function Platform() {
  return (
    <main className="px-4 pt-32 md:px-8 md:pt-36">
      <PageMotionHero
        eyebrow="Platform"
        title="A farm operating layer that feels alive."
        description="ValeFarm brings season memory, local advisory signals, market movement and risk awareness into a calm, mobile-first product experience for farms and partners."
        video={brand.motionVideos.drone}
      />

      <section className="section-animate mx-auto max-w-7xl py-14">
        <MarketSizePanel />
      </section>

      <FarmMotionStrip variant="platform" />

      <section className="section-animate mx-auto max-w-7xl py-20">
        <SectionHeader
          eyebrow="Product modules"
          title="Everything important, without overwhelming the farmer."
          description="The platform is written in a public-facing way and avoids sensitive pitch details. It focuses on the product experience and outcomes farmers can understand."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {platformModules.map((module) => (
            <GlassCard key={module.title} className="min-h-[280px]">
              <module.icon className="mb-8 text-leaf" size={34} />
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-leaf">{module.eyebrow}</p>
              <h3 className="mt-3 font-display text-4xl leading-[0.95] tracking-[-0.035em] text-ink">{module.title}</h3>
              <p className="mt-5 text-sm leading-7 text-ink/60">{module.description}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl py-12">
        <div className="on-dark grid gap-10 rounded-[2.5rem] bg-[#06170f] p-8 text-white shadow-soft md:p-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            eyebrow="Why it matters"
            title="A quieter way to build farm intelligence."
            description="ValeFarm avoids complex farmer-facing language. Behind the scenes, it can connect data, advisory and markets; on the farm, it should feel simple, local and useful."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {valueProps.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/12 p-4 text-sm font-semibold leading-6 text-white/86 backdrop-blur">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl py-24">
        <SectionHeader
          eyebrow="Collaboration paths"
          title="Built for farmers, partners and agricultural programmes."
          description="Instead of exposing internal projections, ValeFarm presents clean public collaboration paths for growers, institutions and ecosystem partners."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {businessModels.map((model) => (
            <GlassCard key={model.label}>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-leaf">{model.label}</p>
              <h3 className="mt-4 font-display text-4xl leading-none tracking-[-0.03em] text-ink">{model.title}</h3>
              <ul className="mt-6 grid gap-3 text-sm leading-6 text-ink/60">
                {model.points.map((point) => (
                  <li key={point} className="rounded-2xl bg-white/70 px-4 py-3 ring-1 ring-ink/5">{point}</li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </section>
    </main>
  );
}
