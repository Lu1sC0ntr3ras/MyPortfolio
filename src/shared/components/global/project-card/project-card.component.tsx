import { useTheme } from '@/core/context/theme/ThemeState';
import { IProjectCard } from '@/data/interface/global/project-card.interface';
import { useState } from 'react';
import { ArrowBottom, ArrowTop } from '../svg/svg.component';

const ProjectCard = ({ name, technologies, text, year }: IProjectCard): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const { theme: { title, text: txt, color, background } } = useTheme();

  const Buttons = ({ data }: { data: string[]; }): JSX.Element => {
    return (
      <div className='flex g-10'>
        {
          data.map((len, index) =>
            <div className='box_technology' key={len + index}
              style={{ background: color }}>
              <p className={`${txt} fs-12`}
                style={{ color: background }}>{len}</p>
            </div>
          )
        }
      </div>
    );
  };

  return (
    <div className={`project_card ${open ? 'expanded' : ''} `}
      style={{
        borderLeft: `1px solid ${color}`,
        borderBottom: `1px solid ${color}`
      }}
    >
      <div className='project_title'
        onClick={() => { setOpen(!open); }}
      >
        <p className={`${title} fs-16`}>{name}</p>
        { open ? <ArrowTop/> : <ArrowBottom/> }
      </div>
      <p className={`${title} italic fs-12`}>{year}</p>
      <div className={`${text}`} style={{ color }}>{text}</div>
      <Buttons data={technologies} />
    </div>
  );
};

export default ProjectCard;