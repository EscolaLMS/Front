import { useContext } from "react";
import { WebinarsContext } from "@/components/Webinars/WebinarsContext";
import { Spin } from "@escolalms/components/lib/components/atoms/Spin/Spin";
import { useTheme } from "styled-components";
import { Col, Row } from "react-grid-system";
import WebinarsContainerItem from "./Item";
import Pagination from "@/components/Pagination";

const WebinarsContainerItems = () => {
  const { params, setParams, webinars } = useContext(WebinarsContext);
  const loading = webinars?.loading;
  const meta = webinars?.list?.meta;
  const theme = useTheme();

  if (loading) {
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
        }}
      >
        {webinars?.list?.data.map((webinar) => (
          <Col md={6} lg={4} xl={3} key={webinar.id}>
            <WebinarsContainerItem webinar={webinar} />
          </Col>
        ))}
      </Row>
      {meta &&
        (Number(webinars?.list?.meta?.total) || 0) >
          (Number(webinars?.list?.meta?.per_page) || 0) && (
          <Pagination
            total={meta.total}
            perPage={Number(meta.per_page)}
            currentPage={meta.current_page}
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

export default WebinarsContainerItems;
