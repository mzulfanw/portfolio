import { Icons } from '@/components';

const { Github, Facebook, Linkedin } = Icons;

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
};
