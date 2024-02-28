import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SwiperSlider from "@/components/Courses/CoursesSlider/swiper";
import { CourseCardSkeleton } from "@/components/Skeletons/CourseCard";
import useProfileCourses from "@/hooks/courses/useProfileCourses";
import { NewCourseCard } from "@escolalms/components";
import { isMobile } from "react-device-detect";
import { ResponsiveImage } from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import CourseImgPlaceholder from "@/components/Courses/CourseImgPlaceholder";

const Wrapper = styled.div`
  position: relative;
`;

type Props = {
  titleText: string;
  slidesPerView?: number;
};

const CoursesUserSlider: React.FC<Props> = ({
  titleText,
  slidesPerView = 4,
}) => {
  const { coursesToMap, loading } = useProfileCourses();

  console.log(coursesToMap, loading);

  return (
    <Wrapper>
      <div className="header-wrapper">
        <Title className="slider-title" level={1} as="h2">
          <strong>{titleText}</strong>
        </Title>
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

      {!loading && coursesToMap && (
        <SwiperSlider slidesPerView={slidesPerView}>
          {coursesToMap.map((item) => (
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
              />
            </SwiperSlide>
          ))}
        </SwiperSlider>
      )}
    </Wrapper>
  );
};

export default CoursesUserSlider;
