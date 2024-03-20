import styled from "styled-components";

const StyledLoginPage = styled.div`
  min-height: calc(100vh - 452px);
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.gray4};
  @media (max-width: 991px) {
    padding-top: 100px;
    height: 100%;
    padding-bottom: 50px;
  }
`;

type Props = {
  children: React.ReactNode;
};

const AuthWrapper: React.FC<Props> = ({ children }) => {
  return <StyledLoginPage>{children}</StyledLoginPage>;
};

export default AuthWrapper;
