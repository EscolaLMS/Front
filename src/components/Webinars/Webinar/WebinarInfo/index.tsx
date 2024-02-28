import { useContext } from "react";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";
import Title from "@escolalms/components/lib/components/atoms/Typography/Title";
import ResponsiveImage from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import LabelListItem from "@escolalms/components/lib/components/molecules/LabelListItem/LabelListItem";
import { formatDate } from "@/utils/date";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { WebinarInfoStyles } from "./WebinarInfoStyles";
import { Medal, StarOrange, ThumbUp } from "../../../../icons";

const WebinarInfo = () => {
  const { webinar } = useContext(EscolaLMSContext);
  const { t } = useTranslation();

  if (!webinar.value) {
    return null;
  }
  return (
    <WebinarInfoStyles>
      <section className="webinar-main-info with-border">
        <Row>
          <Col lg={7}>
            <Title mobile={isMobile} level={2}>
              {webinar.value.name}
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
            {webinar.value.image_path && (
              <div className="image-wrapper">
                <ResponsiveImage
                  path={webinar.value.image_path}
                  srcSizes={[790 * 0.5, 790, 2 * 790]}
                />
              </div>
            )}
          </Col>
        </Row>
        <div className="labels-row labels-row--bottom">
          {webinar.value.tags && webinar.value.tags.length > 0 && (
            <div className="single-label">
              <LabelListItem
                title={t("WebinarPage.WebinarTags")}
                variant={"label"}
              >
                {webinar.value.tags[0].title}
              </LabelListItem>
            </div>
          )}
          {webinar.value.active_from && (
            <div className="single-label">
              <LabelListItem
                title={t("WebinarPage.StartDate")}
                variant={"label"}
              >
                {webinar.value.active_from
                  ? formatDate(webinar.value.active_from)
                  : "---"}
              </LabelListItem>
            </div>
          )}
          {webinar.value.active_to && (
            <div className="single-label">
              <LabelListItem title={t("WebinarPage.EndDate")} variant={"label"}>
                {webinar.value.active_to
                  ? formatDate(webinar.value.active_to)
                  : "---"}
              </LabelListItem>
            </div>
          )}
        </div>
      </section>
    </WebinarInfoStyles>
  );
};

export default WebinarInfo;
