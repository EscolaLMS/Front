import ProfileLayout from "@/components/Profile/ProfileLayout";
import { useTranslation } from "react-i18next";
import useSubscriptions from "@/hooks/useSubscriptions";
import { Col, Row } from "react-grid-system";
import SubscriptionBox from "@/components/Subscriptions/Box";
import ContentLoader from "@/components/_App/ContentLoader";
import ActiveSubscription from "@/components/Subscriptions/ActiveSubscription";

const MySubscriptions = () => {
  const { t } = useTranslation();
  const {
    subscriptions,
    getActiveSubscription,
    isLoading,
    subscriptionCancel,
  } = useSubscriptions();

  return (
    <ProfileLayout title={t("MyProfilePage.Subscriptions")}>
      {isLoading ? (
        <ContentLoader />
      ) : (
        <>
          <ActiveSubscription
            activeSubscription={getActiveSubscription}
            subscriptionCancel={subscriptionCancel}
          />
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
