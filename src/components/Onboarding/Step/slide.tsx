import { OnboardingOption } from "@/components/Onboarding";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import React, { useCallback, useEffect } from "react";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { Range, Direction } from "react-range";
import styled from "styled-components";

const STEP = 1;
const MIN = 1;

const StyledWrapper = styled.div`
  display: flex;
  align-items: "flex-start";
  padding: 24px 20px;
  flex-direction: column;
`;

const StyledMark = styled.div`
  margin-left: 30px;
  display: flex;
  right: -18px;
  align-items: center;
  justify-content: center;

  position: relative;
  .line {
    height: 1px;
    width: 11px;
    background-color: ${({ theme }) => theme.textColor};
  }
  .content {
    position: absolute;
    left: 40px;
    width: 300px;
  }
`;

const StyledTrack = styled.div<{ $isMobile: boolean }>`
  flex-grow: 1;
  width: 36px;
  display: flex;
  height: ${({ $isMobile }) => ($isMobile ? "250px" : "400px")};

  .track {
    position: relative;
    width: 4px;
    height: 100%;
    border-radius: 36px;
    background-color: ${({ theme }) => theme.primaryColor};
    align-self: center;
    &::before,
    &::after {
      position: absolute;
      top: -27px;
      left: 0;
      content: "";
      width: 4px;
      height: 40px;
      border-radius: 36px;
      background-color: ${({ theme }) => theme.primaryColor};
    }
    &::after {
      top: inherit;
      bottom: -27px;
    }
  }
`;

const StyledThumb = styled.div`
  height: 23px;
  width: 42px;
  border-radius: ${({ theme }) => theme.buttonRadius}px;
  background-color: ${({ theme }) => theme.primaryColor};
  box-shadow: 0px 3px 6px #00000029;
  position: relative;
  &::after {
    position: absolute;
    right: -9px;
    content: "";
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 11.5px 0px 12.5px 12px;
    transform: rotate(0deg);
    border-color: transparent transparent transparent
      ${({ theme }) => theme.primaryColor};
    transform: rotate(0deg);
  }
`;

type Props = {
  options: OnboardingOption[];
  onAnswer: (answer: string) => void;
};

const SlideOption: React.FC<Props> = ({ options, onAnswer }) => {
  const [values, setValues] = React.useState([1]);
  const MAX = options.length;
  const { i18n } = useTranslation();

  const handleChange = useCallback(
    (values: number[]) => {
      setValues(values);
      onAnswer(`${options[values[0] - 1]?.value}`);
    },
    [onAnswer, options]
  );

  useEffect(() => {
    onAnswer(`${options[0]?.value}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledWrapper>
      <Range
        step={STEP}
        min={MIN}
        max={MAX}
        direction={Direction.Down}
        values={values}
        onChange={(values) => handleChange(values)}
        rtl={false}
        renderMark={({ props, index }) => (
          <StyledMark {...props}>
            <div className="line"></div>
            <div className="content">
              <Text size="14">{options[index].label[i18n.language]}</Text>
            </div>
          </StyledMark>
        )}
        renderTrack={({ props, children }) => (
          <StyledTrack
            $isMobile={isMobile}
            role="button"
            tabIndex={0}
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
            }}
          >
            <div className="track" ref={props.ref}>
              {children}
            </div>
          </StyledTrack>
        )}
        renderThumb={({ props }) => (
          <StyledThumb
            {...props}
            style={{
              ...props.style,
            }}
          />
        )}
      />
    </StyledWrapper>
  );
};

export default SlideOption;
