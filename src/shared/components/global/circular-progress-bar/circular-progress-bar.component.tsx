import React, { ReactNode } from 'react';

interface CircularProgressBarProps {
  icon?: ReactNode;
  percentage: number;
  stroke?: string;
  title: string;
  color?: string;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  color = '#333',
  icon = <></>,
  percentage,
  stroke = color ?? '#333',
  title
}) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  const progressOffset = percentage > 100
    ? 0
    : circumference - (percentage / 100) * circumference;

  return (
    <div className="circular-progress">
      <p className='title_light fs-16' style={{ color }}>{title ?? 'example'}</p>
      {/* <p className='title_light fs-16' style={{ color }}>{`${percentage > 100 ? 100 : percentage}%`}</p> */}
      <div className="container-circle">
        <div className='icon'>
          {icon}
        </div>
        <svg className="circle">
          <circle
            className="circle-background"
            style={{ stroke, opacity: 0.1 }}
            cx={radius + 5}
            cy={radius + 5}
            r={radius}
          />
          <circle
            className="circle-progress"
            style={{ stroke, opacity: 0.7 }}
            cx={radius + 5}
            cy={radius + 5}
            r={radius}
            strokeDasharray={circumference}
            strokeDashoffset={progressOffset}
          />
        </svg>
      </div>
      {/* <div className="percentage">
        <p className='title_light fs-16 ' style={{ color }}>
          {`${percentage > 100 ? 100 : percentage}%`}
        </p>
      </div> */}
    </div>
  );
};

export default CircularProgressBar;
