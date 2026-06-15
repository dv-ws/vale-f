import { PlayCircle } from 'lucide-react';
import { brand } from '../data/content';

type MotionVariant = 'home' | 'platform' | 'about' | 'fieldNotes' | 'journal' | 'careers' | 'contact';

type Scene = {
  title: string;
  label: string;
  description: string;
  video: string;
};

const scenesByVariant: Record<MotionVariant, Scene[]> = {
  home: [
    {
      title: 'Morning across the fields',
      label: 'Fields',
      description: 'The homepage opens with visible farm movement, giving the product a warmer agricultural identity.',
      video: brand.motionVideos.seedling
    },
    {
      title: 'Fruit seasons in motion',
      label: 'Orchards',
      description: 'Orchard visuals connect ValeFarm with cherries, apples and high-value crops from Kashmir.',
      video: brand.motionVideos.closeup
    },
    {
      title: 'Harvest timing matters',
      label: 'Harvest',
      description: 'Harvest footage supports the story of planning, weather, market windows and farmer decisions.',
      video: brand.motionVideos.valley
    }
  ],
  platform: [
    {
      title: 'Signals from the field become simple decisions',
      label: 'Platform layer',
      description: 'Records, weather, crop stage and market movement are presented as farmer-friendly guidance instead of complex dashboards.',
      video: brand.motionVideos.platformMotion
    }
  ],
  about: [
    {
      title: 'Rooted in Kashmir’s growing seasons',
      label: 'About',
      description: 'The brand story stays close to real crops, local climate and a founding team with global AI exposure.',
      video: brand.motionVideos.aboutMotion
    }
  ],
  fieldNotes: [
    {
      title: 'Local crop pressure in view',
      label: 'Field notes',
      description: 'Kashmir field notes stay focused on paddy, cherries, apples, weather risk and market pressure.',
      video: brand.motionVideos.harvesting
    }
  ],
  journal: [
    {
      title: 'Global agriculture intelligence',
      label: 'Global journal',
      description: 'Global references stay focused on AI, digital agriculture, regenerative practices and research thinking.',
      video: brand.motionVideos.journalMotion
    }
  ],
  careers: [
    {
      title: 'Build with growers, ship with care',
      label: 'Careers',
      description: 'Careers focus on practical software, field learning and useful agriculture tools.',
      video: brand.motionVideos.careerMotion
    }
  ],
  contact: [
    {
      title: 'Start a farm technology conversation',
      label: 'Contact',
      description: 'Reach out for pilots, partnerships, field onboarding or institutional collaboration.',
      video: brand.motionVideos.orchard
    }
  ]
};

type FarmMotionStripProps = {
  variant?: MotionVariant;
};

export function FarmMotionStrip({ variant = 'home' }: FarmMotionStripProps) {
  const motionScenes = scenesByVariant[variant];
  const isSingle = motionScenes.length === 1;

  return (
    <section className="px-4 py-14 md:px-8">
      <div className={`mx-auto grid max-w-7xl gap-4 ${isSingle ? 'grid-cols-1' : 'md:grid-cols-3'}`}>
        {motionScenes.map((scene, index) => (
          <article
            key={scene.title}
            className={`group reveal-card relative overflow-hidden rounded-[2rem] border border-white/60 bg-[#06170f] shadow-soft ${isSingle ? 'min-h-[360px] md:min-h-[430px]' : 'min-h-[300px]'}`}
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <video
              className="absolute inset-0 h-full w-full object-cover opacity-95 transition-transform duration-[1400ms] group-hover:scale-110"
              src={scene.video}
              muted
              autoPlay
              loop
              playsInline
              preload="metadata"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06170f]/86 via-[#06170f]/18 to-transparent" />
            <div className="motion-card-label absolute left-4 top-4 inline-flex max-w-[calc(100%-2rem)] items-center gap-2 rounded-full border border-white/20 bg-white/18 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/88 backdrop-blur-xl sm:left-5 sm:top-5 sm:px-4 sm:text-[11px]">
              <PlayCircle size={15} /> {scene.label}
            </div>
            <div className={`absolute inset-x-0 bottom-0 p-5 text-white sm:p-6 ${isSingle ? 'md:p-10' : ''}`}>
              <h3 className={`motion-card-title max-w-3xl font-display leading-[0.96] tracking-[-0.04em] ${isSingle ? 'text-4xl sm:text-5xl md:text-7xl' : 'text-3xl sm:text-4xl'}`}>
                {scene.title}
              </h3>
              <p className={`motion-card-copy mt-3 max-w-2xl text-sm leading-6 text-white/78 ${isSingle ? 'sm:text-base sm:leading-7' : ''}`}>
                {scene.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
