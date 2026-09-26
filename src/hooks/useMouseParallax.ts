import { useEffect, type RefObject } from 'react';

/** Shifts each element with the cursor; `strength` is the max offset in px (negative inverts). */
export function useMouseParallax(targets: { ref: RefObject<HTMLElement | null>; strength: number }[]) {
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      for (const { ref, strength } of targets) {
        if (ref.current) {
          ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
        }
      }
    };

    document.addEventListener('mousemove', onMove);
    return () => document.removeEventListener('mousemove', onMove);
  }, [targets]);
}
