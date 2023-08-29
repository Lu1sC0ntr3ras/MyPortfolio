import { MouseEventHandler } from 'react';

export interface IButton {
  text: string;
  width?: number;
  height?: number;
  action?: MouseEventHandler<HTMLButtonElement>;
}
