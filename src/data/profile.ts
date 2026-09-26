import type { ContactLink, OrbitBadge, Stat } from '../types';

export const RESUME_URL = `${import.meta.env.BASE_URL}Nagavamsi.Meduri.docx`;

export const profile = {
  name: 'Nagavamsi M',
  initials: 'NM',
  title: 'Senior React Developer & Full Stack Engineer',
  location: 'Chicago, IL',
  email: 'nagavamsi532@gmail.com',
  eyebrow: 'Senior React Developer · 8+ Years',
  summary:
    'React / TypeScript / Redux / Node.js engineer with 8+ years across fintech, energy, and big tech. From Discover Financial to Apple — I build front-ends that perform and back-ends that scale.',
};

export const typingPhrases = [
  'React 18 + TypeScript',
  'Redux Toolkit Architect',
  'Node.js / Express.js',
  'Next.js Engineering',
  'Full Stack Developer',
  'CI/CD & Cloud Deployments',
];

export const stats: Stat[] = [
  { value: 8, suffix: '+', label: 'Years exp' },
  { value: 5, label: 'Companies' },
  { value: 85, suffix: '+', label: '% Code Coverage' },
  { value: 20, suffix: '+', label: 'Technologies' },
];

export const orbitBadges: OrbitBadge[] = [
  { label: 'React', tone: 'secondary', radius: 165, startAngle: 0 },
  { label: 'TypeScript', tone: 'secondary', radius: 165, startAngle: 50 },
  { label: 'Redux', tone: 'secondary', radius: 165, startAngle: 105 },
  { label: 'Next.js', tone: 'secondary', radius: 165, startAngle: 160 },
  { label: 'Node.js', tone: 'primary', radius: 165, startAngle: 215 },
  { label: 'Express', tone: 'primary', radius: 165, startAngle: 268 },
  { label: 'AWS', tone: 'amber', radius: 165, startAngle: 318 },
  { label: 'MongoDB', tone: 'green', radius: 118, startAngle: 15 },
  { label: 'Docker', tone: 'amber', radius: 118, startAngle: 105 },
  { label: 'Jest', tone: 'green', radius: 118, startAngle: 195 },
  { label: 'Kubernetes', tone: 'amber', radius: 118, startAngle: 285 },
];

export const contactLinks: ContactLink[] = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: '✉' },
  { label: 'Phone', value: '+1 (913) 318-8065', href: 'tel:+19133188065', icon: '☎' },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/nagavamsi532',
    href: 'https://www.linkedin.com/in/nagavamsi532/',
    icon: 'in',
    external: true,
  },
  { label: 'Resume', value: 'Download .docx', href: RESUME_URL, icon: '📄', download: true },
];
