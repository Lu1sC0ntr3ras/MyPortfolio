import { useTheme } from '@/core/context/theme/ThemeState';
import { IButton } from '@/data/interface/global/button.interface';

const Button = ({ text, width, height, action }: IButton): JSX.Element => {
  const { theme: { color, background, title, text: txt } } = useTheme();
  return (
    <button
      onClick={action}
      className={`button ${txt} fs-12`}
      style={{
        width: `${width ?? 100}px`,
        height: `${height ?? 20}px`,
        background: color,
        color: background
      }}
    >
      {text}
    </button>
  );
};

export default Button;
