import { Spin } from "@escolalms/components/lib/components/atoms/Spin/Spin";
import styled, { useTheme } from "styled-components";

interface Props {
  width?: string;
  height?: string;
}

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const ContentLoader = ({ width, height }: Props) => {
  const theme = useTheme();
  return (
    <SpinnerWrapper
      style={{
        width: width || "100%",
        height: height || "100%",
      }}
    >
      <Spin color={theme.primaryColor} />
    </SpinnerWrapper>
  );
};

export default ContentLoader;
