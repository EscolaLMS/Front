import { useContext, useMemo } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import isPast from "date-fns/isPast";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { Button, Text } from "@escolalms/components";
import { API } from "@escolalms/sdk/lib";

type Props = {
  course: API.Course;
  userOwnThisCourse: boolean | undefined;
};

const CourseDetailsSidebarButtons: React.FC<Props> = ({
  course,
  userOwnThisCourse,
}) => {
  const { cart, addToCart, user } = useContext(EscolaLMSContext);
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
      <Button
        loading={cart.loading}
        mode="secondary"
        onClick={() =>
          addToCart(Number(course.product?.id)).then(() => push("/cart"))
        }
      >
        {t("Buy Course")}
      </Button>
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
