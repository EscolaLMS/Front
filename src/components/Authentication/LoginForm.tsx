import React, { useContext } from "react";
import { Alert, Spinner } from "reactstrap";
import baseUrl from "../../utils/baseUrl";
import { EscolaLMSContext } from "@/escolalms/context";
import TempLogin from "../TempLogin";
import { FormState } from "./types";

const INITIAL_USER = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const { login, forgot } = useContext(EscolaLMSContext);

  const [user, setUser] = React.useState(INITIAL_USER);
  const [state, setState] = React.useState<FormState>({ state: "input" });
  const [isForgoten, setIsForgoten] = React.useState(false);

  React.useEffect(() => {
    const isUser = isForgoten
      ? user.email !== ""
      : Object.values(user).every((el) => Boolean(el));
    setState({ state: isUser ? "input" : "disabled" });
  }, [user, isForgoten]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const loginHandler = React.useCallback(() => {
    login({ ...user })
      .then((data) => {
        setState({ state: "input" });
      })
      .catch((error) => {
        setState({ state: "error", error: error.data.message });
      });
  }, [isForgoten, user]);

  const forgotHandler = React.useCallback(() => {
    forgot({
      email: user.email,
      return_url: `${baseUrl}/reset-password`,
    })
      .then((data) => {
        setState({
          state: "success",
          message: "We send a email for password reset",
        });
      })
      .catch((error) => {
        setState({ state: "error", error: error.data.message });
      });
  }, [isForgoten, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ state: "loading" });
    isForgoten ? forgotHandler() : loginHandler();
  };
  return (
    <div className="login-form">
      <h2>{isForgoten ? "Reset your password" : "Login"}</h2>
      {!isForgoten && <TempLogin />}

      <Alert
        color={
          state.state === "error"
            ? "danger"
            : state.state === "success"
            ? "success"
            : "danger"
        }
        isOpen={state.state === "error" || state.state === "success"}
        toggle={() => setState({ state: "input" })}
      >
        {state.state === "error" && state.error}
        {state.state === "success" && state.message}
      </Alert>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            className="form-control"
            placeholder="Email"
            name="email"
            type="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        {!isForgoten && (
          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              placeholder="Password"
              name="password"
              type="password"
              value={user?.password}
              onChange={handleChange}
            />
          </div>
        )}

        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-6 remember-me-wrap">
            {!isForgoten && (
              <p>
                <input type="checkbox" id="test2" />
                <label htmlFor="test2">Remember me</label>
              </p>
            )}
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6 lost-your-password-wrap">
            <a
              className="lost-your-password"
              onClick={(e) => [setIsForgoten(!isForgoten), e.preventDefault()]}
            >
              {isForgoten ? "Back" : "Lost your password?"}
            </a>
          </div>
        </div>

        <button type="submit" disabled={state.state === "disabled"}>
          {isForgoten ? "Send" : "Log In"}
          {state.state === "loading" ? <Spinner color="success" /> : ""}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
