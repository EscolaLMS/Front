import { useMemo, useContext } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";

export const useRoles = () => {
  const { user } = useContext(EscolaLMSContext);

  const isTutor = useMemo(() => !!user.value?.roles?.includes("tutor"), [user]);
  const isStudent = useMemo(
    () => !!user.value?.roles?.includes("student"),
    [user]
  );

  return {
    isTutor,
    isStudent,
  };
};
