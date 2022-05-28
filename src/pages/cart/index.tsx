import React, { useContext, useEffect, useCallback, useState } from "react";

import { Link, useHistory, useLocation } from "react-router-dom";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { useTranslation } from "react-i18next";
import { loadStripe } from "@stripe/stripe-js";
import Layout from "@/components/_App/Layout";
// import { API } from '@escolalms/sdk/lib';
import "./index.scss";
import styled from "styled-components";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { CheckoutCard } from "@escolalms/components/lib/components/molecules/CheckoutCard/CheckoutCard";
import { IconText } from "@escolalms/components/lib/components/atoms/IconText/IconText";
import { Input } from "@escolalms/components/lib/components/atoms/Input/Input";
import { Slider } from "@escolalms/components/lib/components/atoms/Slider/Slider";
import { CartCard } from "@escolalms/components/lib/components/molecules/CartCard/CartCard";
import { CourseCard } from "@escolalms/components/lib/components/molecules/CourseCard/CourseCard";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { Checkbox } from "@escolalms/components/lib/components/atoms/Option/Checkbox";
import { CartItem, Tag } from "@escolalms/sdk/lib/types/api";
import { IconBadge, IconStar, IconThumbsUp } from "../../icons";
import { isMobile } from "react-device-detect";
import Preloader from "@/components/Preloader";
import Collapse from "@/components/Collapse";

const stripePromise = (publishable_key: string) => loadStripe(publishable_key);

const CartPageStyled = styled.section`
  .module-wrapper {
    margin-bottom: 55px;
    h4 {
      margin-bottom: 20px;
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
    top: 60px;
    @media (max-width: 991px) {
      position: fixed;
      top: unset;
      bottom: 0;
      z-index: 10;
      width: 100%;
      left: 0;
    }
  }
`;

const SliderWrapper = styled.div`
  margin-top: 20px;
  @media (max-width: 575px) {
    margin-left: -50px;
    img {
      max-height: 180px;
    }
  }
  .single-slide {
    max-width: calc(100% - 20px);
  }
  .slick-dots {
    top: -65px;
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

const ThankYouPage = () => {
  return (
    <Layout>
      <ThankYouPageStyled>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9">
              <Title className="thank-you-title" level={3}>
                Gratulacje! <br />
                Od teraz posiadasz pełny dostęp do kursu:
              </Title>
              <Title level={4} className="course-name">
                Księgowość dla początkujących
              </Title>
              <Text className="email-info">
                Aby rozpocząć zaloguj się na podany adres e-mail lub kliknij w
                poniższy przycisk
              </Text>
              <Button block>Rozpocznij kurs</Button>
              <Text className="small-text">
                Zapraszamy do dalszych zakupów w platformie Wellms
              </Text>
            </div>
          </div>
        </div>
      </ThankYouPageStyled>
    </Layout>
  );
};

const CartPage = () => {
  const {
    user,
    cart,
    fetchCart,
    config,
    removeFromCart,
    payWithStripe,
    fetchProgress,
    fetchCourses,
    courses,
    realizeVoucher,
  } = useContext(EscolaLMSContext);
  const { t } = useTranslation();
  const { location, push } = useHistory();
  // const location = useLocation()
  const [dots, setDots] = useState(true);
  const [discountStatus, setDiscountStatus] = useState<
    "granted" | "error" | undefined
  >(
    //@ts-ignore TODO: add additional_discount type to SDK types
    cart.value.additional_discount > 0 ? "granted" : undefined
  );
  const stripeConfigs: any = config?.escolalms_payments?.drivers;
  const stripeKey = stripeConfigs.stripe.publishable_key;
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
      push("/authentication");
    } else {
      fetchCourses({ per_page: 6 });
      fetchCart();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, user]);

  const priceLiteral = useCallback(
    (course) => {
      return course.base_price === 0
        ? t("FREE")
        : `${config?.escolalms_payments?.default_currency} ${(
            course.base_price / 100
          ).toFixed(2)}`;
    },
    [t, config]
  );

  const onPay = useCallback((paymentMethodId) => {
    payWithStripe(paymentMethodId).then(() => {
      push("/user/my-courses");
      fetchCart();
      fetchProgress();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (cart.loading) {
    return <Preloader />;
  }

  //TODO: Find better way to handle it
  if (location.search === "?status=success") {
    return <ThankYouPage />;
  }

  return (
    <Layout>
      <CartPageStyled>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="module-wrapper">
                <Title level={4}>Twój koszyk</Title>
                <div className="products-container">
                  {cart.value?.items.length === 0 ? (
                    <p>Twoj koszyk jest pusty</p>
                  ) : (
                    cart.value?.items.map((item: CartItem) => (
                      <CheckoutCard
                        key={item.id}
                        mobile={isMobile}
                        img={{
                          src: item.product?.poster_url,
                          alt: item.product?.name,
                          title: item.product?.name,
                        }}
                        title={item.product?.name}
                        subtitle="5 lekcji"
                        price={`${String(item.product?.price)} zł`}
                        oldPrice={`${String(item.product?.price_old || "")}`}
                        handleDelete={() =>
                          removeFromCart(Number(item.product?.id))
                        }
                        summary={[
                          <IconText
                            icon={<IconThumbsUp />}
                            text={"90%"}
                            noMargin
                          />,
                          <IconText
                            icon={<IconBadge />}
                            text={"Gwarancja"}
                            noMargin
                          />,
                          <IconText
                            icon={<IconStar />}
                            text={"5.0"}
                            noMargin
                          />,
                        ]}
                      />
                    ))
                  )}
                </div>
              </div>
              <div className="module-wrapper">
                <Title level={4}>Wybierz formę płatności</Title>
                <div className="payments-form">
                  <div className="collapse-wrapper">
                    <Collapse title="Karta debetowa/kredytowa">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-wrapper">
                            <Input label="Imię Nazwisko" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-wrapper">
                            <Input label="Numer karty" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-wrapper">
                            <Input label="Data ważności" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-wrapper">
                            <Input label="Kod CVC/CCV" type="text" />
                          </div>
                        </div>
                      </div>
                      <Checkbox
                        name="rememberCreditCard"
                        label="Zapamiętaj tę kartę"
                        onChange={() => console.log("clicked")}
                      />
                    </Collapse>
                  </div>
                  <div className="collapse-wrapper">
                    <Collapse title="Szybki przelew online - DotPay">
                      Szybki przelew
                    </Collapse>
                  </div>
                  <div className="collapse-wrapper">
                    <Collapse title="PayPal">PayPal</Collapse>
                  </div>
                </div>
              </div>
              <section className="slider-section">
                <Title level={4}>Może Cię zainteresuje</Title>
                <SliderWrapper>
                  <Slider
                    settings={{ ...sliderSettings, dots }}
                    dotsPosition="top right"
                  >
                    {courses.list?.data.map((item) => (
                      <div key={item.id} className="single-slide">
                        <CourseCard
                          id={item.id}
                          title={item.title}
                          categories={{
                            categoryElements: item.categories || [],
                            onCategoryClick: () => console.log("clicked"),
                          }}
                          lessonCount={5}
                          hideImage={false}
                          subtitle={
                            <Text>
                              <strong style={{ fontSize: 14 }}>
                                100% Online
                              </strong>
                            </Text>
                          }
                          image={{
                            url: item.image_url,
                            alt: "",
                          }}
                          tags={item.tags as Tag[]}
                          onButtonClick={() => console.log("clicked")}
                        />
                      </div>
                    ))}
                  </Slider>
                </SliderWrapper>
              </section>
            </div>
            <div className="col-lg-3">
              <Title level={4}>Podsumowanie</Title>
              <div className="summary-box-wrapper">
                <CartCard
                  id={1}
                  title={`${String(cart.value?.total)} zł`}
                  description={
                    <Text style={{ fontSize: 12, margin: 0 }}>
                      Guaranteed 30 days for return
                    </Text>
                  }
                  onBuyClick={() => console.log("clicked")}
                  discount={{
                    onDiscountClick: () =>
                      realizeVoucher("").then((response) => {
                        if (response.success) {
                          setDiscountStatus("granted");
                          fetchCart();
                        } else {
                          setDiscountStatus("error");
                        }
                      }),
                    onDeleteDiscountClick: () => console.log("clicked"),
                    status: discountStatus,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </CartPageStyled>
    </Layout>
  );
};

export default CartPage;
