export function GrowthTree() {
  return (
    <div className="relative mx-auto flex min-h-[440px] max-w-5xl items-end justify-center overflow-hidden rounded-[2.5rem] border border-white/50 bg-gradient-to-b from-cream via-mist to-moss/30 p-6 shadow-soft">
      <div className="noise" />
      <div className="absolute left-8 top-8 rounded-full border border-ink/10 bg-white/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.26em] text-ink/60 backdrop-blur">Scroll-driven growth</div>
      <div className="absolute bottom-0 h-28 w-full bg-gradient-to-t from-[#31521f]/30 to-transparent" />
      <svg className="relative z-10 h-[360px] w-[360px] md:h-[430px] md:w-[430px]" viewBox="0 0 420 420" fill="none" role="img" aria-label="Animated plant growing into tree">
        <path className="tree-trunk" d="M207 396C205 333 211 272 214 203" stroke="#17492e" strokeWidth="18" strokeLinecap="round" />
        <path className="tree-trunk" d="M214 234C190 198 167 174 129 151" stroke="#17492e" strokeWidth="12" strokeLinecap="round" />
        <path className="tree-trunk" d="M216 209C250 178 279 145 315 110" stroke="#17492e" strokeWidth="12" strokeLinecap="round" />
        <path className="tree-trunk" d="M211 291C250 266 285 243 332 235" stroke="#17492e" strokeWidth="10" strokeLinecap="round" />
        <ellipse className="tree-leaf" cx="117" cy="135" rx="55" ry="31" fill="#6b8f2a" transform="rotate(-24 117 135)" />
        <ellipse className="tree-leaf" cx="318" cy="96" rx="62" ry="34" fill="#487427" transform="rotate(-32 318 96)" />
        <ellipse className="tree-leaf" cx="352" cy="224" rx="54" ry="30" fill="#6b8f2a" transform="rotate(-10 352 224)" />
        <ellipse className="tree-leaf" cx="182" cy="180" rx="44" ry="26" fill="#89a846" transform="rotate(28 182 180)" />
        <ellipse className="tree-leaf" cx="254" cy="157" rx="46" ry="28" fill="#89a846" transform="rotate(-44 254 157)" />
        <circle cx="210" cy="360" r="72" fill="#6b8f2a" opacity="0.12" />
        <circle cx="210" cy="360" r="112" stroke="#6b8f2a" opacity="0.14" strokeWidth="2" />
      </svg>
      <div className="absolute right-8 top-20 hidden max-w-xs rounded-[2rem] border border-white/60 bg-white/60 p-5 backdrop-blur-xl md:block">
        <p className="font-display text-3xl leading-none tracking-[-0.03em] text-ink">From seed data to decision trees.</p>
        <p className="mt-3 text-sm leading-6 text-ink/60">Every farm record, alert and season improves the AI engine behind ValeFarm.</p>
      </div>
    </div>
  );
}
