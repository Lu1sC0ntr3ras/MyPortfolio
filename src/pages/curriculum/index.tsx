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
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '50px'
        }}
      >
        <a
          href={'/CV Luis Eduardo Contreras Mendez C.C.1010145758.pdf'}
          download="CV Luis Eduardo Contreras Mendez C.C.1010145758.pdf"
          target="_blank"
          rel="noreferrer"
          style={{
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          <div
            style={{
              border: `2px solid ${color}`,
              padding: '5px 10px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            <p className={`${title} fs-14`}>{'Download in english'}</p>
          </div>
        </a>
        <a
          href={'/Hoja de vida Luis Eduardo Contreras Mendez 1010145758.pdf'}
          download="Hoja de vida Luis Eduardo Contreras Mendez 1010145758.pdf"
          target="_blank"
          rel="noreferrer"
          style={{
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          <div
            style={{
              border: `2px solid ${color}`,
              padding: '5px 10px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            <p className={`${title} fs-14`}>{'Download in spanish'}</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Curriculum;
