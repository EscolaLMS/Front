import { Col, Row } from "react-grid-system";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

const SkeletonWrapper = styled.div`
  position: relative;
  background: #000;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .meeting-container {
    width: 80%;
    height: 50vh;
    background: #1a1a1a;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    position: relative;
  }

  .participant-initials {
    width: 80px;
    height: 80px;
    background: #d33;
    border-radius: 50%;
  }

  .controls {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    gap: 10px;
    background: rgba(0, 0, 0, 0.8);
    padding: 10px;
    border-radius: 10px;
  }

  .control-button {
    width: 35px;
    height: 35px;
    background: #333;
  }

  .end-call {
    background: red;
  }
`;

const JitsiMeetingSkeleton = () => {
  return (
    <SkeletonWrapper>
      <div className="meeting-container">
        <Skeleton width={80} height={80} className="participant-initials" />
      </div>
      <div className="controls">
        <Skeleton width={35} height={35} className="control-button" />
        <Skeleton width={35} height={35} className="control-button" />
        <Skeleton width={35} height={35} className="control-button" />
        <Skeleton width={35} height={35} className="control-button" />
        <Skeleton width={35} height={35} className="control-button" />
        <Skeleton width={35} height={35} className="control-button end-call" />
      </div>
    </SkeletonWrapper>
  );
};

export default JitsiMeetingSkeleton;
