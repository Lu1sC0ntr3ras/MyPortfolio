import { useTheme } from '@/core/context/theme/ThemeState';
import Button from '@/shared/components/global/button/button.component';
import { DarkIcon, LightIcon } from '@/shared/components/global/svg/svg.component';
import { NextPage } from 'next';

const Home: NextPage = () => {
  const { theme: { text, title, page, background }, updateTheme, darkMode } = useTheme();
  return (
    <div className={`${page} scroll_y`}>
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

      <p className={`${text} justify fs-18`} >
        {'In which topic would you like to see my portfolio?'}
      </p>
      <Button
        width={50}
        height={30}
        action={updateTheme}
      >
        { !darkMode ? <DarkIcon fill={background} /> : <LightIcon fill={background} /> }
      </Button>
    </div>
  );
};

export default Home;
