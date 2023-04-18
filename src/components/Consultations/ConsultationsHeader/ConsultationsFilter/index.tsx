import { useMemo } from "react";
import CategoriesFilter from "@/components/Filters/Categories";
import SearchFilter from "@/components/Filters/Search";
import FiltersTags from "@/components/Filters/Tags";
import { FiltersState } from "@/types/filters";
import { ConsultationsFilterStyles } from "./ConsultationsFilterStyles";
import { useSearchParams } from "../../../../hooks/useSearchParams";

const ConsultationsHeaderFilters = () => {
  const {
    setPathname,
    setQueryParam,
    setQueryArrayParam,
    getAllQueryValueByName,
    getQueryValueByName,
  } = useSearchParams();
  const filters: FiltersState = useMemo(
    () => ({
      categories:
        getAllQueryValueByName("categories[]").map((val) => Number(val)) || [],
      name: getQueryValueByName("name") || "",
    }),
    [getAllQueryValueByName, getQueryValueByName]
  );

  return (
    <ConsultationsFilterStyles>
      <div className="tags">
        <FiltersTags
          filters={filters}
          onReset={() => {
            setPathname();
          }}
        />
      </div>
      <div className="selects-row">
        <div className="single-select single-select--search">
          <SearchFilter
            onSubmit={(value) => {
              setQueryParam("name", value);
            }}
          />
        </div>
        <div className="single-select single-select--category">
          <CategoriesFilter
            selectedCategories={getAllQueryValueByName("categories[]")?.map(
              (catNumber) => Number(catNumber)
            )}
            handleChange={(categories) => {
              setQueryArrayParam("categories[]", categories);
            }}
          />
        </div>
      </div>
    </ConsultationsFilterStyles>
  );
};

export default ConsultationsHeaderFilters;
