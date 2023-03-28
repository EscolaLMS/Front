import { useContext } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { fixContentForMarkdown } from "@escolalms/components/lib/utils/components/markdown";
import { Title } from "@escolalms/components";
import MarkdownRenderer from "@escolalms/components/lib/components/molecules/MarkdownRenderer/MarkdownRenderer";
import { useTranslation } from "react-i18next";

const EventDescription = () => {
  const { stationaryEvent } = useContext(EscolaLMSContext);
  const { t } = useTranslation();
  const description = stationaryEvent.value?.description;

  if (!description) {
    return null;
  }
  return (
    <>
      {description && fixContentForMarkdown(description) !== "" && (
        <section className="course-description-short with-border">
          <Title level={4}>{t("CoursePage.CourseDescriptionTitle")}</Title>
          <MarkdownRenderer>{description}</MarkdownRenderer>
        </section>
      )}
    </>
  );
};

export default EventDescription;
