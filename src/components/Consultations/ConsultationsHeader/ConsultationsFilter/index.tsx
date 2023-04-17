import { useContext, useMemo } from "react";
import qs from "query-string";
import { useLocation } from "react-router-dom";
import { ConsultationsContext } from "@/components/Consultations/ConsultationsContext";
import CategoriesFilter from "@/components/Filters/Categories";
import SearchFilter from "@/components/Filters/Search";
import FiltersTags from "@/components/Filters/Tags";
import { FiltersState } from "@/types/filters";
import { ConsultationsFilterStyles } from "./ConsultationsFilterStyles";

const ConsultationsHeaderFilters = () => {
  const { params, setParams } = useContext(ConsultationsContext);
  const location = useLocation();
  const parsedParams = qs.parse(location.search, {
    arrayFormat: "bracket",
    parseNumbers: true,
  });
  const filters: FiltersState = useMemo(
    () => ({
      categories: (parsedParams?.categories as number[]) || [],
      name: (parsedParams?.name as string) || "",
    }),
    [parsedParams]
  );

  return (
    <ConsultationsFilterStyles>
      <div className="tags">
        <FiltersTags
          filters={filters}
          onReset={() => {
            if (setParams) {
              setParams({
                page: 1,
              });
            }
          }}
        />
      </div>
      <div className="selects-row">
        <div className="single-select single-select--search">
          <SearchFilter
            onSubmit={(value) => {
              if (setParams) {
                const newParams = {
                  ...params,
                  page: 1,
                  name: value,
                };
                setParams({
                  ...newParams,
                });
              }
            }}
          />
        </div>
        <div className="single-select single-select--category">
          <CategoriesFilter
            selectedCategories={(parsedParams?.categories as number[]) || []}
            handleChange={(categories) => {
              if (setParams) {
                setParams({
                  ...params,
                  page: 1,
                  // @ts-ignore
                  "categories[]": categories,
                });
              }
            }}
          />
        </div>
      </div>
    </ConsultationsFilterStyles>
  );
};

export default ConsultationsHeaderFilters;
