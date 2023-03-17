import { CourseCard } from "@escolalms/components/lib/components/molecules/CourseCard/CourseCard";
import { Link, useHistory } from "react-router-dom";
import { ResponsiveImage } from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import CourseImgPlaceholder from "@/components/CourseImgPlaceholder";
import { IconText } from "@escolalms/components/lib/components/atoms/IconText/IconText";
import { IconTime } from "../../icons";
import { getPriceWithTax } from "@/utils/index";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import React from "react";
import { API } from "@escolalms/sdk/lib";
import { useTranslation } from "react-i18next";
import { formatDate } from "@/utils/date";
import { APP_CONFIG } from "@/config/app";

interface ConsultationCardProps {
  consultation: API.Consultation;
}

const ConsultationCard: React.FC<ConsultationCardProps> = (props) => {
  const { consultation } = props;
  const history = useHistory();
  const { t } = useTranslation();
  const isEnded = consultation.is_ended;
  const isStarted = consultation.is_started;

  return (
    <CourseCard
      id={consultation.id}
      image={
        <Link to={`/consultations/${consultation.id}`}>
          {consultation.image_path ? (
            <ResponsiveImage
              path={consultation.image_path}
              alt={consultation.name}
              srcSizes={[300, 600, 900]}
            />
          ) : (
            <CourseImgPlaceholder />
          )}
        </Link>
      }
      title={`${consultation.name}`}
      footer={
        <React.Fragment>
          <IconText
            icon={<IconTime />}
            text={
              isEnded ? (
                <>
                  {`${t("ConsultationPage.Finished")}: ${formatDate(
                    consultation.active_to,
                    APP_CONFIG.defaultDateTimeFormat
                  )}`}
                </>
              ) : (
                <>
                  {consultation.duration}
                  {consultation.product &&
                    ` - ${getPriceWithTax(
                      consultation.product.price,
                      consultation.product.tax_rate
                    )} zł`}
                </>
              )
            }
          />
        </React.Fragment>
      }
      actions={
        !isEnded && (
          <Button
            mode="secondary"
            onClick={() => history.push(`/consultations/${consultation.id}`)}
            block
          >
            {isStarted
              ? t("ConsultationPage.Join")
              : t("ConsultationPage.Book")}
          </Button>
        )
      }
    />
  );
};

export default ConsultationCard;
