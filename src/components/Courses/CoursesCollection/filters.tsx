import React from "react";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import {
  DropdownCategories,
  DropdownMenu,
} from "@escolalms/components/lib/index";
import { isMobile } from "react-device-detect";
import styled from "styled-components";
import { ArrowDown, IconSquares } from "@/icons/index";
import { Category, CourseParams } from "@escolalms/sdk/lib/types";
import {
  MobileDrawerTypes,
  SortOrder,
} from "@/components/Courses/CoursesCollection";
import { DropdownMenuItem } from "@escolalms/components/lib/components/molecules/DropdownMenu/DropdownMenu";
import { useTranslation } from "react-i18next";

const FiltersHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  p {
    margin: 0px;
  }

  @media (max-width: 335px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const SortWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  p {
    margin: unset;
  }
  svg {
    margin-left: 5px;
    margin-top: -2px;
  }
`;

const DropdownCategoriesButton = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  .icon-squares {
    width: 11px;
    height: 11px;
    path {
      fill: ${({ theme }) => theme.primaryColor};
    }
  }
`;

type Props = {
  prevCategories: Category[];
  onClearCategories: () => void;
  handleCategoryChange: (category: Category) => void;
  categories: Category[];
  handleSortChange: (type: SortOrder) => void;
  params: CourseParams | undefined;
  setMobileDrawerState: (state: {
    showDrawer: boolean;
    type: keyof typeof MobileDrawerTypes;
  }) => void;
  parentState: {
    showDrawer: boolean;
    type: keyof typeof MobileDrawerTypes;
  };
};

const CoursesFilters: React.FC<Props> = ({
  prevCategories,
  onClearCategories,
  handleCategoryChange,
  categories,
  handleSortChange,
  params,
  setMobileDrawerState,
  parentState,
}) => {
  const { t } = useTranslation();

  return (
    <FiltersHeader>
      {isMobile ? (
        <DropdownCategoriesButton
          onClick={() =>
            setMobileDrawerState({
              showDrawer: !parentState.showDrawer,
              type: MobileDrawerTypes.categories,
            })
          }
        >
          <IconSquares />
          <Text size="16">{t("CoursesPage.showByCategory")}</Text>
          <ArrowDown />
        </DropdownCategoriesButton>
      ) : (
        <DropdownCategories
          checkedCategories={prevCategories}
          onClear={onClearCategories}
          onChange={handleCategoryChange}
          categories={categories || []}
          child={
            <DropdownCategoriesButton>
              <IconSquares />
              <Text size="16">{t("CoursesPage.showByCategory")}</Text>
              <ArrowDown />
            </DropdownCategoriesButton>
          }
        />
      )}

      <SortWrapper>
        <Text
          onClick={() =>
            isMobile &&
            setMobileDrawerState({
              showDrawer: !parentState.showDrawer,
              type: MobileDrawerTypes.sort,
            })
          }
        >
          {t("CoursesPage.sort")} {isMobile && <ArrowDown />}
        </Text>
        {!isMobile && (
          <DropdownMenu
            top={10}
            menuItems={[
              {
                id: "DESC",
                content: t("CoursesPage.newOnes"),
              },
              {
                id: "ASC",
                content: t("CoursesPage.oldOnes"),
              },
            ]}
            onChange={(e: DropdownMenuItem) =>
              handleSortChange(String(e.id) as SortOrder)
            }
            child={
              <Text>
                {params && params.order === "DESC"
                  ? t("CoursesPage.newOnes")
                  : t("CoursesPage.oldOnes")}
                <ArrowDown />
              </Text>
            }
          />
        )}
      </SortWrapper>
    </FiltersHeader>
  );
};

export default CoursesFilters;
