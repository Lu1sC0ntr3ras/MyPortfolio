import { useTheme } from '@/core/context/theme/ThemeState';
import { projects } from '@/data/constant/portfolio_projects';
import ProjectCard from '@/shared/components/global/project-card/project-card.component';
import { NextPage } from 'next';
import { useEffect } from 'react';

const Portfolio: NextPage = () => {
  const { theme } = useTheme();
  const years: number[] = [];

  useEffect(() => {
    projects.projects.forEach((obj) => { if (years.includes(obj.year)) years.push(obj.year); });
    years.sort((a, b) => a - b);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <div className='portfolio_projects' >
        {
          projects.projects
            .sort((a, b) => a.year - b.year)
            .map((obj, index) => {
              return (
                <div
                  key={index + obj.name}
                  className='project-line'
                >
                  <ProjectCard
                    name={obj.name}
                    year={obj.year}
                    text={obj.text}
                    technologies={obj.technologies}
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
