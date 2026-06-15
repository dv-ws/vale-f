import { useEffect, useState } from 'react';

export function CursorGlow() {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event: PointerEvent) => setPoint({ x: event.clientX, y: event.clientY });
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-[1] hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-moss/20 blur-3xl md:block"
      style={{ left: point.x, top: point.y }}
    />
  );
}
