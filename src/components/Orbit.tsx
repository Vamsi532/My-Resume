import { useEffect, useRef } from 'react';
import { orbitBadges } from '../data/profile';
import { TagChip } from './TagChip';

const SIZE = 360;
const CENTER = SIZE / 2;
const OUTER_RADIUS = 165;

export function Orbit() {
  const badgeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Alternate direction per badge; outer ring moves slower than inner.
    const angles = orbitBadges.map((b) => b.startAngle);
    const speeds = orbitBadges.map(
      (b, i) => (b.radius === OUTER_RADIUS ? 0.16 : 0.26) * (i % 2 === 0 ? 1 : -1),
    );
    let frame: number;

    const animate = () => {
      orbitBadges.forEach((badge, i) => {
        const el = badgeRefs.current[i];
        if (!el) return;
        angles[i] += speeds[i];
        const rad = (angles[i] * Math.PI) / 180;
        const x = CENTER + badge.radius * Math.cos(rad) - el.offsetWidth / 2;
        const y = CENTER + badge.radius * Math.sin(rad) - el.offsetHeight / 2;
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="orbit" aria-hidden="true">
      <div className="orbit-ring orbit-ring-outer" />
      <div className="orbit-ring orbit-ring-middle" />
      <div className="orbit-ring orbit-ring-inner" />
      <div className="orbit-center">
        React
        <br />+<br />
        Node.js
      </div>
      {orbitBadges.map((badge, i) => (
        <div
          key={badge.label}
          className="orbit-badge"
          ref={(el) => {
            badgeRefs.current[i] = el;
          }}
        >
          <TagChip label={badge.label} tone={badge.tone} />
        </div>
      ))}
    </div>
  );
}
