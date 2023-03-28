import { useContext } from "react";
import { useTheme } from "styled-components";
import { useTranslation } from "react-i18next";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { Note } from "@escolalms/components/lib/components/atoms/Note/Note";
import Title from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { EventAgendaStyles } from "./EventAgendaStyles";

type Agenda = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  hour: string;
  tutors: number[];
};

const EventAgenda = () => {
  const { stationaryEvent } = useContext(EscolaLMSContext);
  const agenda: Agenda[] = stationaryEvent.value?.agenda as any;
  const theme = useTheme();
  const { t } = useTranslation();
  if (!agenda) {
    return null;
  }
  return (
    <section className="with-border">
      <EventAgendaStyles>
        <Title level={4}>{t("Agenda")}</Title>
        {agenda.map((agendaItem) => (
          <Note
            color={theme.primaryColor}
            description={
              <>
                <Title level={4}>{agendaItem.title}</Title>
                <Title level={5}>{agendaItem.subtitle}</Title>
                <Text>{agendaItem.description}</Text>
              </>
            }
            time={<>{agendaItem.hour}</>}
          />
        ))}
      </EventAgendaStyles>
    </section>
  );
};

export default EventAgenda;
