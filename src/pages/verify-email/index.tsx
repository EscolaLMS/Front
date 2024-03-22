import React, { useContext, useEffect, useState, useCallback } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Layout from "@/components/_App/Layout";
import { useTranslation } from "react-i18next";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { Spin } from "@escolalms/components/lib/components/atoms/Spin/Spin";
import { useTheme } from "styled-components";
import routeRoutes from "@/components/Routes/routes";
import { ThankYouIcon } from "@/icons/index";
import styled from "styled-components";
import { getStylesBasedOnTheme } from "@escolalms/components/lib/utils/utils";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";

const StyledEmailConfirmation = styled.div`
  background-color: ${({ theme }) => theme.gray4};

  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 991px) {
    height: 100%;
    padding: 100px 0px;
    text-align: center;
  }

  .content-wrapper {
    background: ${({ theme }) =>
      getStylesBasedOnTheme(theme.mode, theme.black, theme.white, theme.white)};
    border-radius: ${({ theme }) => theme.cardRadius}px;
    padding: 98px 20px;
    width: 100%;
    min-width: 600px;
    display: grid;
    place-content: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 991px) {
      min-width: auto;
      padding: 20px;
      width: auto;
    }
    svg {
      margin: 20px 0px;
    }
    h2 {
      margin-top: 20px;
    }
  }
`;

const VerifyEmail: React.FC = () => {
  const { push } = useHistory();
  const { search } = useLocation();
  const id = search && search?.split("&")[0]?.split("=")[1];
  const hash = search && search?.split("&")[1]?.split("=")[1];
  const { t } = useTranslation();
  const theme = useTheme();
  const { emailVerify } = useContext(EscolaLMSContext);

  const [state, setState] = useState({
    loading: false,
    state: "init",
    isVerified: false,
    message: "",
  });

  const verifyEmail = useCallback(async () => {
    setState((prevState) => ({
      ...prevState,
      loading: true,
    }));

    try {
      const request =
        id && hash && (await emailVerify(String(id), String(hash)));

      if (request) {
        setState((prevState) => ({
          ...prevState,
          state: "success",
          message: request.message,
          isVerified: true,
        }));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setState((prevState) => ({
        ...prevState,
        loading: false,
      }));
    }
  }, [id, hash, emailVerify]);

  useEffect(() => {
    if (!hash) {
      push(routeRoutes.home);
    }
    id && hash && verifyEmail();
  }, [id, hash, verifyEmail, push]);

  return (
    <Layout>
      <StyledEmailConfirmation className="profile-authentication-area">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12 col-md-12">
              <div className="content-wrapper">
                <ThankYouIcon />
                {state.loading && <Spin color={theme.primaryColor} />}{" "}
                {state.isVerified && (
                  <Title level={2}>{t("EmailWasVerified")}</Title>
                )}
              </div>
            </div>
          </div>
        </div>
      </StyledEmailConfirmation>
    </Layout>
  );
};

export default VerifyEmail;
