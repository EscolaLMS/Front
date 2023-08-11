import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .image-section {
    .information-in-image {
      .card {
        .content:after,
        .content:before {
          box-shadow: inset 0px -6px 14px -8px rgba(0, 0, 0, 1);
        }
      }
    }
  }
`;

const CourseCardWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>;
};

export default CourseCardWrapper;
