import { useContext, useEffect, useState, useCallback } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { Category } from "@escolalms/sdk/lib/types/api";
import { useHistory, useLocation } from "react-router-dom";
import qs from "query-string";
import { CoursesContext } from "@/components/Courses/CoursesContext";

type Order = "ASC" | "DESC";

const useCoursesFilter = () => {
  const { courses, params, setParams, loading } = useContext(CoursesContext);
  const { fetchCategories, categoryTree } = useContext(EscolaLMSContext);
  const [prevCategories, setPrevCategories] = useState<Category[]>([]);
  const history = useHistory();
  const location = useLocation();

  const handleSortChange = useCallback(
    (order: Order) => {
      setParams &&
        setParams({
          ...params,
          order,
        });
    },
    [params, setParams]
  );

  const handlePageChange = useCallback(
    (page: number) => {
      setParams &&
        setParams({
          ...params,
          page,
        });
    },
    [params, setParams]
  );

  const handleRemoveCategory = useCallback(
    (id: number) => {
      const removedCategories = prevCategories.filter((item) => item.id !== id);
      setPrevCategories(removedCategories);
      setParams &&
        setParams({
          ...params,
          page: 1,
          "categories[]": removedCategories.map((item) => item.id),
        });
    },
    [params, prevCategories, setParams]
  );

  const handleCategoryChange = useCallback(
    (category: Category) => {
      const newCategories = prevCategories.some(
        (item) => item.id === category.id
      )
        ? prevCategories.filter((item) => item.id !== category.id)
        : [...prevCategories, category];

      setPrevCategories(newCategories);
      setParams &&
        setParams({
          ...params,
          page: 1,
          "categories[]": newCategories.map((item) => item.id),
        });
    },
    [params, prevCategories, setParams]
  );

  const onClearCategories = useCallback(() => {
    setPrevCategories([]);
    setParams &&
      setParams({
        ...params,
        page: 1,
        order: undefined,
        "categories[]": undefined,
      });
  }, [params, setParams]);

  const mapCategories = useCallback((categories: Category[]): Category[] => {
    return categories.flatMap((category) => {
      const subcategoryIds = mapCategories(category.subcategories || []);
      return [category, ...subcategoryIds];
    });
  }, []);

  useEffect(() => {
    const searchParams = qs.parse(location.search);
    const paramsCategories = searchParams["categories[]"];

    if (paramsCategories) {
      const mapedCategories = mapCategories(categoryTree.list || []);
      const selectedCategories = mapedCategories.filter((category: Category) =>
        paramsCategories.includes(String(category.id))
      );
      setPrevCategories(selectedCategories);
    }
  }, [location.search, categoryTree, mapCategories]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  useEffect(() => {
    params && history.push(`${location.pathname}?${qs.stringify(params)}`);
  }, [params, location.pathname, history]);

  return {
    courses,
    loading,
    prevCategories,
    handleSortChange,
    handlePageChange,
    handleRemoveCategory,
    handleCategoryChange,
    onClearCategories,
    params,
    categoryTree,
  };
};

export default useCoursesFilter;
