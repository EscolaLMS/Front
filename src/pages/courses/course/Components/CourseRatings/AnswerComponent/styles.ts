import { Row } from "@escolalms/components";
import styled from "styled-components";

export const Container = styled(Row)`
  justify-content: space-between;
  padding: 16px;
  background: ${({ theme }) => theme.white};
`;
