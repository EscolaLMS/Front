import { useContext, useEffect, useState, useCallback, useMemo } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { Category } from "@escolalms/sdk/lib/types";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";
import { CoursesContext } from "@/components/Courses/CoursesContext";
import { ConsultationsContext } from "@/components/Consultations/List/ConsultationsContext";

type Order = "ASC" | "DESC";
type EntityType = "courses" | "consultations";

const useFilter = (entityType: EntityType = "courses") => {
  const coursesContext = useContext(CoursesContext);
  const consultationsContext = useContext(ConsultationsContext);
  const { fetchCategories, categoryTree } = useContext(EscolaLMSContext);

  const { search, pathname } = useLocation();
  const history = useHistory();
  const [prevCategories, setPrevCategories] = useState<Category[]>([]);

  // Determine entity-specific context based on the entityType
  const { entities, params, setParams, loading } = useMemo(() => {
    if (entityType === "courses") {
      return {
        entities: coursesContext.courses,
        params: coursesContext.params,
        setParams: coursesContext.setParams,
        loading: coursesContext.loading,
      };
    } else {
      return {
        entities: consultationsContext.consultations,
        params: consultationsContext.params,
        setParams: consultationsContext.setParams,
        loading: consultationsContext.loading,
      };
    }
  }, [entityType, coursesContext, consultationsContext]);

  // Category handlers
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

  // Sorting and pagination
  const handleSortChange = useCallback(
    (order: Order) => {
      setParams && setParams({ ...params, order });
    },
    [params, setParams]
  );

  const handlePageChange = useCallback(
    (page: number) => {
      setParams && setParams({ ...params, page });
    },
    [params, setParams]
  );

  // Category mapping
  const mapCategories = useCallback((categories: Category[]): Category[] => {
    return categories.flatMap((category) => [
      category,
      ...mapCategories(category.subcategories || []),
    ]);
  }, []);

  useEffect(() => {
    const searchParams = queryString.parse(search);
    const paramsCategories = searchParams["categories[]"];

    if (paramsCategories) {
      const mappedCategories = mapCategories(categoryTree.list || []);
      const selectedCategories = mappedCategories.filter((category) =>
        (Array.isArray(paramsCategories)
          ? paramsCategories
          : [paramsCategories]
        ).includes(String(category.id))
      );
      setPrevCategories(selectedCategories);
    }
  }, [search, categoryTree, mapCategories]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  useEffect(() => {
    params && history.push(`${pathname}?${queryString.stringify(params)}`);
  }, [params, pathname, history]);

  return {
    entities,
    loading,
    prevCategories,
    handleSortChange,
    handlePageChange,
    handleCategoryChange,
    onClearCategories,
    handleRemoveCategory,
    params,
    categoryTree,
  };
};

export default useFilter;
