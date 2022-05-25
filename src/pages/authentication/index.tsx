import React, { useContext, useState } from "react";
import PageBanner from "@/components/Common/PageBanner";

import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Layout from "@/components/_App/Layout";

import { useLocation } from "react-router-dom";
import "./index.scss";
import { LoginForm, ResetPasswordForm } from "@escolalms/components";

const Authentication = () => {
  const { search } = useLocation();
  const { user, socialAuthorize } = useContext(EscolaLMSContext);
  const [view, setView] = useState<"login" | "forgotPassword">("login");
  const history = useHistory();
  const { t } = useTranslation();
  const token = search.split("?token=")[1];

  if (token) {
    socialAuthorize(token);
    setTimeout(() => {
      history.push("/");
    }, 1000);
  }

  if (!user.loading && !token && user.value) {
    history.push("/");
  }

  return (
    <Layout>
      <React.Fragment>
        <PageBanner
          pageTitle={t("Authentication")}
          homePageUrl="/"
          homePageText={t("Home")}
          activePageText={t("Authentication")}
        />

        <div className="profile-authentication-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-12">
                {view === "login" ? (
                  <LoginForm
                    onResetPasswordLink={() => setView("forgotPassword")}
                  />
                ) : (
                  <ResetPasswordForm backToLogin={() => setView("login")} />
                )}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </Layout>
  );
};

export default Authentication;
