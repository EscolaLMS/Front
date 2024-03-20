import ProfileLayout from "@/components/Profile/ProfileLayout";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { getStylesBasedOnTheme } from "@escolalms/components/lib/utils/utils";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import useSubscriptions from "@/hooks/useSubscriptions";
import { Col, Row } from "react-grid-system";
import SubscriptionBox from "@/components/Subscriptions/Box";
import { formatDate } from "@/utils/date";
import { StarIcon } from "@/icons/index";
import ContentLoader from "@/components/_App/ContentLoader";

const StyledInfoBox = styled.div`
  border-radius: ${({ theme }) => theme.buttonRadius}px;
  background-color: ${({ theme }) =>
    getStylesBasedOnTheme(theme.mode, theme.black, theme.white, "black")};
  padding: 22px;
  margin-top: 10px;
  margin-bottom: 40px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

const MySubscriptions = () => {
  const { t } = useTranslation();
  const { subscriptions, getActiveSubscription, isLoading } =
    useSubscriptions();

  return (
    <ProfileLayout title={t("MyProfilePage.Subscriptions")}>
      {isLoading ? (
        <ContentLoader />
      ) : (
        <>
          <StyledInfoBox className="info-box">
            {getActiveSubscription && <StarIcon />}
            <Text>
              {getActiveSubscription
                ? t("Subscriptions.ActiveSubscription", {
                    date: formatDate(
                      // TODO: when ts models are ready, remove  this comment
                      // @ts-ignore
                      getActiveSubscription.end_date,
                      "dd.MM.yyyy"
                    ),
                  })
                : t("Subscriptions.NoSubscription")}
            </Text>
          </StyledInfoBox>
          {!getActiveSubscription && (
            <div className="subscriptions">
              <Row>
                {subscriptions.map((subscription) => (
                  <Col lg={6} md={12} key={subscription.id}>
                    <SubscriptionBox subscription={subscription} />
                  </Col>
                ))}
              </Row>
            </div>
          )}
        </>
      )}
    </ProfileLayout>
  );
};

export default MySubscriptions;
