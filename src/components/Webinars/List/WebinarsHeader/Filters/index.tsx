import { useContext, useMemo } from "react";
import qs from "query-string";
import { useLocation } from "react-router-dom";
import { WebinarsContext } from "@/components/Webinars/List/WebinarsContext";
import SearchFilter from "@/components/Filters/Search";
import FiltersTags from "@/components/Filters/Tags";
import { FiltersState } from "@/types/filters";
import { WebinarsFiltersStyles } from "./WebinarsFiltersStyles";
import TagsSelectFilter from "@/components/Filters/TagsSelect";

const WebinarsHeaderFilters = () => {
  const { params, setParams } = useContext(WebinarsContext);
  const location = useLocation();
  const parsedParams = qs.parse(location.search, {
    arrayFormat: "bracket",
    parseNumbers: true,
  });
  const filters: FiltersState = useMemo(
    () => ({
      categories: [],
      name: (parsedParams?.name as string) || "",
      tags: (parsedParams?.tags as string[]) || [],
    }),
    [parsedParams]
  );

  return (
    <WebinarsFiltersStyles>
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
        <div className="single-select single-select--tag">
          <TagsSelectFilter
            selectedTags={parsedParams?.tags as string[]}
            handleChange={(tagName) => {
              if (setParams) {
                setParams({
                  ...params,
                  "tags[]": tagName,
                });
              }
            }}
          />
        </div>
      </div>
    </WebinarsFiltersStyles>
  );
};

export default WebinarsHeaderFilters;
