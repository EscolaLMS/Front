import { useCallback, useMemo } from "react";
import { useHistory, useLocation } from "react-router-dom";

export const useSearchParams = () => {
  const { search, pathname } = useLocation();
  const history = useHistory();

  const query = useMemo(() => new URLSearchParams(search), [search]);

  const getQueryValueByName = useCallback(
    (name: string) => {
      return new URLSearchParams(search).get(name);
    },
    [search]
  );

  const getAllQueryValueByName = useCallback(
    (name: string) => {
      return new URLSearchParams(search).getAll(name);
    },
    [search]
  );

  const setQueryParam = useCallback(
    (key: string, value: string) => {
      if (!value || value === "") {
        query.delete(key);
      } else {
        query.set(key, value);
      }
      history.push({
        pathname,
        search: query.toString(),
      });
    },
    [history, pathname, query]
  );

  const objectToParam = useCallback((params: Object) => {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((val) => {
          searchParams.append(`${key}`, val);
        });
      } else {
        searchParams.append(key, value);
      }
    });
    return searchParams.toString();
  }, []);

  const setPathname = useCallback(
    (params?: Object) => {
      history.push({
        pathname,
        search: params ? objectToParam(params) : undefined,
      });
    },
    [history, objectToParam, pathname]
  );

  const setQueryArrayParam = useCallback(
    (key: string, values: string[] | number[]) => {
      query.delete(key);
      values.forEach((value) => {
        query.append(key, `${value}`);
      });
      history.push({
        pathname,
        search: query.toString(),
      });
    },
    [history, pathname, query]
  );

  const paramsToObject = useMemo(() => {
    let params = {};
    new URLSearchParams(query).forEach((value, key) => {
      let decodedKey = decodeURIComponent(key);
      let decodedValue = decodeURIComponent(value);
      // This key is part of an array
      if (decodedKey.endsWith("[]")) {
        decodedKey = decodedKey.replace("[]", "");
        // @ts-ignore
        params[decodedKey] || (params[decodedKey] = []);
        // @ts-ignore
        params[decodedKey].push(decodedValue);
        // Just a regular parameter
      } else {
        // @ts-ignore
        params[decodedKey] = decodedValue;
      }
    });
    return params;
  }, [query]);

  return {
    query,
    getQueryValueByName,
    getAllQueryValueByName,
    setQueryParam,
    setPathname,
    setQueryArrayParam,
    paramsToObject,
    objectToParam,
  };
};
