import React from "react";
import { Row } from "react-grid-system";

import { isMobile } from "react-device-detect";

import styled from "styled-components";

import { CourseCardSkeleton } from "@/components/Skeletons/CourseCard";

const CoursesListWrapper = styled.section`
  margin-bottom: ${isMobile ? "50px" : "75px"};
`;

const EntitySkeletonList = () => {
  return (
    <CoursesListWrapper>
      <Row
        style={{
          gap: "30px 0",
        }}
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <CourseCardSkeleton
            key={`index-${index}-skeleton`}
            colProps={{
              xl: 3,
              lg: 4,
              md: 6,
            }}
          />
        ))}
      </Row>
    </CoursesListWrapper>
  );
};

export default EntitySkeletonList;
