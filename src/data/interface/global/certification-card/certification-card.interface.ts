import { MouseEventHandler } from 'react';
import { ICertification } from '../ certification/certification.interface';

export interface ICertificationCard {
  certification: ICertification;
  action: MouseEventHandler<HTMLButtonElement>;
}
