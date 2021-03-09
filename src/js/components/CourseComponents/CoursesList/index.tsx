import React, { ReactElement } from "react";

import { ICourse } from "../../../interfaces/course";

import InfiniteScroll from "react-infinite-scroller";

import CourseGridItem from "../CourseGridItem";
import { IDefaultApiError } from "../../../interfaces/redux";
import Loader from "../../Loader";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";

import "./index.scss";
interface IProps {
  data: ICourse[];
  loading: boolean;
  error: boolean | IDefaultApiError;
  limit?: number;
  onLimitChange?: (limit: number) => void;
  mobileSlider?: boolean;
}

const CoursesList: React.FC<IProps> = ({
  data,
  children,
  loading,
  limit = 0,
  error,
  onLimitChange,
  mobileSlider = false,
}): ReactElement => {
  const sliderSettings = {
    slidesToShow: 1,
    arrows: false,
    centerMode: false,
    dots: true,
  };

  return (
    <section
      className={["courses__list", limit ? "courses__list--white" : ""].join(
        " "
      )}
    >
      <div className="container">
        <div className="courses__section-header">{children}</div>
        <InfiniteScroll
          hasMore={data && !error && limit <= data.length && !loading}
          loadMore={(): void => onLimitChange && onLimitChange(limit + 12)}
          className={["row", mobileSlider && "infinite-scroll"].join(" ")}
        >
          {data.length > 0 ? (
            data.map(
              (course: ICourse, index: number): ReactElement => {
                return (
                  <div className="col-lg-12" key={index}>
                    <CourseGridItem
                      id={course.id}
                      image={course.thumb_image}
                      title={course.course_title}
                      tags={course.tags}
                      price={course.price}
                      type="round"
                      strikePrice={course.strike_out_price}
                    />
                  </div>
                );
              }
            )
          ) : (
            <h4>No results.</h4>
          )}
          {loading && (
            <Loader key={0} position="bottom center" width={40} height={40} />
          )}
        </InfiniteScroll>

        {mobileSlider && (
          <Slider
            {...sliderSettings}
            className={[
              "row",
              data.length < sliderSettings.slidesToShow ? "no-clone" : "",
            ].join(" ")}
          >
            {data.length > 0 ? (
              data.map(
                (course: ICourse, index: number): ReactElement => {
                  return (
                    <div className="col-sm-24" key={index}>
                      <CourseGridItem
                        id={course.id}
                        image={course.thumb_image}
                        title={course.course_title}
                        tags={course.tags}
                        price={course.price}
                        type="round"
                        strikePrice={course.strike_out_price}
                      />
                    </div>
                  );
                }
              )
            ) : (
              <h4>No results.</h4>
            )}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default CoursesList;
