export interface INavigationLink {
  name: string;
  href: string;
}

export const navigationLinks: INavigationLink[] = [
  {
    name: 'Home',
    href: 'header',
  },
  {
    name: 'About',
    href: 'about',
  },
  {
    name: 'School',
    href: 'school',
  },
  {
    name: 'Projects',
    href: 'projects',
  },
];
