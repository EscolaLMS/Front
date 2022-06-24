import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  width: 100%;

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const CourseCardWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>;
};

export default CourseCardWrapper;
