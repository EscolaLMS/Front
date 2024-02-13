import React, { useContext, useEffect, useState, useCallback } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Layout from "@/components/_App/Layout";
import { useTranslation } from "react-i18next";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Spin } from "@escolalms/components/lib/components/atoms/Spin/Spin";
import { useTheme } from "styled-components";
import routeRoutes from "@/components/Routes/routes";

const VerifyEmail: React.FC = () => {
  const { push } = useHistory();
  const { search } = useLocation();
  const id = search && search?.split("&")[0]?.split("=")[1];
  const hash = search && search?.split("&")[1]?.split("=")[1];
  const { t } = useTranslation();
  const theme = useTheme();
  const { emailVerify } = useContext(EscolaLMSContext);

  const [state, setState] = useState({
    loading: false,
    state: "init",
    isVerified: false,
    message: "",
  });

  const verifyEmail = useCallback(async () => {
    setState((prevState) => ({
      ...prevState,
      loading: true,
    }));

    try {
      const request =
        id && hash && (await emailVerify(String(id), String(hash)));

      if (request) {
        setState((prevState) => ({
          ...prevState,
          state: "success",
          message: request.message,
          isVerified: true,
        }));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setState((prevState) => ({
        ...prevState,
        loading: false,
      }));
    }
  }, [id, hash, emailVerify]);

  useEffect(() => {
    if (!hash) {
      push(routeRoutes.home);
    }
    id && hash && verifyEmail();
  }, [id, hash, verifyEmail, push]);

  return (
    <Layout>
      <div className="profile-authentication-area">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12 col-md-12">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {state.loading && <Spin color={theme.primaryColor} />}{" "}
                {state.isVerified && (
                  <Text size="32">{t("EmailWasVerified")}</Text>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VerifyEmail;
