import { ArrowUp } from "@/icons/index";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledGoTop = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.gray3};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  svg {
    transition: transform 0.3s ease;
  }
  &:hover {
    transform: translateY(-5px);
    svg {
      transform: translateY(-5px);
    }
  }
`;

const GoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window && window.scrollY > 70) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const renderGoTopIcon = () => {
    return (
      <StyledGoTop
        className={`go-top ${isVisible ? "active" : ""}`}
        onClick={scrollToTop}
        onKeyDown={scrollToTop}
        role="button"
        tabIndex={-1}
      >
        <ArrowUp />
      </StyledGoTop>
    );
  };

  return <React.Fragment>{renderGoTopIcon()}</React.Fragment>;
};

export default GoTop;
