import { useContext } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import CategoriesSection from "../../CategoriesSection";
import ConsultationsHeader from "../ConsultationsHeader";
import ConsultationsContainerItems from "./Items";

const ConsultationsContainer = () => {
  const { categoryTree } = useContext(EscolaLMSContext);

  return (
    <>
      <ConsultationsHeader />
      <ConsultationsContainerItems />
      {categoryTree && (
        <>
          <CategoriesSection
            categories={
              categoryTree.list?.filter((category) => !!category.icon) || []
            }
          />
        </>
      )}
    </>
  );
};

export default ConsultationsContainer;
