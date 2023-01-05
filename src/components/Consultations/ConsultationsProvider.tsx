import { PropsWithChildren, useContext, useEffect } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { ConsultationsContext } from "./ConsultationsContext";

const ConsultationsProvider: React.FC<PropsWithChildren> = (props) => {
  const { fetchConsultations, consultations } = useContext(EscolaLMSContext);
  const { children } = props;

  useEffect(() => {
    fetchConsultations({
      only_with_categories: true,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ConsultationsContext.Provider value={{ consultations }}>
      {children}
    </ConsultationsContext.Provider>
  );
};

export default ConsultationsProvider;
