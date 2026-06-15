import { BarChart3, Globe2, Sprout, TrendingUp } from 'lucide-react';

const marketCards = [
  {
    value: '500M+',
    label: 'Farmers worldwide',
    note: 'A global farming community that needs simpler digital tools.',
    icon: Globe2
  },
  {
    value: '40%',
    label: 'Food lost to inefficiency',
    note: 'Better timing, records and alerts can reduce avoidable waste.',
    icon: TrendingUp
  },
  {
    value: '$24B',
    label: 'AgriTech market by 2030',
    note: 'A fast-growing market for practical farmer-first technology.',
    icon: BarChart3
  },
  {
    value: '140M',
    label: 'Farming households in India',
    note: 'A large domestic opportunity before wider expansion.',
    icon: Sprout
  }
];

export function MarketSizePanel() {
  return (
    <div className="market-panel w-full overflow-hidden rounded-[2rem] border border-white/70 bg-white/62 p-2 shadow-dashboard backdrop-blur-2xl md:rounded-[2.5rem] md:p-4">
      <div className="relative overflow-hidden rounded-[1.5rem] border border-ink/10 bg-white/92 p-4 sm:p-5 md:p-6 lg:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(183,204,138,.22),transparent_28%),radial-gradient(circle_at_88%_0%,rgba(107,143,42,.14),transparent_25%)]" />
        <div className="relative z-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="typing-chip text-[11px] font-bold uppercase tracking-[0.24em] text-leaf sm:text-xs">Market size</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl leading-[0.98] tracking-[-0.04em] text-ink sm:text-5xl md:text-6xl">
              A large agricultural opportunity, starting from Kashmir.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-ink/68 sm:text-[15px] sm:leading-7">
            ValeFarm is designed for real farms, orchards and gardens, with a product layer that can support local growers today and scale to wider agricultural markets tomorrow.
          </p>
        </div>

        <div className="market-card-grid relative z-10 mt-8">
          {marketCards.map((card, index) => (
            <div
              key={card.label}
              className="group reveal-card flex min-w-0 flex-col rounded-[1.35rem] border border-ink/10 bg-white/95 p-4 transition-transform duration-300 hover:-translate-y-1 hover:bg-white sm:p-5"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <card.icon className="mb-4 shrink-0 text-leaf" size={20} />
              <p className="market-card-value font-display text-[2.35rem] leading-none tracking-[-0.055em] text-ink sm:text-[2.75rem] lg:text-[3rem]">
                {card.value}
              </p>
              <p className="mt-4 text-[0.72rem] font-extrabold uppercase leading-[1.25] tracking-[0.08em] text-ink/72 sm:text-xs">
                {card.label}
              </p>
              <p className="mt-3 text-[0.82rem] leading-6 text-ink/64 sm:text-sm">{card.note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
