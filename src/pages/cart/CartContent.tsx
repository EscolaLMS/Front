import { useContext, useEffect, useCallback, useState } from "react";

import { Link, useHistory } from "react-router-dom";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { useTranslation } from "react-i18next";
import Layout from "@/components/_App/Layout";
import styled, { css } from "styled-components";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { CheckoutCard } from "@escolalms/components/lib/components/molecules/CheckoutCard/CheckoutCard";
import { CartCard } from "@escolalms/components/lib/components/molecules/CartCard/CartCard";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { Checkbox } from "@escolalms/components/lib/components/atoms/Option/Checkbox";
import { CartItem } from "@escolalms/sdk/lib/types/api";
import { isMobile } from "react-device-detect";
import Preloader from "@/components/Preloader";
import Collapse from "@/components/Collapse";
import PaymentForm from "@/components/PaymentForm";
import { toast } from "react-toastify";
import {
  useStripe,
  useElements,
  CardNumberElement,
} from "@stripe/react-stripe-js";
import CoursesSlider from "@/components/CoursesSlider";
import Breadcrumbs from "@/components/Breadcrumbs";

const CartPageStyled = styled.section`
  .module-wrapper {
    margin-bottom: 55px;
    @media (max-width: 991px) {
      margin-bottom: 33px;
    }
    h4 {
      margin-bottom: 20px;
      @media (max-width: 991px) {
        text-align: center;
      }
    }
  }
  .products-container {
    row-gap: 20px;
  }
  .payments-form {
    .collapse-wrapper {
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
    .input-wrapper {
      margin-bottom: 30px;
    }
  }
  .slider-section {
    margin-top: 110px;
  }
  .summary-box-wrapper {
    position: sticky;
    top: 100px;
    ${isMobile &&
    css`
      position: fixed;
      top: unset;
      bottom: 0;
      z-index: 10;
      width: 100%;
      left: 0;
      z-index: 99999;
    `}
    .discount-form-container {
      input {
        background: ${({ theme }) => theme.white};
      }
    }
  }
  .empty-cart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 192px 20px;
    text-align: center;
    background-color: ${({ theme }) =>
      theme.mode === "light" ? theme.gray5 : theme.gray1};
    row-gap: 20px;

    p {
      font-size: 14px;
    }

    @media (max-width: 768px) {
      padding: 80px 20px;
    }
  }
  .slider-section {
    h4 {
      @media (max-width: 575px) {
        padding-right: 45%;
      }
    }
  }
`;

const ThankYouPageStyled = styled.section`
  text-align: center;
  .thank-you-title {
    font-weight: 700;
    font-size: 28px;
  }
  .course-name {
    position: relative;
    display: inline-block;
    font-weight: 700;
    margin: 25px 0 55px;
    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 100%;
      height: 2px;
      background-color: ${({ theme }) => theme.primaryColor};
    }
  }
  button {
    max-width: 440px;
    margin: 0 auto;
  }
  .small-text {
    margin-top: 20px;
    font-size: 12px;
  }
`;

// const ThankYouPage = () => {
//   return (
//     <Layout>
//       <ThankYouPageStyled>
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-md-9">
//               <Title className="thank-you-title" level={3}>
//                 Gratulacje! <br />
//                 Od teraz posiadasz pełny dostęp do kursu:
//               </Title>
//               <Title level={4} className="course-name">
//                 Księgowość dla początkujących
//               </Title>
//               <Text className="email-info">
//                 Aby rozpocząć zaloguj się na podany adres e-mail lub kliknij w
//                 poniższy przycisk
//               </Text>
//               <Button block>Rozpocznij kurs</Button>
//               <Text className="small-text">
//                 Zapraszamy do dalszych zakupów w platformie Wellms
//               </Text>
//             </div>
//           </div>
//         </div>
//       </ThankYouPageStyled>
//     </Layout>
//   );
// };

const CartContent = () => {
  const {
    user,
    cart,
    fetchCart,
    removeFromCart,
    payWithStripe,
    fetchProgress,
    fetchCourses,
    courses,
    realizeVoucher,
  } = useContext(EscolaLMSContext);
  const { t } = useTranslation();
  const { push } = useHistory();
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  // const options = useOptions();
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
  const sliderSettings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  useEffect(() => {
    if (!user.loading && !user.value) {
      push("/login");
    } else {
      fetchCourses({ per_page: 6 });
      fetchCart();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPay = useCallback((paymentMethodId: string) => {
    setProcessing(true);
    payWithStripe(
      paymentMethodId,
      "https://demo-stage.escolalms.com/#/user/my-profile"
    )
      .then(() => {
        setProcessing(false);
        push("/user/my-profile");
        fetchCart();
        fetchProgress();
      })
      .catch(() => {
        toast.error(t("UnexpectedError"));
        setProcessing(false);
      })
      .finally(() => setProcessing(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSubmit = (): void => {
    if (!billingDetails.name) {
      toast.error(t("Cart.EmptyNameWarning"));
      return;
    }

    if (!stripe || !elements) {
      toast.error(t("UnexpectedError"));
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
            toast.error(res.error.message);
            console.log(res.error);
          } else {
            onPay(res?.paymentMethod?.id);
            setTimeout(() => {
              setProcessing(false);
            }, 3000);
          }
        })
        .catch((error) => {
          setProcessing(false);
          toast.error(t("UnexpectedError"));
        });
  };

  // if (location.search === "?status=success") {
  //   return <ThankYouPage />;
  // }
  return (
    <Layout metaTitle={t("Cart.Cart")}>
      <CartPageStyled>
        <div className="container">
          {!(cart.value?.items.length === 0) ? (
            <div className="row">
              <div className="col-lg-9">
                <Breadcrumbs
                  items={[
                    <Link to="/">{t("Home")}</Link>,
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
                          src: item.product?.poster_url || "",
                          alt: item.product?.name || "",
                        }}
                        title={item.product?.name}
                        // subtitle="5 lekcji"
                        price={`${String(item.product?.price)} zł`}
                        oldPrice={`${String(item.product?.price_old || "")}`}
                        handleDelete={() =>
                          removeFromCart(Number(item.product?.id))
                        }
                        summary={
                          [
                            // summary={[
                            //   <IconText
                            //     icon={<IconThumbsUp />}
                            //     text={"90%"}
                            //     noMargin
                            //   />,
                            //   <IconText
                            //     icon={<IconBadge />}
                            //     text={"Gwarancja"}
                            //     noMargin
                            //   />,
                            //   <IconText
                            //     icon={<IconStar />}
                            //     text={"5.0"}
                            //     noMargin
                            //   />,
                            // ]}
                          ]
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

                        <Checkbox
                          name="rememberCreditCard"
                          label={t<string>("Cart.RememberCard")}
                          onChange={() => console.log("clicked")}
                        />
                      </Collapse>
                    </div>
                    {/* <div className="collapse-wrapper">
                      <Collapse
                        onClick={() => setActivePaymentMethod(2)}
                        active={activePaymentMethod === 2}
                        title="Szybki przelew online - DotPay"
                      >
                        Szybki przelew
                      </Collapse>
                    </div>
                    <div className="collapse-wrapper">
                      <Collapse
                        onClick={() => setActivePaymentMethod(3)}
                        active={activePaymentMethod === 3}
                        title="PayPal"
                      >
                        PayPal
                      </Collapse>
                    </div> */}
                  </div>
                </div>
                <section className="slider-section">
                  <Title level={4}>{t<string>("Cart.Interest")}</Title>
                  {courses && courses.list && (
                    <CoursesSlider
                      courses={courses.list.data}
                      sliderSettings={sliderSettings}
                    />
                  )}
                </section>
              </div>
              <div className="col-lg-3">
                <Title style={{ marginBottom: 20 }} level={4}>
                  {t<string>("Cart.Summary")}
                </Title>
                <div className="summary-box-wrapper">
                  <CartCard
                    mobile={isMobile}
                    onBuyClick={() => handleSubmit()}
                    id={1}
                    title={`${String(cart.value?.total)} zł`}
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
                          .catch((err) => {
                            setDiscountStatus("error");
                          }),
                      onDeleteDiscountClick: () => console.log("clicked"),
                      status: discountStatus,
                    }}
                  />
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="empty-cart">
                <Title level={3}>{t<string>("Cart.EmptyCartTitle")}</Title>
                <Text>{t<string>("Cart.EmptyCartText")}</Text>
                <Button
                  mode="secondary"
                  onClick={() => history.push("/courses")}
                >
                  {t<string>("Cart.EmptyCartBtnText")}
                </Button>
              </div>
              <section className="slider-section">
                <Title level={4}>{t<string>("Cart.Interest")}</Title>
                {courses && courses.list && (
                  <CoursesSlider
                    courses={courses.list.data}
                    sliderSettings={sliderSettings}
                  />
                )}
              </section>
            </>
          )}
        </div>
        {(cart.loading || processing) && <Preloader />}
      </CartPageStyled>
    </Layout>
  );
};

export default CartContent;
