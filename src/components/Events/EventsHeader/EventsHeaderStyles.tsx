import { FC, ReactNode, useContext } from "react";
import { isMobile } from "react-device-detect";
import styled from "styled-components";
import { API } from "@escolalms/sdk/lib";
import { EventsContext } from "@/components/Events/EventsContext";

interface EventsHeaderStylesProps {
  children: ReactNode | ReactNode[];
}

const EventsHeaderStyles: FC<EventsHeaderStylesProps> = ({ children }) => {
  const StyledHeader = styled("div")<{ filters: API.EventsParams | undefined }>`
    background: ${({ theme }) => theme.primaryColor};
    padding: ${isMobile ? "60px 20px 20px 20px" : "140px 40px 30px"};
    margin-bottom: ${isMobile ? "100px" : "40px"};

    h1 {
      color: ${({ theme }) => theme.white};
      margin-bottom: ${({ filters }) =>
        isMobile
          ? 0
          : filters && Object.keys(filters).length > 1
          ? "35px"
          : filters && Object.keys(filters).length === 1 && "page" in filters
          ? "-35px"
          : filters === undefined
          ? "-35px"
          : "35px"};
      transition: margin-bottom 0.5s ease-out;
    }

    .filters {
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
      position: relative;
    }

    .selects-row {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      column-gap: 35px;

      @media (max-width: 991px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        margin-top: 40px;
      }
      @media (max-width: 575px) {
        row-gap: 15px;
        margin-top: 20px;
      }

      .single-select--search {
        .search-input-options {
          display: none !important;
        }
        input {
          background: transparent !important;
          border-bottom: 1px solid #fff;
          color: #fff;
          border-radius: 0;
        }

        .fieldset {
          border-color: transparent !important;
        }

        svg {
          filter: brightness(0) invert(1);
        }
      }

      .single-select--category {
        min-width: 200px;
      }
    }
  `;
  const { params } = useContext(EventsContext);

  return <StyledHeader filters={params}>{children}</StyledHeader>;
};

export default EventsHeaderStyles;
