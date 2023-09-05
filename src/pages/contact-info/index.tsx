import { useTheme } from '@/core/context/theme/ThemeState';
import { Email, GitHub, GitLab, Linkedin, Whatsapp } from '@/shared/components/global/svg/svg.component';
import { NextPage } from 'next';

const ContacInfo: NextPage = () => {
  const { theme: { page, text, title, color } } = useTheme();

  return (
    <div className={`${page}`}>
      <p className={`${title} fs-20`}>{'Contact info'}</p>
      <p className={`${text}`}>
        {`
          If you need to get in touch with me, here is a list with the 
          information you need to find me. Feel free to use any of these 
          means to connect and share ideas, questions or exciting projects.
        `}
      </p>
      <hr
        style={{
          border: 'none',
          borderBottom: `1px solid ${color}`,
          boxShadow: `0rem 0.1rem 0.2rem ${color}`
        }}
      />
      <p className={`${title} fs-16`}>{'Luis Eduardo Contreras Mendez'}</p>
      <div className='container_contact'>
        <div>
          <Email fill={color} />
        </div>
        <p className={`${text} fs-14`}>{'LuisE.Contreras@outlook.com - elcontreras@uninorte.edu.co'}</p>
      </div>
      <div className='container_contact'>
        <div>
          <Whatsapp fill={color} />
        </div>
        <p className={`${text} fs-14`}>{'(+57) 3004459355'}</p>
      </div>
      <div className='container_contact'>
        <div>
          <Linkedin fill={color} />
        </div>
        <p className={`${text} fs-14`}>{'/in/luis-contreras-m/'}</p>
      </div>
      <div className='container_contact'>
        <div>
          <GitLab fill={color} />
        </div>
        <p className={`${text} fs-14`}>{'gitlab.com/Lu1sC0ntr3ras'}</p>
      </div>
      <div className='container_contact'>
        <div>
          <GitHub fill={color} />
        </div>
        <p className={`${text} fs-14`}>{'github.com/Lu1sC0ntr3ras'}</p>
      </div>
    </div>
  );
};

export default ContacInfo;
