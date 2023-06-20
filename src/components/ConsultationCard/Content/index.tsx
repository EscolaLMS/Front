import { t } from "i18next";
import { API } from "@escolalms/sdk/lib";
import { IconText, Tag } from "@escolalms/components";
import { APP_CONFIG } from "@/config/app";
import { formatPrice } from "@/utils/index";
import { addTimeToDate, extractTimeUnits, formatDate } from "@/utils/date";
import { IconTime } from "../../../icons";

interface Props {
  consultation: API.Consultation;
}

const ConsultationCardContent = ({ consultation }: Props) => {
  const isEnded = consultation.is_ended;
  const isReported = consultation.executed_status === "reported";
  const isApproved = consultation.executed_status === "approved";
  const executedDate = formatDate(
    consultation.executed_at,
    APP_CONFIG.defaultDateTimeFormat
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <IconText
        icon={<IconTime />}
        text={
          isEnded && consultation.executed_at ? (
            <>
              {`${t("ConsultationPage.Finished")}: ${formatDate(
                addTimeToDate(
                  consultation.executed_at,
                  extractTimeUnits(`${consultation.duration}`)
                ),
                APP_CONFIG.defaultDateTimeFormat
              )}`}
            </>
          ) : (
            <>
              {consultation.duration}
              {consultation.product &&
                ` - ${formatPrice(
                  consultation.product.price,
                  consultation.product.tax_rate
                )} zł`}
            </>
          )
        }
      />
      {isReported && !isEnded && (
        <Tag>
          {t("ConsultationPage.WaitForTutorDecision", { date: executedDate })}
        </Tag>
      )}
      {isApproved && !isEnded && (
        <Tag>
          {t("ConsultationPage.TutorAcceptedTerm", { date: executedDate })}
        </Tag>
      )}
    </div>
  );
};

export default ConsultationCardContent;
