import { useTheme } from '@/core/context/theme/ThemeState';
import { projects } from '@/data/constant/portfolio_projects';
import ProjectCard from '@/shared/components/global/project-card/ProjectCard.component';
import { NextPage } from 'next';

const Portfolio: NextPage = () => {
  const { theme } = useTheme();

  const Buttons = ({ data }: { data: string[]; }): JSX.Element => {
    return (
      <div style={{ display: 'flex', gap: '10px' }} >
        {
          data.map((len, index) => {
            return (
              <div
                style={{
                  width: 'fixed',
                  background: theme.color,
                  padding: '0px 3px',
                  cursor: 'pointer',
                  borderRadius: '2px',
                  color: theme.background
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
    <div className={`${theme.page} scroll_y`}>
      <p className={`${theme.title}`}>{'Portfolio'}</p>
      <p className={`${theme.text} fs-14`}>
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
              // <div
              //   style={{
              //     display: 'flex',
              //     flexDirection: 'column',
              //     width: '100%',
              //     minHeight: '50px',
              //     height: 'auto',
              //     gap: '10px'
              //   }}
              //   key={index}
              // >
              //   <p className={`${theme.title} fs-16`}>{obj.name}</p>
              //   <p className={`${theme.title} italic fs-12`}>{obj.year.join('')}</p>
              //   <p className={`${theme.text}`}>{obj.text}</p>
              //   <Buttons data={obj.technologies} />
              //   <hr
              //     style={{
              //       border: 'none',
              //       borderBottom: `1px solid ${theme.color}`,
              //       boxShadow: `0rem 0.1rem 0.2rem ${theme.color}`
              //     }}
              //   />
              // </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Portfolio;
