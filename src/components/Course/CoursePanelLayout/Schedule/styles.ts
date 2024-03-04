import styled from "styled-components";

export const CourseScheduleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CourseScheduleTitle = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  box-shadow: -3px 0px 6px #0000000b;

  h2 {
    padding: 0 12px;
  }
`;

export const CourseScheduleContent = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  overflow-y: auto;
`;
