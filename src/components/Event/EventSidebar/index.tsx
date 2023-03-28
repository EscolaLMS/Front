import { useContext } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import EventDetailsSidebar from "@/components/Event/EventDetailsSidebar";
import { EventSidebarStyles } from "./EventSidebarStyles";

const EventSidebar = () => {
  const { stationaryEvent } = useContext(EscolaLMSContext);

  if (!stationaryEvent.value) {
    return null;
  }
  return (
    <EventSidebarStyles>
      <EventDetailsSidebar event={stationaryEvent.value} />
    </EventSidebarStyles>
  );
};

export default EventSidebar;
