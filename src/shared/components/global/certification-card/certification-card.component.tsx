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
      <div className={`image_card ${open ? 'vanish' : ''}`}
        style={{ background }}
      >
        {certification.image}
      </div>
      <div className={`text_card`}>
        <p className={`${title} fs-14`}>{certification.name}</p>
        <Button
          text='Show +'
          height={25}
          action={action}
        />
      </div>
    </div>
  );
};

export default CertificationCard;
