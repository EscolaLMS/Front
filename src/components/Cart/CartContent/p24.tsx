import { useCallback, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Layout from "@/components/_App/Layout";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { CheckoutCard } from "@escolalms/components/lib/components/molecules/CheckoutCard/CheckoutCard";
import { CartCard } from "@escolalms/components/lib/components/molecules/CartCard/CartCard";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { CartItem, InvoiceData } from "@escolalms/sdk/lib/types/api";
import { isMobile } from "react-device-detect";
import Preloader from "@/components/_App/Preloader";
import Collapse from "@/components/Common/Collapse";
import CoursesSlider from "@/components/Courses/CoursesSlider";
import Placeholder from "../../../images/image.svg";
import { Col, Row } from "react-grid-system";
import Container from "@/components/Common/Container";
import { formatPrice } from "@/utils/index";
import CartSuccess from "@/components/Cart/CartSuccess";
import routeRoutes from "@/components/Routes/routes";
import { CartPageStyled } from "@/components/Cart/CartContent/styles";
import DisplayCourses from "@/components/Courses/DisplayCoursesSlider";
import { FormikProps } from "formik";
import BillingForm from "@/components/Cart/BillingForm";
import usePayment from "@/hooks/usePayment";

const Przelewy24Content = () => {
  const {
    user,
    processing,
    discountStatus,
    fetchCart,
    payByP24,
    removeFromCart,
    courses,
    cart,
    location,
    realizeVoucher,
    setDiscountStatus,
    push,
  } = usePayment();

  const [showBilling, setShowBilling] = useState(false);
  const { t } = useTranslation();

  const formikRef = useRef<FormikProps<InvoiceData>>(null);

  const handleSubmit = useCallback(() => {
    formikRef.current?.submitForm();
    const formValues = formikRef.current?.values;

    if (
      showBilling &&
      formValues &&
      Object.values(formValues).every((value) => value !== "")
    ) {
      payByP24(formValues);
      return;
    }

    if (!showBilling) {
      payByP24();
      return;
    }
  }, [formikRef, payByP24, showBilling]);

  return (
    <Layout metaTitle={t("Cart.Cart")}>
      {location.search.includes("?status=success") ? (
        <CartPageStyled $isMobile={isMobile}>
          <div className="module-wrapper">
            <CartSuccess />
          </div>
        </CartPageStyled>
      ) : (
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
                          handleDelete={() =>
                            removeFromCart(Number(item.product?.id))
                          }
                        />
                      ))}
                    </div>
                  </div>
                  <div className="module-wrapper billing-info">
                    <Title level={4}>{t("InvoiceData.BillingDetails")}</Title>
                    <div className="billing-form">
                      <div className="billing-form__mydata">
                        <Text size="13">
                          {t("Cart.FullName")}: <span>{user.value?.name}</span>
                        </Text>

                        <Text size="13">
                          {t("InvoiceData.ClientEmail")}:{" "}
                          <span>{user.value?.email}</span>
                        </Text>
                      </div>
                      <div className="collapse-wrapper">
                        <Collapse
                          active={showBilling}
                          title={t("Cart.IWantInvoice")}
                          onClick={() => setShowBilling(!showBilling)}
                        >
                          <BillingForm
                            // @ts-ignore
                            formikRef={
                              formikRef as React.RefObject<
                                FormikProps<InvoiceData>
                              >
                            }
                          />
                        </Collapse>
                      </div>
                    </div>
                  </div>
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
                      // TODO: translate this it will be in new version in components
                      disclaimer={`Składając zamówienie na EduMamy.pl, akceptujesz Postanowienia Polityki
                    Prywatności, Regulamin oraz zasady odstąpienia od umowy. Potwierdzasz
                    także, że ten zakup jest przeznaczony wyłącznie do użytku osobistego.`}
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
      )}
    </Layout>
  );
};

export default Przelewy24Content;
