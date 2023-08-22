import React from 'react';

interface CircularProgressBarProps {
  percentage: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ percentage }) => {
  const radius = 40; // Radio del círculo
  const circumference = 2 * Math.PI * radius; // Circunferencia del círculo

  const progressOffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="circular-progress">
      <div>
        <svg className="circle">
          <circle
            className="circle-background"
            cx={radius + 4}
            cy={radius + 4}
            r={radius}
          />
          <circle
            className="circle-progress"
            cx={radius + 4}
            cy={radius + 4}
            r={radius}
            strokeDasharray={circumference}
            strokeDashoffset={progressOffset}
          />
        </svg>
      </div>
      <div className="percentage">
        {percentage}%
      </div>
    </div>
  );
};

export default CircularProgressBar;
