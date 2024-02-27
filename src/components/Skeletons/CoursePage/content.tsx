import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

const SkeletonWrapper = styled.div`
  .tutors {
    display: flex;
    > div {
      margin-left: 10px;
    }
  }
`;

const CoursePageContentSkeleton = () => {
  return (
    <SkeletonWrapper>
      <Skeleton width={"20px"} style={{ marginBottom: "5px" }} />
      <Skeleton width={"40%"} height={37} style={{ marginBottom: "10px" }} />
      <Skeleton width={"40%"} style={{ marginBottom: "10px" }} />{" "}
      <Skeleton width={"100%"} height={490} style={{ marginBottom: "40px" }} />
      <div style={{ marginBottom: "40px" }}>
        <Skeleton width={"100%"} count={4} />
      </div>
      <div style={{ marginBottom: "40px" }}>
        <Skeleton width={"100%"} count={5} />
      </div>
      <Skeleton width={"80px"} style={{ marginBottom: "20px" }} />
      <div className="tutors">
        <Skeleton circle width={"112px"} height={"112px"} />
        <div>
          <Skeleton width={"140px"} style={{ marginBottom: "20px" }} />
          <Skeleton width={"140px"} count={2} />
        </div>
      </div>
      <div style={{ marginTop: "40px" }}>
        <Skeleton
          width={"100%"}
          height={"51px"}
          style={{ marginBottom: "5px" }}
          count={8}
        />
      </div>
    </SkeletonWrapper>
  );
};

export default CoursePageContentSkeleton;
