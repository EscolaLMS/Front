import Modal from "@escolalms/components/lib/components/atoms/Modal/Modal";
import SuccessContent from "../BookTermModal/SuccessContent";

interface Props {
  onClose: () => void;
  visible: boolean;
}

const BookTermSuccessModal: React.FC<Props> = ({ onClose, visible }) => {
  return (
    <Modal
      onClose={onClose}
      visible={visible}
      animation="zoom"
      maskAnimation="fade"
      destroyOnClose={true}
      width={468}
    >
      <SuccessContent onClick={onClose} />
    </Modal>
  );
};

export default BookTermSuccessModal;
