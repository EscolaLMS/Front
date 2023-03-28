import { FC, useContext, useState, useEffect, useMemo } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { API } from "@escolalms/sdk/lib";
import ContentLoader from "@/components/ContentLoader";
import ProfileStationaryEventsNoData from "./NoData";
import SlicedFilteredEvents from "./SlicedFilteredEvents";
import FilteredEvents from "./FilteredEvents";
import { isMobile } from "react-device-detect";

interface ProfileStationaryEventsProps {
  filter: "all" | "inProgress" | "planned" | "finished";
}

const ProfileStationaryEvents: FC<ProfileStationaryEventsProps> = ({
  filter,
}) => {
  const [showMore, setShowMore] = useState(false);
  const [filteredList, setFilteredList] = useState<API.StationaryEvent[] | []>(
    []
  );
  const { userStationaryEvents } = useContext(EscolaLMSContext);
  const list = userStationaryEvents.list;
  const startedEvents = useMemo(
    () => list?.filter((event) => event.is_started),
    [list]
  );
  const finishedEvents = useMemo(
    () => list?.filter((event) => event.is_ended),
    [list]
  );
  const commingEvents = useMemo(
    () => list?.filter((event) => event.in_coming),
    [list]
  );

  useEffect(() => {
    switch (filter) {
      case "all":
        setFilteredList(list || []);
        break;
      case "inProgress":
        setFilteredList(startedEvents || []);
        break;
      case "planned":
        setFilteredList(commingEvents || []);
        break;
      case "finished":
        setFilteredList(finishedEvents || []);
        break;
      default:
        setFilteredList(list || []);
        break;
    }
  }, [commingEvents, filter, finishedEvents, list, startedEvents]);

  if (userStationaryEvents.loading) {
    return <ContentLoader />;
  }
  if (filteredList.length === 0) {
    return <ProfileStationaryEventsNoData />;
  }
  if (!showMore && filteredList && filteredList.length > 6 && !isMobile) {
    return (
      <SlicedFilteredEvents
        filteredList={filteredList}
        showMore={showMore}
        setShowMore={setShowMore}
      />
    );
  }
  return <FilteredEvents filteredList={filteredList} />;
};

export default ProfileStationaryEvents;
