import { ThemeCustomizer as Wrapper } from "@escolalms/components/lib/styleguide/ThemeCustomizer";
import { useLocalTheme } from "@escolalms/components/lib/styleguide/useLocalTheme";
import defaultTheme from "@escolalms/components/lib/theme/blue";
import { useState } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  > button {
    appearance: none;
    border: none;
    padding: 0;
    background: 0;
    position: fixed;
    top: 5px;
    right: 5px;
    z-index: 9999;
    width: 24px;
    height: 24px;
    > svg {
      width: 100%;
      height: auto;
      transition: transform 0.5s ease-out;
    }
    &:hover {
      &:after {
        top: 5px;
        position: absolute;
        content: "customize";
        right: 30px;
        font-size: 12px;
      }
      > svg {
        transform: scale(1.1);
      }
    }
  }
  > div {
    z-index: 9999;
  }
`;

export const ThemeCustomizer = () => {
  const [, setTheme] = useLocalTheme(defaultTheme);

  const [hidden, setHidden] = useState(true);
  return (
    <StyledDiv>
      <button onClick={() => setHidden((prevState) => !prevState)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      </button>
      <Wrapper
        hasAll={false}
        hidden={hidden}
        onUpdate={(theme) => {
          console.log("t", theme);
          setTheme(theme);
        }}
      />
    </StyledDiv>
  );
};

export default ThemeCustomizer;
