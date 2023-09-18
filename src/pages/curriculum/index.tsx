import { useTheme } from '@/core/context/theme/ThemeState';
import { NextPage } from 'next';

const Curriculum: NextPage = () => {
  const { theme: { page, text, title, color } } = useTheme();

  return (
    <div className={page}>
      <p className={`${title} fs-20`}>{'Download my curriculum'}</p>
      <p className={`${text} fs-14`}>
        {`
        If you need my resume, on this page you have the 
        option to download my resume in both Spanish and English.
        `}
      </p>
      <div className='content_buttons'>
        <a
          href={'https://drive.google.com/file/d/1g78Js4NOWlk8itxMy-SQkA5Nisfuf8Ej/view?usp=sharing'}
          target="_blank"
          rel="noreferrer"
        >
          <div style={{ border: `2px solid ${color}` }} >
            <p className={`${title} fs-14`}>{'Download in english'}</p>
          </div>
        </a>
        <a
          href={'https://drive.google.com/file/d/11XVWSDWHdl93Fex0NAFBpwAEFtu-bVlC/view?usp=sharing'}
          target="_blank"
          rel="noreferrer"
          style={{
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          <div style={{ border: `2px solid ${color}` }} >
            <p className={`${title} fs-14`}>{'Download in spanish'}</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Curriculum;
