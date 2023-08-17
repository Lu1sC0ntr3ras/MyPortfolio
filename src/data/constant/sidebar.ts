import { ISidebar, ISidebarLeft, ISidebarLeftOption, ISidebarRightOption } from '../interface/shared/components/base/sidebar/Sidebar.interface';

const leftOptions: ISidebarLeftOption[] = [
  {
    text: 'Home',
    route: '/home'
  },
  {
    text: 'Profile',
    route: '/profile'
  },
  {
    text: 'Education',
    route: '/education'
  },
  {
    text: 'Experience',
    route: '/experience'
  },
  {
    text: 'Skills',
    route: '/skills'
  },
  {
    text: 'Languajes',
    route: '/languajes'
  },
  {
    text: 'Contact info',
    route: '/contact-info'
  }
];

const education: ISidebarLeftOption[] = [
  {
    text: 'Professional',
    route: '/education/professional'
  },
  {
    text: 'Complementary',
    route: '/education/complementary'
  }
];

const skills: ISidebarLeftOption[] = [
  {
    text: 'Programming languages',
    route: '/skills/programming-languages'
  },
  {
    text: 'Front End',
    route: '/skills/frontend'
  },
  {
    text: 'Back End',
    route: '/skills/backend'
  },
  {
    text: 'Additional Tools and Technologies',
    route: '/skills/additional-tools-and-technologies'
  }
];

export const rightOptions: ISidebarLeft = {
  education,
  skills
};

export const sidebar: ISidebar = {
  title: 'Lu1sC0ntr3ras',
  subtitle: 'Full Stack developer',
  leftOptions
};
