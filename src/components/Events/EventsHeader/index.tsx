import { useTranslation } from "react-i18next";
import { Title } from "@escolalms/components";
import EventsHeaderStyles from "./EventsHeaderStyles";
import EventsHeaderFilters from "./Filters";

const EventsHeader = () => {
  const { t } = useTranslation();

  return (
    <EventsHeaderStyles>
      <Title level={1}> {t("EventsPage.Events")}</Title>
      <EventsHeaderFilters />
    </EventsHeaderStyles>
  );
};

export default EventsHeader;
