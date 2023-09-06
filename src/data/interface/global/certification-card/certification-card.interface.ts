import { MouseEventHandler } from 'react';
import { IInformation } from '../certification/certification.interface';

export interface ICertificationCard {
  certification: IInformation;
  action: MouseEventHandler<HTMLButtonElement>;
}
