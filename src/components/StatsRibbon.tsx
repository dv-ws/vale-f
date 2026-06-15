import { stats } from '../data/content';

export function StatsRibbon() {
  return (
    <section className="relative z-10 -mt-14 px-4 md:px-8">
      <div className="glass mx-auto grid max-w-7xl grid-cols-2 gap-3 rounded-[2rem] p-3 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-[1.5rem] bg-white/50 p-5 text-center ring-1 ring-ink/5">
            <p className="font-display text-4xl tracking-[-0.04em] text-ink md:text-5xl">{stat.value}</p>
            <p className="mt-2 text-sm font-semibold text-ink/70">{stat.label}</p>
            <p className="mt-1 text-xs text-ink/40">{stat.hint}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
