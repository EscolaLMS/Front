import {
  Text,
  TextProps,
} from "@escolalms/components/lib/components/atoms/Typography/Text";
import { useTheme } from "styled-components";
import { StyledSpan, StyledSpanTail, StyledSpanChild } from "./styles";

type Props = TextProps & {
  text: string;
  length?: number;
  tail?: string;
};

export const TextEllipsis = ({
  text,
  length = 30,
  tail = "...",
  ...props
}: Props) => {
  const theme = useTheme();
  const firstText = text.slice(0, length);
  const secondText = text.slice(length, text.length);

  return (
    <Text {...props}>
      <StyledSpan color={theme.primaryColor}>
        {firstText}
        {secondText && (
          <>
            <StyledSpanTail>{tail}</StyledSpanTail>
            <StyledSpanChild>{secondText}</StyledSpanChild>
          </>
        )}
      </StyledSpan>
    </Text>
  );
};
