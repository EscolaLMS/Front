import React from 'react';
import "./index.scss";

const LmsProgressBar: React.FC<{
  progress: number
  className?: string
}> = ({ progress = 0, className = '' }) => {
  return (
    <div className={`lms-progress-bar ${className}`}>
        <div
            className="lms-progress-bar__bar"
            role="progressbar"
            style={{ width: `${progress}%` }}
        />
    </div>
  );
};

export default LmsProgressBar;
