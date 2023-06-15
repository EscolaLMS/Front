import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";
import { Link, useHistory } from "react-router-dom";
import { useTheme } from "styled-components";
import { CourseCard } from "@escolalms/components/lib/components/molecules/CourseCard/CourseCard";
import ResponsiveImage from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import { API } from "@escolalms/sdk/lib";
import CourseImgPlaceholder from "@/components/CourseImgPlaceholder";
// import BreadCrumbs from "@escolalms/components/lib/components/atoms/BreadCrumbs/BreadCrumbs";
import Title from "@escolalms/components/lib/components/atoms/Typography/Title";
import Badge from "@escolalms/components/lib/components/atoms/Badge/Badge";
import Button from "@escolalms/components/lib/components/atoms/Button/Button";
import IconText from "@escolalms/components/lib/components/atoms/IconText/IconText";
import { IconLocation, UserIcon } from "../../../../../icons";

interface Props {
  webinar: API.Webinar;
  actions?: ReactNode;
}

const WebinarsContainerItem = ({ webinar, actions }: Props) => {
  const theme = useTheme();
  const history = useHistory();
  const { t } = useTranslation();
  return (
    <CourseCard
      id={webinar.id}
      mobile={isMobile}
      image={
        <Link to={`/webinar/${webinar.id}`} aria-label={webinar.name}>
          {webinar.image_path ? (
            <ResponsiveImage
              path={webinar.image_path}
              alt={webinar.name}
              srcSizes={[300, 600, 900]}
            />
          ) : (
            <CourseImgPlaceholder />
          )}
        </Link>
      }
      title={
        <Link to={`/webinar/${webinar.id}`} className="title">
          <Title level={4} as="h2">
            {webinar.name}
          </Title>
        </Link>
      }
      tags={
        <>
          {webinar.product?.tags?.map((tagName, index) => (
            <Badge key={index} color={theme.primaryColor}>
              <Link
                style={{ color: theme.white }}
                to={`/webinars/?tag=${tagName}`}
              >
                {/* @ts-ignore */}
                {tagName}
              </Link>
            </Badge>
          ))}
        </>
      }
      actions={
        actions ?? (
          <>
            <Button
              mode="secondary"
              onClick={() => history.push(`/webinar/${webinar.id}`)}
            >
              {t("StartNow")}
            </Button>
          </>
        )
      }
      footer={
        <>
          {webinar.users_count && webinar.users_count > 0 ? (
            <IconText
              icon={<UserIcon />}
              text={`${webinar.users_count} ${t<string>("Students")}`}
            />
          ) : (
            ""
          )}{" "}
          {/* {!!webinar.place && (
            <IconText icon={<IconLocation />} text={`${webinar.place}`} />
          )} */}
        </>
      }
    />
  );
};

export default WebinarsContainerItem;
