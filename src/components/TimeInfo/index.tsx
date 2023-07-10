import styled from "styled-components";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { IconTime } from "../../icons";

const TimeInfoStyles = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.primaryColor};
  border-radius: 2px;
  align-items: center;

  .icon-container {
    display: flex;
    align-items: center;
    padding: 0.6rem;
    background-color: ${({ theme }) => theme.primaryColor};
  }

  .time {
    padding: 0.5rem;
    margin: 0 auto;
  }
`;

interface TimeInfoProps {
  time: string;
}

const TimeInfo = ({ time }: TimeInfoProps) => {
  return (
    <TimeInfoStyles>
      <div className="icon-container">
        <IconTime color="#ffffff" width="22px" height="22px" />
      </div>
      <Text className="time">{time}</Text>
    </TimeInfoStyles>
  );
};

export default TimeInfo;
