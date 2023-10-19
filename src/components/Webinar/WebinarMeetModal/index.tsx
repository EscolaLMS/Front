import { useContext, useEffect, useState } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { Modal } from "@escolalms/components/lib/components/atoms/Modal/Modal";
import { JitsyData } from "@escolalms/sdk/lib/types/api";
import ContentLoader from "@/components/ContentLoader";
import { WebinarMeetModalStyles } from "./WebinarMeetModalStyles";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

interface Props {
  onClose: () => void;
  visible: boolean;
  webinarId: number;
}

const WebinarMeetModal = ({ onClose, visible, webinarId }: Props) => {
  const [webinarMeetData, setWebinarMeetData] = useState<JitsyData | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const { generateWebinarJitsy } = useContext(EscolaLMSContext);
  const { t } = useTranslation();

  useEffect(() => {
    const getMeetUrl = async () => {
      setLoading(true);
      if (webinarId) {
        const res = await generateWebinarJitsy(webinarId);
        if (res.success) {
          setWebinarMeetData((res as { data: JitsyData }).data);
        }
        if (!res.success) {
          toast.error(t("WebinarPage.ErrorWhileGeneratingUrl"));
          onClose();
        }
      }
      setLoading(false);
    };

    getMeetUrl();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [webinarId]);

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
      <WebinarMeetModalStyles>
        {loading && <ContentLoader />}
        {!loading && webinarMeetData && (
          <iframe
            title={webinarMeetData.data.roomName}
            src={webinarMeetData.url}
          />
        )}
      </WebinarMeetModalStyles>
    </Modal>
  );
};

export default WebinarMeetModal;
