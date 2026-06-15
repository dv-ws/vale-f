import { partnerLogos } from '../data/content';
import { GlassCard } from './GlassCard';
import { SectionHeader } from './SectionHeader';

export function BackedBy() {
  return (
    <section className="px-4 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeader
          eyebrow="Backed by Kashmir's agri-innovation ecosystem"
          title="A credible foundation for farm technology."
          description="ValeFarm presents SKUAST Kashmir and RBIC as the institutional trust layer for agricultural innovation, rural entrepreneurship and farmer-focused pilots."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {partnerLogos.map((partner) => (
            <a key={partner.name} href={partner.href} target="_blank" rel="noreferrer" className="group block">
              <GlassCard className="h-full min-h-[220px] transition-transform duration-300 group-hover:-translate-y-1">
                <div className="flex h-full flex-col justify-between">
                  <div className="relative flex h-32 items-center justify-center rounded-[1.5rem] bg-white/85 p-4 ring-1 ring-ink/5">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-h-24 max-w-full object-contain"
                      onError={(event) => {
                        event.currentTarget.style.display = 'none';
                        const fallback = event.currentTarget.nextElementSibling as HTMLElement | null;
                        if (fallback) fallback.style.display = 'grid';
                      }}
                    />
                    <div className="hidden h-24 w-24 place-items-center rounded-2xl bg-ink text-center font-display text-3xl tracking-[-0.04em] text-white">
                      {partner.fallback}
                    </div>
                  </div>
                  <div className="mt-6">
                    <p className="text-xs font-bold uppercase tracking-[0.28em] text-leaf">{partner.name}</p>
                    <h3 className="mt-2 font-display text-3xl leading-none tracking-[-0.03em] text-ink">{partner.caption}</h3>
                  </div>
                </div>
              </GlassCard>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
