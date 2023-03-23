import { useContext } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import EventProvider from "@/components/Event/EventProvider";
import Layout from "@/components/_App/Layout";
import Container from "@/components/Container";
import EventContainer from "@/components/Event/EventContainer";
import EventRelatedEvents from "@/components/Event/EventRelatedEvents";

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
