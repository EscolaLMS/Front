import { Button } from "@escolalms/components";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";
import EventsContainerItem from "@/components/Events/EventsContainer/Items/Item";
import { Dispatch, FC, SetStateAction } from "react";
import { API } from "@escolalms/sdk/lib";

interface SlicedFilteredEventsProps {
  filteredList: API.StationaryEvent[] | [];
  showMore: boolean;
  setShowMore: Dispatch<SetStateAction<boolean>>;
}

const SlicedFilteredEvents: FC<SlicedFilteredEventsProps> = ({
  filteredList,
  showMore,
  setShowMore,
}) => {
  const { t } = useTranslation();

  return (
    <Row
      style={{
        gap: "28px 0",
      }}
    >
      {filteredList.slice(0, 6).map((event) => (
        <Col md={4} key={event.id}>
          <EventsContainerItem event={event} />
        </Col>
      ))}
      {filteredList.length > 6 && !showMore && (
        <Col
          sm={12}
          md={12}
          lg={12}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 30,
          }}
        >
          <Button onClick={() => setShowMore(true)} mode="outline">
            {t("MyProfilePage.ShowMore")}
          </Button>
        </Col>
      )}
    </Row>
  );
};

export default SlicedFilteredEvents;
