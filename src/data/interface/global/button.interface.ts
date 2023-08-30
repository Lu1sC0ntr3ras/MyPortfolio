import { MouseEventHandler } from 'react';

export interface IButton {
  text: string;
  width?: number;
  height?: number;
  buttonColor?: string;
  buttonBackground?: string;
  action?: MouseEventHandler<HTMLButtonElement>;
}
