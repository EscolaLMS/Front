import Container from "@/components/Common/Container";
import styled from "styled-components";
import { Title } from "@escolalms/components/lib/index";

const Wrapper = styled.section`
  padding-top: 31px;
`;

const StyledHeader = styled.div`
  background: ${({ theme }) => theme.gray4};
  padding: 25px 0px 10px;
  position: relative;
  margin-bottom: 16px;
`;

type Props = {
  children: React.ReactNode;
  title: string;
};

const EntityPageWrapper: React.FC<Props> = ({ children, title }) => {
  return (
    <Wrapper className="consultations-page">
      <StyledHeader>
        <Container>
          <Title level={1}> {title}</Title>
        </Container>
      </StyledHeader>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default EntityPageWrapper;
