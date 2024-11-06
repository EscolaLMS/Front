import React from "react";
import Pagination from "@/components/Common/Pagination";
import MobileDrawer from "@/components/_App/MobileDrawer";
import CoursesList from "@/components/Courses/CoursesCollection/list";
import MobileDrawerContent from "@/components/Courses/CoursesCollection/coursesDrawer";
import CoursesFilters from "@/components/Courses/CoursesCollection/filters";
import useFilter from "@/hooks/courses/useFilter";
import SelectedCategories from "@/components/Filters/SelectedCategories";
import { API } from "@escolalms/sdk/lib";

export type SortOrder = "ASC" | "DESC";

export enum MobileDrawerTypes {
  categories = "categories",
  sort = "sort",
}

const CoursesCollection: React.FC = () => {
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
  } = useFilter("courses");

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

      <CoursesList
        courses={(entities?.data as API.Course[]) || []}
        loading={loading}
      />

      {Number(entities?.meta?.total) > Number(entities?.meta?.per_page) && (
        <Pagination
          total={Number(entities?.meta?.total)}
          perPage={Number(entities?.meta?.per_page)}
          currentPage={Number(entities?.meta?.current_page)}
          onPage={handlePageChange}
        />
      )}
    </>
  );
};

export default CoursesCollection;
