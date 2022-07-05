import React, { useContext, useEffect, useMemo } from "react";
import { API } from "@escolalms/sdk/lib";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { IconText, Text, Button, CourseProgress } from "@escolalms/components";
import isPast from "date-fns/isPast";
import { PricingCard } from "@escolalms/components/lib/components/atoms/PricingCard/PricingCard";
import { IconSquares, IconWin, IconCamera } from "../../../icons";
import { useTranslation } from "react-i18next";
import { Link, useHistory } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { useTheme } from "styled-components";

const CoursesDetailsSidebar: React.FC<{ course: API.Course }> = ({
  course,
}) => {
  const theme = useTheme();
  const { cart, addToCart, progress, user, fetchProgress } =
    useContext(EscolaLMSContext);
  const { id } = course;
  const { t } = useTranslation();
  const { push } = useHistory();
  useEffect(() => {
    user && user.value && fetchProgress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const courseInCart = useMemo(() => {
    return cart?.value?.items.some(
      (item: any) => Number(item.product_id) === Number(course.product?.id)
    );
  }, [course.product?.id, cart]);

  const userOwnThisCourse = useMemo(() => {
    return (
      progress.value &&
      progress.value.findIndex(
        (item: API.CourseProgressItem) => item.course.id === id
      ) !== -1
    );
  }, [progress, id]);
  // const priceLiteral = useMemo(() => {
  //   return course.product?.price === 0
  //     ? t("FREE")
  //     : `${config?.escolalms_payments?.default_currency} ${(
  //         (course.product?.price || 0) / 100
  //       ).toFixed(2)}`;
  // }, [course, config]);
  const currentCourse = progress
    ? progress.value?.filter((item) => item.course.id === id)
    : [];
  const progressMap = useMemo(() => {
    if (user.value && userOwnThisCourse) {
      const finishedLessons = currentCourse
        ? currentCourse[0].progress?.filter((item) => item.status === 1)
        : [];
      return finishedLessons.length;
    } else {
      return 0;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress]);
  return !isMobile ? (
    <PricingCard>
      <Title level={4} as="h4">
        {course.title}
      </Title>
      <div className="pricing-card-price">
        <Title level={3} as={"h3"}>
          {course.product?.price || 0} zł
        </Title>
        {course.product?.price_old && (
          <div className="pricing-card-discount">
            <Title level={5} as={"h5"}>
              {course.product?.price_old} zł
            </Title>
          </div>
        )}
      </div>
      {isPast(new Date(course.active_to || "")) ? (
        <Text>{t("CoursePage.IsFinished")}</Text>
      ) : courseInCart ? (
        <Button mode="secondary" onClick={() => push("/cart")}>
          {t("CoursePage.GoToCheckout")}
        </Button>
      ) : userOwnThisCourse ? (
        <>
          {isPast(new Date(course.active_from || "")) ? (
            <Button
              onClick={() => push(`/course/${course.id}`)}
              mode="secondary"
            >
              {t("Attend to Course")}
            </Button>
          ) : (
            <Text>{t("CoursePage.NotStarted")}</Text>
          )}
        </>
      ) : user.value && course.product ? (
        <Button
          loading={cart.loading}
          mode="secondary"
          onClick={() =>
            addToCart(Number(course.product?.id)).then(() => push("/cart"))
          }
        >
          {t("Buy Course")}
        </Button>
      ) : !course.product ? (
        <Text>{t("CoursePage.UnavailableCourse")}</Text>
      ) : (
        ""
      )}
      <Text size={"12"}> {t("CoursePage.30Days")}</Text>
      <div className="pricing-card-features">
        {course.duration && (
          <IconText
            icon={<IconCamera />}
            text={`${t("CoursePage.Duration")}: ${course.duration}`}
          />
        )}
        {course.lessons && (
          <IconText
            icon={<IconSquares />}
            text={`${t("CoursePage.Lessons")}: ${course.lessons.length}`}
          />
        )}
        {course.language && (
          <IconText
            icon={<IconSquares />}
            text={`${t("CoursePage.Language")}: ${course.language}`}
          />
        )}
        {course.level && (
          <IconText
            icon={<IconSquares />}
            text={`${t("CoursePage.Level")}: ${course.level}`}
          />
        )}
        {course.users_count ? (
          <IconText
            icon={<IconSquares />}
            text={`${t("CoStursePage.Students")}: ${course.users_count}`}
          />
        ) : (
          ""
        )}
      </div>
      {!user.value ? (
        <Text size="12">
          <Link
            to={`/login?referrer=/courses/${course.id}`}
            style={{
              marginRight: "4px",
              color: theme.primaryColor,
            }}
          >
            {t<string>("Zaloguj się")}
          </Link>
          {t("CoursePage.ToSeeProgress")}
        </Text>
      ) : (
        <CourseProgress
          progress={
            currentCourse && currentCourse?.length > 0
              ? (currentCourse[0].progress.length * (progressMap || 0 / 10)) /
                1000
              : 0
          }
          icon={<IconWin />}
          title={t("CoursePage.MyProgress")}
        >
          <strong style={{ fontSize: 14 }}>
            {t<string>("CoursePage.Finished")} {progressMap || 0}{" "}
            {t<string>("CoursePage.Of")}{" "}
            {currentCourse && currentCourse?.length > 0
              ? currentCourse[0].progress.length
              : 0}{" "}
            {t<string>("CoursePage.Lessons")}
          </strong>
          <p style={{ marginTop: 9, marginBottom: 0 }}>
            {t<string>("CoursePage.FinishToGetCertificate")}
          </p>
        </CourseProgress>
      )}
    </PricingCard>
  ) : (
    <PricingCard mobile>
      <Title level={5} as={"h5"}>
        {course.title}
      </Title>
      <div className="pricing-card-footer">
        <div>
          {course.product?.price_old && (
            <div className="pricing-card-discount">
              <Title level={5} as={"h5"}>
                {course.product?.price_old} zł
              </Title>
            </div>
          )}
          <Title level={4} as={"h4"}>
            {course.product?.price} zł
          </Title>
        </div>
        <div>
          {courseInCart ? (
            <Button block mode="secondary" onClick={() => push("/cart")}>
              {t("CoursePage.GoToCheckout")}
            </Button>
          ) : userOwnThisCourse ? (
            <Button
              block
              mode="secondary"
              onClick={() => push(`/course/${course.id}`)}
            >
              {t("Attend to Course")}
            </Button>
          ) : user.value && course.product ? (
            <Button
              block
              mode="secondary"
              onClick={() =>
                addToCart(Number(course.product?.id)).then(() => push("/cart"))
              }
            >
              {t("Buy Course")}
            </Button>
          ) : !course.product ? (
            <Text>{t("CoursePage.UnavailableCourse")}</Text>
          ) : (
            <Button
              onClick={() => push(`/login?referrer=/courses/${course.id}`)}
              block
              mode="secondary"
            >
              {t("Login to buy")}
            </Button>
          )}
        </div>
      </div>
    </PricingCard>
  );
};

export default CoursesDetailsSidebar;
