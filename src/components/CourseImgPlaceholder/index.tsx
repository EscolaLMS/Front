import styled from "styled-components";
import Placeholder from "../../images/placeholder-course.jpeg";

const StyledPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid
    ${({ theme }) => (theme.mode === "light" ? theme.gray4 : theme.gray2)};
`;

const CourseImgPlaceholder = () => {
  return (
    <StyledPlaceholder>
      <img src={Placeholder} alt="" />
    </StyledPlaceholder>
  );
};

export default CourseImgPlaceholder;
