import { useContext, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link, useHistory } from "react-router-dom";
import { isMobile } from "react-device-detect";

import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { API } from "@escolalms/sdk/lib";
import Button from "@escolalms/components/lib/components/atoms/Button/Button";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import routeRoutes from "@/components/Routes/routes";

interface Props {
  product: API.Product;
}

export const PackageSidebarButtons = ({ product }: Props) => {
  const { cart, addToCart, user } = useContext(EscolaLMSContext);
  const { t } = useTranslation();
  const { push } = useHistory();
  const userId = user.value?.id;

  const productInCart = useMemo(() => {
    return cart?.value?.items.some(
      (item) => Number(item.product_id) === Number(product.id)
    );
  }, [product.id, cart]);

  const Buttons = useMemo(() => {
    if (userId && product.owned) {
      return <Text size="12">{t("PackagePage.ProductOwned")}</Text>;
    }
    if (productInCart) {
      return (
        <Link to={routeRoutes.cart}>
          <Button mode="secondary" block={isMobile}>
            {t("EventPage.GoToCheckout")}
          </Button>
        </Link>
      );
    }
    if (userId && product.buyable && !product.owned) {
      return (
        <Button
          loading={cart.loading}
          mode="secondary"
          block={isMobile}
          onClick={() =>
            addToCart(product.id).then(() => push(routeRoutes.cart))
          }
        >
          {t("Buy now")}
        </Button>
      );
    }
    if (!product || (userId && !product.buyable)) {
      return <Text size="12">{t("EventPage.UnavailableEvent")}</Text>;
    }
    return (
      <Link to={`/login?referrer=/package/${product.id}`}>
        <Button mode="secondary" block={isMobile}>
          {t("Buy now")}
        </Button>
      </Link>
    );
  }, [addToCart, cart.loading, product, productInCart, push, t, userId]);

  return Buttons;
};
