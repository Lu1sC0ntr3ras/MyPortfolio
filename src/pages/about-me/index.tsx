import { useTheme } from '@/core/context/theme/ThemeState';
import { NextPage } from 'next';

const AboutMe: NextPage = () => {
  const { theme: { page, title, text, color } } = useTheme();

  return (
    <div className={page}>
      <p className={`${title} fs-20`}>{'Who am I?'}</p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '20px'
        }}
      >
        <div className='profile_image' style={{ borderColor: color }}/>
        <div
          style={{ textAlign: 'justify' }}
        >
          <p className={text}>
            {`
            I always seek to improve myself, I consider that programming is my field
            of work, because I love everything that requires solving problems of logic
            and algorithms, make a code more efficient, see how I can make the pages 
            more friendly to the interaction with new users, that anyone with minimal 
            effort can understand my code and learn new ways to solve problems to find 
            the most efficient possible.
            `}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
