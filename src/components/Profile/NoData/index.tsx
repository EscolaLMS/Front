import { Title, Button } from "@escolalms/components";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { useHistory } from "react-router-dom";
import { NoDataStyles } from "./styles";

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
  const history = useHistory();
  return (
    <NoDataStyles>
      <Title level={3}>{title}</Title>
      <Text className="small-text">{description}</Text>
      <Button onClick={() => history.push(buttonLocation)} mode="secondary">
        {buttonText}
      </Button>
    </NoDataStyles>
  );
};

export default ProfileNoData;
