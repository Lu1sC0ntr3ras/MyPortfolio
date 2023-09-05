import { IThemeContext } from '@/data/interface/core/context/theme.interface';
import { Context, createContext } from 'react';

export const initialState: IThemeContext = {
  darkMode: false,
  theme: {
    background: '#FFFFFF',
    page: 'page_light',
    card_style: 'card_light',
    color: '#333333',
    sidebar_style: 'sidebar_light',
    text: 'text_light',
    title: 'title_light'
  },
  updateTheme: () => {}
};

export const ThemeContext: Context<IThemeContext> = createContext<IThemeContext>(initialState);
