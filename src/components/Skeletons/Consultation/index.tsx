import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

const SkeletonWrapper = styled.div`
  position: relative;
  .tutors {
    display: flex;
    > div {
      margin-left: 10px;
    }
  }
`;

const ConsultationPageContentSkeleton = () => {
  return (
    <SkeletonWrapper>
      <Skeleton width={"20px"} style={{ marginBottom: "5px" }} />
      <Skeleton width={"40%"} height={37} style={{ marginBottom: "10px" }} />
      <Skeleton width={"40%"} style={{ marginBottom: "10px" }} />{" "}
      <Skeleton width={"100%"} height={490} style={{ marginBottom: "40px" }} />
      <div style={{ marginBottom: "40px" }}>
        <Skeleton width={"100%"} count={4} style={{ marginBottom: "5px" }} />
      </div>
      <div style={{ marginBottom: "40px" }}>
        <Skeleton width={"100%"} count={5} style={{ marginBottom: "5px" }} />
      </div>{" "}
      <div style={{ marginBottom: "40px" }}>
        <Skeleton width={"100%"} count={5} style={{ marginBottom: "5px" }} />
      </div>{" "}
    </SkeletonWrapper>
  );
};

export default ConsultationPageContentSkeleton;
