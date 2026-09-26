import type { ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';

interface SectionProps {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}

export function Section({ id, label, title, subtitle, children }: SectionProps) {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section ref={ref} id={id} className={`section reveal${visible ? ' is-visible' : ''}`}>
      <div className="section-label">{label}</div>
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{subtitle}</p>
      {children}
    </section>
  );
}
