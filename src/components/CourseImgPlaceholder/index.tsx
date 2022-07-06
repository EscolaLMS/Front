import styled from "styled-components";

const StyledPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid
    ${({ theme }) => (theme.mode === "light" ? theme.gray4 : theme.gray2)};
`;

const CourseImgPlaceholder = () => {
  return <StyledPlaceholder />;
};

export default CourseImgPlaceholder;
