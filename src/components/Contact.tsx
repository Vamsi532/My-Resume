import { contactLinks } from '../data/profile';
import { Section } from './Section';

export function Contact() {
  return (
    <Section
      id="contact"
      label="contact"
      title="Let's build something"
      subtitle="Open to full-time roles, contract work, and interesting problems. Chicago-based, open to remote."
    >
      <div className="contact-grid">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="contact-card"
            download={link.download || undefined}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
          >
            <div className="contact-icon">{link.icon}</div>
            <div>
              <div className="contact-label">{link.label}</div>
              <div className="contact-value">{link.value}</div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
