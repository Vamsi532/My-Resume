import { useMemo, useRef } from 'react';
import { useMouseParallax } from '../hooks/useMouseParallax';

export function Background() {
  const orbA = useRef<HTMLDivElement>(null);
  const orbB = useRef<HTMLDivElement>(null);

  const targets = useMemo(
    () => [
      { ref: orbA, strength: 28 },
      { ref: orbB, strength: -18 },
    ],
    [],
  );
  useMouseParallax(targets);

  return (
    <div aria-hidden="true">
      <div ref={orbA} className="orb orb-a" />
      <div ref={orbB} className="orb orb-b" />
    </div>
  );
}
