import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { API } from "@escolalms/sdk/lib";
import { FC, useCallback } from "react";
import { isMobile } from "react-device-detect";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import EventsContainerItem from "../../../Events/EventsContainer/Items/Item";
import { ProfileStationaryEventsMobileStyles } from "../MobileStyles";

interface FilteredEventsProps {
  filteredList: API.StationaryEvent[] | [];
}

const FilteredEvents: FC<FilteredEventsProps> = ({ filteredList }) => {
  const { t } = useTranslation();
  const history = useHistory();

  const actions = useCallback(
    (eventId: number) => (
      <>
        <Button
          mode="secondary"
          onClick={() => history.push(`/event/${eventId}`)}
        >
          {t("Show")}
        </Button>
      </>
    ),
    [history, t]
  );

  if (isMobile) {
    return (
      <ProfileStationaryEventsMobileStyles>
        <div className="slider-wrapper">
          {filteredList &&
            filteredList.map((event) => (
              <div key={event.id} className="single-slide">
                <EventsContainerItem
                  key={event.id}
                  event={event}
                  actions={actions(event.id)}
                />
              </div>
            ))}
        </div>
      </ProfileStationaryEventsMobileStyles>
    );
  }

  return (
    <Row
      style={{
        gap: "28px 0",
      }}
    >
      {filteredList &&
        filteredList.map((event) => (
          <Col md={4} key={event.id}>
            <EventsContainerItem event={event} actions={actions(event.id)} />
          </Col>
        ))}
    </Row>
  );
};

export default FilteredEvents;
