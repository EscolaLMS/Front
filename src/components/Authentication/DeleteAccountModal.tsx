import { Modal } from "@escolalms/components";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const StyledDeleteModalConfirmation = styled.div`
  h3 {
    margin-bottom: 50px;
  }
  .actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

type Props = {
  closeModal: () => void;
  showModal: boolean;
  handleDeleteAccount: () => void;
  isLoading?: boolean;
};

const DeleteAccountModal: React.FC<Props> = ({
  closeModal,
  showModal,
  handleDeleteAccount,
  isLoading,
}) => {
  const { t } = useTranslation();
  return (
    <Modal
      onClose={() => closeModal()}
      visible={showModal}
      animation="zoom"
      maskAnimation="fade"
      destroyOnClose={true}
      width={468}
    >
      <StyledDeleteModalConfirmation>
        <Title level={3} style={{ textAlign: "center" }}>
          {t("MyProfilePage.DeleteAccountConfirmation")}
        </Title>
        <div className="actions">
          <Button mode="outline" onClick={() => closeModal()}>
            {t("ResetProgressModal.Cancel")}
          </Button>
          <Button loading={isLoading} onClick={handleDeleteAccount}>
            {t("MyProfilePage.Delete")}
          </Button>
        </div>
      </StyledDeleteModalConfirmation>
    </Modal>
  );
};

export default DeleteAccountModal;
