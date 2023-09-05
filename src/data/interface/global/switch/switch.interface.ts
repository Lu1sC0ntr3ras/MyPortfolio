import { MouseEventHandler } from 'react';

export interface ISwitch {
  onClick?: MouseEventHandler<HTMLLabelElement>;
  mode?: boolean;
}
