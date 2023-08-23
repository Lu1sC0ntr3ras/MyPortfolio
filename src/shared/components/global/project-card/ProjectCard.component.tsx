import { useTheme } from '@/core/context/theme/ThemeState';
import { IProjectCard } from '@/data/interface/global/ProjectCard.interface';

const ProjectCard = ({
  name,
  technologies,
  text,
  year
}: IProjectCard): JSX.Element => {
  const { theme: { title, text: txt, color, background } } = useTheme();

  const Buttons = ({ data }: { data: string[]; }): JSX.Element => {
    return (
      <div style={{ display: 'flex', gap: '10px' }} >
        {
          data.map((len, index) => {
            return (
              <div className='box_technology'
                key={len + index}
                style={{ background: color, color: background }}
              >
                <p className={`${txt} fs-12`}>{len}</p>
              </div>
            );
          })
        }
      </div>
    );
  };

  return (
    <div className={'project_card'}>
      <p className={`${title} fs-16`}>{name}</p>
      <p className={`${title} italic fs-12`}>{year.join('')}</p>
      <p className={`${text}`}>{text}</p>
      <Buttons data={technologies} />
    </div>
  );
};

export default ProjectCard;
