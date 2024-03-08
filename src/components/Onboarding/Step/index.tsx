import {
  OnboardingOption,
  OnboardingStep,
  OnboardingStepType,
} from "@/components/Onboarding";
import SlideOption from "@/components/Onboarding/Step/slide";
import ResponsiveImage from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import { Radio, Text, Title } from "@escolalms/components/lib/index";
import { getStylesBasedOnTheme } from "@escolalms/components/lib/utils/utils";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { useCallback, useContext } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const StyledStep = styled.div`
  .step-image {
    z-index: 0;
  }
  > h4 {
    margin-top: 20px;
  }
  .options {
    margin-top: 30px;
    margin-bottom: 160px;
    .option {
      &:not(:last-child) {
        margin-bottom: 26px;
        @media (max-width: 768px) {
          margin-bottom: 7px;
        }
      }
    }

    &.buttons {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 7px;
    }
  }
`;

const ButtonOption = styled.button<{ $isActive: boolean }>`
  all: unset;
  border-radius: 20px;
  font-size: 14px;
  font-family: ${({ theme }) => theme.font};
  color: ${({ theme }) => theme.textColor};
  border: 1px solid
    ${({ theme, $isActive }) => ($isActive ? theme.primaryColor : "#E0E0E0")};
  padding: 11px 17px;
`;

const StyledHint = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.cardRadius}px;
  background-color: ${({ theme }) =>
    getStylesBasedOnTheme(theme.mode, theme.white, theme.textColor)};
  margin-bottom: 35px;
  padding: 11px 55px;
  z-index: 10;
  h4,
  p {
    color: ${({ theme }) =>
      getStylesBasedOnTheme(theme.mode, theme.textColor, theme.white)};
  }
  &:before {
    content: "";
    position: absolute;
    width: 11vmin;
    height: 6vmin;
    box-shadow: rgb(51, 51, 51) 4vmin -0.5vmin;
    border-radius: 50%;
    top: -1vmin;
    transform: translate(-140%, -3vmin) rotate(165deg);
    left: 20vmin;
    z-index: -1;
    @media (max-width: 768px) {
      left: 25vmin;
      width: 12vmin;
      height: 9vmin;
      box-shadow: rgb(51, 51, 51) 5vmin 0.5vmin;
    }
  }
`;

type Props = {
  step: OnboardingStep;
  onAnswer: (answer: string) => void;
  answers?: {
    [key: string]: string;
  };
};

const Step: React.FC<Props> = ({ step, onAnswer, answers }) => {
  const { settings } = useContext(EscolaLMSContext);
  const { i18n } = useTranslation();

  const getImage = useCallback(() => {
    if (step.image) {
      return settings.value.onboarding[step.image];
    } else {
      return null;
    }
  }, [step, settings.value.onboarding]);

  const renderProperOptions = useCallback(
    (option: OnboardingOption) => {
      switch (step.type) {
        case OnboardingStepType.radio:
          return (
            <Radio
              value={option.value}
              label={option.label[i18n.language]}
              name={step.data}
              onChange={(e) => onAnswer(e.target.value)}
            />
          );

        case OnboardingStepType.options:
          return (
            <ButtonOption
              $isActive={
                (answers && answers[step.data] === option.value) || false
              }
              onClick={() => onAnswer(option.value)}
            >
              {option.label[i18n.language]}
            </ButtonOption>
          );

        default:
          return (
            <Radio
              value={option.value}
              label={option.label[i18n.language]}
              name={step.data}
              onChange={(e) => onAnswer(e.target.value)}
            />
          );
      }
    },
    [i18n.language, step.type, step.data, onAnswer, answers]
  );

  return (
    <StyledStep>
      {step.image && getImage() && (
        <div className="step-image">
          <ResponsiveImage path={getImage()} srcSizes={[500, 750, 1000]} />
        </div>
      )}
      {step.hint && (
        <StyledHint>
          <Title level={4}>{step.hint.title[i18n.language]}</Title>
          <Text size="13">{step.hint.text[i18n.language]}</Text>
        </StyledHint>
      )}
      <Title level={4}>{step.question[i18n.language]}</Title>
      <div
        className={`options ${
          step.type === OnboardingStepType.options ? "buttons" : ""
        }`}
      >
        {step.type === OnboardingStepType.slide && (
          <SlideOption options={step.options} onAnswer={onAnswer} />
        )}
        {step.type !== OnboardingStepType.slide &&
          step.options.map((option, index) => (
            <div key={option.value + index} className="option">
              {renderProperOptions(option)}
            </div>
          ))}
      </div>
    </StyledStep>
  );
};
export default Step;
