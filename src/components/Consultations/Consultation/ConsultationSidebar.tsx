import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { PricingCard } from "@escolalms/components/lib/components/atoms/PricingCard/PricingCard";
import React, { useCallback, useContext, useMemo } from "react";
import { CartItem, Consultation } from "@escolalms/sdk/lib/types";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { IconText } from "@escolalms/components/lib/components/atoms/IconText/IconText";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { IconBadge, IconQuestion, IconTime } from "../../../icons";
import { formatPrice } from "@/utils/index";
import isPast from "date-fns/isPast";
import { useTranslation } from "react-i18next";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { useHistory } from "react-router-dom";
import {
  StyledConsultationSidebar,
  StyledMobileConsultationSidebar,
} from "@/components/Consultations/Consultation/style";
import { isMobile } from "react-device-detect";
import routeRoutes from "@/components/Routes/routes";
import {
  EntityRedirectBuyType,
  useEntityBuyableType,
} from "@/hooks/useEntityPrice";
import usePayment, { PaymentGateway } from "@/hooks/usePayment";

interface ConsultationSidebarProps {
  consultation: Consultation | undefined;
}

const ConsultationSidebar: React.FC<ConsultationSidebarProps> = (props) => {
  const { consultation } = props;
  const { cart, addToCart, user } = useContext(EscolaLMSContext);
  const { t } = useTranslation();
  const { push } = useHistory();
  const buyableType = useEntityBuyableType(consultation);
  const isFree = buyableType === EntityRedirectBuyType.FREE;
  const { defaultGateway, payByP24, payByStripe } = usePayment();

  const consultationInCart = useMemo(() => {
    return cart?.value?.items.some(
      (item: CartItem) =>
        Number(item.product_id) === Number(consultation?.product?.id)
    );
  }, [consultation?.product?.id, cart]);

  const handleAddToCart = useCallback(() => {
    if (isFree && consultation?.product?.id) {
      addToCart(Number(consultation.product?.id)).then(() =>
        defaultGateway === PaymentGateway.Stripe
          ? payByStripe("free")
          : payByP24()
      );
    } else {
      consultation &&
        addToCart(Number(consultation.product?.id)).then(() =>
          push(routeRoutes.cart)
        );
    }
  }, [
    consultation,
    addToCart,
    push,
    payByStripe,
    payByP24,
    defaultGateway,
    isFree,
  ]);

  return isMobile ? (
    <StyledMobileConsultationSidebar>
      <PricingCard mobile>
        <Title level={5} as="h5">
          {t("ConsultationPage.SidebarHeader")}
        </Title>
        <div className="pricing-card-footer">
          <div>
            <Title
              level={4}
              as="h4"
              style={{
                marginBottom: 10,
              }}
            >
              {isFree
                ? t("CoursesPage.Free")
                : consultation?.product &&
                  `${formatPrice(
                    consultation.product.price,
                    consultation.product.tax_rate
                  )} zł`}
            </Title>
          </div>
          <div>
            {isPast(new Date(consultation?.active_to || "")) ? (
              <Text>{t("ConsultationPage.IsFinished")}</Text>
            ) : consultationInCart ? (
              <Button
                mode="secondary"
                block
                onClick={() => push(routeRoutes.cart)}
              >
                {t("ConsultationPage.GoToCheckout")}
              </Button>
            ) : user.value && consultation?.product?.purchasable ? (
              <Button
                loading={cart.loading}
                block
                mode="secondary"
                onClick={handleAddToCart}
              >
                {t("ConsultationPage.BuyConsultation")}
              </Button>
            ) : (
              <Button
                block
                onClick={() =>
                  push(`/login?referrer=/consultations/${consultation?.id}`)
                }
                mode="secondary"
              >
                {t("ConsultationPage.BuyConsultation")}
              </Button>
            )}
          </div>
        </div>
      </PricingCard>
    </StyledMobileConsultationSidebar>
  ) : (
    <StyledConsultationSidebar>
      <PricingCard>
        <Title level={4} as="h2">
          {t("ConsultationPage.SidebarHeader")}
        </Title>
        <Title
          level={3}
          as="h3"
          style={{
            marginTop: 20,
          }}
        >
          {isFree
            ? t("CoursesPage.Free")
            : consultation?.product &&
              `${formatPrice(
                consultation.product.price,
                consultation.product.tax_rate
              )} zł`}
        </Title>
        <IconText
          icon={<IconTime />}
          text={
            <>
              <strong>{consultation?.product?.duration}</strong> -{" "}
              {t("Consultation")}
            </>
          }
          style={{
            marginTop: 20,
          }}
        />
        {isPast(new Date(consultation?.active_to || "")) ? (
          <Text>{t("ConsultationPage.IsFinished")}</Text>
        ) : consultationInCart ? (
          <Button mode="secondary" onClick={() => push(routeRoutes.cart)}>
            {t("ConsultationPage.GoToCheckout")}
          </Button>
        ) : user.value && consultation?.product?.purchasable ? (
          <Button
            loading={cart.loading}
            mode="secondary"
            onClick={handleAddToCart}
          >
            {t("ConsultationPage.BuyConsultation")}
          </Button>
        ) : (
          <Button
            onClick={() =>
              push(`/login?referrer=/consultations/${consultation?.id}`)
            }
            mode="secondary"
          >
            {t("ConsultationPage.BuyConsultation")}
          </Button>
        )}

        <IconText
          icon={<IconQuestion />}
          text={t("ConsultationPage.SidebarFeature2")}
        />
        <IconText
          icon={<IconBadge />}
          text={t("ConsultationPage.SidebarFeature3")}
          noMargin
        />
      </PricingCard>
    </StyledConsultationSidebar>
  );
};

export default ConsultationSidebar;
