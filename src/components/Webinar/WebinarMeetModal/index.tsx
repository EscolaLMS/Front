import { useContext, useEffect, useState } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { Modal } from "@escolalms/components/lib/components/atoms/Modal/Modal";
import { JitsyData } from "@escolalms/sdk/lib/types/api";
import ContentLoader from "@/components/ContentLoader";
import { WebinarMeetModalStyles } from "./WebinarMeetModalStyles";

interface Props {
  onClose: () => void;
  visible: boolean;
}

const WebinarMeetModal = ({ onClose, visible }: Props) => {
  const [webinarMeetData, setWebinarMeetData] = useState<JitsyData | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const {
    webinar: { value: webinarObj },
    generateWebinarJitsy,
  } = useContext(EscolaLMSContext);

  useEffect(() => {
    const getMeetUrl = async () => {
      setLoading(true);
      if (webinarObj?.id) {
        const res = await generateWebinarJitsy(webinarObj.id);
        if (res.success) {
          setWebinarMeetData((res as { data: JitsyData }).data);
        }
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
