import { useContext } from "react";
import { EventsContext } from "@/components/Events/EventsContext";
import { Spin } from "@escolalms/components/lib/components/atoms/Spin/Spin";
import { useTheme } from "styled-components";
import { Col, Row } from "react-grid-system";
import EventsContainerItem from "./Item";
import Pagination from "@/components/Pagination";

const EventsContainerItems = () => {
  const { params, setParams, events } = useContext(EventsContext);
  const eventLoading = events?.loading;
  const eventsMeta = events?.list?.meta;
  const theme = useTheme();

  if (eventLoading) {
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
        {events?.list?.data.map((event) => (
          <Col md={6} lg={4} xl={3} key={event.id}>
            <EventsContainerItem event={event} />
          </Col>
        ))}
      </Row>
      {eventsMeta &&
        (events?.list?.meta?.total || 0) >
          (events?.list?.meta?.per_page || 0) && (
          <Pagination
            total={eventsMeta.total}
            perPage={Number(eventsMeta.per_page)}
            currentPage={eventsMeta.current_page}
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

export default EventsContainerItems;
