import { useState } from 'react';
import { experiences } from '../data/experience';
import { ExperienceCard } from './ExperienceCard';
import { Section } from './Section';

export function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section
      id="experience"
      label="career"
      title="Professional experience"
      subtitle={`Click any role to expand — ${experiences.length} enterprise clients across fintech, energy, banking & big tech.`}
    >
      <div className="exp-list">
        {experiences.map((job, i) => (
          <ExperienceCard
            key={job.company}
            job={job}
            open={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </Section>
  );
}
