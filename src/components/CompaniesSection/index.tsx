import { useContext } from "react";
import ResponsiveImage from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { CompaniesSectionStyles } from "./CompaniesSectionStyles";

interface CompaniesSectionProps {
  title: React.ReactElement | React.ReactElement[];
}

const CompaniesSection = ({ title }: CompaniesSectionProps) => {
  const { settings } = useContext(EscolaLMSContext);

  return (
    <CompaniesSectionStyles>
      <section className="section-companies with-border">
        <Text>
          <strong>{title}</strong>
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
    </CompaniesSectionStyles>
  );
};

export default CompaniesSection;
