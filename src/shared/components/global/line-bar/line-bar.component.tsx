import { useTheme } from '@/core/context/theme/ThemeState';

const LineBar = (): JSX.Element => {
  const { theme: { color } } = useTheme();
  return (
    <hr
      style={{
        border: 'none',
        opacity: 0.5,
        borderBottom: `2px solid ${color}`,
        boxShadow: `0rem 0.1rem 0.2rem ${color}`
      }}
    />
  );
};

export default LineBar;
