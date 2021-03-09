import React, {
  ReactElement,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";

import { useHistory, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
import { IRootState } from "../../../interfaces/redux";

import { ICategoriesState } from "../../../redux/categories/reducer";

import queryString from "query-string";
import routes from "../../Routes/routes";
import Icon from "../../Icon";
import { Input } from "../../FormElements/Inputs";
import Select, { IOption } from "../../FormElements/Select";

import "./index.scss";

const CoursesSearch: React.FC = (): ReactElement => {
  const history = useHistory();
  const location = useLocation();

  const categories: ICategoriesState = useSelector<
    IRootState,
    ICategoriesState
  >((state): ICategoriesState => state.Categories);

  const [inputValue, setInputValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const qData = useMemo(() => {
    return queryString?.parse(location?.search);
  }, [location]);

  const options = useMemo(() => {
    if (categories?.list?.length > 0) {
      return [
        { value: "", label: "All categories" },
        ...categories.list.map((category) => {
          return {
            value: category.id,
            label: category.name,
            parent: category.parent_id,
          };
        }),
      ];
    }
    return [];
  }, [categories]);

  const onReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setInputValue("");
    setSelectedCategory("");
    history.push(routes.courses);
  };

  const handleSubmit = useCallback(
    (e?: React.FormEvent<HTMLFormElement>) => {
      e && e.preventDefault();
      history.push(
        `/courses?${inputValue ? `query=${inputValue}` : ""}${
          selectedCategory
            ? `${inputValue ? "&" : ""}category=${selectedCategory}`
            : ""
        }`
      );
    },
    [inputValue, selectedCategory]
  );

  useEffect((): void => {
    if (qData?.query || qData?.category) {
      typeof qData?.query === "string" &&
        inputValue !== qData?.query &&
        setInputValue(qData?.query);
      typeof qData?.category === "string" &&
        selectedCategory !== qData?.category &&
        setSelectedCategory(qData?.category);
    }
  }, [qData]);

  return (
    <div className="courses-search">
      <form onSubmit={handleSubmit} className="courses-search__content">
        <Select
          data={options}
          selected={selectedCategory}
          loading={categories.loading}
          onSelect={(option: IOption) =>
            setSelectedCategory(option.value.toString())
          }
        />
        <Input
          className="input"
          id="search"
          name="search"
          type="text"
          onChange={(e) => setInputValue(e.currentTarget.value)}
          value={inputValue ? inputValue : ""}
          placeholder="I’m looking for..."
        />
        {qData?.query || qData?.category ? (
          <button type="button" onClick={(e) => onReset(e)}>
            <Icon name="close-with-background" color="gray" />
          </button>
        ) : (
          <button type="submit">
            <Icon name="search" color="black" />
          </button>
        )}
      </form>
    </div>
  );
};

export default CoursesSearch;
