import styled from "styled-components";

const StyledLoginPage = styled.div`
  min-height: calc(100vh - 592px);
  max-height: calc(100vh - 9px);
  padding: 100px 0px;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.gray4};
  position: relative;
  @media (max-width: 991px) {
    padding-top: 100px;
    height: 100%;
    padding-bottom: 50px;
  }
  * {
    @media (max-width: 991px) {
      width: 100%;
    }
  }
`;

type Props = {
  children: React.ReactNode;
};

const AuthWrapper: React.FC<Props> = ({ children }) => {
  return <StyledLoginPage>{children}</StyledLoginPage>;
};

export default AuthWrapper;
