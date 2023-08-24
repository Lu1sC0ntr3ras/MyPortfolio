import { ISidebar, ISidebarLeftOption } from '../interface/shared/components/base/sidebar/sidebar.interface';

const leftOptions: ISidebarLeftOption[] = [
  {
    text: 'Home',
    route: '/home'
  },
  {
    text: 'Portfolio',
    route: '/portfolio'
  },
  {
    text: 'About me',
    route: '/about-me'
  },
  {
    text: 'Skills',
    route: '/skills'
  },
  {
    text: 'Curriculum',
    route: '/curriculum'
  },
  {
    text: 'Certifications',
    route: '/certifications'
  },
  {
    text: 'Contact info',
    route: '/contact-info'
  }
];

export const sidebar: ISidebar = {
  title: 'Lu1sC0ntr3ras',
  subtitle: 'Full Stack developer',
  leftOptions
};
