import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Layout from "@/components/_App/Layout";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { CheckoutCard } from "@escolalms/components/lib/components/molecules/CheckoutCard/CheckoutCard";
import { CartCard } from "@escolalms/components/lib/components/molecules/CartCard/CartCard";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { Link as ComponentLink } from "@escolalms/components/lib/components/atoms/Link/Link";
import { CartItem } from "@escolalms/sdk/lib/types/api";
import { isMobile } from "react-device-detect";
import Preloader from "@/components/_App/Preloader";
import Collapse from "@/components/Common/Collapse";
import PaymentForm from "@/components/Cart/PaymentForm";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import {
  useStripe,
  useElements,
  CardNumberElement,
} from "@stripe/react-stripe-js";
import CoursesSlider from "@/components/Courses/CoursesSlider";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import Placeholder from "../../../images/image.svg";
import { Col, Row } from "react-grid-system";
import Container from "@/components/Common/Container";
import { formatPrice } from "@/utils/index";
import CartSuccess from "@/components/Cart/CartSuccess";
import routeRoutes from "@/components/Routes/routes";
import { CartPageStyled } from "@/components/Cart/CartContent/styles";
import usePayment from "@/hooks/usePayment";
import { toast } from "@/utils/toast";

const StripeContent = ({ stripeKey }: { stripeKey: string }) => {
  const {
    processing,
    setProcessing,
    discountStatus,
    fetchCart,
    payByStripe,
    courses,
    cart,
    location,
    realizeVoucher,
    push,
    setDiscountStatus,
  } = usePayment();

  const { removeFromCart } = useContext(EscolaLMSContext);

  const { t } = useTranslation();

  const stripe = useStripe();
  const elements = useElements();

  const [billingDetails, setBillingDetails] = useState<{ name: string }>({
    name: "",
  });

  const isTestKey = stripeKey.includes("_test_");

  const handleSubmit = (): void => {
    if (!billingDetails.name) {
      toast(`${t("Cart.EmptyNameWarning")}`, "error");
      return;
    }

    if (!stripe || !elements) {
      toast(`${t("UnexpectedError")}`, "error");
      return;
    }
    const cardNumber = elements.getElement(CardNumberElement);
    cardNumber && setProcessing(true);
    cardNumber &&
      stripe
        .createPaymentMethod({
          type: "card",
          card: cardNumber,
          billing_details: billingDetails,
        })
        .then((res) => {
          if (res.error) {
            setProcessing(false);
            toast(res.error.message, "error");
            console.log(res.error);
          } else {
            payByStripe(res?.paymentMethod?.id);
            setTimeout(() => {
              setProcessing(false);
            }, 3000);
          }
        })
        .catch(() => {
          setProcessing(false);
          toast(`${t("UnexpectedError")}`, "error");
        });
  };
  if (location.search.includes("?status=success")) {
    return <CartSuccess />;
  }
  return (
    <Layout metaTitle={t("Cart.Cart")}>
      <CartPageStyled $isMobile={isMobile}>
        <Container>
          {!(cart.value?.items.length === 0) ? (
            <Row>
              <Col lg={9}>
                <Breadcrumbs
                  items={[
                    <Link to={routeRoutes.home}>{t("Home")}</Link>,
                    <Text size="12">{t("Cart.YourCart")}</Text>,
                  ]}
                />

                <div className="module-wrapper">
                  <Title level={4}>{t<string>("Cart.YourCart")}</Title>
                  <div className="products-container">
                    {cart.value?.items.map((item: CartItem) => (
                      <CheckoutCard
                        key={item.id}
                        mobile={isMobile}
                        img={{
                          src: item.product?.poster_url || Placeholder,
                          alt: item.product?.name || "",
                        }}
                        title={item.product?.name}
                        // subtitle="5 lekcji"
                        price={`${formatPrice(
                          item.product?.price,
                          item.product?.tax_rate
                        )} zł`}
                        oldPrice={
                          item.product?.price_old
                            ? `${formatPrice(
                                item.product?.price_old,
                                item.product?.tax_rate
                              )} zł`
                            : undefined
                        }
                        handleDelete={() =>
                          removeFromCart(Number(item.product?.id))
                        }
                      />
                    ))}
                  </div>
                </div>
                <div className="module-wrapper">
                  <Title level={4}>
                    {t<string>("Cart.ChoosePaymentMethod")}
                  </Title>
                  <div className="payments-form">
                    <div className="collapse-wrapper">
                      <Collapse active title={t<string>("Cart.CreditCard")}>
                        <PaymentForm
                          setBillingDetails={setBillingDetails}
                          billingDetails={billingDetails}
                        />
                      </Collapse>
                    </div>

                    {isTestKey && (
                      <div className="card-info">
                        <Text size="14">
                          {t("Cart.UseTestCard")}:{" "}
                          <ComponentLink
                            href="https://docs.wellms.io/getting-started/demo.html"
                            target="_blank"
                            rel="noreferrer nofollow"
                          >
                            {t("Cart.LearnMore")}
                          </ComponentLink>
                        </Text>
                      </div>
                    )}
                  </div>
                </div>
                <section className="slider-section">
                  <Title level={4}>{t<string>("Cart.Interest")}</Title>
                  {courses && courses.list && (
                    <CoursesSlider courses={courses.list.data} />
                  )}
                </section>
              </Col>
              <Col lg={3}>
                <Title style={{ marginBottom: 20 }} level={4} as="h3">
                  {t<string>("Cart.Summary")}
                </Title>
                <div className="summary-box-wrapper">
                  <CartCard
                    mobile={isMobile}
                    onBuyClick={() => handleSubmit()}
                    id={1}
                    title={`${formatPrice(
                      Number(cart.value?.total_with_tax || 0)
                    )} zł`}
                    discount={{
                      onDiscountClick: (discountValue) =>
                        realizeVoucher(discountValue)
                          .then((response) => {
                            if (response.success) {
                              setDiscountStatus("granted");
                              fetchCart();
                            } else {
                              setDiscountStatus("error");
                            }
                          })
                          .catch(() => {
                            setDiscountStatus("error");
                          }),
                      onDeleteDiscountClick: () => console.log("clicked"),
                      status: discountStatus,
                    }}
                  />
                </div>
              </Col>
            </Row>
          ) : (
            <>
              <div className="empty-cart">
                <Title level={3}>{t<string>("Cart.EmptyCartTitle")}</Title>
                <Text>{t<string>("Cart.EmptyCartText")}</Text>
                <Button
                  mode="secondary"
                  onClick={() => push(routeRoutes.courses)}
                >
                  {t<string>("Cart.EmptyCartBtnText")}
                </Button>
              </div>
              <section className="slider-section">
                <Title level={4}>{t<string>("Cart.Interest")}</Title>
                {courses && courses.list && (
                  <CoursesSlider courses={courses.list.data} />
                )}
              </section>
            </>
          )}
        </Container>
        {(cart.loading || processing) && <Preloader />}
      </CartPageStyled>
    </Layout>
  );
};

export default StripeContent;
