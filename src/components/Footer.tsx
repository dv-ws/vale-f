import { Instagram, Linkedin } from 'lucide-react';
import { brand } from '../data/content';

export function Footer() {
  return (
    <footer className="px-4 pb-8 pt-16 md:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/60 bg-[#06170f] shadow-soft">
        <div className="relative min-h-[330px] overflow-hidden p-6 md:p-8">
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-100 motion-video"
            src={brand.motionVideos.footer}
            muted
            autoPlay
            loop
            playsInline
            preload="metadata"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(183,204,138,.16),transparent_30%),linear-gradient(90deg,rgba(6,23,15,.72),rgba(6,23,15,.40),rgba(6,23,15,.22))]" />
          <div className="leaf-drift footer-leaf-a" />
          <div className="leaf-drift footer-leaf-b" />

          <div className="relative z-10 flex min-h-[265px] flex-col justify-between gap-10 text-white">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
              <div className="flex items-center gap-4">
                <img src={brand.logo} alt="Vale Farm Kashmir" className="h-16 w-16 rounded-2xl bg-white object-contain p-1 ring-1 ring-white/60 md:h-20 md:w-20" />
                <div>
                  <p className="font-display text-4xl leading-none tracking-[-0.04em] md:text-5xl">ValeFarm</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.34em] text-white/72">Kashmir</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={brand.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-ink transition-transform hover:scale-105"
                >
                  <Instagram size={17} /> Instagram
                </a>
                <a
                  href={brand.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/18 px-5 py-3 text-sm font-bold text-white backdrop-blur transition-transform hover:scale-105"
                >
                  <Linkedin size={17} /> LinkedIn
                </a>
              </div>
            </div>

            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/72">
              © {new Date().getFullYear()} Vale Farm Kashmir
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
