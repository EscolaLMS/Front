import { useContext } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import CategoriesSection from "../../../Categories/CategoriesSection";
import PackagesHeader from "../PackagesHeader";
import PackagesContainerItems from "./Items";

const PackagesContainer = () => {
  const { categoryTree } = useContext(EscolaLMSContext);

  return (
    <>
      <PackagesHeader />
      <PackagesContainerItems />
      {categoryTree && (
        <CategoriesSection
          categories={
            categoryTree.list?.filter((category) => !!category.icon) || []
          }
        />
      )}
    </>
  );
};

export default PackagesContainer;
