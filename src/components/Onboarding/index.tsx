import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Pagination } from "swiper/modules";
import { Swiper as SwiperType } from "swiper/types";
import Container from "@/components/Common/Container";
import Step from "@/components/Onboarding/Step";
import { Button } from "@escolalms/components/lib/index";
import styled from "styled-components";
import { Col } from "react-grid-system";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/pagination";

const StyledOnboarding = styled.div`
  padding-top: 100px;
  position: relative;

  .onboarding__content {
    width: 100%;
    position: relative;
    .swiper-pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      .swiper-pagination-bullet {
        width: 8px;
        height: 8px;
        &.swiper-pagination-bullet-active {
          background-color: ${({ theme }) => theme.primaryColor} !important;
        }
      }
    }
    .next-step {
      margin: 0 auto;
      position: absolute;
      bottom: 60px;
      left: 0;
      right: 0;
      max-width: 265px;
      z-index: 10;
    }
  }
`;

export type Translations = {
  [lang: string]: string;
};

export type OnboardingOption = {
  value: string;
  label: Translations;
};

export enum OnboardingStepType {
  radio = "radio",
  options = "options",
}

export type OnboardingStep = {
  type: keyof typeof OnboardingStepType;
  data: string;
  order: number;
  question: Translations;
  options: OnboardingOption[];
  hint?: {
    title: Translations;
    text: Translations;
  };
  image?: string;
};

type State = {
  steps: OnboardingStep[];
  currentStep: number;
  answers?: {
    [key: string]: string;
  };
};

const Onboarding = () => {
  const { settings, fetchSettings } = useContext(EscolaLMSContext);
  const { t } = useTranslation();
  const [state, setState] = useState<State>({
    steps: [],
    currentStep: 0,
    answers: {},
  });
  const swiperRef = useRef<SwiperType>();

  const getOnboardingSteps = useCallback(() => {
    const steps = Object.keys(settings.value.onboarding)
      .filter((key) => key.startsWith("step_"))
      .map((key) => settings.value.onboarding[key])
      .sort((step) => step.order);

    setState({
      steps: steps,
      currentStep: 0,
    });
  }, [settings]);

  useEffect(() => {
    fetchSettings();
    getOnboardingSteps();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchSettings]);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(state.currentStep);
    }
  }, [state.currentStep]);

  const nextStepValidation = useMemo(() => {
    const currentStep = state.steps[state.currentStep];

    const answer =
      currentStep && state.answers && state.answers[currentStep.data];

    if (answer) {
      return false;
    }
    if (state.currentStep === state.steps.length - 1) {
      console.log("Onboarding has ended");
    }
    return true;
  }, [state.steps, state.answers, state.currentStep]);

  return (
    <StyledOnboarding className="onboarding">
      <Container>
        <Col offset={{ lg: 3 }} lg={6}>
          <div className="onboarding__content">
            <Swiper
              className="onboarding__swiper"
              modules={[Navigation, A11y, Pagination]}
              slidesPerView={1}
              allowTouchMove={false}
              initialSlide={0}
              pagination={true}
              autoHeight
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {state.steps.map((step, index) => (
                <SwiperSlide key={index}>
                  <Step
                    answers={state.answers}
                    step={step}
                    onAnswer={(value) =>
                      setState((prev) => ({
                        ...prev,
                        answers: {
                          ...prev.answers,
                          [step.data]: value,
                        },
                      }))
                    }
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <Button
              className="next-step"
              disabled={nextStepValidation}
              onClick={() =>
                setState((prev) => ({
                  ...prev,
                  currentStep: prev.currentStep + 1,
                }))
              }
            >
              {t("Next")}
            </Button>
          </div>
        </Col>
      </Container>
    </StyledOnboarding>
  );
};

export default Onboarding;
