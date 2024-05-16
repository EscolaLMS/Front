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
import { MOBILE_DEVICE } from "@/config/index";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { API } from "@escolalms/sdk/lib";
import { userIsCourseAuthor } from "@/utils/index";
import routeRoutes from "@/components/Routes/routes";
import { Modal } from "@escolalms/components/lib/components/atoms/Modal/Modal";
import ProductModal from "@/components/Courses/SingleCoursesTwo/CoursesDetailsSidebar/ProductModal";
import useSubscriptions from "@/hooks/useSubscriptions";
import MobileGuard from "@/components/_App/MobileGuard";
import { toast } from "@/utils/toast";
import { findProductByIdentifier, getRevenuecatId } from "@/utils/payment";

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
  const { courseAccess, fetchCourseAccess, user } =
    useContext(EscolaLMSContext);
  const { attachProduct, getActiveSubscription } = useSubscriptions();

  useEffect(() => {
    (async function () {
      const id = user?.value?.id;

      if (id && MOBILE_DEVICE === "true") {
        if (Capacitor.getPlatform() === "ios") {
          await Purchases.configure({
            apiKey: "appl_lCZPQrCkszmUdfvXhMqFvhcYSVX",
            appUserID: `${id}`,
          });
        } else if (Capacitor.getPlatform() === "android") {
          await Purchases.configure({
            apiKey: "goog_ToUXqEpqboNbgFCCVBYksHdQIYh",
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
        const purchaseResult = await Purchases.purchaseStoreProduct({
          product: product,
        });
        // Refresh course access after successful purchase
        fetchCourseAccess({
          course_id: Number(course.id),
          current_page: 1,
          per_page: 1,
        });
      } catch (error) {
        toast(`${t("UnexpectedError")}`, "error");
      }
    }
  }, [course, fetchCourseAccess, t]);

  const currentCourseAccess = useMemo(
    () =>
      courseAccess.list?.data?.find(
        (courseAccessItem) => courseAccessItem?.course?.id === course.id
      ),
    [courseAccess.list?.data, course.id]
  );

  const handleBuyButtonClick = useCallback(() => {
    setModalVisible(true);
  }, [setModalVisible]);

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
      <>
        {/* <MobileGuard> */}
        <Button
          mode="secondary"
          onClick={() => {
            if (MOBILE_DEVICE === "true") {
              buyOnMobile();
              return;
            }
            handleBuyButtonClick();
          }}
        >
          {t("Buy Course")}
        </Button>
        {/* </MobileGuard> */}
      </>
    ),
    [t, handleBuyButtonClick, buyOnMobile]
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
        {/* <MobileGuard> */}
        <StyledButton mode="secondary" onClick={onRequestAccess}>
          {t("CourseAccess.RequestAccess")}
        </StyledButton>
        {BuyButton}
        {/* </MobileGuard> */}
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
  const [modalVisible, setModalVisible] = useState(false);
  const courseInCart = useMemo(() => {
    return cart?.value?.items.some(
      (item) => Number(item.product_id) === Number(course.product?.id)
    );
  }, [course.product?.id, cart]);

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
        <MobileGuard>
          <Button mode="secondary" onClick={() => push(routeRoutes.cart)}>
            {t("CoursePage.GoToCheckout")}
          </Button>
        </MobileGuard>
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
    <>
      <MobileGuard>
        <Button
          onClick={() => push(`/login?referrer=/courses/${course.id}`)}
          mode="secondary"
        >
          {t("Buy Course")}
        </Button>
      </MobileGuard>
    </>
  );
};

export default CourseDetailsSidebarButtons;
