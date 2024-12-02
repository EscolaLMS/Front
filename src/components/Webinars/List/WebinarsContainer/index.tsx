import { useContext } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import CategoriesSection from "../../../Categories/CategoriesSection";
import WebinarsHeader from "../WebinarsHeader";
import WebinarsContainerItems from "./Items";

const WebinarsContainer = () => {
  const { categoryTree } = useContext(EscolaLMSContext);

  return (
    <>
      <WebinarsHeader />
      <WebinarsContainerItems />
      {categoryTree && (
        <>
          <CategoriesSection
            categories={
              categoryTree.list?.filter((category) => !!category.icon) || []
            }
            entity="webinars"
          />
        </>
      )}
    </>
  );
};

export default WebinarsContainer;
