import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { IconText } from "@escolalms/components/lib/components/atoms/IconText/IconText";
import { CategoryCard } from "@escolalms/components/lib/components/molecules/CategoryCard/CategoryCard";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { IconSquares } from "../../../icons";
import { useHistory } from "react-router-dom";
import { API } from "@escolalms/sdk/lib";

import Container from "../../Common/Container";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
  categories: API.Category[];
};

const StyledSection = styled.section`
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 30px 0;
  }
  h2 {
    margin-bottom: 27px;
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

    @media (max-width: 991px) {
      margin: 0 auto;
      min-width: 300px;
    }
  }
  .category-card-icon {
    img {
      margin: 0 auto;
      display: block;
      max-height: 70px;
    }
  }
`;

const CategoryRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  grid-gap: 10px;
`;

const CategoriesSection: React.FC<Props> = ({ categories }) => {
  const { t } = useTranslation();
  const history = useHistory();

  const filteredCategories = categories.filter(
    (category) => category.count && category.count > 0
  );
  return (
    <StyledSection>
      <Container>
        <Title level={1} as="h2">
          <strong>{t<string>("Homepage.CategoriesTitle")}</strong>
        </Title>
        {isMobile ? (
          <div className="categories-slider">
            <Swiper
              spaceBetween={18}
              slidesOffsetAfter={18}
              breakpoints={{
                0: {
                  slidesPerView: 1.3,
                },
                576: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1201: {
                  slidesPerView: 4,
                },
              }}
            >
              {filteredCategories.slice(-5).map((item) => (
                <SwiperSlide key={item.id}>
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
                      history.push(`/courses/?categories[]=${item.id}`)
                    }
                    variant="gradient"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <CategoryRow>
            {filteredCategories.slice(-5).map((item) => (
              <div className="category-item" key={item.id}>
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
                    history.push(`/courses/?categories[]=${item.id}`)
                  }
                  variant="gradient"
                />
              </div>
            ))}
          </CategoryRow>
        )}
      </Container>
    </StyledSection>
  );
};

export default CategoriesSection;
