import { IThemeAction, IThemeContext, IThemeStyles } from '@/data/interface/context/Theme';

const themeReducer = (state: IThemeContext, action: IThemeAction): IThemeContext => {
  const { type, payload } = action;
  if (type === 'CHANGE_THEME') {
    const theme: IThemeStyles = {
      background: !payload ? '#FFFFFF' : '#333333',
      page: !payload ? 'page_light' : 'page_dark',
      card_style: !payload ? 'card_light' : 'card_dark',
      color: !payload ? '#333333' : '#FFFFFF',
      sidebar_style: !payload ? 'sidebar_light' : 'sidebar_dark',
      text: !payload ? 'text_light' : 'text_dark',
      title: !payload ? 'title_light' : 'title_dark'
    };
    return { ...state, theme, darkMode: payload };
  }
  return state;
};

export default themeReducer;
