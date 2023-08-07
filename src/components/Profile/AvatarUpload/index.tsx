import React, {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Avatar } from "@escolalms/components/lib/components/atoms/Avatar/Avatar";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

type Props = {
  size?: "small" | "extraSmall";
};

const Container = styled.div`
  margin-bottom: ${isMobile ? "0" : "21px"};
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  gap: 15px;

  .avatar-upload-text {
    margin: 0;
    cursor: pointer;
  }
`;

const AvatarUpload: React.FC<Props> = ({ size }) => {
  const [selectedAvatar, setSelectedAvatar] = useState<File | null>(null);
  const { updateAvatar, user } = useContext(EscolaLMSContext);

  const handleAvatarChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
        const file = event.target.files[0];
        setSelectedAvatar(file);
      }
    },
    []
  );

  const handleUpload = useCallback(() => {
    if (selectedAvatar) {
      updateAvatar(selectedAvatar);
      setSelectedAvatar(null);
    }
  }, [selectedAvatar, updateAvatar]);

  useEffect(() => {
    handleUpload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAvatar]);
  return (
    <Container>
      <Avatar size={size} src={user.value?.avatar} alt="" />
      <label htmlFor="fileInput">
        <Text className="avatar-upload-text" size="12">
          Dodaj nowe zdjęcie
        </Text>
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleAvatarChange}
        />
      </label>
    </Container>
  );
};

export default AvatarUpload;
