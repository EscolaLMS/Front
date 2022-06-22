import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
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
