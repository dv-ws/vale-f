import { brand } from '../data/content';

export function AmbientForest() {
  return (
    <div className="ambient-forest" aria-hidden="true">
      <video
        className="ambient-video"
        src={brand.farmVideo}
        muted
        autoPlay
        loop
        playsInline
        preload="metadata"
      />
      <div className="ambient-video-overlay" />
      <div className="ambient-orb ambient-orb-a" />
      <div className="ambient-orb ambient-orb-b" />
      <div className="ambient-orb ambient-orb-c" />
      <div className="leaf-drift leaf-drift-a" />
      <div className="leaf-drift leaf-drift-b" />
      <div className="leaf-drift leaf-drift-c" />
    </div>
  );
}
