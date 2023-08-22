import { Email, GitHub, GitLab, Linkedin, Outlook, Phone, Whatsapp } from '@/shared/components/global/svg/svg.component';
import { NextPage } from 'next';

const ContacInfo: NextPage = () => {
  return (
    <div className='page_light'>
      <p className='title fs-20'>{'Contact info'}</p>
      <p className='text'>
        {`
          If you need to get in touch with me, here is a list with the 
          information you need to find me. Feel free to use any of these 
          means to connect and share ideas, questions or exciting projects.
        `}
      </p>
      <hr
        style={{
          border: 'none',
          borderBottom: '1px solid #333333',
          boxShadow: '0rem 0.1rem 0.2rem #333333'
        }}
      />
      <p className='text'>{'Luis Eduardo Contreras Mendez'}</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} >
        <Email />
        <p className='text fs-14'>{'LuisE.Contreras@outlook.com'}</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} >
        <Whatsapp />
        <p className='text fs-14'>{'(+57) 3004459355'}</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} >
        <Linkedin />
        <p className='text fs-14'>{'/in/luis-contreras-m/'}</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} >
        <GitLab />
        <p className='text fs-14'>{'gitlab.com/Lu1sC0ntr3ras'}</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} >
        <GitHub />
        <p className='text fs-14'>{'github.com/Lu1sC0ntr3ras'}</p>
      </div>
    </div>
  );
};

export default ContacInfo;
