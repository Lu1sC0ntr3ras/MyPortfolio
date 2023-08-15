import { IThemeAction, IThemeContext, IThemeStyles } from '@/data/interface/context/Theme';

const themeReducer = (state: IThemeContext, action: IThemeAction): IThemeContext => {
  const { type, payload } = action;
  if (type === 'CHANGE_MODE') {
    const theme: IThemeStyles = {
      body_style: payload ? 'body_light' : 'body_dark',
      card_style: payload ? 'card_light' : 'card_dark',
      sidebar_style: payload ? 'sidebar_light' : 'sidebar_dark'
    };
    return { ...state, theme, darkMode: payload };
  }
  return state;
};

export default themeReducer;
