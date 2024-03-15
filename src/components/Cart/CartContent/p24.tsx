import { useContext, useEffect, useCallback, useState } from "react";

import { Link, useHistory } from "react-router-dom";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { useTranslation } from "react-i18next";
import Layout from "@/components/_App/Layout";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { CheckoutCard } from "@escolalms/components/lib/components/molecules/CheckoutCard/CheckoutCard";
import { CartCard } from "@escolalms/components/lib/components/molecules/CartCard/CartCard";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";

import { CartItem } from "@escolalms/sdk/lib/types/api";
import { isMobile } from "react-device-detect";
import Preloader from "@/components/_App/Preloader";
import Collapse from "@/components/Common/Collapse";
import PaymentForm from "@/components/PaymentForm";
import { toast } from "react-toastify";

import CoursesSlider from "@/components/Courses/CoursesSlider";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import Placeholder from "../../../images/image.svg";
import { Col, Row } from "react-grid-system";
import Container from "@/components/Common/Container";
import { formatPrice } from "@/utils/index";
import CartSuccess from "@/components/Cart/CartSuccess";
import routeRoutes from "@/components/Routes/routes";
import { CartPageStyled } from "@/components/Cart/CartContent/styles";
import DisplayCourses from "@/components/Courses/DisplayCoursesSlider";

const Przelewy24Content = () => {
  const {
    user,
    cart,
    fetchCart,
    removeFromCart,
    payWithP24,
    fetchCourses,
    courses,
    realizeVoucher,
  } = useContext(EscolaLMSContext);
  const { t } = useTranslation();
  const { push, location } = useHistory();

  const [processing, setProcessing] = useState(false);
  const [billingDetails, setBillingDetails] = useState<{ name: string }>({
    name: "",
  });
  const [discountStatus, setDiscountStatus] = useState<
    "granted" | "error" | undefined
  >(
    //@ts-ignore TODO: add additional_discount type to SDK types
    cart.value.additional_discount > 0 ? "granted" : undefined
  );
  console.log("cart", cart);
  useEffect(() => {
    if (!user.loading && !user.value) {
      push(routeRoutes.login);
    } else {
      fetchCourses({ per_page: 6 });
      fetchCart();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPay = useCallback((paymentMethodId: string) => {
    setProcessing(true);
    payWithP24(
      paymentMethodId,
      "https://demo-stage.escolalms.com/#/user/my-profile"
    )
      .then(() => {
        setProcessing(false);
        push("/cart?status=success");
      })
      .catch(() => {
        toast.error(`${t("UnexpectedError")}`);
        setProcessing(false);
      })
      .finally(() => setProcessing(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSubmit = (): void => {
    if (!billingDetails.name) {
      toast.error(`${t("Cart.EmptyNameWarning")}`);
      return;
    }

    // const cardNumber = elements.getElement(CardNumberElement);
    // cardNumber && setProcessing(true);
    // cardNumber &&
    //   stripe
    //     .createPaymentMethod({
    //       type: "card",
    //       card: cardNumber,
    //       billing_details: billingDetails,
    //     })
    //     .then((res) => {
    //       if (res.error) {
    //         setProcessing(false);
    //         toast.error(res.error.message);
    //         console.log(res.error);
    //       } else {
    //         onPay(res?.paymentMethod?.id);
    //         setTimeout(() => {
    //           setProcessing(false);
    //         }, 3000);
    //       }
    //     })
    //     .catch(() => {
    //       setProcessing(false);
    //       toast.error(`${t("UnexpectedError")}`);
    //     });
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
                <div className="module-wrapper">
                  <Title style={{ marginBottom: 20 }} level={2} as="h3">
                    {t<string>("Cart.YourCart")}
                  </Title>
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
                        // categories={
                        //   <CategoriesBreadCrumbs
                        //     categories={item.product?.categories || []}
                        //     onCategoryClick={(id) => {
                        //       push(`/courses/?categories[]=${id}`);
                        //     }}
                        //   />
                        // }
                        handleDelete={() =>
                          removeFromCart(Number(item.product?.id))
                        }
                      />
                    ))}
                  </div>
                </div>
                {/* <div className="module-wrapper">
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
                  </div>
                </div> */}
                <section className="slider-section">
                  <DisplayCourses
                    titleText={t<string>("Cart.Interest")}
                    slidesPerView={3}
                    params={{
                      per_page: 8,
                    }}
                  />
                </section>
              </Col>
              <Col lg={3}>
                <Title style={{ marginBottom: 20 }} level={2} as="h3">
                  {t<string>("Cart.Summary")}
                </Title>
                <div className="summary-box-wrapper">
                  <CartCard
                    mobile={isMobile}
                    onBuyClick={() => handleSubmit()}
                    id={1}
                    // TODO: translate this
                    disclaimer="Składając zamówienie na MaxRoy.edu, akceptujesz Postanowienia Polityki
                    Prywatności, Regulamin oraz zasady odstąpienia od umowy. Potwierdzasz
                    także, że ten zakup jest przeznaczony wyłącznie do użytku osobistego."
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

export default Przelewy24Content;
