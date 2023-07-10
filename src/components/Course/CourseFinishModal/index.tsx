import { useTranslation } from "react-i18next";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { useHistory } from "react-router-dom";

const CourseFinishModal = () => {
  const { t } = useTranslation();
  const { push } = useHistory();

  return (
    <div className="course-program-finish-modal">
      <p className="course-program-finish-modal__title">
        {t("CourseProgram.FinishTitle")}
      </p>
      <p className="course-program-finish-modal__paragraph">
        {t("CourseProgram.FinishSubtitle")}
      </p>

      <div className="course-program-finish-modal__buttons">
        <Button mode="primary" onClick={() => push("/user/my-profile")}>
          {t("Menu.Profile")}
        </Button>
        <Button mode="primary" onClick={() => push("/courses")}>
          {t("Menu.Courses")}
        </Button>
      </div>
    </div>
  );
};

export default CourseFinishModal;
