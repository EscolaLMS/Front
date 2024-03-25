import React, { useState } from "react";
import styled from "styled-components";
import { CourseCard } from "@escolalms/components/lib/components/molecules/CourseCard/CourseCard";
import { API } from "@escolalms/sdk/lib";
import BookTermModal from "@/components/Book/BookTermModal";
import ConsultationCardButtons from "./Buttons";
import ConsultationCardContent from "./Content";
import ConsultationCardImage from "./Image";

const ConsultationCardStyles = styled.div`
  .course-card-buttons-group {
    margin: 0;
    width: 100%;

    button {
      width: 100%;
      margin: 0;
    }
  }
`;

interface ConsultationCardProps {
  consultation: API.Consultation;
}

const ConsultationCard: React.FC<ConsultationCardProps> = (props) => {
  const { consultation } = props;
  const [showBookTerm, setShowBookTerm] = useState(false);

  return (
    <ConsultationCardStyles>
      <CourseCard
        id={consultation.id}
        image={<ConsultationCardImage consultation={consultation} />}
        title={`${consultation.name}`}
        footer={<ConsultationCardContent consultation={consultation} />}
        actions={
          <ConsultationCardButtons
            consultation={consultation}
            showBookTerm={(value) => setShowBookTerm(value)}
          />
        }
      />
      {/* Book term modal */}
      <BookTermModal
        visible={showBookTerm}
        onClose={() => setShowBookTerm(false)}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        consultation={consultation as any}
      />
    </ConsultationCardStyles>
  );
};

export default ConsultationCard;
