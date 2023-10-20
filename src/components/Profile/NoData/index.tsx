import { Title, Button } from "@escolalms/components";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { NoDataStyles } from "./styles";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  description: string;
  buttonText: string;
  buttonLocation: string;
}

const ProfileNoData = ({
  title,
  description,
  buttonText,
  buttonLocation,
}: Props) => {
  return (
    <NoDataStyles>
      <Title level={3}>{title}</Title>
      <Text className="small-text">{description}</Text>
      <Link to={buttonLocation}>
        <Button mode="secondary">{buttonText}</Button>
      </Link>
    </NoDataStyles>
  );
};

export default ProfileNoData;
