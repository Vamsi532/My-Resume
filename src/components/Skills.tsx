import { skillGroups } from '../data/skills';
import { Section } from './Section';
import { TagChip } from './TagChip';

export function Skills() {
  return (
    <Section
      id="skills"
      label="expertise"
      title="Technical stack"
      subtitle="8+ years across the full product lifecycle — from scalable Node.js APIs to pixel-perfect React UIs."
    >
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div key={group.title} className="skill-card">
            <div className="skill-head">
              <div className={`skill-icon tone-${group.tone}`}>{group.icon}</div>
              <span className="skill-title">{group.title}</span>
            </div>
            <div className="tag-list">
              {group.items.map((item) => (
                <TagChip key={item} label={item} tone={group.tone} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
