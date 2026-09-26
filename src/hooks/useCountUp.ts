import { useEffect, useState } from 'react';

/** Animates from 0 to `target` with an ease-out curve after `delayMs`. */
export function useCountUp(target: number, durationMs = 1400, delayMs = 500): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frame: number;
    let start: number | undefined;

    const step = (now: number) => {
      start ??= now;
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    const timer = window.setTimeout(() => {
      frame = requestAnimationFrame(step);
    }, delayMs);

    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(frame);
    };
  }, [target, durationMs, delayMs]);

  return value;
}
