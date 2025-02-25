import { Col, Row } from "react-grid-system";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { isMobile } from "react-device-detect";

import { ResponsiveImage } from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import React from "react";
import { Consultation } from "@escolalms/sdk/lib/types";
import CategoriesBreadCrumbs from "@/components/Categories/CategoriesBreadCrumbs";
import { useHistory } from "react-router-dom";

interface ConsultationHeroProps {
  consultation: Consultation | undefined;
}

const ConsultationHero: React.FC<ConsultationHeroProps> = (props) => {
  const { consultation } = props;
  const history = useHistory();

  return (
    <Row align={"center"}>
      <Col lg={7}>
        {consultation?.categories && consultation.categories.length > 0 && (
          <CategoriesBreadCrumbs
            categories={consultation.categories}
            onCategoryClick={(id) => {
              history.push(`/consultations/?categories[]=${id}`);
            }}
          />
        )}
        <br />
        <Title mobile={isMobile} level={1}>
          {consultation?.name}
        </Title>
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
