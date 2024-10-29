import React from "react";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { useTranslation } from "react-i18next";
import styled, { useTheme } from "styled-components";

import { CloseIcon } from "@/icons/index";

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

type Props = {
  onClearCategories: () => void;
  prevCategories: { id: number; name: string }[];
  handleRemoveCategory: (id: number) => void;
};

const SelectedCategories: React.FC<Props> = ({
  onClearCategories,
  prevCategories,
  handleRemoveCategory,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
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
  );
};

export default SelectedCategories;
