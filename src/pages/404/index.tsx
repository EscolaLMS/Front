import Layout from "@/components/_App/Layout";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container } from "react-grid-system";

const Custom404 = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="error-area">
        <div className="d-table">
          <div className="d-table-cell">
            <Container>
              <div className="error-content">
                <img src={`/images/error.png`} alt="Error" />
                <h3>{t("Custom404Page.Info")}</h3>
                <p>{t("Custom404Page.NotFound")}</p>

                <div className="btn-box">
                  <Link to="/" className="default-btn">
                    <i className="flaticon-history"></i>
                    {t("Back")}
                    <span></span>
                  </Link>
                  <Link to="/" className="default-btn">
                    <i className="flaticon-home"></i> {t("Home")} <span></span>
                  </Link>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Custom404;
