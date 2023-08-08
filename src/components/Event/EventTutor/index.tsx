import { useContext } from "react";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Tutor, Title } from "@escolalms/components";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { EventTutorStyles } from "./EventTutorStyles";

const API_URL =
  window.REACT_APP_API_URL ||
  (process && process.env && process.env.REACT_APP_PUBLIC_API_URL);

const EventTutor = () => {
  const { stationaryEvent } = useContext(EscolaLMSContext);
  const { t } = useTranslation();
  //@ts-ignore - TODO: fix types in sdk
  const authors = stationaryEvent.value?.product?.authors;

  if (!authors?.length) {
    return null;
  }
  return (
    <EventTutorStyles>
      {/* TODO: change any type */}
      {authors.map((author: any) => (
        <section className="event-tutor with-border padding-right">
          <Link to={`/tutors/${author.id}`}>
            <Tutor
              mobile={isMobile}
              avatar={{
                alt: `${author.first_name} ${author.last_name}`,
                src:
                  `${API_URL}/api/images/img?path=${author.path_avatar}` || "",
              }}
              // TODO: Change rating when will be available from response
              rating={{
                ratingValue: 4.1,
              }}
              title={
                <Title as="h3" level={4} className="title">
                  {t<string>("CoursePage.Teacher")}
                </Title>
              }
              fullName={`${author.first_name} ${author.last_name}`}
              // TODO: Change courses info when will be available from response
              coursesInfo={"8 Curses"}
              description={author.bio}
            />
          </Link>
        </section>
      ))}
    </EventTutorStyles>
  );
};

export default EventTutor;
