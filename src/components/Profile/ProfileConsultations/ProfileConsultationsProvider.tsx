import { PropsWithChildren, createContext, useState } from "react";
import BookTermSuccessModal from "@/components/Book/BookTermSuccessModal";

export const ProfileConsultationsContext = createContext({
  showBookTermSuccess: false,
  setShowBookTermSuccess: (value: boolean) => {},
});

const ProfileConsultationsProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [showBookTermSuccess, setShowBookTermSuccess] = useState(false);

  return (
    <ProfileConsultationsContext.Provider
      value={{
        showBookTermSuccess,
        setShowBookTermSuccess,
      }}
    >
      {children}
      {/* Success modal */}
      <BookTermSuccessModal
        visible={showBookTermSuccess}
        onClose={() => setShowBookTermSuccess(false)}
      />
    </ProfileConsultationsContext.Provider>
  );
};

export default ProfileConsultationsProvider;
