import { ISvgConfig } from '@/data/interface/global/ImageCard.interface';

export const RightBar = (): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 960 1080"
      height={'100%'}
      width={'100%'}
      preserveAspectRatio="none"
      fill="none"
    >
      <path d="M800 1080L960 0H0V1080H650H800Z" fill="url(#paint0_linear_57_23)" />
      <defs>
        <linearGradient id="paint0_linear_57_23" x1="480" y1="0" x2="480" y2="1080" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1C1E33" />
          <stop offset="1" stopColor="#171717" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const rightBar: string = `  <svg      xmlns="http://www.w3.org/2000/svg"      viewBox="0 0 960 1080"      height="100%"      width="100%"     preserveAspectRatio="none"      fill="none"    >      <path d="M800 1080L960 0H0V1080H650H800Z" fill="url(#paint0_linear_57_23)" />      <defs>        <linearGradient id="paint0_linear_57_23" x1="480" y1="0" x2="480" y2="1080" gradientUnits="userSpaceOnUse">          <stop stop-color="#1C1E33"/>          <stop offset="1" stop-color="#171717"/>        </linearGradient>      </defs>    </svg>`;
export const LeftBar = (): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 960 1080"
      height={'100%'}
      width={'100%'}
      preserveAspectRatio="none"
      fill="none"
      style={{ transform: 'rotate(180deg)' }}
    >
      <path d="M800 1080L960 0H0V1080H650H800Z" fill="url(#paint0_linear_57_23)" />
      <defs>
        <linearGradient id="paint0_linear_57_23" x1="480" y1="0" x2="480" y2="1080" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1C1E33" />
          <stop offset="1" stopColor="#171717" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const ArrowBottom = ({
  fill = 'black',
  height = '30px',
  width = '30px'
}: ISvgConfig): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
      />
    </svg>
  );
};

export const ArrowTop = ({
  fill = 'black',
  height = '30px',
  width = '30px'
}: ISvgConfig): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z"
      />
    </svg>
  );
};
