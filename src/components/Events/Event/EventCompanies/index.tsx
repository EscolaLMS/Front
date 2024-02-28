import { useContext } from "react";
import { useTranslation } from "react-i18next";
import ResponsiveImage from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { EventCompaniesStyles } from "./EventCompaniesStyles";

const EventCompanies = () => {
  const { settings } = useContext(EscolaLMSContext);
  const { t } = useTranslation();

  return (
    <EventCompaniesStyles>
      <section className="event-companies">
        <Text>
          <strong>{t("CoursePage.CompaniesTitle")}</strong>
        </Text>
        <div className="companies-row">
          {settings &&
            settings.value.courseLogos &&
            Object.values(settings.value.courseLogos).map((_, index) => (
              <div className="single-company" key={index}>
                <ResponsiveImage
                  path={settings?.value?.courseLogos[`logo${index + 1}`] || ""}
                  srcSizes={[100, 200, 300]}
                />
              </div>
            ))}
        </div>
      </section>
    </EventCompaniesStyles>
  );
};

export default EventCompanies;
