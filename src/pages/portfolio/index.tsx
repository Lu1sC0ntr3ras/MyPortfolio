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
                  border: '1px solid red',
                  padding: '0px 3px',
                  cursor: 'pointer',
                  borderRadius: '3px'
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
      <Buttons data={projects.lenguajes} />
      <Buttons data={projects.frontend} />
      <Buttons data={projects.backend} />
      <div
        style={{
          width: '100%',
          border: '1px solid red'
        }}
      >
        {
          projects.projects.map((obj, index) => {
            return (
              <div>

              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Portfolio;
