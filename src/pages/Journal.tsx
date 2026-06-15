import { FarmMotionStrip } from '../components/FarmMotionStrip';
import { NewsGrid } from '../components/NewsGrid';
import { PageMotionHero } from '../components/PageMotionHero';
import { SectionHeader } from '../components/SectionHeader';
import { brand, globalJournalArticles } from '../data/content';

export function Journal() {
  return (
    <main className="px-4 pt-32 md:px-8 md:pt-36">
      <PageMotionHero
        eyebrow="Global journal"
        title="Articles, papers and global thinking on AI in agriculture."
        description="Selected global references on digital agriculture, responsible AI, regenerative farming and smallholder transformation."
        video={brand.motionVideos.greenhouse}
      />

      <section className="section-animate mx-auto max-w-7xl py-16 md:py-20">
        <div className="rounded-[2.5rem] border border-white/60 bg-white/78 p-5 shadow-soft backdrop-blur-2xl sm:p-8 md:p-10">
          <SectionHeader
            eyebrow="Research desk"
            title="Ideas shaping responsible agricultural intelligence."
            description="A clean global reading space for practical AI, farmer support systems, regenerative practices and inclusive digital agriculture."
          />
          <div className="mt-12">
            <NewsGrid items={globalJournalArticles} />
          </div>
        </div>
      </section>

      <FarmMotionStrip variant="journal" />
    </main>
  );
}
