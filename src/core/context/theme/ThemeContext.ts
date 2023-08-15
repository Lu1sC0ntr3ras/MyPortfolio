import { IThemeContext } from '@/data/interface/context/Theme';
import { Context, createContext } from 'react';

export const initialState: IThemeContext = {
  darkMode: false,
  theme: {
    body_style: 'body_light',
    card_style: 'card_light',
    sidebar_style: 'sidebar_light'
  },
  updateTheme: () => {}
};

export const ThemeContext: Context<IThemeContext> = createContext<IThemeContext>(initialState);
