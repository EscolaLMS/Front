import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import styled from "styled-components";

const InfoBoxStyles = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;

  .title {
    margin: 0.2em 0;
  }

  .content {
    margin: 0.2em 0;
    font-weight: 700;
    color: ${({ theme: { primaryColor } }) => primaryColor};
  }
`;

interface InfoBoxProps {
  title: string | React.ReactElement;
  content: string | React.ReactElement;
}

const InfoBox = ({ title, content }: InfoBoxProps) => {
  return (
    <InfoBoxStyles>
      {typeof title === "string" ? (
        <Text className="title">{title}</Text>
      ) : (
        title
      )}
      {typeof content === "string" ? (
        <Text className="content">{content}</Text>
      ) : (
        content
      )}
    </InfoBoxStyles>
  );
};

export default InfoBox;
