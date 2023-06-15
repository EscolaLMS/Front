import React, { useState } from "react";
import { CourseCard } from "@escolalms/components/lib/components/molecules/CourseCard/CourseCard";
import { API } from "@escolalms/sdk/lib";
import BookTermModal from "@/components/BookTermModal";
import ConsultationCardButtons from "./Buttons";
import ConsultationCardContent from "./Content";
import ConsultationCardImage from "./Image";

interface ConsultationCardProps {
  consultation: API.Consultation;
}

const ConsultationCard: React.FC<ConsultationCardProps> = (props) => {
  const { consultation } = props;
  const [showBookTerm, setShowBookTerm] = useState(false);

  return (
    <>
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
        consultation={consultation as any}
      />
    </>
  );
};

export default ConsultationCard;
