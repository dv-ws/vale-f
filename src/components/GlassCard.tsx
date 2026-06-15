import type { CSSProperties, ReactNode } from 'react';

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function GlassCard({ children, className = '', style }: GlassCardProps) {
  return <div className={`glass forest-card reveal-card rounded-[2rem] p-6 ${className}`} style={style}>{children}</div>;
}
