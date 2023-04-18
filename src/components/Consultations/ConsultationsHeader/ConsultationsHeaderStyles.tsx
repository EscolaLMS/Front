import { FC, ReactNode } from "react";
import { isMobile } from "react-device-detect";
import styled from "styled-components";
import { API } from "@escolalms/sdk/lib";
import { useSearchParams } from "../../../hooks/useSearchParams";

interface ConsultationsHeaderStylesProps {
  children: ReactNode | ReactNode[];
}

const ConsultationsHeaderStyles: FC<ConsultationsHeaderStylesProps> = ({
  children,
}) => {
  const StyledHeader = styled("div")<{
    filters: API.ConsultationParams | undefined;
  }>`
    background: ${({ theme }) => theme.primaryColor};
    padding: ${isMobile ? "60px 20px 20px 20px" : "140px 40px 30px"};
    margin-bottom: ${isMobile ? "100px" : "40px"};

    h1 {
      color: ${({ theme }) => theme.white};
    }

    .tags {
      display: ${({ filters }) =>
        filters && Object.keys(filters).length > 2 ? "block" : "none"};
      width: 100%;
      margin-top: 35px;
    }
  `;
  const { paramsToObject } = useSearchParams();
  return <StyledHeader filters={paramsToObject}>{children}</StyledHeader>;
};

export default ConsultationsHeaderStyles;
