import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";
import { Link, useHistory } from "react-router-dom";
import { CourseCard } from "@escolalms/components/lib/components/molecules/CourseCard/CourseCard";
import ResponsiveImage from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import { API } from "@escolalms/sdk/lib";
import CourseImgPlaceholder from "@/components/CourseImgPlaceholder";
import Title from "@escolalms/components/lib/components/atoms/Typography/Title";
import Button from "@escolalms/components/lib/components/atoms/Button/Button";
import IconText from "@escolalms/components/lib/components/atoms/IconText/IconText";
import { IconLocation, UserIcon } from "../../../../../icons";
import Tags from "@/components/Tags";
import CategoriesBreadCrumbs from "@/components/CategoriesBreadCrumbs";
import { Category, Tag } from "@escolalms/sdk/lib/types/api";

interface Props {
  event: API.StationaryEvent;
  actions?: ReactNode;
}

const EventsContainerItem = ({ event, actions }: Props) => {
  const history = useHistory();
  const { t } = useTranslation();
  return (
    <CourseCard
      id={event.id}
      mobile={isMobile}
      image={
        <Link to={`/event/${event.id}`} aria-label={event.name}>
          {event.image_path ? (
            <ResponsiveImage
              path={event.image_path}
              alt={event.name}
              srcSizes={[300, 600, 900]}
            />
          ) : (
            <CourseImgPlaceholder />
          )}
        </Link>
      }
      title={
        <Link to={`/event/${event.id}`} className="title">
          <Title level={4} as="h2">
            {event.name}
          </Title>
        </Link>
      }
      categories={
        <CategoriesBreadCrumbs
          categories={
            event.categories as EscolaLms.Categories.Models.Category[]
          }
          onCategoryClick={(id) => {
            history.push(`/events/?categories[]=${id}`);
          }}
        />
      }
      tags={
        <Tags
          tags={(event.product?.tags as Tag[]) || []}
          onTagClick={(tagName) => history.push(`/events/?tag=${tagName}`)}
        />
      }
      actions={
        actions ?? (
          <>
            <Button
              mode="secondary"
              onClick={() => history.push(`/event/${event.id}`)}
            >
              {t("StartNow")}
            </Button>
          </>
        )
      }
      footer={
        <>
          {event.users_count && event.users_count > 0 ? (
            <IconText
              icon={<UserIcon />}
              text={`${event.users_count} ${t<string>("Students")}`}
            />
          ) : (
            ""
          )}{" "}
          {!!event.place && (
            <IconText icon={<IconLocation />} text={`${event.place}`} />
          )}
        </>
      }
    />
  );
};

export default EventsContainerItem;
