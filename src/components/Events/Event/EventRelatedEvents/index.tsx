import { useContext } from "react";
import { Container, Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { EventRelatedStyles } from "./EventRelatedEvents";
import Slider from "@/components/Slider";
import CourseCardWrapper from "@/components/Courses/CourseCardWrapper";
import EventsContainerItem from "@/components/Events/List/EventsContainer/Items/Item";

const EventRelatedEvents = () => {
  const { stationaryEvents } = useContext(EscolaLMSContext);
  const { t } = useTranslation();
  const data = stationaryEvents.list?.data;

  return (
    <EventRelatedStyles>
      <section className="event-related-events">
        <Container>
          <div className="content-container">
            <Title level={4} as="h2">
              {t("CoursePage.RelatedCoursesTitle")}
            </Title>
            {data && data.length > 4 ? (
              <Slider
                nodes={data.map((event) => (
                  <CourseCardWrapper key={event.id}>
                    <EventsContainerItem event={event} />
                  </CourseCardWrapper>
                ))}
              />
            ) : (
              <Row
                style={{
                  marginTop: "30px",
                  rowGap: "60px",
                }}
              >
                {data?.map((event) => (
                  <Col md={6} lg={3} key={event.id}>
                    <CourseCardWrapper>
                      <EventsContainerItem event={event} />
                    </CourseCardWrapper>
                  </Col>
                ))}
              </Row>
            )}
          </div>
          <div className="content-container">
            <Title level={4} as="h2">
              {t("CoursePage.InterestTitle")}
            </Title>
            {data && data.length > 4 ? (
              <Slider
                nodes={data.map((event) => (
                  <CourseCardWrapper key={event.id}>
                    <EventsContainerItem event={event} />
                  </CourseCardWrapper>
                ))}
              />
            ) : (
              <Row
                style={{
                  marginTop: "30px",
                  rowGap: "60px",
                }}
              >
                {data?.map((event) => (
                  <Col md={6} lg={3} key={event.id}>
                    <CourseCardWrapper>
                      <EventsContainerItem event={event} />
                    </CourseCardWrapper>
                  </Col>
                ))}
              </Row>
            )}
          </div>
        </Container>
      </section>
    </EventRelatedStyles>
  );
};

export default EventRelatedEvents;
