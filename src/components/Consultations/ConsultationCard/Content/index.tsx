import styled from "styled-components";
import { API } from "@escolalms/sdk/lib";
import { addTimeToDate, extractTimeUnits } from "@/utils/date";
import DateInfo, { DateInfoTypes } from "@/components/Common/DateInfo";

const ConsultationCardContentStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

interface Props {
  consultation: API.Consultation;
}

const ConsultationCardContent = ({ consultation }: Props) => {
  const isEnded = consultation.is_ended;
  const isReported = consultation.executed_status === "reported";
  const isApproved = consultation.executed_status === "approved";
  const isNotReported = consultation.executed_status === "not_reported";

  return (
    <ConsultationCardContentStyles>
      {isEnded && consultation.executed_at && (
        <DateInfo
          type={DateInfoTypes.ENDED}
          date={addTimeToDate(
            consultation.executed_at,
            extractTimeUnits(`${consultation.duration}`)
          )}
        />
      )}
      {isReported && !isEnded && (
        <DateInfo
          type={DateInfoTypes.WAITING}
          date={consultation.executed_at}
        />
      )}
      {isApproved && !isEnded && (
        <DateInfo
          type={DateInfoTypes.ACCEPTED}
          date={consultation.executed_at}
        />
      )}
      {isNotReported && <DateInfo type={DateInfoTypes.DEFAULT} />}
    </ConsultationCardContentStyles>
  );
};

export default ConsultationCardContent;
