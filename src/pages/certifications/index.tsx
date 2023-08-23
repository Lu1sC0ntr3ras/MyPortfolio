import { useTheme } from '@/core/context/theme/ThemeState';
import { NextPage } from 'next';

const Home: NextPage = () => {
  const { theme: { page, text, title } } = useTheme();
  return (
    <div className={`${page}`}>
      <p className={`${title}`}>{'Certifications'}</p>
    </div>
  );
};

export default Home;
