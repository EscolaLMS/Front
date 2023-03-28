import { useContext } from "react";
import qs from "query-string";
import { useLocation } from "react-router-dom";
import { EventsContext } from "@/components/Events/EventsContext";
import CategoriesFilter from "@/components/Filters/Categories";
import SearchFilter from "@/components/Filters/Search";
import FiltersTags from "@/components/Filters/Tags";
import { FiltersState } from "@/types/filters";

const EventsHeaderFilters = () => {
  const { params, setParams } = useContext(EventsContext);
  const location = useLocation();
  const parsedParams = qs.parse(location.search, {
    arrayFormat: "bracket",
    parseNumbers: true,
  });
  const filters: FiltersState = {
    categories: (parsedParams?.category as number[]) || [],
    name: (parsedParams?.name as string) || "",
    tags: (parsedParams?.tags as string[]) || [],
  };

  return (
    <div className="filters">
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
            selectedCategories={(parsedParams?.category as number[]) || []}
            handleChange={(categories) => {
              if (setParams) {
                setParams({
                  ...params,
                  page: 1,
                  // @ts-ignore
                  "category[]": categories,
                });
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default EventsHeaderFilters;
