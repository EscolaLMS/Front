import React, { useContext, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { isMobile } from "react-device-detect";
import isPast from "date-fns/isPast";
import { API } from "@escolalms/sdk/lib";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { IconText, Text, Button } from "@escolalms/components";
import { PricingCard } from "@escolalms/components/lib/components/atoms/PricingCard/PricingCard";
import { IconSquares, IconCamera, IconLocation } from "@/icons/index";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { formatPrice } from "@/utils/index";
import ProductPrices from "@/components/ProductPrices";
import routeRoutes from "@/components/Routes/routes";
import { ButtonStatus } from "@/types/buttons";

const EventDetailsSidebar: React.FC<{ event: API.StationaryEvent }> = ({
  event,
}) => {
  const [buttonStatus, setButtonStatus] = useState<ButtonStatus>(
    ButtonStatus.DEFAULT
  );
  const { cart, addToCart, user } = useContext(EscolaLMSContext);
  const { t } = useTranslation();
  const { push } = useHistory();

  const eventInCart = useMemo(() => {
    return cart?.value?.items.some(
      (item) => Number(item.product_id) === Number(event.product?.id)
    );
  }, [event.product?.id, cart]);

  useEffect(() => {
    // If event finished
    if (isPast(new Date(event.finished_at || ""))) {
      setButtonStatus(ButtonStatus.FINISHED);
      // If event in cart
    } else if (eventInCart) {
      setButtonStatus(ButtonStatus.IN_CART);
      // If user bought product and event finished
    } else if (
      user.value?.id &&
      event.product?.owned &&
      isPast(new Date(event.finished_at || ""))
    ) {
      setButtonStatus(ButtonStatus.USER_BOUGHT_AND_EVENT_FINISHED);
      // If user bought product
    } else if (user.value?.id && event.product?.owned) {
      setButtonStatus(ButtonStatus.USER_BOUGHT);
      // If user logged and product available and buyable
    } else if (user.value?.id && event.product && event.product.buyable) {
      setButtonStatus(ButtonStatus.USER_LOGGED_AND_PRODUCT_AVAILABLE);
      // If product unavailable
    } else if (!event.product || (user.value?.id && !event.product.buyable)) {
      setButtonStatus(ButtonStatus.PRODUCT_UNAVAILABLE);
    } else {
      // Default
      setButtonStatus(ButtonStatus.DEFAULT);
    }
  }, [eventInCart, event, user.value?.id]);

  return !isMobile ? (
    <PricingCard>
      <Title level={4} as="h2">
        {event.name}
      </Title>
      <ProductPrices
        price={event.product?.price}
        oldPrice={event.product?.price_old}
        taxRate={event.product?.tax_rate}
      />
      {/* BUTTONS START */}
      {buttonStatus === ButtonStatus.FINISHED && (
        <Text>{t("EventPage.IsFinished")}</Text>
      )}
      {buttonStatus === ButtonStatus.IN_CART && (
        <Button mode="secondary" onClick={() => push(routeRoutes.cart)}>
          {t("EventPage.GoToCheckout")}
        </Button>
      )}
      {buttonStatus === ButtonStatus.USER_BOUGHT_AND_EVENT_FINISHED && (
        <Button onClick={() => push(`/event/${event.id}`)} mode="secondary">
          {t("Show")}
        </Button>
      )}
      {buttonStatus === ButtonStatus.USER_BOUGHT && (
        <Text>{t("EventPage.NotStarted")}</Text>
      )}
      {buttonStatus === ButtonStatus.USER_LOGGED_AND_PRODUCT_AVAILABLE && (
        <Button
          loading={cart.loading}
          mode="secondary"
          onClick={() =>
            addToCart(Number(event.product?.id)).then(() =>
              push(routeRoutes.cart)
            )
          }
        >
          {t("Buy now")}
        </Button>
      )}
      {buttonStatus === ButtonStatus.PRODUCT_UNAVAILABLE && (
        <Text>{t("EventPage.UnavailableEvent")}</Text>
      )}
      {buttonStatus === ButtonStatus.DEFAULT && (
        <Button
          onClick={() => push(`/login?referrer=/event/${event.id}`)}
          mode="secondary"
        >
          {t("Buy now")}
        </Button>
      )}
      {/* BUTTONS END */}
      <Text size={"12"}> {t("EventPage.30Days")}</Text>
      <div className="pricing-card-features">
        {event.place && (
          <IconText icon={<IconLocation />} text={`${event.place}`} />
        )}
        {event.product?.duration && (
          <IconText
            icon={<IconCamera />}
            text={`${t("Duration")}: ${event.product.duration}`}
          />
        )}
        {event.users_count ? (
          <IconText
            icon={<IconSquares />}
            text={`${t("Students")}: ${event.users_count}`}
          />
        ) : (
          ""
        )}
      </div>
    </PricingCard>
  ) : (
    <PricingCard mobile>
      <Title level={5} as={"h5"}>
        {event.name}
      </Title>
      <div className="pricing-card-footer">
        <div>
          {event.product?.price_old && (
            <div className="pricing-card-discount">
              <Title level={5} as={"h5"}>
                {formatPrice(event.product?.price_old, event.product?.tax_rate)}{" "}
                zł
              </Title>
            </div>
          )}
          <Title level={4} as={"h4"}>
            {formatPrice(event.product?.price, event.product?.tax_rate)} zł
          </Title>
        </div>
        <div>
          {eventInCart ? (
            <Button
              block
              mode="secondary"
              onClick={() => push(routeRoutes.cart)}
            >
              {t("EventPage.GoToCheckout")}
            </Button>
          ) : user.value && event.product ? (
            <Button
              block
              mode="secondary"
              onClick={() =>
                addToCart(Number(event.product?.id)).then(() =>
                  push(routeRoutes.cart)
                )
              }
            >
              {t("Buy now")}
            </Button>
          ) : !event.product ? (
            <Text>{t("EventPage.UnavailableEvent")}</Text>
          ) : (
            <Button
              onClick={() => push(`/login?referrer=/event/${event.id}`)}
              block
              mode="secondary"
            >
              {t("Login to buy")}
            </Button>
          )}
        </div>
      </div>
    </PricingCard>
  );
};

export default EventDetailsSidebar;
