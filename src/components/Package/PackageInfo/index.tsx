import { useContext } from "react";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";
import Title from "@escolalms/components/lib/components/atoms/Typography/Title";
import ResponsiveImage from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import LabelListItem from "@escolalms/components/lib/components/molecules/LabelListItem/LabelListItem";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { Medal, StarOrange, ThumbUp } from "@/icons/index";
import { PackageInfoStyles } from "./styles";

export const PackageInfo = () => {
  const { product } = useContext(EscolaLMSContext);
  const { t } = useTranslation();

  if (!product.value) {
    return null;
  }
  return (
    <PackageInfoStyles>
      <section className="package-main-info with-border">
        <Row>
          <Col lg={7}>
            <Title mobile={isMobile} level={2}>
              {product.value.name}
            </Title>
            <div className="labels-row">
              <div className="single-label">
                <LabelListItem mobile={isMobile} title="90%" icon={<ThumbUp />}>
                  {t("CoursePage.Recommends")}
                </LabelListItem>
              </div>
              <div className="single-label">
                <LabelListItem
                  mobile={isMobile}
                  title={t<string>("CoursePage.Guarantee")}
                  icon={<Medal />}
                >
                  {t("CoursePage.Satisfaction")}
                </LabelListItem>
              </div>
              <div className="single-label">
                <LabelListItem
                  mobile={isMobile}
                  title="5.0"
                  icon={<StarOrange />}
                >
                  {t("CoursePage.AvarageRating")}
                </LabelListItem>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            {product.value.poster_path && (
              <div className="image-wrapper">
                <ResponsiveImage
                  path={product.value.poster_path}
                  srcSizes={[790 * 0.5, 790, 2 * 790]}
                />
              </div>
            )}
          </Col>
        </Row>
        <div className="labels-row labels-row--bottom">
          {product.value.categories && product.value.categories.length > 0 && (
            <div className="single-label">
              <LabelListItem
                title={t("CoursePage.CourseCategory")}
                variant={"label"}
              >
                {product.value.categories[0].name}
              </LabelListItem>
            </div>
          )}
          {/* {product.value.started_at && (
            <div className="single-label">
              <LabelListItem
                title={t("CoursePage.StartDate")}
                variant={"label"}
              >
                {product.value.started_at
                  ? formatDate(product.value.started_at)
                  : "---"}
              </LabelListItem>
            </div>
          )} */}
        </div>
      </section>
    </PackageInfoStyles>
  );
};
