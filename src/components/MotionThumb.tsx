type MotionThumbProps = {
  src: string;
  className?: string;
  label?: string;
};

export function MotionThumb({ src, className = '', label }: MotionThumbProps) {
  return (
    <div className={`agri-thumb relative overflow-hidden rounded-[1.35rem] border border-white/60 bg-[#06170f] ${className}`}>
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-100 motion-video"
        src={src}
        muted
        autoPlay
        loop
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#06170f]/45 via-transparent to-white/8" />
      {label ? (
        <span className="absolute left-3 top-3 rounded-full bg-white/72 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-ink backdrop-blur">
          {label}
        </span>
      ) : null}
    </div>
  );
}
