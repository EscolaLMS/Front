import routeRoutes from "@/components/Routes/routes";
import usePayment from "@/hooks/usePayment";
import { StarIcon } from "@/icons/index";
import { formatPrice } from "@/utils/index";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { getStylesBasedOnTheme } from "@escolalms/components/lib/utils/utils";
import { useCallback, useMemo } from "react";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const StyledSubscription = styled.div<{ $isMobile: boolean }>`
  border-radius: ${({ theme }) => theme.cardRadius}px;
  border: 1px solid ${({ theme }) => theme.gray3};
  padding: ${({ $isMobile }) => ($isMobile ? "20px" : "23px 75px")};
  transition: border 0.3s ease-in-out;
  margin-bottom: ${({ $isMobile }) => ($isMobile ? "30px" : "30px")};
  background-color: ${({ theme }) =>
    getStylesBasedOnTheme(theme.mode, theme.black, theme.white, "black")};
  .content {
    text-align: center;
    max-width: 210px;
    position: relative;
    margin: 0 auto;

    p {
      margin-bottom: 0;
    }
    .information {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2.5px;
      margin-top: 5px;
      background-color: ${({ theme }) => theme.secondaryColor};
    }
    .divider {
      width: 21px;
      height: 3px;
      border-radius: 18px;
      background-color: ${({ theme }) => theme.primaryColor};
      margin: 23px auto 16px auto;
    }
    .description {
      margin-bottom: 17px;
    }
    .price {
      margin-bottom: 30px;
    }
    button {
      width: 100%;
    }
    .tag {
      position: absolute;
      top: -37px;
      left: 0;
      right: 0;
      margin: auto;
      border-radius: 18px;
      width: fit-content;
      background-color: ${({ theme }) => theme.textColor};
      padding: 3px 14px;

      p {
        text-transform: uppercase;
        color: ${({ theme }) => theme.white};
        margin-bottom: 0;
      }
    }
  }

  &:hover {
    border: 1px solid #333333;
  }
`;

type Props = {
  // TODO: when model types will be updated change this
  subscription: any;
};

const SubscriptionBox: React.FC<Props> = ({ subscription }) => {
  const { t } = useTranslation();
  const { buySubscriptionByP24, user } = usePayment();

  const history = useHistory();
  const showTag = useMemo(() => {
    return subscription.tags && subscription.tags.includes("best-deal");
  }, [subscription.tags]);

  const handleBuySubscription = useCallback(() => {
    if (user.value?.id) {
      buySubscriptionByP24(subscription.id);
    } else {
      history.push(routeRoutes.login);
    }
  }, [subscription.id, user.value?.id, buySubscriptionByP24, history]);

  return (
    <StyledSubscription $isMobile={isMobile}>
      <div className="content">
        {showTag && (
          <div className="tag">
            <Text size="13">{t("Subscriptions.CheapestOffer")}</Text>
          </div>
        )}

        <Text>{t("Subscriptions.AccessVia")}</Text>
        <Title level={1} as={"h4"}>
          {subscription.subscription_duration}{" "}
          {t(`Subscriptions.Periods.${subscription.subscription_period}`)}
        </Title>
        <Text className="information" size="13">
          <StarIcon /> {subscription.trial_duration}-
          {t(`Subscriptions.Periods.${subscription.trial_period}`)}{" "}
          {t("Subscriptions.TrialText")}
        </Text>
        <div className="divider"></div>
        <Text size="13" className="description">
          {subscription.name}
        </Text>
        <Text size="24" className="price" bold>
          {formatPrice(subscription.gross_price)} zł
        </Text>
        {
          <Button mode="secondary" onClick={() => handleBuySubscription()}>
            {t("Subscriptions.IPick")}
          </Button>
        }
      </div>
    </StyledSubscription>
  );
};

export default SubscriptionBox;
