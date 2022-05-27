import React, { useContext, useEffect, useMemo } from "react";
import { API } from "@escolalms/sdk/lib";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import {
  IconText,
  Text,
  Title,
  Button,
  CourseProgress,
} from "@escolalms/components";
import { PricingCard } from "@escolalms/components/lib/components/atoms/PricingCard/PricingCard";
import ReactMarkdown from "react-markdown";
import {
  IconTime,
  IconDownload,
  IconSquares,
  IconBadge,
  IconWin,
  IconCamera,
} from "../../../icons";
import { t } from "i18next";
import { Link, useHistory } from "react-router-dom";
import { isMobile } from "react-device-detect";

const CoursesDetailsSidebar: React.FC<{ course: API.Course }> = ({
  course,
}) => {
  const { cart, addToCart, progress, config, user, fetchProgress } =
    useContext(EscolaLMSContext);
  const { id } = course;
  const { push } = useHistory();
  useEffect(() => {
    user && user.value && fetchProgress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const courseInCart = useMemo(() => {
    return cart?.value?.items.some(
      (item: any) => Number(item.id) === Number(id)
    );
  }, [id, cart]);

  const userOwnThisCourse = useMemo(() => {
    return (
      progress.value &&
      progress.value.findIndex(
        (item: API.CourseProgressItem) => item.course.id === id
      ) !== -1
    );
  }, [progress, id]);
  const priceLiteral = useMemo(() => {
    return course.product?.price === 0
      ? t("FREE")
      : `${config?.escolalms_payments?.default_currency} ${(
          (course.product?.price || 0) / 100
        ).toFixed(2)}`;
  }, [course, config]);
  const progressMap = useMemo(() => {
    if (user.value && userOwnThisCourse) {
      const currentCourse =
        progress.value?.filter((item) => item.course.id === id) || [];
      const courseProgress = currentCourse[0].progress.length;
      const finishedLessons = currentCourse[0].progress.filter(
        (item) => item.status > 0
      );
      return (100 * finishedLessons.length) / courseProgress;
    }
  }, [progress]);

  return !isMobile ? (
    <PricingCard>
      <Title level={4} as="h4">
        Księgowość dla początkujących
      </Title>
      <div className="pricing-card-price">
        <Title level={3} as={"h3"}>
          {priceLiteral}
        </Title>
        <div className="pricing-card-discount">
          <Title level={5} as={"h5"}>
            199 zł
          </Title>
        </div>
      </div>
      <IconText
        icon={<IconTime />}
        text={
          <ReactMarkdown components={{ p: React.Fragment }}>
            **8h 12 min** time left
          </ReactMarkdown>
        }
      />
      {courseInCart ? (
        <Button mode="secondary" onClick={() => push("/cart")}>
          Do kasy
        </Button>
      ) : userOwnThisCourse ? (
        <Button mode="secondary">{t("Attend to Course")}</Button>
      ) : user.value ? (
        <Button mode="secondary" onClick={() => addToCart(Number(course.id))}>
          {t("Buy Course")}
        </Button>
      ) : (
        <Text>{t("Login to buy")}</Text>
      )}
      <Text size={"12"}>Gwarantowane 30 dni na zwrot</Text>
      <div className="pricing-card-features">
        <IconText icon={<IconCamera />} text={course.duration} />
        <IconText
          icon={<IconDownload />}
          text={"Materiały szkoleniowe do pobrania"}
        />
        <IconText
          icon={<IconSquares />}
          text={"Dostęp na smartphone i tablet"}
        />
        <IconText icon={<IconBadge />} text={"Certyfikat ukończenia"} />
      </div>
      <CourseProgress
        progress={(progressMap || 0) / 100}
        icon={<IconWin />}
        title="Moje postepy"
      >
        {!user.value ? (
          <>
            <Link
              to="/authentication"
              style={{
                marginRight: "4px",
              }}
            >
              Zaloguj się
            </Link>
            aby widzieć postępy
          </>
        ) : (
          <>
            <strong style={{ fontSize: 14 }}>
              Ukończono {progressMap} z 40 lekcji
            </strong>
            <p style={{ marginTop: 9, marginBottom: 0 }}>
              Ukoncz kurs aby zdobyc certyfikat
            </p>
          </>
        )}
      </CourseProgress>
    </PricingCard>
  ) : (
    <PricingCard mobile>
      <Title level={5} as={"h5"}>
        {course.title}
      </Title>
      <div className="pricing-card-footer">
        <div>
          <div className="pricing-card-discount">
            <Title level={5} as={"h5"}>
              {priceLiteral}
            </Title>
          </div>
          <Title level={4} as={"h4"}>
            {course.product?.price} zł
          </Title>
        </div>
        <div>
          {courseInCart ? (
            <Button block mode="secondary" onClick={() => push("/cart")}>
              Do kasy
            </Button>
          ) : userOwnThisCourse ? (
            <Button block mode="secondary">
              {t("Attend to Course")}
            </Button>
          ) : user.value ? (
            <Button
              block
              mode="secondary"
              onClick={() => addToCart(Number(course.id))}
            >
              {t("Buy Course")}
            </Button>
          ) : (
            <Button block mode="secondary">
              {t("Login to buy")}
            </Button>
          )}
        </div>
      </div>
    </PricingCard>
  );
};

export default CoursesDetailsSidebar;
