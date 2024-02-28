import { useEffect } from "react";
import { Spin } from "@escolalms/components/lib/components/atoms/Spin/Spin";
import styled, { useTheme } from "styled-components";

const StyledLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) =>
    theme.mode === "dark" ? theme.dm__background : theme.background};
`;

const Preloader = () => {
  const theme = useTheme();
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "inherit";
    };
  }, []);

  return (
    <StyledLoader>
      <Spin color={theme.primaryColor} />
    </StyledLoader>
  );
};

export default Preloader;
