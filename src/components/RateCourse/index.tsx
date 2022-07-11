import React, { useCallback, useContext, useEffect, useState } from "react";
import { Modal } from "@escolalms/components/lib/components/atoms/Modal/Modal";
import { Rate } from "@escolalms/components/lib/components/molecules/Rate/Rate";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { toast } from "react-toastify";
import { t } from "i18next";

type Props = {
  visible: boolean;
  onClose: () => void;
  courseId: number;
};

const RateCourse: React.FC<Props> = ({ visible, onClose, courseId }) => {
  const [questionnaires, setQuestionnaires] = useState<
    EscolaLms.Questionnaire.Models.Questionnaire[]
  >([]);
  const { fetchQuestionnaires } = useContext(EscolaLMSContext);
  const getQuestionnaires = useCallback(async () => {
    try {
      const request = await fetchQuestionnaires("Course", courseId);
      if (request.success) {
        setQuestionnaires(request.data);
      }
    } catch (error) {
      toast.error(t<string>("UnexpectedError"));
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId, fetchQuestionnaires]);

  useEffect(() => {
    const timer = setTimeout(() => {
      courseId && getQuestionnaires();
    }, 1000);
    return () => clearTimeout(timer);
  }, [courseId, getQuestionnaires]);

  return (
    <div>
      <Modal
        onClose={onClose}
        visible={visible}
        animation="zoom"
        maskAnimation="fade"
        destroyOnClose={true}
        width={468}
      >
        <Rate onSubmit={(rate) => console.log("Rate: ", rate)} />
      </Modal>
    </div>
  );
};

export default RateCourse;
