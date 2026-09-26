import { profile, RESUME_URL } from '../data/profile';

const links = ['about', 'skills', 'experience', 'contact'];

export function Nav() {
  return (
    <nav className="nav">
      <div className="nav-logo">
        {profile.initials}
        <span> / portfolio</span>
      </div>
      <div className="nav-links">
        {links.map((id) => (
          <a key={id} href={`#${id}`}>
            {id}
          </a>
        ))}
      </div>
      <a href={RESUME_URL} download className="nav-resume">
        resume ↓
      </a>
    </nav>
  );
}
