import { FarmMotionStrip } from '../components/FarmMotionStrip';
import { NewsGrid } from '../components/NewsGrid';
import { PageMotionHero } from '../components/PageMotionHero';
import { SectionHeader } from '../components/SectionHeader';
import { brand, kashmirFieldNotes } from '../data/content';

export function FieldNotes() {
  return (
    <main className="px-4 pt-32 md:px-8 md:pt-36">
      <PageMotionHero
        eyebrow="Field notes"
        title="Local farming challenges farmers face."
        description="News and field context from Kashmir covering paddy, cherries, apples, weather risk and market pressure."
        video={brand.motionVideos.paddy}
      />

      <section className="section-animate mx-auto max-w-7xl py-16 md:py-20">
        <div className="rounded-[2.5rem] border border-white/60 bg-white/78 p-5 shadow-soft backdrop-blur-2xl sm:p-8 md:p-10">
          <SectionHeader
            eyebrow="Kashmir field context"
            title="Crop pressure, climate signals and market reality from the Valley."
            description="A dedicated local reading page for paddy stress, cherry losses, apple pricing, orchard damage and seasonal uncertainty."
          />
          <div className="mt-12">
            <NewsGrid items={kashmirFieldNotes} />
          </div>
        </div>
      </section>

      <FarmMotionStrip variant="fieldNotes" />
    </main>
  );
}
