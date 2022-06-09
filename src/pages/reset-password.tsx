import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import Layout from "@/components/_App/Layout";
import { ResetPasswordForm } from "@escolalms/components";
import { isMobile } from "react-device-detect";
import { toast } from "react-toastify";
import { t } from "i18next";

const ResetPassword: React.FC = () => {
  const { push } = useHistory();
  const { search } = useLocation();
  const email = search && search.split("&")[0].split("=")[1];
  const token = search && search.split("&")[1].split("=")[1];
  React.useEffect(() => {
    !token && push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <div className="profile-authentication-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12">
              <ResetPasswordForm
                onSecondStepSuccess={() => {
                  push("/login");
                  toast.success(t<string>("LoginPage.ForgotSuccessStep2"));
                }}
                secondStep
                mobile={isMobile}
                return_url="#/reset-password"
                token={token}
                email={email}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResetPassword;
