import { useContext, useEffect, useMemo, useState } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { isAfter, isPast } from "date-fns";
import { Text, Button } from "@escolalms/components";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import WebinarMeetModal from "@/components/Webinar/WebinarMeetModal";

enum ButtonStatus {
  FINISHED,
  IN_CART,
  USER_BOUGHT_AND_WEBINAR_FINISHED,
  USER_BOUGHT,
  USER_LOGGED_AND_PRODUCT_AVAILABLE,
  PRODUCT_UNAVAILABLE,
  DEFAULT,
  USER_BOUGHT_AND_WEBINAR_STARTED,
}

const WebinarSidebarButtons = () => {
  const [buttonStatus, setButtonStatus] = useState<ButtonStatus>(
    ButtonStatus.DEFAULT
  );
  const [showMeetModal, setShowMeetModal] = useState(false);
  const {
    cart,
    addToCart,
    user,
    webinar: { value: webinarObj },
  } = useContext(EscolaLMSContext);
  const { t } = useTranslation();
  const { push } = useHistory();

  const webinarInCart = useMemo(() => {
    return cart?.value?.items.some(
      (item) => Number(item.product_id) === Number(webinarObj?.product?.id)
    );
  }, [webinarObj?.product?.id, cart]);

  useEffect(() => {
    // If event finished
    if (webinarObj?.deadline && isPast(new Date(webinarObj?.deadline))) {
      setButtonStatus(ButtonStatus.FINISHED);
      // If event in cart
    } else if (webinarInCart) {
      setButtonStatus(ButtonStatus.IN_CART);
      // If user bought product and event finished
    } else if (
      user.value?.id &&
      webinarObj?.product?.owned &&
      webinarObj?.is_ended
    ) {
      setButtonStatus(ButtonStatus.USER_BOUGHT_AND_WEBINAR_FINISHED);
      // If user bought product
    } else if (
      user.value?.id &&
      webinarObj?.product?.owned &&
      webinarObj?.in_coming
    ) {
      setButtonStatus(ButtonStatus.USER_BOUGHT);
      // If user bought product and webinar started
    } else if (
      user.value?.id &&
      webinarObj?.product?.owned &&
      webinarObj?.is_started
    ) {
      setButtonStatus(ButtonStatus.USER_BOUGHT_AND_WEBINAR_STARTED);
      // If user logged and product available and buyable
    } else if (
      user.value?.id &&
      webinarObj?.product &&
      webinarObj?.product.buyable
    ) {
      setButtonStatus(ButtonStatus.USER_LOGGED_AND_PRODUCT_AVAILABLE);
      // If product unavailable
    } else if (
      !webinarObj?.product ||
      (user.value?.id && !webinarObj?.product.buyable)
    ) {
      setButtonStatus(ButtonStatus.PRODUCT_UNAVAILABLE);
    } else {
      // Default
      setButtonStatus(ButtonStatus.DEFAULT);
    }
  }, [webinarInCart, webinarObj, user.value?.id]);

  return (
    <>
      {buttonStatus === ButtonStatus.FINISHED && (
        <Text>{t("EventPage.IsFinished")}</Text>
      )}
      {buttonStatus === ButtonStatus.IN_CART && (
        <Button mode="secondary" onClick={() => push("/cart")}>
          {t("EventPage.GoToCheckout")}
        </Button>
      )}
      {buttonStatus === ButtonStatus.USER_BOUGHT_AND_WEBINAR_FINISHED && (
        <Button
          onClick={() => push(`/webinar/${webinarObj?.id}`)}
          mode="secondary"
        >
          {t("Show")}
        </Button>
      )}
      {buttonStatus === ButtonStatus.USER_BOUGHT && (
        <Text>{t("EventPage.NotStarted")}</Text>
      )}
      {buttonStatus === ButtonStatus.USER_BOUGHT_AND_WEBINAR_STARTED && (
        <Button
          loading={cart.loading}
          mode="secondary"
          onClick={() => setShowMeetModal(true)}
        >
          {t("Join")}
        </Button>
      )}
      {buttonStatus === ButtonStatus.USER_LOGGED_AND_PRODUCT_AVAILABLE && (
        <Button
          loading={cart.loading}
          mode="secondary"
          onClick={() =>
            addToCart(Number(webinarObj?.product?.id)).then(() => push("/cart"))
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
          onClick={() => push(`/login?referrer=/webinar/${webinarObj?.id}`)}
          mode="secondary"
        >
          {t("Buy now")}
        </Button>
      )}

      {/* MEET MODAL */}
      {showMeetModal && webinarObj?.id && (
        <WebinarMeetModal
          visible={showMeetModal}
          onClose={() => setShowMeetModal(false)}
          webinarId={webinarObj.id}
        />
      )}
    </>
  );
};

export default WebinarSidebarButtons;
