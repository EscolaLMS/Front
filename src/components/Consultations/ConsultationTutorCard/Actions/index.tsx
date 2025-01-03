import { useContext, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { API } from "@escolalms/sdk/lib";
import IconText from "@escolalms/components/lib/components/atoms/IconText/IconText";
import { IconCircleError, IconMenuVertical, IconSuccess } from "@/icons/index";
import DropdownMenu from "@escolalms/components/lib/components/molecules/DropdownMenu/DropdownMenu";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";

interface Props {
  consultation: API.AppointmentTerm;
}

const ConsultationTutorCardButtons = ({ consultation }: Props) => {
  const { approveConsultationTerm, rejectConsultationTerm } =
    useContext(EscolaLMSContext);
  const { t } = useTranslation();

  const menuItems = useMemo(
    () => [
      {
        id: 1,
        content: (
          <IconText
            icon={<IconSuccess />}
            text={t("Confirm")}
            onClick={() =>
              approveConsultationTerm(
                consultation?.consultation_term_id,
                consultation.date
              )
            }
          />
        ),
      },
      {
        id: 2,
        content: (
          <IconText
            icon={<IconCircleError />}
            text={t("Cancel")}
            onClick={() =>
              rejectConsultationTerm(
                consultation?.consultation_term_id,
                consultation.date
              )
            }
          />
        ),
      },
    ],
    [
      approveConsultationTerm,
      consultation?.consultation_term_id,
      rejectConsultationTerm,
      t,
      consultation.date,
    ]
  );

  return (
    <DropdownMenu
      menuItems={menuItems}
      child={
        <Button mode="icon">
          <IconMenuVertical />
        </Button>
      }
    />
  );
};

export default ConsultationTutorCardButtons;
