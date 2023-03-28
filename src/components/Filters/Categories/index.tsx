import { FC, useContext } from "react";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import Categories from "@escolalms/components/lib/components/molecules/Categories/Categories";
import Title from "@escolalms/components/lib/components/atoms/Typography/Title";

interface CategoriesFilterProps {
  selectedCategories: number[];
  handleChange: (categories: number[]) => void;
}

const CategoriesFilter: FC<CategoriesFilterProps> = ({
  selectedCategories,
  handleChange,
}) => {
  const { categoryTree } = useContext(EscolaLMSContext);
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Categories
      mobile={isMobile}
      backgroundColor={theme.primaryColor}
      categories={categoryTree.list || []}
      label={t("Filters.Category")}
      selectedCategories={selectedCategories}
      drawerTitle={
        <Title
          level={5}
          style={{
            fontSize: "14px",
          }}
        >
          {t("Filters.Category")}
        </Title>
      }
      handleChange={handleChange}
    />
  );
};

export default CategoriesFilter;
