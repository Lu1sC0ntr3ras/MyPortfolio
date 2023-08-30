import { useTheme } from '@/core/context/theme/ThemeState';
import { IButton } from '@/data/interface/global/button.interface';

const Button = ({ text, width, height, action, buttonColor, buttonBackground }: IButton): JSX.Element => {
  const { theme: { color, background, title } } = useTheme();
  return (
    <button
      onClick={action}
      className={`button ${title} fs-12`}
      style={{
        width: `${width ?? 100}px`,
        height: `${height ?? 20}px`,
        background: buttonBackground ?? color,
        color: buttonColor ?? background
      }}
    >
      {text}
    </button>
  );
};

export default Button;
