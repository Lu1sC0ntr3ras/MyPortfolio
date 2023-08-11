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
