import { useCallback, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { toast } from "@/utils/toast";
import routeRoutes from "@/components/Routes/routes";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";

const useDeleteAccountModal = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { deleteAccount, logout } = useContext(EscolaLMSContext);
  const history = useHistory();
  const { t } = useTranslation();

  const triggerDeleteAccount = useCallback(() => {
    setShowModal(true);
  }, []);

  const handleDeleteAccount = useCallback(() => {
    setLoading(true);
    deleteAccount().then(() => {
      toast(`${t("MyProfilePage.AccountDeleted")}`, "success");
      const logoutTimeout = setTimeout(() => {
        logout().then(() => {
          setLoading(false);
          history.push(routeRoutes.home);
        });
      }, 2000);
      return () => clearTimeout(logoutTimeout);
    });
  }, [deleteAccount, history, logout, t]);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, []);

  return {
    showModal,
    triggerDeleteAccount,
    handleDeleteAccount,
    closeModal,
    loading,
  };
};

export default useDeleteAccountModal;
