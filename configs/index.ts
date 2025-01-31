import { Icons } from '@/components';

const {
  Github,
  Facebook,
  Linkedin,
  D3JS,
  Docker,
  React,
  NodeJS,
  NextJS,
  Typescript,
} = Icons;

export const components = {
  navbar: [
    { label: 'Home', href: '/' },
    { label: 'About', href: 'about' },
    { label: 'Projects', href: 'projects' },
    { label: 'Blogs', href: 'blogs' },
  ],
  social_media: [
    { name: 'Github', href: 'https://github.com/mzulfanw', Component: Github },
    {
      name: 'Facebook',
      href: 'https://facebook.com/mzulfanw',
      Component: Facebook,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/mzulfanw',
      Component: Linkedin,
    },
  ],
  skills: [
    {
      name: 'D3.js',
      href: 'https://d3js.org/',
      Component: D3JS,
    },
    {
      name: 'Docker',
      href: 'https://www.docker.com/',
      Component: Docker,
    },
    {
      name: 'React',
      href: 'https://react.dev/',
      Component: React,
    },
    {
      name: 'Node.js',
      href: 'https://nodejs.dev/',
      Component: NodeJS,
    },
    {
      name: 'Next JS',
      href: 'https://nextjs.dev/',
      Component: NextJS,
    },
    {
      name: 'Typescript',
      href: 'https://www.typescriptlang.org/',
      Component: Typescript,
    },
  ],
  work_experience: [
    {
      role: 'Software Engineer - Full Stack (Thailand Project)',
      company: 'PT. SMOOETS TEKNOLOGI OUTSOURCING',
      duration: 'Jan 2023 - Present',
      description: [
        'Migrated frameworks, including upgrading React to v18 and transitioning React Router DOM from v5 to v6 for better performance.',
        'Collaborated with engineers from Thailand and Vietnam to ensure a smooth migration process.',
        'Developed a heat map for the US and Canada using D3.js, enhancing data visualization.',
        'Managed daily project deployments to ensure stability and continuous updates.',
        'Assisted in the migration from Create React App (CRA) to Vite.',
      ],
      techStack: [
        'React JS',
        'React Router DOM',
        'Ant Design',
        'Styled Components',
        'D3.js',
        'AWS',
        'MySQL',
        'Node JS',
      ],
    },
    {
      role: 'Software Engineer - Freelance',
      company: 'Freelance',
      duration: 'Jan 2022 - Aug 2023',
      description: [
        'Improved existing projects by adding features and fixing bugs for better system performance.',
        'Collaborated with engineers to accelerate task completion and meet deadlines.',
      ],
    },
    {
      role: 'Frontend Engineer',
      company: 'EKUATOR - Dengan Senang Teknologi',
      duration: 'Mar 2022 - Dec 2022',
      description: [
        'Developed a government project application using Next.js and Material UI, focusing on performance and user experience.',
        'Continued the development of an existing project by adding new features and resolving bugs to enhance system performance and functionality.',
        'Collaborated with other engineers to accelerate task completion, ensuring faster delivery an alignment with project deadlines.',
      ],
    },
    {
      role: 'Web Developer',
      company: 'PT Oasis Mitra Tritunggal (Cursor.id)',
      duration: 'Nov 2021 - Feb 2022',
      description: [
        'Continued development of an existing project by adding features and fixing bugs.',
        'Worked with other engineers to speed up development and ensure timely delivery.',
      ],
    },
  ],
};
