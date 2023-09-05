import { IModal } from '@/data/interface/global/modal/modal.interface';
import { FC } from 'react';
import Portal from '../../base/portal/portal.component';
import Button from '../button/button.component';
import { useTheme } from '@/core/context/theme/ThemeState';

const Modal: FC<IModal> = ({ title, content, closeModal, open }) => {
  const { theme: { background, title: tlt, color } } = useTheme();
  return (
    <Portal closeTime={500} portalOpen={open}>
      <div className={open ? 'modal_container' : 'modal_container__hide'}
        style={{ background }}
      >
        <p className={tlt}>{title}</p>
        <div className='content'
          style={{ color }}
        >
          {content}
        </div>
        <Button text='Close' action={closeModal} />
      </div>
    </Portal>
  );
};

export default Modal;
