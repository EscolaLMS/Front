import React, { createContext, useState } from "react";

export const ConsultationModalContext = createContext<{
  isModalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  consultationData: {
    consultationTermId: number;
    term: string;
    consultationId?: number;
  } | null;
  setConsultationData: (
    data: {
      consultationTermId: number;
      term: string;
      consultationId?: number;
    } | null
  ) => void;
} | null>(null);

export const ConsultationModalProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [consultationData, setConsultationData] = useState<{
    consultationTermId: number;
    term: string;
    consultationId?: number;
  } | null>(null);

  return (
    <ConsultationModalContext.Provider
      value={{
        isModalOpen,
        setModalOpen,
        consultationData,
        setConsultationData,
      }}
    >
      {children}
    </ConsultationModalContext.Provider>
  );
};
