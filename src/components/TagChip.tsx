import type { Tone } from '../types';

interface TagChipProps {
  label: string;
  tone: Tone;
}

export function TagChip({ label, tone }: TagChipProps) {
  return <span className={`tag tone-${tone}`}>{label}</span>;
}
