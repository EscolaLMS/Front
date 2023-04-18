import { PropsWithChildren, useCallback, useContext, useEffect } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { ConsultationsContext } from "./ConsultationsContext";
import { API } from "@escolalms/sdk/lib";
import { useSearchParams } from "../../hooks/useSearchParams";

const ConsultationsProvider: React.FC<PropsWithChildren> = (props) => {
  const { fetchConsultations, consultations, fetchCategories } =
    useContext(EscolaLMSContext);
  const { children } = props;
  const { query, getQueryValueByName, getAllQueryValueByName, setPathname } =
    useSearchParams();

  useEffect(() => {
    // Fetch categories when we start from consultations page
    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createParamsObject = useCallback(() => {
    const params_ = {
      page: Number(getQueryValueByName("page")) || 1,
      per_page: Number(getQueryValueByName("per_page")) || 8,
    };
    const categories = getAllQueryValueByName("categories[]");
    const name = getQueryValueByName("name");
    if (name) {
      // @ts-ignore
      params_["name"] = name;
    }
    if (categories && categories.length) {
      // @ts-ignore
      params_["categories[]"] = categories;
    }
    return params_;
  }, [getAllQueryValueByName, getQueryValueByName]);

  useEffect(() => {
    const obj = createParamsObject() as API.ConsultationParams;
    setPathname(obj);
    if (query.has("page")) {
      fetchConsultations(obj);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <ConsultationsContext.Provider value={{ consultations }}>
      {children}
    </ConsultationsContext.Provider>
  );
};

export default ConsultationsProvider;
