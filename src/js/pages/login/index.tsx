import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import AuthForm from "../../forms/AuthForm";
import SocialButtons from "../../components/SocialButtons";

const LoginPage: React.FC = (): ReactElement => {
  return (
    <AuthLayout>
      <div className="auth-page__form-wrapper">
        <h2>Login </h2>
        <small>
          <pre>student@escola-lms.com | secret</pre>
        </small>
        <AuthForm isRegister={false} />
        <span className="auth-page__or">or</span>
        <SocialButtons />
        <p className="auth-page__go-to-login">
          Don’t have an account yet? <Link to="/register">Register here</Link>
        </p>
      </div>
    </AuthLayout>
  );
};
export default LoginPage;
