import { useTranslation } from "react-i18next";
import { Col, Row } from "react-grid-system";
import Container from "@/components/Container";
import DisplayCourses from "@/components/DisplayCourses";
import { Product } from "@escolalms/sdk/lib/types/api";
import SwiperSlider from "@/components/CoursesSlider/swiper";
import { SwiperSlide } from "swiper/react";
import { NewCourseCard, Title } from "@escolalms/components/lib/index";
import { isMobile } from "react-device-detect";
import CourseImgPlaceholder from "@/components/CourseImgPlaceholder";
import ResponsiveImage from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import { Link } from "react-router-dom";
import ProductPrices from "@/components/ProductPrices";
import styled from "styled-components";

const SectionWrapper = styled.section`
  position: relative;
  margin-top: 100px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
  .content-container {
    h2 {
      margin-bottom: 20px;
    }
    .swiper {
      padding: 7px 10px;
      margin: 0px -15px;
    }
  }
`;

type Props = {
  relatedProducts?: Product[];
};

export const CourseRelated: React.FC<Props> = ({ relatedProducts }) => {
  const { t } = useTranslation();

  return (
    <SectionWrapper className="course-related-courses">
      <Container>
        <Row>
          <Col lg={9}>
            {relatedProducts && relatedProducts?.length > 0 && (
              <div className="content-container">
                <Title level={1} as="h2">
                  {t("CoursePage.RelatedCoursesTitle")}
                </Title>
                <SwiperSlider slidesPerView={3}>
                  {relatedProducts?.map((product) => (
                    <SwiperSlide key={product.id}>
                      <NewCourseCard
                        mobile={isMobile}
                        id={product.id}
                        image={
                          // @ts-ignore TODO: missed in sdk
                          <Link to={`/courses/${product?.productables[0]?.id}`}>
                            {product.poster_path ? (
                              <ResponsiveImage
                                path={product.poster_path}
                                alt={product.name}
                                srcSizes={[300, 600, 900]}
                              />
                            ) : (
                              <CourseImgPlaceholder />
                            )}
                          </Link>
                        }
                        price={
                          // @ts-ignore TODO: missed in sdk
                          product.public ? (
                            <div className="course-price">{t("FREE")}</div>
                          ) : (
                            <ProductPrices
                              price={product?.price}
                              oldPrice={product?.price_old}
                              taxRate={product?.tax_rate}
                            />
                          )
                        }
                        title={
                          <Link to={`/courses/${product.id}`}>
                            <Title level={3} as="h3" className="title">
                              {product.name}
                            </Title>
                          </Link>
                        }
                      />
                    </SwiperSlide>
                  ))}
                </SwiperSlider>
              </div>
            )}

            <div className="content-container">
              <DisplayCourses
                titleText={t("CoursePage.InterestTitle")}
                params={{
                  per_page: 6,
                  order_by: "created_at",
                  order: "ASC",
                }}
                slidesPerView={3}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </SectionWrapper>
  );
};
