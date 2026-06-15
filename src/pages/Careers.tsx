import { ContactForm } from '../components/ContactForm';
import { GlassCard } from '../components/GlassCard';
import { PageMotionHero } from '../components/PageMotionHero';
import { FarmMotionStrip } from '../components/FarmMotionStrip';
import { SectionHeader } from '../components/SectionHeader';
import { brand, careerRoles } from '../data/content';

export function Careers() {
  return (
    <main className="px-4 pt-32 md:px-8 md:pt-36">
      <PageMotionHero
        eyebrow="Join our team"
        title="Build agriculture technology from the Valley."
        description="ValeFarm is looking for builders, agri thinkers, AI learners and field operators who want to make digital farming practical, trustworthy and beautiful."
        video={brand.motionVideos.tractor}
      />

      <FarmMotionStrip variant="careers" />

      <section className="section-animate mx-auto max-w-7xl py-20">
        <SectionHeader
          eyebrow="Open pathways"
          title="Work on real farm problems with a modern product team."
          description="The founding team brings MNC experience and global exposure in AI. We welcome people who can combine field understanding with disciplined execution."
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {careerRoles.map((role) => (
            <GlassCard key={role.title} className="min-h-[270px]">
              <role.icon className="mb-8 text-leaf" size={34} />
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-ink/40">{role.type}</p>
              <h3 className="mt-3 font-display text-4xl leading-[0.95] tracking-[-0.035em] text-ink">{role.title}</h3>
              <p className="mt-5 text-sm leading-7 text-ink/60">{role.description}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl pb-24">
        <ContactForm mode="career" />
      </section>
    </main>
  );
}
