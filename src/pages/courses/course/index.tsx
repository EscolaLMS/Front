import React, { useContext, useEffect, useMemo, useState } from "react";
import PageBanner from "@/components/SingleCoursesTwo/PageBanner";
import CoursesDetailsSidebar from "@/components/SingleCoursesTwo/CoursesDetailsSidebar/index";
import { Link, useParams, useHistory, useLocation } from "react-router-dom";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import Loader from "@/components/Preloader";
import { format } from "date-fns";
import MarkdownReader from "@/escolalms/sdk/components/Markdown/MarkdownReader";
import Image from "@escolalms/sdk/lib/react/components/Image";
import { API } from "@escolalms/sdk/lib";
import { useTranslation } from "react-i18next";
import Layout from "@/components/_App/Layout";
import CourseProgramPreview from "@/escolalms/sdk/components/Course/CourseProgramPreview";
import CourseProgramList from "@/escolalms/sdk/components/Course/CourseProgramList";
import LmsTag from "@/components/Common/LmsTag";
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./index.scss";
import { Title } from "@escolalms/components";
import styled from "styled-components";

resetIdCounter();

const CoursePriceButton: React.FC<{ course: API.Course }> = ({ course }) => {
  const { t } = useTranslation();

  const { config, addToCart, cart, user, progress, fetchProgress } =
    useContext(EscolaLMSContext);

  const { id } = course;

  const courseInCart = useMemo(() => {
    return cart?.value?.items.some(
      (item: any) => Number(item.id) === Number(id)
    );
  }, [id, cart]);

  useEffect(() => {
    user && user.value && fetchProgress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const userOwnThisCourse = useMemo(() => {
    return (
      progress.value &&
      progress.value.findIndex(
        (item: API.CourseProgressItem) => item.course.id === id
      ) !== -1
    );
  }, [progress, id]);

  const priceLiteral = useMemo(() => {
    return course.base_price === 0 || course.base_price === undefined
      ? t("FREE")
      : `${config?.escolalms_payments?.default_currency} ${(
          course.base_price / 100
        ).toFixed(2)}`;
  }, [course, config, t]);

  return (
    <div className="courses-price">
      {!courseInCart && <div className="price">{priceLiteral}</div>}

      {userOwnThisCourse ? (
        <Link to={`/course/${course.id}`} className="default-btn">
          <i className="flaticon-user"></i> {t("Attend to Course")}{" "}
          <span></span>
        </Link>
      ) : courseInCart ? (
        <Link to={`/cart`} className="default-btn full-width">
          <i className="flaticon-shopping-cart"></i>
          {t("Checkout Course")} <small>{priceLiteral}</small> <span></span>
        </Link>
      ) : user.value ? (
        <button
          className="default-btn"
          disabled={cart.loading}
          onClick={() => addToCart(Number(course.id))}
        >
          <i className="flaticon-shopping-cart"></i> {t("Buy Course")}{" "}
          <span></span>
        </button>
      ) : (
        <Link to={`/authentication`} className="default-btn">
          <i className="flaticon-shopping-cart"></i>{" "}
          <small>{t("Login to buy")}</small> <span></span>
        </Link>
      )}

      {course.base_price === 0 && (
        <Link
          to={`/courses/preview/${course.id}`}
          className="default-btn full-width"
        >
          <i className="flaticon-user"></i> {t("Preview course for free")}{" "}
          <span></span>
        </Link>
      )}
    </div>
  );
};

const CoursePage = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const { t } = useTranslation();

  const { id } = useParams<{ id: string }>();

  const { course, fetchCourse, fetchCart, user } = useContext(EscolaLMSContext);

  const [previewTopic, setPreviewTopic] = useState<API.Topic>();
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    if (id) {
      fetchCourse(Number(id));
      history.push(`${location.pathname}?tab=${0}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    user.value && fetchCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    const selectedTab = location.search.split("tab=")[1];

    setTabIndex(Number(selectedTab));
  }, [location]);

  if (course.loading || !course.value) {
    return <Loader />;
  }

  if (course.error) {
    return <pre>{course.error.message}</pre>;
  }

  const CoursePagee = styled("div")`
    .courses-details-header {
      h1 {
        font-size: 40px;
      }
    }
  `;

  return (
    <Layout>
      <React.Fragment>
        <div className="course-page">
          <div className="container">
            <div className="courses-details-header">
              <div className="row align-items-center">
                <div className="col-lg-8 col-md-12">
                  <div className="row">
                    <div className="col-lg-7">
                      <Title>Księgowośc dla początkujących</Title>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-8 col-md-12">
                {course.value.image_path && (
                  <div className="courses-details-image-style-two text-center">
                    <Image
                      path={course.value.image_path}
                      srcSizes={[790 * 0.5, 790, 2 * 790]}
                    />
                  </div>
                )}

                <div className="courses-details-desc"></div>
              </div>

              <div className="col-lg-4 col-md-12">
                <CoursesDetailsSidebar course={course.value} />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </Layout>
  );
};

export default CoursePage;
