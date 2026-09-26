import { useEffect, useState } from 'react';

const TYPE_MS = 75;
const DELETE_MS = 38;
const HOLD_MS = 1600;

/** Types each phrase out, holds, deletes it, then moves to the next. */
export function useTypewriter(phrases: string[]): string {
  const [text, setText] = useState('');

  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer: number;

    const tick = () => {
      const word = phrases[phraseIndex];
      let delay = deleting ? DELETE_MS : TYPE_MS;

      if (!deleting) {
        charIndex += 1;
        if (charIndex === word.length) {
          deleting = true;
          delay = HOLD_MS;
        }
      } else {
        charIndex -= 1;
        if (charIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
      }

      setText(word.slice(0, charIndex));
      timer = window.setTimeout(tick, delay);
    };

    tick();
    return () => window.clearTimeout(timer);
  }, [phrases]);

  return text;
}
