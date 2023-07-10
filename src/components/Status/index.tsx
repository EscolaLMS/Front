import { useMemo } from "react";
import styled, { useTheme } from "styled-components";

const StatusStyles = styled.div`
  display: flex;
  align-items: center;
  user-select: none;

  .status {
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  .name {
    padding: 0.5rem;
    font-family: ${({ theme }) => theme.font};
  }
`;

export enum StatusTypes {
  "ACCEPTED",
  "WAITING",
  "ENDED",
  "CANCELED",
  "DEFAULT",
}

interface Props {
  status: StatusTypes;
  name: string;
}

const Status = ({ status, name }: Props) => {
  const theme = useTheme();
  const color = useMemo(() => {
    switch (status) {
      case StatusTypes.ACCEPTED:
        return "#198754";
      case StatusTypes.WAITING:
        return "#FFC300";
      case StatusTypes.ENDED:
      case StatusTypes.CANCELED:
        return "#D22B2B";
      default:
        return theme.primaryColor;
    }
  }, [theme.primaryColor, status]);

  return (
    <StatusStyles>
      <div
        className="status"
        style={{
          backgroundColor: color,
        }}
      />
      <div className="name">{name}</div>
    </StatusStyles>
  );
};

export default Status;
