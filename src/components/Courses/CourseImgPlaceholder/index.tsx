import styled from "styled-components";
import Placeholder from "../../../images/no-picture.png";

const StyledPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid
    ${({ theme }) => (theme.mode === "light" ? theme.gray4 : theme.gray2)};
  img {
    &:hover {
      transform: none !important;
    }
  }
`;

const CourseImgPlaceholder = () => {
  return (
    <StyledPlaceholder>
      <img src={Placeholder} alt="" />
    </StyledPlaceholder>
  );
};

export default CourseImgPlaceholder;
