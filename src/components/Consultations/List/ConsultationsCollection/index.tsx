import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { StyledHeader, StyledTabs } from "./styles";
import { ConsultationsContext } from "@/components/Consultations/List/ConsultationsContext";
import { useContext } from "react";
import ConsultationsSlider from "@/components/Consultations/ConsultationsSlider";
import { Tabs } from "@escolalms/components/lib/components/atoms/Tabs/Tabs";
import { API } from "@escolalms/sdk/lib";
import ConsultationCard from "@/components/Consultations/ConsultationCard";
import { Col, Row } from "react-grid-system";
import Preloader from "@/components/_App/Preloader";
import { useTranslation } from "react-i18next";

const ConsultationsCollection = () => {
  const { consultations } = useContext(ConsultationsContext);
  const { t } = useTranslation();

  const consultationsCategories = consultations?.list?.data?.map((item) =>
    item?.categories?.reduce(
      (acc: string[], cat: EscolaLms.Categories.Models.Category) =>
        cat.parent_id === null ? [...acc, cat.name] : acc,
      []
    )
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
              //@ts-ignore
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
        label: t("ConsultationPage.ByFields"),
        key: 1,
        component: <ConsultationsLayoutSlider />,
      },
      {
        label: t("ConsultationPage.Alphabetically"),
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
