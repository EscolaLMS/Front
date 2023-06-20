import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";
import { Link, useHistory } from "react-router-dom";
import { differenceInHours } from "date-fns";

import { useTheme } from "styled-components";
import { CourseCard } from "@escolalms/components/lib/components/molecules/CourseCard/CourseCard";
import ResponsiveImage from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import { API } from "@escolalms/sdk/lib";
import CourseImgPlaceholder from "@/components/CourseImgPlaceholder";
import Title from "@escolalms/components/lib/components/atoms/Typography/Title";
import Badge from "@escolalms/components/lib/components/atoms/Badge/Badge";
import Button from "@escolalms/components/lib/components/atoms/Button/Button";
import IconText from "@escolalms/components/lib/components/atoms/IconText/IconText";
import { IconTime } from "../../../../../icons";

interface Props {
  webinar: API.Webinar & {
    deadline?: string;
  };
  actions?: ReactNode;
}

const WebinarsContainerItem = ({ webinar, actions }: Props) => {
  const theme = useTheme();
  const history = useHistory();
  const { t } = useTranslation();
  const duration =
    webinar.active_to && webinar.deadline
      ? differenceInHours(
          new Date(webinar.deadline),
          new Date(webinar.active_to)
        ) || null
      : null;
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
          {webinar.tags?.map(({ title }, index) => (
            <Badge key={index} color={theme.primaryColor}>
              <Link
                style={{ color: theme.white }}
                to={`/webinars/?tags[]=${title}`}
              >
                {/* @ts-ignore */}
                {title}
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
          {!!duration && (
            <IconText
              icon={<IconTime />}
              text={`${duration} ${duration === 1 ? t("Hour") : t("Hours")}`}
            />
          )}
        </>
      }
    />
  );
};

export default WebinarsContainerItem;
