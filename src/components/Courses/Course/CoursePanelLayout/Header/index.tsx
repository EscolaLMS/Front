import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useCoursePanel } from "@/components/Courses/Course/Context";
import {
  CoursePanelHeaderContainer,
  CoursePanelHeaderIconText,
  CoursePanelHeaderTitle,
  CoursePanelHeaderWrapper,
} from "@/components/Courses/Course/CoursePanelLayout/Header/styles";
import routeRoutes from "@/components/Routes/routes";
import { IconCircleClose } from "@/icons/index";

export const CoursePanelHeader = () => {
  const { currentCourseProgram } = useCoursePanel();
  const { t } = useTranslation();

  return (
    <CoursePanelHeaderWrapper>
      <CoursePanelHeaderTitle>
        <span>{t("CoursePanel.Course", { defaultValue: "Kurs" })}</span>{" "}
        {currentCourseProgram?.title}
      </CoursePanelHeaderTitle>
      <Link to={routeRoutes.myProfile}>
        <CoursePanelHeaderContainer>
          {!isMobile && (
            <CoursePanelHeaderIconText>
              {t("CoursePanel.Leave")}
            </CoursePanelHeaderIconText>
          )}
          <IconCircleClose />
        </CoursePanelHeaderContainer>
      </Link>
    </CoursePanelHeaderWrapper>
  );
};
