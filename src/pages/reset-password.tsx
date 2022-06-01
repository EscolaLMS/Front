import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import Layout from "@/components/_App/Layout";
import { useTranslation } from "react-i18next";
import ResetForm from "@/components/Authentication/ResetForm";

const ResetPassword: React.FC = () => {
  const { t } = useTranslation();
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
              <ResetForm token={String(token)} email={String(email)} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResetPassword;
