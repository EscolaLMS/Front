import { Text } from "@escolalms/components/lib";
import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

type Props = {
  text?: string;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
  row-gap: 50px;
  height: 100vh;
  column-gap: 100px;
  flex-direction: ${isMobile ? "column" : "row"};
  padding: 0 30px;
  text-align: ${isMobile ? "center" : "left"};
`;

const TechnicalMaintenanceScreen: React.FC<Props> = ({ text }) => {
  return (
    <Container>
      <div>
        <img src={`/images/maintenance-bg.svg`} alt=" " />
      </div>
      <div>
        {text ? (
          <Text>{text}</Text>
        ) : (
          <Text>
            Dostęp do platformy ograniczony z powodu trwających prac
            technicznych
            <br />
            <br />
            Przepraszamy za utrudnienia. Zapraszamy wkrótce
          </Text>
        )}
      </div>
    </Container>
  );
};

export default TechnicalMaintenanceScreen;
