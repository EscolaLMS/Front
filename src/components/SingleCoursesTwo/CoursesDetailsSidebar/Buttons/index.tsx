import React, { useContext, useMemo } from "react";
import styled from "styled-components";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import isPast from "date-fns/isPast";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { Button, Text } from "@escolalms/components";
import { API } from "@escolalms/sdk/lib";

interface CourseAccessButtonProps {
  course: API.Course;
  onRequestAccess: () => void;
}

const StyledButton = styled(Button)`
  display: block;
  margin-bottom: 10px;
`;

const CourseAccessButton: React.FC<CourseAccessButtonProps> = ({
  course,
  onRequestAccess,
}) => {
  const { t } = useTranslation();
  const { push } = useHistory();
  const { courseAccess, cart, addToCart } = useContext(EscolaLMSContext);

  const currentCourseAccess = useMemo(
    () =>
      courseAccess.list?.data?.find(
        (courseAccessItem) => courseAccessItem?.course?.id === course.id
      ),
    [courseAccess.list?.data]
  );

  const BuyButton = useMemo(
    () => (
      <Button
        loading={cart.loading}
        mode="secondary"
        onClick={() =>
          addToCart(Number(course.product?.id)).then(() => push("/cart"))
        }
      >
        {t("Buy Course")}
      </Button>
    ),
    [addToCart, cart.loading, course.product?.id, push, t]
  );

  if (!currentCourseAccess) {
    return (
      <>
        <StyledButton mode="secondary" onClick={onRequestAccess}>
          {t("CourseAccess.RequestAccess")}
        </StyledButton>
        {BuyButton}
      </>
    );
  }

  if (currentCourseAccess.status !== "approved") {
    return (
      <>
        <StyledButton mode="secondary" disabled>
          {t("CourseAccess.Pending")}
        </StyledButton>
        {BuyButton}
      </>
    );
  }

  if (currentCourseAccess.status === "approved") {
    return (
      <Button onClick={() => push(`/course/${course.id}`)} mode="secondary">
        {t("Go to the course")}
      </Button>
    );
  }

  return BuyButton;
};

type Props = {
  course: API.Course;
  userOwnThisCourse: boolean | undefined;
  onRequestAccess: () => void;
};

const CourseDetailsSidebarButtons: React.FC<Props> = ({
  course,
  userOwnThisCourse,
  onRequestAccess,
}) => {
  const { cart, user } = useContext(EscolaLMSContext);
  const { t } = useTranslation();
  const { push } = useHistory();

  const courseInCart = useMemo(() => {
    return cart?.value?.items.some(
      (item: any) => Number(item.product_id) === Number(course.product?.id)
    );
  }, [course.product?.id, cart]);

  if (isPast(new Date(course.active_to || ""))) {
    return <Text>{t("CoursePage.IsFinished")}</Text>;
  }
  if (courseInCart) {
    return (
      <Button mode="secondary" onClick={() => push("/cart")}>
        {t("CoursePage.GoToCheckout")}
      </Button>
    );
  }
  if (userOwnThisCourse && isPast(new Date(course.active_from || ""))) {
    return (
      <Button onClick={() => push(`/course/${course.id}`)} mode="secondary">
        {t("Go to the course")}
      </Button>
    );
  }
  if (userOwnThisCourse) {
    return <Text>{t("CoursePage.NotStarted")}</Text>;
  }
  if (user.value && course.product) {
    return (
      <CourseAccessButton course={course} onRequestAccess={onRequestAccess} />
    );
  }
  if (!course.product) {
    return <Text>{t("CoursePage.UnavailableCourse")}</Text>;
  }
  return (
    <Button
      onClick={() => push(`/login?referrer=/courses/${course.id}`)}
      mode="secondary"
    >
      {t("Buy Course")}
    </Button>
  );
};

export default CourseDetailsSidebarButtons;
