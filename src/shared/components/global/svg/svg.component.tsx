import { ISvgConfig } from '@/data/interface/global/image-card.interface';

export const ArrowBottom = ({
  fill = 'black',
  height = '20px',
  width = '20px'
}: ISvgConfig): JSX.Element => {
  return (
    <svg width={width} height={height} fill={fill} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
      <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" />
    </svg>
  );
};

export const ArrowTop = ({
  fill = 'black',
  height = '20px',
  width = '20px'
}: ISvgConfig): JSX.Element => {
  return (
    <svg width={width} height={height} fill={fill} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
      <path d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z" />
    </svg>
  );
};

export const GitHub = ({
  fill = 'black',
  height = '20px',
  width = '20px'
}: ISvgConfig) => {
  return (
    <svg stroke="currentColor" fill={fill} stroke-width="0" viewBox="0 0 496 512" height={height} width={width} xmlns="http://www.w3.org/2000/svg">
      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" >
      </path>
    </svg>
  );
};

export const GitLab = ({
  fill = 'black',
  height = '20px',
  width = '20px'
}: ISvgConfig) => {
  return (
    <svg stroke="currentColor" fill={fill} stroke-width="0" viewBox="0 0 496 512" height={height} width={width} xmlns="http://www.w3.org/2000/svg">
      <path d="M494.07 281.6l-25.18-78.08a11 11 0 00-.61-2.1l-50.5-156.94a20.08 20.08 0 00-19.17-13.82 19.77 19.77 0 00-18.95 13.94l-48.14 149.55h-152L131.34 44.59a19.76 19.76 0 00-18.86-13.94h-.11a20.15 20.15 0 00-19.12 14L42.7 201.73c0 .14-.11.26-.16.4l-25.63 79.48a29.15 29.15 0 0010.44 32.46l221.44 162.41a11.25 11.25 0 0013.38-.07l221.48-162.34a29.13 29.13 0 0010.42-32.47m-331-64.51l61.73 191.76L76.63 217.09m209.64 191.8l59.19-183.84 2.55-8h86.52L300.47 390.44M398.8 59.31l43.37 134.83h-86.82M324.16 217l-43 133.58-25.66 79.56L186.94 217M112.27 59.31l43.46 134.83H69M40.68 295.58a6.19 6.19 0 01-2.21-6.9l19-59 139.61 180.59m273.26-114.69L313.92 410.22l.52-.69L453.5 229.64l19 59a6.2 6.2 0 01-2.19 6.92"/>
    </svg>
  );
};

export const Outlook = ({
  fill = 'black',
  height = '20px',
  width = '20px'
}: ISvgConfig) => {
  return (
    <svg stroke="currentColor" fill={fill} stroke-width="0" viewBox="0 0 496 512" height={height} width={width} xmlns="http://www.w3.org/2000/svg">
      <path d="M 23.607422 4.0429688 C 23.347041 4.0335549 23.0813 4.0541387 22.814453 4.1074219 L 7.6171875 7.1464844 C 5.5228355 7.5659519 4 9.4229991 4 11.558594 L 4 36.441406 C 4 38.576376 5.5230144 40.434668 7.6171875 40.853516 L 22.814453 43.892578 C 24.948801 44.31917 27 42.637467 27 40.460938 L 27 38 L 39.5 38 C 42.519774 38 45 35.519774 45 32.5 L 45 16.5 C 45 13.480226 42.519774 11 39.5 11 L 27 11 L 27 7.5390625 C 27 5.6340003 25.430086 4.1088659 23.607422 4.0429688 z M 23.402344 7.0488281 C 23.741566 6.9810934 24 7.1922764 24 7.5390625 L 24 40.460938 C 24 40.807724 23.741273 41.019122 23.402344 40.951172 A 1.50015 1.50015 0 0 0 23.402344 40.949219 L 8.2070312 37.910156 A 1.50015 1.50015 0 0 0 8.2050781 37.910156 C 7.4941947 37.768284 7 37.165812 7 36.441406 L 7 11.558594 C 7 10.834188 7.4953833 10.230423 8.2070312 10.087891 L 23.402344 7.0488281 z M 27 14 L 39.5 14 C 40.898226 14 42 15.101774 42 16.5 L 42 17.226562 L 30.5 24.710938 L 27 22.433594 L 27 14 z M 15.5 16.5 C 13.557292 16.5 12.018637 17.783982 11.183594 19.310547 C 10.34855 20.837112 10 22.669872 10 24.5 C 10 26.330128 10.34855 28.162888 11.183594 29.689453 C 12.018637 31.216018 13.557292 32.5 15.5 32.5 C 17.442708 32.5 18.981363 31.216018 19.816406 29.689453 C 20.65145 28.162888 21 26.330128 21 24.5 C 21 22.669872 20.65145 20.837112 19.816406 19.310547 C 18.981363 17.783982 17.442708 16.5 15.5 16.5 z M 15.5 19.5 C 16.223957 19.5 16.685305 19.841018 17.183594 20.751953 C 17.681883 21.662888 18 23.080128 18 24.5 C 18 25.919872 17.681883 27.337112 17.183594 28.248047 C 16.685305 29.158982 16.223957 29.5 15.5 29.5 C 14.776043 29.5 14.314695 29.158982 13.816406 28.248047 C 13.318117 27.337112 13 25.919872 13 24.5 C 13 23.080128 13.318117 21.662888 13.816406 20.751953 C 14.314695 19.841018 14.776043 19.5 15.5 19.5 z M 42 20.806641 L 42 32.5 C 42 33.898226 40.898226 35 39.5 35 L 27 35 L 27 26.011719 L 29.681641 27.757812 A 1.50015 1.50015 0 0 0 31.318359 27.757812 L 42 20.806641 z"></path>
    </svg>
  );
};

export const Whatsapp = ({
  fill = 'black',
  height = '20px',
  width = '20px'
}: ISvgConfig) => {
  return (
    <svg stroke="currentColor" fill={fill} stroke-width="0" viewBox="0 0 496 512" height={height} width={width} xmlns="http://www.w3.org/2000/svg">
      <path d="M414.73 97.1A222.14 222.14 0 00256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0029.78 111L32 480l118.25-30.87a223.63 223.63 0 00106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 00414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 01-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0171.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 01185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 00-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0031.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z" fill-rule="evenodd"/>
    </svg>
  );
};

export const Email = ({
  fill = 'black',
  height = '20px',
  width = '20px'
}: ISvgConfig) => {
  return (
    <svg stroke={fill} viewBox="0 0 496 512" height={height} width={width} xmlns="http://www.w3.org/2000/svg">
      <rect x="48" y="96" width="416" height="320" rx="40" ry="40" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
      <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 160l144 112 144-112"/>
    </svg>
  );
};

export const Phone = ({
  fill = 'black',
  height = '20px',
  width = '20px'
}: ISvgConfig) => {
  return (
    <svg stroke="currentColor" fill={fill} stroke-width="0" viewBox="0 0 496 512" height={height} width={width} xmlns="http://www.w3.org/2000/svg">
      <path d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0083 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0013.8-25.8C465 391.17 468 391.17 451 374z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/>
    </svg>
  );
};

export const Linkedin = ({
  fill = 'black',
  height = '20px',
  width = '20px'
}: ISvgConfig) => {
  return (
    <svg stroke="currentColor" fill={fill} stroke-width="0" viewBox="0 0 496 512" height={height} width={width} xmlns="http://www.w3.org/2000/svg">
      <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"/>
    </svg>
  );
};

