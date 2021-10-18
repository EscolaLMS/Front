import React from 'react';
import "./index.scss";

const TopProgress: React.FC<{
  progress: number;
}> = ({ progress = 0 }) => {
  return (
      <div className="top-progress">
        <div className="top-progress__bar" style={{ width: `${progress}%` }} />
      </div>
  );
};

export default TopProgress;
