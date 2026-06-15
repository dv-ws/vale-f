import type { ReactNode } from 'react';
import { brand } from '../data/content';

type PageMotionHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
  video?: string;
};

export function PageMotionHero({ eyebrow, title, description, children, video = brand.motionVideos.fields }: PageMotionHeroProps) {
  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] border border-white/60 bg-[#06170f] p-6 text-white shadow-soft md:rounded-[3rem] md:p-10 lg:p-14">
      <video
        className="absolute inset-0 h-full w-full scale-105 object-cover opacity-100 motion-video"
        src={video}
        muted
        autoPlay
        loop
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(183,204,138,.12),transparent_28%),linear-gradient(180deg,rgba(6,23,15,.24),rgba(6,23,15,.72))]" />
      <div className="portal-grid absolute inset-0 opacity-26" />
      <div className="noise" />
      <div className="relative z-10 grid min-h-[360px] gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-end">
        <div className="motion-copy">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-moss typing-cursor">{eyebrow}</p>
          <h1 className="text-balance max-w-4xl font-display text-4xl leading-[0.92] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/88 md:text-lg">{description}</p>
        </div>
        {children ? <div className="relative z-10 w-full min-w-0">{children}</div> : null}
      </div>
    </section>
  );
}
