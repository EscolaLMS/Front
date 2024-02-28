import React from "react";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { useTranslation } from "react-i18next";
import styled, { useTheme } from "styled-components";
import Pagination from "@/components/Common/Pagination";
import { CloseIcon } from "@/icons/index";

import useCoursesFilter from "@/hooks/courses/useCoursesFIlter";
import MobileDrawer from "@/components/_App/MobileDrawer";
import CoursesList from "@/components/Courses/CoursesCollection/list";
import MobileDrawerContent from "@/components/Courses/CoursesCollection/coursesDrawer";
import CoursesFilters from "@/components/Courses/CoursesCollection/filters";

const SelectedCategoriesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
  margin-top: 17px;
  gap: 5px;
  .clear-categories {
    all: unset;
    cursor: pointer;
    margin-left: 14px;
    p {
      margin: 0;
      color: ${({ theme }) => theme.gray2};
    }
  }
`;

const SelectedCategory = styled.button`
  all: unset;
  border-radius: 19px;
  border: 1px solid #eaeaea;
  padding: 8px 13px;
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  p {
    margin: 0;
    margin-right: 17px;
  }
`;

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
    courses,
    loading,
    prevCategories,
    handleSortChange,
    handlePageChange,
    handleRemoveCategory,
    handleCategoryChange,
    onClearCategories,
    params,
    categoryTree,
  } = useCoursesFilter();

  const theme = useTheme();
  const { t } = useTranslation();

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
        <SelectedCategoriesWrapper>
          {prevCategories.map((category) => (
            <SelectedCategory onClick={() => handleRemoveCategory(category.id)}>
              <Text size={"13"}>{category.name}</Text>
              <CloseIcon color={theme.gray2} />
            </SelectedCategory>
          ))}
          <button className="clear-categories" onClick={onClearCategories}>
            <Text size="13">{t("CoursesPage.clearAll")}</Text>
          </button>
        </SelectedCategoriesWrapper>
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

      <CoursesList courses={courses?.data || []} loading={loading} />

      {Number(courses?.meta?.total) > Number(courses?.meta?.per_page) && (
        <Pagination
          total={Number(courses?.meta?.total)}
          perPage={Number(courses?.meta?.per_page)}
          currentPage={Number(courses?.meta?.current_page)}
          onPage={handlePageChange}
        />
      )}
    </>
  );
};

export default CoursesCollection;
