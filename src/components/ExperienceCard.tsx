import type { Experience } from '../types';
import { TagChip } from './TagChip';

interface ExperienceCardProps {
  job: Experience;
  open: boolean;
  onToggle: () => void;
}

export function ExperienceCard({ job, open, onToggle }: ExperienceCardProps) {
  const bodyId = `exp-${job.company.replace(/\W+/g, '-').toLowerCase()}`;

  return (
    <article className={`exp-card tone-${job.tone}${open ? ' is-open' : ''}`}>
      <button type="button" className="exp-header" aria-expanded={open} aria-controls={bodyId} onClick={onToggle}>
        <span className="exp-role">{job.role}</span>
        <span className="exp-company">{job.company}</span>
        <span className="exp-period">
          <span className={`exp-dot${job.current ? ' is-live' : ''}`} />
          {job.period}
        </span>
      </button>
      <div id={bodyId} className="exp-body">
        <div className="exp-body-inner">
          <div className="exp-location">📍 {job.location}</div>
          <ul className="exp-points">
            {job.highlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className="exp-stack">
            <span>Tech Stack:</span> {job.techStack.join(', ')}
          </div>
          <div className="tag-list exp-tags">
            {job.tags.map((tag) => (
              <TagChip key={tag.label} {...tag} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
