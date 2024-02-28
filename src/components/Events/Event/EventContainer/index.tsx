import { useContext } from "react";
import { Row, Col } from "react-grid-system";

import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import Loader from "@/components/_App/Preloader";

import EventBreadcrumbs from "@/components/Events/Event/EventBreadcrumbs";
import EventInfo from "@/components/Events/Event/EventInfo";
import EventSidebar from "@/components/Events/Event/EventSidebar";
import EventTutor from "@/components/Events/Event/EventTutor";
import EventCompanies from "@/components/Events/Event/EventCompanies";
import EventDescription from "@/components/Events/Event/EventDescription";

import { EventContainerStyles } from "./EventContainerStyles";
import EventAgenda from "@/components/Events/Event/EventAgenda";

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
