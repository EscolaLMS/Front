import React from "react";
import CategoriesSection from "../../../Categories/CategoriesSection";
import ConsultationsContainerItems from "./Items";
import CoursesFilters from "@/components/Courses/CoursesCollection/filters";
import { MobileDrawerTypes } from "@/components/Courses/CoursesCollection";
import useFilter from "@/hooks/courses/useFilter";
import SelectedCategories from "@/components/Filters/SelectedCategories";
import { API } from "@escolalms/sdk/lib";
import MobileDrawer from "@/components/_App/MobileDrawer";
import MobileDrawerContent from "@/components/Courses/CoursesCollection/coursesDrawer";

const ConsultationsContainer = () => {
  const [mobileDrawerState, setMobileDrawerState] = React.useState<{
    showDrawer: boolean;
    type: keyof typeof MobileDrawerTypes;
  }>({
    showDrawer: false,
    type: MobileDrawerTypes.categories,
  });
  const {
    entities,
    loading,
    prevCategories,
    handleSortChange,
    handlePageChange,
    handleRemoveCategory,
    handleCategoryChange,
    onClearCategories,
    params,
    categoryTree,
  } = useFilter("consultations");

  return (
    <>
      <CoursesFilters
        prevCategories={prevCategories}
        onClearCategories={onClearCategories}
        handleCategoryChange={handleCategoryChange}
        categories={categoryTree.list || []}
        handleSortChange={handleSortChange}
        params={params}
        setMobileDrawerState={setMobileDrawerState}
        parentState={mobileDrawerState}
      />
      {prevCategories.length > 0 && (
        <SelectedCategories
          onClearCategories={onClearCategories}
          prevCategories={prevCategories}
          handleRemoveCategory={handleRemoveCategory}
        />
      )}

      <ConsultationsContainerItems
        consultations={
          (entities as API.PaginatedMetaList<API.Consultation>) || []
        }
        loading={loading}
        handlePageChange={handlePageChange}
      />

      {categoryTree && (
        <>
          <CategoriesSection
            categories={
              categoryTree.list?.filter((category) => !!category.icon) || []
            }
          />
        </>
      )}

      <MobileDrawer
        isOpen={mobileDrawerState.showDrawer}
        onClose={() =>
          setMobileDrawerState({
            showDrawer: false,
            type: MobileDrawerTypes.categories,
          })
        }
        height={
          mobileDrawerState.type === MobileDrawerTypes.categories
            ? "40vh"
            : "12vh"
        }
      >
        <MobileDrawerContent
          showDrawer={mobileDrawerState.showDrawer}
          type={mobileDrawerState.type}
          prevCategories={prevCategories}
          onClearCategories={onClearCategories}
          handleCategoryChange={handleCategoryChange}
          categories={categoryTree.list || []}
          handleSortChange={handleSortChange}
          setMobileDrawerState={setMobileDrawerState}
        />
      </MobileDrawer>
    </>
  );
};

export default ConsultationsContainer;
