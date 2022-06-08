import React from "react";
import { Downloads } from "@escolalms/components/lib/components/molecules/Downloads/Downloads";
import styled from "styled-components";
import { t } from "i18next";
import { API } from "@escolalms/sdk/lib";

type Props = {
  resources: API.TopicResource[];
  subtitle: string;
};

const StyledDownloads = styled.div`
  margin-top: 100px;
`;

const CourseDownloads: React.FC<Props> = ({ resources, subtitle }) => {
  const mappedResources = resources.map((item) => {
    return { href: item.url, fileName: item.name };
  });
  return (
    <StyledDownloads>
      <Downloads
        subtitle={subtitle}
        title={t<string>("CourseProgram.TopicAttachment")}
        downloads={mappedResources}
      />
    </StyledDownloads>
  );
};

export default CourseDownloads;
