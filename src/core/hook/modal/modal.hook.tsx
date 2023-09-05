import { IModalHook, IModalHookContent } from '@/data/interface/core/hook/modal/modal.hook.interface';
import { ReactElement, useRef, useState } from 'react';

const useModal = (): IModalHook => {
  const [open, setOpen] = useState<boolean>(false);
  const title = useRef<string>('');
  const content = useRef<ReactElement>(<></>);

  const setModal = ({ title: tlt, content: cnt }: IModalHookContent) => {
    title.current = tlt;
    content.current = cnt;
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setTimeout(() => {
      title.current = '';
      content.current = <></>;
    }, 1000);
  };

  return {
    open,
    setModal,
    closeModal,
    title: title.current,
    content: content.current
  };
};

export default useModal;
