import styled from "styled-components";
import { API } from "@escolalms/sdk/lib";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";

const ConsultationTutorCardContentUserInfoStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 65px;
  margin-bottom: 5px;
  .text {
    margin: 0;
    font-size: 14px;
  }
`;

interface Props {
  consultation: API.AppointmentTerm;
}

const ConsultationTutorCardContentUserInfo = ({ consultation }: Props) => {
  return (
    <ConsultationTutorCardContentUserInfoStyles>
      {/* @ts-ignore add to sdk TODO: */}
      {consultation.users.map((user) => (
        <div key={user.id}>
          <Text className="text">
            {user.first_name} {user.last_name}
          </Text>
          <Text className="text">{user.email}</Text>
          <Text className="text">{user.phone}</Text>
          <hr />
        </div>
      ))}
    </ConsultationTutorCardContentUserInfoStyles>
  );
};

export default ConsultationTutorCardContentUserInfo;
