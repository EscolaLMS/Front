import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { IconText } from "@escolalms/components/lib/components/atoms/IconText/IconText";
import { Slider } from "@escolalms/components/lib/components/atoms/Slider/Slider";
import { CategoryCard } from "@escolalms/components/lib/components/molecules/CategoryCard/CategoryCard";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import styled from "styled-components";
import { IconSquares } from "../../icons";
import { useHistory } from "react-router-dom";
import { API } from "@escolalms/sdk/lib";
import { Col, Container, Row } from "react-grid-system";
import { Settings } from "react-slick";

type Props = {
  categories: API.Category[];
};

const StyledSection = styled.section`
  overflow: hidden;
  padding: 60px 0 0;
  @media (max-width: 768px) {
    padding: 30px 0;
  }
  h3 {
    text-align: center;
    margin-bottom: 30px;
  }
  .slider-title {
    @media (max-width: 575px) {
      padding-right: 45%;
    }
  }
  .categories-slider {
    .slick-dots {
      bottom: 40px;
    }
  }
  .slick-track {
    display: flex;
    gap: 0 20px;
  }
  .slick-slide {
    @media (max-width: 991px) {
      display: flex !important;
      justify-content: center;
    }
  }
  .single-category-slide {
    margin: 0 8px;
    .category-card-icon {
      img {
        margin: 0 auto;
        display: block;
      }
    }
    @media (max-width: 991px) {
      margin: 0 auto;
      min-width: 300px;
    }
  }
`;

const CategoriesSection: React.FC<Props> = ({ categories }) => {
  const [dots] = useState(true);
  const { t } = useTranslation();
  const history = useHistory();
  const categoriesSliderSettings: Settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const filteredCategories = categories.filter(
    (category) => category.count && category.count > 0
  );
  return (
    <StyledSection>
      <Container>
        <Title level={3}>
          <strong>{t<string>("Homepage.CategoriesTitle")}</strong>
        </Title>
        {isMobile ? (
          <div className="categories-slider">
            <Slider
              settings={{ ...categoriesSliderSettings, dots }}
              dotsPosition="bottom"
            >
              {filteredCategories.slice(-4).map((item) => (
                <div className="single-category-slide" key={item.id}>
                  <CategoryCard
                    icon={<img src={item.icon} alt={item.name} />}
                    title={item.name}
                    buttonText={t("Homepage.CategoryBtnText")}
                    subtitle={
                      <IconText
                        icon={<IconSquares />}
                        text={`${t("CoursesLength", {
                          count: item.count,
                        })}`}
                      />
                    }
                    onButtonClick={() =>
                      history.push(`/courses/?category_id[]=${item.id}`)
                    }
                    variant="gradient"
                  />
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <Row>
            {filteredCategories.slice(-4).map((item) => (
              <Col md={3} key={item.id}>
                <CategoryCard
                  icon={<img src={item.icon} alt={item.name} />}
                  title={item.name}
                  buttonText={t("Homepage.CategoryBtnText")}
                  subtitle={
                    <IconText
                      icon={<IconSquares />}
                      text={`${t("CoursesLength", {
                        count: item.count,
                      })}`}
                    />
                  }
                  onButtonClick={() =>
                    history.push(`/courses/?category_id[]=${item.id}`)
                  }
                  variant="gradient"
                />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </StyledSection>
  );
};

export default CategoriesSection;
