import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import CoursesSlider from "../CoursesSlider";

import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import useFetchCourses from "@/hooks/courses/useFetchCourses";
import { SwiperSlide } from "swiper/react";
import { useHistory } from "react-router-dom";
import routeRoutes from "@/components/Routes/routes";
import { useTranslation } from "react-i18next";
import { CourseParams } from "@escolalms/sdk/lib/types/api";
import styled from "styled-components";
import SwiperSlider from "@/components/Courses/CoursesSlider/swiper";
import { CourseCardSkeleton } from "@/components/Skeletons/CourseCard";

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
        <SwiperSlider slidesPerView={slidesPerView}>
          {Array.from({ length: 6 }).map((_, index) => (
            <SwiperSlide key={index}>
              <CourseCardSkeleton />
            </SwiperSlide>
          ))}
        </SwiperSlider>
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
