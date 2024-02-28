import styled from "styled-components";
import { API } from "@escolalms/sdk/lib";
import ConsultationTutorCardContentUserInfo from "./UserInfo";
import ConsultationTutorCardContentDateInfo from "./DateInfo";
import TimeInfo from "@/components/Common/TimeInfo";

const ConsultationTutorCardContentStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
`;

interface Props {
  consultation: API.AppointmentTerm;
}

const ConsultationTutorCardContent = ({ consultation }: Props) => {
  return (
    <ConsultationTutorCardContentStyles>
      <ConsultationTutorCardContentUserInfo consultation={consultation} />
      <TimeInfo time={consultation.duration} />
      <ConsultationTutorCardContentDateInfo consultation={consultation} />
    </ConsultationTutorCardContentStyles>
  );
};

export default ConsultationTutorCardContent;
