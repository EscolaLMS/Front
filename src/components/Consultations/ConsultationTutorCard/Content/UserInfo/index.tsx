import styled from "styled-components";
import { API } from "@escolalms/sdk/lib";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { IconCircleError, IconSuccess } from "@/icons/index";
import IconText from "@escolalms/components/lib/components/atoms/IconText/IconText";
import { useContext } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { useTranslation } from "react-i18next";

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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0px;
  > * {
    cursor: pointer;
  }
`;

interface Props {
  consultation: API.AppointmentTerm;
}

const ConsultationTutorCardContentUserInfo = ({ consultation }: Props) => {
  const { approveConsultationTerm, rejectConsultationTerm } =
    useContext(EscolaLMSContext);
  const { t } = useTranslation();
  console.log(consultation);

  return (
    <ConsultationTutorCardContentUserInfoStyles>
      {consultation.users.map((user) => (
        <div key={user.id}>
          <Text className="text">
            {user.first_name} {user.last_name}
          </Text>
          <Text className="text">{user.email}</Text>
          <Text className="text">{user.phone}</Text>

          <ButtonWrapper>
            <IconText
              icon={<IconSuccess />}
              text={t("Confirm")}
              onClick={() =>
                approveConsultationTerm(
                  consultation.consultation_term_id,
                  consultation.date,
                  user.id
                )
              }
            />
            <IconText
              icon={<IconCircleError />}
              text={t("Cancel")}
              onClick={() =>
                rejectConsultationTerm(
                  consultation.consultation_term_id,
                  consultation.date,
                  user.id
                )
              }
            />
          </ButtonWrapper>
          <hr />
        </div>
      ))}
    </ConsultationTutorCardContentUserInfoStyles>
  );
};

export default ConsultationTutorCardContentUserInfo;
