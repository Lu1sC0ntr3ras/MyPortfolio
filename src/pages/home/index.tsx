import { useTheme } from '@/core/context/theme/ThemeState';
import { NextPage } from 'next';

const Home: NextPage = () => {
  const { theme: { text, title, page }, updateTheme } = useTheme();
  return (
    <div className={page}>
      <p className={`${title} fs-20`}>
        {'Hi, I\'m Luis Eduardo Contreras Mendez'}
      </p>
      <p className={`${text} justify fs-18`}>
        <>
          {'A systems engineer from Colombia with knowledge in frontend and backend application development.'}
          <br />
          {'Browse and I hope we can get to know each other better.'}
        </>
      </p>
      <button onClick={updateTheme}>
        {'Change theme'}
      </button>
    </div>
  );
};

export default Home;
