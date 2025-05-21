import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";
import { API } from "@escolalms/sdk/lib";
import Button from "@escolalms/components/lib/components/atoms/Button/Button";
import { formatDate } from "@/utils/date";
import { APP_CONFIG } from "@/config/app";
import ModalTitle from "@/components/Common/StyledTitle/ModalTitle";
import InfoBox from "@/components/InfoBox";
import { Tutor } from "@escolalms/components/lib/components/molecules/Tutor/Tutor";
import { API_URL } from "@/config/index";

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
  // @ts-ignore TODO: add to sdk
  const { teachers } = consultation;

  return (
    <>
      <ModalTitle>
        {t("ConsultationPage.SelectedTermOfConsultation")}
      </ModalTitle>
      <InfoBox
        title={t("ConsultationPage.ConsultationTerm")}
        content={formatDate(selectedDate, APP_CONFIG.defaultDateTimeFormat)}
      />
      {/*  @ts-ignore TODO: add to sdk */}
      {teachers.map((teacher) => (
        <InfoBox
          key={teacher?.id}
          title={t("ConsultationPage.Expert")}
          content={
            <Tutor
              mobile={isMobile}
              avatar={{
                alt: `${teacher?.first_name} ${teacher?.last_name}`,
                src:
                  `${API_URL}/api/images/img?path=${teacher?.path_avatar}` ||
                  "",
              }}
              title={<></>}
              fullName={`${teacher?.first_name} ${teacher?.last_name}`}
              rating={{
                ratingValue: 5,
              }}
              // @ts-ignore TODO: add to sdk
              description={teacher?.bio}
            />
          }
        />
      ))}
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
