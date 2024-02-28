import styled from "styled-components";
import { API } from "@escolalms/sdk/lib";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";

const ConsultationTutorCardContentUserInfoStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 65px;

  .text {
    margin: 0;
    font-size: 14px;
  }
`;

interface Props {
  consultation: API.AppointmentTerm;
}

const ConsultationTutorCardContentUserInfo = ({ consultation }: Props) => {
  const { first_name, last_name, email, phone } = consultation.user;

  return (
    <ConsultationTutorCardContentUserInfoStyles>
      <Text className="text">
        {first_name} {last_name}
      </Text>
      <Text className="text">{email}</Text>
      <Text className="text">{phone}</Text>
    </ConsultationTutorCardContentUserInfoStyles>
  );
};

export default ConsultationTutorCardContentUserInfo;
