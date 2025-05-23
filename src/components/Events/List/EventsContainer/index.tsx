import { useContext } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import CategoriesSection from "../../../Categories/CategoriesSection";
import EventsHeader from "../EventsHeader";
import EventsContainerItems from "./Items";

const EventsContainer = () => {
  const { categoryTree } = useContext(EscolaLMSContext);

  return (
    <>
      <EventsHeader />
      <EventsContainerItems />
      {categoryTree && (
        <>
          <CategoriesSection
            categories={
              categoryTree.list?.filter((category) => !!category.icon) || []
            }
            entity="events"
          />
        </>
      )}
    </>
  );
};

export default EventsContainer;
