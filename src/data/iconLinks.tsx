import { ReactNode } from 'react';
import Icons from '../components/Icons';

export interface IIconLink {
  icon: ReactNode;
  href: string;
}

export const iconLinks = [
  {
    icon: <Icons.LinkedInIcon />,
    href: '/',
  },
  {
    icon: <Icons.GithubIcon />,
    href: '/',
  },
  {
    icon: <Icons.TwitterIcon />,
    href: '/',
  },
];
