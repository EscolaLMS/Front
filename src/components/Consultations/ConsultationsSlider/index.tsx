import { Settings } from "react-slick";
import { SectionConsultationsSlider } from "@/components/Consultations/ConsultationsSlider/styles";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Col, Row } from "react-grid-system";
import { API } from "@escolalms/sdk/lib";
import ConsultationCard from "@/components/Consultations/ConsultationCard";
import { Slider } from "@escolalms/components/lib/components/atoms/Slider/Slider";
import { useState } from "react";

interface ConsultationsSliderProps {
  title?: string;
  category: string;
  consultations: API.Consultation[];
  sliderSettings?: Settings;
}

const defaultSliderSettings = {
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  draggable: false,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        draggable: true,
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
      },
    },
  ],
};

const ConsultationsSlider: React.FC<ConsultationsSliderProps> = (props) => {
  const {
    category,
    title = category,
    consultations,
    sliderSettings = defaultSliderSettings,
  } = props;

  const [dots] = useState(true);

  const filteredConsultations = consultations.filter((item) =>
    item.categories?.some(
      (cat: EscolaLms.Categories.Models.Category) => cat.name === category
    )
  );

  return (
    <SectionConsultationsSlider>
      <Title
        level={3}
        style={{
          marginBottom: 30,
        }}
      >
        {title}
      </Title>
      {filteredConsultations.length > 4 ? (
        <Slider
          settings={{
            ...sliderSettings,
            dots,
            onSwipe: () => {
              const allHiddenSlides = document.querySelectorAll(
                '.slick-slide[aria-hidden="true"]'
              );
              const allVisibleSlides = document.querySelectorAll(
                '.slick-slide[aria-hidden="false"]'
              );
              allVisibleSlides.forEach((visibleSlide) =>
                visibleSlide.removeAttribute("aria-modal")
              );
              allHiddenSlides.forEach((hiddenSlide) =>
                hiddenSlide.setAttribute("aria-modal", "true")
              );
            },
            onInit: () => {
              const allHiddenSlides = document.querySelectorAll(
                '.slick-slide[aria-hidden="true"]'
              );
              allHiddenSlides.forEach((hiddenSlide) =>
                hiddenSlide.setAttribute("aria-modal", "true")
              );
            },
          }}
          dotsPosition="top right"
        >
          {filteredConsultations.map((consultation) => (
            <ConsultationCard
              key={consultation.id}
              consultation={consultation}
            />
          ))}
        </Slider>
      ) : (
        <Row>
          {filteredConsultations.map((consultation) => (
            <Col key={consultation.id} xs={12} sm={6} md={4} lg={3}>
              <ConsultationCard consultation={consultation} />
            </Col>
          ))}
        </Row>
      )}
    </SectionConsultationsSlider>
  );
};

export default ConsultationsSlider;
