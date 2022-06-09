import React from "react";
import { Modal } from "@escolalms/components/lib/components/atoms/Modal/Modal";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Rate } from "@escolalms/components/lib/components/molecules/Rate/Rate";

type Props = {
  visible: boolean;
  onClose: () => void;
};

const RateCourse: React.FC<Props> = ({ visible, onClose }) => {
  return (
    <div>
      <Modal
        onClose={onClose}
        visible={visible}
        animation="zoom"
        maskAnimation="fade"
        destroyOnClose={true}
        width={800}
      >
        <Rate onSubmit={(rate) => console.log("Rate: ", rate)} />
      </Modal>
    </div>
  );
};

export default RateCourse;
