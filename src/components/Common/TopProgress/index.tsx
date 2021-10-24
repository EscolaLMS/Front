import React from 'react';
import "./index.scss";
import LmsProgressBar from "@/components/Common/LmsProgressBar";

const TopProgress: React.FC<{
  progress: number;
}> = ({ progress = 0 }) => {
  return (
      <div className="top-progress">
        <LmsProgressBar progress={progress} />
      </div>
  );
};

export default TopProgress;
