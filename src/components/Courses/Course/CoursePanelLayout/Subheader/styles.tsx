import styled from "styled-components";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";

export const SubheaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 50px;
  box-shadow: 0px 3px 6px #0000000b;
  background-color: #ffffff;
  padding: 0px 26px;
  gap: 8px;
`;

export const SubheaderTitle = styled(Title)`
  text-overflow: ellipsis;
  text-wrap: nowrap;
  overflow: hidden;
  padding: 0 25px;
  font-size: 16px;
  padding: 0;
  margin: 0;
  width: 100%;

  span {
    font-weight: normal;
    margin-right: 8px;
  }
`;

export const ProgressBarContainer = styled.div`
  width: 100%;

  .percentage-value {
    color: ${({ theme: { positive } }) => positive};
  }
`;
