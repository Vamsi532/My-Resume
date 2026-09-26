import { profile } from '../data/profile';

export function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {profile.name} · {profile.title} · {profile.location}
      </p>
    </footer>
  );
}
