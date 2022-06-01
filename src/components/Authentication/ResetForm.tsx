import React, { useContext } from "react";
import { Spinner } from "reactstrap";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { useHistory } from "react-router-dom";
import { FormState } from "./types";
import { useTranslation } from "react-i18next";
import { Input } from "@escolalms/components/lib/components/atoms/Input/Input";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

const StyledResetForm = styled.div`
  max-width: 440px;
  margin: 0 auto;

  h4 {
    font-size: ${isMobile ? "18px" : "28px"};
    margin-bottom: 30px;
    text-align: center;
  }
`;

const INITIAL_USER = {
  password: "",
};

const ResetForm: React.FC<{ token: string; email: string }> = ({
  token,
  email,
}) => {
  const { reset } = useContext(EscolaLMSContext);

  const [user, setUser] = React.useState(INITIAL_USER);
  const [state, setState] = React.useState<FormState>({ state: "input" });
  const { t } = useTranslation();
  const history = useHistory();

  React.useEffect(() => {
    const isPasswordSet = Object.values(user).every((el) => Boolean(el));

    setState({ state: isPasswordSet ? "input" : "disabled" });
  }, [user]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;

    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const resetHandler = React.useCallback(() => {
    reset({
      ...user,
      email,
      token,
    })
      .then(() => {
        setState({ state: "success", message: t("ResetPage.Changed") });
        setTimeout(() => {
          history.push("/authentication");
        }, 1500);
      })

      .catch((error: any /* ResponseError */) => {
        setState({ state: "error", error: error.data.message });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, email, reset, token]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState({ state: "loading" });
    resetHandler();
  };
  return (
    <StyledResetForm>
      <Title level={4}>{t("ResetPage.Set")}</Title>
      <form onSubmit={handleSubmit}>
        <Input
          id="reset-new-password"
          placeholder={t("ResetPage.NewPass")}
          name="password"
          type="password"
          value={user?.password}
          onChange={handleChange}
        />
        <Button
          type="submit"
          mode="secondary"
          className="login-form__submit-button"
          disabled={state.state === "disabled"}
        >
          {t("ResetPage.Reset")}
          {state.state === "loading" ? <Spinner color="success" /> : ""}
        </Button>
      </form>
    </StyledResetForm>
  );
};

export default ResetForm;
