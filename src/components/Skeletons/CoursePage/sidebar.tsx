import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

const SkeletonWrapper = styled.div`
  .react-loading-skeleton {
    border-radius: 10px;
  }
`;

const SidebarSkeleton = () => {
  return (
    <SkeletonWrapper>
      <Skeleton width={"100%"} height={350} />
    </SkeletonWrapper>
  );
};

export default SidebarSkeleton;
