import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { useContext, useEffect, useMemo } from "react";

export function usePages() {
  const { fetchPages, pages } = useContext(EscolaLMSContext);

  useEffect(() => {
    fetchPages().then(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const collection = useMemo(() => {
    return pages?.list?.data || [];
  }, [pages.list]);

  return {
    collection,
  } as const;
}
