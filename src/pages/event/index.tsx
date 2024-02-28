import { useContext } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import EventProvider from "@/components/Events/Event/EventProvider";
import Layout from "@/components/_App/Layout";
import Container from "@/components/Common/Container";
import EventContainer from "@/components/Events/Event/EventContainer";
import EventRelatedEvents from "@/components/Events/Event/EventRelatedEvents";

const EventPage = () => {
  const { stationaryEvent } = useContext(EscolaLMSContext);
  return (
    <Layout metaTitle={stationaryEvent.value?.name}>
      <EventProvider>
        <Container>
          <EventContainer />
        </Container>
        <EventRelatedEvents />
      </EventProvider>
    </Layout>
  );
};

export default EventPage;
