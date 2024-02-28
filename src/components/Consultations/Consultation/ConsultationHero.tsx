import { Col, Row } from "react-grid-system";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { isMobile } from "react-device-detect";
import { StyledTags } from "@/components/Consultations/Consultation/style";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { ResponsiveImage } from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import React from "react";
import { Consultation } from "@escolalms/sdk/lib/types/api";

interface ConsultationHeroProps {
  consultation: Consultation | undefined;
}

const ConsultationHero: React.FC<ConsultationHeroProps> = (props) => {
  const { consultation } = props;

  return (
    <Row align={"center"}>
      <Col lg={7}>
        <Title mobile={isMobile} level={2}>
          {consultation?.name}
        </Title>
        {consultation?.categories && consultation.categories.length > 0 && (
          <StyledTags>
            {consultation.categories.map(
              (category: EscolaLms.Categories.Models.Category) => (
                <Button mode="outline">{category.name}</Button>
              )
            )}
          </StyledTags>
        )}
      </Col>
      <Col lg={4}>
        {consultation?.image_path && (
          <div className="image-wrapper">
            <ResponsiveImage
              path={consultation.image_path}
              srcSizes={[790 * 0.5, 790, 2 * 790]}
            />
          </div>
        )}
      </Col>
    </Row>
  );
};

export default ConsultationHero;
