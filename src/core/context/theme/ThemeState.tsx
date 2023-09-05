import { NextPage } from 'next';
import { useContext, useReducer } from 'react';
import themeReducer from './themeReducer';
import { ThemeContext, initialState } from './ThemeContext';
import { IThemeContext, IThemeState } from '@/data/interface/core/context/theme.interface';

const ThemeState: NextPage<IThemeState> = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const updateTheme = () => {
    dispatch({ type: 'CHANGE_THEME', payload: !state.darkMode });
  };

  const value: IThemeContext = {
    darkMode: state.darkMode,
    theme: state.theme,
    updateTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeState;

export const useTheme = () => {
  const { theme, darkMode, updateTheme } = useContext(ThemeContext);
  return { theme, darkMode, updateTheme };
};
