import React, { ReactElement, useEffect, useMemo, useState } from "react";

import { Link, useLocation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import { fetchCategories } from "../../redux/categories/actions";
import { fetchCourses } from "../../redux/courses/actions";

import { IRootState } from "../../interfaces/redux";
import { ICategory } from "../../interfaces";
import { IAuthState } from "../../redux/auth/reducer";
import { ICategoriesState } from "../../redux/categories/reducer";
import { ICoursesState } from "../../redux/courses/reducer";

import MainLayout from "../../layouts/MainLayout";
import SectionHeading from "../../components/SectionHeading";
import PageHeader from "../../components/PageHeader";
import Loader from "../../components/Loader";
import CoursesList from "../../components/CourseComponents/CoursesList";

import routes from "../../components/Routes/routes";

import queryString from "query-string";

import "./index.scss";

const CoursePage: React.FC = (): ReactElement => {
  const dispatch: Dispatch = useDispatch();

  const [limit, setLimit] = useState(12);

  const location = useLocation();

  const data: ICoursesState = useSelector<IRootState, ICoursesState>(
    (state): ICoursesState => state.Courses
  );

  const auth: IAuthState = useSelector<IRootState, IAuthState>(
    (state) => state.Auth
  );

  const logged = auth.token;

  const categories: ICategoriesState = useSelector<
    IRootState,
    ICategoriesState
  >((state): ICategoriesState => state.Categories);

  const qData = useMemo(() => {
    return queryString?.parse(location?.search);
  }, [location]);

  const qInpuValue = useMemo(() => {
    return qData?.query && typeof qData?.query === "string"
      ? qData.query
      : undefined;
  }, [qData?.query]);

  const qCategory = useMemo(() => {
    return qData?.category && typeof qData?.category == "string"
      ? qData.category
      : "";
  }, [qData?.category]);

  const selectedCategory = useMemo(() => {
    if (categories?.list?.length > 0 && qData?.category) {
      return categories.list.find(
        (category: ICategory) => category.id === Number(qData.category)
      )?.name;
    }
    return null;
  }, [categories, qData?.category]);

  const loading = categories?.loading || data?.loading;

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  useEffect(() => {
    if (qInpuValue || qCategory) {
      dispatch(
        fetchCourses({
          course_title: qInpuValue || undefined,
          category_id: qCategory || undefined,
          limit,
        })
      );
    } else {
      dispatch(fetchCourses({ limit }));
    }
  }, [qInpuValue, qCategory, limit]);

  return (
    <MainLayout>
      <article className="courses">
        <PageHeader title="Courses" search={true} />
        {categories?.loading ? (
          <Loader width={100} height={100} />
        ) : (
          <>
            {data?.recomended?.length > 0 &&
              !qData?.query &&
              !selectedCategory && (
                <CoursesList
                  error={data.error}
                  loading={loading}
                  data={data.recomended}
                >
                  <SectionHeading>
                    <h2>Recomended for you</h2>
                    <div>
                      Basis of your{" "}
                      <Link to={routes.myProfile}> categories</Link>
                    </div>
                  </SectionHeading>
                </CoursesList>
              )}

            <CoursesList
              onLimitChange={(l) => setLimit(l)}
              limit={limit}
              error={data.error}
              loading={loading}
              data={data.list}
              mobileSlider={!qData?.query && !selectedCategory}
            >
              {qData?.query || selectedCategory ? (
                <SectionHeading>
                  <h2>
                    {selectedCategory} {qData?.query && `‚${qData?.query}’`}{" "}
                  </h2>
                  <small>({data?.list?.length})</small>
                </SectionHeading>
              ) : (
                logged && (
                  <>
                    <SectionHeading>
                      <h2>You may also like</h2>
                    </SectionHeading>
                  </>
                )
              )}
            </CoursesList>
          </>
        )}
      </article>
    </MainLayout>
  );
};

export default CoursePage;
