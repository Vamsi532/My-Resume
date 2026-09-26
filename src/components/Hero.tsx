import { profile, RESUME_URL, stats, typingPhrases } from '../data/profile';
import { useTypewriter } from '../hooks/useTypewriter';
import { Orbit } from './Orbit';
import { StatCounter } from './StatCounter';

export function Hero() {
  const typed = useTypewriter(typingPhrases);

  return (
    <section className="hero" id="about">
      <div className="hero-content">
        <div className="hero-eyebrow">{profile.eyebrow}</div>
        <h1 className="hero-title">
          Building
          <br />
          <span className="text-gradient">Scalable Systems</span>
          <br />
          <span className="text-dim">that ship.</span>
        </h1>
        <div className="typing">
          <span>{typed}</span>
          <span className="cursor" />
        </div>
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-actions">
          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            Get in touch →
          </a>
          <a href="#experience" className="btn btn-ghost">
            View experience
          </a>
          <a href={RESUME_URL} download className="btn btn-outline">
            ⬇ Resume
          </a>
        </div>
        <div className="hero-stats">
          {stats.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
      <div className="hero-visual">
        <Orbit />
      </div>
    </section>
  );
}
