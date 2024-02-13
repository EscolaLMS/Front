import { useTranslation } from "react-i18next";
import { fixContentForMarkdown } from "@escolalms/components/lib/utils/components/markdown";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import MarkdownRenderer from "@escolalms/components/lib/components/molecules/MarkdownRenderer/MarkdownRenderer";

interface DescriptionSectionProps {
  description?: string | null;
  title?: React.ReactElement | React.ReactElement[];
}

const DescriptionSection = ({
  description,
  title,
}: DescriptionSectionProps) => {
  const { t } = useTranslation();

  if (!description) {
    return null;
  }
  return (
    <>
      {description && fixContentForMarkdown(description) !== "" && (
        <section className="with-border">
          <Title level={4}>{title ?? t("SectionDescriptionTitle")}</Title>
          <MarkdownRenderer>{description}</MarkdownRenderer>
        </section>
      )}
    </>
  );
};

export default DescriptionSection;
