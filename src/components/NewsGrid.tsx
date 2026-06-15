import { ArrowUpRight } from 'lucide-react';
import { articles } from '../data/content';
import { GlassCard } from './GlassCard';

type Article = (typeof articles)[number];

type NewsGridProps = {
  limit?: number;
  items?: Article[];
};

export function NewsGrid({ limit, items = articles }: NewsGridProps) {
  const list = typeof limit === 'number' ? items.slice(0, limit) : items;

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {list.map((article, index) => (
        <a key={article.title} href={article.url} target="_blank" rel="noreferrer" className="group block">
          <GlassCard className="flex h-full min-h-[310px] flex-col justify-between transition-transform duration-300 group-hover:-translate-y-1" style={{ animationDelay: `${index * 90}ms` }}>
            <div>
              <div className="mb-6 flex items-center justify-between gap-3">
                <span className="rounded-full bg-ink/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-ink/60">{article.category}</span>
                <ArrowUpRight size={18} className="text-leaf transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <h3 className="article-link font-display text-3xl leading-[0.98] tracking-[-0.035em] text-ink">{article.title}</h3>
              <p className="mt-5 text-sm leading-7 text-ink/60">{article.description}</p>
            </div>
            <div className="mt-8 flex items-center justify-between border-t border-ink/10 pt-4 text-xs font-semibold uppercase tracking-[0.16em] text-ink/40">
              <span>{article.source}</span>
              <span>{article.date}</span>
            </div>
          </GlassCard>
        </a>
      ))}
    </div>
  );
}
