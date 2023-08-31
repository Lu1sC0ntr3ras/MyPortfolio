import { ISwitch } from '@/data/interface/global/switch.interface';
import { DarkIcon, LightIcon } from '../svg/svg.component';

const Switch = ({ onClick, mode }:ISwitch): JSX.Element => {
  return (
    <label className="switch" onClick={onClick}>
      <input type="checkbox"/>
      <span className="slider">
      </span>
    </label>
  );
};

export default Switch;
