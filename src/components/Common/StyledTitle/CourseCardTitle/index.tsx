import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import React from "react";
import styled from "styled-components";

type BaseTextProps = React.ComponentProps<typeof Title>;

const CourseCardTitle = styled(Title)<BaseTextProps>`
  margin-bottom: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 75px;
`;

export default CourseCardTitle;
