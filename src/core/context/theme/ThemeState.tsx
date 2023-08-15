import { IThemeContext, IThemeState } from '@/data/interface/context/Theme';
import { NextPage } from 'next';
import { useContext, useReducer } from 'react';
import themeReducer from './themeReducer';
import { ThemeContext, initialState } from './ThemeContext';

const ThemeState: NextPage<IThemeState> = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const updateTheme = (light: boolean) => {
    dispatch({ type: 'CHANGE_THEME', payload: light });
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
  const { theme } = useContext(ThemeContext);
  return { theme };
};
