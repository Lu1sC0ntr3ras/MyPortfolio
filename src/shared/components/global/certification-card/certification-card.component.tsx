import { ICertificationCard } from '@/data/interface/global/certification-card.interface';
import { useState } from 'react';
import Button from '../button/button.component';
import { useTheme } from '@/core/context/theme/ThemeState';

const CertificationCard = ({ certification, action }: ICertificationCard): JSX.Element => {
  const { theme: { title, color, background } } = useTheme();
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className='certification_container'
      style={{ boxShadow: `0rem 0rem 0.1rem ${color}` }}
      onClick={() => setOpen(!open)}
    >
      <div className={`image_card ${!open ? 'vanish' : ''}`}
        style={{ background }}
      >
        <div className='certification_image'>
          {certification.image}
        </div>
        <div className='show_button'>
          <Button
            text='Show +'
            height={20}
            action={action}
          />
        </div>
      </div>
      <div className={`text_card`}>
        <p className={`${title} fs-14`}>{certification.name}</p>
      </div>
    </div>
  );
};

export default CertificationCard;
