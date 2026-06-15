import { farmGallery } from '../data/content';
import { SectionHeader } from './SectionHeader';

export function FarmGallery() {
  return (
    <section className="px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Kashmir crops"
          title="A living farm experience shaped by real fields, orchards and gardens."
          description="The visual language stays rooted in Kashmir agriculture with paddy, cherries, vegetables and high-value crops, while the product layer feels modern and tech-forward."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {farmGallery.map((item, index) => (
            <article
              key={item.title}
              className={`group reveal-card relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/60 bg-[#06170f] shadow-soft ${
                index === 0 ? 'lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06170f]/92 via-[#06170f]/24 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h3 className="font-display text-4xl leading-none tracking-[-0.04em]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/72">{item.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
