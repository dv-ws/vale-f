import { ArrowRight, PlayCircle, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { brand } from '../data/content';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { MarketSizePanel } from './MarketSizePanel';

export function CinematicHero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [opacity, setOpacity] = useState(0);
  const progress = useScrollProgress();
  const zoom = 1 + Math.min(progress * 0.35, 0.35);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let raf = 0;
    let mounted = true;
    const fadeSeconds = 0.5;

    const tick = () => {
      if (!mounted || !video.duration || Number.isNaN(video.duration)) {
        raf = requestAnimationFrame(tick);
        return;
      }

      const { currentTime, duration } = video;
      if (currentTime < fadeSeconds) {
        setOpacity(currentTime / fadeSeconds);
      } else if (duration - currentTime < fadeSeconds) {
        setOpacity(Math.max(0, (duration - currentTime) / fadeSeconds));
      } else {
        setOpacity(1);
      }
      raf = requestAnimationFrame(tick);
    };

    const onEnded = () => {
      setOpacity(0);
      window.setTimeout(() => {
        if (!mounted) return;
        video.currentTime = 0;
        void video.play();
      }, 100);
    };

    video.addEventListener('ended', onEnded);
    void video.play().catch(() => setOpacity(1));
    raf = requestAnimationFrame(tick);

    return () => {
      mounted = false;
      video.removeEventListener('ended', onEnded);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden px-4 pb-20 pt-[calc(8rem_-_75px)] md:px-8 md:pb-28">
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#06170f]">
        <video
          ref={videoRef}
          className="hero-video absolute h-full w-full object-cover object-center transition-opacity duration-300"
          style={{ inset: 'auto 0 0 0', top: '0px', opacity, transform: `scale(${zoom})` }}
          src={brand.heroVideo}
          muted
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(183,204,138,.10),transparent_28%),linear-gradient(180deg,rgba(255,253,245,.08)_0%,rgba(255,253,245,.03)_42%,rgba(255,253,245,.18)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/6 via-transparent to-background/20" />
        <div className="portal-grid absolute inset-0 opacity-28" />
        <div className="noise" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col items-center justify-center pt-28 text-center md:pt-36">
        <div className="animate-fade-rise mb-6 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/76 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-ink/65 backdrop-blur-xl">
          <Sparkles size={15} className="text-leaf" />
          <span className="typing-cursor typewriter-line">Farm intelligence from Kashmir</span>
        </div>

        <h1 className="animate-fade-rise max-w-6xl font-display text-5xl font-normal leading-[0.95] tracking-[-0.046em] text-black sm:text-7xl md:text-8xl lg:text-[8rem]">
          Growing <span className="italic text-[#6F6F6F]">smarter farms,</span><br /> rooted in the Valley.
        </h1>

        <p className="animate-fade-rise-delay motion-copy mt-8 max-w-2xl text-base leading-relaxed text-[#3f5141] sm:text-lg">
          From Kashmir, ValeFarm is building a farmer-first agriculture platform for field records, crop guidance, risk signals and market awareness, practical enough for the farm and modern enough to scale.
        </p>

        <div className="animate-fade-rise-delay-2 mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            to="/platform"
            className="magnetic-button inline-flex items-center gap-3 rounded-full bg-black px-10 py-4 text-base font-semibold text-white shadow-glow md:px-14 md:py-5"
          >
            Explore Platform <ArrowRight size={18} />
          </Link>
          <Link
            to="/careers"
            className="magnetic-button inline-flex items-center gap-3 rounded-full border border-ink/10 bg-white/78 px-8 py-4 text-base font-semibold text-ink backdrop-blur"
          >
            <PlayCircle size={18} /> Join our team
          </Link>
        </div>

        <div className="animate-float-soft mt-14 w-full max-w-6xl text-left md:mt-20">
          <MarketSizePanel />
        </div>
      </div>
    </section>
  );
}
