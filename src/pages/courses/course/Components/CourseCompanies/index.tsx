import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";

import { useTranslation } from "react-i18next";

import { ResponsiveImage } from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";

import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { useContext } from "react";

export const CourseCompanies = () => {
  const { t } = useTranslation();

  const { settings } = useContext(EscolaLMSContext);

  return (
    <section className="course-companies">
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
  );
};
