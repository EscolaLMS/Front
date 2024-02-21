import React from "react";
import { Button, DropdownCategories } from "@escolalms/components/lib/index";
import { Category } from "@escolalms/sdk/lib/types/api";
import { useTranslation } from "react-i18next";
import {
  MobileDrawerTypes,
  SortOrder,
} from "@/components/Courses/CoursesCollection";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

type Props = {
  showDrawer: boolean;
  type: string;
  prevCategories: Category[];
  onClearCategories: () => void;
  handleCategoryChange: (category: Category) => void;
  categories: Category[];
  handleSortChange: (type: SortOrder) => void;
  setMobileDrawerState: (state: {
    showDrawer: boolean;
    type: keyof typeof MobileDrawerTypes;
  }) => void;
};

const MobileDrawerContent: React.FC<Props> = ({
  showDrawer,
  type,
  prevCategories,
  onClearCategories,
  handleCategoryChange,
  categories,
  handleSortChange,
  setMobileDrawerState,
}) => {
  const { t } = useTranslation();

  return (
    <>
      {showDrawer && type === MobileDrawerTypes.categories && (
        <DropdownCategories
          checkedCategories={prevCategories}
          onClear={() => [
            onClearCategories(),
            setMobileDrawerState({
              showDrawer: false,
              type: MobileDrawerTypes.categories,
            }),
          ]}
          onChange={handleCategoryChange}
          categories={categories || []}
          isInitiallyOpen
          forMobile
        />
      )}

      {showDrawer && type === MobileDrawerTypes.sort && (
        <Wrapper>
          <Button
            mode={"secondary outline"}
            onClick={() => {
              handleSortChange("DESC");
              setMobileDrawerState({
                showDrawer: false,
                type: MobileDrawerTypes.sort,
              });
            }}
          >
            {t("CoursesPage.newOnes")}
          </Button>
          <Button
            mode={"secondary outline"}
            onClick={() => {
              handleSortChange("ASC");
              setMobileDrawerState({
                showDrawer: false,
                type: MobileDrawerTypes.sort,
              });
            }}
          >
            {t("CoursesPage.oldOnes")}
          </Button>
        </Wrapper>
      )}
    </>
  );
};

export default MobileDrawerContent;
