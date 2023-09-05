import { IModal } from '@/data/interface/global/modal/modal.interface';
import { ReactElement } from 'react';

export interface IModalHook {
  title: string;
  content: ReactElement;
  open: boolean;
  setModal: (modal: Pick<IModal, 'title' | 'content'>) => void;
  closeModal: () => void;
}

export type IModalHookContent = Pick<IModalHook, 'title' | 'content'>
