import type { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    title: 'React Ecosystem',
    icon: '⚡',
    tone: 'secondary',
    items: ['React.js 18', 'Redux Toolkit', 'RTK Query', 'Context API', 'React Query', 'Next.js', 'React Router', 'React Hooks'],
  },
  {
    title: 'Node.js & APIs',
    icon: '◈',
    tone: 'primary',
    items: ['Node.js', 'Express.js', 'TSOA', 'REST API', 'GraphQL', 'gRPC', 'OAuth2 / JWT', 'Webhook Handlers', 'Microservices'],
  },
  {
    title: 'Languages',
    icon: '{ }',
    tone: 'secondary',
    items: ['TypeScript', 'JavaScript ES6+', 'Java 8/11/17', 'Kotlin', 'SQL / PL-SQL', 'HTML5 / CSS3'],
  },
  {
    title: 'Databases',
    icon: '🗄',
    tone: 'green',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Oracle', 'Cassandra', 'IBM DB2'],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁',
    tone: 'amber',
    items: ['AWS EC2/S3/RDS', 'Docker', 'Kubernetes', 'Helm', 'Jenkins', 'GitLab CI/CD', 'OpenShift', 'GitHub Actions'],
  },
  {
    title: 'Testing & Tools',
    icon: '✓',
    tone: 'neutral',
    items: ['Jest', 'React Testing Library', 'Playwright', 'Cypress', 'Supertest', 'Storybook', 'ESLint / Prettier', 'Postman', 'JIRA'],
  },
];
