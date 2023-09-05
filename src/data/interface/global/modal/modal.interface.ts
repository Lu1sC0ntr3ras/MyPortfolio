import { ReactElement } from 'react';

export interface IModal {
  title: string;
  content: ReactElement;
  open: boolean;
  closeModal: () => void;
}
