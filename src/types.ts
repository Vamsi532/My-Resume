/** Color tones defined in styles/theme.css (`.tone-*`). */
export type Tone = 'primary' | 'secondary' | 'green' | 'amber' | 'rose' | 'neutral';

export interface Tag {
  label: string;
  tone: Tone;
}

export interface SkillGroup {
  title: string;
  icon: string;
  tone: Tone;
  items: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  tone: Tone;
  current?: boolean;
  highlights: string[];
  techStack: string[];
  tags: Tag[];
}

export interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

export interface OrbitBadge {
  label: string;
  tone: Tone;
  radius: number;
  startAngle: number;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: string;
  external?: boolean;
  download?: boolean;
}
