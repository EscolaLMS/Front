import { useContext, useEffect } from "react";
import CoursesDetailsSidebar from "@/components/SingleCoursesTwo/CoursesDetailsSidebar/index";
import { useParams } from "react-router-dom";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import Loader from "@/components/Preloader";
import MarkdownReader from "@/escolalms/sdk/components/Markdown/MarkdownReader";
import Image from "@escolalms/sdk/lib/react/components/Image";
import { useTranslation } from "react-i18next";
import Layout from "@/components/_App/Layout";
import { resetIdCounter } from "react-tabs";
import Paypal from "../../../images/paypal.png";
import Netflix from "../../../images/netflix.png";
import Apple from "../../../images/apple.png";
import McDonald from "../../../images/mcdonald.png";
import {
  LabelListItem,
  Text,
  Title,
  Button,
  Tutor,
} from "@escolalms/components";

import styled from "styled-components";
import { Medal, StarOrange, ThumbUp } from "../../../icons";

resetIdCounter();

const StyledCoursePage = styled.div`
  padding-top: 150px;
  .course-main-info {
    .labels-row {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      column-gap: 20px;
      margin: 35px 0;

      &--bottom {
        column-gap: 45px;
        margin-top: 120px;
      }
    }
  }

  .course-companies {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    column-gap: 90px;

    .companies-title {
      margin-right: -40px;
    }
  }

  .course-description {
    padding: 50px 45px;
    margin: 45px 0;
    background-color: #eee;
  }
`;

const CoursePage = () => {
  const { t } = useTranslation();

  const { id } = useParams<{ id: string }>();

  const { course, fetchCourse, fetchCart, user } = useContext(EscolaLMSContext);
  useEffect(() => {
    if (id) {
      fetchCourse(Number(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    user.value && fetchCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  if (course.loading || !course.value) {
    return <Loader />;
  }

  if (course.error) {
    return <pre>{course.error.message}</pre>;
  }
  console.log(course);
  return (
    <Layout>
      <StyledCoursePage>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <section className="course-main-info">
                <div className="row">
                  <div className="col-lg-7">
                    <Title level={2}>Księgowość dla początkujących</Title>
                    <div className="labels-row">
                      <div className="single-label">
                        <LabelListItem title="90%" icon={<ThumbUp />}>
                          Poleca szkolenia Jana Kaminskiego
                        </LabelListItem>
                      </div>
                      <div className="single-label">
                        <LabelListItem title="Gwarancja" icon={<Medal />}>
                          zadowolenia lub zwrot pieniędzy*
                        </LabelListItem>
                      </div>
                      <div className="single-label">
                        <LabelListItem title="5.0" icon={<StarOrange />}>
                          Średnia ocena szkoleń Jana Kamińskiego
                        </LabelListItem>
                      </div>
                    </div>
                    <Button mode="outline">Zobacz więcej</Button>
                  </div>
                  <div className="col-lg-4">
                    <Image
                      path={course.value.image_path}
                      srcSizes={[790 * 0.5, 790, 2 * 790]}
                    />
                  </div>
                </div>
                <div className="labels-row labels-row--bottom">
                  <div className="single-label">
                    <LabelListItem
                      title="Kategoria szkolenia"
                      variant={"label"}
                    >
                      Finanse
                    </LabelListItem>
                  </div>
                  <div className="single-label">
                    <LabelListItem title="Poziom trudności" variant={"label"}>
                      {course.value.level}
                    </LabelListItem>
                  </div>
                  <div className="single-label">
                    <LabelListItem title="Termin rozpoczęcia" variant={"label"}>
                      22 marca 2022
                    </LabelListItem>
                  </div>
                  <div className="single-label">
                    <LabelListItem title="Czas trwania" variant={"label"}>
                      {course.value.duration}
                    </LabelListItem>
                  </div>
                </div>
              </section>
              <section className="course-companies">
                <Text>
                  <strong>
                    Firmy które oferują ten kurs <br /> swoim pracownikom
                  </strong>
                </Text>
                <div className="single-company">
                  <img src={Paypal} alt="PayPal" />
                </div>
                <div className="single-company">
                  <img src={Netflix} alt="Netflix" />
                </div>
                <div className="single-company">
                  <img src={Apple} alt="Apple" />
                </div>
                <div className="single-company">
                  <img src={McDonald} alt="McDonald" />
                </div>
              </section>
              <section className="course-description">
                <MarkdownReader>{course.value.summary}</MarkdownReader>
              </section>
              <section className="course-tutor">
                <Tutor
                  avatar={{
                    alt: "John Doe Image",
                    src: "",
                  }}
                  rating={{
                    ratingValue: 4.1,
                  }}
                  title={"Teacher"}
                  fullName={"John Doe"}
                  coursesInfo={"8 Curses"}
                  description={
                    "Praktyk z 15 letnim doświadczeniem w zarządzaniu zarówno mikro jak i makro przedsiębiorstwami. Odpowiadał za opracowanie biznesplanu dla firm tj.: CCC, Allegro, 4F"
                  }
                />
              </section>
            </div>
            <div className="col-lg-3 col-md-12">
              <CoursesDetailsSidebar course={course.value} />
            </div>
          </div>
        </div>
      </StyledCoursePage>
    </Layout>
  );
};

export default CoursePage;
