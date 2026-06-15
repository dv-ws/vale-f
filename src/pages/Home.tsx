import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BackedBy } from '../components/BackedBy';
import { CinematicHero } from '../components/CinematicHero';
import { FarmGallery } from '../components/FarmGallery';
import { FarmMotionStrip } from '../components/FarmMotionStrip';
import { GlassCard } from '../components/GlassCard';
import { GrowthTree } from '../components/GrowthTree';
import { NewsGrid } from '../components/NewsGrid';
import { SectionHeader } from '../components/SectionHeader';
import { globalJournalArticles, kashmirFieldNotes, platformModules, problemCards, valueProps } from '../data/content';

export function Home() {
  return (
    <>
      <CinematicHero />
      <section className="section-animate px-4 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="The reality"
            title="Farmers are facing faster seasons, sharper risks and tougher markets."
            description="ValeFarm keeps the public story focused on real farmer needs: field records, local guidance, weather and crop risk, market timing and simple access."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {problemCards.map((card) => (
              <GlassCard key={card.title} className="min-h-[250px]">
                <card.icon className="mb-8 text-leaf" size={34} />
                <h3 className="font-display text-3xl leading-none tracking-[-0.03em] text-ink">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink/60">{card.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionHeader
              eyebrow="The solution"
              title="One calm interface for farm decisions."
              description="ValeFarm combines the feeling of a living forest with the clarity of a modern agri-tech product: useful, simple and visually rooted in the Valley."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {platformModules.slice(0, 4).map((module) => (
                <GlassCard key={module.title} className="min-h-[230px]">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-leaf">{module.eyebrow}</p>
                  <module.icon className="my-5 text-ink" size={30} />
                  <h3 className="font-display text-3xl leading-none tracking-[-0.03em] text-ink">{module.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-ink/60">{module.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FarmMotionStrip variant="home" />

      <section className="px-4 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <GrowthTree />
        </div>
      </section>

      <FarmGallery />

      <section className="px-4 py-12 md:px-8">
        <div className="on-dark mx-auto grid max-w-7xl gap-10 rounded-[2.5rem] bg-[#06170f] p-8 text-white shadow-soft md:p-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeader
              eyebrow="Why ValeFarm"
              title="Public-facing, practical and built around trust."
              description="The product story avoids sensitive internal details and focuses on what matters to farmers and partners: clarity, resilience, accessibility and better timing."
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {valueProps.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <CheckCircle2 className="mt-0.5 shrink-0 text-moss" size={20} />
                <span className="text-sm font-semibold leading-6 text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BackedBy />

      <section className="px-4 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeader
              eyebrow="Field notes"
              title="Professional updates on farming challenges in Kashmir."
              description="A clean article section focused on climate, crop and market challenges farmers are already facing in Kashmir."
            />
            <Link to="/field-notes" className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-bold text-white">
              Read field notes <ArrowRight size={16} />
            </Link>
          </div>
          <NewsGrid items={kashmirFieldNotes} limit={3} />
        </div>
      </section>

      <section className="px-4 py-10 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeader
              eyebrow="Global journal"
              title="Global thinking on AI in agriculture."
              description="Selected references on digital agriculture, responsible AI, regenerative farming and smallholder transformation."
            />
            <Link to="/journal" className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/75 px-6 py-3 text-sm font-bold text-ink backdrop-blur">
              Explore journal <ArrowRight size={16} />
            </Link>
          </div>
          <NewsGrid items={globalJournalArticles} limit={3} />
        </div>
      </section>
    </>
  );
}
