import React, { ReactElement, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import AuthForm from "../../forms/AuthForm";
import { useLocation, useHistory } from "react-router-dom";
import qs from "query-string";
import { IAuthState } from "../../redux/auth/reducer";
import { IRootState } from "../../interfaces/redux";
import { useSelector } from "react-redux";
import SocialButtons from "../../components/SocialButtons";

const ResetPasswordPage: React.FC = (): ReactElement => {
  const location = useLocation();
  const { email, token } = qs.parse(location.search);
  const auth: IAuthState = useSelector<IRootState, IAuthState>(
    (state): IAuthState => state.Auth
  );
  const history = useHistory();

  useEffect((): void => {
    auth.resetPassword && history.push("/login");
  }, [auth]);

  return (
    <AuthLayout>
      <div className="auth-page__form-wrapper">
        <h2>Set new password</h2>
        <AuthForm
          isRegister={false}
          resetPassword
          forResetPassword={{
            email: String(email),
            token: String(token),
          }}
        />
        <span className="auth-page__or">or</span>
        <SocialButtons />
        <p className="auth-page__go-to-login">
          Already have an account? <Link to="/login">Log in here</Link>
        </p>
      </div>
    </AuthLayout>
  );
};
export default ResetPasswordPage;
