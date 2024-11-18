import styled from "styled-components";
import { API } from "@escolalms/sdk/lib";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { IconCircleError, IconSuccess } from "@/icons/index";
import IconText from "@escolalms/components/lib/components/atoms/IconText/IconText";
import { useContext } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { useTranslation } from "react-i18next";
import Status, { StatusTypes } from "@/components/Common/Status";

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
  > p {
    padding: 2px;
    border-radius: ${({ theme }) => theme.radius};
    cursor: pointer;

    &:hover {
      font-weight: bold;
    }
  }
`;

interface Props {
  consultation: API.AppointmentTerm;
}

const statuses = {
  reported: {
    type: StatusTypes.WAITING,
    info: "ConsultationStatus.UnconfirmedInfo",
  },
  approved: {
    type: StatusTypes.ACCEPTED,
    info: "ConsultationStatus.ConfirmedInfo",
  },
  reject: {
    type: StatusTypes.ENDED,
    info: "ConsultationStatus.RejectedInfo",
  },
};
type StatusKey = keyof typeof statuses;

const ConsultationTutorCardContentUserInfo = ({ consultation }: Props) => {
  const { approveConsultationTerm, rejectConsultationTerm } =
    useContext(EscolaLMSContext);
  const { t } = useTranslation();

  const renderStatus = (status: StatusKey) => {
    switch (status) {
      case "reported":
        return (
          <Status
            status={StatusTypes.WAITING}
            name={t("ConsultationStatus.Unconfirmed")}
          />
        );
      case "approved":
        return (
          <Status
            status={StatusTypes.ACCEPTED}
            name={t("ConsultationStatus.Appointment")}
          />
        );
      case "reject":
        return (
          <Status
            status={StatusTypes.ENDED}
            name={t("ConsultationStatus.Canceled")}
          />
        );
    }
  };

  return (
    <ConsultationTutorCardContentUserInfoStyles>
      {consultation.users.map((user) => (
        <div key={user.id}>
          <Text className="text">
            {user.first_name} {user.last_name}
          </Text>
          <Text className="text">{user.email}</Text>
          {consultation.users.length > 1 && (
            <>
              {statuses[user.executed_status as StatusKey] &&
                renderStatus(user.executed_status as StatusKey)}
              {
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
              }
            </>
          )}

          <hr />
        </div>
      ))}
    </ConsultationTutorCardContentUserInfoStyles>
  );
};

export default ConsultationTutorCardContentUserInfo;
