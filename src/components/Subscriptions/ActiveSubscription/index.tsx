import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { getStylesBasedOnTheme } from "@escolalms/components/lib/utils/utils";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";

import { formatDate } from "@/utils/date";
import { StarIcon } from "@/icons/index";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { useCallback, useState } from "react";

enum SubscriptionStatus {
  ACTIVE = "active",
  CANCELED = "cancelled",
}

const StyledInfoBox = styled.div`
  border-radius: ${({ theme }) => theme.buttonRadius}px;
  background-color: ${({ theme }) =>
    getStylesBasedOnTheme(theme.mode, theme.black, theme.white, "black")};
  padding: 22px;
  margin-top: 10px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .${SubscriptionStatus.CANCELED} {
    color: ${({ theme }) => theme.primaryColor};
    @media (max-width: 768px) {
      padding-left: 20px;
    }
  }
`;

type Props = {
  activeSubscription: any;
  subscriptionCancel: (id: number) => void;
};

const ActiveSubscription: React.FC<Props> = ({
  activeSubscription,
  subscriptionCancel,
}) => {
  const [subStatus, setSubSatuts] = useState(
    activeSubscription?.status || SubscriptionStatus.ACTIVE
  );
  const { t } = useTranslation();
  console.log("activeSubscription", activeSubscription);

  const handleSubscriptionCancel = useCallback(() => {
    setSubSatuts(SubscriptionStatus.CANCELED);
    subscriptionCancel(activeSubscription.id);
  }, [activeSubscription?.id, subscriptionCancel]);

  return (
    <StyledInfoBox className="info-box">
      <div>
        {activeSubscription && <StarIcon />}
        <Text>
          {activeSubscription
            ? t("Subscriptions.ActiveSubscription", {
                date: formatDate(
                  // TODO: when ts models are ready, remove  this comment
                  // @ts-ignore
                  activeSubscription.end_date,
                  "dd.MM.yyyy"
                ),
              })
            : t("Subscriptions.NoSubscription")}
        </Text>
      </div>
      {subStatus === SubscriptionStatus.CANCELED && (
        <Text className={SubscriptionStatus.CANCELED}>
          {t("Subscriptions.Cancelled")}
        </Text>
      )}
      {subStatus === SubscriptionStatus.ACTIVE && (
        <Button onClick={handleSubscriptionCancel}>Anuluj subskrypcję</Button>
      )}
    </StyledInfoBox>
  );
};

export default ActiveSubscription;
