import React, { ReactElement, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { RouteComponentProps } from "react-router";

import { fetchCourse } from "../../redux/courses/actions";
import { ICoursesState } from "../../redux/courses/reducer";
import { IRootState } from "../../interfaces/redux";

import MainLayout from "../../layouts/MainLayout";

import CourseHeader from "../../components/CourseComponents/CourseHeader";
import SectionHeading from "../../components/SectionHeading";
import ShortCourseDesc from "../../components/CourseComponents/ShortCourseDesc";
import CourseContent from "../../components/CourseComponents/CourseContent";
import CourseGridItem from "../../components/CourseComponents/CourseGridItem";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import CourseCart from "../../components/CourseComponents/CourseCart";
import ReactMarkdown from "react-markdown";

import "./index.scss";

const CoursePage: React.FC<RouteComponentProps<{ id: string }>> = (
  props
): ReactElement => {
  const dispatch: Dispatch = useDispatch();
  const { id } = props.match.params;
  const data: ICoursesState = useSelector<IRootState, ICoursesState>(
    (state): ICoursesState => state.Courses
  );

  useEffect(() => {
    dispatch(fetchCourse(parseInt(id)));
  }, [id]);

  if (data.loading) {
    return (
      <MainLayout>
        <Loader width={100} height={100} position="middle center" />
      </MainLayout>
    );
  }

  if (!data?.unique || data?.unique?.id !== Number(id)) {
    return (
      <MainLayout>
        <Error desc="Course not found" />
      </MainLayout>
    );
  }

  const {
    author,
    title,
    image_url,
    summary,
    tags,
    lessons,
    duration,
    base_price,
    updated_at,
  } = data.unique;

  return (
    <MainLayout>
      <CourseHeader title={title} tags={tags} image={image_url} />

      <article className="course">
        <div className="container">
          <div className="row">
            <div className="col-lg-16">
              <ReactMarkdown className="content">{summary}</ReactMarkdown>
            </div>
          </div>
        </div>

        {
          <ShortCourseDesc
            title="What you’ll learn"
            description={summary}
            image={image_url}
          />
        }
        {
          <CourseContent
            title="Course content"
            lessons={lessons}
            // authorImage={author?.image}
            authorName={author?.name}
            // authorDescription={author?.description}
          />
        }
        <div className="fixed-cart">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                {/* !!!!TODO wait for API - quize, games, flashcards, cerificate, mobileAccess, points  */}
                <CourseCart
                  id={data.unique.id}
                  totalTime={duration}
                  lastUpdate={updated_at}
                  lessonsLength={lessons?.length}
                  quizesLength={0}
                  gamesLength={0}
                  mobileAccess={true}
                  // owned={data?.unique?.owned}
                  price={base_price}
                />
              </div>
            </div>
          </div>
        </div>
      </article>
    </MainLayout>
  );
};

export default CoursePage;
