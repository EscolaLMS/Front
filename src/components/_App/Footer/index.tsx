import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { ResponsiveImage } from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import styled from "styled-components";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { isMobile } from "react-device-detect";

const StyledFooter = styled.footer`
  padding: ${isMobile ? "50px 0 70px" : "100px 0"};
  .links-row {
    display: flex;
    flex-direction: ${isMobile ? "column" : "row"};
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    column-gap: ${isMobile ? "0" : "95px"};
    row-gap: ${isMobile ? "20px" : "0"};
    .single-link {
      text-decoration: none;
      transition: all 0.25s;
      opacity: 0.5;
      &:hover {
        opacity: 1;
      }
    }
  }
  .copyrights {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 42px;
    p {
      margin: 0;
      opacity: 0.5;
    }
    img {
      max-width: 100%;
      height: auto;
      max-height: 22px;
      margin-left: ${isMobile ? "10px" : "27px"};
    }
  }
`;

const Footer = () => {
  const { settings } = useContext(EscolaLMSContext);
  return (
    <StyledFooter>
      <div className="container">
        <div className="links-row">
          <Link className="single-link" to="/">
            <Text size="14">Strona główna</Text>
          </Link>
          <Link className="single-link" to="/courses">
            <Text size="14">Kursy</Text>
          </Link>
          <Link className="single-link" to="/authentication">
            <Text size="14">Logowanie/rejestracja</Text>
          </Link>
          <Link className="single-link" to="/cart">
            <Text size="14">Koszyk</Text>
          </Link>
          <Link className="single-link" to="/user/my-profile">
            <Text size="14">Profil użytkownika</Text>
          </Link>
        </div>
        <div className="copyrights">
          <Text size="14">Powered by</Text>
          <img src={settings?.global?.logo || ""} alt="" />
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
