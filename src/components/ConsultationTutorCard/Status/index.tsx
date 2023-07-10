import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { API } from "@escolalms/sdk/lib";
import Status, { StatusTypes } from "@/components/Status";
import ConsultationTutorCardButtons from "../Actions";

const ConsultationTutorCardStatusStyles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  button > svg {
    width: 24px;
    height: 25px;
  }
`;

interface Props {
  consultation: API.AppointmentTerm;
}

const ConsultationTutorCardStatus = ({ consultation }: Props) => {
  const { status, is_ended } = consultation;
  const { t } = useTranslation();
  const isReported = status === "reported";
  const isApproved = status === "approved";
  const isRejected = status === "reject";

  if (isRejected) {
    return (
      <Status
        status={StatusTypes.CANCELED}
        name={t("ConsultationStatus.Canceled")}
      />
    );
  }
  if (is_ended) {
    return (
      <Status status={StatusTypes.ENDED} name={t("ConsultationStatus.Ended")} />
    );
  }
  if (isReported) {
    return (
      <ConsultationTutorCardStatusStyles>
        <Status
          status={StatusTypes.WAITING}
          name={t("ConsultationStatus.Unconfirmed")}
        />
        <ConsultationTutorCardButtons consultation={consultation} />
      </ConsultationTutorCardStatusStyles>
    );
  }
  if (isApproved) {
    return (
      <Status
        status={StatusTypes.ACCEPTED}
        name={t("ConsultationStatus.Appointment")}
      />
    );
  }
  return <Status status={StatusTypes.DEFAULT} name={status} />;
};

export default ConsultationTutorCardStatus;

// ConsultationStatus: {
//   Unconfirmed: "Unconfirmed",
//   Bought: "Bought",
//   Canceled: "Canceled",
//   Appointment: "Appointment",
// }
