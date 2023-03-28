import Layout from "@/components/_App/Layout";
import { useTranslation } from "react-i18next";
import Container from "@/components/Container";
import EventsProvider from "@/components/Events/EventsProvider";
import EventsContainer from "@/components/Events/EventsContainer";

const EventsPage = () => {
  const { t } = useTranslation();
  return (
    <Layout metaTitle={t("EventsPage.Events")}>
      <EventsProvider>
        <section className="events-page">
          <Container>
            <EventsContainer />
          </Container>
        </section>
      </EventsProvider>
    </Layout>
  );
};

export default EventsPage;
