import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { API } from "@escolalms/sdk/lib";
import { addTimeToDate, extractTimeUnits, formatDate } from "@/utils/date";
import DateInfo, { DateInfoTypes } from "@/components/DateInfo";
import ConsultationCardJoinButton from "@/components/ConsultationCard/Buttons/JoinButton";

const ConsultationTutorCardContentDateInfoButtonsStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 12px;
`;

interface Props {
  consultation: API.AppointmentTerm;
}

const ConsultationTutorCardContentDateInfo = ({ consultation }: Props) => {
  const { t } = useTranslation();
  const isEnded = consultation.is_ended;
  const isStarted = consultation.is_started;
  const isReported = consultation.status === "reported";
  const isApproved = consultation.status === "approved";
  const isNotReported = consultation.status === "not_reported";
  const isRejected = consultation.status === "reject";

  return (
    <>
      {isEnded && consultation.date && (
        <DateInfo
          type={DateInfoTypes.ENDED}
          date={addTimeToDate(
            consultation.date,
            extractTimeUnits(`${consultation.duration}`)
          )}
        />
      )}
      {isRejected && (
        <DateInfo
          type={DateInfoTypes.ENDED}
          date={addTimeToDate(
            consultation.date,
            extractTimeUnits(`${consultation.duration}`)
          )}
        />
      )}
      {isReported && !isEnded && (
        <DateInfo
          type={DateInfoTypes.WAITING}
          date={consultation.date}
          info={t("ConsultationStatus.UnconfirmedInfo")}
        />
      )}
      {isApproved && !isEnded && (
        <DateInfo
          type={DateInfoTypes.ACCEPTED}
          date={consultation.date}
          info={
            isStarted && consultation.consultation_term_id ? (
              <ConsultationTutorCardContentDateInfoButtonsStyles>
                <ConsultationCardJoinButton
                  consultationTermId={consultation.consultation_term_id}
                />
              </ConsultationTutorCardContentDateInfoButtonsStyles>
            ) : (
              t("ConsultationStatus.AppointmentInfo", {
                date: formatDate(
                  consultation.date,
                  "EEEE, dd LLLL yyyy, HH:mm"
                ),
              })
            )
          }
        />
      )}
      {isNotReported && <DateInfo type={DateInfoTypes.DEFAULT} />}
    </>
  );
};

export default ConsultationTutorCardContentDateInfo;
