import styled from "styled-components";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";

export const CoursePanelHeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme: { gray1 } }) => gray1};
  color: ${({ theme: { white } }) => white};
  padding: 0 26px;
  height: 50px;

  picture {
    margin: 0 10px;
    color: ${({ theme: { gray4 } }) => gray4};
  }
`;

export const CoursePanelHeaderTitle = styled(Title)`
  text-overflow: ellipsis;
  text-wrap: nowrap;
  overflow: hidden;
  padding: 0 25px;
  font-size: 16px;
  color: ${({ theme: { gray4 } }) => gray4};
  padding: 0;

  > * {
    color: ${({ theme: { gray4 } }) => gray4};
  }

  span {
    font-weight: normal;
    margin-right: 8px;
  }
`;

export const CoursePanelHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: color 150ms ease-in-out;

  svg {
    color: #afafaf;
  }

  &:hover {
    > * {
      transition: color 150ms ease-in-out;
      color: ${({ theme: { gray4 } }) => gray4};
    }
  }
`;

export const CoursePanelHeaderIconText = styled(Text)`
  color: ${({ theme: { gray2 } }) => gray2};
  margin: 0;
  line-height: 0;
`;
