import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";
import { API } from "@escolalms/sdk/lib";
import Button from "@escolalms/components/lib/components/atoms/Button/Button";
import { formatDate } from "@/utils/date";
import { APP_CONFIG } from "@/config/app";
import ModalTitle from "@/components/StyledTitle/ModalTitle";
import InfoBox from "@/components/InfoBox";
import { Tutor } from "@escolalms/components/lib/components/molecules/Tutor/Tutor";

const API_URL =
  window.REACT_APP_API_URL ||
  (process && process.env && process.env.REACT_APP_PUBLIC_API_URL);

interface Props {
  consultation: API.Consultation;
  selectedDate: Date | null;
  onClick: () => void;
  loading: boolean;
}

const SelectedTermContent = ({
  consultation,
  selectedDate,
  onClick,
  loading,
}: Props) => {
  const { t } = useTranslation();
  const { author } = consultation;

  return (
    <>
      <ModalTitle>
        {t("ConsultationPage.SelectedTermOfConsultation")}
      </ModalTitle>
      <InfoBox
        title={t("ConsultationPage.ConsultationTerm")}
        content={formatDate(selectedDate, APP_CONFIG.defaultDateTimeFormat)}
      />
      <InfoBox
        title={t("ConsultationPage.Expert")}
        content={
          <Tutor
            mobile={isMobile}
            avatar={{
              alt: `${author.first_name} ${author.last_name}`,
              src: `${API_URL}/api/images/img?path=${author.path_avatar}` || "",
            }}
            title={<></>}
            fullName={`${author.first_name} ${author.last_name}`}
            rating={{
              ratingValue: 5,
            }}
            description={author.bio}
          />
        }
      />
      <Button
        mode="secondary"
        onClick={onClick}
        block
        disabled={!selectedDate}
        loading={loading}
      >
        {t("ConsultationPage.Book")}
      </Button>
    </>
  );
};

export default SelectedTermContent;
