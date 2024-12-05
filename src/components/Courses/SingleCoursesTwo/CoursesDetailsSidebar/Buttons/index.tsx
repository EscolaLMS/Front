import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import styled from "styled-components";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import isPast from "date-fns/isPast";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { Capacitor } from "@capacitor/core";
import { Purchases } from "@revenuecat/purchases-capacitor";
import { VITE_APP_ANDROID_APIKEY, VITE_APP_IOS_APIKEY } from "@/config/index";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { API } from "@escolalms/sdk/lib";
import { isMobilePlatform, userIsCourseAuthor } from "@/utils/index";
import routeRoutes from "@/components/Routes/routes";
import { Modal } from "@escolalms/components/lib/components/atoms/Modal/Modal";
import ProductModal from "@/components/Courses/SingleCoursesTwo/CoursesDetailsSidebar/ProductModal";
import useSubscriptions from "@/hooks/useSubscriptions";
import {
  findProductByIdentifier,
  getRevenuecatId,
  revenuecatErrorHandler,
} from "@/utils/payment";
import { CapacitorPaymentError } from "@/types/index";
import {
  EntityRedirectBuyType,
  useEntityBuyableType,
} from "@/hooks/useEntityPrice";
import usePayment, { PaymentGateway } from "@/hooks/usePayment";

interface CourseAccessButtonProps {
  course: API.Course;
  onRequestAccess: () => void;
  setModalVisible: (visible: boolean) => void;
}

const StyledButton = styled(Button)`
  display: block;
  margin-bottom: 10px;
`;

const CourseAccessButton: React.FC<CourseAccessButtonProps> = ({
  course,
  onRequestAccess,
  setModalVisible,
}) => {
  const { t } = useTranslation();
  const { push } = useHistory();
  const { courseAccess, fetchCourseAccess, user, fetchCourse, addToCart } =
    useContext(EscolaLMSContext);
  const { attachProduct, getActiveSubscription } = useSubscriptions();
  const { payByStripe, payByP24, defaultGateway } = usePayment();
  const buyableType = useEntityBuyableType(course);

  useEffect(() => {
    (async function () {
      const id = user?.value?.id;

      if (id && isMobilePlatform) {
        if (Capacitor.getPlatform() === "ios") {
          await Purchases.configure({
            apiKey: VITE_APP_IOS_APIKEY,
            appUserID: `${id}`,
          });
        } else if (Capacitor.getPlatform() === "android") {
          await Purchases.configure({
            apiKey: VITE_APP_ANDROID_APIKEY,
            appUserID: `${id}`,
          });
        }
      }
    })();
  }, [user?.value?.id]);

  const buyOnMobile = useCallback(async () => {
    const id = getRevenuecatId(course);
    const offerings = await Purchases.getOfferings();
    const packages = offerings?.current?.availablePackages || [];

    const product = findProductByIdentifier(packages, id);

    if (product) {
      try {
        await Purchases.purchaseStoreProduct({
          product: product,
        });
        // Refresh course access after successful purchase
        // We need timeout for android phones (3s is enough)
        setTimeout(() => {
          fetchCourse(Number(course.id));
          fetchCourseAccess({
            course_id: Number(course.id),
            current_page: 1,
            per_page: 1,
          });
        }, 3000);
      } catch (error) {
        revenuecatErrorHandler(error as CapacitorPaymentError);
      }
    }
  }, [course, fetchCourse, fetchCourseAccess]);

  const currentCourseAccess = useMemo(
    () =>
      courseAccess.list?.data?.find(
        (courseAccessItem) => courseAccessItem?.course?.id === course.id
      ),
    [courseAccess.list?.data, course.id]
  );

  const handleBuyButtonClick = useCallback(() => {
    if (buyableType === EntityRedirectBuyType.FREE && course?.product?.id) {
      addToCart(Number(course.product?.id)).then(() =>
        defaultGateway === PaymentGateway.Stripe
          ? payByStripe("free")
          : payByP24()
      );
    } else {
      setModalVisible(true);
    }
  }, [
    setModalVisible,
    addToCart,
    course,
    payByStripe,
    buyableType,
    payByP24,
    defaultGateway,
  ]);

  const handleAttachProduct = useCallback(() => {
    attachProduct(course.id, "EscolaLms\\Courses\\Models\\Course").then(() => [
      push(`/course/${course.id}`),
      fetchCourseAccess({
        course_id: Number(course.id),
        current_page: 1,
        per_page: 1,
      }),
    ]);
  }, [attachProduct, course.id, push, fetchCourseAccess]);

  const BuyButton = useMemo(
    () => (
      <Button
        mode="secondary"
        onClick={() => {
          if (isMobilePlatform) {
            buyOnMobile();
            return;
          }
          handleBuyButtonClick();
        }}
      >
        {buyableType === EntityRedirectBuyType.FREE
          ? t("Go to the course")
          : t("Buy Course")}
      </Button>
    ),
    [t, handleBuyButtonClick, buyOnMobile, buyableType]
  );

  if (getActiveSubscription?.id) {
    return (
      <Button onClick={() => handleAttachProduct()} mode="secondary">
        {t("Go to the course")}
      </Button>
    );
  }
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
  const { cart, user, fetchCourseAccess } = useContext(EscolaLMSContext);
  const { t } = useTranslation();
  const { push } = useHistory();
  const [modalVisible, setModalVisible] = useState(false);
  const courseInCart = useMemo(() => {
    return cart?.value?.items.some(
      (item) => Number(item.product_id) === Number(course.product?.id)
    );
  }, [course.product?.id, cart]);

  useEffect(() => {
    fetchCourseAccess({
      course_id: Number(course.id),
      current_page: 1,
      per_page: 1,
    });
  }, [course.id, fetchCourseAccess]);

  if (userIsCourseAuthor(Number(user.value?.id), course)) {
    return (
      <Button onClick={() => push(`/course/${course.id}`)} mode="secondary">
        {t("Go to the course")}
      </Button>
    );
  }

  if (isPast(new Date(course.active_to || ""))) {
    return <Text>{t("CoursePage.IsFinished")}</Text>;
  }
  if (courseInCart) {
    return (
      <>
        <Button mode="secondary" onClick={() => push(routeRoutes.cart)}>
          {t("CoursePage.GoToCheckout")}
        </Button>
      </>
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
      <>
        <CourseAccessButton
          course={course}
          onRequestAccess={onRequestAccess}
          setModalVisible={setModalVisible}
        />

        <Modal
          onClose={() => setModalVisible(false)}
          visible={modalVisible}
          animation="zoom"
          maskAnimation="fade"
          destroyOnClose
          width={800}
        >
          <ProductModal course={course} />
        </Modal>
      </>
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
