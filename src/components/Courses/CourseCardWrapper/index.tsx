import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const CourseCardWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>;
};

export default CourseCardWrapper;
