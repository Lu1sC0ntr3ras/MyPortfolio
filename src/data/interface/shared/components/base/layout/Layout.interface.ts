import { FC, ReactNode } from 'react';

export interface ILayout {
  children: ReactNode;
  NavbarComponent?: FC;
}
