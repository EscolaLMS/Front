import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { API } from "@escolalms/sdk/lib";
import CourseImgPlaceholder from "../CourseImgPlaceholder";
import { ResponsiveImage } from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import { Col, Row } from "react-grid-system";
import CategoriesBreadCrumbs from "@/components/Categories/CategoriesBreadCrumbs";
import { NewCourseCard } from "@escolalms/components/lib/components/molecules/NewCourseCard/NewCourseCard";
import { SwiperSlide } from "swiper/react";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import ProductPrices from "@/components/ProductPrices";
import { useTranslation } from "react-i18next";
import SwiperSlider from "@/components/Courses/CoursesSlider/swiper";

type Props = {
  courses: API.Course[];
  isSlider?: boolean;
  slidesPerView?: number;
};

const Content = styled.div`
  .swiper {
    padding: 7px 10px;
    margin: 0px -15px;
  }
`;

const CoursesSlider: React.FC<Props> = ({
  courses,
  isSlider = true,
  slidesPerView = 4,
}) => {
  const history = useHistory();

  const { t } = useTranslation();
  return (
    <Content>
      {(courses?.length >= 5 || isMobile) && isSlider ? (
        <SwiperSlider slidesPerView={slidesPerView}>
          {courses &&
            courses.map((item) => (
              <SwiperSlide key={item.id}>
                <NewCourseCard
                  mobile={isMobile}
                  id={item.id}
                  image={
                    <Link to={`/courses/${item.id}`}>
                      {item.image_path ? (
                        <ResponsiveImage
                          path={item.image_path}
                          alt={item.title}
                          srcSizes={[300, 600, 900]}
                        />
                      ) : (
                        <CourseImgPlaceholder />
                      )}
                    </Link>
                  }
                  title={
                    <Link to={`/courses/${item.id}`}>
                      <Title level={3} as="h3" className="title">
                        {item.title}
                      </Title>
                    </Link>
                  }
                  price={
                    // @ts-ignore TODO: missed in sdk
                    item.public ? (
                      <div className="course-price">{t("FREE")}</div>
                    ) : (
                      <ProductPrices
                        price={item.product?.price}
                        oldPrice={item.product?.price_old}
                        taxRate={item.product?.tax_rate}
                      />
                    )
                  }
                  categories={
                    <CategoriesBreadCrumbs
                      categories={item.categories}
                      onCategoryClick={(id) => {
                        history.push(`/courses/?categories[]=${id}`);
                      }}
                    />
                  }
                />
              </SwiperSlide>
            ))}
        </SwiperSlider>
      ) : (
        <Row
          style={{
            marginTop: "15px",
            rowGap: "20px",
          }}
        >
          {(courses || []).map((item) => (
            <Col md={4} lg={3} key={item.id}>
              <NewCourseCard
                mobile={isMobile}
                id={item.id}
                key={item.id}
                image={
                  <Link to={`/courses/${item.id}`}>
                    {item.image_path ? (
                      <ResponsiveImage
                        path={item.image_path}
                        alt={item.title}
                        srcSizes={[300, 600, 900]}
                      />
                    ) : (
                      <CourseImgPlaceholder />
                    )}
                  </Link>
                }
                title={
                  <Link to={`/courses/${item.id}`}>
                    <Title level={3} as="h3" className="title">
                      {item.title}
                    </Title>
                  </Link>
                }
                price={
                  <ProductPrices
                    price={item.product?.price}
                    oldPrice={item.product?.price_old}
                    taxRate={item.product?.tax_rate}
                  />
                }
                categories={
                  <CategoriesBreadCrumbs
                    categories={item.categories}
                    onCategoryClick={(id) => {
                      history.push(`/courses/?categories[]=${id}`);
                    }}
                  />
                }
              />
            </Col>
          ))}
        </Row>
      )}
    </Content>
  );
};

export default CoursesSlider;
