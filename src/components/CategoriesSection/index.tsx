import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { IconText } from "@escolalms/components/lib/components/atoms/IconText/IconText";
import { Slider } from "@escolalms/components/lib/components/atoms/Slider/Slider";
import { CategoryCard } from "@escolalms/components/lib/components/molecules/CategoryCard/CategoryCard";
import { isMobile } from "react-device-detect";
import { t } from "i18next";
import { useState } from "react";
import styled from "styled-components";
import { IconBook, IconSquares } from "../../icons";
import { useHistory } from "react-router-dom";
import { API } from "@escolalms/sdk/lib";

type Props = {
  categories: API.Category[];
};

const StyledSection = styled.section`
  overflow: hidden;
  padding: 60px 0;
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
    margin-left: -60px;
    .slick-dots {
      margin-left: 30px;
      bottom: 40px;
    }
  }
  .single-category-slide {
    max-width: 272px;
    margin: 0 8px;
    @media (max-width: 390px) {
      max-width: 230px;
    }
    @media (max-width: 330px) {
      max-width: 200px;
    }
  }
`;

const CategoriesSection: React.FC<Props> = ({ categories }) => {
  const [dots] = useState(true);
  const history = useHistory();
  const categoriesSliderSettings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  };
  return (
    <StyledSection>
      <div className="container">
        <Title level={3}>
          <strong>{t<string>("Homepage.CategoriesTitle")}</strong>
        </Title>
        {isMobile ? (
          <div className="categories-slider">
            <Slider
              settings={{ ...categoriesSliderSettings, dots }}
              dotsPosition="bottom"
            >
              {categories.slice(-4).map((item) => (
                <div className="single-category-slide" key={item.id}>
                  <CategoryCard
                    icon={<img src={item.icon} alt={item.name} />}
                    title={item.name}
                    buttonText={t("Homepage.CategoryBtnText")}
                    subtitle={
                      <IconText
                        icon={<IconBook />}
                        text={`${item.count} ${t("CoursesLength")}`}
                      />
                    }
                    onButtonClick={() =>
                      history.push(`/courses/?ids[]=${item.id}`)
                    }
                    variant="gradient"
                  />
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <div className="row">
            {categories.slice(-4).map((item) => (
              <div className="col-md-3" key={item.id}>
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
                    history.push(`/courses/?ids[]=${item.id}`)
                  }
                  variant="gradient"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </StyledSection>
  );
};

export default CategoriesSection;
