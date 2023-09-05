import { ReactNode } from 'react';

export interface IThemeStyles {
  page: 'page_light' | 'page_dark';
  sidebar_style: 'sidebar_light' | 'sidebar_dark';
  card_style: 'card_light' | 'card_dark';
  title: 'title_dark' | 'title_light';
  text: 'text_dark' | 'text_light';
  color: '#FFFFFF' | '#333333';
  background: '#333333' | '#FFFFFF';
}

export interface IThemeContext {
  theme: IThemeStyles;
  darkMode: boolean;
  updateTheme: () => void;
}

export interface IThemeState {
  children: ReactNode;
}

export interface IThemeAction {
  type: string;
  payload: boolean;
}
