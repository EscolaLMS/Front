import { FC } from "react";
import { useTranslation } from "react-i18next";
import Search from "@escolalms/components/lib/components/molecules/Search/Search";
// import { FiltersContext } from "@/components/Filters/FiltersProvider";

interface SearchFilterProps {
  onSubmit: (value: string) => void;
}

const SearchFilter: FC<SearchFilterProps> = ({ onSubmit }) => {
  const { t } = useTranslation();

  return <Search placeholder={t("Filters.Search")} onSubmit={onSubmit} />;
};

export default SearchFilter;
