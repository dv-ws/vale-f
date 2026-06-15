import { BackedBy } from '../components/BackedBy';
import { FarmGallery } from '../components/FarmGallery';
import { GlassCard } from '../components/GlassCard';
import { PageMotionHero } from '../components/PageMotionHero';
import { FarmMotionStrip } from '../components/FarmMotionStrip';
import { SectionHeader } from '../components/SectionHeader';
import { brand, trustPoints } from '../data/content';

export function About() {
  return (
    <main className="px-4 pt-32 md:px-8 md:pt-36">
      <PageMotionHero
        eyebrow="About ValeFarm"
        title="Built from Kashmir with global AI exposure."
        description="ValeFarm is a farmer-first technology platform shaped by Kashmir’s agricultural realities and a founding team with MNC experience, global exposure in AI, and practical product-building capability."
        video={brand.motionVideos.wheat}
      >
        <div className="rounded-[2rem] border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-moss">Founding strength</p>
          <p className="mt-4 font-display text-4xl leading-none tracking-[-0.04em] text-white">MNC experience + AI product thinking</p>
          <p className="mt-4 text-sm leading-6 text-white/70">A lean team focused on building with field understanding, institutional credibility and scalable technology foundations.</p>
        </div>
      </PageMotionHero>

      <FarmMotionStrip variant="about" />

      <section className="section-animate mx-auto max-w-7xl py-20">
        <SectionHeader
          eyebrow="Our approach"
          title="Clean, practical and farmer-friendly."
          description="The public story keeps only professional and relevant content: what problem ValeFarm solves, how the platform helps, who backs the initiative and how people can connect or join the team."
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <GlassCard key={point.title} className="text-center">
              <point.icon className="mx-auto mb-6 text-leaf" size={34} />
              <h3 className="font-display text-3xl tracking-[-0.03em] text-ink">{point.title}</h3>
              <p className="mt-4 text-sm leading-7 text-ink/60">{point.text}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <FarmGallery />
      <BackedBy />
    </main>
  );
}
