type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeader({ eyebrow, title, description, align = 'left' }: SectionHeaderProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="section-eyebrow mb-3 text-xs font-bold uppercase tracking-[0.34em] text-leaf">{eyebrow}</p>
      <h2 className="section-title text-balance font-display text-4xl leading-[0.98] tracking-[-0.04em] text-ink sm:text-5xl md:text-7xl">
        {title}
      </h2>
      {description ? <p className="section-description mt-6 text-base leading-8 text-ink/64 md:text-lg">{description}</p> : null}
    </div>
  );
}
