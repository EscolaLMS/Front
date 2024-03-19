import styled from "styled-components";
import Layout from "@/components/_App/Layout";
import Container from "@/components/Common/Container";
import Notifications from "@/components/Notifications";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.gray4};
`;

const NotificationsContainer = styled.div`
  padding-top: 70px;
  min-height: 50vh;
  padding-bottom: 50px;
  .notifications-drawer__content__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      display: none;
    }
  }
  .notifications-drawer__content--clear-all {
    margin-bottom: 20px;
    margin-top: 10px;
    button {
      all: unset;
      font-size: 13px;
      font-family: ${({ theme }) => theme.font};
      color: ${({ theme }) => theme.primaryColor};
      font-weight: 700;
    }
  }

  .notifications-drawer__content--list {
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const MyNotificationsPage = () => {
  return (
    <Layout>
      <Wrapper>
        <Container>
          <NotificationsContainer>
            <Notifications />
          </NotificationsContainer>
        </Container>
      </Wrapper>
    </Layout>
  );
};

export default MyNotificationsPage;
