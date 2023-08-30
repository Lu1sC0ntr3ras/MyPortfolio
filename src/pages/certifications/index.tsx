import { useTheme } from '@/core/context/theme/ThemeState';
import { certification } from '@/data/constant/centifications_data';
import CertificationCard from '@/shared/components/global/certification-card/certification-card.component';
import { NextPage } from 'next';

const Certifications: NextPage = () => {
  const { theme: { page, text, title } } = useTheme();

  return (
    <div className={`${page} scroll_y`}>
      <p className={`${title}`}>{'Certifications'}</p>
      <p className={`${text}`}>
        {`
          Every course that one can find on the internet is a golden 
          opportunity that you should take advantage of to improve 
          your skills, there is a lot of information that has helped 
          me improve as a programmer in recent years.
        `}
      </p>
      <div className='list_certifications'>
        {certification.uninorte.map((obj, idx) =>
          <CertificationCard
            key={idx}
            certification={obj}
            action={(event) => {
              event.stopPropagation();
              console.log('hello');
            }}
          />
        )}
        {certification.udemy.map((obj, idx) =>
          <CertificationCard
            key={idx}
            certification={obj}
            action={(event) => {
              event.stopPropagation();
              console.log('hello');
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Certifications;
