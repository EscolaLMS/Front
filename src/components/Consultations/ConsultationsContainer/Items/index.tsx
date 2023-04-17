import { useContext } from "react";
import { Spin } from "@escolalms/components/lib/components/atoms/Spin/Spin";
import { useTheme } from "styled-components";
import { Col, Row } from "react-grid-system";
import { ConsultationsContext } from "@/components/Consultations/ConsultationsContext";
import ConsultationsContainerItem from "./Item";
import Pagination from "@/components/Pagination";

const ConsultationsContainerItems = () => {
  const { params, setParams, consultations } = useContext(ConsultationsContext);
  const ConsultationsLoading = consultations?.loading;
  const consultationsMeta = consultations?.list?.meta;
  const theme = useTheme();

  if (ConsultationsLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Spin color={theme.primaryColor} />
      </div>
    );
  }

  return (
    <>
      <Row
        style={{
          gap: "30px 0",
          marginBottom: "30px",
        }}
      >
        {consultations?.list?.data.map((consultation) => (
          <Col md={6} lg={4} xl={3} key={consultation.id}>
            <ConsultationsContainerItem consultation={consultation} />
          </Col>
        ))}
      </Row>
      {consultationsMeta &&
        (Number(consultations?.list?.meta?.total) || 0) >
          (Number(consultations?.list?.meta?.per_page) || 0) && (
          <Pagination
            total={consultationsMeta.total}
            perPage={Number(consultationsMeta.per_page)}
            currentPage={consultationsMeta.current_page}
            onPage={(i) =>
              setParams &&
              setParams({
                ...params,
                page: i,
                per_page: 8,
              })
            }
          />
        )}
    </>
  );
};

export default ConsultationsContainerItems;
