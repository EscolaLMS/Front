import { ReactNode } from "react";
import { API } from "@escolalms/sdk/lib";
import ConsultationCard from "@/components/Consultations/ConsultationCard";

interface Props {
  consultation: API.Consultation;
  actions?: ReactNode;
}

const ConsultationsContainerItem = ({ consultation }: Props) => {
  return <ConsultationCard consultation={consultation} showPrice />;
};

export default ConsultationsContainerItem;
