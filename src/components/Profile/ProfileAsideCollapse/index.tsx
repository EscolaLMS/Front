import React, { ReactNode, useState } from "react";
import styled from "styled-components";

interface Props {
  headerTitle: string;
  headerClassName?: string;
  initialValue?: boolean;
  children: ReactNode;
}

const StyledCollapse = styled.div<{ isOpen: boolean }>`
  transition: max-height 0.5s ease-in-out;
  max-height: 5000px;
  ${({ isOpen }) =>
    !isOpen
      ? "max-height: 20px; overflow: hidden; transition: max-height 1s cubic-bezier(0, 1, 0, 1);"
      : ""};

  .collapse-header {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: start;
    gap: 6px;

    &__heading {
        text-overflow: ellipsis;
        overflow: hidden;
        cursor: pointer;
    }


    &__icon {
        width: 12px;
        transition: rotate 0.2s ease-in-out;
        rotate: ${({ isOpen }) => (isOpen ? "180deg" : "0")};

        &:hover {
            svg {
                opacity: 0.6;
            }
        }
    }
`;

const ProfileAsideCollapse: React.FC<Props> = ({
  headerTitle,
  headerClassName,
  initialValue,
  children,
}) => {
  const [open, setOpen] = useState(initialValue ?? false);

  return (
    <StyledCollapse isOpen={open}>
      <div
        className={`collapse-header ${headerClassName ?? ""}`}
        onClick={() => setOpen((prev) => !prev)}
        onKeyUp={(e) => e.code === "Enter" && setOpen((prev) => !prev)}
        role="button"
        tabIndex={0}
      >
        <span className="collapse-header__heading">{headerTitle}</span>
        <svg
          className="arrows collapse-header__icon"
          width="14"
          height="8"
          viewBox="0 0 14 8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683418 14.0976 1.31658 13.7071 1.70711L7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      {children}
    </StyledCollapse>
  );
};

export default ProfileAsideCollapse;
