import { useContext } from "react";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Tutor } from "@escolalms/components/lib/components/molecules/Tutor/Tutor";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { EventTutorStyles } from "./EventTutorStyles";
import { API_URL } from "@/config/index";

const EventTutor = () => {
  const { stationaryEvent } = useContext(EscolaLMSContext);
  const { t } = useTranslation();

  const authors = stationaryEvent.value?.product?.authors;

  if (!authors?.length) {
    return null;
  }
  return (
    <EventTutorStyles>
      {/* TODO: change any type */}
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
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
