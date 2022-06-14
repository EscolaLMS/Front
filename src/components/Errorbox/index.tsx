import Layout from "@/components/_App/Layout";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ErrorBox: React.FC<{ error: string }> = ({ error }) => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container box-wrapper">
            <div className="alert alert-danger" role="alert">
              <h4 className="alert-heading">{t("Error")}</h4>
              <p> {error}</p>
              <hr />
              <p className="mb-0">
                {t("CoursePage.Preview.SeeOther")}{" "}
                <Link to="/courses">{t("Courses")}</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ErrorBox;
