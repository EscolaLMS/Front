import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";
import { Link, useHistory } from "react-router-dom";
import { differenceInHours } from "date-fns";

import { CourseCard } from "@escolalms/components/lib/components/molecules/CourseCard/CourseCard";
import ResponsiveImage from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import { API } from "@escolalms/sdk/lib";
import CourseImgPlaceholder from "@/components/CourseImgPlaceholder";
import Title from "@escolalms/components/lib/components/atoms/Typography/Title";
import Button from "@escolalms/components/lib/components/atoms/Button/Button";
import IconText from "@escolalms/components/lib/components/atoms/IconText/IconText";
import { IconTime } from "../../../../../icons";
import Tags from "@/components/Tags";
import { Tag } from "@escolalms/sdk/lib/types/api";

interface Props {
  webinar: API.Webinar;
  actions?: ReactNode;
  footer?: ReactNode;
}

const WebinarsContainerItem = ({ webinar, actions, footer }: Props) => {
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
        <Tags
          tags={webinar.tags as Tag[]}
          onTagClick={(tagName) => history.push(`/webinars/?tags[]=${tagName}`)}
        />
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
        footer ?? (
          <>
            {!!duration && (
              <IconText
                icon={<IconTime />}
                text={`${duration} ${duration === 1 ? t("Hour") : t("Hours")}`}
              />
            )}
          </>
        )
      }
    />
  );
};

export default WebinarsContainerItem;
