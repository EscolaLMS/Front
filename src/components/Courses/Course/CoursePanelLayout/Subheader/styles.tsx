import styled, { css } from "styled-components";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { mediaQueriesMixin } from "src/style/mixins";

export const SubheaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 50px;
  box-shadow: 0px 3px 6px #0000000b;
  background-color: #ffffff;
  padding: 0px 0 0 26px;
  gap: 8px;

  ${mediaQueriesMixin(
    "lg",
    css`
      padding: 0px 26px;
    `
  )}
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
  width: calc(100% - 50px);

  .label-container .percentage-value {
    color: ${({ theme: { positive } }) => positive};
    display: none;
  }

  ${mediaQueriesMixin(
    "lg",
    css`
      width: 100%;

      .label-container .percentage-value {
        display: unset;
      }
    `
  )}
`;

export const SubHeaderIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background-color: ${({ theme }) => theme.primaryColor};
  width: 50px;
  height: 100%;
  z-index: 10;

  ${mediaQueriesMixin(
    "lg",
    css`
      display: none;
    `
  )}
`;
