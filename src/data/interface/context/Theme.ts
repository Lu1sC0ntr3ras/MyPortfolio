import { ReactNode } from 'react';

export interface IThemeStyles {
  body_style: 'body_light' | 'body_dark';
  sidebar_style: 'sidebar_light' | 'sidebar_dark';
  card_style: 'card_light' | 'card_dark';
  color: string;
}

export interface IThemeContext {
  theme: IThemeStyles;
  darkMode: boolean;
  updateTheme: (light: boolean) => void;
}

export interface IThemeState {
  children: ReactNode;
}

export interface IThemeAction {
  type: string;
  payload: boolean;
}
