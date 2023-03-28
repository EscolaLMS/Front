import { useContext } from "react";
import { Row, Col } from "react-grid-system";

import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import Loader from "@/components/Preloader";

import EventBreadcrumbs from "@/components/Event/EventBreadcrumbs";
import EventInfo from "@/components/Event/EventInfo";
import EventSidebar from "@/components/Event/EventSidebar";
import EventTutor from "@/components/Event/EventTutor";
import EventCompanies from "@/components/Event/EventCompanies";
import EventDescription from "@/components/Event/EventDescription";

import { EventContainerStyles } from "./EventContainerStyles";
import EventAgenda from "@/components/Event/EventAgenda";

const EventContainer = () => {
  const { stationaryEvent } = useContext(EscolaLMSContext);

  if (stationaryEvent.loading || !stationaryEvent.value) {
    return <Loader />;
  }
  return (
    <EventContainerStyles>
      <Row>
        <Col md={12} lg={9}>
          <EventBreadcrumbs />
          <EventInfo />
          <EventCompanies />
          <EventTutor />
          <EventDescription />
          <EventAgenda />
        </Col>
        <Col md={12} lg={3}>
          <EventSidebar />
        </Col>
      </Row>
    </EventContainerStyles>
  );
};
export default EventContainer;
