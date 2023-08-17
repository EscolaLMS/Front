import { Button, Row, Text, Title } from "@escolalms/components";
import { Modal } from "@escolalms/components/lib/components/atoms/Modal/Modal";

import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { CourseProgressItem } from "@escolalms/sdk/lib/types/api";
import { FC, useCallback, useContext } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

interface Props {
  courseData: CourseProgressItem;
  visible: boolean;
  onClose: () => void;
}

export const ResetProgressModal: FC<Props> = ({
  courseData,
  visible,
  onClose,
}) => {
  const { sendProgress } = useContext(EscolaLMSContext);
  const { t } = useTranslation();
  const { push } = useHistory();

  const handleResetProgress = useCallback(async () => {
    await sendProgress(
      courseData.course.id,
      courseData.progress.map(({ topic_id }) => ({ topic_id, status: 0 }))
    );

    push(`/course/${courseData.course.id}`);
  }, [courseData.course.id, courseData.progress, sendProgress, push]);

  return (
    <Modal
      animation="zoom"
      maskAnimation="fade"
      destroyOnClose={true}
      visible={visible}
      onClose={onClose}
    >
      <>
        <Title level={4}>{t<string>("ResetProgressModal.Continue")}</Title>
        <Text> {t<string>("ResetProgressModal.RestartCourse")}</Text>
        <Row $gap={16}>
          <Button mode="primary" onClick={handleResetProgress}>
            {t<string>("ResetProgressModal.WantContinue")}
          </Button>
          <Button mode="primary" onClick={onClose}>
            {t<string>("ResetProgressModal.Cancel")}
          </Button>
        </Row>
      </>
    </Modal>
  );
};
