import { useContext, useEffect, useState } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { Modal } from "@escolalms/components/lib/components/atoms/Modal/Modal";
import { JitsyData } from "@escolalms/sdk/lib/types/api";
import ContentLoader from "@/components/_App/ContentLoader";
import { ConsultationMeetModalStyles } from "./MeetModalStyles";

interface Props {
  onClose: () => void;
  visible: boolean;
  consultationTermId: number;
}

const ConsultationMeetModal = ({
  onClose,
  visible,
  consultationTermId,
}: Props) => {
  const [meetData, setMeetData] = useState<JitsyData | null>(null);
  const [loading, setLoading] = useState(false);
  const { generateConsultationJitsy } = useContext(EscolaLMSContext);

  useEffect(() => {
    const getMeetUrl = async () => {
      setLoading(true);
      const res = await generateConsultationJitsy(consultationTermId);
      if (res.success) {
        setMeetData((res as { data: JitsyData }).data);
      }
      setLoading(false);
    };

    getMeetUrl();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Modal
      onClose={onClose}
      visible={visible}
      animation="zoom"
      maskAnimation="fade"
      destroyOnClose={true}
      width="100vw"
      height="100vh"
      bodyStyle={{
        minHeight: "93vh",
      }}
    >
      <ConsultationMeetModalStyles>
        {loading && <ContentLoader />}
        {!loading && meetData && (
          <iframe title={meetData.data.roomName} src={meetData.url} />
        )}
      </ConsultationMeetModalStyles>
    </Modal>
  );
};

export default ConsultationMeetModal;
