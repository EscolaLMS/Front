import React from "react";
import { CourseCard } from "@escolalms/components/lib/components/molecules/CourseCard/CourseCard";
import { API } from "@escolalms/sdk/lib";
import { ConsultationTutorCardStyles } from "./ConsultationTutorCardStyles";
import ConsultationTutorCardImage from "./Image";
import ConsultationTutorCardContent from "./Content";
import ConsultationTutorCardStatus from "./Status";

interface ConsultationTutorCardProps {
  consultation: API.AppointmentTerm;
}

const ConsultationTutorCard: React.FC<ConsultationTutorCardProps> = (props) => {
  const { consultation } = props;

  return (
    <ConsultationTutorCardStyles>
      <CourseCard
        id={consultation.consultation_term_id}
        image={<ConsultationTutorCardImage product={consultation} />}
        title={<ConsultationTutorCardStatus consultation={consultation} />}
        subtitle={<p>{consultation.related_product?.name}</p>}
        footer={<ConsultationTutorCardContent consultation={consultation} />}
      />
    </ConsultationTutorCardStyles>
  );
};

export default ConsultationTutorCard;
