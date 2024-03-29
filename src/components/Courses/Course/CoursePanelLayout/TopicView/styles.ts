import styled from "styled-components";
import { fadeInAnimation } from "src/style/animations";

export const TopicViewWrapper = styled.main`
  width: auto;
  height: calc(100vh - 215px);
  overflow-y: auto;
  padding: 20px 26px;

  ${fadeInAnimation()}
`;
