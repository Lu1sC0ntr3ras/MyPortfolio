import { projects } from '@/data/constant/portfolio_projects';
import { NextPage } from 'next';

const Portfolio: NextPage = () => {
  const Buttons = ({ data }: { data: string[]; }): JSX.Element => {
    return (
      <div style={{ display: 'flex', gap: '10px' }} >
        {
          data.map((len, index) => {
            return (
              <div
                style={{
                  width: 'fixed',
                  background: '#333333',
                  padding: '0px 3px',
                  cursor: 'pointer',
                  borderRadius: '2px',
                  color: 'white'
                }}
                key={len + index}
              >
                <p className='text fs-12'>{len}</p>
              </div>
            );
          })
        }
      </div>
    );
  };

  return (
    <div className='page_light'>
      <p className={'title_light fs-30'}>{'PORTFOLIO'}</p>
      <p className={'text fs-14'}>
        {`
          Everything I have done since I started working, in different projects, 
          evolving from putting and decorating every corner of a website, to managing 
          and connecting this same application with databases through a backend program, 
          managing different types of technologies and programming languages.        
        `}
      </p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          gap: '10px',
          paddingBottom: '20px'
        }}
      >
        {
          projects.projects.map((obj, index) => {
            return (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  minHeight: '50px',
                  height: 'auto',
                  gap: '10px'
                }}
                key={index}
              >
                <p className='title fs-16'>{obj.name}</p>
                <p className='italic fs-12'>{obj.year.join('')}</p>
                <p>{obj.text}</p>
                <Buttons data={obj.technologies} />
                <hr
                  style={{
                    border: 'none',
                    borderBottom: '1px solid #333333',
                    boxShadow: '0rem 0.1rem 0.2rem #333333'
                  }}
                />
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Portfolio;
