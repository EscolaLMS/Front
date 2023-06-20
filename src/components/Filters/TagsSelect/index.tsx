import { FC, useContext } from "react";
import { useTranslation } from "react-i18next";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { Tags } from "@escolalms/components/lib/components/molecules/Tags/Tags";
import { isMobile } from "react-device-detect";
import { useTheme } from "styled-components";
// import { Tag } from "@escolalms/sdk/lib/types/api";

interface TagsSelectFilterProps {
  selectedTags?: string[];
  handleChange: (tag: string[]) => void;
}

const TagsSelectFilter: FC<TagsSelectFilterProps> = ({
  selectedTags,
  handleChange,
}) => {
  const { uniqueTags } = useContext(EscolaLMSContext);
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Tags
      mobile={isMobile}
      backgroundColor={theme.primaryColor}
      tags={uniqueTags?.list || []}
      label={t("Tags")}
      selectedTags={uniqueTags.list
        ?.map(({ title }) => title)
        .filter((tagName) => selectedTags?.includes(tagName))}
      handleChange={(tags) => {
        handleChange(tags);
      }}
    />
  );
};

export default TagsSelectFilter;
