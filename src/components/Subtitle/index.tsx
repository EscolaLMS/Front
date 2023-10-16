import { memo } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "styled-components";
import { TextEllipsis } from "../TextEllipsis";

interface Props {
  linkTo: string;
  subtitle: string | null | undefined;
  textLength?: number;
}

export const Subtitle = memo(({ linkTo, subtitle, textLength }: Props) => {
  const theme = useTheme();

  if (!subtitle) {
    return null;
  }
  return (
    <Link style={{ color: theme.primaryColor }} to={linkTo}>
      <TextEllipsis text={subtitle} bold size="12" length={textLength} />
    </Link>
  );
});

export const getSubtitleComponent = ({ ...props }: Props) => {
  if (!props.subtitle) {
    return undefined;
  }
  return <Subtitle {...props} />;
};
