import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import CoursesSlider from "../CoursesSlider";
import { CourseCardSkeleton } from "@escolalms/components/lib/components/skeletons/CourseCard/CourseCard";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import useFetchCourses from "@/hooks/useFetchCourses";
import { Swiper, SwiperSlide } from "swiper/react";
import { useHistory } from "react-router-dom";
import routeRoutes from "@/components/Routes/routes";
import { useTranslation } from "react-i18next";
import { CourseParams } from "@escolalms/sdk/lib/types/api";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
`;

type Props = {
  titleText: string;
  params: CourseParams;
  isSlider?: boolean;
  ctaButton?: boolean;
  slidesPerView?: number;
};

const DisplayCourses: React.FC<Props> = ({
  titleText,
  params,
  isSlider = true,
  ctaButton,
  slidesPerView = 4,
}) => {
  const { courses, loading } = useFetchCourses(params);
  const history = useHistory();
  const { t } = useTranslation();

  return (
    <Wrapper>
      <div className="header-wrapper">
        <Title className="slider-title" level={1} as="h2">
          <strong>{titleText}</strong>
        </Title>
        {ctaButton && (
          <Button
            mode="outline"
            onClick={() => history.push(routeRoutes.courses)}
          >
            {t<string>("Homepage.AwardedCoursesBtnText")}
          </Button>
        )}
      </div>

      {loading && (
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
              slidesPerView: slidesPerView,
            },
          }}
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <SwiperSlide key={index}>
              <CourseCardSkeleton />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {!loading && courses && (
        <CoursesSlider
          courses={courses.data}
          isSlider={isSlider}
          slidesPerView={slidesPerView}
        />
      )}
    </Wrapper>
  );
};

export default DisplayCourses;
