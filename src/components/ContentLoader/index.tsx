import { Spin } from "@escolalms/components";
import styled, { useTheme } from "styled-components";

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const ContentLoader = () => {
  const theme = useTheme();
  return (
    <SpinnerWrapper>
      <Spin color={theme.primaryColor} />
    </SpinnerWrapper>
  );
};

export default ContentLoader;
