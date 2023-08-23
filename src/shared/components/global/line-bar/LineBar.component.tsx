import { useTheme } from '@/core/context/theme/ThemeState';

const LineBar = (): JSX.Element => {
  const { theme: { color } } = useTheme();
  return (
    <hr
      style={{
        border: 'none',
        borderBottom: `1px solid ${color}`,
        boxShadow: `0rem 0.1rem 0.2rem ${color}`
      }}
    />
  );
};

export default LineBar;
