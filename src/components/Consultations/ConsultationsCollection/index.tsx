import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { StyledHeader, StyledTabs } from "./styles";
import { ConsultationsContext } from "@/components/Consultations/ConsultationsContext";
import React, { useContext } from "react";
import ConsultationsSlider from "@/components/ConsultationsSlider";
import { Tabs } from "@escolalms/components/lib/components/atoms/Tabs/Tabs";
import { API } from "@escolalms/sdk/lib";
import ConsultationCard from "@/components/ConsultationCard";
import { Col, Row } from "react-grid-system";
import Preloader from "@/components/Preloader";

const ConsultationsCollection = () => {
  const { consultations } = useContext(ConsultationsContext);

  const consultationsCategories = consultations?.list?.data?.map((item) =>
    item?.categories
      ?.filter((cat) => cat.parent_id === null)
      .map((category) => {
        if (category.parent_id === null) {
          return category.name;
        }
      })
  );

  //@ts-ignore
  const mergedCategories = [].concat.apply([], consultationsCategories);
  // @ts-ignore
  const categoriesWithoutDuplicates = [...new Set(mergedCategories)];

  const ConsultationsLayoutGrid = () => {
    return (
      <Row
        style={{
          marginTop: 50,
          gap: "30px 0",
        }}
      >
        {consultations?.list?.data
          .sort((a: API.Consultation, b: API.Consultation) =>
            a.name.localeCompare(b.name)
          )
          .map((consultation: API.Consultation) => (
            <Col key={consultation.id} xs={12} sm={6} md={4} lg={3}>
              <ConsultationCard consultation={consultation} />
            </Col>
          ))}
      </Row>
    );
  };

  const ConsultationsLayoutSlider = () => {
    return (
      <>
        {categoriesWithoutDuplicates &&
          categoriesWithoutDuplicates.map((category) => (
            <ConsultationsSlider
              key={category.id}
              category={category}
              consultations={consultations?.list?.data || []}
            />
          ))}
      </>
    );
  };

  const consultationsTabs = {
    tabs: [
      {
        label: "Według dziedzin",
        key: 1,
        component: <ConsultationsLayoutSlider />,
      },
      {
        label: "Alfabetycznie",
        key: 2,
        component: <ConsultationsLayoutGrid />,
      },
    ],
    defaultActiveKey: 1,
  };

  if (consultations?.loading) {
    return <Preloader />;
  }

  return (
    <>
      <StyledHeader>
        <Title level={1}>Ucz się od najlepszych</Title>
      </StyledHeader>
      <StyledTabs>
        <Tabs
          tabs={consultationsTabs.tabs}
          defaultActiveKey={consultationsTabs.defaultActiveKey}
        />
      </StyledTabs>
    </>
  );
};

export default ConsultationsCollection;
