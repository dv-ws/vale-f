import { Instagram, Linkedin, Mail, MapPin } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { GlassCard } from '../components/GlassCard';
import { PageMotionHero } from '../components/PageMotionHero';
import { FarmMotionStrip } from '../components/FarmMotionStrip';
import { brand } from '../data/content';

export function Contact() {
  return (
    <main className="px-4 pt-32 md:px-8 md:pt-36">
      <PageMotionHero
        eyebrow="Contact"
        title="Reach Vale Farm Kashmir."
        description="For collaborations, pilots, careers, farmer onboarding or institutional partnerships, send an email or connect through Instagram."
        video={brand.motionVideos.contactHero}
      />
      <FarmMotionStrip variant="contact" />
      <section className="section-animate mx-auto grid max-w-7xl gap-12 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="grid gap-4">
          <GlassCard>
            <a href={`mailto:${brand.email}`} className="flex items-center gap-4 text-ink">
              <Mail className="text-leaf" />
              <span className="break-all font-semibold">{brand.email}</span>
            </a>
          </GlassCard>
          <GlassCard>
            <a href={brand.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-ink">
              <Instagram className="text-leaf" />
              <span className="font-semibold">Instagram / valefarmkashmir</span>
            </a>
          </GlassCard>
          <GlassCard>
            <a href={brand.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-ink">
              <Linkedin className="text-leaf" />
              <span className="font-semibold">LinkedIn / Vale Farm Kashmir</span>
            </a>
          </GlassCard>
          <GlassCard>
            <div className="flex items-center gap-4 text-ink">
              <MapPin className="text-leaf" />
              <span className="font-semibold">Kashmir, India</span>
            </div>
          </GlassCard>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
