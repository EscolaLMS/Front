import React, { useContext, useEffect, useState } from "react";

import { useLocation, useHistory } from "react-router-dom";
import qs from "query-string";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { PackagesParams } from "@/types/params";
import { PackagesContext } from "../PackagesContext";

const parseParams = (params: PackagesParams = {}) => {
  return qs.stringify(params);
};

const PackagesProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { fetchProducts, products, fetchCategories, fetchTags } =
    useContext(EscolaLMSContext);
  const location = useLocation();
  const { push } = useHistory();

  useEffect(() => {
    // Fetch categories when we start from events page
    fetchCategories();
    fetchTags();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [params, setParams] = useState<PackagesParams | undefined>();

  const getApiParams = (params: PackagesParams = {}): PackagesParams => ({
    page: 1,
    per_page: 8,
    type: "bundle",
    order_by: "created_at",
    order: "DESC",
    ...params,
  });

  useEffect(() => {
    push(`${location.pathname}?${parseParams(params)}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params, location.pathname]);

  useEffect(() => {
    if (
      location.search &&
      location.search.split("?")[1] !== parseParams(params)
    ) {
      const parsedParams = qs.parse(location.search);
      setParams(parsedParams);
      fetchProducts(parsedParams || {});
    } else {
      fetchProducts(getApiParams(params));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  return (
    <PackagesContext.Provider value={{ params, setParams, packages: products }}>
      {children}
    </PackagesContext.Provider>
  );
};

export default PackagesProvider;
