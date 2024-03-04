import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { SwiperSlide } from "swiper/react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import SwiperSlider from "@/components/Courses/CoursesSlider/swiper";
import { CourseCardSkeleton } from "@/components/Skeletons/CourseCard";
import useProfileCourses from "@/hooks/courses/useProfileCourses";
import { isMobile } from "react-device-detect";
import { ResponsiveImage } from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import CourseImgPlaceholder from "@/components/Courses/CourseImgPlaceholder";
import { NewCourseCard } from "@escolalms/components/lib/index";
import CategoriesBreadCrumbs from "@/components/Categories/CategoriesBreadCrumbs";

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
  const history = useHistory();

  if (coursesToMap.length === 0) {
    return null;
  }

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
                categories={
                  <CategoriesBreadCrumbs
                    categories={item.categories}
                    onCategoryClick={(id) => {
                      history.push(`/courses/?categories[]=${id}`);
                    }}
                  />
                }
                progress={
                  item.progress &&
                  item.progress !== 100 &&
                  !isNaN(item.progress)
                    ? {
                        currentProgress: item.progress,
                        maxProgress: 100,
                      }
                    : undefined
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
